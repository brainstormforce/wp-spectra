export const block_api_request = (blockID, blockType) => {
	return fetch(
		`https://websitedemos.net/wp-json/wp/v2/${blockType}/${blockID}`
	).then((response) => {
		return response.json();
	});
};
