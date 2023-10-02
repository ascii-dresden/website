import { Component, For } from 'solid-js';

import { IconButton } from 'src/components/button.tsx';
import { SvgClose, SvgMenu } from 'src/svg/header.tsx';
import { SvgInstagram, SvgGithub } from 'src/svg/socials.tsx';
import { SvgTheme } from 'src/svg/theme.tsx';
import { getTheme, setTheme } from 'src/theme.ts';

import {
	ANIMATION_OUT_ACTIVE,
	navigation,
	navigation_toggle,
	navigation_link,
	navigation_link_label,
	navigation_link_label_slash,
	navigation_links,
	navigation_button_social,
	navigation_socials,
	navigation_button_theme,
} from './navigation.css.ts';

const ROUTES = [
	{ name: 'home', path: '/' },
	{ name: 'events', path: '/events' },
	{ name: 'angebot', path: '/angebot' },
	{ name: 'verein', path: '/verein' },
	{ name: 'öffnung', path: '/#business_hours' },
] as const;

export const Navigation: Component = function () {
	let dialog: HTMLDialogElement;

	function open() {
		dialog.showModal();
	}

	function close() {
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
			<button class={navigation_toggle} type="button" onClick={open}>
				<SvgMenu />
			</button>
			<dialog class={navigation} ref={dialog!} onCancel={close}>
				<button type="submit" class={navigation_toggle} onClick={close}>
					<SvgClose />
				</button>
				<nav class={navigation_links}>
					<ul>
						<For each={ROUTES}>
							{({ name, path }) => (
								<li>
									<a href={path} class={navigation_link} onClick={close}>
										<p class={navigation_link_label}>{name}</p>
										<p class={navigation_link_label_slash}>{path === '/' ? '~' : '/'}</p>
									</a>
								</li>
							)}
						</For>
					</ul>
				</nav>
				<IconButton
					class={navigation_button_theme}
					onClick={() => setTheme(getTheme() === 'light' ? 'dark' : 'light')}
				>
					<SvgTheme />
				</IconButton>
				<ul class={navigation_socials}>
					<li>
						<IconButton
							href="https://www.instagram.com/asciidresden/"
							class={navigation_button_social}
						>
							<SvgInstagram />
						</IconButton>
					</li>
					<li>
						<IconButton href="https://github.com/ascii-dresden" class={navigation_button_social}>
							<SvgGithub />
						</IconButton>
					</li>
				</ul>
			</dialog>
		</>
	);
};
