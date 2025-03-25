# Site Configuration Types

```typescript
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
  author: {
    name: string;
    website: string;
  };
  keywords: string[];
}

export interface MetaConfig {
  title: string;
  description: string;
  authors: Author[];
  openGraph: OpenGraph;
  twitter: Twitter;
  icons: Icons;
}

interface Author {
  name: string;
  url: string;
}

interface OpenGraph {
  type: string;
  locale: string;
  url: string;
  title: string;
  description: string;
  siteName: string;
  images: Image[];
}

interface Image {
  url: string;
  width: number;
  height: number;
  alt: string;
}

interface Twitter {
  card: string;
  title: string;
  description: string;
  images: string[];
  creator: string;
}

interface Icons {
  icon: string;
  shortcut: string;
  apple: string;
  other: {
    rel: string;
    url: string;
  }[];
}
```
