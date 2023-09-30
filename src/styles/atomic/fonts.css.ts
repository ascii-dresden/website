import { style } from '@vanilla-extract/css';

import {
	body_large_rule,
	body_medium_rule,
	body_small_rule,
	display_large_rule,
	display_medium_rule,
	display_small_rule,
	label_large_rule,
	label_medium_rule,
	label_small_rule,
	title_large_rule,
	title_medium_rule,
	title_small_rule,
} from 'src/styles/fonts.css.ts';

export const display_large = style(display_large_rule);
export const display_medium = style(display_medium_rule);
export const display_small = style(display_small_rule);

export const title_large = style(title_large_rule);
export const title_medium = style(title_medium_rule);
export const title_small = style(title_small_rule);

export const label_large = style(label_large_rule);
export const label_medium = style(label_medium_rule);
export const label_small = style(label_small_rule);

export const body_large = style(body_large_rule);
export const body_medium = style(body_medium_rule);
export const body_small = style(body_small_rule);
