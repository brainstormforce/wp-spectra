const { __ } = wp.i18n

class CtaLink extends React.Component {

	render() {

		const { post, attributes } = this.props

		if ( attributes.displayPostLink ) {

			return (

				<div
					className='uagb-timeline__link_parent'					
				>
					<a className='uagb-timeline__link' href={ post.link } target="_blank" rel ="noopener noreferrer" 
						style= {{
							color: attributes.ctaColor
						}}
					>{ attributes.readMoreText }</a>
				</div>
			)

		} else {
			return null
		}
	}
}

export default CtaLink
