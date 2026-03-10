// TODO: Polish and use in Ark's <Collapsible />

import { merge, pipe } from "remeda";
import { splitProps } from "solid-js";
import type { ComponentProps, ParentComponent } from "solid-js";

import { Dither } from "src/components/dither.tsx";
import { colors, lineThicknessPx, on, transitionTimingFunction } from "src/css.ts";

export type ButtonProps = ComponentProps<"button">;

export const Button: ParentComponent<ButtonProps> = function Button(props) {
	const [style, other] = splitProps(props, ["style"]);

	return (
		<button
			{...other}
			style={{
				"border-radius": "36px",
				height: "36px",
				position: "relative",
			}}
		>
			<Dither
				style={pipe(
					{
						"-moz-outline-radius": "36px",
						"border-radius": "36px",
						inset: 0,
						position: "absolute",
						"transition-duration": "100ms",
						"transition-property": "background-color",
						"transition-timing-function": transitionTimingFunction,
						translate: "0 6px",
					},
					on(":is(:hover, :focus-visible) > &", {
						"background-color": colors.espresso,
					}),
				)}
			/>
			<div
				style={pipe(
					{
						"background-color": colors.milk,
						"border-color": colors.espresso,
						"border-radius": "36px",
						"border-width": `${lineThicknessPx}px`,
						height: "36px",
						position: "relative",
						"transition-duration": "100ms",
						"transition-property": "translate",
						"transition-timing-function": transitionTimingFunction,
					},
					on(":active > &", {
						translate: "0 2px",
					}),
					merge(style.style),
				)}
			>
				{props.children}
			</div>
		</button>
	);
};
