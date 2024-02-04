import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

import solidJs from '@astrojs/solid-js';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { defineConfig } from 'astro/config';
import autoprefixer from 'autoprefixer';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
	output: 'static',
	integrations: [solidJs()],
	vite: {
		css: {
			postcss: {
				plugins: [autoprefixer()],
			},
		},
		plugins: [vanillaExtractPlugin()],
		resolve: {
			alias: [
				{
					find: '/^src/',
					replacement: resolve(__dirname, 'src'),
				},
			],
		},
	},
});
