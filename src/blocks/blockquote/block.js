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
					{ skinStyle === "quotation" && <div className="uagb-quote__icon-wrap"><span className="uagb-quote__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M7.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.357-0.056 0.724-0.086 1.097-0.086zM25.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.358-0.056 0.724-0.086 1.097-0.086z"></path></svg></span></div> }
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
