class CtaLink extends React.Component {

	render() {

		const { post, attributes } = this.props
		let target ="_self"
		if( attributes.linkTarget ){
			target ="_blank"
		}

		if ( attributes.displayPostLink ) {

			return (

				<div
					className='uagb-timeline__link_parent'
					style= {{
						textAlign: attributes.align
					}}					
				>
					<a className='uagb-timeline__link' href={ post.link } target={target} rel ="noopener noreferrer" 
						style= {{
							color: attributes.ctaColor,
							fontSize: attributes.ctaFontSize+"px",
							background: attributes.ctaBackground,
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
