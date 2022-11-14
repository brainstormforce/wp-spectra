async function getImageHeightWidth( url, setAttributes, onlyHas = null ){
	// onlyHas is an object with the following properties:
	// onlyHas: {
	//     type: 'width' || 'height',
	//     value: attributeValue,
	// }
	/* eslint-disable no-undef */
	const img = new Image();
	img.addEventListener( 'load', function() {
		const imgTagWidth = ( 'height' === onlyHas?.type ) ? parseInt( ( onlyHas.value * this?.naturalWidth ) / this?.naturalHeight ) : this?.naturalWidth;
		const imgTagHeight = ( 'width' === onlyHas?.type ) ? parseInt( ( onlyHas.value * this?.naturalHeight ) / this?.naturalWidth ) : this?.naturalHeight;
		setAttributes( { imgTagHeight: isNaN( imgTagHeight ) ? ( onlyHas !== null ? onlyHas?.value : imgTagHeight ) : imgTagHeight } ); // eslint-disable-line no-nested-ternary
		setAttributes( { imgTagWidth: isNaN( imgTagWidth ) ? ( onlyHas !== null ? onlyHas?.value : imgTagWidth ) : imgTagWidth } ); // eslint-disable-line no-nested-ternary
	} );
	img.src = url;
}
export default getImageHeightWidth;
