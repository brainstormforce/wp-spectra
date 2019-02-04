/**
 * BLOCK: advanced-heading
 */

// Import block dependencies and components.
import classnames from "classnames"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import attributes from "./attributes"
import edit from "./edit"

//  Import CSS.
import "./style.scss"

/* eslint-disable */
// Import __() from wp.i18n
const { __ } = wp.i18n
/* eslint-enable  */

// Import registerBlockType() from wp.blocks
const {
	registerBlockType,
	createBlock
} = wp.blocks

const {
	RichText
} = wp.editor


/**
 * Register: as Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( "uagb/advanced-heading", {

	title: uagb_blocks_info.blocks["uagb/advanced-heading"]["title"],
	description: uagb_blocks_info.blocks["uagb/advanced-heading"]["description"],
	icon: UAGB_Block_Icons.advanced_heading,
	keywords: [
		__( "advanced heading" ),
		__( "uag" ),
		__( "heading" ),
	],
	category: uagb_blocks_info.category,
	attributes,
	transforms: {
		from: [
			{
				type: "block",
				blocks: [ "core/paragraph" ],
				transform: ( { content } ) => {
					return createBlock( "uagb/advanced-heading", {
						headingDesc: content,
					} )
				},
			},
			{
				type: "block",
				blocks: [ "core/heading" ],
				transform: ( { content } ) => {
					return createBlock( "uagb/advanced-heading", {
						headingTitle: content,
						headingTag: "h3",
					} )
				},
			},
		],
		to: [
			{
				type: "block",
				blocks: [ "core/paragraph" ],
				transform: ( { content } ) => {
					return createBlock( "core/paragraph", {
						content,
					} )
				},
			},
			{
				type: "block",
				blocks: [ "core/heading" ],
				transform: ( { content } ) => {
					return createBlock( "core/heading", {
						content: content,
					} )
				},
			},
		],
	},
	edit,
	save: function( props ) {

		const {
			block_id,
			headingTitle,
			headingDesc,
			headingTag,
			seperatorStyle
		} = props.attributes

		var seprator_output =  ""
		if( seperatorStyle !== "none" ){
			seprator_output = <div className="uagb-separator-wrap" ><div className="uagb-separator"></div></div>
		}
		return (
			<div className={ props.className } id={ `uagb-adv-heading-${block_id}` }>
				<RichText.Content
					tagName={ headingTag }
					value={ headingTitle }
					className='uagb-heading-text'
				/>
				{seprator_output}
				<RichText.Content
					tagName="p"
					value={ headingDesc }
					className='uagb-desc-text'
				/>
			</div>
		)
	}
} )