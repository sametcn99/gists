import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Your Website Name",
    short_name: "ShortName",
    dir: "auto",
    description: "This is your website description.",
    categories: ["test", "sample", "webapp", "pwa"],
    theme_color: "#000000",
    background_color: "#ffffff",
    display: "standalone",
    scope: "/",
    lang: "en-US",
    launch_handler: {
      url: "https://www.yourwebsite.com/",
    },
    start_url: "/",
    orientation: "portrait",
    icons: [
      {
        src: "/favicon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon.png",
        sizes: "192x192",
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
}
