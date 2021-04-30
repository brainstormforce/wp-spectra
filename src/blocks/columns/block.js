/**
 * BLOCK: Columns
 */

 import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
 import attributes from "./attributes"
 import edit from "./edit"
 import deprecated from "./deprecated"
 import variations from "./variations"
 import "./style.scss"
 import "./editor.scss"
 import save from "./save"
 
 const { __ } = wp.i18n
 
 const {
	 registerBlockType
 } = wp.blocks
 
 registerBlockType( "uagb/columns", {
	 title: uagb_blocks_info.blocks["uagb/columns"]["title"],
	 description: uagb_blocks_info.blocks["uagb/columns"]["description"],
	 icon: UAGB_Block_Icons.columns,
	 category: uagb_blocks_info.category,
	 keywords: [
		 __( "columns", "ultimate-addons-for-gutenberg" ),
		 __( "rows", "ultimate-addons-for-gutenberg" ),
		 __( "uag", "ultimate-addons-for-gutenberg" ),
	 ],
	 attributes,
	 variations,
	 edit,
	 getEditWrapperProps( attributes ) {
		 return { "data-align": attributes.align }
		 return { "data-valign": attributes.vAlign }
	 },
	 supports: {
		 // Add EditorsKit block navigator toolbar
		 editorsKitBlockNavigator: true,
		 anchor: true,
	 },
	 example: {},
	 save,
	 deprecated,
 } )