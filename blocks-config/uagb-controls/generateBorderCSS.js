
const generateBorderCSS = ( attributes, prefix, deviceType = 'desktop' ) => {
	const borderCSS = {}
	const borderStyle = attributes[prefix + 'BorderStyle'];
	const borderColor = attributes[prefix + 'BorderColor'];

	const borderTopWidth = attributes[prefix + 'BorderTopWidth'] ? attributes[prefix + 'BorderTopWidth']+'px' : '' ;
	const borderRightWidth = attributes[prefix + 'BorderRightWidth'] ? attributes[prefix + 'BorderRightWidth']+'px' : '' ;
	const borderBottomWidth = attributes[prefix + 'BorderBottomWidth'] ? attributes[prefix + 'BorderBottomWidth']+'px' : '' ;
	const borderLeftWidth = attributes[prefix + 'BorderLeftWidth'] ? attributes[prefix + 'BorderLeftWidth']+'px' : '' ;

	const borderTopWidthMobile = attributes[prefix + 'BorderTopWidthMobile'] ? attributes[prefix + 'BorderTopWidthMobile']+'px' : '' ;
	const borderRightWidthMobile = attributes[prefix + 'BorderRightWidthMobile'] ? attributes[prefix + 'BorderRightWidthMobile']+'px' : '' ;
	const borderBottomWidthMobile = attributes[prefix + 'BorderBottomWidthMobile'] ? attributes[prefix + 'BorderBottomWidthMobile']+'px' : '' ;
	const borderLeftWidthMobile = attributes[prefix + 'BorderLeftWidthMobile'] ? attributes[prefix + 'BorderLeftWidthMobile']+'px' : '' ;

	const borderTopWidthTablet = attributes[prefix + 'BorderTopWidthTablet'] ? attributes[prefix + 'BorderTopWidthTablet']+'px' : '' ;
	const borderRightWidthTablet = attributes[prefix + 'BorderRightWidthTablet'] ? attributes[prefix + 'BorderRightWidthTablet']+'px' : '' ;
	const borderBottomWidthTablet = attributes[prefix + 'BorderBottomWidthTablet'] ? attributes[prefix + 'BorderBottomWidthTablet']+'px' : '' ;
	const borderLeftWidthTablet = attributes[prefix + 'BorderLeftWidthTablet'] ? attributes[prefix + 'BorderLeftWidthTablet']+'px' : '' ;

	const borderTopLeftRadius = attributes[prefix + 'BorderTopLeftRadius'] ? attributes[prefix + 'BorderTopLeftRadius']+attributes[prefix+ 'BorderRadiusUnit'] : '' ;
	const borderTopRightRadius = attributes[prefix + 'BorderTopRightRadius'] ? attributes[prefix + 'BorderTopRightRadius']+attributes[prefix+ 'BorderRadiusUnit'] : '' ;
	const borderBottomRightRadius = attributes[prefix + 'BorderBottomRightRadius'] ? attributes[prefix + 'BorderBottomRightRadius']+attributes[prefix+ 'BorderRadiusUnit'] : '' ;
	const borderBottomLeftRadius = attributes[prefix + 'BorderBottomLeftRadius'] ? attributes[prefix + 'BorderBottomLeftRadius']+attributes[prefix+ 'BorderRadiusUnit'] : '' ;

	const borderTopLeftRadiusMobile = attributes[prefix + 'BorderTopLeftRadiusMobile'] ? attributes[prefix + 'BorderTopLeftRadiusMobile']+'px' : '' ;
	const borderTopRightRadiusMobile = attributes[prefix + 'BorderTopRightRadiusMobile'] ? attributes[prefix + 'BorderTopRightRadiusMobile']+'px' : '' ;
	const borderBottomRightRadiusMobile = attributes[prefix + 'BorderBottomRightRadiusMobile'] ? attributes[prefix + 'BorderBottomRightRadiusMobile']+'px' : '' ;
	const borderBottomLeftRadiusMobile = attributes[prefix + 'BorderBottomLeftRadiusMobile'] ? attributes[prefix + 'BorderBottomLeftRadiusMobile']+'px' : '' ;

	const borderTopLeftRadiusTablet = attributes[prefix + 'BorderTopLeftRadiusTablet'] ? attributes[prefix + 'BorderTopLeftRadiusTablet']+'px' : '' ;
	const borderTopRightRadiusTablet = attributes[prefix + 'BorderTopRightRadiusTablet'] ? attributes[prefix + 'BorderTopRightRadiusTablet']+'px' : '' ;
	const borderBottomRightRadiusTablet = attributes[prefix + 'BorderBottomRightRadiusTablet'] ? attributes[prefix + 'BorderBottomRightRadiusTablet']+'px' : '' ;
	const borderBottomLeftRadiusTablet = attributes[prefix + 'BorderBottomLeftRadiusTablet'] ? attributes[prefix + 'BorderBottomLeftRadiusTablet']+'px' : '' ;

	if( 'tablet' === deviceType ) {
		if( 'none' !== attributes[prefix + 'BorderStyle'] ){
			borderCSS['border-top-width'] =  borderTopWidthTablet ? borderTopWidthTablet : borderTopWidth;
			borderCSS['border-right-width'] =  borderRightWidthTablet ? borderRightWidthTablet : borderRightWidth;
			borderCSS['border-bottom-width'] =  borderBottomWidthTablet ? borderBottomWidthTablet : borderBottomWidth;
			borderCSS['border-left-width'] =  borderLeftWidthTablet ? borderLeftWidthTablet : borderLeftWidth;
		}
		borderCSS['border-top-left-radius'] = borderTopLeftRadiusTablet ? borderTopLeftRadiusTablet : borderTopLeftRadius;
		borderCSS['border-top-right-radius'] = borderTopRightRadiusTablet ? borderTopRightRadiusTablet : borderTopRightRadius;
		borderCSS['border-bottom-right-radius'] = borderBottomRightRadiusTablet ? borderBottomRightRadiusTablet : borderBottomRightRadius;
		borderCSS['border-bottom-left-radius'] = borderBottomLeftRadiusTablet ? borderBottomLeftRadiusTablet : borderBottomLeftRadius;
		
	} else if( 'mobile' === deviceType ) {
		if( 'none' !== attributes[prefix + 'BorderStyle'] ){
			borderCSS['border-top-width'] = borderTopWidthMobile ? borderTopWidthMobile : borderTopWidthTablet;
			borderCSS['border-right-width'] = borderRightWidthMobile ? borderRightWidthMobile : borderRightWidthTablet;
			borderCSS['border-bottom-width'] = borderBottomWidthMobile ? borderBottomWidthMobile : borderBottomWidthTablet;
			borderCSS['border-left-width'] = borderLeftWidthMobile ? borderLeftWidthMobile : borderLeftWidthTablet;
		}
		borderCSS['border-top-left-radius'] = borderTopLeftRadiusMobile ? borderTopLeftRadiusMobile : borderTopLeftRadiusTablet;
		borderCSS['border-top-right-radius'] = borderTopRightRadiusMobile ? borderTopRightRadiusMobile : borderTopRightRadiusTablet;
		borderCSS['border-bottom-right-radius'] = borderBottomRightRadiusMobile ? borderBottomRightRadiusMobile : borderBottomRightRadiusTablet;
		borderCSS['border-bottom-left-radius'] = borderBottomLeftRadiusMobile ? borderBottomLeftRadiusMobile : borderBottomLeftRadiusTablet;
		
	} else {
		if( 'none' !== attributes[prefix + 'BorderStyle'] ){
			borderCSS['border-top-width'] = borderTopWidth;
			borderCSS['border-right-width'] = borderRightWidth;
			borderCSS['border-bottom-width'] = borderBottomWidth;
			borderCSS['border-left-width'] = borderLeftWidth;
			borderCSS['border-style'] = borderStyle;
			borderCSS['border-color'] = borderColor;
		}
		borderCSS['border-top-left-radius'] = borderTopLeftRadius;
		borderCSS['border-top-right-radius'] = borderTopRightRadius;
		borderCSS['border-bottom-right-radius'] = borderBottomRightRadius;
		borderCSS['border-bottom-left-radius'] = borderBottomLeftRadius;
	}
	return borderCSS;
};

export default generateBorderCSS;
