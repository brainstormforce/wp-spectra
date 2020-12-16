const { decodeEntities } = wp.htmlEntities
const { __ } = wp.i18n
import {
	useInnerBlockLayoutContext,
	usePostDataContext
} from '.././function';

export const PostTitle = (props) => {
	
		const { parentClassName } = useInnerBlockLayoutContext();
		// const { post } = usePostDataContext();
		
		const { attributes ,post } = props
		
		const Tag = attributes.titleTag

		let target = ( attributes.newTab ) ? "_blank" : "_self"

		if ( undefined == post.title ) {
			return null
		}

		if ( attributes.displayPostTitle ) {

			return (

				<Tag className={ "uagb-post__title" , `${parentClassName}__parent-block`}>
					<a href={ post.link } target={ target } rel ="noopener noreferrer">{ decodeEntities( post.title.rendered.trim() ) || __( "(Untitled)" ) }</a>
				</Tag>
			)
		} else {
			return null
		}

}
	