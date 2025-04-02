# Electron Window Manager Utility

## Overview

This TypeScript utility provides a comprehensive window management system for Electron applications. It encapsulates common window operations like opening, positioning, resizing, centering, and maximizing, offering a clean API for consistent window behavior across your application. The class maintains window state with proper type definitions and implements cross-platform positioning logic for desktop applications. This utility is particularly valuable for Electron applications requiring precise window control, multi-window management, or custom window layouts with proper positioning relative to screen dimensions.

```typescript
type WindowPosition = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export class WindowManager {
  private window: Window;
  private defaultPosition: WindowPosition;

  constructor() {
    this.window = window;
    this.defaultPosition = {
      x: 100,
      y: 100,
      width: 800,
      height: 600,
    };
  }

  public open(url: string, position?: Partial<WindowPosition>): Window | null {
    const pos = { ...this.defaultPosition, ...position };
    const features = [
      `left=${pos.x}`,
      `top=${pos.y}`,
      `width=${pos.width}`,
      `height=${pos.height}`,
      "resizable=yes",
      "scrollbars=yes",
      "status=yes",
    ].join(",");

    return this.window.open(url, "_blank", features);
  }

  public center(win?: Window): void {
    const targetWindow = win || this.window;
    const x = (screen.width - targetWindow.outerWidth) / 2;
    const y = (screen.height - targetWindow.outerHeight) / 2;
    targetWindow.moveTo(x, y);
  }

  public maximize(win?: Window): void {
    const targetWindow = win || this.window;
    targetWindow.moveTo(0, 0);
    targetWindow.resizeTo(screen.availWidth, screen.availHeight);
  }

  public minimize(win?: Window): void {
    const targetWindow = win || this.window;
    targetWindow.innerWidth = 100;
    targetWindow.innerHeight = 100;
  }

  public getPosition(win?: Window): WindowPosition {
    const targetWindow = win || this.window;
    return {
      x: targetWindow.screenX,
      y: targetWindow.screenY,
      width: targetWindow.outerWidth,
      height: targetWindow.outerHeight,
    };
  }

  public setPosition(position: Partial<WindowPosition>, win?: Window): void {
    const targetWindow = win || this.window;
    const currentPos = this.getPosition(targetWindow);
    const newPos = { ...currentPos, ...position };

    targetWindow.moveTo(newPos.x, newPos.y);
    targetWindow.resizeTo(newPos.width, newPos.height);
  }
}
```
