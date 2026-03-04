import solidJs from "@astrojs/solid-js";
import { resolve } from "@std/path";
import { defineConfig } from "astro/config";

export default defineConfig({
	integrations: [solidJs()],
	vite: {
		build: {
			cssMinify: "lightningcss",
			target: "esnext", // TODO: browser compatibility (e.g. using browserslist)
		},
		css: {
			transformer: "lightningcss",
		},
		resolve: {
			alias: {
				src: resolve(import.meta.dirname!, "src"),
			},
		},
	},
});
