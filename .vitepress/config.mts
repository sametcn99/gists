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
          {
            text: "Convert to Milliseconds",
            link: "/src/convertToMilliseconds",
          },
          { text: "Copy Directory", link: "/src/copydir" },
          { text: "Date Range Slice", link: "/src/dateRangeSlice" },
          { text: "Delete Folder", link: "/src/delete-folder" },
          { text: "Dictionary Context", link: "/src/DictionaryContext" },
          { text: "Dotnet API", link: "/src/DotnetAPI" },
          { text: "Fetch Contact", link: "/src/fetch-contact" },
          { text: "Get Dates", link: "/src/get-dates" },
          { text: "Get Profile Age", link: "/src/get-profile-age" },
          { text: "Get Formatted Date", link: "/src/getFormattedDate" },
          { text: "Get Random Color", link: "/src/getRandomColor" },
          { text: "Get Site URL", link: "/src/getSiteUrl" },
          { text: "Git Tag Push", link: "/src/git-tag-push" },
          {
            text: "GitHub API Data Filter Repos",
            link: "/src/github-api-data-filter-repos",
          },
          { text: "GitHub API Route", link: "/src/github-api-route" },
          {
            text: "GitHub Profile Next.js API with Octokit",
            link: "/src/github-profile-next.js-api-with-octokit",
          },
          {
            text: "GitHub Repository Statistics Utility",
            link: "/src/github-repository-statistics-utility",
          },
          { text: "GitHub REST Repo Model", link: "/src/GithubRestRepoModel" },
          { text: "GitHub REST User Model", link: "/src/GithubRestUserModel" },
          {
            text: "Heading Styles for Article",
            link: "/src/heading-styles-for-article",
          },
          { text: "Hello World", link: "/src/hello_world" },
          {
            text: "Manifest File for Next.js",
            link: "/src/manifest-file-for-next-js",
          },
          { text: "Redux Root Reducer", link: "/src/redux-root-reducer" },
          { text: "Rename Markdown Files", link: "/src/RenameMarkdownFiles" },
          { text: "Scroll To Top", link: "/src/ScrollToTop" },
          { text: "Service Configuration", link: "/src/ServiceConfiguration" },
          { text: "Site Config", link: "/src/site-config" },
          {
            text: "State to Store GitHub API Data",
            link: "/src/state-to-store-github-api-data",
          },
          {
            text: "Tailwind A4 Page Config",
            link: "/src/tailwind-a4-page-config",
          },
          { text: "Text Cleaning Utility", link: "/src/temizleVeDuzenle" },
          { text: "Text Regex", link: "/src/text-regex" },
          { text: "Theme Switcher", link: "/src/ThemeSwitcher" },
          { text: "Use Fetch", link: "/src/useFetch" },
          {
            text: "Using Glob Patterns in TypeScript Projects",
            link: "/src/using-glob-patterns-in-typescript-projects",
          },
          { text: "Verify Auth", link: "/src/verify-auth" },
          { text: "Window Manager", link: "/src/window-manager" },
          {
            text: "Write Lyrics to Audio Files",
            link: "/src/write-lyrics-to-audio-files",
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
