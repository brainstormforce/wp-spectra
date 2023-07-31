/**
 * BLOCK: Advanced Heading
 */

import { useEffect, useMemo } from '@wordpress/element';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import scrollBlockToView from '@Controls/scrollBlockToView';
import Settings from './settings';
import Render from './render';
//  Import CSS.
import './style.scss';
import styling from './styling';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import DynamicFontLoader from './dynamicFontLoader';
import { compose } from '@wordpress/compose';
import AddStaticStyles from '@Controls/AddStaticStyles';
import AddInitialAttr from '@Controls/addInitialAttr';

const UAGBAdvancedHeading = ( props ) => {
	const {
		attributes,
		attributes: { UAGHideDesktop, UAGHideTab, UAGHideMob },
		isSelected,
		clientId,
		name,
		deviceType,
		context,
		setAttributes,
	} = props;

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		if( ! attributes?.context ){
			setAttributes( { context } );
		}
	}, [ context ] )

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

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
	AddInitialAttr,
	AddStaticStyles,
)( UAGBAdvancedHeading );
