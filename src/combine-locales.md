# Combine and validate locale files

This script is designed to validate and combine locale files for a project. It checks for consistency between English and Turkish translations, ensuring that all keys are present in both languages. If any discrepancies are found, it provides detailed error messages to help identify the issues. The script also combines the JSON files from each language directory into a single file for each language, ensuring that the combined files are properly formatted and free of errors.

```typescript
import fs from 'fs'
import path from 'path'

interface KeyData {
  keys: Set<string>
  keysByFile: Map<string, string[]>
}

class LocaleError extends Error {
  public details?: any

  constructor(message: string, details?: any) {
    super(message)
    this.name = 'LocaleError'
    this.details = details
  }
}

// Function to ensure directory exists and has JSON files
function validateDirectory(dirPath: string, dirName: string): void {
  if (!fs.existsSync(dirPath)) {
    throw new LocaleError(`${dirName} directory does not exist: ${dirPath}`)
  }

  const files = fs.readdirSync(dirPath)
  const jsonFiles = files.filter((file) => file.endsWith('.json'))

  if (jsonFiles.length === 0) {
    throw new LocaleError(`No JSON files found in ${dirName} directory: ${dirPath}`)
  }
}

// Function to safely parse JSON with detailed error handling
function safeParseJson(filePath: string): any {
  try {
    let content = fs.readFileSync(filePath, 'utf8')

    // Remove UTF-8 BOM if present
    if (content.charCodeAt(0) === 0xfeff) {
      content = content.slice(1)
    }

    // Check for empty file
    if (!content.trim()) {
      throw new LocaleError(`Empty translation file: ${filePath}`)
    }

    const parsed = JSON.parse(content)

    // Validate that the content is an object
    if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
      throw new LocaleError(`Invalid translation file format. Expected an object: ${filePath}`)
    }

    return parsed
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new LocaleError(`Invalid JSON format in file: ${filePath}`, { originalError: error.message })
    }
    throw error
  }
}

// Function to get all keys from a directory's JSON files
function getAllKeys(dirPath: string): KeyData {
  const keys: Set<string> = new Set()
  const keysByFile: Map<string, string[]> = new Map()

  const files = fs.readdirSync(dirPath)
  files.forEach((file: string) => {
    if (file.endsWith('.json')) {
      const filePath = path.join(dirPath, file)
      const content = safeParseJson(filePath)
      const fileKeys = Object.keys(content)

      if (fileKeys.length === 0) {
        throw new LocaleError(`No translation keys found in file: ${filePath}`)
      }

      // Validate key format
      fileKeys.forEach((key) => {
        if (!key.match(/^[a-zA-Z0-9_.-]+$/)) {
          throw new LocaleError(`Invalid key format found: "${key}" in file: ${filePath}. Keys should only contain letters, numbers, underscores, dots, and hyphens.`)
        }
        keys.add(key)
      })

      keysByFile.set(file, fileKeys)
    }
  })

  return { keys, keysByFile }
}

// Function to compare keys between two language directories
function compareLanguageKeys(enPath: string, trPath: string): void {
  const enData = getAllKeys(enPath)
  const trData = getAllKeys(trPath)

  const enKeys = Array.from(enData.keys)
  const trKeys = Array.from(trData.keys)

  const missingInTr = enKeys.filter((key) => !trKeys.includes(key))
  const missingInEn = trKeys.filter((key) => !enKeys.includes(key))

  if (missingInTr.length > 0 || missingInEn.length > 0) {
    const details: { missingInTr?: string[]; missingInEn?: string[] } = {}
    let errorMessage = 'Translation key mismatch found:\n'

    if (missingInTr.length > 0) {
      errorMessage += '\nKeys missing in Turkish translations:\n'
      details.missingInTr = []
      missingInTr.forEach((key) => {
        for (const [file, keys] of enData.keysByFile.entries()) {
          if (keys.includes(key)) {
            const detail = `"${key}" (en/${file})`
            errorMessage += `- ${detail}\n`
            details.missingInTr!.push(detail)
          }
        }
      })
    }

    if (missingInEn.length > 0) {
      errorMessage += '\nKeys missing in English translations:\n'
      details.missingInEn = []
      missingInEn.forEach((key) => {
        for (const [file, keys] of trData.keysByFile.entries()) {
          if (keys.includes(key)) {
            const detail = `"${key}" (tr/${file})`
            errorMessage += `- ${detail}\n`
            details.missingInEn!.push(detail)
          }
        }
      })
    }

    throw new LocaleError(errorMessage, details)
  }
}

// Function to read and combine JSON files from a directory
function combineJsonFiles(dirPath: string): Record<string, any> {
  const combined: Record<string, any> = {}
  const files = fs.readdirSync(dirPath)

  files.forEach((file: string) => {
    if (file.endsWith('.json')) {
      const filePath = path.join(dirPath, file)
      const content = safeParseJson(filePath)
      const namespace = file.replace('.json', '')
      combined[namespace] = content
    }
  })

  return combined
}

// Ensure combined directory exists
function ensureCombinedDirExists(baseDir: string): void {
  const combinedDir = path.join(baseDir, 'combined')
  if (!fs.existsSync(combinedDir)) {
    try {
      fs.mkdirSync(combinedDir, { recursive: true })
    } catch (error) {
      throw new LocaleError(`Failed to create combined directory: ${combinedDir}`, { originalError: error instanceof Error ? error.message : 'Unknown error' })
    }
  }
}

// Safe write file function
function safeWriteFile(filePath: string, content: string): void {
  try {
    fs.writeFileSync(filePath, content, { encoding: 'utf8' })
  } catch (error) {
    throw new LocaleError(`Failed to write file: ${filePath}`, { originalError: error instanceof Error ? error.message : 'Unknown error' })
  }
}

try {
  const enPath = path.join(__dirname, 'en')
  const trPath = path.join(__dirname, 'tr')

  // Validate directories
  console.log('Validating language directories...')
  validateDirectory(enPath, 'English')
  validateDirectory(trPath, 'Turkish')

  // Ensure combined directory exists
  ensureCombinedDirExists(__dirname)

  // Compare keys between languages
  console.log('Checking translation key consistency between languages...')
  compareLanguageKeys(enPath, trPath)

  // If we get here, keys match between languages, so we can combine
  console.log('Checking and combining English translations...')
  const enCombined = combineJsonFiles(enPath)
  safeWriteFile(path.join(__dirname, 'combined', 'en.json'), JSON.stringify(enCombined, null, 2))

  console.log('Checking and combining Turkish translations...')
  const trCombined = combineJsonFiles(trPath)
  safeWriteFile(path.join(__dirname, 'combined', 'tr.json'), JSON.stringify(trCombined, null, 2))

  console.log('✅ Locale files have been checked and combined successfully!')
} catch (error) {
  console.error('❌ Error while processing locale files:')
  if (error instanceof LocaleError) {
    console.error(`${error.name}: ${error.message}`)
    if (error.details) {
      console.error('Details:', JSON.stringify(error.details, null, 2))
    }
  } else if (error instanceof Error) {
    console.error(`Unexpected error: ${error.message}`)
    if (error.stack) {
      console.error('Stack trace:', error.stack)
    }
  } else {
    console.error('An unknown error occurred:', error)
  }
  process.exit(1)
}
```
