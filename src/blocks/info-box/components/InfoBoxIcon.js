const {
	RichText,
} = wp.editor

const { __ } = wp.i18n

class InfoBoxIcon extends React.Component {

	render() {

		const { attributes } = this.props     
        
		return (
			<div className="uagb-image-icon-content uagb-imgicon-wrap " >
				<div className="uagb-icon-wrap">
					<span className="uagb-icon">
						<span className={attributes.icon} ></span>
					</span>
				</div>
			</div>            			
		)
	}
}

export default InfoBoxIcon
