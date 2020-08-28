/**
 * BLOCK: Forms - Email - Edit
 */

import classnames from "classnames"

const { __ } = wp.i18n

const {
	Component,
} = wp.element

const {
	RichText,
} = wp.blockEditor

const {	
	ToggleControl,
} = wp.components

class UAGBFormsEmailEdit extends Component {

	constructor() {
		super( ...arguments )
	}

	componentDidMount() {

		const { attributes, setAttributes } = this.props

		// Assigning block_id in the attribute.
		setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-forms-email-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
		
	}

	componentDidUpdate(prevProps, prevState) {
    }
    
	render() {

		const { attributes,setAttributes,isSelected } = this.props

        const {
			block_id,
			name,
			required
		} = attributes
		
		const isRequired = (required) ? "required" : "";

		return (
			<div className={ classnames(
				"uagb-forms-email-wrap",
				"uagb-forms-field-set",
				`uagb-block-${ block_id }`,
			) }>
				{isSelected && (
					<div className="uagb-forms-required-wrap">
						<ToggleControl
							label={ __( "Required" ) }
							checked={ required }
							onChange={ ( value ) => setAttributes( { required: ! required } ) }
						/>
					</div>
				)}
				<RichText
						tagName="div"
						placeholder={ __( "Email" ) }
						value={ name }
						onChange={ ( value ) => setAttributes( { name: value } ) }
						className={`uagb-forms-email-label ${isRequired}`}
						multiline={ false }
				/>
				<input type="email" className="uagb-forms-email-input" required={ required }/>
			</div>
		)
	}
}

export default UAGBFormsEmailEdit
