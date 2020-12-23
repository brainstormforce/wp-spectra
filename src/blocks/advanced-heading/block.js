/**
 * BLOCK: Advanced Heading
 */

import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import attributes from "./attributes"
import edit from "./edit"
import save from "./save"
import deprecated from "./deprecated"
import transform from "./transform"
import "./style.scss"

const { __ } = wp.i18n

const {
	registerBlockType ,createBlock
} = wp.blocks

registerBlockType( "uagb/advanced-heading", {

	title: uagb_blocks_info.blocks["uagb/advanced-heading"]["title"],
	description: uagb_blocks_info.blocks["uagb/advanced-heading"]["description"],
	icon: UAGB_Block_Icons.advanced_heading,
	keywords: [
		__( "advanced heading" ),
		__( "uag" ),
		__( "heading" ),
	],
	supports: {
		anchor: true,
	},
	example: {
		attributes: {
			headingTitle: __( 'Write a Heading' ),
			headingDesc: __( 'Write a Description' ),
		},
	},
	category: uagb_blocks_info.category,
	attributes,
	transforms: {
		from: [
			{
				type: 'block',
				blocks: ['core/heading'],
				transform: ({values}) => {
					return createBlock('uagb/advanced-heading', {
						values: values,
					})
				}
			}
		],
		to: [
			{
				type: 'block',
				blocks: ['core/heading'],
				transform: ({values}) => {
					return createBlock('core/heading', {
						values: values,
					})
				}
			}
		]
	},
	edit,
	save,
	deprecated,
} )