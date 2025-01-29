const InfoBoxIconImage = ( props ) => {
	const { attributes } = props;

	let urlCheck = '';
	if ( typeof attributes.iconImage !== 'undefined' && attributes.iconImage !== null && attributes.iconImage !== '' ) {
		urlCheck = attributes.iconImage.url;
	}

	let url = '';
	if ( urlCheck !== '' ) {
		const size = attributes.iconImage.sizes;
		const imageSize = attributes.imageSize;
		const { imgTagWidth, imgTagHeight, imageWidth, imageWidthType } = attributes;

		if ( typeof size !== 'undefined' && typeof size[ imageSize ] !== 'undefined' ) {
			url = size[ imageSize ].url;
		} else {
			url = urlCheck;
		}

		return (
			<>
				{ attributes.showIcon && (
					<div className="uagb-ifb-image-content">
						<img
							src={ url }
							alt={ attributes.imageAlt }
							width={ imageWidthType ? imageWidth : imgTagWidth }
							height={ imgTagHeight }
							{...( uagb_blocks_info.img_lazy_load !== 'enabled' && { loading: 'lazy' } )}
							style={ { display: url ? undefined : 'none' } }
						/>
					</div>
				) }
			</>
		);
	}
	return null;
};

export default InfoBoxIconImage;
