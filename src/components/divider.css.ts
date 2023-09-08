import { createThemeContract, style } from '@vanilla-extract/css';

import { border_width } from 'src/styles/border.css';

export type DividerRule = {
	from: string;
	to: string;
	stroke: string;
};

export type ComplexDividerRule = DividerRule & {
	selectors?: Record<string, DividerRule>;
};

export const divider_colors = createThemeContract({
	from: null,
	to: null,
	stroke: null,
});

export const gap_filler_from = style({
	stroke: divider_colors.from,
	strokeWidth: border_width,
});

export const filler_from = style({
	fill: divider_colors.from,
});

export const gap_filler_to = style({
	stroke: divider_colors.to,
	strokeWidth: border_width,
});

export const filler_to = style({
	fill: divider_colors.to,
	stroke: divider_colors.stroke,
	strokeWidth: border_width,
});
