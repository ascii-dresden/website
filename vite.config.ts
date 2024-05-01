// TODO: delete this file when the following issue is resolved
// https://github.com/vanilla-extract-css/vanilla-extract/issues/1336

import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	resolve: {
		alias: {
			src: resolve(__dirname, 'src'),
		},
	},
});
