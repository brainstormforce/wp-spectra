const { decodeEntities } = wp.htmlEntities;

class FeaturedImage extends React.Component {

	render() {

		if (
			this.props.attributes.displayPostImage &&
			undefined !== this.props.post.featured_image_src &&
			this.props.post.featured_image_src
		) {

			return (
				<div className='uagb-post__image'>
					<a href={ this.props.post.link } target="_blank" rel="bookmark">
						<img
							src={ this.props.attributes.isLandscape ? this.props.post.featured_image_src : this.props.post.featured_image_src_square }
							alt={ decodeEntities( this.props.post.title.rendered.trim() ) || __( '(Untitled)' ) }
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
