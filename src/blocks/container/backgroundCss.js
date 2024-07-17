import generateBackgroundCSS from '@Controls/generateBackgroundCSS';
import { select } from '@wordpress/data';

const backgroundCss = ( attributes, deviceType, clientId, pseudoElementOverlay = {} ) => {
	let parentBlockNames = [];
	// Get an array of parent block client IDs for the block with the specified ID.
	const parentBlockClientIds = select( 'core/block-editor' ).getBlockParents( clientId );

	if ( parentBlockClientIds?.length > 0 ) {
		// Iterate through the parent block client IDs array and get the name of each parent block.
		parentBlockNames = parentBlockClientIds.map( ( ID ) => {
			return select( 'core/block-editor' ).getBlockName( ID );
		} );
	}

	// check if 'uagb/loop-builder' is present in parentBlockNames.
	const isLoopBuilderPresent = parentBlockNames.includes( 'uagb/loop-builder' );

	const placeHolderImage = isLoopBuilderPresent ? { 
		type: 'image', 
		url: uagb_blocks_info.uagb_url + '/admin/assets/images/uag-placeholder.svg' 
	} : '';
	const {
		backgroundType,
		backgroundImageDesktop,
		backgroundImageTablet,
		backgroundImageMobile,
		backgroundColor,
		backgroundPositionDesktop,
		backgroundPositionTablet,
		backgroundPositionMobile,
		backgroundAttachmentDesktop,
		backgroundAttachmentTablet,
		backgroundAttachmentMobile,
		backgroundRepeatDesktop,
		backgroundRepeatTablet,
		backgroundRepeatMobile,
		backgroundSizeDesktop,
		backgroundSizeTablet,
		backgroundSizeMobile,
		gradientValue,
		backgroundCustomSizeDesktop,
		backgroundCustomSizeTablet,
		backgroundCustomSizeMobile,
		backgroundCustomSizeType,
		backgroundImageColor,
		overlayType,
		overlayOpacity,
		customPosition,
		centralizedPosition,
		xPositionDesktop,
		xPositionTablet,
		xPositionMobile,
		xPositionType,
		xPositionTypeTablet,
		xPositionTypeMobile,
		yPositionDesktop,
		yPositionTablet,
		yPositionMobile,
		yPositionType,
		yPositionTypeTablet,
		yPositionTypeMobile,
		backgroundVideoColor,
		backgroundVideo,
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
		selectGradient,

		//image overlay
		backgroundOverlayImageDesktop,
		backgroundOverlayImageTablet,
		backgroundOverlayImageMobile,
		backgroundRepeatOverlayDesktop,
		backgroundRepeatOverlayTablet,
		backgroundRepeatOverlayMobile,
		backgroundPositionOverlayDesktop,
		backgroundPositionOverlayTablet,
		backgroundPositionOverlayMobile,
		backgroundSizeOverlayDesktop,
		backgroundSizeOverlayTablet,
		backgroundSizeOverlayMobile,
		backgroundCustomSizeOverlayDesktop,
		backgroundCustomSizeOverlayTablet,
		backgroundCustomSizeOverlayMobile,
		backgroundCustomOverlaySizeType,
		backgroundAttachmentOverlayDesktop,
		backgroundAttachmentOverlayTablet,
		backgroundAttachmentOverlayMobile,
		customOverlayPosition,
		xPositionOverlayDesktop,
		xPositionOverlayTablet,
		xPositionOverlayMobile,
		xPositionOverlayType,
		xPositionOverlayTypeTablet,
		xPositionOverlayTypeMobile,
		yPositionOverlayDesktop,
		yPositionOverlayTablet,
		yPositionOverlayMobile,
		yPositionOverlayType,
		yPositionOverlayTypeTablet,
		yPositionOverlayTypeMobile,
		overlayBlendMode,
		overlayBlendModeTablet,
		overlayBlendModeMobile,
		globalBlockStyleId,
	} = attributes;

	const backgroundAttributesDesktop = {
		backgroundType,
		backgroundColor,
		backgroundImage: backgroundImageDesktop?.url ? backgroundImageDesktop : placeHolderImage,
		gradientValue,
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
		selectGradient,
		backgroundRepeat: backgroundRepeatDesktop,
		backgroundPosition: backgroundPositionDesktop,
		backgroundSize: backgroundSizeDesktop,
		backgroundAttachment: backgroundAttachmentDesktop,
		backgroundCustomSize: backgroundCustomSizeDesktop,
		backgroundCustomSizeType,
		backgroundImageColor,
		overlayType,
		overlayOpacity,
		backgroundVideo,
		backgroundVideoColor,
		customPosition,
		centralizedPosition,
		xPosition: xPositionDesktop,
		xPositionType,
		yPosition: yPositionDesktop,
		yPositionType,

		backgroundOverlayImage: backgroundOverlayImageDesktop,
		backgroundOverlayRepeat: backgroundRepeatOverlayDesktop,
		backgroundOverlayPosition: backgroundPositionOverlayDesktop,
		backgroundOverlaySize: backgroundSizeOverlayDesktop,
		backgroundOverlayAttachment: backgroundAttachmentOverlayDesktop,
		backgroundCustomOverlaySize: backgroundCustomSizeOverlayDesktop,
		backgroundCustomOverlaySizeType,
		customOverlayPosition,
		xPositionOverlay: xPositionOverlayDesktop,
		xPositionOverlayType,
		yPositionOverlay: yPositionOverlayDesktop,
		yPositionOverlayType,
		blendMode: overlayBlendMode,
		globalBlockStyleId
	};

	// Any properties that should be inherited from Desktop will be imported from backgroundAttributesDesktop, since only 1 CSS file is generated at a time in bgCss.
	const backgroundAttributesTablet = {
		backgroundType,
		backgroundColor,
		// The placeholder image or Desktop background image would already be set or undefined in backgroundAttributesDesktop by this point.
		backgroundImage: backgroundImageTablet?.url ? backgroundImageTablet : backgroundAttributesDesktop.backgroundImage,
		gradientValue,
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
		selectGradient,
		backgroundRepeat: backgroundRepeatTablet ? backgroundRepeatTablet : backgroundAttributesDesktop.backgroundRepeat,
		backgroundPosition: backgroundPositionTablet ? backgroundPositionTablet : backgroundAttributesDesktop.backgroundPosition,
		backgroundSize: backgroundSizeTablet ? backgroundSizeTablet : backgroundAttributesDesktop.backgroundSize,
		backgroundAttachment: backgroundAttachmentTablet ? backgroundAttachmentTablet : backgroundAttributesDesktop.backgroundAttachment,
		backgroundCustomSize: backgroundCustomSizeTablet ? backgroundCustomSizeTablet : backgroundAttributesDesktop.backgroundCustomSize,
		backgroundCustomSizeType,
		backgroundImageColor,
		overlayType,
		overlayOpacity,
		backgroundVideo,
		backgroundVideoColor,
		customPosition,
		centralizedPosition,
		xPosition: ! isNaN( xPositionTablet ) ? xPositionTablet : backgroundAttributesDesktop.xPosition,
		xPositionType: xPositionTypeTablet ? xPositionTypeTablet : backgroundAttributesDesktop.xPositionType,
		yPosition: ! isNaN( yPositionTablet ) ? yPositionTablet : backgroundAttributesDesktop.yPosition,
		yPositionType: yPositionTypeTablet ? yPositionTypeTablet : backgroundAttributesDesktop.yPositionType,

		backgroundOverlayImage: backgroundOverlayImageTablet || backgroundOverlayImageDesktop,
		backgroundOverlayRepeat: backgroundRepeatOverlayTablet || backgroundRepeatOverlayDesktop,
		backgroundOverlayPosition: backgroundPositionOverlayTablet || backgroundPositionOverlayDesktop,
		backgroundOverlaySize: backgroundSizeOverlayTablet || backgroundSizeOverlayDesktop,
		backgroundOverlayAttachment: backgroundAttachmentOverlayTablet || backgroundAttachmentOverlayDesktop,
		backgroundCustomOverlaySize: backgroundCustomSizeOverlayTablet || backgroundCustomSizeOverlayDesktop,
		backgroundCustomOverlaySizeType,
		customOverlayPosition,
		xPositionOverlay: ( 'number' === typeof xPositionOverlayTablet ) ? xPositionOverlayTablet : backgroundAttributesDesktop.xPositionOverlay,
        xPositionOverlayType: xPositionOverlayTypeTablet
            ? xPositionOverlayTypeTablet
            : backgroundAttributesDesktop.xPositionOverlayType,
        yPositionOverlay: ( 'number' === typeof yPositionOverlayTablet ) ? yPositionOverlayTablet : backgroundAttributesDesktop.yPositionOverlay,
        yPositionOverlayType: yPositionOverlayTypeTablet
            ? yPositionOverlayTypeTablet
            : backgroundAttributesDesktop.yPositionOverlayType,
		blendMode: overlayBlendModeTablet || overlayBlendMode,
		globalBlockStyleId,
	};

	// Any properties that should be inherited from Tablet will be imported from backgroundAttributesTablet ( which inherits from backgroundAttributesDesktop ), since only 1 CSS file is generated at a time in bgCss.
	const backgroundAttributesMobile = {
		backgroundType,
		backgroundColor,
		// The placeholder image or Tablet background image would already be set or undefined in backgroundAttributesTablet by this point.
		backgroundImage: backgroundImageMobile?.url ? backgroundImageMobile : backgroundAttributesTablet.backgroundImage,
		gradientValue,
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
		selectGradient,
		backgroundRepeat: backgroundRepeatMobile ? backgroundRepeatMobile : backgroundAttributesTablet.backgroundRepeat,
		backgroundPosition: backgroundPositionMobile ? backgroundPositionMobile : backgroundAttributesTablet.backgroundPosition,
		backgroundSize: backgroundSizeMobile ? backgroundSizeMobile : backgroundAttributesTablet.backgroundSize,
		backgroundAttachment: backgroundAttachmentMobile ? backgroundAttachmentMobile : backgroundAttributesTablet.backgroundAttachment,
		backgroundCustomSize: backgroundCustomSizeMobile ? backgroundCustomSizeMobile : backgroundAttributesTablet.backgroundCustomSize,
		backgroundCustomSizeType,
		backgroundImageColor,
		overlayType,
		overlayOpacity,
		backgroundVideo,
		backgroundVideoColor,
		customPosition,
		centralizedPosition,
		xPosition: ! isNaN( xPositionMobile ) ? xPositionMobile : backgroundAttributesTablet.xPosition,
		xPositionType: xPositionTypeMobile ? xPositionTypeMobile : backgroundAttributesTablet.xPositionType,
		yPosition: ! isNaN( yPositionMobile ) ? yPositionMobile : backgroundAttributesTablet.yPosition,
		yPositionType: yPositionTypeMobile ? yPositionTypeMobile : backgroundAttributesTablet.yPositionType,

		backgroundOverlayImage:
			backgroundOverlayImageMobile || backgroundOverlayImageTablet || backgroundOverlayImageDesktop,
		backgroundOverlayRepeat:
		backgroundRepeatOverlayMobile || backgroundRepeatOverlayTablet || backgroundRepeatOverlayDesktop,
		backgroundOverlayPosition:
		backgroundPositionOverlayMobile || backgroundPositionOverlayTablet || backgroundPositionOverlayDesktop,
		backgroundOverlaySize:
		backgroundSizeOverlayMobile || backgroundSizeOverlayTablet || backgroundSizeOverlayDesktop,
		backgroundOverlayAttachment:
			backgroundAttachmentOverlayMobile ||
			backgroundAttachmentOverlayTablet ||
			backgroundAttachmentOverlayDesktop,
		backgroundCustomOverlaySize:
			backgroundCustomSizeOverlayMobile ||
			backgroundCustomSizeOverlayTablet ||
			backgroundCustomSizeOverlayDesktop,
		backgroundCustomOverlaySizeType,
		customOverlayPosition,
		xPositionOverlay: ( 'number' === typeof xPositionOverlayMobile ) ? xPositionOverlayMobile : backgroundAttributesTablet.xPositionOverlay,
        xPositionOverlayType: xPositionOverlayTypeMobile
            ? xPositionOverlayTypeMobile
            : backgroundAttributesTablet.xPositionOverlayType,
        yPositionOverlay: ( 'number' === typeof yPositionOverlayMobile ) ? yPositionOverlayMobile : backgroundAttributesTablet.yPositionOverlay,
        yPositionOverlayType: yPositionOverlayTypeMobile
            ? yPositionOverlayTypeMobile
            : backgroundAttributesTablet.yPositionOverlayType,
		blendMode: overlayBlendModeMobile || overlayBlendModeTablet || overlayBlendMode,
		globalBlockStyleId,
	};

	let bgCss;

	switch ( deviceType ) {
		case 'Mobile':
			bgCss = generateBackgroundCSS( backgroundAttributesMobile, pseudoElementOverlay );
			break;
		case 'Tablet':
			bgCss = generateBackgroundCSS( backgroundAttributesTablet, pseudoElementOverlay );
			break;
		default:
			bgCss = generateBackgroundCSS( backgroundAttributesDesktop, pseudoElementOverlay );
	}

	if ( ! bgCss ) {
		return null;
	}

	// Return without formatting if this is for dynamic styling
	if ( pseudoElementOverlay?.forStyleSheet ) {
		return bgCss;
	}

	const createCamelCase = {};

	const snakeToCamel = str =>
		str.toLowerCase().replace( /([-_][a-z])/g, group =>
			group
				.toUpperCase()
				.replace( '-', '' )
				.replace( '_', '' )
		);

	for ( const cssProp in bgCss ) {
		if( ! bgCss[cssProp] ){
			continue;
		}
		createCamelCase[ snakeToCamel( cssProp ) ] = 'string' === typeof bgCss[cssProp] ? bgCss[cssProp].replace( ';', '' ) : bgCss[cssProp];
	}

	return createCamelCase;
}
export default backgroundCss;