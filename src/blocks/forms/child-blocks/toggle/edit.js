/**
 * BLOCK: Forms - Toggle - Edit
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
    }
	
	
	render() {
		
		const { attributes, setAttributes,isSelected } = this.props
		
        const {
			block_id,
			toggleRequired,
			name,
			toggleStatus
		} = attributes
		
		const toggleInspectorControls = () => {
			
			return (
				<PanelBody
				title={ __( "General" ) }
				initialOpen={ true }
				className="uagb__url-panel-body"
				>
					<ToggleControl
						label={ __( "Required" ) }
						checked={ toggleRequired }
						onChange={ ( value ) => setAttributes( { toggleRequired: ! toggleRequired } ) }
						/>
				</PanelBody>
			)
		}
		
		
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
						className="uagb-forms-toggle-label"
						multiline={ false }
					/>
					<label class="uagb-switch">
						<input 
							type="checkbox"
							className="uagb-forms-toggle-input"
							checked={toggleStatus}
							onChange={ ( value ) => setAttributes( { toggleStatus: ! toggleStatus } ) }
						/>
						<span class="uagb-slider"></span>
					</label>	
				</div>
			</Fragment>
		)
	}
}

export default UAGBFormsToggleEdit
