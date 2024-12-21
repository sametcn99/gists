export async function fetchContact(
  username: string,
  option: string,
  signal: AbortSignal,
): Promise<UserData[]> {
  // Initialize variables for pagination and repository storage
  let nextPage = 1;
  let repos: UserData[] = [];
  let completed = false;

  try {
    // Infinite loop to paginate through the user's repositories
    while (completed === false) {
      // Check if the request has been aborted
      if (signal.aborted) {
        throw new DOMException("Aborted", "AbortError");
      }

      // Construct the URL for fetching user repositories
      let url = `/api/github?username=${username}&option=${option}&page=${nextPage}`;
      console.log(url);

      // Fetch repositories data from the server using the provided username, option, and page number
      const reposResponse = await fetch(url, { signal });

      // Check if the response is successful; otherwise, throw an error
      if (!reposResponse.ok) {
        throw new Error(`Failed to fetch data for ${username}`);
      }

      // Parse the JSON data from the response
      const reposJsonData = await reposResponse.json();

      // Check if there are repositories in the response
      if (reposJsonData.data.length > 0) {
        // Increment the page number for the next iteration
        nextPage++;

        // Concatenate the new repositories to the existing ones
        repos = [...repos, ...reposJsonData.data];
      } else if (reposJsonData.data.length === 0) {
        // Break the loop if there are no more repositories
        completed = true;
        break;
      }
    }
  } catch (error) {
    // Log and handle any errors that occur during the fetch process
    console.error(error);

    // Re-throw the error if it's not an AbortError
    if (error !== "AbortError") {
      throw error;
    }
  }

  // Return the accumulated repositories
  return repos;
}
