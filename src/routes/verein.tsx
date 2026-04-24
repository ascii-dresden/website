import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/verein")({
	component: Verein,
});

function Verein() {
	return (
		<main>
			<h1>Verein</h1>
		</main>
	);
}
