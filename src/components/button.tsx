import { JSX, ParentComponent, onMount } from 'solid-js';

import { SvgWaveArrowRight } from 'src/svg/arrows.tsx';

import {
	ANIMATION_OUT_ACTIVE,
	animation_in,
	animation_out,
	button_more,
	icon,
	text,
} from './button.css.ts';

export type AnchorButtonProps = JSX.AnchorHTMLAttributes<HTMLAnchorElement>;

export const AnchorButton: ParentComponent<AnchorButtonProps> = function (props) {
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
		<a ref={ref!} {...props} class={props.class ? `${props.class} ${button_more}` : button_more}>
			<div class={icon}>
				<SvgWaveArrowRight />
			</div>
			<p class={text}>{props.children}</p>
		</a>
	);
};
