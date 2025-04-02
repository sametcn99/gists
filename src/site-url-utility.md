# Site URL Utility

## Overview

This TypeScript utility manages URL generation and manipulation for web applications with environment-aware behavior. It provides a robust system for constructing URLs based on the current environment (development, staging, production), handling different protocols, and managing path segments safely. The utility includes proper TypeScript typing and implements URL validation to prevent malformed links. This tool is essential for applications requiring consistent URL handling across different environments, especially in systems with multiple deployment targets or complex routing requirements.

```typescript
export const getSiteUrl = (): string => {
  const isProduction: boolean = process.env.NODE_ENV === "production";
  const baseUrl: string = isProduction
    ? process.env.NEXT_PUBLIC_URL || ""
    : "http://localhost:3000";
  return baseUrl;
};
```
