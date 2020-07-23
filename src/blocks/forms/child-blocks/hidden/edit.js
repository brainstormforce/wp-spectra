/**
* BLOCK: Forms - hidden - Edit
*/

import classnames from "classnames"

const { __ } = wp.i18n

const {
	Component,
	Fragment
} = wp.element
const {
	PanelBody,	
	TextControl,
} = wp.components
const {
	InspectorControls,
	RichText,
} = wp.blockEditor
class UAGBFormsHiddenEdit extends Component {
	
	constructor() {
		super( ...arguments )
	}
	
	componentDidMount() {
		
		const { attributes, setAttributes } = this.props
		
		// Assigning block_id in the attribute.
		setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )
		
		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-forms-hidden-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
		
	}
	
	componentDidUpdate(prevProps, prevState) {
	}
	
	render() {
		
		const { attributes,setAttributes } = this.props
		
		const {
			block_id,
			hidden_field_name,
			hidden_field_value,
			hidden_field_custom_data_attr
		} = attributes
		
		const hiddenFieldSettings = () => {
			
			return (
				<PanelBody
				title={ __( "General" ) }
				initialOpen={ true }
				className="uagb__url-panel-body"
				>

				<TextControl
				label= {__( "Hidden Field Name" ) }
				value={ hidden_field_name }
				onChange={ ( hidden_field_name ) =>setAttributes( {hidden_field_name} ) }
				/>

				<TextControl
				label= {__( "Value" ) }
				value={ hidden_field_value }
				onChange={ ( hidden_field_value ) =>setAttributes( {hidden_field_value} ) }
				/>				
				
				</PanelBody>
				)
			}

			
			var hidden_field_label = hidden_field_name.replace(/\s+/g, '-').toLowerCase();
			return (
				<Fragment>
				<InspectorControls>
				{ hiddenFieldSettings() }
				</InspectorControls>
				<div className={ classnames(
					"uagb-forms-hidden-wrap",
					`uagb-block-${ block_id }`,
					) }>
					
					<label className={`uagb-forms-hidden-label uagb-form-hidden-${hidden_field_label}` }> { __( hidden_field_name ) } </label>
					<input type="hidden" className="uagb-forms-hidden-input" value={hidden_field_value} />
					</div>
					</Fragment>
					)
				}
			}
			
			export default UAGBFormsHiddenEdit
			