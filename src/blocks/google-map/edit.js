/**
 * BLOCK: UAGB - Section Edit Class
 */

// Import classes
import classnames from "classnames"
import times from "lodash/times"

const { __ } = wp.i18n

const AnyReactComponent = ({ text }) => <div>{text}</div>

const {
	Component,
	Fragment,
} = wp.element

const {
	AlignmentToolbar,
	BlockControls,
	BlockAlignmentToolbar,
	InspectorControls,
	RichText,
	PanelColorSettings,
	URLInput
} = wp.editor

const {
	ToggleControl,
	PanelBody,
	SelectControl,
	RangeControl,
	TextControl,
	TextareaControl
} = wp.components


class UAGBGoogleMap extends Component {

	constructor() {
		super( ...arguments )

		this.toggleStreetViewControl = this.toggleStreetViewControl.bind( this )
		this.toggleZoomControl = this.toggleZoomControl.bind( this )
		this.toggleMapTypeControl = this.toggleMapTypeControl.bind( this )
		this.toggleFullscreenControl = this.toggleFullscreenControl.bind( this )
		this.toggleGestureHandling = this.toggleGestureHandling.bind( this )
		this.toggleCluster = this.toggleCluster.bind( this )
	}

	toggleStreetViewControl() {
		const { streetViewControl } = this.props.attributes
		const { setAttributes } = this.props

		setAttributes( { streetViewControl: ! streetViewControl } )
	}

	toggleZoomControl() {
		const { zoomControl } = this.props.attributes
		const { setAttributes } = this.props

		setAttributes( { zoomControl: ! zoomControl } )
	}

	toggleMapTypeControl() {
		const { mapTypeControl } = this.props.attributes
		const { setAttributes } = this.props

		setAttributes( { mapTypeControl: ! mapTypeControl } )
	}

	toggleFullscreenControl() {
		const { fullscreenControl } = this.props.attributes
		const { setAttributes } = this.props

		setAttributes( { fullscreenControl: ! fullscreenControl } )
	}

	toggleGestureHandling() {
		const { gestureHandling } = this.props.attributes
		const { setAttributes } = this.props

		setAttributes( { gestureHandling: ! gestureHandling } )
	}

