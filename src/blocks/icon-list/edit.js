/**
 * BLOCK: Icon List
 */

import { useEffect, useMemo } from '@wordpress/element';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { select, dispatch } from '@wordpress/data';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import Settings from './settings';
import Render from './render';
import styling from './styling';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import DynamicFontLoader from './dynamicFontLoader';
import { compose } from '@wordpress/compose';
import AddStaticStyles from '@Controls/AddStaticStyles';
import addInitialAttr from '@Controls/addInitialAttr';

const UAGBIconList = ( props ) => {
	const {
		isSelected,
		attributes,
		attributes: { UAGHideDesktop, UAGHideTab, UAGHideMob },
		clientId,
		name,
		deviceType
	} = props;

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	const blockStyling = useMemo( () => styling( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		select( 'core/block-editor' )
			.getBlocksByClientId( clientId )[ 0 ]
			?.innerBlocks.forEach( function ( block ) {
				dispatch( 'core/block-editor' ).updateBlockAttributes( block.clientId, {
					fromParentIcon: attributes.parentIcon,
					hideLabel: attributes.hideLabel,
					imageSizeChild: attributes.size,
				} );
			} );
	}, [ attributes.parentIcon, attributes.hideLabel, attributes.size ] );

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
)( UAGBIconList );
