function addAttributes( settings ) {

	if ( typeof settings.attributes !== 'undefined' ) {
		settings.attributes = Object.assign( settings.attributes, {
			loggedIn: {
				type: "boolean",
		        default: false
			},
			loggedOut: {
				type: "boolean",
		        default: false
			},
		} );		
	}
	return settings;
}

wp.hooks.addFilter(
	'blocks.registerBlockType',
	'uagb/cover-advanced-control',
    addAttributes
);