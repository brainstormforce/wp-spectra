async function getImageHeightWidth( url, setAttributes, onlyHas = null ){
    // onlyHas is an object with the following properties:
    // onlyHas: {
    //     type: 'width' || 'height',
    //     value: attributeValue,
    // }
    /* eslint-disable no-undef */
   const img = new Image();
   img.addEventListener( 'load', function() {
       setAttributes( { imgTagHeight: ( 'width' === onlyHas?.type ) ? parseInt( ( onlyHas.value * this?.naturalHeight ) / this?.naturalWidth ) : this?.naturalHeight } )
       setAttributes( { imgTagWidth:  ( 'height' === onlyHas?.type ) ? parseInt( ( onlyHas.value * this?.naturalWidth ) / this?.naturalHeight ) : this?.naturalWidth } )
   } );
   img.src = url;
}
export default getImageHeightWidth;
