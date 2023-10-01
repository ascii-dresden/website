import { Temporal } from 'temporal-polyfill';
import { parse, object, string, coerce, Input } from 'valibot';
import { load } from 'js-yaml';

import yaml from 'src/content/_angebot.yaml?raw';
import { Override } from 'src/util/override';

const schema = object({
	title: string(),
	description: string(),
	year_month: coerce(string(), String),
});

export type Angebot = Override<Input<typeof schema>, 'year_month', Temporal.PlainYearMonth>;

export const useAngebot = function (): Angebot {
	const raw = load(yaml);
	const angebot = parse(schema, raw);

	return {
		...angebot,
		year_month: Temporal.PlainYearMonth.from(angebot.year_month),
	};
};
