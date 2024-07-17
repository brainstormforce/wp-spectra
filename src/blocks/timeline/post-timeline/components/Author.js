import { memo } from '@wordpress/element';
const Author = ( props ) => {
	const { post, attributes } = props;

	let target = '_self';
	if ( attributes.linkTarget ) {
		target = '_blank';
	}
	return (
		<>
			{ attributes.displayPostAuthor && undefined !== post.uagb_author_info && (
				<>
					<span className="dashicons-admin-users dashicons"></span>
					<a
						className="uagb-timeline__author-link"
						target={ target }
						href={ post.uagb_author_info.author_link }
						rel="noopener noreferrer"
					>
						{ post.uagb_author_info.display_name }
					</a>
				</>
			) }
		</>
	);
};

export default memo( Author );
