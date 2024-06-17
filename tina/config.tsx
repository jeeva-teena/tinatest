import { defineConfig } from "tinacms";

import Post from "./collection/post";
import Global from "./collection/global";
import Author from "./collection/author";
import Page from "./collection/page";

const config = defineConfig({
  clientId: "9ebf965a-bc57-4dd2-8be4-6ce2f5924928",
  branch: "main",
  // branch:
  //   process.env.NEXT_PUBLIC_TINA_BRANCH! || // custom branch env override
  //   process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF! || // Vercel branch env
  //   process.env.HEAD!, // Netlify branch env
  token: "51159a3701e8d8b50f8cac6e8640d2151b1ef8d6",
  media: {
    // If you wanted cloudinary do this
    // loadCustomStore: async () => {
    //   const pack = await import("next-tinacms-cloudinary");
    //   return pack.TinaCloudCloudinaryMediaStore;
    // },
    // this is the config for the tina cloud media store
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    publicFolder: "public", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
  },
  schema: {
    collections: [Post, Global, Author, Page],
  },
});

export default config;
