import { Component, createSignal } from 'solid-js';

import asset_icon_menu from 'src/assets/icons/menu.svg';

import { navigation, navigation_button } from './header_navigation.css.ts';

export const [open, setOpen] = createSignal(true);

export const Navigation: Component = function () {
	let dialog: HTMLDialogElement;

	return (
		<>
			<button class={navigation_button} type="button" onClick={() => dialog.showModal()}>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
				>
					<path d="M4,16C1.792,16 -0,14.208 0,12C0,9.792 1.792,8 4,8L20,8C22.208,8 24,9.792 24,12C24,14.208 22.208,16 20,16L4,16ZM4,13.5L20,13.5C20.828,13.5 21.5,12.828 21.5,12C21.5,11.172 20.828,10.5 20,10.5L4,10.5C3.172,10.5 2.5,11.172 2.5,12C2.5,12.828 3.172,13.5 4,13.5Z" />
					<g transform="matrix(1,0,0,1,-3.55271e-15,5.5)">
						<path d="M4,16C1.792,16 -0,14.208 0,12C0,9.792 1.792,8 4,8L20,8C22.208,8 24,9.792 24,12C24,14.208 22.208,16 20,16L4,16ZM4,13.5L20,13.5C20.828,13.5 21.5,12.828 21.5,12C21.5,11.172 20.828,10.5 20,10.5L4,10.5C3.172,10.5 2.5,11.172 2.5,12C2.5,12.828 3.172,13.5 4,13.5Z" />
					</g>
					<g transform="matrix(1,0,0,1,0,-5.5)">
						<path d="M4,16C1.792,16 -0,14.208 0,12C0,9.792 1.792,8 4,8L20,8C22.208,8 24,9.792 24,12C24,14.208 22.208,16 20,16L4,16ZM4,13.5L20,13.5C20.828,13.5 21.5,12.828 21.5,12C21.5,11.172 20.828,10.5 20,10.5L4,10.5C3.172,10.5 2.5,11.172 2.5,12C2.5,12.828 3.172,13.5 4,13.5Z" />
					</g>
				</svg>
			</button>
			<dialog class={navigation} ref={dialog!}>
				<form method="dialog">
					<button type="submit">X</button>
				</form>
				<nav>
					<ul>
						<li>
							<a href="">ascii</a>
						</li>
						<li>
							<a href="">Events</a>
						</li>
						<li>
							<a href="">Angebot</a>
						</li>
						<li>
							<a href="">Verein</a>
						</li>
						<li>
							<a href="">Öffnung</a>
						</li>
					</ul>
				</nav>
			</dialog>
		</>
	);
};
