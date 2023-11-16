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

export type ICarousel<TItem> = {
	id: string;
	items: TItem[];
	itemRefs: Accessor<HTMLLIElement[]>;
	setItemRefs: Setter<HTMLLIElement[]>;
	selected: Accessor<number | undefined>;
	setSelected: Setter<number | undefined>;
};

export function createCarousel<TItem>(id: string, items: TItem[]): ICarousel<TItem> {
	const [itemRefs, setItemRefs] = createSignal<HTMLLIElement[]>([]);
	const [selected, setSelected] = createSignal<number>();

	return {
		id,
		items,
		itemRefs,
		setItemRefs,
		selected,
		setSelected,
	};
}

export type CarouselMeta = {
	id: string;
	observer: IntersectionObserver | undefined;
	setItemRefs: Setter<HTMLLIElement[]>;
};

export type CarouselProps<TItem> = Omit<JSX.IntrinsicElements['ol'], 'children'> & {
	carousel: ICarousel<TItem>;
	children: (item: TItem, meta: CarouselItemMeta) => JSX.Element;
};

export function Carousel<TItem>(props: CarouselProps<TItem>): JSX.Element {
	const [observer, setObserver] = createSignal<IntersectionObserver>();

	let ref: HTMLOListElement;

	onMount(() => {
		const onObserve: IntersectionObserverCallback = function(entries) {
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
	});

	onCleanup(() => {
		observer()?.disconnect();
	});

	function meta(i: number): CarouselItemMeta {
		return {
			carousel: {
				id: props.carousel.id,
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

export type CarouselItemMeta = {
	carousel: CarouselMeta;
	i: number;
};

export type CarouselItemProps = Omit<JSX.IntrinsicElements['li'], 'children'> & {
	meta: CarouselItemMeta;
	children: JSX.Element;
};

export const CarouselItem: Component<CarouselItemProps> = function(props) {
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
			id={id(props.meta.carousel.id, props.meta.i)}
			ref={ref!}
			{...props}
		>
			{props.children}
		</li>
	);
};

export type CarouselPagerProps<TItem> = {
	carousel: ICarousel<TItem>;
	children: (item: TItem, i: number, href: string) => JSX.Element;
};

export function CarouselPager<TItem>(props: CarouselPagerProps<TItem>): JSX.Element {
	// function onClick(i: number) {
	// 	// TODO
	// }

	return (
		<For each={props.carousel.items}>
			{(item, i) => <>{props.children(item, i(), `#${id(props.carousel.id, i())}`)}</>}
		</For>
	);
}

function id(carouselId: string, i: number): string {
	return `${carouselId}-${i}`;
}
