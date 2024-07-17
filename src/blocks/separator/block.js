/**
 * BLOCK: UAGB - Separator
 */
import UAGB_Block_Icons from '@Controls/block-icons';
import './style.scss';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
import transforms from './transforms';
const separatorCommonData = applyFilters( 'uagb/separator', addCommonDataToSpectraBlocks( {} ) );

registerBlockType( 'uagb/separator', {
	...separatorCommonData,
	apiVersion: 2,
	title: __( 'Separator', 'ultimate-addons-for-gutenberg' ),
	description: __(
		'Add a modern separator to divide your page content with icon/text.',
		'ultimate-addons-for-gutenberg'
	),
	icon: UAGB_Block_Icons.separator,
	category: uagb_blocks_info.category,
	keywords: [ __( 'divider', 'ultimate-addons-for-gutenberg' ), __( 'separator', 'ultimate-addons-for-gutenberg' ) ],
	attributes,
	edit: ( props ) => ( props.attributes.isPreview ? <PreviewImage image="separator" /> : <Edit { ...props } /> ),
	save,
	transforms,
} );
