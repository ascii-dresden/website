import { Component, createMemo } from 'solid-js';

import { border_width } from 'src/styles/border.css.ts';
import { stroke } from 'src/svg/header.css.ts';

import { filler_from, filler_to, gap_filler_from, gap_filler_to } from './divider.css.ts';

const SIZE = 8;

const width = SIZE * 4;
const height = SIZE + border_width;

const startY = border_width / 2;
const endY = SIZE + border_width / 2;

export type DividerProps = {
	class: string;
};

export const Divider: Component<DividerProps> = function (props) {
	const id = createMemo(() => `pattern-${btoa(props.class)}`);

	return (
		<svg
			class={props.class}
			preserve-aspect-ratio="none"
			width="100%"
			height={height}
		>
			<defs>
				<pattern
					id={id()}
					patternUnits="userSpaceOnUse"
					viewBox={`0 0 ${width} ${height}`}
					width={width}
					height={height}
				>
					{/* from */}
					<path
						class={gap_filler_from}
						d={`M0,${startY} L${width},${startY}`}
					/>
					<path
						class={filler_from}
						d={[
							`M0,${startY}`,
							`L0,${endY}`,
							`C${SIZE},${endY} ${SIZE},${startY} ${SIZE * 2},${startY}`,
							`C${SIZE * 3},${startY} ${SIZE * 3},${endY} ${width},${endY}`,
							`L${width},${startY}`,
						].join(' ')}
					/>

					{/* to */}
					<path
						class={gap_filler_to}
						d={`M0,${endY} L${width},${endY}`}
					>
						{' '}
					</path>
					<path
						class={filler_to}
						d={[
							`M0,${endY}`,
							`C${SIZE},${endY} ${SIZE},${startY} ${SIZE * 2},${startY}`,
							`C${SIZE * 3},${startY} ${SIZE * 3},${endY} ${width},${endY}`,
						].join(' ')}
						stroke={stroke}
					/>
				</pattern>
			</defs>
			<rect
				width="100%"
				height="100%"
				fill={`url(#${id()})`}
			/>
		</svg>
	);
};
