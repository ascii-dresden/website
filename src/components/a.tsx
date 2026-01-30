import { merge, pipe } from "@remeda/remeda";
import type { ComponentProps, ParentComponent } from "solid-js";

import { lineThicknessPx, on } from "src/css.ts";

export type AProps = ComponentProps<"a">;

/**
 * Gap between text and underline
 * See: <https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-offset>
 */
const UNDERLINE_OFFSET = "0.375rem";

export const A: ParentComponent<AProps> = function (props) {
	return (
		<a
			{...props}
			style={pipe(
				{
					"text-decoration-color": "oklch(from currentColor l c h / 0.5)",
					"text-decoration-line": "underline",
					"text-decoration-style": "dotted",
					// Optically balance underdots by increasing their size slightly
					"text-decoration-thickness": `${lineThicknessPx + 1}px`,
					"text-underline-offset": `calc(${UNDERLINE_OFFSET} - 0.5px)`,
				},
				on("&:is(:hover, :focus-visible)", {
					"text-decoration-color": "currentColor",
					"text-decoration-style": "solid",
					"text-decoration-thickness": `${lineThicknessPx}px`,
					"text-underline-offset": `${UNDERLINE_OFFSET}`,
				}),
				merge(props.style)
			)}
		></a>
	);
};
