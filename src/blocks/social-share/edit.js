/**
 * BLOCK: UAGB - Social Share Edit Class
 */
import styling from './styling';

import { useEffect, useMemo } from '@wordpress/element';
import scrollBlockToView from '@Controls/scrollBlockToView';
import Settings from './settings';
import Render from './render';
import { select, dispatch } from '@wordpress/data';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import { compose } from '@wordpress/compose';
import AddStaticStyles from '@Controls/AddStaticStyles';
import addInitialAttr from '@Controls/addInitialAttr';
const SocialShareComponent = ( props ) => {
	const {
		isSelected,
		clientId,
		attributes,
		name,
		attributes: { UAGHideDesktop, UAGHideTab, UAGHideMob },
		deviceType
	} = props;

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	useEffect( () => {
		select( 'core/block-editor' )
			.getBlocksByClientId( clientId )[ 0 ]
			?.innerBlocks.forEach( function ( block ) {
				dispatch( 'core/block-editor' ).updateBlockAttributes( block.clientId, {
					parentSize: attributes.size,
					parentSizeMobile: attributes.sizeMobile,
					parentSizeTablet: attributes.sizeTablet,
				} );
			} );
	}, [ attributes.size, attributes.sizeMobile, attributes.sizeTablet ] );

	const blockStyling = useMemo( () => styling( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );

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
)( SocialShareComponent );
