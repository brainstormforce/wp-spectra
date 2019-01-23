/**
 * BLOCK: Restaurant Menu
 */

// Import block dependencies and components.
import classnames from "classnames"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"

import Title from "./components/Title"
import Price from "./components/Price"
import Description from "./components/Description"
import PositionClasses from "./classes"
import RestMenuImage from "./components/RestMenuImage"
import edit from "./edit"
import attributes from "./attributes"
import "./style.scss"
import "./editor.scss"
const { __ } = wp.i18n

// Import registerBlockType() from wp.blocks
const {
	registerBlockType,
} = wp.blocks

const {
	RichText
} = wp.editor

// Extend component
const { Fragment } = wp.element

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
registerBlockType( "uagb/restaurant-menu", {

	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: uagb_blocks_info.blocks["uagb/restaurant-menu"]["title"], // Block title.
	description:uagb_blocks_info.blocks["uagb/restaurant-menu"]["description"], // Block description.
	icon: UAGB_Block_Icons.restaurant_menu, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	keywords: [
		__( "pricelist" ),
		__( "menu" ),
		__( "uag" ),
	],
	category: uagb_blocks_info.category,
	attributes,
	edit,
	save: function( props ) {
		const {
			block_id,
			className,
			rest_menu_item_arr,
			imagePosition,
		} = props.attributes

		const my_block_id = "uagb-rm-"+ block_id

		return (
			<Fragment>
				<div className={ classnames(
					className,
					"uagb-rest_menu__outer-wrap"
				) }
				id = { my_block_id }
				>
					{ rest_menu_item_arr.map( ( test, index ) =>

						<div className = { classnames(
							"uagb-rest_menu__wrap",
							...PositionClasses( props.attributes ),
						) } key ={ "wrap-"+index } >
							<div className = "uagb-rm__content" key ={ "tm_content-"+index }>
								{ (imagePosition == "top" || imagePosition == "left" ) && <RestMenuImage  attributes={props.attributes}  index_value = {index} /> }

								<div className ="uagb-rm__text-wrap">
									{
										<Fragment>
											<div className = "uagb-rm-details" key={"tm_wraps-"+index}>
												<div className = "uagb-rm__title-wrap" key={"rm_title__wraps-"+index}>
													<Title attributes={props.attributes} setAttributes = "not_set" props = { props } index_value = {index}/>
													<div className = "uagb-rest-menu-text-wrap" key={"text-wrap-"+index}>
														<Description attributes={props.attributes} setAttributes = "not_set" props = { props }  index_value = {index}/>
													</div>
												</div>
												<div className = "uagb-rm__price-wrap" key={"rm_price__wraps-"+index}>
													<Price attributes={props.attributes} setAttributes = "not_set" props = { props }  index_value = {index}/>
												</div>
											</div>
										</Fragment>
									}
								</div>
								{ ( imagePosition == "right" ) && <RestMenuImage  attributes={props.attributes}  index_value = {index} /> }
							</div>
							<div className="uagb-rm__separator-parent"><div className="uagb-rm__separator"></div></div>
						</div>
					)}
				</div>
			</Fragment>
		)
	}
} )
