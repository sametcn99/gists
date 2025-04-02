# Dictionary Context Provider

## Overview

This React Context API implementation provides a comprehensive dictionary management system for web applications. It creates a global state for dictionary entries with complete TypeScript type safety, offering functions for adding, removing, updating, and searching dictionary items. Each dictionary entry includes rich metadata like part of speech and usage examples. This provider is ideal for language learning applications, terminology management systems, or any application requiring vocabulary management. The implementation follows React best practices with proper context initialization, state management, and consumer error handling.

```tsx
import { createContext, useContext, ReactNode, useState } from "react";

interface DictionaryItem {
  id: string;
  word: string;
  definition: string;
  examples: string[];
  partOfSpeech: string;
}

interface DictionaryContextType {
  dictionary: DictionaryItem[];
  addWord: (word: DictionaryItem) => void;
  removeWord: (id: string) => void;
  updateWord: (id: string, word: Partial<DictionaryItem>) => void;
  findWord: (word: string) => DictionaryItem | undefined;
}

const DictionaryContext = createContext<DictionaryContextType | undefined>(
  undefined,
);

export function DictionaryProvider({ children }: { children: ReactNode }) {
  const [dictionary, setDictionary] = useState<DictionaryItem[]>([]);

  const addWord = (word: DictionaryItem) => {
    setDictionary((prev) => [...prev, word]);
  };

  const removeWord = (id: string) => {
    setDictionary((prev) => prev.filter((word) => word.id !== id));
  };

  const updateWord = (id: string, updatedWord: Partial<DictionaryItem>) => {
    setDictionary((prev) =>
      prev.map((word) => (word.id === id ? { ...word, ...updatedWord } : word)),
    );
  };

  const findWord = (searchWord: string) => {
    return dictionary.find(
      (item) => item.word.toLowerCase() === searchWord.toLowerCase(),
    );
  };

  return (
    <DictionaryContext.Provider
      value={{
        dictionary,
        addWord,
        removeWord,
        updateWord,
        findWord,
      }}
    >
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary() {
  const context = useContext(DictionaryContext);
  if (context === undefined) {
    throw new Error("useDictionary must be used within a DictionaryProvider");
  }
  return context;
}
```
