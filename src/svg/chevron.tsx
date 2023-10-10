import { Component, JSX } from 'solid-js';

export const SvgExpand: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = function (props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="currentColor"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path
				stroke="none"
				d="M0 0h24v24H0z"
				fill="none"
			/>
			<path d="M6 9l6 6l6 -6" />
		</svg>
	);
};
