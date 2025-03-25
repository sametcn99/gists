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
          { text: "Window Manager", link: "/src/window-manager" },
          { text: "Text Regex", link: "/src/text-regex" },
          { text: "Text Cleaning Utility", link: "/src/temizleVeDuzenle" },
          { text: "Service Configuration", link: "/src/ServiceConfiguration" },
          { text: "Site Configuration", link: "/src/site config/site-config" },
          { text: "GitHub API Route", link: "/src/GitHub API Route/route" },
          { text: "Git Tag and Push", link: "/src/git-tag-push" },
          { text: ".NET API Config", link: "/src/DotnetAPI" },
          { text: "Date Range Store", link: "/src/dateRangeSlice/store" },
          {
            text: "GitHub Stats Utility",
            link: "/src/GitHub Repository Statistics Utility/stats",
          },
          { text: "Dictionary Context", link: "/src/DictionaryContext" },
          { text: "Copy Directory", link: "/src/copydir" },
          { text: "Delete Folder", link: "/src/delete-folder" },
          { text: "Fetch Contact", link: "/src/fetch-contact" },
          { text: "Get Dates", link: "/src/get-dates" },
          { text: "Get Profile Age", link: "/src/get-profile-age" },
          { text: "Get Formatted Date", link: "/src/getFormattedDate" },
          { text: "Get Random Color", link: "/src/getRandomColor" },
          { text: "Get Site URL", link: "/src/getSiteUrl" },
          { text: "Hello World", link: "/src/hello_world" },
          { text: "Rename Markdown Files", link: "/src/RenameMarkdownFiles" },
          { text: "Scroll To Top", link: "/src/ScrollToTop" },
          { text: "Theme Switcher", link: "/src/ThemeSwitcher" },
          { text: "Use Fetch", link: "/src/useFetch" },
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
