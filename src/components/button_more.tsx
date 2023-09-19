import { ParentComponent, onMount } from 'solid-js';

import { SvgWaveArrowRight } from 'src/svg/arrows.tsx';

import {
	ANIMATION_OUT_ACTIVE,
	animation_in,
	animation_out,
	button_more,
	icon,
	text,
} from './button_more.css.ts';

export type ButtonMoreProps = {
	href: string;
	class?: string;
};

export const ButtonMore: ParentComponent<ButtonMoreProps> = function (props) {
	let ref: HTMLAnchorElement;

	onMount(() => {
		ref.addEventListener('animationstart', function (e) {
			if (e.animationName === animation_in) {
				ref.setAttribute(ANIMATION_OUT_ACTIVE, '');
			}
		});

		ref.addEventListener('animationend', function (e) {
			if (e.animationName === animation_out) {
				ref.removeAttribute(ANIMATION_OUT_ACTIVE);
			}
		});
	});

	return (
		<a
			ref={ref!}
			href={props.href}
			class={props.class ? `${props.class} ${button_more}` : button_more}
		>
			<div class={icon}>
				<SvgWaveArrowRight />
			</div>
			<p class={text}>{props.children}</p>
		</a>
	);
};
