/**
 * BLOCK: Call To Action
 */

import CtaStyle from './inline-styles';
import { useEffect, useMemo } from '@wordpress/element';
import scrollBlockToView from '@Controls/scrollBlockToView';
import Settings from './settings';
import Render from './render';
import DynamicFontLoader from './dynamicFontLoader';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import { compose } from '@wordpress/compose';
import AddStaticStyles from '@Controls/AddStaticStyles';
import addInitialAttr from '@Controls/addInitialAttr';

import { migrateBorderAttributes } from '@Controls/generateAttributes';
const UAGBCallToAction = ( props ) => {
	const {
		isSelected,
		setAttributes,
		attributes,
		attributes: {
			UAGHideDesktop,
			UAGHideTab,
			UAGHideMob,
			ctaPosition,
			stack,
			ctaLeftSpace,
			overallBlockLeftMargin,
			textAlign,
			ctaBorderStyle,
			ctaBorderWidth,
			ctaBorderColor,
			ctaBorderhoverColor,
			ctaBorderRadius,
		},
		clientId,
		name,
		deviceType
	} = props;

	useEffect( () => {
		if ( stack === 'none' && ctaPosition === 'right' ) {
			setAttributes( { stack: 'none' } );
		} else if ( stack === 'none' && 'below-title' === ctaPosition ) {
			setAttributes( { stack: 'desktop' } );
		}

		if ( ctaLeftSpace ) {
			if ( undefined === overallBlockLeftMargin && 'left' === textAlign && 'right' === ctaPosition ) {
				setAttributes( { overallBlockLeftMargin: ctaLeftSpace } );
			}
		}

		// border
		if ( ctaBorderWidth || ctaBorderRadius || ctaBorderColor || ctaBorderhoverColor || ctaBorderStyle ) {
			migrateBorderAttributes(
				'btn',
				{
					label: 'ctaBorderWidth',
					value: ctaBorderWidth,
				},
				{
					label: 'ctaBorderRadius',
					value: ctaBorderRadius,
				},
				{
					label: 'ctaBorderColor',
					value: ctaBorderColor,
				},
				{
					label: 'ctaBorderhoverColor',
					value: ctaBorderhoverColor,
				},
				{
					label: 'ctaBorderStyle',
					value: ctaBorderStyle,
				},
				setAttributes,
				attributes
			);
		}
	}, [] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	const blockStyling = useMemo( () => CtaStyle( attributes, clientId, name, deviceType ), [
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
)( UAGBCallToAction );
