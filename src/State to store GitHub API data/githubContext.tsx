import { GitHubRepo } from "@/types";
import { sortByDateDesc } from "@/utils/utils";
import { createContext, ReactNode, useEffect, useState } from "react";

// Define the shape of the context data
interface GithubContextProps {
  repos: GitHubRepo[] | null;
  gists: GitHubRepo[] | null;
  loading: boolean;
}

// Create a context with the specified shape
export const GithubContext = createContext<GithubContextProps | undefined>(
  undefined,
);

// Provider component for the GithubContext
export const GithubProvider = ({ children }: { children: ReactNode }) => {
  // State to hold GitHub repositories and gists
  const [repos, setRepos] = useState<GitHubRepo[] | null>(null);
  const [gists, setGists] = useState<GitHubRepo[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch GitHub data when the component mounts or when repos or gists are null
  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = "sametcn99";

        // Fetch repositories data
        const reposResponse = await fetch(
          `/api/github?username=${username}&option=repos`,
        );

        // Fetch gists data
        const gistsResponse = await fetch(
          `/api/github?username=${username}&option=gists`,
        );

        // Check if both requests were successful
        if (reposResponse.ok && gistsResponse.ok) {
          // Parse JSON data from the responses
          const reposJsonData = await reposResponse.json();
          const gistsJsonData = await gistsResponse.json();

          // Sort repositories and gists by date in descending order
          setRepos(reposJsonData.sort(sortByDateDesc("pushed_at")));
          setGists(gistsJsonData.sort(sortByDateDesc("updated_at")));

          // Log success message and the fetched data
          console.log(
            "Data fetched successfully in GithubContext:",
            reposJsonData,
            gistsJsonData,
          );
        } else {
          // Handle error response for either request
          console.error(
            `Failed to fetch GitHub data. Repos status: ${reposResponse.status}, Gists status: ${gistsResponse.status}`,
          );
        }
      } catch (error) {
        // Handle fetch error for either request
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };
    fetchData();
  }, []);

  // Create the context value
  const contextValue: GithubContextProps = {
    repos,
    gists,
    loading,
  };

  // Provide the context value to the children components
  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  );
};
