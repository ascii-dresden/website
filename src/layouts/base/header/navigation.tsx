import { Component, createSignal, onMount } from 'solid-js';

import { SvgClose, SvgMenu } from 'src/svg/menus.tsx';
import { SvgInstagram, SvgGithub } from 'src/svg/socials.tsx';
import { SvgTheme } from 'src/svg/theme.tsx';

import { getTheme, setTheme } from 'src/theme.ts';

import {
	navigation,
	navigation_button,
	navigation_head,
	navigation_link,
	navigation_links,
	navigation_social,
	navigation_socials,
	navigation_theme,
} from './navigation.css.ts';

export const [open, setOpen] = createSignal(true);

export const Navigation: Component = function () {
	let dialog: HTMLDialogElement;

	// Debug
	onMount(() => {
		dialog.showModal();
	});

	return (
		<>
			<button class={navigation_button} type="button" onClick={() => dialog.showModal()}>
				<SvgMenu />
			</button>
			<dialog class={navigation} ref={dialog!}>
				<form method="dialog" class={navigation_head}>
					<button type="submit" class={navigation_button}>
						<SvgClose />
					</button>
				</form>
				<nav class={navigation_links}>
					<ul>
						<li>
							<a href="" class={navigation_link}>
								<p>ascii</p>
							</a>
						</li>
						<li>
							<a href="" class={navigation_link}>
								<p>events</p>
							</a>
						</li>
						<li>
							<a href="" class={navigation_link}>
								<p>angebot</p>
							</a>
						</li>
						<li>
							<a href="" class={navigation_link}>
								<p>verein</p>
							</a>
						</li>
						<li>
							<a href="" class={navigation_link}>
								<p>öffnung</p>
							</a>
						</li>
					</ul>
				</nav>

				<button
					class={navigation_theme}
					onClick={() => setTheme(getTheme() === 'light' ? 'dark' : 'light')}
				>
					<SvgTheme />
				</button>
				<ul class={navigation_socials}>
					<li>
						<a href="https://github.com/ascii-dresden" class={navigation_social}>
							<SvgInstagram />
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/asciidresden/" class={navigation_social}>
							<SvgGithub />
						</a>
					</li>
				</ul>
			</dialog>
		</>
	);
};
