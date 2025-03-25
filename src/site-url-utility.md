# Get Site URL

```typescript
export const getSiteUrl = (): string => {
  const isProduction: boolean = process.env.NODE_ENV === "production";
  const baseUrl: string = isProduction
    ? process.env.NEXT_PUBLIC_URL || ""
    : "http://localhost:3000";
  return baseUrl;
};
```
