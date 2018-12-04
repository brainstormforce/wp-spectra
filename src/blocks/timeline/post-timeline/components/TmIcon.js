class TmIcon extends React.Component {

	render() {

		const { attributes } = this.props
		var icon_class = "uagb-timeline__icon-new uagb-timeline__out-view-icon "+attributes.icon  

		return (			
			<div className="uagb-timeline__marker uagb-timeline__out-view-icon"> 
				<span className = {icon_class}></span>
			</div>
		)
	}
}

export default TmIcon
