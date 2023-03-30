/**
 * BLOCK: Price List - Edit Class
 */

import RestMenuStyle from './inline-styles';
import { select, dispatch } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import WebfontLoader from '@Components/typography/fontloader';

const UAGBRestaurantMenu = ( props ) => {
	const deviceType = useDeviceType();
	const {
		isSelected,
		attributes,
		attributes: {
			imgAlign,
			imagePosition,
			imageAlignment,
			UAGHideDesktop,
			UAGHideTab,
			UAGHideMob,
			showImage,
			titleLoadGoogleFonts,
			titleFontFamily,
			titleFontWeight,
			descLoadGoogleFonts,
			descFontFamily,
			descFontWeight,
			priceLoadGoogleFonts,
			priceFontFamily,
			priceFontWeight,
		},
		setAttributes,
		clientId,
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
		const blockStyling = RestMenuStyle( props );

		addBlockEditorDynamicStyles( 'uagb-restaurant-menu-style-' + clientId.substr( 0, 8 ), blockStyling );
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

	let loadTitleGoogleFonts;
	let loadDescGoogleFonts;
	let loadPriceGoogleFonts;

	if ( titleLoadGoogleFonts === true ) {
		const titleconfig = {
			google: {
				families: [ titleFontFamily + ( titleFontWeight ? ':' + titleFontWeight : '' ) ],
			},
		};

		loadTitleGoogleFonts = <WebfontLoader config={ titleconfig }></WebfontLoader>;
	}

	if ( descLoadGoogleFonts === true ) {
		const descconfig = {
			google: {
				families: [ descFontFamily + ( descFontWeight ? ':' + descFontWeight : '' ) ],
			},
		};

		loadDescGoogleFonts = <WebfontLoader config={ descconfig }></WebfontLoader>;
	}

	if ( priceLoadGoogleFonts === true ) {
		const priceconfig = {
			google: {
				families: [ priceFontFamily + ( priceFontWeight ? ':' + priceFontWeight : '' ) ],
			},
		};

		loadPriceGoogleFonts = <WebfontLoader config={ priceconfig }></WebfontLoader>;
	}

	return (
		<>
			{ isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
			{ loadTitleGoogleFonts }
			{ loadDescGoogleFonts }
			{ loadPriceGoogleFonts }
		</>
	);
};
export default UAGBRestaurantMenu;
