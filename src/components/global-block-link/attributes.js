import { addFilter } from '@wordpress/hooks';

/**
 * Add custom attribute.
 *
 * @param {Object} block Block data.
 * @return {Object} block Modified block data.
 */
function addAttributes( block ) {
	if ( block?.attributes && block?.name?.includes( 'uagb/' ) ) {
		block.attributes = Object.assign( block.attributes, {
			globalBlockStyleName: {
				type: 'string',
				default: '',
			},
			globalBlockStyleId: {
				type: 'string',
				default: '',
			}
		} );
	}

	return block;
}

addFilter(
	'blocks.registerBlockType',
	'spectra-pro/global-block-styles',
	addAttributes
);