# Fetch Contact

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