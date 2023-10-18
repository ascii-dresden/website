import { globalStyle } from '@vanilla-extract/css';

import { main } from 'src/components/layouts/base/index.css.ts';
import { border_style, border_width } from 'src/styles/border.css.ts';
import { colors } from 'src/styles/colors.css.ts';
import { spacing } from 'src/styles/spacing.css.ts';
import { dark } from 'src/styles/themes.css';

globalStyle(main, {
	display: 'flex',
	flexDirection: 'column',
	backgroundColor: colors.milk,

	paddingInline: spacing['2'],
	paddingBlock: spacing['4'],
	gap: spacing['3'],

	borderBlockWidth: border_width,
	borderBlockStyle: border_style,
	borderBlockColor: colors.espresso,
});

globalStyle(dark(main), {
	color: colors.creme,
	backgroundColor: colors.black,
	borderTopColor: colors.black,
});

globalStyle(`${main} > ul`, {
	display: 'flex',
	flexDirection: 'column',
	gap: spacing['3'],
});

globalStyle(`${main} a:hover`, {
	textDecoration: 'underline',
	textUnderlineOffset: '0.25rem',
});
