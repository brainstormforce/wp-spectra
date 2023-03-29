/**
 * BLOCK: How To - Step
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import deprecated from './deprecated';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let stepCommonData = {};
stepCommonData = applyFilters( 'uagb/how-to-step', addCommonDataToSpectraBlocks( stepCommonData ) );
registerBlockType( 'uagb/how-to-step', {
	...stepCommonData,
	title: __( 'Step', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add relevant content for this step.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.how_to_step,
	parent: [ 'uagb/how-to' ],
	attributes,
	edit: ( props ) =>
			props.attributes.isPreview ? (
				<PreviewImage image="how-to-step" isChildren={ true } />
			) : (
				<Edit { ...props } />
			),
	supports: {
		anchor: true,
	},
	save,
	deprecated,
} );
