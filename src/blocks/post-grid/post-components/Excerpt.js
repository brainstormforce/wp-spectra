class Excerpt extends React.Component {

	render() {

		const { post, attributes } = this.props;

		if (
			attributes.displayPostExcerpt &&
			post.excerpt
		) {

			return (

				<div
					className='uagb-post__excerpt'
					style={{ color: attributes.excerptColor }}
				>
					<div dangerouslySetInnerHTML={ { __html: post.excerpt.rendered } } />
				</div>
			);

		} else {
			return null;
		}
	}
}

export default Excerpt;
