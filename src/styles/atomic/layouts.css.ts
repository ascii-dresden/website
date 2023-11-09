import { StyleRule, style } from '@vanilla-extract/css';

import { lg, xl } from 'src/styles/screens.css.ts';
import { layout } from 'src/styles/internal/layers.css.ts';

function layoutStyle(rule: StyleRule | StyleRule[]): string {
	if (!Array.isArray(rule)) {
		return style({ '@layer': { [layout]: rule } });
	}

	return style(rule.map((r) => ({ '@layer': { [layout]: r } })));
}

export const grid = layoutStyle([
	{
		display: 'grid',
		gap: '1rem',
	},
	lg({
		gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
		paddingInline: '4rem',
		gap: '2rem',
	}),
	xl({
		gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
	}),
]);
