/**
 * ADVANCED SETTINGS: Position - Attributes.
 */

const attributes = {
	// Position is string for future proofing. ( Relative, Sticky, Absolute, Fixed, Static )
	UAGPosition: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'block-position-type',
		},
	},
	// Sticky Position Attributes.
	UAGStickyLocation: {
		type: 'string',
		default: 'top',
		UAGCopyPaste: {
			styleType: 'block-position-sticky-location',
		},
	},
	UAGStickyRestricted: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'block-position-sticky-restricted',
		},
	},
	UAGStickyOffset: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'block-position-sticky-offset',
		},
	},
};

export default attributes;
