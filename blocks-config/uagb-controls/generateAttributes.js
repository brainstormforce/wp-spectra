
export const getBorderAttributes = (prefix) => {
	let attributes = {};
	const devices = [
		{devicePrefix: '', copyPastePrefix: ''},
		{devicePrefix: 'Tablet', copyPastePrefix: '-tablet'},
		{devicePrefix: 'Mobile', copyPastePrefix: '-mobile'},
	];

	devices.forEach(item => {
		// border width
		attributes[prefix + 'BorderTopWidth' + item.devicePrefix] = {
			type: 'number',
			default: '',
			UAGCopyPaste: {
				styleType:  prefix + '-border-top-width' + item.copyPastePrefix
			}
		}
		attributes[prefix + 'BorderLeftWidth' + item.devicePrefix] = {
			type: 'number',
			default: '',
			UAGCopyPaste: {
				styleType:  prefix + '-border-left-width' + item.copyPastePrefix
			}
		}
		attributes[prefix + 'BorderRightWidth' + item.devicePrefix] = {
			type: 'number',
			default: '',
			UAGCopyPaste: {
				styleType:  prefix + '-border-right-width' + item.copyPastePrefix
			}
		}
		attributes[prefix + 'BorderBottomWidth' + item.devicePrefix] = {
			type: 'number',
			default: '',
			UAGCopyPaste: {
				styleType:  prefix + '-border-bottom-width' + item.copyPastePrefix
			}
		}
		// border radius
		attributes[prefix + 'BorderTopLeftRadius' + item.devicePrefix] = {
			type: 'number',
			default: '',
			UAGCopyPaste: {
				styleType:  prefix + '-border-top-left-radius' + item.copyPastePrefix
			}
		}
		attributes[prefix + 'BorderTopRightRadius' + item.devicePrefix] = {
			type: 'number',
			default: '',
			UAGCopyPaste: {
				styleType:  prefix + '-border-top-right-radius' + item.copyPastePrefix
			}
		}
		attributes[prefix + 'BorderBottomLeftRadius' + item.devicePrefix] = {
			type: 'number',
			default: '',
			UAGCopyPaste: {
				styleType:  prefix + '-border-bottom-left-radius' + item.copyPastePrefix
			}
		}
		attributes[prefix + 'BorderBottomRightRadius' + item.devicePrefix] = {
			type: 'number',
			default: '',
			UAGCopyPaste: {
				styleType:  prefix + '-border-bottom-right-radius' + item.copyPastePrefix
			}
		}

		// radius unit
		attributes[prefix + 'BorderRadiusUnit' + item.devicePrefix] = {
			type: 'string',
			default: 'px',
			UAGCopyPaste: {
				styleType:  prefix + '-border-radius-unit' + item.copyPastePrefix
			}
		}
	});

	attributes[prefix + 'BorderLink'] = {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType:  prefix + '-border-link'
		}
	}

	attributes[prefix + 'BorderRadiusLink'] = {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType:  prefix + '-border-radius-link'
		}
	}

	attributes[prefix + 'BorderStyle'] = {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType:  prefix + '-border-style'
		}
	}

	attributes[prefix + 'BorderColor'] = {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType:  prefix + '-border-color'
		}
	}

	attributes[prefix + 'BorderHColor'] = {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType:  prefix + '-border-color'
		}
	}

    return attributes;
}


export const migrateBorderAttributes = (prefix, borderWidth, borderRadius, color = {}, hoverColor = {}, borderStyle = {}) => {
	if(borderWidth.value){
		let widthObj = {}
		widthObj[prefix + 'BorderTopWidth'] = borderWidth.value;
		widthObj[prefix + 'HorderLeftWidth'] = borderWidth.value;
		widthObj[prefix + 'BorderRightWidth'] = borderWidth.value;
		widthObj[prefix + 'HorderBottomWidth'] = borderWidth.value;
		// reset
		widthObj[borderWidth.label] = '',
		// update attributes
		props.setAttributes( {...widthObj} );
	}

	if( borderRadius.value ){
		let radiusObj = {}
		radiusObj[prefix + 'BorderTopLeftRadius'] = borderRadius.value;
		radiusObj[prefix + 'BorderTopRightRadius'] = borderRadius.value;
		radiusObj[prefix + 'BorderBottomLeftRadius'] = borderRadius.value;
		radiusObj[prefix + 'BorderBottomRightRadius'] = borderRadius.value;
		// reset
		radiusObj[borderRadius.label] = '',
		// update attributes
		props.setAttributes( {...radiusObj} );
	}

	if(color.value){
		let colorObj = {}
		colorObj[prefix + 'BorderColor'] = color.value;
		// reset
		colorObj[color.label] = '',
		// update attributes
		props.setAttributes( {...colorObj} );
	}

	if(hoverColor.value){
		let colorHObj = {}
		colorHObj[prefix + 'BorderHColor'] = hoverColor.value;
		// reset
		colorHObj[hoverColor.label] = '',
		// update attributes
		props.setAttributes( {...colorHObj} );
	}

	if(borderStyle.value){
		let styleObj = {}
		styleObj[prefix + 'BorderStyle'] = borderStyle.value;
		// reset
		styleObj[borderStyle.label] = '',
		// update attributes
		props.setAttributes( {...styleObj} );
	}
}
