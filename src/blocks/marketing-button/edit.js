/**
 * BLOCK: Marketing Button
 */

import styling from './styling';
import React, { useEffect, Suspense, lazy } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
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

const UAGBMarketingButtonEdit = ( props ) => {
	const deviceType = useDeviceType();
	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		props.setAttributes( { classMigrate: true } );


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

		if ( vPadding ) {
			if ( undefined === paddingBtnTop ) {
				props.setAttributes( { paddingBtnTop: vPadding } );
			}
			if ( undefined === paddingBtnBottom ) {
				props.setAttributes( { paddingBtnBottom: vPadding } );
			}
		}
		if ( hPadding ) {
			if ( undefined === paddingBtnRight ) {
				props.setAttributes( { paddingBtnRight: hPadding } );
			}
			if ( undefined === paddingBtnLeft ) {
				props.setAttributes( { paddingBtnLeft: hPadding } );
			}
		}

		if ( vPaddingMobile ) {
			if ( undefined === paddingBtnTopMobile ) {
				props.setAttributes( { paddingBtnTopMobile: vPaddingMobile } );
			}
			if ( undefined === paddingBtnBottomMobile ) {
				props.setAttributes( {
					paddingBtnBottomMobile: vPaddingMobile,
				} );
			}
		}
		if ( hPaddingMobile ) {
			if ( undefined === paddingBtnRightMobile ) {
				props.setAttributes( {
					paddingBtnRightMobile: hPaddingMobile,
				} );
			}
			if ( undefined === paddingBtnLeftMobile ) {
				props.setAttributes( { paddingBtnLeftMobile: hPaddingMobile } );
			}
		}

		if ( vPaddingTablet ) {
			if ( undefined === paddingBtnTopTablet ) {
				props.setAttributes( { paddingBtnTopTablet: vPaddingTablet } );
			}
			if ( undefined === paddingBtnBottomTablet ) {
				props.setAttributes( {
					paddingBtnBottomTablet: vPaddingTablet,
				} );
			}
		}
		if ( hPaddingTablet ) {
			if ( undefined === paddingBtnRightTablet ) {
				props.setAttributes( {
					paddingBtnRightTablet: hPaddingTablet,
				} );
			}
			if ( undefined === paddingBtnLeftTablet ) {
				props.setAttributes( { paddingBtnLeftTablet: hPaddingTablet } );
			}
		}
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-marketing-btn-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-marketing-btn-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [deviceType] );

	return (
		<Suspense fallback={ lazyLoader() }>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</Suspense>
	);
};
export default UAGBMarketingButtonEdit;
