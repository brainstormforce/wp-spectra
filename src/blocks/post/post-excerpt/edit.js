import { getFallbackNumber } from '@Controls/getAttributeFallback';
export const PostExcerpt = ( props ) => {
	const { post, attributes } = props;

	if ( null === post.uagb_excerpt ) {
		return null;
	}

	const words = post.uagb_excerpt.split( ' ' );

	let excerpt = post.uagb_excerpt;

	const excerptLengthFallback = getFallbackNumber( attributes.excerptLength, 'excerptLength', attributes.blockName );

	if ( excerptLengthFallback >= words.length ) {
		excerpt = post.uagb_excerpt;
	} else {
		const truncated = words.slice( 0, excerptLengthFallback );
		excerpt = truncated.join( ' ' );
		excerpt += ' ...';
	}

	if ( attributes.displayPostExcerpt && attributes.displayPostContentRadio === 'excerpt' ) {
		return (
			<div className="uagb-post__excerpt uagb-post__text">
				<div dangerouslySetInnerHTML={ { __html: excerpt } } />
			</div>
		);
	} else if ( attributes.displayPostExcerpt && attributes.displayPostContentRadio === 'full_post' ) {
		return (
			<div className="uagb-post__excerpt uagb-full_post uagb-post__text">
				<div
					dangerouslySetInnerHTML={ {
						__html: post.content.raw.trim(),
					} }
				/>
			</div>
		);
	}
	return null;
};
