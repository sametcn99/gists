# Get Profile Age

```typescript
export function getProfileAgeString(dateString: Date): string {
  const currentDate = new Date();
  const age = currentDate.getFullYear() - dateString.getFullYear();
  const monthsDiff = currentDate.getMonth() - dateString.getMonth();
  const daysDiff = currentDate.getDate() - dateString.getDate();
  const hoursDiff = currentDate.getHours() - dateString.getHours();
  const minutesDiff = currentDate.getMinutes() - dateString.getMinutes();
  let pluralSuffix = age - 1 === 1 ? "" : "s";

  if (
    monthsDiff < 0 ||
    (monthsDiff === 0 && currentDate.getDate() < dateString.getDate())
  ) {
    return `${age - 1} year${pluralSuffix}`;
  }

  if (age === 0) {
    if (monthsDiff === 0) {
      if (daysDiff === 0) {
        const hourString = hoursDiff === 1 ? "" : "s";
        const minuteString = minutesDiff === 1 ? "" : "s";
        return `${hoursDiff} hour${hourString} and ${minutesDiff} minute${minuteString}`;
      }
      return `${daysDiff} day${pluralSuffix}`;
    }
    return `${monthsDiff} month${pluralSuffix}`;
  }
  return `${age} year${pluralSuffix}`;
}
```
