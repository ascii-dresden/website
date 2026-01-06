/**
 * Maps the values of an object using a mapping function.
 * @param obj - The object to map.
 * @param mapFn - The mapping function that takes a key and its value, and returns a new value.
 * @returns A new object with the mapped values.
 * @example
 * const obj = { a: 1, b: 2, c: 3 };
 * const mapped = mapObject(obj, (key, value) => value * 2);
 * // mapped is { a: 2, b: 4, c: 6 }
 */
export function mapObject<T, U>(obj: Record<string, T>, mapFn: (key: string, value: T) => U) {
	return mapObjectWithKeys(obj, (key, value) => [key, mapFn(key, value)]);
}

/**
 * Maps the keys and values of an object using a mapping function.
 * @param obj - The object to map.
 * @param mapFn - The mapping function that takes a key and its value, and returns a new key-value pair.
 * @returns A new object with the mapped keys and values.
 * @example
 * const obj = { a: "hallo", b: 2, c: 3 };
 * const mapped = mapObjectWithKeys(obj, (key, value) => [key.toUpperCase(), value * 2]);
 * // mapped is { A: 2, B: 4, C: 6 }
 */
export function mapObjectWithKeys<T, U>(
	obj: Record<string, T>,
	mapFn: (key: string, value: T) => [string, U]
) {
	return Object.fromEntries(Object.entries(obj).map(([key, value]) => mapFn(key, value)));
}
