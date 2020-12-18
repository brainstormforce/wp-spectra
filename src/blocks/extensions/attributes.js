function addAttributes( settings ) {

	if ( settings.attributes ) {
		settings.attributes = Object.assign( settings.attributes, {
			UAGloggedIn: {
				type: "boolean",
		        default: false
			},
			UAGloggedOut: {
				type: "boolean",
		        default: false
			},
		} );		
	}
	return settings;
}

wp.hooks.addFilter(
	'blocks.registerBlockType',
	'uagb/advanced-control-block',
    addAttributes
);