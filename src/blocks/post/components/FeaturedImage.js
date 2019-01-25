const { decodeEntities } = wp.htmlEntities
const { __ } = wp.i18n

class FeaturedImage extends React.Component {

	render() {

		const { post, attributes } = this.props

		let target = ( attributes.newTab ) ? "_blank" : "_self"

		if (
			attributes.displayPostImage &&
			undefined !== post.featured_image_src &&
			attributes.imgSize &&
			post.featured_image_src[attributes.imgSize]
		) {
			var src = post.featured_image_src[attributes.imgSize]

			return (
				<div className='uagb-post__image'>
					<a href={ post.link } target={ target } rel ="noopener noreferrer">
						<img
							src={ src[0] }
							alt={ decodeEntities( post.title.rendered.trim() ) || __( "(Untitled)" ) }
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
