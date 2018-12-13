const {
	RichText,
} = wp.editor

const { __ } = wp.i18n

class InfoBoxCta extends React.Component {

	render() {

		const { attributes } = this.props

		let ctaBtnClass = "uagb-infobox-cta-link uagb-ifb-cta-button"

		let target ="_self"
		let rel ="noopener noreferrer"
		if( attributes.ctaTarget ){
			target ="_blank"
		}
		
		if( attributes.ctaType !== "none" ){ 
			return (			
				<div className = "uagb-ifb-cta uagb-infobox-cta-link-style">
					{  attributes.ctaType === "text" && ( 
						<a href = {attributes.ctaLink} target= {target} className = "uagb-infobox-cta-link" rel= {rel} >
							<span className = "uagb-inline-editing" >{attributes.ctaText}</span>
						</a>)
					}

					{  attributes.ctaType === "button" && ( 
						<div className = "uagb-ifb-button-wrapper">
							<a href = {attributes.ctaLink} className = { ctaBtnClass } target= {target} rel= {rel} >
	                        
								<span className = "uagb-ifb-cta-content-wrapper">    
									<span className   = "uagb-inline-editing " >{attributes.ctaText}</span>
								</span>
							</a>
						</div>
					)
					}
				</div>            
			)
		}else{
			return null
		}
	}
}

export default InfoBoxCta
