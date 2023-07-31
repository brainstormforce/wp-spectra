/**
 * BLOCK: Slider Child
 */

import Settings from './settings';
import Render from './render';
import styling from './styling';
import { useMemo } from '@wordpress/element';
import AddStaticStyles from '@Controls/AddStaticStyles';
import addInitialAttr from '@Controls/addInitialAttr';
import { withSelect, useDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import DynamicCSSLoader from '@Components/dynamic-css-loader';

const UAGBSlide = ( props ) => {
	const { isSelected, attributes, deviceType, clientId } = props;

	const blockStyling = useMemo( () => styling( attributes, clientId, deviceType ), [ attributes, deviceType ] );

	return (
		<>
			<DynamicCSSLoader { ...{ blockStyling } } />
			{ isSelected && <Settings { ...props } /> }
			<Render { ...props } />
		</>
	);
};

const applyWithSelect = withSelect( ( select, props ) => {
	// eslint-disable-line no-shadow
	const { __experimentalGetPreviewDeviceType = null } = select( 'core/edit-post' ) || select( 'core/edit-widgets' ) || select( 'core/edit-site' );;
	const deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;
	const { getBlocks, getBlockIndex } = select( 'core/block-editor' );
	const { getBlockType } = select( 'core/blocks' );
	const { insertBlock } = useDispatch( 'core/block-editor' );
	const innerBlocks = getBlocks( props.clientId );
	const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );
	const slideIndex = getBlockIndex( props.clientId );

	return {
		// Subscribe to changes of the innerBlocks to control the display of the layout selection placeholder.
		innerBlocks,
		insertBlock,
		blockType: getBlockType( props.name ),
		replaceInnerBlocks,
		deviceType,
		isParentOfSelectedBlock: select( 'core/block-editor' ).hasSelectedInnerBlock( props.clientId, true ),
		slideIndex,
	};
} );

export default compose(
	applyWithSelect,
	addInitialAttr,
	AddStaticStyles,
)( UAGBSlide );
