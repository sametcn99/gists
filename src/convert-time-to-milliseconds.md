# Convert to Milliseconds Utility

```typescript
type Time = {
  hours?: number;
  minutes?: number;
  seconds?: number;
};

function convertToMilliseconds({
  hours = 0,
  minutes = 0,
  seconds = 0,
}: Time): number {
  const MS_PER_SECOND = 1000;
  const MS_PER_MINUTE = 60 * MS_PER_SECOND;
  const MS_PER_HOUR = 60 * MS_PER_MINUTE;

  return (
    hours * MS_PER_HOUR + minutes * MS_PER_MINUTE + seconds * MS_PER_SECOND
  );
}

const time = { hours: 1, minutes: 30, seconds: 45 };
const milliseconds = convertToMilliseconds(time);
console.log(milliseconds); // 5445000
```
