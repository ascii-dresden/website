import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

import solidJs from '@astrojs/solid-js';
import { defineConfig } from 'astro/config';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
    output: 'static',
    integrations: [solidJs()],
    vite: {
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
