import { literal, optional, parse, union } from "@valibot/valibot";
import { createContext, useContext } from "solid-js";

export type Theme = "light" | "dark" | "system";

export const ThemeContext = createContext<Theme>("system");

/**
 * Shorthand for `useContext(ThemeContext)`
 */
export function useTheme() {
	return useContext(ThemeContext);
}

const THEME_LOCAL_STORAGE_KEY = "theme";

const ThemeSchema = optional(
	union([literal("light"), literal("dark"), literal("system")]),
	"system"
);

/**
 * Try to load theme from `localStorage`.
 * Returns `system` if its unspecified.
 * Throws an error if it contains gibberish.
 */
export function loadTheme(): Theme {
	return parse(ThemeSchema, localStorage.getItem(THEME_LOCAL_STORAGE_KEY));
}

/**
 * Save theme to `localStorage`.
 */
export function saveTheme(theme: Theme) {
	localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
}
