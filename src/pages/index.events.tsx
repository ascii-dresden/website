import { Component } from 'solid-js';

import { body_large, label_large, title_large } from 'src/styles/atomic/fonts.css.ts';
import {
	Carousel,
	CarouselItem,
	CarouselPager,
	createCarousel,
} from 'src/components/primitives/carousel.tsx';
import { SvgWaveArrowRight } from 'src/components/svg/arrows.tsx';

import {
	event as event_class,
	events_pager,
	events_pager_item,
	events_pager_button,
	events_carousel,
	event_column,
	event_image,
	event_button,
	event_date_time,
	event_date_separator,
	event_title,
	event_description,
	EVENTS_PAGER_ITEM_SELECTED,
} from './index.css.ts';
import { getCollection } from 'astro:content';

const events = await getCollection('events');
const eventsCarousel = createCarousel(events);

export const EventsCarouselPager: Component = function () {
	return (
		<ol class={events_pager}>
			<CarouselPager carousel={eventsCarousel}>
				{(_, i, onClick) => (
					<li
						class={events_pager_item}
						{...{ [EVENTS_PAGER_ITEM_SELECTED]: eventsCarousel.selected() === i ? '' : undefined }}
					>
						<button
							onClick={onClick}
							class={events_pager_button}
						>
							<p class={body_large}>{i + 1}</p>
						</button>
					</li>
				)}
			</CarouselPager>
		</ol>
	);
};

export const EventsCarousel: Component = function () {
	return (
		<Carousel
			carousel={eventsCarousel}
			class={events_carousel}
		>
			{(event, meta) => (
				<CarouselItem
					class={event_class}
					meta={meta}
				>
					<div class={event_column}>
						<div class={event_image}>
							{/* <Image */}
							{/* 	class={event_image_picture} */}
							{/* 	file={event.image} */}
							{/* 	alt={event.image_alt} */}
							{/* 	sizes="66vw, (min-width: 1024px) 33vw" */}
							{/* /> */}
						</div>
						<a
							class={event_button}
							href="/events"
						>
							<div>
								<SvgWaveArrowRight />
							</div>
							<p class={label_large}>mehr lesen</p>
						</a>
					</div>
					<div class={event_column}>
						<p class={[event_date_time, body_large].join(' ')}>
							<time datetime={event.date_time.toString()}>
								{event.date_time.toLocaleString('de-DE', {
									year: '2-digit',
									month: '2-digit',
									day: '2-digit',
								})}
								<span class={event_date_separator}>&nbsp;/&nbsp;</span>
								{event.date_time.toLocaleString('de-DE', { hour: 'numeric', minute: 'numeric' })}
							</time>
						</p>
						<h3 class={[title_large, event_title].join(' ')}>{event.title}</h3>
						<p class={[event_description, body_large].join(' ')}>{event.summary}</p>
					</div>
				</CarouselItem>
			)}
		</Carousel>
	);
};
