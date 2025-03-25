import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Code Snippets Library",
  description: "A Collection of Useful Code Snippets and Documentation",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Documentation", link: "/src/" },
    ],
    sidebar: [
      {
        text: "Documentation",
        items: [
          { text: "Index", link: "/src/" },

          // JavaScript & TypeScript Utilities
          { text: "Window Manager", link: "/src/window-manager" },
          { text: "Text Regex", link: "/src/text-regex" },
          { text: "Text Cleaning Utility", link: "/src/temizleVeDuzenle" },
          { text: "Dictionary Context", link: "/src/DictionaryContext" },
          { text: "Get Formatted Date", link: "/src/getFormattedDate" },
          { text: "Get Random Color", link: "/src/getRandomColor" },
          { text: "Get Site URL", link: "/src/getSiteUrl" },
          { text: "Use Fetch", link: "/src/useFetch" },
          {
            text: "Convert to Milliseconds",
            link: "/src/convertToMilliseconds",
          },

          // File System Operations
          { text: "Copy Directory", link: "/src/copydir" },
          { text: "Delete Folder", link: "/src/delete-folder" },
          { text: "Rename Markdown Files", link: "/src/RenameMarkdownFiles" },
          {
            text: "Write Lyrics to Audio Files",
            link: "/src/write-lyrics-to-audio-files",
          },

          // API & Configuration
          { text: "Service Configuration", link: "/src/ServiceConfiguration" },
          { text: ".NET API Config", link: "/src/DotnetAPI" },
          { text: "GitHub API Route", link: "/src/GitHub API Route/route" },
          {
            text: "GitHub API Route README",
            link: "/src/GitHub API Route/readme",
          },
          {
            text: "GitHub Profile API with Octokit",
            link: "/src/GitHub Profile Next.js API with Octokit/route",
          },
          {
            text: "GitHub Profile API README",
            link: "/src/GitHub Profile Next.js API with Octokit/readme",
          },
          { text: "Verify Auth", link: "/src/verify-auth/verify-auth" },
          {
            text: "Verify JWT Token",
            link: "/src/verify-auth/verify-jwt-token",
          },
          { text: "Next.js Manifest", link: "/src/manifest file for next js" },

          // Site Configuration
          { text: "Site Config", link: "/src/site config/site-config" },
          {
            text: "Site Config Types",
            link: "/src/site config/site-config-types",
          },
          {
            text: "Tailwind A4 Page Config",
            link: "/src/tailwind a4 page config",
          },
          {
            text: "Heading Styles for Article",
            link: "/src/Heading Styles for article",
          },

          // Date & Time
          {
            text: "Date Range Slice",
            link: "/src/dateRangeSlice/dateRangeSlice",
          },
          { text: "Date Range Store", link: "/src/dateRangeSlice/store" },
          { text: "Get Dates", link: "/src/get-dates" },
          { text: "Get Profile Age", link: "/src/get-profile-age" },

          // UI Components
          { text: "Scroll To Top", link: "/src/ScrollToTop" },
          { text: "Theme Switcher", link: "/src/ThemeSwitcher" },

          // Redux & State Management
          {
            text: "Redux Root Reducer",
            link: "/src/Redux Root Reducer/rootReducer",
          },
          {
            text: "Redux Providers",
            link: "/src/Redux Root Reducer/providers",
          },
          {
            text: "GitHub State Store",
            link: "/src/State to store GitHub API data/githubContext",
          },
          {
            text: "GitHub State Providers",
            link: "/src/State to store GitHub API data/providers",
          },
          {
            text: "GitHub State README",
            link: "/src/State to store GitHub API data/readme",
          },

          // Git & GitHub
          { text: "Git Tag and Push", link: "/src/git-tag-push" },
          {
            text: "GitHub Repository Statistics",
            link: "/src/GitHub Repository Statistics Utility",
          },
          {
            text: "GitHub Repository Types",
            link: "/src/github api data filter repos/types",
          },
          {
            text: "GitHub Repository Sorting",
            link: "/src/github api data filter repos/sort",
          },
          {
            text: "GitHub Repository Filter",
            link: "/src/github api data filter repos/switch",
          },
          { text: "GitHub REST User Model", link: "/src/GithubRestUserModel" },
          { text: "GitHub REST Repo Model", link: "/src/GithubRestRepoModel" },

          // Miscellaneous
          { text: "Hello World", link: "/src/hello_world" },
          { text: "Fetch Contact", link: "/src/fetch-contact" },

          // TypeScript & Patterns
          {
            text: "Using Glob Patterns - README",
            link: "/src/Using Glob Patterns in TypeScript Projects/README",
          },
          {
            text: "Using Glob Patterns - Examples",
            link: "/src/Using Glob Patterns in TypeScript Projects/examples",
          },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/sametcn99" }],
  },
  markdown: {
    lineNumbers: true,
  },
  cleanUrls: true,
  lastUpdated: true,
});
