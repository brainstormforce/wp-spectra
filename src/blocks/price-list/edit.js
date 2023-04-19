/**
 * BLOCK: Price List - Edit Class
 */

import RestMenuStyle from './inline-styles';
import { select, dispatch } from '@wordpress/data';
import { useEffect, useMemo } from '@wordpress/element';
import { useDeviceType } from '@Controls/getPreviewType';
import scrollBlockToView from '@Controls/scrollBlockToView';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import DynamicFontLoader from './dynamicFontLoader';
import { compose } from '@wordpress/compose';
import AddStaticStyles from '@Controls/AddStaticStyles';

const UAGBRestaurantMenu = ( props ) => {
	const deviceType = useDeviceType();
	const {
		isSelected,
		attributes,
		attributes: { imgAlign, imagePosition, imageAlignment, UAGHideDesktop, UAGHideTab, UAGHideMob, showImage },
		setAttributes,
		clientId,
		name,
	} = props;

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );
		setAttributes( { classMigrate: true } );
		setAttributes( { childMigrate: true } );
		if ( imagePosition ) {
			if ( 'left' === imagePosition ) {
				setAttributes( { imgAlign: 'side' } );
			}
			if ( 'right' === imagePosition ) {
				setAttributes( { imgAlign: 'side' } );
			}
			if ( 'top' === imagePosition ) {
				setAttributes( { imgAlign: 'top' } );
			}
		}

		const getChildBlocks = select( 'core/block-editor' ).getBlocks( clientId );

		getChildBlocks.forEach( ( pricelistChild ) => {
			pricelistChild.attributes.imageAlignment = imageAlignment;
		} );
	}, [] );

	useEffect( () => {
		if ( 'side' === imgAlign && 'right' !== imagePosition ) {
			setAttributes( { imagePosition: 'left' } );
			setAttributes( { headingAlign: 'left' } );
		}
		if ( 'top' === imgAlign ) {
			setAttributes( { imagePosition: 'top' } );
		}
	}, [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		// Set showImage attribute in child blocks based on current parent block's value.
		select( 'core/block-editor' )
			.getBlocksByClientId( clientId )[ 0 ]
			?.innerBlocks.forEach( function ( block ) {
				dispatch( 'core/block-editor' ).updateBlockAttributes( block.clientId, { showImage } );
			} );
	}, [ showImage ] );

	const blockStyling = useMemo( () => RestMenuStyle( attributes, clientId, name, deviceType ), [
		attributes,
		deviceType,
	] );

	return (
		<>
			<DynamicCSSLoader { ...{ blockStyling } } />
			<DynamicFontLoader { ...{ attributes } } />
			{ isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
		</>
	);
};

export default compose(
	AddStaticStyles,
)( UAGBRestaurantMenu );
