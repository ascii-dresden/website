import { styleSheet } from "src/css.ts";

import "tailwindcss/preflight.css";
import "@fontsource/maple-mono";

export const Head = function () {
	return <style>{styleSheet()}</style>;
};
