import truncate from "lodash/truncate"

class Excerpt extends React.Component {

	render() {

		const { post, attributes } = this.props

		const words = post.excerpt.split(" ")

		let excerpt = post.excerpt

		let exLen = ( attributes.excerptLength ) ? attributes.excerptLength : 25

		if ( exLen >= words.length ) {
			excerpt = post.excerpt
		} else {
			const truncated = words.slice( 0, exLen )
			excerpt = truncated.join( " " )
			excerpt += " ..."
		}

		if (
			attributes.displayPostExcerpt &&
			undefined !== post.excerpt
		) {

			return (

				<div
					className='uagb-post__excerpt'
					style={{ color: attributes.excerptColor, marginBottom: attributes.excerptBottomSpace, fontSize: attributes.excerptFontSize }}
				>
					<div dangerouslySetInnerHTML={ { __html: excerpt } } />
				</div>
			)

		} else {
			return null
		}
	}
}

export default Excerpt
