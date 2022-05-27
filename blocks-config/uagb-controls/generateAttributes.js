
export const getBorderAttributes = ( prefix, defaultArgs = {} ) => {
	const defaults = {
		// Width
		borderTopWidth: '',
		borderRightWidth: '',
		borderBottomWidth: '',
		borderLeftWidth: '',
		borderTopWidthTablet: '',
		borderRightWidthTablet: '',
		borderBottomWidthTablet: '',
		borderLeftWidthTablet: '',
		borderTopWidthMobile: '',
		borderRightWidthMobile: '',
		borderBottomWidthMobile: '',
		borderLeftWidthMobile: '',
		// Radius
		borderTopLeftRadius: '',
		borderTopRightRadius: '',
		borderBottomRightRadius: '',
		borderBottomLeftRadius: '',
		borderTopLeftRadiusTablet: '',
		borderTopRightRadiusTablet: '',
		borderBottomRightRadiusTablet: '',
		borderBottomLeftRadiusTablet: '',
		borderTopLeftRadiusMobile: '',
		borderTopRightRadiusMobile: '',
		borderBottomRightRadiusMobile: '',
		borderBottomLeftRadiusMobile: '',
		// unit
		borderRadiusUnit: 'px',
		borderRadiusUnitTablet: 'px',
		borderRadiusUnitMobile: 'px',
		// common
		borderStyle: 'none',
		borderColor:  '',
		borderHColor: '',
		...defaultArgs
	};
	const attributes = {};
	const devices = [
		{ devicePrefix: '', copyPastePrefix: '' },
		{ devicePrefix: 'Tablet', copyPastePrefix: '-tablet' },
		{ devicePrefix: 'Mobile', copyPastePrefix: '-mobile' },
	];

	devices.forEach( item => {
		// border width
		attributes[ prefix + 'BorderTopWidth' + item.devicePrefix ] = {
			type: 'number',
			default: defaults[ `borderTopWidth${ item.devicePrefix }` ],
			UAGCopyPaste: {
				styleType:  prefix + '-border-top-width' + item.copyPastePrefix
			}
		}
		attributes[ prefix + 'BorderLeftWidth' + item.devicePrefix ] = {
			type: 'number',
			default: defaults[ `borderLeftWidth${ item.devicePrefix }` ],
			UAGCopyPaste: {
				styleType:  prefix + '-border-left-width' + item.copyPastePrefix
			}
		}
		attributes[ prefix + 'BorderRightWidth' + item.devicePrefix ] = {
			type: 'number',
			default: defaults[ `borderRightWidth${ item.devicePrefix }` ],
			UAGCopyPaste: {
				styleType:  prefix + '-border-right-width' + item.copyPastePrefix
			}
		}
		attributes[ prefix + 'BorderBottomWidth' + item.devicePrefix ] = {
			type: 'number',
			default: defaults[ `borderBottomWidth${ item.devicePrefix }` ],
			UAGCopyPaste: {
				styleType:  prefix + '-border-bottom-width' + item.copyPastePrefix
			}
		}

		// border radius
		attributes[ prefix + 'BorderTopLeftRadius' + item.devicePrefix ] = {
			type: 'number',
			default: defaults[ `borderTopLeftRadius${ item.devicePrefix }` ],
			UAGCopyPaste: {
				styleType:  prefix + '-border-top-left-radius' + item.copyPastePrefix
			}
		}
		attributes[ prefix + 'BorderTopRightRadius' + item.devicePrefix ] = {
			type: 'number',
			default: defaults[ `borderTopRightRadius${ item.devicePrefix }` ],
			UAGCopyPaste: {
				styleType:  prefix + '-border-top-right-radius' + item.copyPastePrefix
			}
		}
		attributes[ prefix + 'BorderBottomLeftRadius' + item.devicePrefix ] = {
			type: 'number',
			default: defaults[ `borderBottomLeftRadius${ item.devicePrefix }` ],
			UAGCopyPaste: {
				styleType:  prefix + '-border-bottom-left-radius' + item.copyPastePrefix
			}
		}
		attributes[ prefix + 'BorderBottomRightRadius' + item.devicePrefix ] = {
			type: 'number',
			default: defaults[ `borderBottomRightRadius${ item.devicePrefix }` ],
			UAGCopyPaste: {
				styleType:  prefix + '-border-bottom-right-radius' + item.copyPastePrefix
			}
		}

		// radius unit
		attributes[ prefix + 'BorderRadiusUnit' + item.devicePrefix ] = {
			type: 'string',
			default: defaults[ `borderRadiusUnit${ item.devicePrefix }` ],
			UAGCopyPaste: {
				styleType:  prefix + '-border-radius-unit' + item.copyPastePrefix
			}
		}
	} );

	attributes[ prefix + 'BorderLink' ] = {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType:  prefix + '-border-link'
		}
	}

	attributes[ prefix + 'BorderRadiusLink' ] = {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType:  prefix + '-border-radius-link'
		}
	}

	attributes[ prefix + 'BorderStyle' ] = {
		type: 'string',
		default: defaults.borderStyle,
		UAGCopyPaste: {
			styleType:  prefix + '-border-style'
		}
	}

	attributes[ prefix + 'BorderColor' ] = {
		type: 'string',
		default:  defaults.borderColor,
		UAGCopyPaste: {
			styleType:  prefix + '-border-color'
		}
	}

	attributes[ prefix + 'BorderHColor' ] = {
		type: 'string',
		default: defaults.borderHColor,
		UAGCopyPaste: {
			styleType:  prefix + '-border-hover-color'
		}
	}

    return attributes;
}


export const migrateBorderAttributes = ( prefix, borderWidth, borderRadius, color = {}, hoverColor = {}, borderStyle = {} ) => {
	const attributes = {};
	if( borderWidth.value ){
		attributes[ prefix + 'BorderTopWidth' ] = borderWidth.value;
		attributes[ prefix + 'BorderLeftWidth' ] = borderWidth.value;
		attributes[ prefix + 'BorderRightWidth' ] = borderWidth.value;
		attributes[ prefix + 'BorderBottomWidth' ] = borderWidth.value;
		// reset
		attributes[borderWidth.label] = '';
	}

	if( borderRadius.value ){
		attributes[ prefix + 'BorderTopLeftRadius' ] = borderRadius.value;
		attributes[ prefix + 'BorderTopRightRadius' ] = borderRadius.value;
		attributes[ prefix + 'BorderBottomLeftRadius' ] = borderRadius.value;
		attributes[ prefix + 'BorderBottomRightRadius' ] = borderRadius.value;
		// reset
		attributes[ borderRadius.label ] = '';
	}

	if( color.value ){
		attributes[ prefix + 'BorderColor' ] = color.value;
		// reset
		attributes[ color.label ] = '';
	}

	if( hoverColor.value ){
		attributes[ prefix + 'BorderHColor' ] = hoverColor.value;
		// reset
		attributes[ hoverColor.label ] = '';
	}

	if( borderStyle.value ){
		attributes[ prefix + 'BorderStyle' ] = borderStyle.value;
		// reset
		attributes[ borderStyle.label ] = '';
	}
	return attributes;
}
