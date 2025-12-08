import { resolve } from "@std/path";

import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import vike from "vike/plugin";
import vikeSolid from "vike-solid/vite";
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		cssMinify: "lightningcss",
		target: "esnext", // TODO: browser compatibility (e.g. using browserslist)
	},
	css: {
		transformer: "lightningcss",
	},
	plugins: [vanillaExtractPlugin(), vike(), vikeSolid()],
	resolve: {
		alias: {
			src: resolve(import.meta.dirname!, "src"),
		},
	},
});
