/**
 * @file Derived from <https://github.com/RossWilliams/ts-case-convert>
 */

import { mapKeys } from "remeda";

/**
 * Convert a given snake_case literal into camelCase.
 * Passing in a string that isn't snake_case is undefined behavior.
 * @example
 * SnakeToCamel<"hello_world">
 * // -> "helloWorld"
 */
export type SnakeToCamel<S> = S extends string
	? S extends `${infer Head}_${infer Tail}`
		? `${SnakeToCamel<Uncapitalize<Head>>}${Capitalize<SnakeToCamel<Tail>>}`
		: Uncapitalize<S>
	: S;

/**
 * Convert a given snake_case string into camelCase.
 * Passing in a string that isn't snake_case is undefined behavior.
 * @example
 * snakeToCamel("hello_world")
 * // -> "helloWorld"
 */
export function snakeToCamel<T extends string>(input: T): SnakeToCamel<T> {
	return input
		.replace(/^([A-Z])/, (m) => m[0].toLowerCase())
		.replace(/[_]([a-z0-9])/g, (m) => m[1].toUpperCase()) as SnakeToCamel<T>;
}

/**
 * Map the keys of an object from snake_case to camelCase.
 * Assumes that the keys are in snake_case.
 * Does **not** recurse into nested objects.
 * @example
 * mapSnakeKeysToCamel({
 *   hello_world: "foo",
 *   nested: {
 *     other_thing: "bar",
 *   },
 * });
 * // -> {
 *   helloWorld: "foo",
 *   nested: {
 *     other_thing: "bar",
 *   },
 * }
 */
export function mapSnakeKeysToCamel<T extends {}>(
	input: T
): {
	[K in keyof T as SnakeToCamel<K>]: T[K];
} {
	return mapKeys(input, (key) => snakeToCamel(key)) as unknown as {
		[K in keyof T as SnakeToCamel<K>]: T[K];
	};
}
