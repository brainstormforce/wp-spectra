import generateCSSUnit from '@Controls/generateCSSUnit';
import { generateCSSUnitType } from './generateCSSUnit';
const generateBorderCSS = ( attributes, prefix, deviceType = 'desktop' ) => {
	const borderCSS = {}
	const borderStyle = attributes[prefix + 'BorderStyle'];
	const borderColor = attributes[prefix + 'BorderColor'];

	const borderTopWidth = generateCSSUnit( attributes[prefix + 'BorderTopWidth'], 'px' );
	const borderRightWidth = generateCSSUnit( attributes[prefix + 'BorderRightWidth'], 'px' );
	const borderBottomWidth = generateCSSUnit( attributes[prefix + 'BorderBottomWidth'], 'px' );
	const borderLeftWidth = generateCSSUnit( attributes[prefix + 'BorderLeftWidth'], 'px' );

	const borderTopWidthMobile = generateCSSUnit( attributes[prefix + 'BorderTopWidthMobile'], 'px' );
	const borderRightWidthMobile = generateCSSUnit( attributes[prefix + 'BorderRightWidthMobile'], 'px' );
	const borderBottomWidthMobile = generateCSSUnit( attributes[prefix + 'BorderBottomWidthMobile'], 'px' );
	const borderLeftWidthMobile = generateCSSUnit( attributes[prefix + 'BorderLeftWidthMobile'], 'px' );

	const borderTopWidthTablet = generateCSSUnit( attributes[prefix + 'BorderTopWidthTablet'], 'px' );
	const borderRightWidthTablet = generateCSSUnit( attributes[prefix + 'BorderRightWidthTablet'], 'px' );
	const borderBottomWidthTablet = generateCSSUnit( attributes[prefix + 'BorderBottomWidthTablet'], 'px' );
	const borderLeftWidthTablet = generateCSSUnit( attributes[prefix + 'BorderLeftWidthTablet'], 'px' );
    
	const borderRadiusUnit = generateCSSUnitType( attributes[prefix + 'BorderRadiusUnit'], 'px' );
	const borderRadiusUnitTablet = generateCSSUnitType( attributes[prefix + 'BorderRadiusUnitTablet'], 'px' );
	const borderRadiusUnitMobile = generateCSSUnitType( attributes[prefix + 'BorderRadiusUnitMobile'], 'px' );

	const borderTopLeftRadius = generateCSSUnit( attributes[prefix + 'BorderTopLeftRadius'], borderRadiusUnit );
	const borderTopRightRadius = generateCSSUnit( attributes[prefix + 'BorderTopRightRadius'], borderRadiusUnit );
	const borderBottomRightRadius = generateCSSUnit( attributes[prefix + 'BorderBottomRightRadius'], borderRadiusUnit );
	const borderBottomLeftRadius = generateCSSUnit( attributes[prefix + 'BorderBottomLeftRadius'], borderRadiusUnit );

	const borderTopLeftRadiusMobile = generateCSSUnit( attributes[prefix + 'BorderTopLeftRadiusMobile'], borderRadiusUnitMobile );
	const borderTopRightRadiusMobile = generateCSSUnit( attributes[prefix + 'BorderTopRightRadiusMobile'], borderRadiusUnitMobile );
	const borderBottomRightRadiusMobile = generateCSSUnit( attributes[prefix + 'BorderBottomRightRadiusMobile'], borderRadiusUnitMobile );
	const borderBottomLeftRadiusMobile = generateCSSUnit( attributes[prefix + 'BorderBottomLeftRadiusMobile'], borderRadiusUnitMobile );

	const borderTopLeftRadiusTablet = generateCSSUnit( attributes[prefix + 'BorderTopLeftRadiusTablet'], borderRadiusUnitTablet );
	const borderTopRightRadiusTablet = generateCSSUnit( attributes[prefix + 'BorderTopRightRadiusTablet'], borderRadiusUnitTablet );
	const borderBottomRightRadiusTablet = generateCSSUnit( attributes[prefix + 'BorderBottomRightRadiusTablet'], borderRadiusUnitTablet );
	const borderBottomLeftRadiusTablet = generateCSSUnit( attributes[prefix + 'BorderBottomLeftRadiusTablet'], borderRadiusUnitTablet );
	
	if( 'default' !== attributes[ prefix + 'BorderStyle' ] ){
		if( 'tablet' === deviceType ) {
			if( 'none' !== attributes[prefix + 'BorderStyle'] && '' !== attributes[prefix + 'BorderStyle'] ){
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
			if( 'none' !== attributes[prefix + 'BorderStyle'] && '' !== attributes[prefix + 'BorderStyle'] ){
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
			if( 'none' !== attributes[prefix + 'BorderStyle'] && '' !== attributes[prefix + 'BorderStyle'] ){
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
	}
	return borderCSS;
};

export default generateBorderCSS;
