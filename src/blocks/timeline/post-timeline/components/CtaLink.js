import React from 'react';
const CtaLink = ( props ) => {
	const { post, attributes } = props;
	let target = '_self';
	if ( attributes.linkTarget ) {
		target = '_blank';
	}

	if ( attributes.displayPostLink ) {
		return (
				<a
					className="uagb-timeline__link"
					href={ post.link }
					target={ target }
					rel="noopener noreferrer"
				>
					{ attributes.readMoreText }
				</a>
		);
	}
	return null;
};

export default React.memo( CtaLink );
