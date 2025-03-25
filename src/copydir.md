# Copy Directory Script

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