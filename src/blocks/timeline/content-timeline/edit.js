/**
 * BLOCK: Content Timeline.
 */

import contentTimelineStyle from './styling';
import React, { useEffect, lazy, Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import { dispatch, select, withSelect } from '@wordpress/data';

const Settings = lazy( () =>
	import(
		/* webpackChunkName: "chunks/content-timeline/settings" */ './settings'
	)
);
const Render = lazy( () =>
	import(
		/* webpackChunkName: "chunks/content-timeline/render" */ './render'
	)
);

const ContentTimelineComponent = ( props ) => {
	useEffect( () => {
		const { setAttributes, clientId, attributes } = props;
		// Replacement for componentDidMount.
		//Store client id.
		setAttributes( { block_id: clientId } );
		setAttributes( { classMigrate: true } );
		setAttributes( { childMigrate: true } );

		// Pushing Style tag for this block css.
		const $style = document.createElement( 'style' );
		$style.setAttribute( 'id', 'uagb-content-timeline-style-' + clientId );
		document.head.appendChild( $style );

		const {
			verticalSpace,
			horizontalSpace,
			topMargin,
			rightMargin,
			bottomMargin,
			leftMargin,
			bgPadding,
			topPadding,
			rightPadding,
			bottomPadding,
			leftPadding,
		} = attributes;

		if ( bgPadding ) {
			if ( ! topPadding ) {
				setAttributes( { topPadding: bgPadding } );
			}
			if ( ! bottomPadding ) {
				setAttributes( { bottomPadding: bgPadding } );
			}
			if ( ! rightPadding ) {
				setAttributes( { rightPadding: bgPadding } );
			}
			if ( ! leftPadding ) {
				setAttributes( { leftPadding: bgPadding } );
			}
		}

		if ( verticalSpace ) {
			if ( ! topMargin ) {
				setAttributes( { topMargin: verticalSpace } );
			}
			if ( ! bottomMargin ) {
				setAttributes( { bottomMargin: verticalSpace } );
			}
		}
		if ( horizontalSpace ) {
			if ( ! rightMargin ) {
				setAttributes( { rightMargin: horizontalSpace } );
			}
			if ( ! leftMargin ) {
				setAttributes( { leftMargin: horizontalSpace } );
			}
		}
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		if (
			null ===
			select( 'core/block-editor' ).getBlocksByClientId(
				props.clientId
			)[ 0 ]
		) {
			return;
		}
		select( 'core/block-editor' )
			.getBlocksByClientId( props.clientId )[ 0 ]
			.innerBlocks.forEach( function ( block, key ) {
				let alignClass = '';
				if ( 'left' === block.attributes.timelinAlignment ) {
					alignClass = 'uagb-timeline__widget uagb-timeline__left';
				} else if ( 'right' === block.attributes.timelinAlignment ) {
					alignClass = 'uagb-timeline__widget uagb-timeline__right';
				} else if ( 'center' === block.attributes.timelinAlignment ) {
					if ( key % 2 === 0 ) {
						alignClass =
							'uagb-timeline__widget uagb-timeline__right';
					} else {
						alignClass =
							'uagb-timeline__widget uagb-timeline__left';
					}
				}

				let dayAlignClass = '';
				if ( 'left' === block.attributes.timelinAlignment ) {
					dayAlignClass =
						'uagb-timeline__day-new uagb-timeline__day-left';
				} else if ( 'right' === block.attributes.timelinAlignment ) {
					dayAlignClass =
						'uagb-timeline__day-new uagb-timeline__day-right';
				} else if ( 'center' === block.attributes.timelinAlignment ) {
					if ( key % 2 === 0 ) {
						dayAlignClass =
							'uagb-timeline__day-new uagb-timeline__day-right';
					} else {
						dayAlignClass =
							'uagb-timeline__day-new uagb-timeline__day-left';
					}
				}

				dispatch( 'core/block-editor' ).updateBlockAttributes(
					block.clientId,
					{
						content_class: alignClass,
					}
				);
				dispatch( 'core/block-editor' ).updateBlockAttributes(
					block.clientId,
					{
						dayalign_class: dayAlignClass,
					}
				);
			} );
		const getChildBlocks = select( 'core/block-editor' ).getBlocks(
			props.clientId
		);
		getChildBlocks.forEach( ( ctChild ) => {
			ctChild.attributes.headingTag = props.attributes.headingTag;
		} );

	}, [ props ] );

	const element = document.getElementById(
		'uagb-content-timeline-style-' + props.clientId
	);

	if ( element ) {
		element.innerHTML = contentTimelineStyle( props );
	}

	return (
		<Suspense fallback={ lazyLoader() }>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</Suspense>
	);
};

export default withSelect( () => {
	const { __experimentalGetPreviewDeviceType = null } = select(
		'core/edit-post'
	);
	const deviceType = __experimentalGetPreviewDeviceType
		? __experimentalGetPreviewDeviceType()
		: null;

	return {
		deviceType,
	};
} )( ContentTimelineComponent );
