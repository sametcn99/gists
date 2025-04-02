# Format Date Utility

## Overview

This TypeScript utility provides a clean, locale-aware approach to formatting date strings in web applications. Using the modern Intl.DateTimeFormat API, it converts ISO date strings into human-readable, culturally appropriate date formats. The function is designed with simplicity in mind, offering a consistent formatting style across your application with proper language support. This utility is particularly useful for applications displaying dates in user interfaces, blog posts, or any content requiring standardized date presentation with potential for internationalization.

```typescript
export default function getFormattedDate(dateString: string): string {
  const date = new Date(dateString);
  const formatterOptions = { dateStyle: "long" };
  const formatter = new Intl.DateTimeFormat("en-US", formatterOptions);
  const formattedDate = formatter.format(date);
  return formattedDate;
}
```
