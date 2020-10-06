/**
 * BLOCK: Forms - Name - Edit
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
	TextControl
} = wp.components
const {
	InspectorControls,
	RichText,
} = wp.blockEditor

class UAGBFormsNameEdit extends Component {

	constructor() {
		super( ...arguments )
	}

	componentDidMount() {

		const { attributes, setAttributes } = this.props

		// Assigning block_id in the attribute.
		setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-forms-name-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
		
	}

	componentDidUpdate(prevProps, prevState) {
    }
	
	render() {

		const { attributes, setAttributes,isSelected } = this.props

        const {
			block_id,
			nameRequired,
			name,
			placeholder
		} = attributes
		
		const nameInspectorControls = () => {

			return (
				<PanelBody
					title={ __( "General" ) }
					initialOpen={ true }
					className="uagb__url-panel-body"
				>
					<ToggleControl
						label={ __( "Required" ) }
						checked={ nameRequired }
						onChange={ ( value ) => setAttributes( { nameRequired: ! nameRequired } ) }
					/>
					<TextControl
					 	label="Placeholder"
						value={ placeholder }
						onChange={ ( value ) => setAttributes( { placeholder: value } ) }
						placeholder={__( "Placeholder" )}
					/>
				</PanelBody>
			)
		}

		const isRequired = (nameRequired) ? "required" : "";
		return (
			<Fragment>
				<InspectorControls>
					{ nameInspectorControls() }
				</InspectorControls>
				<div className={ classnames(
					"uagb-forms-name-wrap",
					"uagb-forms-field-set",
					`uagb-block-${ block_id }`,
					
				) }>
					{isSelected && (
						<div className="uagb-forms-required-wrap">
							<ToggleControl
								label={ __( "Required" ) }
								checked={ nameRequired }
								onChange={ ( value ) => setAttributes( { nameRequired: ! nameRequired } ) }
							/>
						</div>
					)}
					<RichText
						tagName="div"
						placeholder={ __( "Name" ) }
						value={ name }
						onChange={ ( value ) => setAttributes( { name: value } ) }
						className={`uagb-forms-name-label ${isRequired} uagb-forms-input-label`}
						multiline={ false }
					/>					
					<input type="text" placeholder={placeholder} required={ nameRequired } className="uagb-forms-name-input uagb-forms-input"/>
				</div>
			</Fragment>
		)
	}
}

export default UAGBFormsNameEdit
