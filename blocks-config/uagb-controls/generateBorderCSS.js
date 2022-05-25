
const generateBorderCSS = ( attributes, prefix, deviceType = 'desktop' ) => {
	const borderCSS = {}

	const borderStyle = attributes[prefix + 'BorderStyle'];
	const borderColor = attributes[prefix + 'BorderColor'];
	if('tablet' === deviceType) {
		const borderTopWidthTablet = attributes[prefix + 'BorderTopWidthTablet'];
		const borderLeftWidthTablet = attributes[prefix + 'BorderLeftWidthTablet'];
		const borderRightWidthTablet = attributes[prefix + 'BorderRightWidthTablet'];
		const borderBottomWidthTablet = attributes[prefix + 'BorderBottomWidthTablet'];
		const borderTopLeftRadiusTablet = attributes[prefix + 'BorderTopLeftRadiusTablet'];
		const borderTopRightRadiusTablet = attributes[prefix + 'BorderTopRightRadiusTablet'];
		const borderBottomLeftRadiusTablet = attributes[prefix + 'BorderBottomLeftRadiusTablet'];
		const borderBottomRightRadiusTablet = attributes[prefix + 'BorderBottomRightRadiusTablet'];
		const borderRadiusUnitTablet = attributes[prefix + 'BorderRadiusUnitTablet'];
		borderCSS['border-radius'] = generateBorderRadius( borderTopLeftRadiusTablet, borderTopRightRadiusTablet, borderBottomRightRadiusTablet, borderBottomLeftRadiusTablet, borderRadiusUnitTablet );
		borderCSS['border-width'] = generateBorderWidth( borderTopWidthTablet, borderRightWidthTablet, borderBottomWidthTablet, borderLeftWidthTablet );
	} else if('mobile' === deviceType) {
		const borderTopWidthMobile = attributes[prefix + 'BorderTopWidthMobile'];
		const borderLeftWidthMobile = attributes[prefix + 'BorderLeftWidthMobile'];
		const borderRightWidthMobile = attributes[prefix + 'BorderRightWidthMobile'];
		const borderBottomWidthMobile = attributes[prefix + 'BorderBottomWidthMobile'];
		const borderTopLeftRadiusMobile = attributes[prefix + 'BorderTopLeftRadiusMobile'];
		const borderTopRightRadiusMobile = attributes[prefix + 'BorderTopRightRadiusMobile'];
		const borderBottomLeftRadiusMobile = attributes[prefix + 'BorderBottomLeftRadiusMobile'];
		const borderBottomRightRadiusMobile = attributes[prefix + 'BorderBottomRightRadiusMobile'];
		const borderRadiusUnitMobile = attributes[prefix + 'BorderRadiusUnitMobile'];
		borderCSS['border-radius'] = generateBorderRadius( borderTopLeftRadiusMobile, borderTopRightRadiusMobile, borderBottomRightRadiusMobile, borderBottomLeftRadiusMobile, borderRadiusUnitMobile );
		borderCSS['border-width'] = generateBorderWidth( borderTopWidthMobile, borderRightWidthMobile, borderBottomWidthMobile, borderLeftWidthMobile );
	} else {
		const borderTopWidth = attributes[prefix + 'BorderTopWidth'];
		const borderLeftWidth = attributes[prefix + 'BorderLeftWidth'];
		const borderRightWidth = attributes[prefix + 'BorderRightWidth'];
		const borderBottomWidth = attributes[prefix + 'BorderBottomWidth'];
		const borderTopLeftRadius = attributes[prefix + 'BorderTopLeftRadius'];
		const borderTopRightRadius = attributes[prefix + 'BorderTopRightRadius'];
		const borderBottomLeftRadius = attributes[prefix + 'BorderBottomLeftRadius'];
		const borderBottomRightRadius = attributes[prefix + 'BorderBottomRightRadius'];
		const borderRadiusUnit = attributes[prefix + 'BorderRadiusUnit'];
		borderCSS['border-radius'] = generateBorderRadius( borderTopLeftRadius, borderTopRightRadius, borderBottomRightRadius, borderBottomLeftRadius, borderRadiusUnit );
		borderCSS['border-width'] = generateBorderWidth( borderTopWidth, borderRightWidth, borderBottomWidth, borderLeftWidth );
		borderCSS['border-style'] = borderStyle;
		borderCSS['border-color'] = borderColor;
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
