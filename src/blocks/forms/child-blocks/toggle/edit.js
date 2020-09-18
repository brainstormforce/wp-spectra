/**
 * BLOCK: Forms - Toggle - Edit
 */

import classnames from "classnames"
import styling from "./styling"
const { __ } = wp.i18n

const {
	Component,
	Fragment
} = wp.element

const {
	PanelBody,
	ToggleControl,
	SelectControl,
} = wp.components
const {
	InspectorControls,
	RichText,
	ColorPalette       
} = wp.blockEditor

class UAGBFormsToggleEdit extends Component {

	constructor() {
		super( ...arguments )
	}

	componentDidMount() {

		const { attributes, setAttributes } = this.props

		// Assigning block_id in the attribute.
		setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-forms-toggle-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
		
	}

	componentDidUpdate(prevProps, prevState) {
		var element = document.getElementById( "uagb-style-forms-toggle-" + this.props.clientId.substr( 0, 8 ) )

		if( null !== element && undefined !== element ) {
			element.innerHTML = styling( this.props )
		}
    }
	
	
	render() {
		
		const { attributes, setAttributes,isSelected } = this.props
		
        const {
			block_id,
			toggleRequired,
			name,
			toggleStatus,
			layout,
			activeColor
		} = attributes
		
		const toggleInspectorControls = () => {
			
			return (
				<PanelBody
				title={ __( "General" ) }
				initialOpen={ true }
				className="uagb__url-panel-body"
				>
				<p className="uagb-settings-notice">{ __( "Leaving the toggle in On/Off state will set it as a default value on page load for the user." ) }</p>

				<ToggleControl
					label={ __( "Required" ) }
					checked={ toggleRequired }
					onChange={ ( value ) => setAttributes( { toggleRequired: ! toggleRequired } ) }
				/>
				<SelectControl
					label={ __( "Layout" ) }
					value={ layout }
					onChange={ ( value ) => setAttributes( { layout: value } ) }
					options={ [
						{ value: "", label: __( "Square" ) },
						{ value: "round", label: __( "Round" ) },								
					] }
				/>
				<p className="uagb-setting-label">{ __( "Active Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: activeColor }} ></span></span></p>
				<ColorPalette
					value={ activeColor }
					onChange={ ( colorValue ) => setAttributes( { activeColor: colorValue } ) }
					allowReset
				/>
				</PanelBody>
			)
		}
		
		const isRequired = (toggleRequired) ? "required" : "";

		return (
			<Fragment>
				<InspectorControls>
					{ toggleInspectorControls() }
				</InspectorControls>
				<div className={ classnames(
					"uagb-forms-toggle-wrap",
					"uagb-forms-field-set",
					`uagb-block-${ block_id }`,
					
					) }>
					{isSelected && (
						<div className="uagb-forms-required-wrap">
							<ToggleControl
								label={ __( "Required" ) }
								checked={ toggleRequired }
								onChange={ ( value ) => setAttributes( { toggleRequired: ! toggleRequired } ) }
							/>							
						</div>
					)}
					<RichText
						tagName="div"
						placeholder={ __( "Name" ) }
						value={ name }
						onChange={ ( value ) => setAttributes( { name: value } ) }
						className={`uagb-forms-toggle-label ${isRequired} uagb-forms-input-label`}
						multiline={ false }
					/>
					<label class="uagb-switch">
						<input 
							type="checkbox"
							className="uagb-forms-toggle-input"
							checked={toggleStatus}
							onChange={ ( value ) => setAttributes( { toggleStatus: ! toggleStatus } ) }
						/>
						<span class={`uagb-slider ${layout}`}></span>
					</label>	
				</div>
			</Fragment>
		)
	}
}

export default UAGBFormsToggleEdit
