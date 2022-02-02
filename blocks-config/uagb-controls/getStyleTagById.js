function getStyleTagById( $ID, deviceType ) {
    let element;
    
    if( 'Mobile' === deviceType || 'Tablet' === deviceType ){
        let theFrame = document.getElementsByTagName('iframe')['editor-canvas'];
        let theFrameDocument = theFrame.contentDocument || theFrame.contentWindow.document;
        element = theFrameDocument.getElementById( $ID );
    } else {
        element = document.getElementById( $ID );
    }

    return element;

}

export default getStyleTagById;