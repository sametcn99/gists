# Tailwind A4 Page Configuration

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        'a4': '210mm',
      },
      height: {
        'a4': '297mm',
      },
      padding: {
        'a4': '25mm',
      },
      margin: {
        'a4-page': '15mm',
      },
      screens: {
        'print': {'raw': 'print'},
      },
    },
  },
  plugins: [],
};

export default config;
```