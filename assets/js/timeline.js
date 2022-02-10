window.addEventListener( 'DOMContentLoaded', uagbTimelineInit );
window.addEventListener( 'resize', uagbTimelineInit );
window.addEventListener( 'scroll', uagbTimelineInit );
document.addEventListener( 'UAGTimelineEditor', uagbTimelineInit );
// Callback function for all event listeners.
function uagbTimelineInit() {

	const iframeEl = document.querySelector( `iframe[name='editor-canvas']` );
	let mainDiv;
	if( iframeEl ){
		mainDiv = iframeEl.contentDocument.querySelectorAll( '.uagb-timeline' );
	} else {
		mainDiv = document.querySelectorAll( '.uagb-timeline' );
	}
	const timeline = mainDiv;
	if ( timeline.length === 0 ) {
		return;
	}

	for ( const content of timeline ) {

		const lineInner = content.querySelector( '.uagb-timeline__line__inner' );
		const lineOuter = content.querySelector( '.uagb-timeline__line' );
		const iconClass = content.querySelectorAll( '.uagb-timeline__marker' );
		const timelineField = content.querySelector( '.uagb-timeline__field:nth-last-child(2)' );
		const cardLast =  timelineField ? timelineField : content.querySelector( '.block-editor-block-list__layout:last-child' );
		const timelineStartIcon = iconClass[0];
		const timelineEndIcon = iconClass[iconClass.length - 1];

		lineOuter.style.top = timelineStartIcon?.offsetTop + 'px';
		const timelineCardHeight = cardLast?.offsetHeight;

		const lastItemTop = cardLast?.offsetTop;

		let lastItem, parentTop;

		if ( content.classList.contains( 'uagb-timeline__arrow-center' ) ) {

			lineOuter.style.bottom = timelineEndIcon?.offsetTop + 'px';
			parentTop = lastItemTop - timelineStartIcon?.offsetTop;
			lastItem = parentTop + timelineEndIcon?.getBoundingClientRect().top;

		} else if ( content.classList.contains( 'uagb-timeline__arrow-top' ) ) {
			lineOuter.style.bottom = timelineCardHeight + 'px';
			lastItem = lastItemTop + timelineEndIcon?.getBoundingClientRect().top;

		} else if ( content.classList.contains( 'uagb-timeline__arrow-bottom' ) ) {

			lineOuter.style.bottom = '0px';
			parentTop = lastItemTop - timelineStartIcon?.offsetTop;
			lastItem = parentTop + + timelineEndIcon?.getBoundingClientRect().top;
		}
		const elementEnd = lastItem + 20;

		const connectorHeight = 3 * iconClass[0]?.offsetHeight;

		const viewportHeight = document.documentElement.clientHeight;

		const viewportHeightHalf = viewportHeight / 2 + connectorHeight;
		const elementPos = ( content.getBoundingClientRect().top + document.documentElement.scrollTop + content.offsetTop );

		const newElementPos = elementPos + timelineStartIcon?.offsetTop;

		let photoViewportOffsetTop = newElementPos - document.documentElement.scrollTop;

		if ( photoViewportOffsetTop < 0 ) {
			photoViewportOffsetTop = Math.abs( photoViewportOffsetTop );

		} else {
			photoViewportOffsetTop = -Math.abs(
				photoViewportOffsetTop
			);
		}

		if ( elementPos < viewportHeightHalf ) {
			if (
				viewportHeightHalf +
				Math.abs( photoViewportOffsetTop ) <
				elementEnd
			) {
				lineInner.style.height = ( viewportHeightHalf + photoViewportOffsetTop ) + 'px';

			} else if (
				photoViewportOffsetTop + viewportHeightHalf >=
				elementEnd
			) {
				lineInner.style.height = elementEnd + 'px';
			}
		} else if (
			photoViewportOffsetTop + viewportHeightHalf <
			elementEnd
		) {
			if ( 0 > photoViewportOffsetTop ) {
				lineInner.style.height = ( viewportHeightHalf - Math.abs( photoViewportOffsetTop ) ) + 'px';
			} else {
				lineInner.style.height = ( viewportHeightHalf + photoViewportOffsetTop ) + 'px';
			}
		} else if (
			photoViewportOffsetTop + viewportHeightHalf >= elementEnd
		) {
			lineInner.style.height = elementEnd + 'px';
		}

		// Icon bg color and icon color

		let timelineIconPos, timelineCardPos;
		let timelineIconTop, timelineCardTop;
		const timelineIcon = content.querySelectorAll( '.uagb-timeline__marker' );

		let animateBorder = content.querySelectorAll( '.uagb-timeline__field' );

		if ( animateBorder.length === 0 ) {
			animateBorder = content.querySelectorAll( '.uagb-timeline__animate-border' );
		}

		for ( let j = 0; j < timelineIcon.length; j++ ) {
			timelineIconPos = timelineIcon[j].lastElementChild.getBoundingClientRect().top + window.scrollY;
			timelineCardPos = animateBorder[j].lastElementChild.getBoundingClientRect().top + window.scrollY;

			timelineIconTop = timelineIconPos - document.documentElement.scrollTop;
			timelineCardTop = timelineCardPos - document.documentElement.scrollTop;

			if ( ( timelineCardTop ) < ( viewportHeightHalf ) ) {
				animateBorder[j].classList.remove( 'out-view' );
				animateBorder[j].classList.add( 'in-view' );
			} else {
				// Remove classes if element is below than half of viewport.
				animateBorder[j].classList.add( 'out-view' );
				animateBorder[j].classList.remove( 'in-view' );
			}

			if ( timelineIconTop < viewportHeightHalf ) {
				// Add classes if element is above than half of viewport.
				timelineIcon[j].classList.remove(
					'uagb-timeline__out-view-icon'
				);
				timelineIcon[j].classList.add(
					'uagb-timeline__in-view-icon'
				);
			} else {
				// Remove classes if element is below than half of viewport.
				timelineIcon[j].classList.add(
					'uagb-timeline__out-view-icon'
				);
				timelineIcon[j].classList.remove(
					'uagb-timeline__in-view-icon'
				);
			}
		}
	}
}
