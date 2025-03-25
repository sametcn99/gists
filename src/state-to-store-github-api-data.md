# State to store GitHub API data

- `const { repos, loading, gists } = useContext(GithubContext) || { repos: null };`

## GitHub Provider

```tsx
import { ReactNode, useState } from "react";
import { GitHubContext } from "./githubContext";
import { Repository } from "../types";

interface GitHubProviderProps {
  children: ReactNode;
}

export function GitHubProvider({ children }: GitHubProviderProps) {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchUserRepositories = async (username: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/github?username=${username}&option=repos`,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch repositories");
      }

      const data = await response.json();
      setRepositories(data.data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("An error occurred"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <GitHubContext.Provider
      value={{
        repositories,
        loading,
        error,
        setRepositories,
        fetchUserRepositories,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
}
```

## GitHub Context

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
