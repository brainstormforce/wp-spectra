
export const getBorderAttributes = (prefix) => {
	let attributes = {};
	const devices = [
		{responsivePrefix: '', copyPastePrefix: ''},
		{responsivePrefix: 'Tablet', copyPastePrefix: '-tablet'},
		{responsivePrefix: 'Mobile', copyPastePrefix: '-mobile'},
	];

	devices.forEach(item => {
		// border width
		attributes[prefix + 'BorderTopWidth' + item.responsivePrefix] = {
			type: 'number',
			default: '',
			UAGCopyPaste: {
				styleType:  prefix + '-border-top-width' + item.copyPastePrefix
			}
		}
		attributes[prefix + 'BorderLeftWidth' + item.device] = {
			type: 'number',
			default: '',
			UAGCopyPaste: {
				styleType:  prefix + '-border-left-width' + item.copyPastePrefix
			}
		}
		attributes[prefix + 'BorderRightWidth' + item.device] = {
			type: 'number',
			default: '',
			UAGCopyPaste: {
				styleType:  prefix + '-border-right-width' + item.copyPastePrefix
			}
		}
		attributes[prefix + 'BorderBottomWidth' + item.device] = {
			type: 'number',
			default: '',
			UAGCopyPaste: {
				styleType:  prefix + '-border-bottom-width' + item.copyPastePrefix
			}
		}
		// border radius
		attributes[prefix + 'BorderTopLeftRadius' + item.device] = {
			type: 'number',
			default: '',
			UAGCopyPaste: {
				styleType:  prefix + '-border-top-left-radius' + item.copyPastePrefix
			}
		}
		attributes[prefix + 'BorderTopRightRadius' + item.device] = {
			type: 'number',
			default: '',
			UAGCopyPaste: {
				styleType:  prefix + '-border-top-right-radius' + item.copyPastePrefix
			}
		}
		attributes[prefix + 'BorderBottomLeftRadius' + item.device] = {
			type: 'number',
			default: '',
			UAGCopyPaste: {
				styleType:  prefix + '-border-bottom-left-radius' + item.copyPastePrefix
			}
		}
		attributes[prefix + 'BorderBottomRightRadius' + item.device] = {
			type: 'number',
			default: '',
			UAGCopyPaste: {
				styleType:  prefix + '-border-bottom-right-radius' + item.copyPastePrefix
			}
		}

		// radius unit
		attributes[prefix + 'BorderRadiusUnit' + item.device] = {
			type: 'string',
			default: 'px',
			UAGCopyPaste: {
				styleType:  prefix + '-border-radius-unit' + item.copyPastePrefix
			}
		}
	});

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
