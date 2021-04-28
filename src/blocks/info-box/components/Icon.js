import renderSVG from "@Controls/renderIcon"

const {
	RichText,
} = wp.blockEditor

const { __ } = wp.i18n

class Icon extends React.Component {

	render() {

		const { attributes } = this.props

		return (
			<div className="uagb-ifb-image-icon-content uagb-ifb-imgicon-wrap" >
				<div className="uagb-ifb-icon-wrap">
					<span className="uagb-ifb-icon">
						{ renderSVG(attributes.icon) }
					</span>
				</div>
			</div>
		)
	}
}

export default Icon
