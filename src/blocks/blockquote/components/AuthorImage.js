const AuthorImage = ( { attributes } ) => {
	let urlChk = '';

	if (
		typeof attributes.authorImage !== 'undefined' &&
		attributes.authorImage !== null &&
		attributes.authorImage !== ''
	) {
		urlChk = attributes.authorImage.url;
	}

	let url = '';

	if ( urlChk !== '' ) {
		const size = attributes.authorImage.sizes;
		const authorImageSize = attributes.authorImageSize;

		url =
			typeof size !== 'undefined' &&
			typeof size[ authorImageSize ] !== 'undefined'
				? size[ authorImageSize ].url
				: urlChk;

		return (
				<img
					className=""
					src={ url }
					alt={ attributes.authorImage.alt }
				/>
		);
	}

	return null;
};

export default AuthorImage;
