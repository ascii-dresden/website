import type { ComponentProps, ValidComponent } from "solid-js";
import { splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

import { colors, lineThicknessPx } from "src/css.ts";

export type PaperProps<T extends ValidComponent = "div"> = ComponentProps<T> & {
	as?: T;
};

export function Paper<T extends ValidComponent>(props: PaperProps<T>) {
	const [local, others] = splitProps(props, ["as"]);

	return (
		<Dynamic
			component={local.as ?? "div"}
			{...others}
			style={{
				"background-color": colors.milk,
				"border-bottom-right-radius": "16px",
				"border-color": colors.espresso,
				"border-radius": "8px",
				"border-width": `${lineThicknessPx}px`,
				color: colors.espresso,
				// HACK: Use type assertion because `csstype` does not define `corner-shape`
				["corner-bottom-right-shape" as string]: "bevel",
				position: "relative",
				...others.style,
			}}
		>
			<div
				aria-hidden
				style={{
					"background-color": colors.milk,
					"border-bottom-right-radius": "16px",
					"border-color": colors.espresso,
					"border-top-left-radius": "6px",
					"border-width": `${lineThicknessPx}px`,
					bottom: `-${lineThicknessPx}px`,
					// HACK: Use type assertion because `csstype` does not define `corner-shape`
					["corner-bottom-right-shape" as string]: "bevel",
					height: `${16 + lineThicknessPx}px`,
					position: "absolute",
					right: `-${lineThicknessPx}px`,
					width: `${16 + lineThicknessPx}px`,
				}}
			/>
			{props.children}
		</Dynamic>
	);
}
