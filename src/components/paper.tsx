import type { ComponentProps, ValidComponent } from "solid-js";
import { Dynamic } from "solid-js/web";

import { colors, lineThicknessPx } from "src/css.ts";

export type PaperProps<T extends ValidComponent = "div"> = ComponentProps<T> & {
	as?: T;
};

export function Paper<T extends ValidComponent>(props: PaperProps<T>) {
	return (
		<Dynamic
			component={props.as ?? "div"}
			style={{
				position: "relative",
				"background-color": colors.milk,
				color: colors.espresso,
				"border-radius": "8px",
				"border-bottom-right-radius": "16px",
				"border-color": colors.espresso,
				"border-width": `${lineThicknessPx}px`,
				"corner-bottom-right-shape": "bevel",
				...props.style,
			}}
		>
			<div
				aria-hidden
				style={{
					position: "absolute",
					bottom: `-${lineThicknessPx}px`,
					right: `-${lineThicknessPx}px`,
					width: `${16 + lineThicknessPx}px`,
					height: `${16 + lineThicknessPx}px`,
					"background-color": colors.milk,
					"border-top-left-radius": "6px",
					"border-width": `${lineThicknessPx}px`,
					"border-color": colors.espresso,
					"border-bottom-right-radius": "16px",
					"corner-bottom-right-shape": "bevel",
				}}
			/>
			{props.children}
		</Dynamic>
	);
}
