/**
 * BLOCK: WP Search
 */

import styling from './styling';
import React, { useState, useEffect, lazy, Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';

import {migrateBorderAttributes} from '@Controls/generateAttributes';

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
			borderStyle,
			borderWidth,
			borderColor,
			borderHColor,
			borderRadius,
		} = props.attributes;

		if ( vinputPaddingDesktop ) {
			if ( undefined === paddingInputTop ) {
				props.setAttributes( {
					paddingInputTop: vinputPaddingDesktop,
				} );
			}
			if ( undefined ===paddingInputBottom ) {
				props.setAttributes( {
					paddingInputBottom: vinputPaddingDesktop,
				} );
			}
		}
		if ( hinputPaddingDesktop ) {
			if ( undefined === paddingInputRight ) {
				props.setAttributes( {
					paddingInputRight: hinputPaddingDesktop,
				} );
			}
			if ( undefined === paddingInputLeft ) {
				props.setAttributes( {
					paddingInputLeft: hinputPaddingDesktop,
				} );
			}
		}
		if ( vinputPaddingTablet ) {
			if ( undefined === paddingInputTopTablet ) {
				props.setAttributes( {
					paddingInputTopTablet: vinputPaddingTablet,
				} );
			}
			if ( undefined === paddingInputBottomTablet ) {
				props.setAttributes( {
					paddingInputBottomTablet: vinputPaddingTablet,
				} );
			}
		}
		if ( hinputPaddingTablet ) {
			if ( undefined === paddingInputRightTablet ) {
				props.setAttributes( {
					paddingInputRightTablet: hinputPaddingTablet,
				} );
			}
			if ( undefined === paddingInputLeftTablet ) {
				props.setAttributes( {
					paddingInputLeftTablet: hinputPaddingTablet,
				} );
			}
		}
		if ( vinputPaddingMobile ) {
			if ( undefined === paddingInputTopMobile ) {
				props.setAttributes( {
					paddingInputTopMobile: vinputPaddingMobile,
				} );
			}
			if ( undefined === paddingInputBottomMobile ) {
				props.setAttributes( {
					paddingInputBottomMobile: vinputPaddingMobile,
				} );
			}
		}
		if ( hinputPaddingMobile ) {
			if ( undefined === paddingInputRightMobile ) {
				props.setAttributes( {
					paddingInputRightMobile: hinputPaddingMobile,
				} );
			}
			if ( undefined === paddingInputLeftMobile ) {
				props.setAttributes( {
					paddingInputLeftMobile: hinputPaddingMobile,
				} );
			}
		}
		// border
		if( borderWidth || borderRadius || borderColor || borderHColor || borderStyle ){
			const migrationAttributes = migrateBorderAttributes( 'input', {
				label: 'borderWidth',
				value: borderWidth,
			}, {
				label: 'borderRadius',
				value: borderRadius
			}, {
				label: 'borderColor',
				value: borderColor
			}, {
				label: 'borderHColor',
				value: borderHColor
			},{
				label: 'borderStyle',
				value: borderStyle
			}
			);
			props.setAttributes( migrationAttributes )
		}
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
