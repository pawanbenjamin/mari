import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  site: "https://www.mariposawellnessllc.com",
  integrations: [sitemap()]
});
