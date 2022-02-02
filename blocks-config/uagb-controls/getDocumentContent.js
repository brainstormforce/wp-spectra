function getDocumentContent( $style, deviceType ) {
    
    if( 'Mobile' === deviceType || 'Tablet' === deviceType ){
        let theFrame = document.getElementsByTagName('iframe')['editor-canvas'];
        let theFrameDocument = theFrame.contentDocument || theFrame.contentWindow.document;
        theFrameDocument.head.appendChild( $style );
    } else {
        document.head.appendChild( $style )
    }

}

export default getDocumentContent;