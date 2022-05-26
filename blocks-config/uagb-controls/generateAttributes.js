
export const getBorderAttributes = ( prefix, defaults = {} ) => {
	const attributes = {};
	const devices = [
		{ devicePrefix: '', copyPastePrefix: '' },
		{ devicePrefix: 'Tablet', copyPastePrefix: '-tablet' },
		{ devicePrefix: 'Mobile', copyPastePrefix: '-mobile' },
	];

	devices.forEach( item => {

		const singleRadius = ! isNaN( defaults[ `borderRadius${ item.devicePrefix }` ] ) ? defaults[ `borderRadius${ item.devicePrefix }` ] : '';
		defaults[ `borderTopLeftRadius${ item.devicePrefix }` ] = ! isNaN( defaults[ `borderTopLeftRadius${ item.devicePrefix }` ] ) ? defaults[ `borderTopLeftRadius${ item.devicePrefix }` ] : singleRadius;
		defaults[ `borderTopRightRadius${ item.devicePrefix }` ] = ! isNaN( defaults[ `borderTopRightRadius${ item.devicePrefix }` ] ) ? defaults[ `borderTopRightRadius${ item.devicePrefix }` ] : singleRadius;
		defaults[ `borderBottomRightRadius${ item.devicePrefix }` ] = ! isNaN( defaults[ `borderBottomRightRadius${ item.devicePrefix }` ] ) ? defaults[ `borderBottomRightRadius${ item.devicePrefix }` ] : singleRadius;
		defaults[ `borderBottomLeftRadius${ item.devicePrefix }` ] = ! isNaN( defaults[ `borderBottomLeftRadius${ item.devicePrefix }` ] ) ? defaults[ `borderBottomLeftRadius${ item.devicePrefix }` ] : singleRadius;

		const singleWidth = ! isNaN( defaults[ `borderWidth${ item.devicePrefix }` ] ) ? defaults[ `borderWidth${ item.devicePrefix }` ] : '';
		defaults[ `borderTopWidth${ item.devicePrefix }` ] = ! isNaN( defaults[ `borderTopWidth${ item.devicePrefix }`] ) ? defaults[ `borderTopWidth${ item.devicePrefix }` ] : singleWidth;
		defaults[ `borderRightWidth${ item.devicePrefix }` ] = ! isNaN( defaults[ `borderRightWidth${ item.devicePrefix }`] ) ? defaults[ `borderRightWidth${ item.devicePrefix }` ] : singleWidth;
		defaults[ `borderBottomWidth${ item.devicePrefix }` ] = ! isNaN( defaults[ `borderBottomWidth${ item.devicePrefix }`] ) ? defaults[ `borderBottomWidth${ item.devicePrefix }` ] : singleWidth;
		defaults[ `borderLeftWidth${ item.devicePrefix }` ] = ! isNaN( defaults[ `borderLeftWidth${ item.devicePrefix }`] ) ? defaults[ `borderLeftWidth${ item.devicePrefix }` ] : singleWidth;

		// border width
		attributes[ prefix + 'BorderTopWidth' + item.devicePrefix ] = {
			type: 'number',
			default: defaults[ `borderTopWidth${ item.devicePrefix }`] ? defaults[ `borderTopWidth${ item.devicePrefix }` ] : '',
			UAGCopyPaste: {
				styleType:  prefix + '-border-top-width' + item.copyPastePrefix
			}
		}
		attributes[ prefix + 'BorderLeftWidth' + item.devicePrefix ] = {
			type: 'number',
			default: defaults[ `borderLeftWidth${ item.devicePrefix }`] ? defaults[ `borderLeftWidth${ item.devicePrefix }` ] : '',
			UAGCopyPaste: {
				styleType:  prefix + '-border-left-width' + item.copyPastePrefix
			}
		}
		attributes[ prefix + 'BorderRightWidth' + item.devicePrefix ] = {
			type: 'number',
			default: defaults[ `borderRightWidth${ item.devicePrefix }`] ? defaults[ `borderRightWidth${ item.devicePrefix }` ] : '',
			UAGCopyPaste: {
				styleType:  prefix + '-border-right-width' + item.copyPastePrefix
			}
		}
		attributes[ prefix + 'BorderBottomWidth' + item.devicePrefix ] = {
			type: 'number',
			default: defaults[ `borderBottomWidth${ item.devicePrefix }`] ? defaults[ `borderBottomWidth${ item.devicePrefix }` ] : '',
			UAGCopyPaste: {
				styleType:  prefix + '-border-bottom-width' + item.copyPastePrefix
			}
		}

		// border radius
		attributes[ prefix + 'BorderTopLeftRadius' + item.devicePrefix ] = {
			type: 'number',
			default: defaults[ `borderTopLeftRadius${ item.devicePrefix }`] ? defaults[ `borderTopLeftRadius${ item.devicePrefix }` ] : '',
			UAGCopyPaste: {
				styleType:  prefix + '-border-top-left-radius' + item.copyPastePrefix
			}
		}
		attributes[ prefix + 'BorderTopRightRadius' + item.devicePrefix ] = {
			type: 'number',
			default: defaults[ `borderTopRightRadius${ item.devicePrefix }`] ? defaults[ `borderTopRightRadius${ item.devicePrefix }` ] : '',
			UAGCopyPaste: {
				styleType:  prefix + '-border-top-right-radius' + item.copyPastePrefix
			}
		}
		attributes[ prefix + 'BorderBottomLeftRadius' + item.devicePrefix ] = {
			type: 'number',
			default: defaults[ `borderBottomLeftRadius${ item.devicePrefix }`] ? defaults[ `borderBottomLeftRadius${ item.devicePrefix }` ] : '',
			UAGCopyPaste: {
				styleType:  prefix + '-border-bottom-left-radius' + item.copyPastePrefix
			}
		}
		attributes[ prefix + 'BorderBottomRightRadius' + item.devicePrefix ] = {
			type: 'number',
			default: defaults[ `borderBottomRightRadius${ item.devicePrefix }`] ? defaults[ `borderBottomRightRadius${ item.devicePrefix }` ] : '',
			UAGCopyPaste: {
				styleType:  prefix + '-border-bottom-right-radius' + item.copyPastePrefix
			}
		}

		// radius unit
		attributes[ prefix + 'BorderRadiusUnit' + item.devicePrefix ] = {
			type: 'string',
			default: defaults[ `borderRadiusUnit${ item.devicePrefix }`] ? defaults[ `borderRadiusUnit${ item.devicePrefix }` ] : 'px',
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
		default: defaults.borderStyle ? defaults.borderStyle : 'none',
		UAGCopyPaste: {
			styleType:  prefix + '-border-style'
		}
	}

	attributes[ prefix + 'BorderColor' ] = {
		type: 'string',
		default: defaults.borderColor ? defaults.borderColor : '',
		UAGCopyPaste: {
			styleType:  prefix + '-border-color'
		}
	}

	attributes[ prefix + 'BorderHColor' ] = {
		type: 'string',
		default: defaults.borderHColor ? defaults.borderHColor : '',
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
