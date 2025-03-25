# Get Formatted Date

```typescript
export default function getFormattedDate(dateString: string): string {
  const date = new Date(dateString);
  const formatterOptions = { dateStyle: "long" };
  const formatter = new Intl.DateTimeFormat("en-US", formatterOptions);
  const formattedDate = formatter.format(date);
  return formattedDate;
}
```