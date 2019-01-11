import svg from "./svg"
import times from "lodash/times"

const { __ } = wp.i18n
const el = wp.element.createElement
const { Component, Fragment } = wp.element

class IconPicker extends React.Component {

	get_icons( item ) {
		console.log(item)
		var fontAwesome = item
		//console.log(fontAwesome)
		return 1;
		/*var viewbox_array = ( fontAwesome['svg'].hasOwnProperty("brands") ) ? fontAwesome['svg']['brands']['viewBox'] : fontAwesome['svg']['solid']['viewBox'];
		var path = ( fontAwesome['svg'].hasOwnProperty("brands") ) ? fontAwesome['svg']['brands']['path'] : fontAwesome['svg']['solid']['path'];
		var viewBox = viewbox_array.join( ' ' );
		var terms = fontAwesome['search']['terms'].join( ' ' );
		fontAwesome['search']['terms'].push( index );
		fontAwesome['search']['terms'].push( fontAwesome['styles']['0'] );

		return (
			<li className={ "astra-widget-icon " + index } data-search-terms={terms} data-font={index} data-viewbox={viewBox} data-path={path}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}><path d={path}></path></svg>';
			</li>
		)*/
	}

	render() {
		console.log(Object.keys(svg))
		console.log(Object.keys(svg).length)

		 Object.keys(svg).forEach(function(key) {
			arr.push(svg[key]);
		});

		/*return <p>{this.props.name}</p>*/

		/*const {
			icons: UAGBIcon,
			renderUsing: "class",
			theme: "default",
			value: ctaIcon,
			onChange: this.getCtaicon,
			isMulti: false,
		} = this.props*/

		console.log(arr)

		const icon_count = Object.keys(svg).length;

		return (

				<Fragment>
					<input type="search" placeholder="Search icon..." className="search-icon" />
					<ul className="astra-widget-icons-list">
						{ svg.map( item => this.get_icons( item ) ) }
					</ul>
				</Fragment>
		)
	}
}

export default IconPicker
