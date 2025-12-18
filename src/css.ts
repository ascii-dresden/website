import { createHooks } from "@css-hooks/solid";

export const { styleSheet, on } = createHooks(
	"&:is(:hover, :focus-visible)",
	"@media (min-width: 1024px)",
	"[data-theme=dark] &"
);
