import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import { config } from "./src/config";

// https://astro.build/config
export default defineConfig({
	site: config.website,
	integrations: [tailwind()],
});
