import { pipe } from "remeda";
import type { ComponentProps, ParentComponent } from "solid-js";

import { lineThicknessPx, on, transitionTimingFunction } from "src/css.ts";

// TODO: Use a border instead of text-decoration, so non-text elements can be used inside the component
export const A: ParentComponent<ComponentProps<"a">> = function A(props) {
	return (
		<a {...props}>
			<span style={{ position: "relative" }}>
				{props.children}
				<span
					aria-hidden
					style={{
						bottom: "-0.25rem",
						left: 0,
						overflow: "hidden",
						position: "absolute",
						right: 0,
					}}
				>
					{/* Dotted line */}
					<span
						style={pipe(
							{
								display: "block",
								"border-top-color": "oklch(from currentColor l c h / 0.5)",
								"border-top-style": "dotted",
								// Optically balance underdots by increasing their size slightly
								"border-top-width": `${lineThicknessPx + 1}px`,
								"clip-path": "rect(auto auto auto auto)",
								"transition-property": "clip-path",
								"transition-duration": "150ms",
								"transition-timing-function": transitionTimingFunction,
							},
							on("a:is(:hover, :focus-visible) &", {
								"clip-path": "rect(auto auto auto 100%)",
							}),
						)}
					/>
					{/* Solid line */}
					<span
						style={pipe(
							{
								"border-top-color": "currentColor",
								"border-top-style": "solid",
								"border-top-width": `${lineThicknessPx}px`,
								bottom: "1px",
								display: "block",
								left: 0,
								position: "absolute",
								right: 0,
								"transition-duration": "150ms",
								"transition-property": "translate",
								"transition-timing-function": transitionTimingFunction,
								translate: "-100%",
							},
							on("a:is(:hover, :focus-visible) &", {
								translate: 0,
							}),
						)}
					/>
				</span>
			</span>
		</a>
	);
};
