import { globalStyle, style } from '@vanilla-extract/css';
import { theme } from 'src/styles/theme.css';

export const header = style([
	{
		position: 'sticky',
		top: 0,
		display: 'flex',
		height: '3rem',
		justifyContent: 'space-between',
		boxShadow: '0 0 0.5rem 0 rgba(0, 0, 0, 0.5)',
		backgroundColor: theme.surface,
		color: theme.on_surface,
		gap: '0.5rem',
	},
]);

export const header_logo = style({
	display: 'flex',
	alignSelf: 'center',
	marginInline: '0.5rem',
	height: '2rem',
});
