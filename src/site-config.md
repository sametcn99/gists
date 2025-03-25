# Site Configuration

```typescript
import { SiteConfig, MetaConfig } from "./site-config-types";

export const siteConfig: SiteConfig = {
  name: "My Awesome Site",
  description: "Welcome to my awesome website built with Next.js",
  url: "https://myawesome.site",
  ogImage: "https://myawesome.site/og.jpg",
  links: {
    twitter: "https://twitter.com/myhandle",
    github: "https://github.com/myhandle",
  },
  author: {
    name: "John Doe",
    website: "https://johndoe.com",
  },
  keywords: ["blog", "portfolio", "next.js", "react"],
};

export const metaConfig: MetaConfig = {
  title: siteConfig.name,
  description: siteConfig.description,
  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.author.website,
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@myhandle",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon-32x32.png",
      },
    ],
  },
};
```

## Site Configuration Types

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
