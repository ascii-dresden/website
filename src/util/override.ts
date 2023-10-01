export type Override<T, TKey extends string | number | symbol, TValue> = Omit<T, TKey> & {
	[T in TKey]: TValue;
};
