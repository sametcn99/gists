# Glob Pattern Examples in TypeScript

```typescript
import glob from 'glob';
import { promisify } from 'util';
const globPromise = promisify(glob);

// Examples of glob patterns and their usage
async function globExamples() {
  // Match all TypeScript files in src directory and subdirectories
  const tsFiles = await globPromise('src/**/*.ts');
  
  // Match all test files
  const testFiles = await globPromise('**/*.test.{ts,tsx}');
  
  // Match files with specific extensions
  const sourceFiles = await globPromise('src/**/*.{ts,tsx,js,jsx}');
  
  // Exclude node_modules and dist directories
  const projectFiles = await globPromise('**/*.ts', {
    ignore: ['**/node_modules/**', '**/dist/**']
  });
  
  // Match files in specific directories
  const componentFiles = await globPromise('src/components/**/*.tsx');
  
  // Match files with specific naming pattern
  const hookFiles = await globPromise('src/**/*.hook.{ts,tsx}');
  
  // Match configuration files
  const configFiles = await globPromise('{tsconfig,package}.json');
  
  // Match markdown files excluding README
  const docs = await globPromise('docs/**/*.md', {
    ignore: ['**/README.md']
  });
  
  // Match specific file types in multiple directories
  const utilityFiles = await globPromise('{src,lib}/utils/**/*.ts');
  
  // Match files with numbers in name
  const versionedFiles = await globPromise('src/**/v[0-9]*.ts');
  
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
    versionedFiles
  };
}

export default globExamples;
```
