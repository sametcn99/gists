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
          { text: "Article Heading Styles", link: "/article-heading-styles" },
          { text: "Audio Lyrics Writer", link: "/audio-lyrics-writer" },
          { text: "Auth Verifier", link: "/auth-verifier" },
          { text: "Contact Form Handler", link: "/contact-form-handler" },
          {
            text: "Convert Time to Milliseconds",
            link: "/convert-time-to-milliseconds",
          },
          { text: "Copy Directory Utility", link: "/copy-directory-utility" },
          { text: "Date Range Slicer", link: "/date-range-slicer" },
          { text: "Date Utility", link: "/date-utility" },
          { text: "Delete Folder", link: "/delete-folder" },
          {
            text: "Dictionary Context Provider",
            link: "/dictionary-context-provider",
          },
          { text: "Dotnet API Setup", link: "/dotnet-api-setup" },
          { text: "Fetch Hook", link: "/fetch-hook" },
          { text: "Format Date Utility", link: "/format-date-utility" },
          { text: "Git Tag Push Utility", link: "/git-tag-push-utility" },
          { text: "GitHub API Route", link: "/github-api-route" },
          { text: "GitHub Data Store", link: "/github-data-store" },
          { text: "GitHub Profile API", link: "/github-profile-api" },
          { text: "GitHub Repo Filter", link: "/github-repo-filter" },
          { text: "GitHub Repo Model", link: "/github-repo-model" },
          { text: "GitHub Repo Stats", link: "/github-repo-stats" },
          { text: "GitHub User Model", link: "/github-user-model" },
          {
            text: "Hello World Translations",
            link: "/hello-world-translations",
          },
          { text: "Markdown File Renamer", link: "/markdown-file-renamer" },
          { text: "Next.js Manifest Config", link: "/nextjs-manifest-config" },
          { text: "Profile Age Calculator", link: "/profile-age-calculator" },
          { text: "Random Color Generator", link: "/random-color-generator" },
          {
            text: "Redux Root Reducer Setup",
            link: "/redux-root-reducer-setup",
          },
          { text: "Regex Text Utility", link: "/regex-text-utility" },
          { text: "Scroll to Top Component", link: "/scroll-to-top-component" },
          {
            text: "Service Configuration Guide",
            link: "/service-configuration-guide",
          },
          { text: "Site URL Utility", link: "/site-url-utility" },
          { text: "Tailwind Page Setup", link: "/tailwind-page-setup" },
          { text: "Text Cleaner", link: "/text-cleaner" },
          {
            text: "Theme Switcher Component",
            link: "/theme-switcher-component",
          },
          {
            text: "TypeScript Glob Patterns",
            link: "/typescript-glob-patterns",
          },
          { text: "Website Configuration", link: "/website-configuration" },
          {
            text: "Electron Window Manager Utility",
            link: "/electron-window-manager-utility",
          },
          {
            text: "Combine Locals",
            link: "/combine-locales",
          },
        ].sort((a, b) => a.text.localeCompare(b.text)),
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
