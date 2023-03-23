function addCommonDataToSpectraBlocks( configData = {} ) {
	let data = {
		example: {
			attributes: {
				isPreview: true,
			},
		},
	};

	if ( uagb_blocks_info.is_site_editor ) {
		data = {};
	}
	return {...configData, ...data };
}
export default addCommonDataToSpectraBlocks;
