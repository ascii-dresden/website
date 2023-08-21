import { Component, createSignal } from 'solid-js';

export const [open, setOpen] = createSignal(true);

export const Menu: Component = function () {
	return (
		<aside class={menu} classList={{ hidden: !open() }}>
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
		</aside>
	);
};

export const MenuButton: Component = function () {
	return (
		<button onClick={() => setOpen(!open())}>
			<img class="menu" alt="Menü" src="/menu-icon.svg" />
		</button>
	);
};
