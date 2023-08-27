import { GlobalStyleRule } from '@vanilla-extract/css';

export function repeat(n: number, fn: (i: number) => [string, GlobalStyleRule]) {
	return Object.fromEntries(Array.from({ length: n }).map((_, i) => fn(i)));
}
