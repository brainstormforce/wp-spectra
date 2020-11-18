/**
 * BLOCK: Forms - Phone - Edit
 */

import classnames from "classnames"

const { __ } = wp.i18n

const {
	Component,
	Fragment
} = wp.element

const {
	PanelBody,	
	ToggleControl,
	SelectControl	
} = wp.components
const {
	InspectorControls,
	RichText,
} = wp.blockEditor

class UAGBFormsPhoneEdit extends Component {

	constructor() {
		super( ...arguments )
		
	}

	componentDidMount() {

		const { attributes, setAttributes } = this.props

		// Assigning block_id in the attribute.
		setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-forms-phone-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
		
	}

	componentDidUpdate(prevProps, prevState) {
    }
	
	render() {

		const { attributes, setAttributes, isSelected } = this.props

        const {
			block_id,
			phoneRequired,
			phoneName,
			pattern
		} = attributes
		
		const phoneInspectorControls = () => {

			return (
				<PanelBody
					title={ __( "General" ) }
					initialOpen={ true }
					className="uagb__url-panel-body"
				>
					<ToggleControl
						label={ __( "Required" ) }
						checked={ phoneRequired }
						onChange={ ( value ) => setAttributes( { phoneRequired: ! phoneRequired } ) }
					/>
					<SelectControl
					label={ __( "Pattern" ) }
					value={ pattern }
					options={ [
						{ label: 'None', value: '' },
						{ label: '123-45-678', value: '[0-9]{3}-[0-9]{2}-[0-9]{3}' },
						{ label: '123-456-6789', value: '[0-9]{3}-[0-9]{3}-[0-9]{4}' },

					] }
					onChange={ ( pattern ) => { setAttributes( { pattern } ) } }
					/>
				</PanelBody>
			)
		}	
		var placeholder = "";
		if(pattern == "[0-9]{3}-[0-9]{2}-[0-9]{3}"){
			placeholder = "123-45-678"
		}else if(pattern == "[0-9]{3}-[0-9]{3}-[0-9]{4}"){
			placeholder = "123-456-6789"
		}
	
		var phone_html = "";
		if(pattern != ""){
			phone_html = <input type="tel" placeholder={ placeholder }  pattern={pattern} required={ phoneRequired } className="uagb-forms-phone-input uagb-forms-input" name={ block_id }/>
		}else{
			phone_html = <input type="tel"  required={ phoneRequired } className="uagb-forms-phone-input uagb-forms-input" name={ block_id }/>
		}
		
		const isRequired = (phoneRequired) ? "required" : "";

		return (
			<Fragment>
				<InspectorControls>
					{ phoneInspectorControls() }
				</InspectorControls>
				<div className={ classnames(
					"uagb-forms-phone-wrap",
					"uagb-forms-field-set",
					`uagb-block-${ block_id }`,
				) }>
					{isSelected && (
					<div className="uagb-forms-required-wrap">
						<ToggleControl
							label={ __( "Required" ) }
							checked={ phoneRequired }
							onChange={ ( value ) => setAttributes( { phoneRequired: ! phoneRequired } ) }
						/>
					</div>
					)}
					<RichText
						tagName="div"
						placeholder={ __( "Phone Name" ) }
						value={ phoneName }
						onChange={ ( value ) => setAttributes( { phoneName: value } ) }
						className={`uagb-forms-phone-label ${isRequired} uagb-forms-input-label`}
						multiline={ false }
						id={ block_id }
					/>
					{phone_html}
				</div>
			</Fragment>
		)
	}
}

export default UAGBFormsPhoneEdit
