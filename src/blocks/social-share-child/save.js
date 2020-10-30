/**
 * BLOCK: Social Share - Save Block
 */

// Import block dependencies and components.
import classnames from "classnames"
import renderSVG from "../../../dist/blocks/uagb-controls/renderIcon"
import links from "./links"

const {
	RichText
} = wp.blockEditor

export default function save( props ) {
	
	const { attributes, className } = props

	const {
		type,
		image_icon,
		icon,
		image,
		block_id,
		link,
		pinterestImage,
	} = props.attributes
	
	let image_icon_html = ""
	
	if ( image_icon == "icon" ) {
		if ( icon ) {
			image_icon_html = <span className="uagb-ss__source-icon">{ renderSVG(icon) }</span>
		}
	} else {
		if ( image && image.url ) {
			image_icon_html = <img className="uagb-ss__source-image" src={image.url} />
		}
	}

	let img_url = ''

	if ( "pinterest" ==  type ){
		
		const featuredImageId = wp.data.select( 'core/editor' ).getEditedPostAttribute( 'featured_media' );
		const featuredImagemedia = featuredImageId ? wp.data.select( 'core').getMedia( featuredImageId ) : '';

		if( "undefined" !== typeof pinterestImage && null !== pinterestImage && "" !== pinterestImage ){
			img_url = pinterestImage.url		
		}else if( "undefined" !== typeof featuredImagemedia && null !== featuredImagemedia && "" !== featuredImagemedia ){
			img_url = featuredImagemedia.source_url
		}	
	
	}

	let url  = ("pinterest" ==  type) ? `https://pinterest.com/pin/create/link/?url=${window.location.href}&media=${img_url}` : links[type];

	return (
		<div
			className={ classnames(
				`uagb-ss-repeater`,
				"uagb-ss__wrapper",
				className,
				`uagb-block-${ block_id }`
			) }
		>			
			<a className="uagb-ss__link" data-href={url} rel ="noopener noreferrer"><span className="uagb-ss__source-wrap">{image_icon_html}</span></a>
		</div>
	)
}
