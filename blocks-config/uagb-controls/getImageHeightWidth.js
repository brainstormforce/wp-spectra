async function getImageHeightWidth( url, setAttributes ){
	 /* eslint-disable no-undef */
	const img = new Image();
	img.addEventListener( 'load', function() {
		setAttributes( { imgTagHeight: this?.naturalHeight } )
		setAttributes( { imgTagWidth: this?.naturalWidth } )
	} );
	img.src = url;
}

export default getImageHeightWidth;
