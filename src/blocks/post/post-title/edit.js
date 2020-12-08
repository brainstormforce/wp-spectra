const { decodeEntities } = wp.htmlEntities
const { __ } = wp.i18n
const {  select } = wp.data;

class Title extends React.Component {
	constructor() {
		super( ...arguments )
	}
	render() {

		console.log('post-title');
		const parentClientId = select( 'core/block-editor' ).getBlockHierarchyRootClientId( this.props.clientId ); //Pass Child's Client Id.
		const parentAttributes = select('core/block-editor').getBlockAttributes( parentClientId ); //Pass the Parents CLient Id from above and get all Parent attributes
		const Tag = parentAttributes.titleTag
		let target = ( parentAttributes.newTab ) ? "_blank" : "_self"
		console.log(parentAttributes)
		if ( undefined == parentAttributes.postdata[0].title ) {
			return null
		}

		if ( parentAttributes.displayPostTitle ) {

			return (

				<Tag className={ "uagb-post__title" }>
					<a href={ parentAttributes.postdata[0].link } target={ target } rel ="noopener noreferrer">{ decodeEntities( parentAttributes.postdata[0].title.rendered.trim() ) || __( "(Untitled)" ) }</a>
				</Tag>
			)
		} else {
			return null
		}

	}
}

export default Title
