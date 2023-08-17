/**
 * BLOCK: Testimonial
 */
import TestimonialStyle from './inline-styles';
import { useEffect, useMemo } from '@wordpress/element';
import { migrateBorderAttributes } from '@Controls/generateAttributes';
import Settings from './settings';
import Render from './render';
import scrollBlockToView from '@Controls/scrollBlockToView';
import hexToRGBA from '@Controls/hexToRgba';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import maybeGetColorForVariable from '@Controls/maybeGetColorForVariable';
import DynamicCSSLoader from '../../components/dynamic-css-loader';
import DynamicFontLoader from './dynamicFontLoader';
import AddStaticStyles from '@Controls/AddStaticStyles';
import addInitialAttr from '@Controls/addInitialAttr';
import { compose } from '@wordpress/compose';

const UAGBtestimonial = ( props ) => {
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
			block_id,
		},
		isSelected,
		clientId,
		name,
		deviceType
	} = props;

	useEffect( () => {

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
			uagb_carousel_height( block_id );
		} else {
			uagb_carousel_unset_height( block_id ); // eslint-disable-line no-undef
		}
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
			{ isSelected && <Settings { ...props } /> }
			<Render { ...props } />
		</>
	);
};

export default compose(
	addInitialAttr,
	AddStaticStyles,
)( UAGBtestimonial );
