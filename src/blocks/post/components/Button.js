const { __ } = wp.i18n

class Button extends React.Component {

	render() {

		const { post, attributes } = this.props

		if ( attributes.displayPostLink ) {

			return (

				<div
					className='uagb-post__cta'
					style={{
						color: attributes.ctaColor,
						background: attributes.ctaBgColor
					}}
				>
					<a style={{	color: attributes.ctaColor }} className='uagb-post__link uagb-text-link' href={ post.link } target="_blank" rel ="noopener noreferrer">{ __( "Read More" ) }</a>
				</div>
			)

		} else {
			return null
		}
	}
}

export default Button
