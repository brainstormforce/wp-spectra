/**
 * BLOCK: Testimonial
 */

// Import block dependencies and components.
import classnames from "classnames"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"

// Import icon.
import AuthorName from "./components/AuthorName"
import Company from "./components/Company"
import Description from "./components/Description"
import PositionClasses from "./classes"
import TestimonialImage from "./components/TestimonialImage"
import edit from "./edit"
import attributes from "./attributes"
import "./style.scss"
import "./editor.scss"
import Slider from "react-slick"

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
registerBlockType( "uagb/testimonial", {

	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: uagb_blocks_info.blocks["uagb/testimonial"]["title"], // Block title.
	description: uagb_blocks_info.blocks["uagb/testimonial"]["description"], // Block description.
	icon: UAGB_Block_Icons.testimonial, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	keywords: [
		__( "testimonial" ),
		__( "uagb" ),
	],
	category: uagb_blocks_info.category,

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
			arrowColor,
			arrowDots,
			arrowBorderSize,
			arrowBorderRadius
		} = props.attributes

		const my_block_id = "uagb-testimonial-"+ block_id

		var settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow : columns,
			slidesToScroll : 1,
			autoplaySpeed : autoplaySpeed,
			autoplay : autoplay,
			infinite : infiniteLoop,
			pauseOnHover : pauseOnHover,
			speed : transitionSpeed,
			arrows : true,
			dots : true,
			rtl : false,
			prevArrow: "<button type=\"button\" data-role=\"none\" class=\"slick-prev\" aria-label=\"Previous\" tabindex=\"0\" role=\"button\" style=\"border-color: "+arrowColor+"\"><span class=\"fas fa-angle-left\" style= \"font-size:"+arrowSize+"px;color: "+arrowColor+"\"></span></button>",
			nextArrow: "<button type=\"button\" data-role=\"none\" class=\"slick-next\" aria-label=\"Next\" tabindex=\"0\" role=\"button\" style=\"border-color: "+arrowColor+"\"><span class=\"fas fa-angle-right\" style= \"font-size:"+arrowSize+"px;color: "+arrowColor+"\" ></span></button>",
			responsive : [
						{
							breakpoint : 1024,
							settings : {
								slidesToShow : tcolumns,
								slidesToScroll : 1,
							}
						},
						{
							breakpoint : 767,
							settings : {
								slidesToShow : mcolumns,
								slidesToScroll : 1,
							}
						}
					]
		};

    	var block_content = <Slider className={ classnames(
							"is-carousel",
							`uagb-tm__columns-${ columns }`,
							"uagb-tm__items"
						) }
    	{...settings}
    	>
	        { test_block.map( ( test, index ) =>

							<div className = { classnames(
								"uagb-testimonial__wrap",
								...PositionClasses( props.attributes ),
							) } key ={ "wrap-"+index } >
								<div className = "uagb-tm__content" key ={ "tm_content-"+index }>
									<div className = "uagb-tm__overlay"></div>
									{ (imagePosition == "top" || imagePosition == "left" ) && <TestimonialImage  attributes={props.attributes} index_value = {index} /> }

									<div className ="uagb-tm__text-wrap">
										{  // Get description.
											<Fragment>
												<div className = "uagb-testinomial-text-wrap" key={"text-wrap-"+index}>
													<Description attributes={props.attributes} setAttributes = "not_set" props = { props }  index_value = {index}/>
												</div>
											</Fragment>
										}
										<div className ="uagb-tm__meta">
											<div className ="uagb-tm__meta-inner">

												{ (imagePosition == "bottom" ) && <TestimonialImage  attributes={props.attributes}  index_value = {index} /> }

												{ //title_text
													<Fragment>
														<div className = "uagb-testimonial-details" key={"tm_wraps-"+index}>
															<AuthorName attributes={props.attributes} setAttributes = "not_set"  props = { props } index_value = {index}/>
															<Company attributes={props.attributes} setAttributes = "not_set"  props = { props }  index_value = {index}/>
														</div>
													</Fragment>
												}
											</div>
										</div>
									</div>
									{ ( imagePosition == "right" ) && <TestimonialImage  attributes={props.attributes} index_value = {index} /> }
								</div>
							</div>
						)}        
	   </Slider>

		const sldier_data = []
		sldier_data.push(
			{
				"block_id" : block_id,
				"columns" : columns,
				"autoplaySpeed" : autoplaySpeed,
				"autoplay" : autoplay,
				"infiniteLoop" : infiniteLoop,
				"pauseOnHover" : pauseOnHover,
				"transitionSpeed" : transitionSpeed,
				"tcolumns" : tcolumns,
				"arrowSize" : arrowSize,
				"mcolumns" : mcolumns,
				"arrowColor":arrowColor,				
			}
		)

		return (
			<Fragment>
				<div className={ classnames(
					className,
					"uagb-testomonial__outer-wrap uagb-slick-carousel uagb-tm__arrow-outside"
				) }
				id = { my_block_id }
				data-slider = {JSON.stringify(sldier_data)}
				>

				return ( block_content )
				</div>
			</Fragment>
		)
	}
} )
