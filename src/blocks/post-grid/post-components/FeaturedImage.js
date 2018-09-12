const { decodeEntities } = wp.htmlEntities;

class FeaturedImage extends React.Component {

	render() {

		const { post, attributes } = this.props;

		if (
			attributes.displayPostImage &&
			undefined !== post.featured_image_src &&
			post.featured_image_src
		) {

			return (
				<div className='uagb-post__image'>
					<a href={ post.link } target="_blank" rel="bookmark">
						<img
							src={ attributes.isLandscape ? post.featured_image_src : post.featured_image_src_square }
							alt={ decodeEntities( post.title.rendered.trim() ) || __( '(Untitled)' ) }
						/>
					</a>
				</div>
			);
		} else {

			return null;
		}
	}
}

export default FeaturedImage;
