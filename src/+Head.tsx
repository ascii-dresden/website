import { styleSheet } from "src/css.ts";

import "tailwindcss/preflight.css";

export const Head = function () {
	return <style>{styleSheet()}</style>;
};
