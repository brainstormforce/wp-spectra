function getStyleTagById( $ID ) {
    var element;
    
    var theFrame = document.getElementsByTagName("iframe")[0];

    if( theFrame && 'editor-canvas' === theFrame.name ){
        var theFrameDocument = theFrame.contentWindow.document || theFrame.contentDocument;
        element = theFrameDocument.getElementById( $ID );
    } else {
        element = document.getElementById( $ID );
    }

    return element;

}

export default getStyleTagById;