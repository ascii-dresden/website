import { GlobalStyleRule } from '@vanilla-extract/css';

export function enumerate(n: number, fn: (i: number) => [string, GlobalStyleRule]) {
	return Object.fromEntries(Array.from({ length: n }).map((_, i) => fn(i)));
}
