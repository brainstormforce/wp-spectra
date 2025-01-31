/**
 * BLOCK: Sure Forms
 */
import UAGB_Block_Icons from '@Controls/block-icons';
import Edit from './edit';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
import attributes from './attributes';
// Get the SureForms status
const isSureFormsActive = uagb_blocks_info.status_of_sureforms === 'active';

let sureFormsCommonData = {};
sureFormsCommonData = applyFilters( 'uagb/sure-forms', addCommonDataToSpectraBlocks( sureFormsCommonData ) );

// Always register the block
registerBlockType( 'uagb/sure-forms', {
	...sureFormsCommonData,
	title: __( 'SureForms - Create Forms', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Collect and Manage data effortlessly with customizable forms.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.sure_forms,
	keywords: [
		__( 'form', 'ultimate-addons-for-gutenberg' ),
		__( 'sureforms', 'ultimate-addons-for-gutenberg' ),
		__( 'form', 'ultimate-addons-for-gutenberg' ),
	],
	category: uagb_blocks_info.premium_category,
	supports: {
		inserter: !isSureFormsActive, // Hide from inserter if SureForms is active
	},
	attributes,
	edit: ( props ) => {
		// If SureForms is active, show a placeholder
		if ( isSureFormsActive ) {
				wp.blocks.unregisterBlockType( 'uagb/sure-forms' );
				// Monitor the block editor for placeholder blocks and replace them
				const { select, dispatch } = wp.data;

				// Replace placeholder blocks with a paragraph block
				const replacePlaceholderBlocks = () => {
					const blocks = select( 'core/block-editor' ).getBlocks();

					blocks.forEach( ( block ) => {
						if ( block.name === 'uagb/sure-forms' ) {
							// Replace with a core paragraph block
							dispatch( 'core/block-editor' ).replaceBlock(
								block.clientId,
								wp.blocks.createBlock( 'srfm/form', {} )
							);
						}
					} );
					const widgets = select( 'core/edit-widgets' ).getWidgets();
					// Loop through the widgets object
					for ( const widget of Object.entries( widgets ) ) {
						// Example: Check if the block type is 'uagb/sure-forms'
						if ( widget[1].rendered_form.includes( 'uagb/sure-forms' ) ) {
							dispatch( 'core/block-editor' ).replaceBlock(
								props.clientId,
								wp.blocks.createBlock( 'srfm/form', {
								} )
							);
						}
					}
				};

			// 	// Run the replacement logic on initialization
				replacePlaceholderBlocks();
			return;
		}

		// Normal edit behavior
		return props.attributes.isPreview ? (
			<PreviewImage image="sure-form" />
		) : (
			<Edit {...props} />
		);
	},
	save: () => null, // Blocks without frontend rendering
} );
