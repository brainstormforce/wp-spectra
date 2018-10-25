/**
 * BLOCK: advanced-heading
 */

// Import block dependencies and components.
import classnames from "classnames"
import UAGB_Block_Icons from "../uagb-controls/block-icons"

// Import icon.
import AuthorName from "./components/AuthorName";
import Designation from "./components/Designation";
import Description from "./components/Description";
import PositionClasses from "./classes";
import TestimonialStyle from "./inline-styles";
import TestimonialImage from "./components/TestimonialImage";
import edit from "./edit";
import attributes from "./attributes";
import "./editor.scss"
import "./style.scss"
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
	category: "formatting",

	attributes,
	edit,
	save: function( props ) {
		const {
			block_id,
			className
		} = props.attributes;

		const my_block_id = 'uagb-testimonial-'+ block_id;
		var ClassNamesId    =  ( typeof className != "undefined" ) ? className : '';

		var back_style = TestimonialStyle( props );

		// Get icon/Image components.
		let is_image = <TestimonialImage attributes={ props.attributes } />;
		

		// Get description.
		const desc = (
			<Fragment>				
				<div className = "uagb-testimonial-text-wrap">
					<Description attributes={props.attributes} setAttributes = "not_set" props = { props }/>
				</div>
			</Fragment>
		);

		// Get Title and AuthorName components.
		const title_text = (
			<Fragment>
				<div className = "uagb-testimonial-details">
					<AuthorName attributes={ props.attributes } setAttributes = "not_set" props = { props }/>
					<Designation attributes={ props.attributes} setAttributes = "not_set" props = { props }/>
				</div>
			</Fragment>
		);

		//return null;

		return (
			<Fragment>
				<div className={ className }
					id = { my_block_id }
				>
					<div className = { classnames(
						"uagb-testinomial-content-wrap",
						...PositionClasses( props.attributes ),
					) }>
						<div className = "uagb-testinomial-content">
							{ desc }
							<div className ="uagb-testimonial-meta">
								<div className ="uagb-testimonial-meta-inner">
									<div className ="uagb-testimonial-image-contnet">
										{ is_image }	
									</div>							
									{ title_text }								
								</div>
							</div>
						</div>						
					</div>
				</div>
			</Fragment>
		)
	}
} )
