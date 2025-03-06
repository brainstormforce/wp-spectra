const Images = ( { image } ) => {
	let imgUrl = uagb_blocks_info.uagb_url;
	imgUrl += '/assets/images/upsell/';

	imgUrl += image;

	return (
		<img
			src={ imgUrl }
			alt="Upsell Cover"
			className="max-w-full h-auto"
		/>
	);
};

export default Images;
