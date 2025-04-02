# Next.js Manifest Configuration

## Overview

This configuration utility provides a comprehensive Progressive Web App (PWA) manifest setup for Next.js applications. It implements essential PWA features including app icons, theme colors, display modes, and orientation preferences. The configuration includes proper TypeScript typing and follows PWA best practices for optimal mobile and desktop experiences. This setup is crucial for Next.js applications that need to function as installable PWAs, providing native-like functionality and improved user engagement through features like offline access and home screen installation.

```typescript
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "My Next.js App",
    short_name: "Next App",
    description: "A modern Next.js application with PWA support",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/icons/icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: "/icons/icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/icons/icon-128x128.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "/icons/icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "/icons/icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
```
