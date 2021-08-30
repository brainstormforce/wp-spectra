/**
 * BLOCK: Marketing Button
 */

import styling from './styling';
import React, { useEffect, Suspense, lazy } from 'react';
import lazyLoader from '@Controls/lazy-loader';
const Settings = lazy( () =>
	import(
		/* webpackChunkName: "chunks/marketing-button/settings" */ './settings'
	)
);
const Render = lazy( () =>
	import(
		/* webpackChunkName: "chunks/marketing-button/render" */ './render'
	)
);
import { withSelect } from '@wordpress/data';

import { compose } from '@wordpress/compose';

const UAGBMarketingButtonEdit = ( props ) => {
	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		props.setAttributes( { classMigrate: true } );

		// Pushing Style tag for this block css.
		const $style = document.createElement( 'style' );
		$style.setAttribute(
			'id',
			'uagb-style-marketing-btn-' + props.clientId.substr( 0, 8 )
		);
		document.head.appendChild( $style );

		const {
			vPadding,
			hPadding,
			hPaddingMobile,
			vPaddingMobile,
			hPaddingTablet,
			vPaddingTablet,
			paddingBtnTop,
			paddingBtnBottom,
			paddingBtnLeft,
			paddingBtnRight,
			paddingBtnTopTablet,
			paddingBtnRightTablet,
			paddingBtnBottomTablet,
			paddingBtnLeftTablet,
			paddingBtnTopMobile,
			paddingBtnRightMobile,
			paddingBtnBottomMobile,
			paddingBtnLeftMobile,
		} = props.attributes;

		if (vPadding) {
			if (!paddingBtnTop) {
				props.setAttributes({ paddingBtnTop: vPadding });
			}
			if (!paddingBtnBottom) {
				props.setAttributes({ paddingBtnBottom: vPadding });
			}
		}
		if (hPadding) {
			if (!paddingBtnRight) {
				props.setAttributes({ paddingBtnRight: hPadding });
			}
			if (!paddingBtnLeft) {
				props.setAttributes({ paddingBtnLeft: hPadding });
			}
		}

		if (vPaddingMobile) {
			if (!paddingBtnTopMobile) {
				props.setAttributes({ paddingBtnTopMobile: vPaddingMobile });
			}
			if (!paddingBtnBottomMobile) {
				props.setAttributes({ paddingBtnBottomMobile: vPaddingMobile });
			}
		}
		if (hPaddingMobile) {
			if (!paddingBtnRightMobile) {
				props.setAttributes({ paddingBtnRightMobile: hPaddingMobile });
			}
			if (!paddingBtnLeftMobile) {
				props.setAttributes({ paddingBtnLeftMobile: hPaddingMobile });
			}
		}

		if (vPaddingTablet) {
			if (!paddingBtnTopTablet) {
				props.setAttributes({ paddingBtnTopTablet: vPaddingTablet });
			}
			if (!paddingBtnBottomTablet) {
				props.setAttributes({ paddingBtnBottomTablet: vPaddingTablet });
			}
		}
		if (hPaddingTablet) {
			if (!paddingBtnRightTablet) {
				props.setAttributes({ paddingBtnRightTablet: hPaddingTablet });
			}
			if (!paddingBtnLeftTablet) {
				props.setAttributes({ paddingBtnLeftTablet: hPaddingTablet });
			}
		}
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const element = document.getElementById(
			'uagb-style-marketing-btn-' + props.clientId.substr( 0, 8 )
		);

		if ( null !== element && undefined !== element ) {
			element.innerHTML = styling( props );
		}
	}, [ props ] );

	return (
		<Suspense fallback={ lazyLoader() }>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</Suspense>
	);
};

const applyWithSelect = withSelect( ( select ) => {
	const { __experimentalGetPreviewDeviceType = null } = select(
		'core/edit-post'
	);
	const deviceType = __experimentalGetPreviewDeviceType
		? __experimentalGetPreviewDeviceType()
		: null;

	return {
		deviceType,
	};
} );

export default compose( applyWithSelect )( UAGBMarketingButtonEdit );
