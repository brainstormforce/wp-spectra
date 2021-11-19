// Listen for events.
window.addEventListener( 'load', uagbTimelineInit );
window.addEventListener( 'resize', uagbTimelineInit );
window.addEventListener( 'scroll', uagbTimelineInit );

// Callback function for all event listeners.
function uagbTimelineInit() {
	const timeline = document.querySelectorAll( '.uagb-timeline' );
	if ( timeline.length === 0 ) {
		return;
	}
	for ( const content of timeline ) {
		
		const lineInner = content.querySelector( '.uagb-timeline__line__inner' );
		const lineOuter = content.querySelector( '.uagb-timeline__line' );
		
		const iconClass = content.querySelectorAll( '.uagb-timeline__marker' );
		const cardLast = content.querySelector( '.uagb-timeline__field:last-child' );
		
		const timelineStartIcon = iconClass[0];
		const timelineEndIcon = iconClass[iconClass.length - 1];
		
		lineOuter.style.top = timelineStartIcon.offsetTop + 'px';
		const timelineCardHeight = cardLast.offsetHeight;
		
		const lastItemTop = cardLast.offsetTop;
		
		let lastItem, parentTop;

		if ( content.classList.contains( 'uagb-timeline__arrow-center' ) ) {

			lineOuter.style.bottom = timelineEndIcon.offsetTop + 'px';
			parentTop = lastItemTop - timelineStartIcon.offsetTop;
			lastItem = parentTop + timelineEndIcon.offsetTop;

		} else if ( content.classList.contains( 'uagb-timeline__arrow-top' ) ) {
			
			const topHeight = timelineCardHeight - timelineEndIcon.offsetTop;
			lineOuter.style.bottom = topHeight + 'px';
			lastItem = lastItemTop;

		} else if ( content.classList.contains( 'uagb-timeline__arrow-bottom' ) ) {
			
			const bottomHeight = timelineCardHeight - timelineEndIcon.offsetTop;
			lineOuter.style.bottom = bottomHeight + 'px';
			parentTop = lastItemTop - timelineStartIcon.offsetTop;
			lastItem = parentTop + timelineEndIcon.offsetTop;
		}
		const elementEnd = lastItem + 20;

		const connectorHeight = 3 * iconClass[0].offsetHeight;

		const viewportHeight = document.documentElement.clientHeight;

		const viewportHeightHalf = viewportHeight / 2 + connectorHeight;
		const elementPos = content.offsetTop;
		
		const newElementPos = elementPos + timelineStartIcon.offsetTop;

		let photoViewportOffsetTop = newElementPos - window.pageYOffset;

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
		
		let animateBorder = content.querySelectorAll( '.uagb-timeline__field-wrap' );

		if ( animateBorder.length === 0 ) {
			animateBorder = content.querySelectorAll( '.uagb-timeline__animate-border' );
		}

		for ( let j = 0; j < timelineIcon.length; j++ ) {
			timelineIconPos = timelineIcon[j].offsetTop;

			timelineCardPos = animateBorder[j].offsetTop;

			timelineIconTop = timelineIconPos;
			timelineCardTop = timelineCardPos;

			if ( timelineCardTop < viewportHeightHalf ) {
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
