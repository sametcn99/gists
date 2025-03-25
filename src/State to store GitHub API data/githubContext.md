# GitHub Context

```tsx
import { createContext, useContext } from "react";
import { Repository } from "../types";

interface GitHubContextType {
  repositories: Repository[];
  loading: boolean;
  error: Error | null;
  setRepositories: (repos: Repository[]) => void;
  fetchUserRepositories: (username: string) => Promise<void>;
}

export const GitHubContext = createContext<GitHubContextType | undefined>(
  undefined,
);

export function useGitHub() {
  const context = useContext(GitHubContext);
  if (context === undefined) {
    throw new Error("useGitHub must be used within a GitHubProvider");
  }
  return context;
}
```
