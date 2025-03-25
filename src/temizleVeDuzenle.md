# Text Cleaning and Formatting Utility

```typescript
export function temizleVeDuzenle(text: string): string {
  // Remove extra whitespace
  let temiz = text.trim().replace(/\s+/g, ' ');

  // Convert special Turkish characters to standard form
  temiz = temiz
    .replace(/İ/g, 'I')
    .replace(/ı/g, 'i')
    .replace(/Ğ/g, 'G')
    .replace(/ğ/g, 'g')
    .replace(/Ü/g, 'U')
    .replace(/ü/g, 'u')
    .replace(/Ş/g, 'S')
    .replace(/ş/g, 's')
    .replace(/Ö/g, 'O')
    .replace(/ö/g, 'o')
    .replace(/Ç/g, 'C')
    .replace(/ç/g, 'c');

  // Remove punctuation marks
  temiz = temiz.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');

  // Convert to lowercase
  temiz = temiz.toLowerCase();

  // Remove numbers
  temiz = temiz.replace(/[0-9]/g, '');

  // Remove HTML tags if any
  temiz = temiz.replace(/<[^>]*>/g, '');

  // Remove special characters and emojis
  temiz = temiz.replace(/[^\x00-\x7F]/g, '');

  // Final trim and whitespace normalization
  temiz = temiz.trim().replace(/\s+/g, ' ');

  return temiz;
}

// Example usage
const kirliMetin = "  Merhaba,   Dünya! Bu bir TEST metnidir... 123  ";
const temizMetin = temizleVeDuzenle(kirliMetin);
// Output: "merhaba dunya bu bir test metnidir"
```