/**
 * BLOCK: Forms - Textarea - Edit
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
} = wp.components
const {
	InspectorControls,
	RichText,
} = wp.blockEditor

class UAGBFormsTextareaEdit extends Component {

	constructor() {
		super( ...arguments )
	}

	componentDidMount() {

		const { attributes, setAttributes } = this.props

		// Assigning block_id in the attribute.
		setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-forms-textarea-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
		
	}

	componentDidUpdate(prevProps, prevState) {
    }
	
	render() {

		const { attributes, setAttributes, isSelected } = this.props

        const {
			block_id,
			textareaRequired,
			textareaName
		} = attributes
		
		const textareaInspectorControls = () => {

			return (
				<PanelBody
					title={ __( "General" ) }
					initialOpen={ true }
					className="uagb__url-panel-body"
				>
					<ToggleControl
						label={ __( "Required" ) }
						checked={ textareaRequired }
						onChange={ ( value ) => setAttributes( { textareaRequired: ! textareaRequired } ) }
					/>
				</PanelBody>
			)
		}

		const isRequired = (textareaRequired) ? "required" : "";

		return (
			<Fragment>
				<InspectorControls>
					{ textareaInspectorControls() }
				</InspectorControls>
				<div className={ classnames(
					"uagb-forms-textarea-wrap",
					"uagb-forms-field-set",
					`uagb-block-${ block_id }`,
				) }>
					{isSelected && (
					<div className="uagb-forms-required-wrap">
						<ToggleControl
							label={ __( "Required" ) }
							checked={ textareaRequired }
							onChange={ ( value ) => setAttributes( { textareaRequired: ! textareaRequired } ) }
						/>
					</div>
					)}
					<RichText
						tagName="div"
						placeholder={ __( "Textarea Name" ) }
						value={ textareaName }
						onChange={ ( value ) => setAttributes( { textareaName: value } ) }
						className={`uagb-forms-textarea-label ${isRequired}`}
						multiline={ false }
					/>					
					<textarea required={ textareaRequired } className="uagb-forms-textarea-input" rows="4" ></textarea>
					
				</div>
			</Fragment>
		)
	}
}

export default UAGBFormsTextareaEdit
