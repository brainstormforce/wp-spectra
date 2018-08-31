class Excerpt extends React.Component {

	render() {

		if (
			this.props.attributes.displayPostExcerpt &&
			this.props.post.excerpt
		) {

			return (

				<div
					className='uagb-post__excerpt'
					style={{ color: this.props.attributes.excerptColor }}
				>
					<div dangerouslySetInnerHTML={ { __html: this.props.post.excerpt.rendered } } />
				</div>
			);

		} else {
			return null;
		}
	}
}

export default Excerpt;
