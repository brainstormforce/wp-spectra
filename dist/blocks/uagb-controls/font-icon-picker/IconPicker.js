import Picker from "./Picker"
import times from "lodash/times"

const { __ } = wp.i18n
const { Fragment } = wp.element

class IconPicker extends React.Component {

	render() {

		return (

			<div className="uagb-icon-picker-wrap">
				<div class="astra-widget-icon-selector-actions">
					<div class="uagb-select-icon button open">
						<div class="uagb-selected-icon"></div>
						{ __( 'Choose Icon' ) }
					</div>
				</div>
				<input type="search" placeholder={ __( 'Search Icon' ) } className="search-icon" />
				<Picker />
			</div>
		)
	}
}

export default IconPicker
