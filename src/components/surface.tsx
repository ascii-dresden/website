import { merge, pipe } from "remeda";
import { type ComponentProps, splitProps, type ValidComponent } from "solid-js";
import { Dynamic } from "solid-js/web";

import { Dither } from "src/components/dither.tsx";
import { colors, lineThicknessPx } from "src/css.ts";

export type SurfaceProps<T extends ValidComponent = "div"> = ComponentProps<T> & {
	as?: T;
	rootProps?: ComponentProps<"div">;
};

/**
 * A raised surface with a dithered drop shadow.
 *
 * ## Limitations
 *
 * Since the props are applied to a child component, setting certain style
 * properties like positioning (`top`, `right`, `bottom`, `left`) may create an
 * undesired or unpredictable outcome. We will leave this as a limitation for now
 * and worry about it when it becomes relevant.
 */
export function Surface<T extends ValidComponent>(props: SurfaceProps<T>) {
	const [local, others] = splitProps(props, ["as", "rootProps"]);

	return (
		<div
			{...local.rootProps}
			style={{
				position: "relative",
				...local.rootProps?.style,
			}}
		>
			<Dither
				style={{
					// Inherit border radius of sibling
					// NOTE: UB if `style` is a string, and not an object
					"border-radius": others.style?.["border-radius"],
					position: "absolute",
					translate: "-6px 6px",
					inset: 0,
				}}
			/>
			<Dynamic
				component={local.as ?? "div"}
				{...others}
				style={pipe(
					{
						position: "relative",
						width: "100%",
						height: "100%",
						"background-color": colors.milk,
						"border-color": colors.espresso,
						"border-radius": "8px",
						"border-style": "solid",
						"border-width": `${lineThicknessPx}px`,
					} as const,
					merge(others.style)
				)}
			/>
		</div>
	);
}
