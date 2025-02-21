const UpsellImage = ( { image } ) => {
	let imgUrl = uagb_blocks_info.uagb_url;
	imgUrl += '/assets/images/upsell/';

	imgUrl += image;

	if ( image === 'animationImage.gif' ) {
		return (
			<img
				src={ imgUrl }
				alt="GIF Preview"
				className="max-w-full h-auto rounded-lg shadow-md"
				style={ { width: '100%' } }
			/>
		);
	}

	return <img src={ imgUrl } alt="Upsell Cover" />;
};

export default UpsellImage;
