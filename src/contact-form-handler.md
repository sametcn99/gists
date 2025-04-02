# Contact Form API Handler

## Overview

This TypeScript utility facilitates efficient pagination handling for GitHub API requests, specifically designed for contact form submissions or user data retrieval. The function implements a robust mechanism to handle GitHub's pagination system, automatically retrieving all pages of data until completion. It includes progress tracking, proper error handling with AbortController integration, and comprehensive type safety. This utility is valuable for applications that need to fetch large datasets from GitHub while respecting rate limits and handling network interruptions gracefully.

```typescript
export async function fetchContact(
  username: string,
  option: string,
  signal: AbortSignal,
): Promise<UserData[]> {
  let nextPage = 1;
  let repos: UserData[] = [];
  let completed = false;

  try {
    while (completed === false) {
      if (signal.aborted) {
        throw new DOMException("Aborted", "AbortError");
      }

      let url = `/api/github?username=${username}&option=${option}&page=${nextPage}`;
      console.log(url);

      const reposResponse = await fetch(url, { signal });

      if (!reposResponse.ok) {
        throw new Error(`Failed to fetch data for ${username}`);
      }

      const reposJsonData = await reposResponse.json();

      if (reposJsonData.data.length > 0) {
        nextPage++;
        repos = [...repos, ...reposJsonData.data];
      } else if (reposJsonData.data.length === 0) {
        completed = true;
        break;
      }
    }
  } catch (error) {
    console.error(error);

    if (error !== "AbortError") {
      throw error;
    }
  }

  return repos;
}
```
