import { readFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

import solidJs from '@astrojs/solid-js';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { defineConfig } from 'astro/config';

const __dirname = dirname(fileURLToPath(import.meta.url));

const isHttps = Boolean(process.env.HTTPS);
const key = readFileSync(resolve(__dirname, 'localhost-key.pem'));
const cert = readFileSync(resolve(__dirname, 'localhost.pem'));

// https://astro.build/config
export default defineConfig({
	output: 'static',
	integrations: [solidJs()],
	vite: {
		plugins: [
			vanillaExtractPlugin({
				emitCssInSsr: true,
			}),
		],
		resolve: {
			alias: [
				{
					find: '/^src/',
					replacement: resolve(__dirname, 'src'),
				},
			],
		},
		server: isHttps ? { https: { key, cert } } : {},
	},
});
