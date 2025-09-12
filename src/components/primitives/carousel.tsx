import {
	Accessor,
	Component,
	For,
	JSX,
	Setter,
	createEffect,
	createSignal,
	onCleanup,
	onMount,
} from 'solid-js';

export type CarouselState<TItem> = {
	items: TItem[];
	itemRefs: Accessor<HTMLLIElement[]>;
	setItemRefs: Setter<HTMLLIElement[]>;
	selected: Accessor<number | undefined>;
	setSelected: Setter<number | undefined>;
	scrollTo: Accessor<((i: number) => void) | undefined>;
	setScrollTo: Setter<((i: number) => void) | undefined>;
};

export type CarouselMeta = {
	observer: IntersectionObserver | undefined;
	setItemRefs: Setter<HTMLLIElement[]>;
};

export type CarouselItemMeta = {
	carousel: CarouselMeta;
	i: number;
};

/**
 *
 */
export function createCarousel<TItem>(items: TItem[]): CarouselState<TItem> {
	const [itemRefs, setItemRefs] = createSignal<HTMLLIElement[]>([]);
	const [selected, setSelected] = createSignal<number>();
	const [scrollTo, setScrollTo] = createSignal<(i: number) => void>();

	return {
		items,
		itemRefs,
		setItemRefs,
		selected,
		setSelected,
		scrollTo,
		setScrollTo,
	};
}

export type CarouselProps<TItem> = Omit<JSX.IntrinsicElements['ol'], 'children'> & {
	carousel: CarouselState<TItem>;
	children: (item: TItem, meta: CarouselItemMeta) => JSX.Element;
};

/**
 *
 */
export function Carousel<TItem>(props: CarouselProps<TItem>): JSX.Element {
	const [observer, setObserver] = createSignal<IntersectionObserver>();

	let ref: HTMLOListElement;

	onMount(() => {
		// initialize IntersectionObserver `observer`
		const onObserve: IntersectionObserverCallback = function (entries) {
			entries.forEach(({ target, isIntersecting }) => {
				if (!isIntersecting) {
					return;
				}
				const match = props.carousel.itemRefs().findIndex((ref) => ref === target);
				if (match === -1) {
					return;
				}
				props.carousel.setSelected(match);
			});
		};
		const observer = new IntersectionObserver(onObserve, {
			root: ref,
			threshold: 1,
		});
		setObserver(observer);

		// initialize `scrollTo` function
		const scrollTo = function (i: number): void {
			const itemRef = props.carousel.itemRefs().at(i);
			if (!itemRef) {
				console.error('No `CarouselItem` at index', i);
				return;
			}
			const left = itemRef.offsetLeft;
			ref.scrollTo({ left, behavior: 'smooth' });
		};
		props.carousel.setScrollTo(() => scrollTo);
	});

	onCleanup(() => {
		observer()?.disconnect();
	});

	function meta(i: number): CarouselItemMeta {
		return {
			carousel: {
				observer: observer(),
				setItemRefs: props.carousel.setItemRefs,
			},
			i,
		};
	}

	return (
		<ol
			ref={ref!}
			{...props}
		>
			<For each={props.carousel.items}>{(item, i) => <>{props.children(item, meta(i()))}</>}</For>
		</ol>
	);
}

export type CarouselItemProps = Omit<JSX.IntrinsicElements['li'], 'children'> & {
	meta: CarouselItemMeta;
	children: JSX.Element;
};

/**
 *
 */
export const CarouselItem: Component<CarouselItemProps> = function (props) {
	let ref: HTMLLIElement;

	createEffect(() => {
		props.meta.carousel.observer?.observe(ref);
	});

	onMount(() => {
		// BUG: Does this preserve order?
		props.meta.carousel.setItemRefs((refs) => [...refs, ref]);
	});

	onCleanup(() => {
		props.meta.carousel.observer?.unobserve(ref);
		props.meta.carousel.setItemRefs((refs) => refs.filter((r) => r !== ref));
	});

	return (
		<li
			ref={ref!}
			{...props}
		>
			{props.children}
		</li>
	);
};

export type CarouselPagerProps<TItem> = {
	carousel: CarouselState<TItem>;
	children: (item: TItem, i: number, onClick: () => void) => JSX.Element;
};

/**
 *
 */
export function CarouselPager<TItem>(props: CarouselPagerProps<TItem>): JSX.Element {
	function onClick(i: number) {
		const scrollTo = props.carousel.scrollTo();
		if (!scrollTo) {
			console.error('No `Carousel` attached to `CarouselPager`');
			return;
		}
		scrollTo(i);
	}

	return (
		<For each={props.carousel.items}>
			{(item, i) => <>{props.children(item, i(), () => onClick(i()))}</>}
		</For>
	);
}
