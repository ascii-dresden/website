import { Component, createSignal, onMount } from 'solid-js';

import { SvgLogo } from 'src/svg/logo.tsx';

import { SETTLE, header, header_logo } from './header.css.ts';

import { Navigation } from './header/navigation.tsx';
import { Status } from './header/status.tsx';

export const Header: Component = function() {
	const [settle, setSettle] = createSignal(false);

	onMount(() => {
		const html = document.documentElement;
		setSettle(html.scrollTop === 0);
		document.addEventListener('scroll', () => {
			setSettle(html.scrollTop === 0);
		});
	});

	return (
		<header class={header} {...{ [SETTLE]: settle() ? '' : undefined }}>
			<a class={header_logo} href="/">
				<SvgLogo />
			</a>
			<Status />
			<Navigation />
		</header>
	);
};
