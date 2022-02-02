function getDocumentContent( $style ) {

	var theFrame = document.getElementsByTagName("iframe")[0];
		
    if( theFrame ){
        var theFrameDocument = theFrame.contentDocument || theFrame.contentWindow.document;
        theFrameDocument.head.appendChild( $style );
    } else {
        document.head.appendChild( $style )
    }

}

export default getDocumentContent;