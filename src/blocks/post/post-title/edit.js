import { decodeEntities } from '@wordpress/html-entities';

export const PostTitle = ( props ) => {
	const { attributes, post } = props;

	const Tag = attributes.titleTag;

	const target = attributes.newTab ? '_blank' : '_self';

	if ( undefined === post.title ) {
		return null;
	}

	if ( attributes.displayPostTitle ) {
		return (
			<Tag className={ 'uagb-post__title uagb-post__text' }>
				<a href={ post.link } target={ target } rel="noopener noreferrer">
					{ decodeEntities( post.title.rendered.trim() ) }
				</a>
			</Tag>
		);
	}
	return null;
};
