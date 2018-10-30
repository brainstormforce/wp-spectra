const {
    RichText,
} = wp.editor;

const { __ } = wp.i18n;

class TestimonialImage extends React.Component {

	render() {

		const { attributes } = this.props;     
        let url_chk = '';
        if( typeof attributes.iconImage !== "undefined" && attributes.iconImage !== null && attributes.iconImage !=='' ){
            url_chk = attributes.iconImage.url
        }        
        let url = ""

        if( url_chk !== '' ){
            let size = attributes.iconImage.sizes;
            let imageSize = attributes.imageSize;
            if ( typeof size[imageSize] !== 'undefined') {
              url = size[imageSize].url ;
            }else{
              url = url_chk ;
            }

            return (                
                <div className="uagb-tm__image">                        
                   <img
                        className =""
                        src = { url }                        
                        alt = { attributes.iconImage.alt }                    
                    />                        
                </div>                                  
            )
        }else{
            return null;
        }       
		
	}
}

export default TestimonialImage
