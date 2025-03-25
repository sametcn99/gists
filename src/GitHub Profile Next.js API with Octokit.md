# **GitHub Profile Next.js API with Octokit**

This Gist contains a Next.js API route implemented in TypeScript for interacting with the GitHub API using the Octokit library. The primary purpose of this API route is to retrieve information about repositories belonging to a specific GitHub user.

**Features:**

1. **Endpoint**: The API exposes an endpoint at `/api/repos` for handling HTTP GET requests.
2. **Parameter**: Expects a `username` parameter in the query string to identify the target GitHub user. Example usage: `http://localhost:3000/api/repos?username=sametcn99`.
3. **Error Handling**: Includes robust error handling for scenarios such as missing parameters or failed GitHub API requests.
4. **GitHub Authentication**: Utilizes a GitHub token obtained from environment variables (`process.env.GH_TOKEN`) for authentication.

**Usage:**

1. Make a GET request to the API route, providing the target GitHub user's username as a parameter.
2. Ensure the availability of environment variables, especially the GitHub token (`GH_TOKEN`), for successful authentication.

**Dependencies:**

- [Next.js](https://nextjs.org/)
- [Octokit](https://octokit.github.io/rest.js/v18)

**Important Notes:**

- This script showcases best practices for handling GitHub API requests in a Next.js environment.
- Customize the user agent (`userAgent`) for proper identification in GitHub API requests.

**How to Integrate:**

1. Copy the provided TypeScript code into your Next.js project's API routes.
2. Install the necessary dependencies using your package manager (`npm install` or `yarn install`).
3. Set up environment variables, especially the GitHub token (`GH_TOKEN`), for authentication.

Feel free to use and modify this script according to your project requirements. It serves as a foundation for building GitHub-related functionality into your Next.js application.

---

## GitHub Profile API Route

```typescript
// path: app/api/repos/route.ts
// Importing required modules from the Next.js and Octokit libraries
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Octokit } from "octokit";

// Defining the GET function to handle incoming HTTP GET requests
// The function takes a NextRequest object as a parameter
// It extracts the 'username' parameter from the query string of the request URL
// The query string is a string of key-value pairs separated by '&' characters
// Example url, http://localhost:3000/api/repos?username=sametcn99
export async function GET(request: NextRequest) {
  // Extracting the 'username' parameter from the query string of the request URL
  const nextUrl = request.nextUrl;
  const username = nextUrl.searchParams.get("username");

  // Checking if the 'username' parameter is missing in the URL
  if (username === null) {
    // Returning a JSON response with an error message if 'username' is missing
    return NextResponse.json({
      error: "Username parameter is missing in the URL.",
    });
  }

  // Creating a new Octokit instance with GitHub token and additional headers
  const octokit = new Octokit({
    auth: process.env.GH_TOKEN, // GitHub token obtained from environment variables
    headers: {
      "X-GitHub-Api-Version": "2022-11-28", // Specifying GitHub API version
    },
    userAgent: "Github Profile Next UI", // User agent for identification
  });

  try {
    // Making a GitHub API request to retrieve repositories for the specified user
    const userRepos = await octokit.rest.repos.listForUser({
      username,
    });

    // Checking the status code of the API response
    if (userRepos.status === 200) {
      // Returning a JSON response with the data if the request was successful
      return NextResponse.json(userRepos.data);
    } else {
      // Returning a JSON response with an error message if the API request failed
      return NextResponse.json({
        error: `GitHub API request failed with status code ${userRepos.status}.`,
      });
    }
  } catch (error: any) {
    // Returning a JSON response with an error message and details if an error occurred
    return NextResponse.json({
      error: "An error occurred while processing the request.",
      details: error.message,
    });
  }
}
```
