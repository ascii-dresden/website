import { StyleRule, style } from '@vanilla-extract/css';

import { component } from './internal/layers.css.ts';

export type ComponentStyleRule = Omit<StyleRule, '@layer'>;

export function componentStyle(rule: ComponentStyleRule): string {
	return style({
		'@layer': {
			[component]: rule,
		},
	});
}
