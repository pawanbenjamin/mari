import { defineConfig } from "astro/config";
import { astroImageTools } from "astro-imagetools";

import image from "@astrojs/image";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [image(), astroImageTools],
  adapter: netlify()
});
