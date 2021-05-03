/**
 * BLOCK: Content Timeline.
 */
import contentTimelineStyle from './styling';
import contentTimelineSettings from './settings';
import renderContentTimeline from './render';
import { __ } from '@wordpress/i18n';
import React, { useEffect } from 'react';

const { dispatch, select, withSelect } = wp.data;

const $ = jQuery;

const contentTimelineComponent = ( props ) => {
	useEffect( () => {
		// Replacement for componentDidMount.
		//Store client id.
		props.setAttributes( { block_id: props.clientId } );
		props.setAttributes( { classMigrate: true } );
		props.setAttributes( { childMigrate: true } );

		const id = props.clientId;
		window.addEventListener( 'load', timelineContentConnector( id ) );
		window.addEventListener( 'resize', timelineContentConnector( id ) );
		const time = this;
		$( '.edit-post-layout__content' ).on( 'scroll', function ( event ) {
			time.timelineContentConnector( id );
		} );

		// Pushing Style tag for this block css.
		const $style = document.createElement( 'style' );
		$style.setAttribute(
			'id',
			'uagb-content-timeline-style-' + props.clientId
		);
		document.head.appendChild( $style );
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.

		select( 'core/block-editor' )
			.getBlocksByClientId( props.clientId )[ 0 ]
			.innerBlocks.forEach( function ( block, key ) {
				let align_class = '';
				if ( 'left' == block.attributes.timelinAlignment ) {
					align_class = 'uagb-timeline__widget uagb-timeline__left';
				} else if ( 'right' == block.attributes.timelinAlignment ) {
					align_class = 'uagb-timeline__widget uagb-timeline__right';
				} else if ( 'center' == block.attributes.timelinAlignment ) {
					if ( key % 2 == '0' ) {
						align_class =
							'uagb-timeline__widget uagb-timeline__right';
					} else {
						align_class =
							'uagb-timeline__widget uagb-timeline__left';
					}
				}

				let day_align_class = '';
				if ( 'left' == block.attributes.timelinAlignment ) {
					day_align_class =
						'uagb-timeline__day-new uagb-timeline__day-left';
				} else if ( 'right' == block.attributes.timelinAlignment ) {
					day_align_class =
						'uagb-timeline__day-new uagb-timeline__day-right';
				} else if ( 'center' == block.attributes.timelinAlignment ) {
					if ( key % 2 == '0' ) {
						day_align_class =
							'uagb-timeline__day-new uagb-timeline__day-right';
					} else {
						day_align_class =
							'uagb-timeline__day-new uagb-timeline__day-left';
					}
				}

				dispatch( 'core/block-editor' ).updateBlockAttributes(
					block.clientId,
					{
						content_class: align_class,
					}
				);
				dispatch( 'core/block-editor' ).updateBlockAttributes(
					block.clientId,
					{
						dayalign_class: day_align_class,
					}
				);
			} );
		const getChildBlocks = select( 'core/block-editor' ).getBlocks(
			props.clientId
		);
		getChildBlocks.forEach( ( ctChild, key ) => {
			ctChild.attributes.headingTag = props.attributes.headingTag;
		} );

		const id = props.clientId;
		window.addEventListener( 'load', timelineContentConnector( id ) );
		window.addEventListener( 'resize', timelineContentConnector( id ) );
		const time = this;
		$( '.edit-post-layout__content' ).on( 'scroll', function ( event ) {
			time.timelineContentConnector( id );
		} );
	}, [ props ] );

	/*  Js for timeline line and inner line filler*/
	const timelineContentConnector = ( id ) => {
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

			const elementPos = tm_item.offset().top;

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
		}
	};

	const element = document.getElementById(
		'uagb-content-timeline-style-' + props.clientId
	);

	if ( element ) {
		element.innerHTML = contentTimelineStyle( props );
	}

	return (
		<>
			{ contentTimelineSettings( props ) }
			{ renderContentTimeline( props ) }
		</>
	);
};

export default withSelect( ( select, props ) => {
	const { __experimentalGetPreviewDeviceType = null } = select(
		'core/edit-post'
	);
	const deviceType = __experimentalGetPreviewDeviceType
		? __experimentalGetPreviewDeviceType()
		: null;

	return {
		deviceType,
	};
} )( contentTimelineComponent );
