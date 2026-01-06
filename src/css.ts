import { createHooks } from "@css-hooks/solid";

export const { styleSheet, and, not, on, or } = createHooks(
	// Interactive states
	"&:is(:hover, :focus-visible)",
	// Screen sizes
	"@media (min-width: 480px)",
	"@media (min-width: 768px)",
	"@media (min-width: 1024px)",
	"@media (min-width: 1280px)",
	"@media (min-width: 1600px)",
	// Color scheme
	"@media (prefers-color-scheme: dark)",
	"[data-theme=dark] &",
	"[data-theme=light] &"
);

/**
 * CSS condition
 * To be used in conjunction with `on`.
 *
 * ```tsx
 * <div style={pipe(
 *     {
 *         "background-color": "white",
 *         color: "black",
 *     },
 *     on(dark, {
 *         "background-color": "black",
 *         color: "white",
 *     })
 * )}></div>
 * ```
 */
export const dark = or(
	"[data-theme=dark] &",
	and(not("[data-theme=light] &"), "@media (prefers-color-scheme: dark)")
);

export const colors = {
	black: "oklch(0 0 0)",
	creme: "oklch(0.75 0.1 57)",
	dark_teal: "oklch(0.29 0.04 218)",
	espresso: "oklch(0.27 0.06 40)",
	green: "oklch(0.72 0.16 160)",
	light_teal: "oklch(0.95 0.02 210)",
	milk: "oklch(1 0 0)",
	red: "oklch(0.72 0.18 7)",
} as const;

export const transitionTimingFunction = "cubic-bezier(0.2, 0.0, 0.2, 1.0)";

/**
 * Default thickness of lines and strokes
 * @example
 * ```tsx
 * <div style={{
 *     "border-width": `${lineThicknessPx}px`
 * }} />
 * ```
 * @example
 * ```tsx
 * <a style={{
 *     "text-decoration-line": underline;
 *     "text-decoration-thickness": `${lineThicknessPx}px`
 * }}>Hyperlink</a>
 * ```
 * @example
 * ```tsx
 * <svg style={{
 *     "stroke-width": `${lineThicknessPx}px`
 * }} />
 * ```
 */
export const lineThicknessPx = 2;
