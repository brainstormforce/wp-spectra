const { __ } = wp.i18n

class Button extends React.Component {

	render() {

		const { post, attributes } = this.props

		let target = ( attributes.newTab ) ? "_blank" : "_self"

		if ( attributes.displayPostLink ) {

			let cta_text = ( attributes.ctaText ) ? attributes.ctaText : __( "Read More" )

			return (

				<div className='uagb-post__cta'>
					<a className='uagb-post__link uagb-text-link' href={ post.link } target={ target } rel ="noopener noreferrer">{ cta_text }</a>
				</div>
			)

		} else {
			return null
		}
	}
}

export default Button
