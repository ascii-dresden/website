import { style } from '@vanilla-extract/css';

import { colors } from 'src/styles/colors.css.ts';

export const status = style({
	alignSelf: 'center',
	backgroundColor: colors.success,
	borderRadius: '1rem',
	color: colors.on_success,
	flex: 1,
	maxWidth: '16rem',
	padding: '0.5rem',
	textAlign: 'center',
});
