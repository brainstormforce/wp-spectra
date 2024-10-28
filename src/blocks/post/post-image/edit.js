import { decodeEntities } from '@wordpress/html-entities';
import { __ } from '@wordpress/i18n';

export const PostImage = ( props ) => {
	const { post, attributes } = props;

	const target = attributes.newTab ? '_blank' : '_self';

	if (
		( attributes.displayPostImage &&
			undefined !== post.uagb_featured_image_src &&
			attributes.imgSize &&
			post.uagb_featured_image_src[ attributes.imgSize ] ) ||
		( attributes.displayPostImage === true && attributes.imgPosition === 'background' )
	) {
		const src = post.uagb_featured_image_src[ attributes.imgSize ];

		return (
			<div className="uagb-post__image">
				{ ( post.uagb_featured_image_src && src && src[ 0 ] ) && (
					<a
						href={ post.link }
						target={ target }
						rel="noopener noreferrer"
					>
						<div className="uagb-post__thumbnail">
							<img
								src={src[0]}
								alt={decodeEntities( post.title.rendered.trim() ) || __( '(Untitled)', 'ultimate-addons-for-gutenberg' )}
							/>
						</div>
					</a>
				) }
			</div>
		);
	}

	return null;
};
