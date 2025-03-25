# GitHub Profile API Route

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
