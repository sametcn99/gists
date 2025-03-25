# GitHub API Route

## Overview

This module provides a Next.js server function for handling GitHub API requests and responses. It includes functionality to parse request parameters, call various GitHub API endpoints using the Octokit library, and handle pagination and error cases.

## Endpoints

`GET /api/github`

Handles various GitHub API requests based on the specified `option` parameter.

## Options

- **repos**: Retrieve a user's repositories and gists.
- **profile**: Retrieve a user's profile information.
- **trending-developers**: Retrieve a list of trending GitHub developers.
- **rate**: Retrieve information about the rate limit for the GitHub API.
- **search**: Search for GitHub users based on a username.
- **social**: Retrieve a user's social accounts associated with GitHub.
- **followers**: Retrieve a user's followers with optional pagination.
- **followings**: Retrieve a user's followings with optional pagination.

## Parameters

### 1. Get Repositories and Gists

- Example URL: `/api/github?username=exampleUser&option=repos&repoCount=200&gistCount=100&chunk=false`

### 2. Get Profile

- Example URL: `/api/github?username=exampleUser&option=profile`

### 3. Get Trending Developers

- Example URL: `/api/github?option=trending-developers`

### 4. Get Rate Limit

- Example URL: `/api/github?option=rate`

### 5. Search Users

- Example URL: `/api/github?option=search&username=searchQuery`

### 6. Get Social Accounts

- Example URL: `/api/github?option=social&username=exampleUser`

### 7. Get Followers

- Example URL: `/api/github?option=followers&username=exampleUser&page=1`

### 8. Get Followings

- Example URL: `/api/github?option=followings&username=exampleUser&page=1`

## GitHub API Route Handler

```typescript
import { GitHubRepo } from "@/types/types";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import createOctokitInstance from "./createOctokitInstance";

/**
 * Handles GitHub API requests and responses.
 *
 * Parses request parameters from nextUrl to determine which GitHub API endpoint to call.
 * Calls Octokit methods to get data from GitHub API.
 * Returns JSON response with profile, repo, gist data.
 * Handles pagination and error cases.
 */
export async function GET(request: NextRequest) {
  // Extract parameters from the request URL
  const searchParams = request.nextUrl.searchParams;
  const username = searchParams.get("username");
  const option = searchParams.get("option");
  const repoCount = searchParams.get("repoCount");
  const gistCount = searchParams.get("gistCount");
  const chunk = searchParams.get("chunk");
  const page = Number(searchParams.get("page"));

  // Initialize Octokit instance
  let octokit = await createOctokitInstance();

  // Initialize variables for data storage
  let repos = Number(repoCount);
  let gists = Number(gistCount);
  let repoData: GitHubRepo[] = [];
  let gistData: GitHubRepo[] = [];
  let profile;
  let responseData;

  // Determine the option and handle the corresponding GitHub API call
  switch (option) {
    case "repos":
      if (username && repoCount && gistCount && chunk === "false") {
        // Fetch repository and gist data using pagination
        const [repoResponses, gistResponses] = await Promise.all([
          // Fetch repository data
          Promise.all(
            Array.from({ length: Math.ceil(repos / 100) }, (_, page) =>
              octokit.rest.repos.listForUser({
                username: username,
                per_page: 100,
                page: page + 1,
              }),
            ),
          ),
          // Fetch gist data
          Promise.all(
            Array.from({ length: Math.ceil(gists / 100) }, (_, page) =>
              octokit.rest.gists.listForUser({
                username: username,
                per_page: 100,
                page: page + 1,
              }),
            ),
          ),
        ]);

        // Combine paginated responses into a single array
        repoData = repoResponses.reduce(
          (accumulator: any[], response) => accumulator.concat(response.data),
          [],
        );
        gistData = gistResponses.reduce(
          (accumulator: any[], response) => accumulator.concat(response.data),
          [],
        );

        // Return JSON response with profile, repos, and gists data
        return NextResponse.json({
          repos: repoData,
          gists: gistData,
        });
      }
      break;

    case "profile":
      if (username) {
        // Fetch user profile data
        const profileResponse = await octokit.rest.users.getByUsername({
          username: username,
        });
        profile = profileResponse.data;

        // Return JSON response with profile, repos, and gists data
        return NextResponse.json({
          profile: profile,
        });
      }
      break;

    // Handle other GitHub API options
    case "trending-developers":
      // Fetch trending developers data
      responseData = await octokit.rest.users.list({
        per_page: 100,
      });
      return NextResponse.json(responseData);

    case "rate":
      // Fetch rate limit data
      responseData = await octokit.request("GET /rate_limit");
      return NextResponse.json(responseData);

    case "search":
      if (username) {
        // Fetch search results for users
        responseData = await octokit.rest.search.users({
          q: username,
          per_page: 100,
        });
        return NextResponse.json(responseData);
      }
      break;

    case "social":
      if (username) {
        // Fetch social accounts data
        responseData = await octokit.rest.users.listSocialAccountsForUser({
          username: username,
        });
        return NextResponse.json(responseData);
      }
      break;

    case "followers":
      if (username && page) {
        // Fetch followers data with pagination
        responseData = await octokit.rest.users.listFollowersForUser({
          username,
          per_page: 100,
          page: page ? Number(page) : 1,
        });
        return NextResponse.json(responseData);
      }
      break;

    case "followings":
      if (username && page) {
        // Fetch followings data with pagination
        responseData = await octokit.rest.users.listFollowingForUser({
          username,
          per_page: 100,
          page: page ? Number(page) : 1,
        });
        return NextResponse.json(responseData);
      }
      break;

    // Handle the default case for unknown options
    default:
      return NextResponse.json({
        error: "Something is missing. Please check your request parameters.",
      });
  }
}
```
