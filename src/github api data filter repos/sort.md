# GitHub Repository Sorting

```typescript
import { Repository, SortOptions } from './types';

export function sortRepositories(repositories: Repository[], options: SortOptions): Repository[] {
  return [...repositories].sort((a, b) => {
    const modifier = options.direction === 'asc' ? 1 : -1;
    
    switch (options.by) {
      case 'stars':
        return (a.stargazers_count - b.stargazers_count) * modifier;
      
      case 'forks':
        return (a.forks_count - b.forks_count) * modifier;
      
      case 'updated':
        return (
          new Date(a.updated_at).getTime() - 
          new Date(b.updated_at).getTime()
        ) * modifier;
      
      case 'created':
        return (
          new Date(a.created_at).getTime() - 
          new Date(b.created_at).getTime()
        ) * modifier;
      
      default:
        return 0;
    }
  });
}
```