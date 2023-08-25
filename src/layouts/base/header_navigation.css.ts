import { style } from '@vanilla-extract/css';

export const navigation = style({
	selectors: {
		'&[open]': {
			height: '100%',
			width: '100%',
			display: 'grid',
			gridTemplateColumns: '1fr',
		},
	},
});

export const navigation_button = style({
	aspectRatio: '1',
	display: 'grid',
	placeItems: 'center',
});
