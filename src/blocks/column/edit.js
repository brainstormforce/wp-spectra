/**
 * BLOCK: Column - Edit
 */

import styling from './styling';
import { useEffect } from '@wordpress/element';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { useDeviceType } from '@Controls/getPreviewType';
import { migrateBorderAttributes } from '@Controls/generateAttributes';
import Settings from './settings';
import Render from './render';
import hexToRGBA from '@Controls/hexToRgba';
import maybeGetColorForVariable from '@Controls/maybeGetColorForVariable';

const ColumnComponent = ( props ) => {
	const deviceType = useDeviceType();
	const {
		setAttributes,
		attributes,
		attributes: {
			backgroundOpacity,
			backgroundImageColor,
			gradientOverlayColor1,
			gradientOverlayColor2,
			backgroundType,
			overlayType,
			gradientOverlayAngle,
			gradientOverlayLocation1,
			gradientOverlayPosition,
			gradientOverlayLocation2,
			gradientOverlayType,
			borderStyle,
			borderWidth,
			borderRadius,
			borderColor,
			borderHoverColor,
		},
		isSelected,
		clientId,
	} = props;
	
	useEffect( () => {
		if( 101 !== backgroundOpacity && 'image' === backgroundType && 'gradient' === overlayType ){
			const color1 = hexToRGBA( maybeGetColorForVariable( gradientOverlayColor1 ), backgroundOpacity );
			const color2 = hexToRGBA( maybeGetColorForVariable( gradientOverlayColor2 ), backgroundOpacity );
			let gradientVal;
			if ( 'linear' === gradientOverlayType ) {
				gradientVal = `linear-gradient(${ gradientOverlayAngle }deg, ${ color1 } ${ gradientOverlayLocation1 }%, ${ color2 } ${ gradientOverlayLocation2 }%)`;
			} else {
				gradientVal = `radial-gradient( at ${ gradientOverlayPosition }, ${ color1 } ${ gradientOverlayLocation1 }%, ${ color2 } ${ gradientOverlayLocation2 }%)`;
			}
			setAttributes( { gradientValue: gradientVal } );
		}

		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );

		setAttributes( { classMigrate: true } );

		if ( 'image' === backgroundType ) {
			if ( 101 !== backgroundOpacity ) {
				const color = hexToRGBA( maybeGetColorForVariable( backgroundImageColor ), backgroundOpacity );
				setAttributes( { backgroundImageColor: color } );
				setAttributes( { backgroundOpacity: 101 } );
			}
		}

		// border migration
		if( borderWidth || borderRadius || borderColor || borderHoverColor || borderStyle ){

			migrateBorderAttributes( 'column', {
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
			setAttributes,
			attributes
		);
		}
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-column-style-' + clientId.substr( 0, 8 ), blockStyling );
	}, [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	return (
		<>
			{ isSelected && (
				<Settings parentProps={ props } deviceType={ deviceType } />
			) }
			<Render parentProps={ props } />
		</>
	);
};

export default ColumnComponent;
