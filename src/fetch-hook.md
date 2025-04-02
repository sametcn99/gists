# useFetch Custom Hook

## Overview

This React custom hook provides a complete solution for data fetching in React applications with TypeScript support. It encapsulates the fetch API with proper loading state tracking, error handling, and automatic cleanup to prevent memory leaks. The hook implements the AbortController API to cancel pending requests when components unmount, preventing race conditions and state updates on unmounted components. This utility is particularly valuable for React applications requiring data from external APIs, offering a standardized approach to handling asynchronous operations with proper TypeScript typing for the response data.

```tsx
import { useState, useEffect } from "react";

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export function useFetch<T>(url: string): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          signal: abortController.signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        if (err instanceof Error) {
          if (err.name === "AbortError") {
            console.log("Fetch aborted");
          } else {
            setError(err);
          }
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, loading, error };
}
```
