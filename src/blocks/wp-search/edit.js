/**
 * BLOCK: WP Search
 */

import styling from './styling';
import React, { useState, useEffect, lazy, Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/wp-search/settings" */ './settings' )
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/wp-search/render" */ './render' )
);

const UAGBWpSearchEdit = ( props ) => {
	const deviceType = useDeviceType();
	const initState = {
		isFocused: 'false',
	};

	const [ state, setState ] = useState( initState );

	// componentDidMount.
	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( {
			block_id: props.clientId.substr( 0, 8 ),
		} );

	}, [] );

	// componentDidUpdate.
	useEffect( () => {
		if ( ! props.isSelected && state.isFocused ) {
			setState( {
				isFocused: 'false',
			} );
		}
		if ( props.isSelected ) {
			setState( {
				isFocused: true,
			} );
		}

		const {
			vinputPaddingMobile,
			vinputPaddingTablet,
			vinputPaddingDesktop,
			hinputPaddingMobile,
			hinputPaddingTablet,
			hinputPaddingDesktop,
			paddingInputTop,
			paddingInputRight,
			paddingInputBottom,
			paddingInputLeft,
			paddingInputTopTablet,
			paddingInputBottomTablet,
			paddingInputRightTablet,
			paddingInputLeftTablet,
			paddingInputTopMobile,
			paddingInputRightMobile,
			paddingInputBottomMobile,
			paddingInputLeftMobile,
		} = props.attributes;

		if ( vinputPaddingDesktop ) {
			if ( ! paddingInputTop ) {
				props.setAttributes( {
					paddingInputTop: vinputPaddingDesktop,
				} );
			}
			if ( ! paddingInputBottom ) {
				props.setAttributes( {
					paddingInputBottom: vinputPaddingDesktop,
				} );
			}
		}
		if ( hinputPaddingDesktop ) {
			if ( ! paddingInputRight ) {
				props.setAttributes( {
					paddingInputRight: hinputPaddingDesktop,
				} );
			}
			if ( ! paddingInputLeft ) {
				props.setAttributes( {
					paddingInputLeft: hinputPaddingDesktop,
				} );
			}
		}
		if ( vinputPaddingTablet ) {
			if ( ! paddingInputTopTablet ) {
				props.setAttributes( {
					paddingInputTopTablet: vinputPaddingTablet,
				} );
			}
			if ( ! paddingInputBottomTablet ) {
				props.setAttributes( {
					paddingInputBottomTablet: vinputPaddingTablet,
				} );
			}
		}
		if ( hinputPaddingTablet ) {
			if ( ! paddingInputRightTablet ) {
				props.setAttributes( {
					paddingInputRightTablet: hinputPaddingTablet,
				} );
			}
			if ( ! paddingInputLeftTablet ) {
				props.setAttributes( {
					paddingInputLeftTablet: hinputPaddingTablet,
				} );
			}
		}
		if ( vinputPaddingMobile ) {
			if ( ! paddingInputTopMobile ) {
				props.setAttributes( {
					paddingInputTopMobile: vinputPaddingMobile,
				} );
			}
			if ( ! paddingInputBottomMobile ) {
				props.setAttributes( {
					paddingInputBottomMobile: vinputPaddingMobile,
				} );
			}
		}
		if ( hinputPaddingMobile ) {
			if ( ! paddingInputRightMobile ) {
				props.setAttributes( {
					paddingInputRightMobile: hinputPaddingMobile,
				} );
			}
			if ( ! paddingInputLeftMobile ) {
				props.setAttributes( {
					paddingInputLeftMobile: hinputPaddingMobile,
				} );
			}
		}

		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-wp-search-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-wp-search-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [deviceType] );

	return (
		<Suspense fallback={ lazyLoader() }>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</Suspense>
	);
};

export default UAGBWpSearchEdit;
