const InfoBoxIconImage = ( props ) => {
	const { attributes } = props;

	let urlCheck = '';
	if (
		typeof attributes.iconImage !== 'undefined' &&
		attributes.iconImage !== null &&
		attributes.iconImage !== ''
	) {
		urlCheck = attributes.iconImage.url;
	}

	let url = '';
	if ( urlCheck !== '' ) {
		const size = attributes.iconImage.sizes;
		const imageSize = attributes.imageSize;

		if (
			typeof size !== 'undefined' &&
			typeof size[ imageSize ] !== 'undefined'
		) {
			url = size[ imageSize ].url;
		} else {
			url = urlCheck;
		}

		return (
			<img
				src={ url }
				alt={ attributes.iconImage.alt }
			/>
		);
	}
	return null;
};

export default InfoBoxIconImage;
