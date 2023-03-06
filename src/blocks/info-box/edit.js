/**
 * BLOCK: Info Box - Edit Class
 */
import { useEffect } from '@wordpress/element';

import styling from './styling';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { migrateBorderAttributes } from '@Controls/generateAttributes';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

import Settings from './settings';
import Render from './render';

const UAGBInfoBox = ( props ) => {
	const deviceType = useDeviceType();
	const {
		setAttributes,
		isSelected,
		attributes,
		attributes: {
			ctaBorderStyle,
			ctaBorderWidth,
			ctaBorderRadius,
			ctaBorderColor,
			ctaBorderhoverColor,
			ctaBgType,
			ctaBgHoverType,
			showCtaIcon,
			UAGHideDesktop,
			UAGHideTab,
			UAGHideMob,
		},
		clientId,
	} = props;

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );

		setAttributes( { classMigrate: true } );

		if( ctaBgType === undefined ) {
			setAttributes( { ctaBgType: 'color' } );
		}

		if( ctaBgHoverType === undefined ) {
			setAttributes( { ctaBgHoverType: 'color' } );
		}

		if( showCtaIcon === undefined ) {
			setAttributes( { showCtaIcon: true } );
		}
		
		// Backward Border Migration
		if( ctaBorderWidth || ctaBorderRadius || ctaBorderColor || ctaBorderhoverColor || ctaBorderStyle ){

			migrateBorderAttributes( 'btn', {
				label: 'ctaBorderWidth',
				value: ctaBorderWidth,
			}, {
				label: 'ctaBorderRadius',
				value: ctaBorderRadius
			}, {
				label: 'ctaBorderColor',
				value: ctaBorderColor
			}, {
				label: 'ctaBorderhoverColor',
				value: ctaBorderhoverColor
			},{
				label: 'ctaBorderStyle',
				value: ctaBorderStyle
			},
			setAttributes,
			attributes
		);
		}

	}, [] );

	useEffect( () => {

		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-info-box-style-' + clientId.substr( 0, 8 ), blockStyling );
		
	}, [ attributes, deviceType ] );

	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	return (
			<>
			{ isSelected && <Settings parentProps={ props } /> }
				<Render parentProps={ props } />
			</>
	);
};

export default UAGBInfoBox;
