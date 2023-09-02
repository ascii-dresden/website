/**
 * @file Do not import this file. Import `src/styles/global/mod.css.ts` instead.
 */

import { globalStyleWithPseudos } from 'src/styles/internal/pseudos.css.ts';
import {
	body_large_rule,
	display_large_rule,
	display_medium_rule,
	display_small_rule,
	title_large_rule,
	titleMediumRule,
	title_small_rule,
} from 'src/styles/fonts.css.ts';

globalStyleWithPseudos('h1', display_large_rule);
globalStyleWithPseudos('h2', display_medium_rule);
globalStyleWithPseudos('h3', display_small_rule);
globalStyleWithPseudos('h4', title_large_rule);
globalStyleWithPseudos('h5', titleMediumRule);
globalStyleWithPseudos('h6', title_small_rule);

globalStyleWithPseudos('p', body_large_rule);
