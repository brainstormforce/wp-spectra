const {
	RichText,
} = wp.editor

const { __ } = wp.i18n

class InfoBoxIconImage extends React.Component {

	render() {

		const { attributes } = this.props     
		let url_chk = attributes.iconImage.url
		let url = ""
		if( url_chk !== "" ){
			let size = attributes.iconImage.sizes
			let imageSize = attributes.imageSize
			url = size[imageSize].url 

			return (
				<div className="uagb-ifb-image-icon-content uagb-ifb-imgicon-wrap" >
					<div className="uagb-ifb-image">
						<div className="uagb-ifb-image-content">
							<img
								className =""
								src = { url }                        
								alt = { attributes.iconImage.alt }                    
							/>
						</div>
					</div>
				</div>                      
			)
		}else{
			return null
		}       
		
	}
}

export default InfoBoxIconImage
