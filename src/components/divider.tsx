import type { DataType, Globals } from "csstype";
import type { JSX } from "solid-js";

import { lineThicknessPx } from "src/css.ts";

export type DividerProps = JSX.HTMLAttributes<HTMLDivElement> & {
	lineColor: Globals | DataType.Color;
	backgroundColor?: Globals | DataType.Color;
	flip?: boolean;
};

const SIZE_PX = 6;
const PATTERN_WIDTH_PX = 36;
const PATTERN_HEIGHT_PX = 14;
const START_Y = 0;
const END_Y = 14;

export function Divider(props: DividerProps) {
	const patternId = btoa(
		`${props.lineColor}${props.backgroundColor ?? ""}${props.flip ? "flip" : ""}`,
	);

	return (
		<div style={{ height: 0 }} {...props}>
			<svg
				preserveAspectRatio="none"
				width="100%"
				height={PATTERN_HEIGHT_PX}
				style={{
					translate: `0 ${lineThicknessPx / 2 - PATTERN_HEIGHT_PX}px`,
				}}
			>
				<title>Squiggle</title>
				<defs>
					<pattern
						id={patternId}
						patternUnits="userSpaceOnUse"
						viewBox={`0 0 ${PATTERN_WIDTH_PX} ${PATTERN_HEIGHT_PX}`}
						width={PATTERN_WIDTH_PX}
						height={PATTERN_HEIGHT_PX}
					>
						<path
							style={{
								fill: props.backgroundColor ?? "transparent",
								stroke: props.lineColor,
								"stroke-width": lineThicknessPx,
							}}
							d={[
								`M0,${END_Y}`,
								`C${SIZE_PX},${END_Y} ${SIZE_PX},${START_Y} ${SIZE_PX * 2},${START_Y}`,
								`C${SIZE_PX * 3},${START_Y} ${SIZE_PX * 3},${END_Y} ${PATTERN_WIDTH_PX},${END_Y}`,
							].join(" ")}
						></path>
					</pattern>
				</defs>
				<rect width="100%" height="100%" fill={`url(#${patternId})`}></rect>
			</svg>
		</div>
	);
}

export const dividerHeightPx = PATTERN_HEIGHT_PX;
