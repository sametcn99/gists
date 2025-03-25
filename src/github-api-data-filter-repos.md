# GitHub Repository Sorting

```typescript
import { Repository, SortOptions } from "./types";

export function sortRepositories(
  repositories: Repository[],
  options: SortOptions,
): Repository[] {
  return [...repositories].sort((a, b) => {
    const modifier = options.direction === "asc" ? 1 : -1;

    switch (options.by) {
      case "stars":
        return (a.stargazers_count - b.stargazers_count) * modifier;

      case "forks":
        return (a.forks_count - b.forks_count) * modifier;

      case "updated":
        return (
          (new Date(a.updated_at).getTime() -
            new Date(b.updated_at).getTime()) *
          modifier
        );

      case "created":
        return (
          (new Date(a.created_at).getTime() -
            new Date(b.created_at).getTime()) *
          modifier
        );

      default:
        return 0;
    }
  });
}
```

## GitHub Repository Types

```typescript
export type GitHubRepo = {
  id: number;
  name: string;
  stargazers_count: number;
  html_url: string;
  fork: boolean;
  homepage: string;
  description: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  topics: string[];
  license_name: string;
  license_url: string;
  language: string;
  license_key: string;
  license: any;
  stars: number;
  home_page: string;
  license_spdx_id: string;
  files: string[];
  owner: any;
};
```

## GitHub Repository Filter Switch

```typescript
import { Repository, FilterOptions } from "./types";

export function filterRepositories(
  repositories: Repository[],
  options: FilterOptions,
): Repository[] {
  return repositories.filter((repo) => {
    // Language filter
    if (options.language && repo.language !== options.language) {
      return false;
    }

    // Topic filter
    if (options.topic && !repo.topics.includes(options.topic)) {
      return false;
    }

    // Visibility filter
    if (options.visibility && repo.visibility !== options.visibility) {
      return false;
    }

    // Stars filter
    if (options.hasStars !== undefined) {
      const hasStars = repo.stargazers_count > 0;
      if (options.hasStars !== hasStars) {
        return false;
      }
    }

    // Forks filter
    if (options.hasForks !== undefined) {
      const hasForks = repo.forks_count > 0;
      if (options.hasForks !== hasForks) {
        return false;
      }
    }

    return true;
  });
}
```
