const { decodeEntities } = wp.htmlEntities

class Excerpt extends React.Component {

	render() {

		const { post, attributes } = this.props

		if (
			attributes.displayPostExcerpt &&
			undefined !== post.excerpt
		) {

			return (

				<div
					className='uagb-post__excerpt'
					style={{ color: attributes.excerptColor, marginBottom: attributes.excerptBottomSpace }}
				>
					<div dangerouslySetInnerHTML={ { __html: decodeEntities( post.excerpt.rendered.trim() ) } } />
				</div>
			)

		} else {
			return null
		}
	}
}

export default Excerpt
