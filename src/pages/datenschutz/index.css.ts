import { globalStyle } from '@vanilla-extract/css';

import { main } from 'src/components/layouts/base/index.css.ts';
import { border_style, border_width } from 'src/styles/border.css.ts';
import { colors } from 'src/styles/colors.css.ts';
import { dark } from 'src/styles/themes.css';

globalStyle(main, {
	display: 'flex',
	flexDirection: 'column',
	backgroundColor: colors.milk,

	paddingInline: '1rem',
	paddingBlock: '4rem',
	gap: '2rem',

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
	gap: '2rem',
});

globalStyle(`${main} a:hover`, {
	textDecoration: 'underline',
	textUnderlineOffset: '0.25rem',
});
