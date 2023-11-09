import { layer } from '@vanilla-extract/css';

// HACK: https://github.com/vanilla-extract-css/vanilla-extract/issues/1112
// Current workaround is to reorder the imports inside of `src/styles/global/mod.css.ts`
export const preflight = layer('preflight');
export const font = layer('font');
export const layout = layer('layout');
export const component = layer('component');
