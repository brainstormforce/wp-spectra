const {
	RichText,
} = wp.editor

const { __ } = wp.i18n

import classnames from "classnames"

class CallToAction extends React.Component {

	render() {

		const { attributes } = this.props

		let ctaBtnClass = "uagb-cta-block-link uagb-cta-link-button-wrapper"

		let target ="_self"
		let rel ="noopener noreferrer"
		if( attributes.ctaTarget ){
			target ="_blank"
		}

		var cta_icon_output = ""
		if( attributes.ctaIcon !== "" ){
			cta_icon_output = <span className= { classnames(`uagb-cta-${ attributes.ctaType }-icon`, `uagb-cta-align-icon-${ attributes.ctaIconPosition }`) }>
				<i className= {attributes.ctaIcon} ></i>
			</span>
		}
		return (			
			<div className = "uagb-cta-link-wrapper uagb-cta-block-link-style">
				{  attributes.ctaType === "text" && ( 
					<a href = {attributes.ctaLink} target= {target} className = "uagb-cta-block-link" rel= {rel} >
						{  attributes.ctaIconPosition === "before" &&  cta_icon_output }
						<span className = "uagb-inline-editing" >{attributes.ctaText}</span>
						{  attributes.ctaIconPosition === "after" &&  cta_icon_output }
					</a>
				)
				}

				{  attributes.ctaType === "button" && ( 
					<div className = "uagb-cta-button-wrapper">
						<a href = {attributes.ctaLink} className = { ctaBtnClass } target= {target} rel= {rel} >
                        	{  attributes.ctaIconPosition === "before" &&  cta_icon_output }
							<span className = "uagb-cta-link-content-wrapper">    
								<span className   = "uagb-inline-editing " >{attributes.ctaText}</span>
							</span>
							{  attributes.ctaIconPosition === "after" &&  cta_icon_output }
						</a>
					</div>
				)
				}
			</div>            
		)
	}
}

export default CallToAction
