interface Author {
  name: string;
  url: string;
}

interface Language {
  "@type": string;
  name: string;
}

interface Icon {
  src: string;
  type?: string | undefined;
  sizes?: string | undefined;
  purpose?: "any" | "maskable" | "monochrome" | "badge" | undefined;
}
[];

interface LaunchHandler {
  url: string;
}

interface SiteConfig {
  title: string;
  name: string;
  description: string;
  keywords: string;
  applicationName: string;
  url: URL;
  creator: string;
  authors: Author[];
  type: string;
  image: string;
  locale: string;
  sameAs: string[];
  email: string;
  knowsLanguage: Language[];
  width: string;
  initialScale: number;
  userScalable: boolean;
  short_name: string;
  dir: "ltr" | "rtl" | "auto" | undefined;
  categories: string[];
  theme_color: string;
  background_color: string;
  display: "fullscreen" | "standalone" | "minimal-ui" | "browser" | undefined;
  scope: string;
  launch_handler: LaunchHandler;
  start_url: string;
  orientation:
    | "any"
    | "natural"
    | "landscape"
    | "portrait"
    | "portrait-primary"
    | "portrait-secondary"
    | "landscape-primary"
    | "landscape-secondary"
    | undefined;
  icons: Icon[];
}

export default SiteConfig;
