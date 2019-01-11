import svg from "./svg"
import times from "lodash/times"

const { __ } = wp.i18n
const { Fragment } = wp.element

class Picker extends React.Component {

	get_icons( index ) {

		var fontAwesome = svg[index]

		var viewbox_array = ( fontAwesome['svg'].hasOwnProperty("brands") ) ? fontAwesome['svg']['brands']['viewBox'] : fontAwesome['svg']['solid']['viewBox'];
		var path = ( fontAwesome['svg'].hasOwnProperty("brands") ) ? fontAwesome['svg']['brands']['path'] : fontAwesome['svg']['solid']['path'];
		var viewBox = viewbox_array.join( ' ' );
		var terms = fontAwesome['search']['terms'].join( ' ' );
		fontAwesome['search']['terms'].push( index );
		fontAwesome['search']['terms'].push( fontAwesome['styles']['0'] );

		return (
			<li key={index} className={ "uagb-widget-icon " + index } data-search-terms={terms} data-font={index} data-viewbox={viewBox} data-path={path}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}><path d={path}></path></svg>
			</li>
		)
	}

	render() {

		const icon_count = Object.keys(svg).length;

		let $this = this

		return (

			<ul className="uagb-icons-list">
			{
				Object.keys( svg ).map( ( item, index ) => {
					return $this.get_icons( item )
				})
			}
			</ul>
		)
	}
}

export default Picker
