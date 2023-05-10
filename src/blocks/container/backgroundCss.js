import generateBackgroundCSS from '@Controls/generateBackgroundCSS';
import { select } from '@wordpress/data';

const backgroundCss = ( attributes, deviceType, clientId ) => {
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
	} : {};
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
		customPosition,
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
		backgroundVideo,
		backgroundVideoColor,
		customPosition,
		xPosition: xPositionDesktop,
		xPositionType,
		yPosition: yPositionDesktop,
		yPositionType,
	};

	const backgroundAttributesTablet = {
		backgroundType,
		backgroundColor,
		backgroundImage: backgroundImageTablet?.url ? backgroundImageTablet : placeHolderImage,
		gradientValue,
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
		selectGradient,
		backgroundRepeat: backgroundRepeatTablet,
		backgroundPosition: backgroundPositionTablet,
		backgroundSize: backgroundSizeTablet,
		backgroundAttachment: backgroundAttachmentTablet,
		backgroundCustomSize: backgroundCustomSizeTablet,
		backgroundCustomSizeType,
		backgroundImageColor,
		overlayType,
		backgroundVideo,
		backgroundVideoColor,
		customPosition,
		xPosition: xPositionTablet,
		xPositionType: xPositionTypeTablet,
		yPosition: yPositionTablet,
		yPositionType: yPositionTypeTablet,
	};

	const backgroundAttributesMobile = {
		backgroundType,
		backgroundColor,
		backgroundImage: backgroundImageMobile?.url ? backgroundImageMobile : placeHolderImage,
		gradientValue,
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
		selectGradient,
		backgroundRepeat: backgroundRepeatMobile,
		backgroundPosition: backgroundPositionMobile,
		backgroundSize: backgroundSizeMobile,
		backgroundAttachment: backgroundAttachmentMobile,
		backgroundCustomSize: backgroundCustomSizeMobile,
		backgroundCustomSizeType,
		backgroundImageColor,
		overlayType,
		backgroundVideo,
		backgroundVideoColor,
		customPosition,
		xPosition: xPositionMobile,
		xPositionType: xPositionTypeMobile,
		yPosition: yPositionMobile,
		yPositionType: yPositionTypeMobile,
	};

	let bgCss;
	if ( 'mobile' === deviceType ) {
		bgCss = generateBackgroundCSS( backgroundAttributesMobile );
	} else if ( 'tablet' === deviceType ) {
		bgCss = generateBackgroundCSS( backgroundAttributesTablet );
	} else {
		bgCss = generateBackgroundCSS( backgroundAttributesDesktop );
	}
	if ( !bgCss ) {
		return null;
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
		createCamelCase[ snakeToCamel( cssProp ) ] = bgCss[cssProp].replace( ';', '' );
	}
	return createCamelCase;
}
export default backgroundCss;