	toggleCluster() {
		const { cluster } = this.props.attributes
		const { setAttributes } = this.props

		setAttributes( { cluster: ! cluster } )
	}

	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId } )

		// Pushing Style tag for this block css.
		const $script = document.createElement( "script" )
		$script.setAttribute( "id", "uagb-style-google-map-" + this.props.clientId )
		document.body.appendChild( $script )
	}

	saveLocation( value, index ) {
		const { attributes, setAttributes } = this.props
		const { markers } = attributes

		const newItems = markers.map( ( item, thisIndex ) => {
			if ( index === thisIndex ) {
				item = { ...item, ...value }
			}

			return item
		} )
		setAttributes( {
			markers: newItems,
		} )
	}

	init( props ) {

		uagb_google_map_init( props.attributes, props.clientId )
	}

	render() {

		const { attributes, setAttributes, isSelected } = this.props

		const {
			align,
			className,
			marker_count,
			markers,
			mapType,
			mapSkin,
			fullscreenControl,
			zoom,
			gestureHandling,
			height,
			streetViewControl,
			mapTypeControl,
			zoomControl,
			cluster
		} = attributes

		const markerControls = ( index ) => {
			return (
				<PanelBody key={index}
					title={ __( "Marker" ) + " " + ( index + 1 ) + " " + __( "Settings" ) }
					initialOpen={ false }
				>
					<TextControl
						type="string"
						label={ __( "Latitude" ) }
						value={ markers[ index ].lat }
						placeholder={ __( "Latitude" ) }
						onChange={ value => {
							this.saveLocation( { lat: value }, index )
						} }
					/>
					<p className="uagb-note"><a href="https://www.latlong.net/" target="_blank">{ __( "Click here" ) }</a> { __( "to find Latitude of your location." ) }</p>
					<TextControl
						type="string"
						label={ __( "Longitude" ) }
						value={ markers[ index ].lon }
						placeholder={ __( "Latitude" ) }
						onChange={ value => {
							this.saveLocation( { lon: value }, index )
						} }
					/>
					<p className="uagb-note"><a href="https://www.latlong.net/" target="_blank">{ __( "Click here" ) }</a> { __( "to find Longitude of your location." ) }</p>
					<TextControl
						type="string"
						label={ __( "Title" ) }
						value={ markers[ index ].title }
						placeholder={ __( "Title" ) }
						onChange={ value => {
							this.saveLocation( { title: value }, index )
						} }
					/>
					<SelectControl
						label={ __( "Display Info Window" ) }
						value={ markers[ index ].infoTrigger }
						options={ [
							{ value: "none", label: __( "None" ) },
							{ value: "click", label: __( "On Click" ) },
							{ value: "load", label: __( "On Load" ) },
						] }
						onChange={ value => {
							this.saveLocation( { infoTrigger: value }, index )
						} }
					/>
					{ "none" != markers[ index ].infoTrigger &&
						<Fragment>
							<TextControl
								type="string"
								label={ __( "Title" ) }
								value={ markers[ index ].title }
								placeholder={ __( "Title" ) }
								onChange={ value => {
									this.saveLocation( { title: value }, index )
								} }
							/>
							<TextareaControl
								label={ __( "Address Infomation" ) }
								value={ markers[ index ].desc }
								onChange={ value => {
									this.saveLocation( { desc: value }, index )
								} }
							/>
						</Fragment>
					}
				</PanelBody>
			)
		}

		var element = document.getElementById( "uagb-style-google-map-" + this.props.clientId )

		if( null != element && "undefined" != typeof element ) {
			element.innerHTML = this.init( this.props )
		}

		return (
			<Fragment>
				<BlockControls>
					<BlockAlignmentToolbar
						value={ align }
						onChange={ ( value ) => {
							setAttributes( { align: value } )
						} }
						controls={ [ "left", "center", "right", "full" ] }
					/>
				</BlockControls>
				<InspectorControls>
					<PanelBody
						title={ __( "Marker Count" ) }
						initialOpen={ true }
					>
						<RangeControl
							label={ __( "Number of Markers" ) }
							value={ marker_count }
							onChange={ newCount => {

								let cloneMarkers = [ ...markers ]

								if ( cloneMarkers.length < newCount ) {

									const incAmount = Math.abs( newCount - cloneMarkers.length )

									{ times( incAmount, n => {

										cloneMarkers.push( {
											lat: cloneMarkers[ 0 ].lat,
											lon: cloneMarkers[ 0 ].lon,
											title: cloneMarkers[ 0 ].title,
											desc: cloneMarkers[ 0 ].desc,
											infoTrigger: cloneMarkers[ 0 ].infoTrigger,
										} )
									} ) }

									setAttributes( { markers: cloneMarkers } )
								}
								setAttributes( { marker_count: newCount } )
							} }
							min={ 1 }
							max={ 50 }
						/>
					</PanelBody>
					{ times( marker_count, n => markerControls( n ) ) }
					<PanelBody
						title={ __( "Layout" ) }
						initialOpen={ false }
					>
						<SelectControl
							label={ __( "Map Type" ) }
							value={ mapType }
							onChange={ ( value ) => setAttributes( { mapType: value } ) }
							options={ [
								{ value: "roadmap", label: __( "Road Map" ) },
								{ value: "satellite", label: __( "Satellite" ) },
								{ value: "hybrid", label: __( "Hybrid" ) },
								{ value: "terrain", label: __( "Terrain" ) },
							] }
						/>
						{ "satellite" != mapType &&
							<Fragment>
								<SelectControl
									label={ __( "Map Skin" ) }
									value={ mapSkin }
									onChange={ ( value ) => setAttributes( { mapSkin: value } ) }
									options={ [
										{ value: "standard", label: __( "Standard" ) },
										{ value: "silver", label: __( "Silver" ) },
										{ value: "dark", label: __( "Dark" ) },
										{ value: "night", label: __( "Night" ) },
										{ value: "aubergine", label: __( "Aubergine" ) },
										{ value: "aqua", label: __( "Aqua" ) },
										{ value: "classic_blue", label: __( "Classic Blue" ) },
										{ value: "earth", label: __( "Earth" ) },
										{ value: "magnesium", label: __( "Magnesium" ) },
									] }
								/>
							</Fragment>
						}
						<RangeControl
							label={ __( "Map Zoom" ) }
							value={ zoom }
							onChange={ ( value ) => setAttributes( { zoom: value } ) }
							min={ 1 }
							max={ 22 }
						/>
						<RangeControl
							label={ __( "Map Height" ) }
							value={ height }
							onChange={ ( value ) => setAttributes( { height: value } ) }
							min={ 1 }
							max={ 1200 }
						/>
					</PanelBody>
					<PanelBody
						title={ __( "Controls" ) }
						initialOpen={ false }
					>
						<ToggleControl
							label={ __( "Street View Controls" ) }
							checked={ streetViewControl }
							onChange={ this.toggleStreetViewControl }
						/>
						<ToggleControl
							label={ __( "Map Type Control" ) }
							checked={ mapTypeControl }
							onChange={ this.toggleMapTypeControl }
						/>
						<ToggleControl
							label={ __( "Zoom Control" ) }
							checked={ zoomControl }
							onChange={ this.toggleZoomControl }
						/>
						<ToggleControl
							label={ __( "Fullscreen Control" ) }
							checked={ fullscreenControl }
							onChange={ this.toggleFullscreenControl }
						/>
						<ToggleControl
							label={ __( "Zoom on Scroll" ) }
							checked={ gestureHandling }
							onChange={ this.toggleGestureHandling }
						/>
						<ToggleControl
							label={ __( "Cluster" ) }
							checked={ cluster }
							onChange={ this.toggleCluster }
						/>
						<p className="uagb-note">{ __( "Enable this to group your markers together if you have many in a close proximity to only display one larger marker on your map. Read " ) }<a href="https://uaelementor.com/docs/what-are-cluster-markers-in-uael/" target="_blank" rel="noopener"> { __( "this article" ) } </a> { __( "for more information." ) }</p>
					</PanelBody>
				</InspectorControls>
				<div
					className={ classnames(
						className,
						"uagb-google-map__wrap"
					) }
					style={{ height: height }}
				>
					<div className="uagb-google-map" id={ `uagb-google-map-${ this.props.clientId }` }></div>
				</div>
			</Fragment>
		)
	}
}

export default UAGBGoogleMap
