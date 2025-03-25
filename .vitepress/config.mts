import { defineConfig } from "vitepress";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Code Snippets Library",
  description: "A Collection of Useful Code Snippets and Documentation",
  // Set the root path to redirect to /
  srcDir: "./src",
  outDir: "./.vitepress/dist",
  lang: "en-US",
  titleTemplate: " sametcc.me",
  appearance: "force-dark",
  ignoreDeadLinks: true,
  themeConfig: {
    search: {
      provider: "local",
    },
    sidebar: [
      {
        items: [
          {
            text: "Convert to Milliseconds",
            link: "/convertToMilliseconds",
          },
          { text: "Copy Directory", link: "/copydir" },
          { text: "Date Range Slice", link: "/dateRangeSlice" },
          { text: "Delete Folder", link: "/delete-folder" },
          { text: "Dictionary Context", link: "/DictionaryContext" },
          { text: "Dotnet API", link: "/DotnetAPI" },
          { text: "Fetch Contact", link: "/fetch-contact" },
          { text: "Get Dates", link: "/get-dates" },
          { text: "Get Profile Age", link: "/get-profile-age" },
          { text: "Get Formatted Date", link: "/getFormattedDate" },
          { text: "Get Random Color", link: "/getRandomColor" },
          { text: "Get Site URL", link: "/getSiteUrl" },
          { text: "Git Tag Push", link: "/git-tag-push" },
          {
            text: "GitHub API Data Filter Repos",
            link: "/github-api-data-filter-repos",
          },
          { text: "GitHub API Route", link: "/github-api-route" },
          {
            text: "GitHub Profile Next.js API with Octokit",
            link: "/github-profile-next.js-api-with-octokit",
          },
          {
            text: "GitHub Repository Statistics Utility",
            link: "/github-repository-statistics-utility",
          },
          { text: "GitHub REST Repo Model", link: "/GithubRestRepoModel" },
          { text: "GitHub REST User Model", link: "/GithubRestUserModel" },
          {
            text: "Heading Styles for Article",
            link: "/heading-styles-for-article",
          },
          { text: "Hello World", link: "/hello_world" },
          {
            text: "Manifest File for Next.js",
            link: "/manifest-file-for-next-js",
          },
          { text: "Redux Root Reducer", link: "/redux-root-reducer" },
          { text: "Rename Markdown Files", link: "/RenameMarkdownFiles" },
          { text: "Scroll To Top", link: "/ScrollToTop" },
          { text: "Service Configuration", link: "/ServiceConfiguration" },
          { text: "Site Config", link: "/site-config" },
          {
            text: "State to Store GitHub API Data",
            link: "/state-to-store-github-api-data",
          },
          {
            text: "Tailwind A4 Page Config",
            link: "/tailwind-a4-page-config",
          },
          { text: "Text Cleaning Utility", link: "/temizleVeDuzenle" },
          { text: "Text Regex", link: "/text-regex" },
          { text: "Theme Switcher", link: "/ThemeSwitcher" },
          { text: "Use Fetch", link: "/useFetch" },
          {
            text: "Using Glob Patterns in TypeScript Projects",
            link: "/using-glob-patterns-in-typescript-projects",
          },
          { text: "Verify Auth", link: "/verify-auth" },
          { text: "Window Manager", link: "/window-manager" },
          {
            text: "Write Lyrics to Audio Files",
            link: "/write-lyrics-to-audio-files",
          },
        ].sort((a, b) => {
          return a.text.localeCompare(b.text);
        }),
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/sametcn99" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/sametc0/" },
      { icon: "telegram", link: "https://t.me/sametc0" },
    ],
    lastUpdated: {
      text: "Last Updated",
    },
    siteTitle: "Code Snippets Library",
    docFooter: {
      prev: "Previous",
      next: "Next",
    },
    notFound: {
      title: "Oops! Page Not Found",
      quote: "Looks like this page took a coffee break!",
      linkLabel: "Go to Home",
      code: "404",
      linkText: "Go Home",
    },
  },
  markdown: {
    lineNumbers: true,
  },
  cleanUrls: true,
  lastUpdated: true,
});
