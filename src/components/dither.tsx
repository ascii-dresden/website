import { splitProps } from "solid-js";
import type { ComponentProps, ValidComponent } from "solid-js";
import { Dynamic } from "solid-js/web";

import assetDither from "src/assets/dither.svg?no-inline";

export type DitherProps<T extends ValidComponent = "div"> = ComponentProps<T> & {
	as?: T;
};

export function Dither<T extends ValidComponent>(props: DitherProps<T>) {
	const [local, others] = splitProps(props, ["as"]);

	return (
		<Dynamic
			component={local.as ?? "div"}
			{...others}
			style={{
				"background-image": `url(${assetDither})`,
				"background-position": "bottom left",
				"background-repeat": "repeat",
				"background-size": "8px 8px",
				"clip-path":
					"polygon(0 4px, 4px 4px, 4px 0, 100% 0," +
					"100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%," +
					"4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px))",
				...others.style,
			}}
		></Dynamic>
	);
}
