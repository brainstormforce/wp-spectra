let uagb_deactivated_blocks = uagb_deactivate_blocks.deactivated_blocks

// If we are recieving an object, let's convert it into an array.
if ( ! uagb_deactivated_blocks.length ) {
	uagb_deactivated_blocks =
		Object.keys( uagb_deactivated_blocks ).map( key => uagb_deactivated_blocks[ key ] )
}

// Just in case let's check if function exists.
if ( typeof wp.blocks.unregisterBlockType !== "undefined" ) {
	uagb_deactivated_blocks.forEach( block => wp.blocks.unregisterBlockType( block ) )
}
