/**
 * @file Derived from <https://github.com/RossWilliams/ts-case-convert>
 */

export type SnakeToCamel<S> = S extends string
	? S extends `${infer Head}_${infer Tail}`
		? `${SnakeToCamel<Uncapitalize<Head>>}${Capitalize<SnakeToCamel<Tail>>}`
		: Uncapitalize<S>
	: S;

/**
 * Convert a given snake_case string into camelCase.
 * Passing in a string that isn't snake_case is undefined behavior.
 */
export function snakeToCamel<T extends string>(input: T): SnakeToCamel<T> {
	return input
		.replace(/^([A-Z])/, (m) => m[0].toLowerCase())
		.replace(/[_]([a-z0-9])/g, (m) => m[1].toUpperCase()) as SnakeToCamel<T>;
}

/**
 * Map the keys of an object to camelCase.
 * Assumes the keys are snake_case.
 * Does **not** recursively enter nested objects.
 */
export function mapSnakeToCamel<K extends string, V>(
	input: Record<K, V>
): Record<SnakeToCamel<K>, V> {
	return Object.fromEntries(
		Object.entries(input).map(([key, value]) => [snakeToCamel(key), value])
	) as Record<SnakeToCamel<K>, V>;
}
