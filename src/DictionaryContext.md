```typescript
'use client'

import { Dictionary, Locale, getDictionary } from '@/app/[lang]/dictionaries'
import { usePathname } from 'next/navigation'
import { createContext, useContext, useEffect, useState } from 'react'

type DictionaryContextType = {
  dictionary: Dictionary
  locale: Locale
}

export const DictionaryContext = createContext<DictionaryContextType | null>(null)

export const DictionaryProvider = ({ children }: { children: React.ReactNode }) => {
  const [dictionaryData, setDictionaryData] = useState<DictionaryContextType | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const loadDictionary = async () => {
      // Get locale from the first part of the path after /
      const locale = pathname?.split('/')[1] as Locale
      if (locale) {
        const dictionary = await getDictionary(locale)
        setDictionaryData({ dictionary, locale })
      }
    }

    loadDictionary()
  }, [pathname])

  if (!dictionaryData) {
    return null // or a loading spinner
  }

  return <DictionaryContext.Provider value={dictionaryData}>{children}</DictionaryContext.Provider>
}

export const useDictionary = () => {
  const context = useContext(DictionaryContext)
  if (context === null) {
    throw new Error('useDictionary must be used within a DictionaryProvider')
  }
  return context
}

// Helper function to get nested dictionary values using dot notation
export function t(dict: Dictionary, key: string, params?: Record<string, string>): string {
  const keys = key.split('.')
  let value: any = dict

  for (const k of keys) {
    if (value === undefined) return key
    value = value[k]
  }

  if (typeof value !== 'string') return key

  if (params) {
    return value.replace(/\{\{(\w+)\}\}/g, (_, key) => params[key] || `{{${key}}}`)
  }

  return value
}

```
