const AuthorImage = ( { attributes } ) => {
	let url_chk = '';

	if (
		typeof attributes.authorImage !== 'undefined' &&
		attributes.authorImage !== null &&
		attributes.authorImage !== ''
	) {
		url_chk = attributes.authorImage.url;
	}

	let url = '';

	if ( url_chk !== '' ) {
		const size = attributes.authorImage.sizes;
		const authorImageSize = attributes.authorImageSize;

		url =
			typeof size !== 'undefined' &&
			typeof size[ authorImageSize ] !== 'undefined'
				? size[ authorImageSize ].url
				: url_chk;

		return (
			<div className="uagb-blockquote__author-image">
				<img
					className=""
					src={ url }
					alt={ attributes.authorImage.alt }
				/>
			</div>
		);
	}

	return null;
};

export default AuthorImage;
