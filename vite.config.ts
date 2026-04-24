import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/solid-start/plugin/vite";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import solidPlugin from "vite-plugin-solid";
import viteTsConfigPaths from "vite-tsconfig-paths";
// import { nitro } from 'nitro/vite'

export default defineConfig({
	build: {
		cssMinify: "lightningcss",
		target: "esnext", // TODO: browser compatibility (e.g. using browserslist)
	},
	plugins: [
		devtools(),
		imagetools(),
		// nitro(),
		viteTsConfigPaths({ projects: ["./tsconfig.json"] }),
		tanstackStart({
			prerender: {
				enabled: true,
				// Output pages to `/page/index.html` instead of `/page.html`
				autoSubfolderIndex: true,
				// If disabled, only the root path or the paths defined in the pages config will be prerendered
				autoStaticPathsDiscovery: true,
				// How many prerender jobs to run at once
				concurrency: 14,
				// Whether to extract links from the HTML and prerender them also
				crawlLinks: true,
				// Number of times to retry a failed prerender job
				retryCount: 0,
				// Delay between retries in milliseconds
				// retryDelay: 1000,
				maxRedirects: 5,
				failOnError: true,
			},
		}),
		solidPlugin({ ssr: true }),
	],
});
