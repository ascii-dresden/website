import { setupPlugins as responsiveImage } from "@responsive-image/vite-plugin";
import { resolve } from "@std/path";
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
	plugins: [
		vike(),
		vikeSolid(),
		responsiveImage({
			include: /^[^?]+\?responsive$/,
		}),
	],
	resolve: {
		alias: {
			src: resolve(import.meta.dirname!, "src"),
		},
	},
});
