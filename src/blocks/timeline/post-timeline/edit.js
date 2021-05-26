/**
 * External dependencies
 */
import React, { useEffect } from 'react';
import postTimelineSettings from './settings';
import renderPostTimeline from './render';

import { withSelect } from '@wordpress/data';

const $ = jQuery;

const postTimelineComponent = ( props ) => {
	useEffect( () => {
		// Replacement for componentDidMount.
		//Store lient id.
		props.setAttributes( { block_id: props.clientId } );

		const id = props.clientId;
		window.addEventListener( 'load', timelineContentBack( id ) );
		window.addEventListener( 'resize', timelineContentBack( id ) );

		$( '.edit-post-layout__content' ).scroll( function ( event ) {
			timelineContentBack( id );
		} );

		// Pushing Style tag for this block css.
		const $style = document.createElement( 'style' );
		$style.setAttribute( 'id', 'uagb-timeline-style-' + props.clientId );
		document.head.appendChild( $style );
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const id = props.clientId;
		window.addEventListener( 'load', timelineContentBack( id ) );
		window.addEventListener( 'resize', timelineContentBack( id ) );

		$( '.edit-post-layout__content' ).scroll( function ( event ) {
			timelineContentBack( id );
		} );
	}, [ props ] );

	/*  Js for timeline line and inner line filler*/
	const timelineContentBack = ( id ) => {
		const timeline = $( '.uagb-timeline' ).parents( '#block-' + id );
		const tm_item = timeline.find( '.uagb-timeline' );
		const line_inner = timeline.find( '.uagb-timeline__line__inner' );
		const line_outer = timeline.find( '.uagb-timeline__line' );
		const $icon_class = timeline.find( '.uagb-timeline__marker' );
		if ( $icon_class.length > 0 ) {
			const $card_last = timeline.find(
				'.uagb-timeline__field:last-child'
			);
			const timeline_start_icon = $icon_class.first().position();
			const timeline_end_icon = $icon_class.last().position();
			line_outer.css( 'top', timeline_start_icon.top );

			const timeline_card_height = $card_last.height();
			const last_item_top =
				$card_last.offset().top - tm_item.offset().top;
			let $last_item, parent_top;
			const $document = $( document );

			if ( tm_item.hasClass( 'uagb-timeline__arrow-center' ) ) {
				line_outer.css( 'bottom', timeline_end_icon.top );

				parent_top = last_item_top - timeline_start_icon.top;
				$last_item = parent_top + timeline_end_icon.top;
			} else if ( tm_item.hasClass( 'uagb-timeline__arrow-top' ) ) {
				const top_height = timeline_card_height - timeline_end_icon.top;
				line_outer.css( 'bottom', top_height );

				$last_item = last_item_top;
			} else if ( tm_item.hasClass( 'uagb-timeline__arrow-bottom' ) ) {
				const bottom_height =
					timeline_card_height - timeline_end_icon.top;
				line_outer.css( 'bottom', bottom_height );

				parent_top = last_item_top - timeline_start_icon.top;
				$last_item = parent_top + timeline_end_icon.top;
			}

			let num = 0;
			const elementEnd = $last_item + 20;

			const connectorHeight =
				3 * timeline.find( '.uagb-timeline__marker:first' ).height();
			const viewportHeight =
				document.documentElement.clientHeight + connectorHeight;
			const viewportHeightHalf = viewportHeight / 2 + connectorHeight;

			var elementPos = tm_item.offset().top;

			const new_elementPos = elementPos + timeline_start_icon.top;

			let photoViewportOffsetTop = new_elementPos - $document.scrollTop();

			if ( photoViewportOffsetTop < 0 ) {
				photoViewportOffsetTop = Math.abs( photoViewportOffsetTop );
			} else {
				photoViewportOffsetTop = -Math.abs( photoViewportOffsetTop );
			}

			if ( elementPos < viewportHeightHalf ) {
				if (
					viewportHeightHalf + Math.abs( photoViewportOffsetTop ) <
					elementEnd
				) {
					line_inner.height(
						viewportHeightHalf + photoViewportOffsetTop
					);
				} else if (
					photoViewportOffsetTop + viewportHeightHalf >=
					elementEnd
				) {
					line_inner.height( elementEnd );
				}
			} else if (
				photoViewportOffsetTop + viewportHeightHalf <
				elementEnd
			) {
				if ( 0 > photoViewportOffsetTop ) {
					line_inner.height(
						viewportHeightHalf - Math.abs( photoViewportOffsetTop )
					);
					++num;
				} else {
					line_inner.height(
						viewportHeightHalf + photoViewportOffsetTop
					);
				}
			} else if (
				photoViewportOffsetTop + viewportHeightHalf >=
				elementEnd
			) {
				line_inner.height( elementEnd );
			}

			//For changing icon background color and icon color.
			let timeline_icon_pos, timeline_card_pos;
			var elementPos, elementCardPos;
			let timeline_icon_top, timeline_card_top;
			const timeline_icon = timeline.find( '.uagb-timeline__marker' ),
				animate_border = timeline.find( '.uagb-timeline__field-wrap' );

			for ( let i = 0; i < timeline_icon.length; i++ ) {
				timeline_icon_pos = $( timeline_icon[ i ] ).offset().top;
				timeline_card_pos = $( animate_border[ i ] ).offset().top;
				elementPos = timeline.offset().top;
				elementCardPos = timeline.offset().top;

				timeline_icon_top = timeline_icon_pos - $document.scrollTop();
				timeline_card_top = timeline_card_pos - $document.scrollTop();

				if ( timeline_card_top < viewportHeightHalf ) {
					animate_border[ i ].classList.remove( 'out-view' );
					animate_border[ i ].classList.add( 'in-view' );
				} else {
					// Remove classes if element is below than half of viewport.
					animate_border[ i ].classList.add( 'out-view' );
					animate_border[ i ].classList.remove( 'in-view' );
				}

				if ( timeline_icon_top < viewportHeightHalf ) {
					// Add classes if element is above than half of viewport.
					timeline_icon[ i ].classList.remove(
						'uagb-timeline__out-view-icon'
					);
					timeline_icon[ i ].classList.add(
						'uagb-timeline__in-view-icon'
					);
				} else {
					// Remove classes if element is below than half of viewport.
					timeline_icon[ i ].classList.add(
						'uagb-timeline__out-view-icon'
					);
					timeline_icon[ i ].classList.remove(
						'uagb-timeline__in-view-icon'
					);
				}
			}
		}
	};

	return (
		<>
			{ postTimelineSettings( props ) }
			{ renderPostTimeline( props ) }
		</>
	);
};

