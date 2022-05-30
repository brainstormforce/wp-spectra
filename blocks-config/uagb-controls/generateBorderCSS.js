
const generateBorderCSS = ( attributes, prefix, deviceType = 'desktop' ) => {
	const borderCSS = {}
	const borderStyle = attributes[prefix + 'BorderStyle'];
	const borderColor = attributes[prefix + 'BorderColor'];
	if( 'tablet' === deviceType ) {
		if( 'none' !== attributes[prefix + 'BorderStyle'] ){
			borderCSS['border-width'] = generateBorderWidth(
				attributes[prefix + 'BorderTopWidthTablet'],
				attributes[prefix + 'BorderRightWidthTablet'],
				attributes[prefix + 'BorderBottomWidthTablet'],
				attributes[prefix + 'BorderLeftWidthTablet'],
			);
		}
		borderCSS['border-radius'] = generateBorderRadius(
			attributes[prefix + 'BorderTopLeftRadiusTablet'],
			attributes[prefix + 'BorderTopRightRadiusTablet'],
			attributes[prefix + 'BorderBottomRightRadiusTablet'],
			attributes[prefix + 'BorderBottomLeftRadiusTablet'],
			attributes[prefix + 'BorderRadiusUnitTablet']
		);
	} else if( 'mobile' === deviceType ) {
		if( 'none' !== attributes[prefix + 'BorderStyle'] ){
			borderCSS['border-width'] = generateBorderWidth(
				attributes[prefix + 'BorderTopWidthMobile'],
				attributes[prefix + 'BorderRightWidthMobile'],
				attributes[prefix + 'BorderBottomWidthMobile'],
				attributes[prefix + 'BorderLeftWidthMobile']
			);

		}
		borderCSS['border-radius'] = generateBorderRadius(
			attributes[prefix + 'BorderTopLeftRadiusMobile'],
			attributes[prefix + 'BorderTopRightRadiusMobile'],
			attributes[prefix + 'BorderBottomRightRadiusMobile'],
			attributes[prefix + 'BorderBottomLeftRadiusMobile'],
			attributes[prefix + 'BorderRadiusUnitMobile']
		);
	} else {
		if( 'none' !== attributes[prefix + 'BorderStyle'] ){
			borderCSS['border-width'] = generateBorderWidth(
				attributes[prefix + 'BorderTopWidth'],
				attributes[prefix + 'BorderRightWidth'],
				attributes[prefix + 'BorderBottomWidth'],
				attributes[prefix + 'BorderLeftWidth']
			);
			borderCSS['border-style'] = borderStyle;
			borderCSS['border-color'] = borderColor;
		}
		borderCSS['border-radius'] = generateBorderRadius(
			attributes[prefix + 'BorderTopLeftRadius'],
			attributes[prefix + 'BorderTopRightRadius'],
			attributes[prefix + 'BorderBottomRightRadius'],
			attributes[prefix + 'BorderBottomLeftRadius'],
			attributes[prefix + 'BorderRadiusUnit']
		);
	}
	return borderCSS;
};

const generateBorderRadius = ( topLeft, topRight, bottomRight, bottomLeft, unit ) => {
	return `${
		topLeft ? topLeft : 0
	}${ unit } ${
		topRight ? topRight : 0
	}${ unit } ${
		bottomRight ? bottomRight : 0
	}${ unit } ${
		bottomLeft ? bottomLeft : 0
	}${ unit }`;
}

const generateBorderWidth = ( top, right, bottom, left ) => {
	return `${
		top ? top : 0
	}px ${
		right ? right : 0
	}px ${
		bottom ? bottom : 0
	}px ${
		left ? left : 0
	}px`;
};
export default generateBorderCSS;
