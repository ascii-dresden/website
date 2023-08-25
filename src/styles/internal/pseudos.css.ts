import { GlobalStyleRule, StyleRule, globalStyle } from '@vanilla-extract/css';
import { SimplePseudos } from 'csstype';
import deepmerge from 'deepmerge';

import { filterWithRemainder } from 'src/util/filter_with_remainder.ts';

// Extracted from @vanilla-extract/css/src/simplePseudos.ts
export const SIMPLE_PSEUDOS: readonly SimplePseudos[] = [
	':-moz-any-link',
	':-moz-full-screen',
	':-moz-placeholder',
	':-moz-read-only',
	':-moz-read-write',
	':-ms-fullscreen',
	':-ms-input-placeholder',
	':-webkit-any-link',
	':-webkit-full-screen',
	'::-moz-placeholder',
	'::-moz-progress-bar',
	'::-moz-range-progress',
	'::-moz-range-thumb',
	'::-moz-range-track',
	'::-moz-selection',
	'::-ms-backdrop',
	'::-ms-browse',
	'::-ms-check',
	'::-ms-clear',
	'::-ms-fill',
	'::-ms-fill-lower',
	'::-ms-fill-upper',
	'::-ms-reveal',
	'::-ms-thumb',
	'::-ms-ticks-after',
	'::-ms-ticks-before',
	'::-ms-tooltip',
	'::-ms-track',
	'::-ms-value',
	'::-webkit-backdrop',
	'::-webkit-input-placeholder',
	'::-webkit-progress-bar',
	'::-webkit-progress-inner-value',
	'::-webkit-progress-value',
	'::-webkit-slider-runnable-track',
	'::-webkit-slider-thumb',
	'::after',
	'::backdrop',
	'::before',
	'::cue',
	'::first-letter',
	'::first-line',
	'::grammar-error',
	'::placeholder',
	'::selection',
	'::spelling-error',
	':active',
	':after',
	':any-link',
	':before',
	':blank',
	':checked',
	':default',
	':defined',
	':disabled',
	':empty',
	':enabled',
	':first',
	':first-child',
	':first-letter',
	':first-line',
	':first-of-type',
	':focus',
	':focus-visible',
	':focus-within',
	':fullscreen',
	':hover',
	':in-range',
	':indeterminate',
	':invalid',
	':last-child',
	':last-of-type',
	':left',
	':link',
	':only-child',
	':only-of-type',
	':optional',
	':out-of-range',
	':placeholder-shown',
	':read-only',
	':read-write',
	':required',
	':right',
	':root',
	':scope',
	':target',
	':valid',
	':visited',
] as const;

const QUERY_TYPES = ['@media', '@layer', '@supports', '@container'] as const;

/**
 * Filter an array consisting of key-value pairs.
 * @param array - The array to filter
 * @param includes - The keys to include
 */
function filterEntriesByKey<K, V>(
	array: Array<[K, V]>,
	includes: readonly K[]
): { filtered: Array<[K, V]>; remainder: Array<[K, V]> } {
	return filterWithRemainder(array, ([key]) => includes.includes(key));
}

/**
 * Convert a {@link StyleRule} to an array of {@link GlobalStyleRule}s
 */
function toGlobalStyleRules(rule: StyleRule): Array<{
	pseudo: SimplePseudos | null;
	rule: GlobalStyleRule;
}> {
	const globalStyleMap: Map<SimplePseudos | '', GlobalStyleRule> = new Map();

	function setGlobalStyle(rule: GlobalStyleRule, pseudo?: SimplePseudos): void {
		const currentGlobalStyleRule: GlobalStyleRule = globalStyleMap.get(pseudo ?? '') ?? {};
		globalStyleMap.set(pseudo ?? '', deepmerge(currentGlobalStyleRule, rule));
	}

	const ruleEntries = Object.entries(rule);

	const { filtered: ruleEntriesOnlyPseudos, remainder: ruleEntriesWithoutPseudos } =
		filterEntriesByKey(ruleEntries, SIMPLE_PSEUDOS);

	ruleEntriesOnlyPseudos.forEach(([pseudo, pseudoRules]) =>
		setGlobalStyle(pseudoRules, pseudo as SimplePseudos)
	);

	const { filtered: ruleEntriesOnlyQueries, remainder: ruleEntriesWithoutPseudosAndQueries } =
		filterEntriesByKey(ruleEntriesWithoutPseudos, QUERY_TYPES);

	ruleEntriesWithoutPseudosAndQueries.forEach(([key, value]) => setGlobalStyle({ [key]: value }));

	ruleEntriesOnlyQueries.forEach(([queryType, queryRules]) => {
		Object.entries(queryRules).forEach(([query, queryRule]) => {
			toGlobalStyleRules(queryRule as GlobalStyleRule).forEach(({ pseudo, rule }) => {
				const globalStyleRule = {
					[queryType]: {
						[query]: rule,
					},
				};
				setGlobalStyle(globalStyleRule, pseudo ?? undefined);
			});
		});
	});

	return [...globalStyleMap.entries()].map(([pseudo, rule]) => ({
		pseudo: pseudo === '' ? null : pseudo,
		rule,
	}));
}

/**
 * Wrapper for {@link globalStyle} that allows the use of pseudo selectors.
 */
export function globalStyleWithPseudos(selector: string, rule: StyleRule): void {
	toGlobalStyleRules(rule).forEach(({ pseudo, rule }) => {
		if (pseudo === null) {
			return globalStyle(selector, rule);
		}
		return globalStyle(`${selector}${pseudo}`, rule);
	});
}
