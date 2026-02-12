// TODO: Polish and use in Ark's <Collapsible />

import { merge, pipe } from "remeda";
import { type ComponentProps, type ParentComponent, splitProps } from "solid-js";

import { Dither } from "src/components/dither.tsx";
import { colors, lineThicknessPx, on, transitionTimingFunction } from "src/css.ts";

export type ButtonProps = ComponentProps<"button">;

export const Button: ParentComponent<ButtonProps> = function (props) {
	const [style, other] = splitProps(props, ["style"]);

	return (
		<button
			{...other}
			style={{
				position: "relative",
				height: "36px",
				"border-radius": "36px",
			}}
		>
			<Dither
				style={pipe(
					{
						"border-radius": "36px",
						"-moz-outline-radius": "36px",
						position: "absolute",
						inset: 0,
						translate: "0 6px",
						"transition-property": "background-color",
						"transition-duration": "100ms",
						"transition-timing-function": transitionTimingFunction,
					},
					on(":is(:hover, :focus-visible) > &", {
						"background-color": colors.espresso,
					})
				)}
			/>
			<div
				style={pipe(
					{
						position: "relative",
						height: "36px",
						"background-color": colors.milk,
						"border-color": colors.espresso,
						"border-radius": "36px",
						"border-width": `${lineThicknessPx}px`,
						"transition-property": "translate",
						"transition-duration": "100ms",
						"transition-timing-function": transitionTimingFunction,
					},
					on(":active > &", {
						translate: "0 2px",
					}),
					merge(style.style)
				)}
			>
				{props.children}
			</div>
		</button>
	);
};
