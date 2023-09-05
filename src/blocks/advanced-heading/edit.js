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
		attributes: { UAGHideDesktop, UAGHideTab, UAGHideMob, headingTitle, headingDesc },
		isSelected,
		clientId,
		name,
		deviceType,
		context,
		setAttributes,
	} = props;

	// Check dynamic content in heading and description.
	const headingHasDynamicContent = -1 !== headingTitle.indexOf( '<span data-spectra-dc-field="' );
	const descriptionHasDynamicContent = headingDesc && -1 !== headingDesc.indexOf( '<span data-spectra-dc-field="' );

	// Including condition in props for child component.
	props = { ...props, headingHasDynamicContent, descriptionHasDynamicContent };


	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		// Check if block has dynamic content and context is not set.
		if ( ( headingHasDynamicContent || descriptionHasDynamicContent ) && ! attributes?.context ) {
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
