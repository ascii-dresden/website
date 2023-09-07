import { Component, For } from 'solid-js';

import { SvgClose, SvgMenu } from 'src/svg/header.tsx';
import { SvgInstagram, SvgGithub } from 'src/svg/socials.tsx';
import { SvgTheme } from 'src/svg/theme.tsx';

import { getTheme, setTheme } from 'src/theme.ts';

import {
	ANIMATION_OUT_ACTIVE,
	navigation,
	navigation_button,
	navigation_link,
	navigation_link_label,
	navigation_link_label_hover,
	navigation_links,
	navigation_social,
	navigation_socials,
	navigation_theme,
} from './navigation.css.ts';

const ROUTES = [
	{ name: 'ascii', path: '/' },
	{ name: 'events', path: '/events' },
	{ name: 'angebot', path: '/angebot' },
	{ name: 'verein', path: '/verein' },
	{ name: 'öffnung', path: '/öffnung' },
] as const;

export const Navigation: Component = function () {
	let dialog: HTMLDialogElement;

	function open() {
		dialog.showModal();
	}

	function close(event: Event) {
		event.preventDefault();
		dialog.setAttribute(ANIMATION_OUT_ACTIVE, '');
		function listener(event: Event) {
			if (event.target !== dialog) return;
			dialog.removeAttribute(ANIMATION_OUT_ACTIVE);
			dialog.close();
			dialog.removeEventListener('animationend', listener);
		}
		dialog.addEventListener('animationend', listener);
	}

	return (
		<>
			<button class={navigation_button} type="button" onClick={open}>
				<SvgMenu />
			</button>
			<dialog class={navigation} ref={dialog!} onCancel={close}>
				<button type="submit" class={navigation_button} onClick={close}>
					<SvgClose />
				</button>
				<nav class={navigation_links}>
					<ul>
						<For each={ROUTES}>
							{({ name, path }) => (
								<li>
									<a href={path} class={navigation_link}>
										<p class={navigation_link_label}>{name}</p>
										<p class={navigation_link_label_hover}>/</p>
									</a>
								</li>
							)}
						</For>
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
						<a href="https://www.instagram.com/asciidresden/" class={navigation_social}>
							<SvgInstagram />
						</a>
					</li>
					<li>
						<a href="https://github.com/ascii-dresden" class={navigation_social}>
							<SvgGithub />
						</a>
					</li>
				</ul>
			</dialog>
		</>
	);
};
