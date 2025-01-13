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
		const { authorImageSize, authorImageWidth } = attributes;

		url =
			typeof size !== 'undefined' && typeof size[ authorImageSize ] !== 'undefined'
				? size[ authorImageSize ].url
				: urlChk;

		return (
			<img
				className=""
				src={ url }
				alt={ attributes.authorImage.alt }
				width={ authorImageWidth }
				height={ authorImageWidth }
				{ ...( uagb_blocks_info.img_lazy_load !== 'enabled' && { loading: 'lazy' } ) }
			/>
		);
	}

	return null;
};

export default AuthorImage;
