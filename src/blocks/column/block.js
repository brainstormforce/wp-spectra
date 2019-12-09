/**
 * BLOCK: Column
 */

import classnames from "classnames"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import styling from "./styling"
import edit from "./edit"
import save from "./save"
import deprecated from "./deprecated"
import attributes from "./attributes"
import "./style.scss"
import "./editor.scss"

const { __ } = wp.i18n

const { registerBlockType } = wp.blocks

const {
	InnerBlocks,
	ColorPalette,
	InspectorControls,
	MediaUpload,
	PanelColorSettings,
} = wp.blockEditor

const {
	PanelBody,
	RangeControl,
	SelectControl,
	Button,
	ButtonGroup,
	BaseControl,
	TabPanel,
	Dashicon
} = wp.components

const {
	Component,
	Fragment,
} = wp.element

registerBlockType( "uagb/column", {
	title: uagb_blocks_info.blocks["uagb/column"]["title"],
	description: uagb_blocks_info.blocks["uagb/column"]["description"],
	icon: UAGB_Block_Icons.column,
	category: uagb_blocks_info.category,
	parent: [ "uagb/columns" ],
	supports: {
		inserter: false,
		// Add EditorsKit block navigator toolbar
		editorsKitBlockNavigator: true,
	},
	attributes,
	edit,
	save,
	deprecated,
} )
