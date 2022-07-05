
const generateBorderCSS = ( attributes, prefix, deviceType = 'desktop' ) => {
	const borderCSS = {}
	const borderStyle = attributes[prefix + 'BorderStyle'];
	const borderColor = attributes[prefix + 'BorderColor'];

	const borderTopWidth = ! isNaN( attributes[prefix + 'BorderTopWidth'] ) ? attributes[prefix + 'BorderTopWidth']+'px' : '' ;
	const borderRightWidth = ! isNaN( attributes[prefix + 'BorderRightWidth'] ) ? attributes[prefix + 'BorderRightWidth']+'px' : '' ;
	const borderBottomWidth = ! isNaN( attributes[prefix + 'BorderBottomWidth'] ) ? attributes[prefix + 'BorderBottomWidth']+'px' : '' ;
	const borderLeftWidth = ! isNaN( attributes[prefix + 'BorderLeftWidth'] ) ? attributes[prefix + 'BorderLeftWidth']+'px' : '' ;

	const borderTopWidthMobile = ! isNaN( attributes[prefix + 'BorderTopWidthMobile'] ) ? attributes[prefix + 'BorderTopWidthMobile']+'px' : '' ;
	const borderRightWidthMobile = ! isNaN( attributes[prefix + 'BorderRightWidthMobile'] ) ? attributes[prefix + 'BorderRightWidthMobile']+'px' : '' ;
	const borderBottomWidthMobile = ! isNaN( attributes[prefix + 'BorderBottomWidthMobile'] ) ? attributes[prefix + 'BorderBottomWidthMobile']+'px' : '' ;
	const borderLeftWidthMobile = ! isNaN( attributes[prefix + 'BorderLeftWidthMobile'] ) ? attributes[prefix + 'BorderLeftWidthMobile']+'px' : '' ;

	const borderTopWidthTablet = ! isNaN( attributes[prefix + 'BorderTopWidthTablet'] ) ? attributes[prefix + 'BorderTopWidthTablet']+'px' : '' ;
	const borderRightWidthTablet = ! isNaN( attributes[prefix + 'BorderRightWidthTablet'] ) ? attributes[prefix + 'BorderRightWidthTablet']+'px' : '' ;
	const borderBottomWidthTablet = ! isNaN( attributes[prefix + 'BorderBottomWidthTablet'] ) ? attributes[prefix + 'BorderBottomWidthTablet']+'px' : '' ;
	const borderLeftWidthTablet = ! isNaN( attributes[prefix + 'BorderLeftWidthTablet'] ) ? attributes[prefix + 'BorderLeftWidthTablet']+'px' : '' ;

	const borderTopLeftRadius = ! isNaN( attributes[prefix + 'BorderTopLeftRadius'] ) ? attributes[prefix + 'BorderTopLeftRadius']+attributes[prefix+ 'BorderRadiusUnit'] : '' ;
	const borderTopRightRadius = ! isNaN( attributes[prefix + 'BorderTopRightRadius'] ) ? attributes[prefix + 'BorderTopRightRadius']+attributes[prefix+ 'BorderRadiusUnit'] : '' ;
	const borderBottomRightRadius = ! isNaN( attributes[prefix + 'BorderBottomRightRadius'] ) ? attributes[prefix + 'BorderBottomRightRadius']+attributes[prefix+ 'BorderRadiusUnit'] : '' ;
	const borderBottomLeftRadius = ! isNaN( attributes[prefix + 'BorderBottomLeftRadius'] ) ? attributes[prefix + 'BorderBottomLeftRadius']+attributes[prefix+ 'BorderRadiusUnit'] : '' ;

	const borderTopLeftRadiusMobile = ! isNaN( attributes[prefix + 'BorderTopLeftRadiusMobile'] ) ? attributes[prefix + 'BorderTopLeftRadiusMobile']+'px' : '' ;
	const borderTopRightRadiusMobile = ! isNaN( attributes[prefix + 'BorderTopRightRadiusMobile'] ) ? attributes[prefix + 'BorderTopRightRadiusMobile']+'px' : '' ;
	const borderBottomRightRadiusMobile = ! isNaN( attributes[prefix + 'BorderBottomRightRadiusMobile'] ) ? attributes[prefix + 'BorderBottomRightRadiusMobile']+'px' : '' ;
	const borderBottomLeftRadiusMobile = ! isNaN( attributes[prefix + 'BorderBottomLeftRadiusMobile'] ) ? attributes[prefix + 'BorderBottomLeftRadiusMobile']+'px' : '' ;

	const borderTopLeftRadiusTablet = ! isNaN( attributes[prefix + 'BorderTopLeftRadiusTablet'] ) ? attributes[prefix + 'BorderTopLeftRadiusTablet']+'px' : '' ;
	const borderTopRightRadiusTablet = ! isNaN( attributes[prefix + 'BorderTopRightRadiusTablet'] ) ? attributes[prefix + 'BorderTopRightRadiusTablet']+'px' : '' ;
	const borderBottomRightRadiusTablet = ! isNaN( attributes[prefix + 'BorderBottomRightRadiusTablet'] ) ? attributes[prefix + 'BorderBottomRightRadiusTablet']+'px' : '' ;
	const borderBottomLeftRadiusTablet = ! isNaN( attributes[prefix + 'BorderBottomLeftRadiusTablet'] ) ? attributes[prefix + 'BorderBottomLeftRadiusTablet']+'px' : '' ;

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
			borderCSS['border-color'] = borderColor;
		}
		borderCSS['border-style'] = borderStyle;
		borderCSS['border-top-left-radius'] = borderTopLeftRadius;
		borderCSS['border-top-right-radius'] = borderTopRightRadius;
		borderCSS['border-bottom-right-radius'] = borderBottomRightRadius;
		borderCSS['border-bottom-left-radius'] = borderBottomLeftRadius;
	}
	return borderCSS;
};

export default generateBorderCSS;
