# Combine and Validate Locale Files

## Overview

This advanced TypeScript utility manages multilingual application translation files, specifically focusing on synchronizing English and Turkish localization files. It provides real-time validation and automatic combining of locale JSON files, detecting missing translation keys, type mismatches, and format inconsistencies between languages. The script includes a file watcher that automatically processes changes, making it ideal for development workflows. With detailed error reporting and proper file management, this utility ensures translation consistency and completeness in multilingual applications.

```typescript
import { EventEmitter } from "events";
import fs from "fs";
import path from "path";

interface KeyData {
  keys: Set<string>;
  keysByFile: Map<string, string[]>;
}

interface TranslationError {
  message: string;
  details?: unknown;
}

type TranslationValue =
  | string
  | number
  | boolean
  | null
  | TranslationObject
  | TranslationArray;
type TranslationObject = { [key: string]: TranslationValue };
type TranslationArray = TranslationValue[];

class LocaleError extends Error {
  public details?: unknown;

  constructor(message: string, details?: unknown) {
    super(message);
    this.name = "LocaleError";
    this.details = details;
  }
}

class TranslationManager extends EventEmitter {
  private enPath: string;
  private trPath: string;
  private combinedPath: string;
  private watchers: fs.FSWatcher[] = [];
  private debounceTimeout: NodeJS.Timeout | null = null;
  private isProcessing = false;

  constructor(basePath: string) {
    super();
    this.enPath = path.join(basePath, "en");
    this.trPath = path.join(basePath, "tr");
    this.combinedPath = path.join(basePath, "combined");
  }

  private validateDirectory(dirPath: string, dirName: string): void {
    if (!fs.existsSync(dirPath)) {
      throw new LocaleError(`${dirName} directory does not exist: ${dirPath}`);
    }

    const files = fs.readdirSync(dirPath);
    const jsonFiles = files.filter((file) => file.endsWith(".json"));

    if (jsonFiles.length === 0) {
      throw new LocaleError(
        `No JSON files found in ${dirName} directory: ${dirPath}`,
      );
    }
  }

  private safeParseJson(filePath: string): TranslationObject {
    try {
      let content = fs.readFileSync(filePath, "utf8");

      // Remove UTF-8 BOM if present
      if (content.charCodeAt(0) === 0xfeff) {
        content = content.slice(1);
      }

      if (!content.trim()) {
        throw new LocaleError(`Empty translation file: ${filePath}`);
      }

      const parsed = JSON.parse(content);

      if (
        typeof parsed !== "object" ||
        parsed === null ||
        Array.isArray(parsed)
      ) {
        throw new LocaleError(
          `Invalid translation file format. Expected an object: ${filePath}`,
        );
      }

      return parsed as TranslationObject;
    } catch (error) {
      if (error instanceof SyntaxError) {
        throw new LocaleError(`Invalid JSON format in file: ${filePath}`, {
          originalError: error.message,
        });
      }
      throw error;
    }
  }

  private getNestedKeys(obj: TranslationObject, prefix = ""): string[] {
    const keys: string[] = [];

    for (const key in obj) {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      keys.push(fullKey);

      if (
        obj[key] &&
        typeof obj[key] === "object" &&
        !Array.isArray(obj[key])
      ) {
        keys.push(
          ...this.getNestedKeys(obj[key] as TranslationObject, fullKey),
        );
      }
    }

    return keys;
  }

  private getValueByPath(
    obj: TranslationObject,
    path: string,
  ): TranslationValue | undefined {
    return path.split(".").reduce<TranslationValue | undefined>((acc, part) => {
      if (acc && typeof acc === "object" && !Array.isArray(acc)) {
        return (acc as TranslationObject)[part];
      }
      return undefined;
    }, obj);
  }

  private getAllKeys(dirPath: string): KeyData {
    const keys: Set<string> = new Set();
    const keysByFile: Map<string, string[]> = new Map();

    const files = fs.readdirSync(dirPath);
    files.forEach((file: string) => {
      if (file.endsWith(".json")) {
        const filePath = path.join(dirPath, file);
        const content = this.safeParseJson(filePath);
        const fileKeys = this.getNestedKeys(content);

        if (fileKeys.length === 0) {
          throw new LocaleError(
            `No translation keys found in file: ${filePath}`,
          );
        }

        fileKeys.forEach((key) => {
          if (!key.match(/^[a-zA-Z0-9_.-]+$/)) {
            throw new LocaleError(
              `Invalid key format found: "${key}" in file: ${filePath}. Keys should only contain letters, numbers, underscores, dots, and hyphens.`,
            );
          }
          keys.add(key);
        });

        keysByFile.set(file, fileKeys);
      }
    });

    return { keys, keysByFile };
  }

  private compareLanguageKeys(): void {
    const enData = this.getAllKeys(this.enPath);
    const trData = this.getAllKeys(this.trPath);

    const enKeys = Array.from(enData.keys);
    const trKeys = Array.from(trData.keys);

    const missingInTr = enKeys.filter((key) => !trKeys.includes(key));
    const missingInEn = trKeys.filter((key) => !enKeys.includes(key));
    const typeMismatches: {
      key: string;
      enType: string;
      trType: string;
      enFile: string;
      trFile: string;
    }[] = [];

    enKeys.forEach((key) => {
      if (trKeys.includes(key)) {
        for (const [enFile, enFileKeys] of enData.keysByFile.entries()) {
          if (enFileKeys.includes(key)) {
            const enContent = this.safeParseJson(
              path.join(this.enPath, enFile),
            );
            const trContent = this.safeParseJson(
              path.join(this.trPath, enFile),
            );

            const enValue = this.getValueByPath(enContent, key);
            const trValue = this.getValueByPath(trContent, key);

            if (enValue !== undefined && trValue !== undefined) {
              const enType = Array.isArray(enValue) ? "array" : typeof enValue;
              const trType = Array.isArray(trValue) ? "array" : typeof trValue;

              if (enType !== trType) {
                typeMismatches.push({
                  key,
                  enType,
                  trType,
                  enFile,
                  trFile: enFile,
                });
              }
            }
          }
        }
      }
    });

    if (
      missingInTr.length > 0 ||
      missingInEn.length > 0 ||
      typeMismatches.length > 0
    ) {
      const details: {
        missingInTr?: string[];
        missingInEn?: string[];
        typeMismatches?: Array<{
          key: string;
          enType: string;
          trType: string;
          enFile: string;
          trFile: string;
        }>;
      } = {};
      let errorMessage = "Translation issues found:\n";

      if (missingInTr.length > 0) {
        errorMessage += "\nKeys missing in Turkish translations:\n";
        details.missingInTr = [];
        missingInTr.forEach((key) => {
          for (const [file, keys] of enData.keysByFile.entries()) {
            if (keys.includes(key)) {
              const detail = `"${key}" (en/${file})`;
              errorMessage += `- ${detail}\n`;
              details.missingInTr!.push(detail);
            }
          }
        });
      }

      if (missingInEn.length > 0) {
        errorMessage += "\nKeys missing in English translations:\n";
        details.missingInEn = [];
        missingInEn.forEach((key) => {
          for (const [file, keys] of trData.keysByFile.entries()) {
            if (keys.includes(key)) {
              const detail = `"${key}" (tr/${file})`;
              errorMessage += `- ${detail}\n`;
              details.missingInEn!.push(detail);
            }
          }
        });
      }

      if (typeMismatches.length > 0) {
        errorMessage += "\nType mismatches between translations:\n";
        details.typeMismatches = typeMismatches;
        typeMismatches.forEach(({ key, enType, trType, enFile, trFile }) => {
          const detail = `"${key}" has different types: ${enType} (en/${enFile}) vs ${trType} (tr/${trFile})`;
          errorMessage += `- ${detail}\n`;
        });
      }

      throw new LocaleError(errorMessage, details);
    }
  }

  private combineJsonFiles(dirPath: string): Record<string, TranslationObject> {
    const combined: Record<string, TranslationObject> = {};
    const files = fs.readdirSync(dirPath);

    files.forEach((file: string) => {
      if (file.endsWith(".json")) {
        const filePath = path.join(dirPath, file);
        const content = this.safeParseJson(filePath);
        const namespace = file.replace(".json", "");
        combined[namespace] = content;
      }
    });

    return combined;
  }

  private ensureCombinedDirExists(): void {
    if (!fs.existsSync(this.combinedPath)) {
      try {
        fs.mkdirSync(this.combinedPath, { recursive: true });
      } catch (error) {
        throw new LocaleError(
          `Failed to create combined directory: ${this.combinedPath}`,
          {
            originalError:
              error instanceof Error ? error.message : "Unknown error",
          },
        );
      }
    }
  }

  private safeWriteFile(filePath: string, content: string): void {
    try {
      fs.writeFileSync(filePath, content, { encoding: "utf8" });
    } catch (error) {
      throw new LocaleError(`Failed to write file: ${filePath}`, {
        originalError: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  private async processDictionaries(): Promise<void> {
    if (this.isProcessing) {
      return;
    }

    this.isProcessing = true;
    try {
      // Validate directories
      this.validateDirectory(this.enPath, "English");
      this.validateDirectory(this.trPath, "Turkish");

      // Ensure combined directory exists
      this.ensureCombinedDirExists();

      // Compare keys between languages
      this.compareLanguageKeys();

      // Combine translations
      const enCombined = this.combineJsonFiles(this.enPath);
      const trCombined = this.combineJsonFiles(this.trPath);

      // Write combined files
      this.safeWriteFile(
        path.join(this.combinedPath, "en.json"),
        JSON.stringify(enCombined, null, 2),
      );
      this.safeWriteFile(
        path.join(this.combinedPath, "tr.json"),
        JSON.stringify(trCombined, null, 2),
      );

      this.emit("success", "Translations processed successfully");
    } catch (error) {
      if (error instanceof LocaleError) {
        this.emit("error", { message: error.message, details: error.details });
      } else if (error instanceof Error) {
        this.emit("error", { message: error.message });
      } else {
        this.emit("error", { message: "An unknown error occurred" });
      }
    } finally {
      this.isProcessing = false;
    }
  }

  public startWatching(): void {
    if (this.watchers.length > 0) {
      return;
    }

    try {
      const watchOptions = { persistent: true, encoding: "utf8" as const };

      // Watch English translations directory
      const enWatcher = fs.watch(
        this.enPath,
        watchOptions,
        this.handleFileChange.bind(this),
      );
      this.watchers.push(enWatcher);

      // Watch Turkish translations directory
      const trWatcher = fs.watch(
        this.trPath,
        watchOptions,
        this.handleFileChange.bind(this),
      );
      this.watchers.push(trWatcher);

      this.emit("info", "Started watching translation files");
      this.processDictionaries(); // Initial processing
    } catch (error) {
      this.emit("error", {
        message: "Failed to start file watchers",
        details: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  private handleFileChange(eventType: string, filename: string | null): void {
    if (!filename || !filename.endsWith(".json")) {
      return;
    }

    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }

    // Debounce file changes to prevent multiple rapid processing
    this.debounceTimeout = setTimeout(() => {
      this.processDictionaries();
    }, 300);
  }

  public stopWatching(): void {
    if (this.watchers.length > 0) {
      this.watchers.forEach((watcher) => watcher.close());
      this.watchers = [];

      if (this.debounceTimeout) {
        clearTimeout(this.debounceTimeout);
        this.debounceTimeout = null;
      }
      this.emit("info", "Stopped watching translation files");
    }
  }
}

// Create and start the translation manager
const manager = new TranslationManager(__dirname);

manager
  .on("success", (message) => {
    console.log("✅", message);
  })
  .on("error", (error: TranslationError) => {
    console.error(`${new Date().toISOString()}❌ Error:`, error.message);
    if (error.details) {
      console.error("Details:", JSON.stringify(error.details, null, 2));
    }
  })
  .on("info", (message) => {
    console.log("ℹ️", message);
  });

manager.startWatching();
```