export default withSelect( ( select, props ) => {
	const {
		categories,
		postsToShow,
		order,
		orderBy,
		postType,
		taxonomyType,
		excludeCurrentPost,
	} = props.attributes;
	const { getEntityRecords } = select( 'core' );

	const { __experimentalGetPreviewDeviceType = null } = select(
		'core/edit-post'
	);
	const deviceType = __experimentalGetPreviewDeviceType
		? __experimentalGetPreviewDeviceType()
		: null;

	const allTaxonomy = uagb_blocks_info.all_taxonomy;
	const currentTax = allTaxonomy[ postType ];
	const taxonomy = '';
	let categoriesList = [];
	let rest_base = '';

	if ( 'undefined' !== typeof currentTax ) {
		if ( 'undefined' !== typeof currentTax.taxonomy[ taxonomyType ] ) {
			rest_base =
				currentTax.taxonomy[ taxonomyType ].rest_base == false ||
				currentTax.taxonomy[ taxonomyType ].rest_base == null
					? currentTax.taxonomy[ taxonomyType ].name
					: currentTax.taxonomy[ taxonomyType ].rest_base;
		}

		if ( '' != taxonomyType ) {
			if (
				'undefined' !== typeof currentTax.terms &&
				'undefined' !== typeof currentTax.terms[ taxonomyType ]
			) {
				categoriesList = currentTax.terms[ taxonomyType ];
			}
		}
	}

	const latestPostsQuery = {
		order,
		orderby: orderBy,
		per_page: postsToShow,
	};

	if ( excludeCurrentPost ) {
		latestPostsQuery.exclude = select( 'core/editor' ).getCurrentPostId();
	}
	const category = [];
	const temp = parseInt( categories );
	category.push( temp );
	const catlenght = categoriesList.length;
	for ( let i = 0; i < catlenght; i++ ) {
		if ( categoriesList[ i ].id == temp ) {
			if ( categoriesList[ i ].child.length !== 0 ) {
				categoriesList[ i ].child.forEach( ( element ) => {
					category.push( element );
				} );
			}
		}
	}
	if ( undefined !== categories && '' !== categories ) {
		latestPostsQuery[ rest_base ] =
			undefined === categories || '' === categories
				? categories
				: category;
	}
	return {
		deviceType,
		latestPosts: getEntityRecords( 'postType', postType, latestPostsQuery ),
		categoriesList,
		taxonomyList:
			'undefined' !== typeof currentTax ? currentTax.taxonomy : [],
	};
} )( postTimelineComponent );
