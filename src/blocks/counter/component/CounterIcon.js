import renderSVG from '@Controls/renderIcon';

const CounterIcon = ( props ) => {
	const { attributes, setAttributes } = props;

	if ( attributes.sourceType === 'icon' ) {
		return <span className="wp-block-uagb-counter__icon">{ renderSVG( attributes.icon, setAttributes ) }</span>;
	}

	if ( attributes.sourceType === 'image' ) {
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

			if ( typeof size !== 'undefined' && typeof size[ imageSize ] !== 'undefined' ) {
				url = size[ imageSize ].url;
			} else {
				url = urlCheck;
			}
			return (
				<span className="wp-block-uagb-counter__image-wrap">
					<img
						className="wp-block-uagb-counter__image"
						src={ url }
						alt={ attributes.iconImage.alt }
						width={
							attributes.imageWidthType && attributes.imageWidth
								? attributes.imageWidth
								: attributes.imgTagWidth
						}
						height={ attributes.imgTagHeight }
						loading="lazy"
					/>
				</span>
			);
		}
	}

	return null;
};

export default CounterIcon;
