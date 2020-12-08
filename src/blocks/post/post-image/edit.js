const { decodeEntities } = wp.htmlEntities
const { __ } = wp.i18n
const {  select } = wp.data;

class FeaturedImage extends React.Component {

	render() {

		const parentClientId = select( 'core/block-editor' ).getBlockHierarchyRootClientId( this.props.clientId ); //Pass Child's Client Id.
		const parentAttributes = select('core/block-editor').getBlockAttributes( parentClientId ); //Pass the Parents CLient Id from above and get all Parent parentAttributes
	
		let target = ( parentAttributes.newTab ) ? "_blank" : "_self"

		if (
			parentAttributes.displayPostImage &&
			undefined !== parentAttributes.postdata[0].uagb_featured_image_src &&
			parentAttributes.imgSize &&
			parentAttributes.postdata[0].uagb_featured_image_src[parentAttributes.imgSize]
		) {
			var src = parentAttributes.postdata[0].uagb_featured_image_src[parentAttributes.imgSize]

			return (
				<div className='uagb-post__image'>
					<a href={ parentAttributes.postdata[0].link } target={ target } rel ="noopener noreferrer">
						<img
							src={ src[0] }
							alt={ decodeEntities( parentAttributes.postdata[0].title.rendered.trim() ) || __( "(Untitled)" ) }
						/>
					</a>
				</div>
			)
		} else {

			return null
		}
	}
}

export default FeaturedImage
