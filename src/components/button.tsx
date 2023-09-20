import { Component, JSX, ParentComponent, createMemo, onMount, splitProps } from 'solid-js';

import { SvgWaveArrowRight } from 'src/svg/arrows.tsx';

import {
	ANIMATION_OUT_ACTIVE,
	animation_in,
	animation_out,
	anchor_button,
	anchor_button_icon,
	anchor_button_text,
	icon_button,
} from './button.css.ts';

export type AnchorButtonProps = JSX.AnchorHTMLAttributes<HTMLAnchorElement>;

export const AnchorButton: ParentComponent<AnchorButtonProps> = function (props) {
	const [childrenProps, anchorProps] = splitProps(props, ['children']);

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
			{...anchorProps}
			class={anchorProps.class ? `${anchorProps.class} ${anchor_button}` : anchor_button}
		>
			<div class={anchor_button_icon}>
				<SvgWaveArrowRight />
			</div>
			<p class={anchor_button_text}>{childrenProps.children}</p>
		</a>
	);
};

export type IconButtonProps =
	| (JSX.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined; children: JSX.Element })
	| (JSX.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; children: JSX.Element });

export const IconButton: Component<IconButtonProps> = function (props) {
	const clazz = createMemo(() => (props.class ? `${props.class} ${icon_button}` : icon_button));
	return (
		<>
			{props.href !== undefined ? (
				<a {...props} class={clazz()}>
					{props.children}
				</a>
			) : (
				<button {...props} class={clazz()}>
					{props.children}
				</button>
			)}
		</>
	);
};
