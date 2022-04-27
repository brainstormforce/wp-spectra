import { useLayoutEffect } from 'react';
import { decodeEntities } from '@wordpress/html-entities';
import { __ } from '@wordpress/i18n';
import styles from './editor.lazy.scss';

export const PostTitle = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { attributes, post } = props;

	const Tag = attributes.titleTag;

	const target = attributes.newTab ? '_blank' : '_self';

	if ( undefined === post.title ) {
		return null;
	}

	if ( attributes.displayPostTitle ) {
		return (
			<Tag className={ 'uagb-post__title uagb-post__text' }>
				<a
					href={ post.link }
					target={ target }
					rel="noopener noreferrer"
				>
					{ decodeEntities( post.title.rendered.trim() ) ||
						__( '(Untitled)' ) }
				</a>
			</Tag>
		);
	}
	return null;
};
