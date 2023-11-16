import { globalStyle } from '@vanilla-extract/css';
import './_preflight.css.ts';

globalStyle('html', {
	scrollBehavior: 'smooth',
});
