const {
	RichText,
} = wp.editor

const { __ } = wp.i18n

class InfoBoxCta extends React.Component {

	render() {

		const { attributes } = this.props

		let ctaBtnClass = "uagb-infobox-cta-link uagb-ifb-cta-button"

		let target =""
		if( attributes.ctaTarget ){
			target ="_blank"
		}
		
		return (			
			<div className = "uagb-ifb-cta uagb-infobox-cta-link-style">
				{  attributes.ctaType === "text" && ( 
					<a href = {attributes.ctaLink} target= {target} className = "uagb-infobox-cta-link" >
						<span className = "uagb-inline-editing" >{attributes.ctaText}</span>
					</a>)
				}

				{  attributes.ctaType === "button" && ( 
					<div className = "uagb-ifb-button-wrapper">
						<a href = {attributes.ctaLink} className = { ctaBtnClass } target= {target} >
                        
							<span className = "uagb-ifb-cta-content-wrapper">    
								<span className   = "uagb-inline-editing " >{attributes.ctaText}</span>
							</span>
						</a>
					</div>
				)
				}
			</div>            
		)
	}
}

export default InfoBoxCta
