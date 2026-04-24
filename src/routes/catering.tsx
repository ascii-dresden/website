import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/catering")({
	component: Catering,
});

function Catering() {
	return (
		<main>
			<h1>Catering</h1>
		</main>
	);
}
