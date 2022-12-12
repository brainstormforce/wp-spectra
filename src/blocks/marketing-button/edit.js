/**
 * BLOCK: Marketing Button
 */

import styling from './styling';
import React, { useEffect,   } from 'react';

import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { migrateBorderAttributes } from '@Controls/generateAttributes';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

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
		const {borderStyle,borderWidth,borderRadius,borderColor,borderHoverColor} = props.attributes
		// border migration
		if( borderWidth || borderRadius || borderColor || borderHoverColor || borderStyle ){
			migrateBorderAttributes( 'btn', {
				label: 'borderWidth',
				value: borderWidth,
			}, {
				label: 'borderRadius',
				value: borderRadius
			}, {
				label: 'borderColor',
				value: borderColor
			}, {
				label: 'borderHoverColor',
				value: borderHoverColor
			},{
				label: 'borderStyle',
				value: borderStyle
			},
			props.setAttributes,
			props.attributes
			);
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

		scrollBlockToView();
	}, [deviceType] );

	const { UAGHideDesktop, UAGHideTab, UAGHideMob  } = props.attributes;
	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );
	
	const previewImageData = `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/marketing-button.svg`;

	return (
		props.attributes.isPreview ? <img width='100%' src={ previewImageData } alt=''/> : (
			<>
				<Settings parentProps={ props } />
				<Render parentProps={ props } />
			</>
		)
	);
};
export default UAGBMarketingButtonEdit;
