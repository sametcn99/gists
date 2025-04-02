# Random Color Generator

## Overview

This TypeScript utility provides a versatile random color generation system with multiple output formats. It implements methods for generating colors in HEX, RGB, and HSL formats, with options for controlling brightness, saturation, and alpha values. The generator includes functionality for color palette creation, contrast checking, and accessibility considerations. This utility is particularly valuable for applications requiring dynamic color generation, such as data visualization tools, theming systems, or design applications needing programmatic color creation.

```typescript
export const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
```
