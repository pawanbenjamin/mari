import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify/functions";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  site: "https://www.mariposawellnessllc.com",
  integrations: [sitemap(), tailwind({ applyBaseStyles: false })]
});
