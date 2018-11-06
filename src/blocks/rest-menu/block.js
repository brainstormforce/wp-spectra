/**
 * BLOCK: Testimonial
 */

// Import block dependencies and components.
import classnames from "classnames"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"

// Import icon.
import Title from "./components/Title"
import Price from "./components/Price"
import Description from "./components/Description"
import PositionClasses from "./classes"
import RestMenuImage from "./components/RestMenuImage"
import edit from "./edit";
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
registerBlockType( "uagb/rest-menu", {

	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( "UAGB - Restaurant Menu" ), // Block title.
	description: __( "Add Restaurant Menu." ), // Block description.
	icon: UAGB_Block_Icons.testimonial, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	keywords: [
		__( "restaurant" ),
		__( "menu" ),		
		__( "uagb" ),
	],
	category: "uagb",
	attributes,
	edit,
	save: function( props ) {
		const {
			block_id,
			className,
			columns,
			autoplaySpeed,
			autoplay,
			infiniteLoop,
			pauseOnHover,
			transitionSpeed,
			tcolumns,
			arrowSize,
			mcolumns,
			test_block,
			imagePosition,
			arrowColor
		} = props.attributes;

		const my_block_id = 'uagb-testimonial-'+ block_id

		const sldier_data = []
		sldier_data.push(
			{
				'block_id' : block_id,
				'columns' : columns,
				'autoplaySpeed' : autoplaySpeed,
				'autoplay' : autoplay,
				'infiniteLoop' : infiniteLoop,
				'pauseOnHover' : pauseOnHover,
				'transitionSpeed' : transitionSpeed,
				'tcolumns' : tcolumns,
				'arrowSize' : arrowSize,
				'mcolumns' : mcolumns,
				'arrowColor':arrowColor,
			}
		)
	
		return (
			<Fragment>
				<div className={ classnames(
					className,
					"uagb-rest_menu__outer-wrap uagb-slick-carousal uagb-rm__arrow-outside"
				) }
					id = { my_block_id }
					data-slider = {JSON.stringify(sldier_data)}
				>
		
				<div
					className={ classnames(
						"is-carousel",
						`uagb-rm__columns-${ columns }`,
						"uagb-rm__items"
					) }					
					>
					{ test_block.map( ( test, index ) => 

						<div className = { classnames(
						"uagb-rest_menu__wrap",
						...PositionClasses( props.attributes ),
						) } key ={ "wrap-"+index } >
							<div className = "uagb-rm__content" key ={ "tm_content-"+index }>
								<div className = "uagb-rm__overlay"></div>
								{ (imagePosition == 'top' || imagePosition == 'left' ) && <RestMenuImage  attributes={props.attributes} index_value = {index} /> }	

								<div className ="uagb-rm__text-wrap">
									{  // Get description.
										<Fragment>
											<div className = "uagb-testinomial-text-wrap" key={"text-wrap-"+index}>
												<Description attributes={props.attributes} setAttributes = "not_set" props = { props }  index_value = {index}/>
											</div>
										</Fragment>
									}
									<div className ="uagb-rm__meta">
										<div className ="uagb-rm__meta-inner">
											
											{ (imagePosition == 'bottom' ) && <RestMenuImage  attributes={props.attributes}  index_value = {index} /> }	
																
											{ //title_text
												<Fragment>
													<div className = "uagb-testimonial-details" key={"tm_wraps-"+index}>
														<Title attributes={props.attributes} setAttributes = "not_set"  props = { props } index_value = {index}/>
														<Price attributes={props.attributes} setAttributes = "not_set"  props = { props }  index_value = {index}/>
													</div>
												</Fragment>
											}								
										</div>
									</div>
								</div>
								{ ( imagePosition == 'right' ) && <RestMenuImage  attributes={props.attributes} index_value = {index} /> }	
							</div>						
						</div>												
					)}	
				</div>			
			</div>
		</Fragment>
		)
	}
} )
