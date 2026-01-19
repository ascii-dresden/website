import { styleSheet } from "src/css.ts";

import "tailwindcss/preflight.css";
import "@fontsource/maple-mono";

import "src/global.css";

export const Head = function () {
	return (
		<>
			<link
				href="https://api.fontshare.com/v2/css?f[]=chubbo@1,2&display=swap"
				rel="stylesheet"
			/>
			<style>{styleSheet()}</style>
		</>
	);
};
