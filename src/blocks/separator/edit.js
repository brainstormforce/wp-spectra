/**
 * BLOCK: Separator
 */
import styling from './styling';
import { useEffect, useMemo } from '@wordpress/element';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import scrollBlockToView from '@Controls/scrollBlockToView';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import DynamicFontLoader from './dynamicFontLoader';
import { compose } from '@wordpress/compose';
import AddStaticStyles from '@Controls/AddStaticStyles';
import Settings from './settings';
import Render from './render';
//  Import CSS.
import './style.scss';
import AddInitialAttr from '@Controls/addInitialAttr';

const UAGBSeparator = ( props ) => {
	const {
		isSelected,
		attributes,
		attributes: { 
			UAGHideDesktop, 
			UAGHideTab, 
			UAGHideMob, 
			separatorHeight, 
			separatorHeightTablet, 
			separatorHeightMobile,
			separatorHeightType,
			blockTopPadding,
			blockBottomPadding,
			blockTopPaddingTablet,
			blockBottomPaddingTablet,
			blockTopPaddingMobile,
			blockBottomPaddingMobile,
			blockPaddingUnit,
			blockPaddingUnitTablet,
			blockPaddingUnitMobile,

		},
		name,
		clientId,
		deviceType,
		setAttributes,
	} = props;

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	useEffect( () => {
		// Migrating attributes. 
		if( undefined === blockTopPadding ) {
			setAttributes( { blockTopPadding: separatorHeight } )
		}
		if( undefined === blockBottomPadding ) {
			setAttributes( { blockBottomPadding: separatorHeight } )
		}
		if( undefined === blockTopPaddingTablet ) {
			setAttributes( { blockTopPaddingTablet: separatorHeightTablet } )
		}
		if( undefined === blockBottomPaddingTablet ) {
			setAttributes( { blockBottomPaddingTablet: separatorHeightTablet } )
		}
		if( undefined === blockTopPaddingMobile ) {
			setAttributes( { blockTopPaddingMobile: separatorHeightMobile } )
		}
		if( undefined === blockBottomPaddingMobile ) {
			setAttributes( { blockBottomPaddingMobile: separatorHeightMobile } )
		}
		if( undefined === blockPaddingUnit ) {
			setAttributes( { blockPaddingUnit: separatorHeightType } )
		}
		if( undefined === blockPaddingUnitTablet ) {
			setAttributes( { blockPaddingUnitTablet: separatorHeightType } )
		}
		if( undefined === blockPaddingUnitMobile ) {
			setAttributes( { blockPaddingUnitMobile: separatorHeightType } )
		}
		// Reset old attribute to undefined. 
		setAttributes( { separatorHeight: undefined, separatorHeightTablet: undefined, separatorHeightMobile: undefined } );
		
	}, [  ] );

	const blockStyling = useMemo( () => styling( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );

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
	AddStaticStyles,
	AddInitialAttr 
)( UAGBSeparator );
