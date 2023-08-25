import { style } from '@vanilla-extract/css';

import { theme } from 'src/styles/theme.css.ts';

export const status = style({
	alignSelf: 'center',
	backgroundColor: theme.success,
	borderRadius: '1rem',
	color: theme.on_success,
	flex: 1,
	maxWidth: '16rem',
	padding: '0.5rem',
	textAlign: 'center',
});
