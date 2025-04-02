# Copy Directory Utility

## Overview

This Node.js utility provides a robust solution for copying directories recursively in file system operations. The function handles both files and nested directories, preserving the entire structure and content during the copy process. It implements proper error handling with detailed logging and uses Node.js built-in file system modules for maximum compatibility. This utility is particularly useful for backup operations, build processes, or any scenario requiring programmatic directory duplication. The recursive approach ensures that complex directory hierarchies are properly maintained.

```javascript
// Import necessary modules
import { copyFileSync, mkdirSync, readdirSync } from "fs";
import path from "node:path";

// Define the function to copy a directory
export function copyDir(sourceDir, targetDir) {
  try {
    // Log a message indicating the directory is not found
    console.log("widgets directory is not found. Copying...");

    // Create the destination directory if it doesn't exist
    mkdirSync(targetDir, { recursive: true });

    // Read the contents of the source directory
    const entries = readdirSync(sourceDir, { withFileTypes: true });

    // Iterate over the contents of the source directory
    for (let entry of entries) {
      const srcPath = path.join(sourceDir, entry.name);
      const destPath = path.join(targetDir, entry.name);

      // Recursively copy directories, or copy files directly
      entry.isDirectory()
        ? copyDir(srcPath, destPath)
        : copyFileSync(srcPath, destPath);
    }

    // Log a message indicating successful copying
    console.log(`files copied from ${sourceDir} to ${targetDir}`);
  } catch (error) {
    // Log an error if copying fails
    console.error("Failed to copy widgets directory:", error);
  }
}
```
