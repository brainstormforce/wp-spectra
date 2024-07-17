/**
 * BLOCK: UAGB - Section Edit Class
 */

import styling from './styling';
import { useEffect, useMemo } from '@wordpress/element';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { migrateBorderAttributes } from '@Controls/generateAttributes';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import { compose } from '@wordpress/compose';
import AddStaticStyles from '@Controls/AddStaticStyles';
import hexToRGBA from '@Controls/hexToRgba';

import maybeGetColorForVariable from '@Controls/maybeGetColorForVariable';
import addInitialAttr from '@Controls/addInitialAttr';

const UAGBSectionEdit = ( props ) => {
	const {
		isSelected,
		attributes,
		attributes: {
			borderStyle,
			borderWidth,
			borderRadius,
			borderColor,
			borderHoverColor,
			UAGHideDesktop,
			UAGHideTab,
			UAGHideMob,
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
			backgroundVideoOpacity,
			backgroundVideoColor,
		},
		setAttributes,
		clientId,
		deviceType
	} = props;

	useEffect( () => {
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
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	useEffect( () => {
		if ( 101 !== backgroundOpacity && 'image' === backgroundType && 'gradient' === overlayType ) {
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

		if ( 'image' === backgroundType ) {
			if ( 101 !== backgroundOpacity ) {
				const color = hexToRGBA( maybeGetColorForVariable( backgroundImageColor ), backgroundOpacity );
				setAttributes( { backgroundImageColor: color } );
				setAttributes( { backgroundOpacity: 101 } );
			}
		}

		if ( 'video' === backgroundType ) {
			if ( 101 !== backgroundVideoOpacity ) {
				const color = hexToRGBA( maybeGetColorForVariable( backgroundVideoColor ), backgroundVideoOpacity );
				setAttributes( { backgroundVideoColor: color } );
			}
		}
	}, [] );

	const blockStyling = useMemo( () => styling( attributes, clientId, deviceType ), [ attributes, deviceType ] );

	return (
		<>
			<DynamicCSSLoader { ...{ blockStyling } } />
			{ isSelected && <Settings { ...props } /> }
			<Render { ...props } />
		</>
	);
};

export default compose(
	addInitialAttr,
	AddStaticStyles,
)( UAGBSectionEdit );
