import deno from "@deno/vite-plugin";
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
	// TODO: Reconsider if Vike and Deno is preferred over Astro and Node/PNPM.
	plugins: [deno(), vike(), vikeSolid()],
	resolve: {
		alias: {
			src: resolve(import.meta.dirname!, "src"),
		},
	},
});
