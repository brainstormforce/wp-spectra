const { __ } = wp.i18n
const {  select } = wp.data;
import classnames from "classnames"

class Button extends React.Component {

	render() {

		const parentClientId = select( 'core/block-editor' ).getBlockHierarchyRootClientId( this.props.clientId ); //Pass Child's Client Id.
		const parentAttributes = select('core/block-editor').getBlockAttributes( parentClientId ); //Pass the Parents CLient Id from above and get all Parent attributes
	
		if ( parentAttributes.displayPostContentRadio == "full_post" ) {
			return null;
		}

		let target = ( parentAttributes.newTab ) ? "_blank" : "_self"

		if ( parentAttributes.displayPostLink ) {

			let cta_text = ( parentAttributes.ctaText ) ? parentAttributes.ctaText : __( "Read More" )

			return (

				<div className={classnames('uagb-post__cta', ( parentAttributes.inheritFromTheme ) ? 'wp-block-button' : null)}>
					<a
						className={classnames(
							( !parentAttributes.inheritFromTheme ) ? 'uagb-post__link ' : null,
							'uagb-text-link',
							( parentAttributes.inheritFromTheme ) ? 'wp-block-button__link' : null
						)}
						href={ parentAttributes.postdata[0].link }
						target={ target }
						rel ="noopener noreferrer">{ cta_text }</a>
				</div>
			)

		} else {
			return null
		}
	}
}

export default Button
