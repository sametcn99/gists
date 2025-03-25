# GitHub Repository Filter Switch

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
