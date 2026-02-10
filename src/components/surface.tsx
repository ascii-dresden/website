import { merge, pipe } from "remeda";
import { type ComponentProps, splitProps, type ValidComponent } from "solid-js";
import { Dynamic } from "solid-js/web";

import assetDither from "src/assets/dither.svg?no-inline";
import { colors, lineThicknessPx } from "src/css.ts";

export type SurfaceProps<T extends ValidComponent> = { as?: T } & ComponentProps<T>;

export function Surface<T extends ValidComponent = "div">(props: SurfaceProps<T>) {
	const [local, others] = splitProps(props, ["as"]);

	return (
		<div
			style={{
				position: "relative",
			}}
		>
			<div
				style={pipe({
					"background-image": `url(${assetDither})`,
					"background-repeat": "repeat",
					"background-size": "8px 8px",
					"background-position": "bottom left",
					"border-radius": others.style?.["border-radius"],
					"clip-path":
						"polygon(0 4px, 4px 4px, 4px 0, 100% 0," +
						"100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%," +
						"4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px))",
					bottom: "-6px",
					display: "block",
					left: "-6px",
					position: "absolute",
					right: "6px",
					top: "6px",
				} as const)}
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
