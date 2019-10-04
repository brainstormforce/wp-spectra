const {
	RichText,
} = wp.blockEditor

const { __ } = wp.i18n

class RestMenuImage extends React.Component {

	render() {

		const { attributes , index_value } = this.props
		let url_check = ""
        
		const image_arr = attributes.rest_menu_item_arr[index_value]
        
		if( image_arr && typeof image_arr !== "undefined"){
			const image = image_arr["image"]
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
					<div className ="uagb-rm__image-content" key={"rm_img-wrap-"+index_value}>           
						<div className="uagb-rm__image" key={"rm_img-"+index_value}>                        
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
