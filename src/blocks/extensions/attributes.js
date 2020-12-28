function addAttributes( settings ) {

	if ( settings.attributes ) {
		settings.attributes = Object.assign( settings.attributes, {
			UAGBrowser: {
				type:"string"
			},
			UAGSystem: {
				type: "string"
			},
			DisplayConditions: {
				type: "string"
			},
			UAGHideDesktop:{
				type: "boolean",
		        default: false
			},
        	UAGHideMob:{
				type: "boolean",
		        default: false
			},
        	UAGHideTab:{
				type: "boolean",
		        default: false
			},
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