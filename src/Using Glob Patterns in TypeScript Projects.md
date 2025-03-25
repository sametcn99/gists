# Using Glob Patterns in TypeScript Projects: A Comprehensive Guide with Detailed Character Explanations and Examples

## Introduction to Glob Patterns in TypeScript

Glob patterns are a powerful mechanism for matching file and directory names in a file system. In TypeScript projects, they play a crucial role in tasks such as file selection, automation, and maintaining a modular project structure. To harness the full power of glob patterns, it's essential to understand each character and its role in defining matching criteria. Let's dive into a detailed exploration of glob pattern characters:

### `*` (Asterisk)

- **Usage:** Represents any sequence of characters.

- **Example:** The pattern `*.ts` matches all files with a ".ts" extension in a directory.

### `?` (Question Mark)

- **Usage:** Matches any single character.

- **Example:** The pattern `file?.txt` matches files like "file1.txt" or "fileA.txt."

### `[ ]` (Square Brackets)

- **Usage:** Specifies a range of characters to match.

- **Example:** The pattern `[abc]file.txt` matches "afile.txt," "bfile.txt," or "cfile.txt."

### `[^ ]` (Caret within Square Brackets)

- **Usage:** Negates the character set, matches any character not in the specified set.

- **Example:** The pattern `[^0-9]` matches any character that is not a digit (0 to 9).

### `{ }` (Curly Braces)

- **Usage:** Allows for multiple options and matches one of them.

- **Example:** The pattern `{*.jpg,*.png}` matches files with either ".jpg" or ".png" extensions.

### `**` (Double Asterisk)

- **Usage:** Enables recursive matching across directories.

- **Example:** The pattern `src/**/*.ts` matches all ".ts" files in the "src" directory and its subdirectories.

### `\` (Backslash)

- **Usage:** Escapes special characters, treating them as literals.

- **Example:** The pattern `file\?name.txt` matches "file?name.txt."

### `!` (Exclamation Mark)

- **Usage:** Negates the pattern, excluding files that match the specified criteria.

- **Example:** The pattern `!(*-bak)` matches all files except those ending with "-bak."

### `+` (Plus Sign)

- **Usage:** Requires one or more occurrences of the preceding character or group.

- **Example:** The pattern `**/*.+(js|ts)` matches files with either a ".js" or ".ts" extension.

## Getting Started: Installing the Necessary Packages

Before we delve into practical examples, install the required packages. The commonly used packages are `glob` and `globby`. Run the following command in your terminal:

```bash
npm  install  glob
# or
npm  install  globby
```

Now, armed with a detailed understanding of glob pattern characters, let's explore practical examples in TypeScript.

### Example 1: Selecting TypeScript Files Synchronously

In this example, we use the `glob` package to synchronously select all TypeScript files within a specific directory:

```typescript
import * as glob from "glob";

const tsFiles = glob.sync("src/**/*.ts");
glob("src/**/*.ts", (err, tsFiles) => {
  console.log("Selected TypeScript files synchronously:", tsFiles);
});
```

Here, the glob pattern `src/**/*.ts` matches all ".ts" files under the `src` directory. The `glob.sync` method performs the file matching synchronously, and the result is printed to the console.

### Example 2: Asynchronous File Matching

For scenarios where asynchronous file matching is preferred, the `glob` package provides an asynchronous method:

```typescript
import * as glob from "glob";

glob("src/**/*.ts", (err, tsFiles) => {
  if (err) {
    console.error("Error during asynchronous file matching:", err);
    return;
  }
  console.log("Selected TypeScript files asynchronously:", tsFiles);
});
```

In this example, the asynchronous `glob` method accomplishes the same result as Example 1. Asynchronous methods are beneficial for non-blocking operations in TypeScript projects.

### Example 3: Using `tsconfig.json` for Glob Patterns

In TypeScript projects, you can incorporate glob patterns directly into the `tsconfig.json` file for compilation:

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es5",
    "outDir": "./dist",
    "rootDir": "./src",
    "include": ["src/**/*.ts"]
  }
}
```

Here, the `"include"` field specifies a glob pattern that includes all TypeScript files under the `src` directory during compilation. This approach contributes to maintaining a clean and modular codebase.

### Conclusion: Harnessing the Power of Glob Patterns in TypeScript

In summary, glob patterns offer a versatile solution for file selection and organization within TypeScript projects. Whether used synchronously or asynchronously, these patterns enhance the developer's ability to manage project structure effectively.
By mastering glob patterns, TypeScript developers can streamline workflows, automate tasks, and maintain a scalable and organized codebase. It's crucial to carefully choose and utilize these patterns to avoid unintended inclusions or exclusions of files.
Incorporating glob patterns into TypeScript projects empowers developers to create more maintainable and scalable codebases, contributing to a smoother development experience. Understanding each character in glob patterns ensures precise and intentional file selections without skipping any aspect.

### Useful Tool

[Glob Tester - https://toools.cloud/miscellaneous/glob-tester](https://toools.cloud/miscellaneous/glob-tester)

## Glob Pattern Examples in TypeScript

```typescript
import glob from "glob";
import { promisify } from "util";
const globPromise = promisify(glob);

// Examples of glob patterns and their usage
async function globExamples() {
  // Match all TypeScript files in src directory and subdirectories
  const tsFiles = await globPromise("src/**/*.ts");

  // Match all test files
  const testFiles = await globPromise("**/*.test.{ts,tsx}");

  // Match files with specific extensions
  const sourceFiles = await globPromise("src/**/*.{ts,tsx,js,jsx}");

  // Exclude node_modules and dist directories
  const projectFiles = await globPromise("**/*.ts", {
    ignore: ["**/node_modules/**", "**/dist/**"],
  });

  // Match files in specific directories
  const componentFiles = await globPromise("src/components/**/*.tsx");

  // Match files with specific naming pattern
  const hookFiles = await globPromise("src/**/*.hook.{ts,tsx}");

  // Match configuration files
  const configFiles = await globPromise("{tsconfig,package}.json");

  // Match markdown files excluding README
  const docs = await globPromise("docs/**/*.md", {
    ignore: ["**/README.md"],
  });

  // Match specific file types in multiple directories
  const utilityFiles = await globPromise("{src,lib}/utils/**/*.ts");

  // Match files with numbers in name
  const versionedFiles = await globPromise("src/**/v[0-9]*.ts");

  return {
    tsFiles,
    testFiles,
    sourceFiles,
    projectFiles,
    componentFiles,
    hookFiles,
    configFiles,
    docs,
    utilityFiles,
    versionedFiles,
  };
}

export default globExamples;
```
