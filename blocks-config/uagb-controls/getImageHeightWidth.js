async function getImageHeightWidth(url, setAttributes, height, width){
	const img = new Image();
	img.addEventListener("load", function() {
		setAttributes( { imgTagHeight: this.naturalHeight } )
		setAttributes( { imgTagWidth: this.naturalWidth } )
	});
	img.src = url;
	return img.height
}

export default getImageHeightWidth;
