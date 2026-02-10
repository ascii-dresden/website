// TODO: Polish and use in Ark's <Collapsible />

import type { ComponentProps, ParentComponent } from "solid-js";

import { colors, lineThicknessPx } from "src/css.ts";

export type ButtonProps = ComponentProps<"button">;

export const Button: ParentComponent<ButtonProps> = function (props) {
	return (
		<button
			style={{
				"background-color": colors.milk,
				"border-color": colors.espresso,
				"border-radius": "8px",
				"border-width": `${lineThicknessPx}px`,
			}}
			{...props}
		>
			{props.children}
		</button>
	);
};
