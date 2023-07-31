/**
 * BLOCK: Info Box - Edit Class
 */
import { useEffect, useMemo } from '@wordpress/element';
import styling from './styling';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { migrateBorderAttributes } from '@Controls/generateAttributes';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import DynamicFontLoader from './dynamicFontLoader';
import Settings from './settings';
import Render from './render';
import { compose } from '@wordpress/compose';
import AddStaticStyles from '@Controls/AddStaticStyles';
import addInitialAttr from '@Controls/addInitialAttr';
import { InfoBoxWrapper } from './components/Wrapper';

const UAGBInfoBox = ( props ) => {
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
		name,
		clientId,
		deviceType,
		context,
	} = props;

	useEffect( () => {
		
		if ( ctaBgType === undefined ) {
			setAttributes( { ctaBgType: 'color' } );
		}

		if ( ctaBgHoverType === undefined ) {
			setAttributes( { ctaBgHoverType: 'color' } );
		}

		if ( showCtaIcon === undefined ) {
			setAttributes( { showCtaIcon: true } );
		}

		// Backward Border Migration
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
		if( ! attributes?.context ){
			setAttributes( { context } );
		}
	}, [ context ] )

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	const blockStyling = useMemo( () => styling( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );
	
	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

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
	InfoBoxWrapper,
)( UAGBInfoBox );
