# Text Regular Expressions

```typescript
export const patterns = {
  // Email pattern
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,

  // URL pattern
  url: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/,

  // Password pattern (min 8 chars, at least one uppercase, lowercase, number, and special char)
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,

  // Phone number pattern (international format)
  phone: /^\+?([0-9]{1,3})?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,

  // Date pattern (YYYY-MM-DD)
  date: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,

  // Username pattern (alphanumeric and underscore, 3-16 chars)
  username: /^[a-zA-Z0-9_]{3,16}$/,

  // Hexadecimal color code
  hexColor: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,

  // IPv4 address
  ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,

  // HTML tag
  htmlTag: /<\/?[\w\s="/.':;#-\/\?]+>/gi,

  // Credit card number
  creditCard:
    /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/,
};

export function validate(pattern: RegExp, text: string): boolean {
  return pattern.test(text);
}

export function extract(
  pattern: RegExp,
  text: string,
): RegExpMatchArray | null {
  return text.match(pattern);
}

export function replace(
  pattern: RegExp,
  text: string,
  replacement: string,
): string {
  return text.replace(pattern, replacement);
}
```
