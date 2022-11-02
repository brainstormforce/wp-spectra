/**
 * BLOCK: Info Box - Edit Class
 */
import React, {    useEffect } from 'react';

import styling from './styling';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { migrateBorderAttributes } from '@Controls/generateAttributes';

import Settings from './settings';
import Render from './render';

const UAGBInfoBox = ( props ) => {
	const deviceType = useDeviceType();

	useEffect( () => {

		const { setAttributes } = props;
		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		setAttributes( { classMigrate: true } );

		const {
			ctaBtnVertPadding,
			ctaBtnHrPadding,
			paddingBtnTop,
			paddingBtnBottom,
			paddingBtnRight,
			paddingBtnLeft,
			ctaBorderStyle,
			ctaBorderWidth,
			ctaBorderRadius,
			ctaBorderColor,
			ctaBorderhoverColor,
			ctaBgType,
			ctaBgHoverType,
			showCtaIcon,
		} = props.attributes;

		if ( ctaBtnVertPadding ) {
			if ( undefined === paddingBtnTop ) {
				props.setAttributes( { paddingBtnTop: ctaBtnVertPadding } );
			}
			if ( undefined === paddingBtnBottom ) {
				props.setAttributes( { paddingBtnBottom: ctaBtnVertPadding } );
			}
		}
		if ( ctaBtnHrPadding ) {
			if ( undefined === paddingBtnRight ) {
				props.setAttributes( { paddingBtnRight: ctaBtnHrPadding } );
			}
			if ( undefined === paddingBtnLeft ) {
				props.setAttributes( { paddingBtnLeft: ctaBtnHrPadding } );
			}
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
			props.setAttributes,
			props.attributes
		);
		}

		if( ctaBgType === undefined ) {
			props.setAttributes( { ctaBgType: 'color' } );
		}

		if( ctaBgHoverType === undefined ) {
			props.setAttributes( { ctaBgHoverType: 'color' } );
		}

		if( showCtaIcon === undefined ) {
			props.setAttributes( { showCtaIcon: true } );
		}
	}, [] );

	useEffect( () => {

		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-info-box-style-' + props.clientId.substr( 0, 8 ), blockStyling );

	}, [ props ] );


	useEffect( () => {

		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-info-box-style-' + props.clientId.substr( 0, 8 ), blockStyling );

		scrollBlockToView();

	}, [ deviceType ] );

	return (
		<>

						<>
			<Settings parentProps={ props } />
				<Render parentProps={ props } />
			</>

		</>
	);
};

export default UAGBInfoBox;
