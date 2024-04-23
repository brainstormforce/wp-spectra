const { enableMasonryGallery } = uagb_blocks_info;
import { addFilter } from '@wordpress/hooks';
import AnimationAttributes from '@Blocks/extensions/animations-extension/attributes.js';
import positionAttributes from '@Blocks/extensions/advanced-positioning/attributes.js';
import GridAttributes from '@Components/grid-item-settings/attributes.js';

function addAttributes( settings ) {
	const excludeBlock = uagb_blocks_info.uagb_exclude_blocks_from_extension;

	if ( ! excludeBlock.includes( settings.name ) ) {
		if ( settings.attributes ) {
			settings.attributes = Object.assign( settings.attributes, {
				UAGUserRole: {
					type: 'string',
				},
				UAGBrowser: {
					type: 'string',
				},
				UAGSystem: {
					type: 'string',
				},
				UAGHideDesktop: {
					type: 'boolean',
					default: false,
				},
				UAGHideMob: {
					type: 'boolean',
					default: false,
				},
				UAGHideTab: {
					type: 'boolean',
					default: false,
				},
				UAGLoggedIn: {
					type: 'boolean',
					default: false,
				},
				UAGLoggedOut: {
					type: 'boolean',
					default: false,
				},
				UAGDisplayConditions: {
					type: 'string',
				},
				UAGDay: {
					type: 'array',
					default: [],
				},
				zIndex: {
					type: 'number',
				},
				zIndexTablet: {
					type: 'number',
				},
				zIndexMobile: {
					type: 'number',
				},
				UAGResponsiveConditions: {
					type: 'boolean',
					default: false,
				},
				...AnimationAttributes,
				...positionAttributes,
			} );
		}
	}

	// Grid setting attributes specific to the uagb/container block.
	if ( 'uagb/container' === settings.name && settings?.attributes ) {
			settings.attributes = { ...settings.attributes, ...GridAttributes };
	}

	return settings;
}

addFilter( 'blocks.registerBlockType', 'uagb/advanced-control-block', addAttributes );

if ( 'enabled' === enableMasonryGallery || true === enableMasonryGallery ) {
	function addMasonryAttribute( settings ) {
		const blockType = [ 'core/gallery' ];
		if ( blockType.includes( settings.name ) ) {
			if ( settings.attributes ) {
				settings.attributes = Object.assign( settings.attributes, {
					masonry: {
						type: 'boolean',
						default: false,
					},
					masonryGutter: {
						type: 'number',
					},
					block_id: {
						type: 'string',
					},
				} );
			}
		}
		return settings;
	}

	addFilter( 'blocks.registerBlockType', 'uagb/masonry-gallery', addMasonryAttribute );
}

/**
 * Adds a metadata attribute to the block settings if it is a Spectra block.
 * If the block is a Spectra block, it adds a metadata attribute of type 'object' with a default value of { name: '' }.
 * It also adds an experimental label function to the block settings if it is not already set.
 * The label function returns the value of metadata.name when the block is viewed in the list view context.
 *
 * @param {Object} settings - The block settings object.
 * @return {Object} - The modified block settings object.
 */
export function blockMetadataAttribute( settings ) {
	const blockName = settings.name;
	const isSpectraBlock = blockName.includes( 'uagb/' );
	if ( isSpectraBlock ) {
		settings.attributes = {
			...settings.attributes,
			metadata: {
				type: 'object',
				default: {
					name: '',
				},
			},
		};

		// Don't override if already set for any spectra block.
		if ( ! settings?.__experimentalLabel ) {
			settings.__experimentalLabel = ( attributes, { context } ) => {
				const { metadata } = attributes;
				if ( context === 'list-view' && metadata.name ) {
					return metadata.name;
				}
			};
		}
	}

	return settings;
}

addFilter( 'blocks.registerBlockType', 'uagb/block-label', blockMetadataAttribute );