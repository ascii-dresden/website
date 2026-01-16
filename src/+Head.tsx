import { styleSheet } from "src/css.ts";

import "tailwindcss/preflight.css";
import "@fontsource/maple-mono";

import "src/global.css";

export const Head = function () {
	return <style>{styleSheet()}</style>;
};
