import { createContext, useContext } from "solid-js";
import { literal, optional, parse, union } from "valibot";

export type Theme = "light" | "dark" | "system";

export const DEFAULT_THEME: Theme = "system";
const THEME_LOCAL_STORAGE_KEY = "theme";

const ThemeSchema = optional(
	union([literal("light"), literal("dark"), literal("system")]),
	"system",
);

export const ThemeContext = createContext<Theme>("system");

/**
 * Shorthand for `useContext(ThemeContext)`
 */
export function useTheme() {
	return useContext(ThemeContext);
}

/**
 * Try to load theme from `localStorage`.
 * Returns `system` if its unspecified.
 * Throws an error if it contains gibberish.
 */
export function loadTheme(): Theme {
	const theme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY);
	if (!theme) {
		return DEFAULT_THEME;
	}
	return parse(ThemeSchema, theme);
}

/**
 * Save theme to `localStorage`.
 */
export function saveTheme(theme: Theme) {
	localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
}
