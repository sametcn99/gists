# Scroll To Top Component

## Overview

This React component provides a smooth scroll-to-top functionality for web applications. It implements an elegant, animated scroll button that appears when users scroll down the page, providing a convenient way to return to the top. The component includes customizable visibility thresholds, smooth scrolling behavior, and responsive design considerations. This utility is particularly valuable for long-scrolling pages, blog posts, or any content-heavy application where quick navigation to the top enhances user experience.

```tsx
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
```
