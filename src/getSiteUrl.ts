// This function, getSiteUrl, is designed to return the appropriate base URL for the current environment.

// It is defined as a constant export, indicating that it can be imported and used in other parts of the codebase.

// The function has no parameters and returns a string, which is the determined base URL.

export const getSiteUrl = (): string => {
  // Determine whether the current environment is production by checking the NODE_ENV environment variable.
  const isProduction: boolean = process.env.NODE_ENV === "production";

  // Define the baseUrl variable, which will store the final base URL.
  // If the environment is production, use the value of NEXT_PUBLIC_URL environment variable; otherwise, default to "http://localhost:3000".
  const baseUrl: string = isProduction
    ? process.env.NEXT_PUBLIC_URL || ""
    : "http://localhost:3000";

  // Return the determined base URL.
  return baseUrl;
};
