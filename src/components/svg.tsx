import type { Component, ComponentProps } from "solid-js";

export const ChevronDown: Component<ComponentProps<"svg">> = function (props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			{...props}
		>
			<title>Chevron Down</title>
			<path d="M6 9l6 6l6 -6" />
		</svg>
	);
};
