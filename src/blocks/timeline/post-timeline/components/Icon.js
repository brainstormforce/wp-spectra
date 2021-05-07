import renderSVG from "@Controls/renderIcon"

class Icon extends React.Component {

	render() {

		const { attributes } = this.props
		var icon_class = "uagb-timeline__icon-new uagb-timeline__out-view-icon "  
		var svg = renderSVG(attributes.icon)
		return (			
			<div className="uagb-timeline__marker uagb-timeline__out-view-icon"> 
				<span className = {icon_class}>{ renderSVG(attributes.icon) }</span>
			</div>
		)
	}
}

export default Icon
