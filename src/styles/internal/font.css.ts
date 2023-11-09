import { FontMetrics, createStyleObject } from '@capsizecss/core';
import { StyleRule } from '@vanilla-extract/css';

import { font } from './layers.css.ts';
import { merge } from './merge.css.ts';
import { MediaQueries } from './screens.css.ts';

type FontOptions = {
	capHeight: number;
	lineGap: number;
};

type StyleRuleWithFontOptions = { fontOptions?: FontOptions } & StyleRule;

export type FontRule = StyleRuleWithFontOptions & MediaQueries<StyleRuleWithFontOptions>;

// TODO: Support `FontRule | Array<FontRule>`
export type ComplexFontRule = FontRule[];

const mapCategoryToGeneric = new Map([
	['serif', 'serif'],
	['sans-serif', 'sans-serif'],
	['monospace', 'monospace'],
	['display', 'sans-serif'],
	['handwriting', 'cursive'],
]);

// TODO: Clean up
export function createFont(metrics: FontMetrics): (rule: ComplexFontRule) => StyleRule {
	return function (rules) {
		const styleRules: StyleRule[] = [
			{
				display: 'block',
				fontFamily: `"${metrics.familyName}", ${
					metrics.category && (mapCategoryToGeneric.get(metrics.category) || 'sans-serif')
				}`,
			},
		];

		rules.forEach((rule) => {
			if ('@media' in rule) {
				const queries = rule['@media'];
				Object.entries(queries).forEach(([query, queryRule]) => {
					const { fontOptions, ...queryRuleWithoutFontOptions } = queryRule;
					if (fontOptions !== undefined) {
						styleRules.push({
							'@media': {
								[query]: createStyleObject({
									capHeight: fontOptions.capHeight,
									lineGap: fontOptions.lineGap,
									fontMetrics: metrics,
								}),
							},
						});
					}
					styleRules.push({
						'@media': {
							[query]: queryRuleWithoutFontOptions,
						},
					});
				});
			}

			if ('fontOptions' in rule) {
				const { fontOptions, ...ruleWithoutFontOptions } = rule;
				styleRules.push({
					...ruleWithoutFontOptions,
					...createStyleObject({
						capHeight: fontOptions.capHeight,
						lineGap: fontOptions.lineGap,
						fontMetrics: metrics,
					}),
				});
			}
		});

		return { '@layer': { [font]: merge(styleRules) } };
	};
}
