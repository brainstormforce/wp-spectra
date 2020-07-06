const {
	RichText,
} = wp.blockEditor

const { __ } = wp.i18n

class RestMenuImage extends React.Component {

	render() {

		const { attributes } = this.props
		let url_check = ""
		let image_arr = ""

        if(attributes.image !== ""){
			 image_arr = attributes.image
		}else{
			 image_arr = attributes.rest_menu_item_arr
		}
        
		if( image_arr && typeof image_arr !== "undefined"){
			const image = attributes.image ? attributes.image :image_arr["image"]
			let url = ""
           
			if( typeof image !== "undefined" && image !== null && image !=="" ){
				url_check = image.url
			}       
            
			if( url_check !== "" ){
				let size = image.sizes
				let imageSize = attributes.imageSize
				if ( typeof size !== "undefined" && typeof size[imageSize] !== "undefined") {
					url = size[imageSize].url 
				}else{
					url = url_check 
				}
                
				return (     
					<div className ="uagb-rm__image-content" >           
						<div className="uagb-rm__image" >                        
							<img
								className =""
								src = { url }                        
								alt = { image.alt }                    
							/>                        
						</div>  
					</div>                                 
				)
			}else{
				return null
			}     

		}else{
			return null
		}
	}
}

export default RestMenuImage
