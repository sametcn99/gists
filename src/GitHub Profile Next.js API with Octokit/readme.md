**GitHub Profile Next.js API with Octokit**

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
