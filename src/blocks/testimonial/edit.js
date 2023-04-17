/**
 * BLOCK: Testimonial
 */
import TestimonialStyle from './inline-styles';
import { useEffect, useMemo } from '@wordpress/element';
import { migrateBorderAttributes } from '@Controls/generateAttributes';
import Settings from './settings';
import Render from './render';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import hexToRGBA from '@Controls/hexToRgba';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import maybeGetColorForVariable from '@Controls/maybeGetColorForVariable';
import DynamicCSSLoader from '../../components/dynamic-css-loader';
import DynamicFontLoader from './dynamicFontLoader';

const UAGBtestimonial = ( props ) => {
	const deviceType = useDeviceType();
	const {
		setAttributes,
		attributes,
		attributes: {
			backgroundOpacity,
			backgroundImageColor,
			backgroundType,
			overlayType,
			gradientColor1,
			gradientColor2,
			gradientLocation1,
			gradientLocation2,
			gradientType,
			gradientAngle,
			gradientPosition,
			borderStyle,
			borderWidth,
			borderRadius,
			borderColor,
			borderHoverColor,
			equalHeight,
			UAGHideDesktop,
			UAGHideTab,
			UAGHideMob,
		},
		isSelected,
		clientId,
		name,
	} = props;

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );

		setAttributes( { classMigrate: true } );

		if ( 101 !== backgroundOpacity && 'image' === backgroundType && 'gradient' === overlayType ) {
			const color1 = hexToRGBA( maybeGetColorForVariable( gradientColor1 ), backgroundOpacity );
			const color2 = hexToRGBA( maybeGetColorForVariable( gradientColor2 ), backgroundOpacity );
			let gradientVal;
			if ( 'linear' === gradientType ) {
				gradientVal = `linear-gradient(${ gradientAngle }deg, ${ color1 } ${ gradientLocation1 }%, ${ color2 } ${ gradientLocation2 }%)`;
			} else {
				gradientVal = `radial-gradient( at ${ gradientPosition }, ${ color1 } ${ gradientLocation1 }%, ${ color2 } ${ gradientLocation2 }%)`;
			}
			setAttributes( { gradientValue: gradientVal } );
		}

		if ( 'image' === backgroundType ) {
			if ( 101 !== backgroundOpacity ) {
				const color = hexToRGBA( maybeGetColorForVariable( backgroundImageColor ), backgroundOpacity );
				setAttributes( { backgroundImageColor: color } );
				setAttributes( { backgroundOpacity: 101 } );
			}
		}

		// Backward Border Migration
		if ( borderWidth || borderRadius || borderColor || borderHoverColor || borderStyle ) {
			migrateBorderAttributes(
				'overall',
				{
					label: 'borderWidth',
					value: borderWidth,
				},
				{
					label: 'borderRadius',
					value: borderRadius,
				},
				{
					label: 'borderColor',
					value: borderColor,
				},
				{
					label: 'borderHoverColor',
					value: borderHoverColor,
				},
				{
					label: 'borderStyle',
					value: borderStyle,
				},
				setAttributes,
				attributes
			);
		}
	}, [] );

	useEffect( () => {
		if ( equalHeight ) {
			uagb_carousel_height( clientId.substr( 0, 8 ) ); // eslint-disable-line no-undef
		} else {
			uagb_carousel_unset_height( clientId.substr( 0, 8 ) ); // eslint-disable-line no-undef
		}

		addBlockEditorDynamicStyles();
	}, [ attributes, deviceType ] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	const blockStyling = useMemo( () => TestimonialStyle( attributes, clientId, name, deviceType ), [
		attributes,
		deviceType,
	] );

	return (
		<>
			<DynamicCSSLoader { ...{ blockStyling } } />
			<DynamicFontLoader { ...{ attributes } } />
			{ isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
		</>
	);
};

export default UAGBtestimonial;
