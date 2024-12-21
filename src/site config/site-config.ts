import SiteConfig from "./types/site-config-types";

export const siteConfig: SiteConfig = {
  title: "Samet Can Cıncık | sametcc.me",
  name: "Samet Can Cıncık",
  description:
    "Web Developer passionate about creating compelling and user-friendly web experiences.",
  keywords:
    "personal website, Next.js, web development, ui design, portfolio, web developer",
  applicationName: "sametcc.me",
  url: new URL("https://www.sametcc.me/"),
  creator: "https://github.com/sametcn99",
  authors: [
    {
      name: "Samet Can Cıncık",
      url: "https://www.sametcc.me/",
    },
  ],
  type: "website",
  image: "/thumbnail.png",
  locale: "en_US",
  sameAs: [
    "https://www.linkedin.com/in/samet-can-c%C4%B1nc%C4%B1k",
    "http://instagram.com/sametc.0",
    "https://github.com/sametcn99",
    "https://www.youtube.com/channel/UCgXu7EZ76uMqPW8i4ZCL72Q",
  ],
  email: "sametcn99@gmail.com",
  knowsLanguage: [
    {
      "@type": "Language",
      name: "Turkish",
    },
    {
      "@type": "Language",
      name: "English",
    },
  ],
  width: "device-width",
  initialScale: 1,
  userScalable: true,
  short_name: "sametcc",
  dir: "auto",
  categories: ["personal", "portfolio"],
  theme_color: "#000000",
  background_color: "#000000",
  display: "standalone",
  scope: "/",
  launch_handler: {
    url: "https://www.sametcc.me/",
  },
  start_url: "/",
  orientation: "portrait",
  icons: [
    {
      src: "/favicon.png",
      sizes: "300x300",
      type: "image/png",
      purpose: "any",
    },
    {
      src: "/favicon.png",
      sizes: "300x300",
      type: "image/png",
      purpose: "maskable",
    },
    {
      src: "/thumbnail.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any",
    },
  ],
};
