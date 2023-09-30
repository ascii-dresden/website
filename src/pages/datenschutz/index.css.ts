import { globalStyle } from '@vanilla-extract/css';

import { main } from 'src/layouts/base.css.ts';
import { border_style, border_width } from 'src/styles/border.css.ts';
import { colors } from 'src/styles/colors.css.ts';
import { spacing } from 'src/styles/spacing.css.ts';

globalStyle(main, {
	display: 'flex',
	flexDirection: 'column',
	backgroundColor: colors.milk,

	paddingInline: spacing['2'],
	paddingBlock: spacing['4'],
	gap: spacing['3'],

	borderTopWidth: border_width,
	borderTopStyle: border_style,
	borderTopColor: colors.espresso,
});

globalStyle(`${main} > ul`, {
	display: 'flex',
	flexDirection: 'column',
	gap: spacing['3'],
});
