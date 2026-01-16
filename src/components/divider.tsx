import type { DataType, Globals } from "csstype";
import { type Component, createMemo, type JSX, splitProps } from "solid-js";

import { lineThicknessPx } from "src/css.ts";

const SIZE_PX = 6;

const patternWidthPx = SIZE_PX * 4;
const patternHeightPx = SIZE_PX + lineThicknessPx;

const startY = lineThicknessPx / 2;
const endY = SIZE_PX + lineThicknessPx / 2;

export type DividerProps = {
	backgroundColor?: Globals | DataType.Color;
	lineColor: Globals | DataType.Color;
	/**
	 * TODO: Implement
	 */
	flip?: boolean;
} & JSX.HTMLAttributes<HTMLDivElement>;

export const Divider: Component<DividerProps> = function (props) {
	const [local, others] = splitProps(props, ["backgroundColor", "lineColor"]);

	// TODO: Generate pattern ID
	// const patternId = createMemo(() => hash("sha1", Object.values(local).join(";"), "hex"));
	const patternId = createMemo(() => "foo");

	return (
		<div
			style={{
				height: 0,
			}}
			{...others}
		>
			<svg
				preserve-aspect-ratio="none"
				width="100%"
				height={patternHeightPx}
				style={{
					translate: `0 ${lineThicknessPx / 2 - patternHeightPx}px`,
				}}
			>
				<title>Squiggle</title>
				<defs>
					<pattern
						id={patternId()}
						patternUnits="userSpaceOnUse"
						viewBox={`0 0 ${patternWidthPx} ${patternHeightPx}`}
						width={patternWidthPx}
						height={patternHeightPx}
					>
						<path
							style={{
								fill: local.backgroundColor,
								stroke: local.lineColor,
								"stroke-width": lineThicknessPx,
							}}
							d={[
								`M0,${endY}`,
								`C${SIZE_PX},${endY} ${SIZE_PX},${startY} ${SIZE_PX * 2},${startY}`,
								`C${SIZE_PX * 3},${startY} ${SIZE_PX * 3},${endY} ${patternWidthPx},${endY}`,
							].join(" ")}
						/>
					</pattern>
				</defs>
				<rect width="100%" height="100%" fill={`url(#${patternId()})`} />
			</svg>
		</div>
	);
};
