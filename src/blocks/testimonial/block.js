/**
 * BLOCK: advanced-heading
 */

// Import block dependencies and components.
import classnames from "classnames"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"

// Import icon.
import AuthorName from "./components/AuthorName"
import Designation from "./components/Designation"
import Description from "./components/Description"
import PositionClasses from "./classes"
import TestimonialStyle from "./inline-styles"
import TestimonialImage from "./components/TestimonialImage"
import Slider from "react-slick"
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

const {
	compose
} = wp.compose;

const {
	withViewportMatch
} = wp.viewport

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
	title: __( "UAGB - Testimonial" ), // Block title.
	description: __( "Add Testimonial." ), // Block description.
	icon: UAGB_Block_Icons.testimonial, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	keywords: [
		__( "testimonial" ),
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
			imagePosition,
			test_block
		} = props.attributes;

		const my_block_id = 'uagb-testimonial-'+ block_id;

		const NextArrow = '<button type="button" data-role="none" className="slick-next slick-arrow" aria-label="Next" tabIndex="0" role="button" style={{ "borderColor" : arrowColor }}><i className="dashicons-arrow-right-alt2 dashicons" style={{ "fontSize" : props.arrowSize, "color" : arrowColor }}></i></button>';
		const PrevArrow = '<button type="button" data-role="none" className="slick-prev slick-arrow" aria-label="Previous" tabIndex="0" role="button" style={{ "borderColor" : arrowColor }}><i className="dashicons-arrow-left-alt2 dashicons" style={{ "fontSize" : props.arrowSize, "color" : arrowColor }}></i></button>';

		const settings = {
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
			nextArrow: <NextArrow arrowSize={arrowSize}/>,
			prevArrow: <PrevArrow arrowSize={arrowSize}/>,
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
		}
		

		return (
			<Fragment>
				<div className={ classnames(
					className,
					"uagb-testomonial__outer-wrap uagb-slick-carousal uagb-tm__arrow-outside"
				) }
					id = { my_block_id }
				>
					{/*<Slider
					className={ classnames(
						"is-carousel",
						`uagb-tm__columns-${ columns }`,
						"uagb-tm__items"
					) }					
					{...settings}
					>*/}

					{ test_block.map( ( test, index ) => 

						<div className = { classnames(
						"uagb-testomonial__wrap",
						...PositionClasses( props.attributes ),
						) } key ={ "wrap-"+index } >
							<div className = "uagb-tm__overlay"></div>
							<div className = "uagb-tm__content" key ={ "tm_content-"+index }>
								{ (imagePosition == 'top' || imagePosition == 'left' ) && <TestimonialImage  attributes={props.attributes} index_value = {index} /> }	

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
											
											{ (imagePosition == 'bottom' ) && <TestimonialImage  attributes={props.attributes}  index_value = {index} /> }	
																
											{ //title_text
												<Fragment>
													<div className = "uagb-testimonial-details" key={"tm_wraps-"+index}>
														<AuthorName attributes={props.attributes} setAttributes = "not_set"  props = { props } index_value = {index}/>
														<Designation attributes={props.attributes} setAttributes = "not_set"  props = { props }  index_value = {index}/>
													</div>
												</Fragment>
											}								
										</div>
									</div>
								</div>
								{ ( imagePosition == 'right' ) && <TestimonialImage  attributes={props.attributes} index_value = {index} /> }	
							</div>						
						</div>												
					)}
				{/*</Slider>*/}
			</div>
		</Fragment>
		)
	}
} )
