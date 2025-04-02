# Theme Switcher Component

## Overview

This React component provides a robust theme switching system with persistent state management. It implements a context-based theme provider with support for light and dark modes, custom color schemes, and system preference detection. The component includes smooth transitions between themes, local storage persistence, and proper TypeScript typing. This utility is essential for applications requiring theme customization capabilities, ensuring consistent theme application across components while respecting user preferences.

```tsx
import { createContext, useContext, useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-5 right-5 p-2 rounded-full bg-gray-200 dark:bg-gray-800"
      aria-label="Toggle theme"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
```
