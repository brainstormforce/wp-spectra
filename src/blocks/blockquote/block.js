/**
 * BLOCK: Quote
 */

// Import block dependencies and components.
import classnames from "classnames"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import TweetButton from "./components/TweetButton"
import Description from "./components/Description"
import AuthorText from "./components/AuthorText"
import AuthorImage from "./components/AuthorImage"

// Import icon.
import edit from "./edit"
import attributes from "./attributes"
import "./editor.scss"
import "./style.scss"
const { __ } = wp.i18n

// Import registerBlockType() from wp.blocks
const {
	registerBlockType,
} = wp.blocks

// Extend component
const { Fragment } = wp.element

/**
 * Register: as Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior.
 *
 * @link https://.org/gutenberg/handbook/block-api/
 * @param  {string}   namwordpresse     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( "uagb/blockquote", {
	title: uagb_blocks_info.blocks["uagb/blockquote"]["title"],
	description: uagb_blocks_info.blocks["uagb/blockquote"]["description"],
	icon: UAGB_Block_Icons.blockquote,
	keywords: [
		__( "blockquote" ),
		__( "quote" ),
		__( "uagb" ),
	],
	category: uagb_blocks_info.category,
	attributes,
	edit,
	save: function( props ) {

		const {
			block_id,
			skinStyle,
			align,	
			quoteStyle,
			iconSkin,
			authorImage,
			enableTweet,
			className,
			iconView,
			author,
			description_text,
			authorImgPosition,
			stack,
		} = props.attributes

		return (
			<div
				className = { classnames(
					className,						
					"uagb-blockquote__outer-wrap",
				) }
				id={ `uagb-quote-${ block_id }` }>
				<div className = { classnames(
					"uagb-blockquote__wrap",
					`uagb-blockquote__skin-${skinStyle}`,
					( skinStyle !== "border" ) ? `uagb-quote__align-${align}` : "",
					( skinStyle === "quotation" ) ? `uagb-quote__style-${quoteStyle}` : "",
					( enableTweet ) ? `uagb-quote__with-tweet uagb-quote__tweet-style-${iconSkin} uagb-quote__tweet-${iconView}` : "",
					`uagb-quote-stack-img-${stack}`,
				) } >
					
					<blockquote className="uagb-blockquote">					  
						{ skinStyle === "quotation" && <div className="uagb-quote__icon-wrap"><span className="uagb-quote__icon">{ UAGB_Block_Icons.quote_inline_icon }</span></div> }
						<div className="uagb-blockquote__content-wrap">
					   	{ description_text !=="" && <Description attributes={props.attributes} setAttributes = "not_set" props = { props }  /> }

				   	<footer>
				   		<div className={ classnames(
									"uagb-quote__author-wrap",
									( authorImage !== "" ) ? `uagb-quote__author-at-${authorImgPosition}` : "",	
								) }	>					   		
				      		{ <AuthorImage attributes={props.attributes} /> }
				      		{ author !== "" && <AuthorText attributes={props.attributes} setAttributes = "not_set" props = { props } /> }
								</div>
				      	{ enableTweet &&  <TweetButton attributes={props.attributes} /> }
				   	</footer>
						</div>
					</blockquote>
				</div>
			</div>
		)
	}
} )
