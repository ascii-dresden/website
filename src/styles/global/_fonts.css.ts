/**
 * @file Do not import this file. Import `src/styles/global/mod.css.ts` instead.
 */

import { globalStyleWithPseudos } from 'src/styles/internal/pseudos.css.ts';
import {
	bodyLargeRule,
	displayLargeRule,
	displayMediumRule,
	displaySmallRule,
	titleLargeRule,
	titleMediumRule,
	titleSmallRule,
} from 'src/styles/fonts.css.ts';

globalStyleWithPseudos('h1', displayLargeRule);
globalStyleWithPseudos('h2', displayMediumRule);
globalStyleWithPseudos('h3', displaySmallRule);
globalStyleWithPseudos('h4', titleLargeRule);
globalStyleWithPseudos('h5', titleMediumRule);
globalStyleWithPseudos('h6', titleSmallRule);

globalStyleWithPseudos('p', bodyLargeRule);
