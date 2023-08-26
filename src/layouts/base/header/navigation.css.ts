import { style } from '@vanilla-extract/css';

import { colors } from 'src/styles/colors.css.ts';
import { spacing } from 'src/styles/spacing.css';
import { THEME_ATTRIBUTE, THEME_DARK } from 'src/theme';

export const navigation = style({
	selectors: {
		'&[open]': {
			height: '100%',
			width: '100%',
			display: 'grid',
			gridTemplateColumns: `max-content 1fr`,
			gridTemplateRows: `${spacing['4']} 1fr`,
			gridTemplateAreas: `"head head" "links links" "mode socials"`,
			backgroundColor: colors.surface,
			color: colors.on_surface,
		},
	},
});

export const navigation_button = style({
	aspectRatio: '1',
	display: 'grid',
	placeItems: 'center',
});

export const navigation_head = style({
	gridArea: 'head',
	display: 'flex',
	justifyContent: 'flex-end',
});

export const navigation_links = style({
	gridArea: 'links',
	flex: 1,
});

export const navigation_link = style({
	display: 'block',
	height: spacing['4'],
	paddingBlock: spacing['2'],
	marginInline: spacing['2'],
	textAlign: 'end',
	borderBottomWidth: 2,
	borderBottomColor: colors.on_surface,
});

export const navigation_theme = style({
	gridArea: 'mode',
	margin: spacing['2'],
});

export const navigation_socials = style({
	gridArea: 'socials',
	display: 'flex',
	justifyContent: 'end',
	gap: spacing['2'],
	padding: spacing['2'],
});

export const navigation_social = style({
	display: 'grid',
	aspectRatio: '1',
	placeItems: 'center',
});
