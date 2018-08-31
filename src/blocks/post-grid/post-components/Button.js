const { __ } = wp.i18n;

class Button extends React.Component {

	render() {

		if ( this.props.attributes.displayPostLink ) {

			return (

				<div
					className='uagb-post__cta'
					style={{
						color: this.props.attributes.ctaColor,
						background: this.props.attributes.ctaBgColor
					}}
				>
					<a className='uagb-post__link uagb-text-link' href={ this.props.post.link } target="_blank" rel="bookmark">{ __( 'Read More' ) }</a>
				</div>
			);

		} else {
			return null;
		}
	}
}

export default Button;
