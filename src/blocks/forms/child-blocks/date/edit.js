/**
 * BLOCK: Forms - Date - Edit
 */

import classnames from "classnames"

const { __ } = wp.i18n

const {
	Component,
	Fragment
} = wp.element

const {
	PanelBody,
	SelectControl,
	RangeControl,
	TabPanel,
	ButtonGroup,
	Button,
	Dashicon,
	ToggleControl,
	IconButton
} = wp.components
const {
	InspectorControls,
	RichText,
} = wp.blockEditor

class UAGBFormsDateEdit extends Component {

	constructor() {
		super( ...arguments )
	}

	componentDidMount() {

		const { attributes, setAttributes } = this.props

		// Assigning block_id in the attribute.
		setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-forms-date-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
		
	}

	componentDidUpdate(prevProps, prevState) {
    }
	
	render() {

		const { attributes, setAttributes,isSelected } = this.props

        const {
			block_id,
			dateRequired,
			name
		} = attributes
		
		const dateInspectorControls = () => {

			return (
				<PanelBody
					title={ __( "General" ) }
					initialOpen={ true }
					className="uagb__url-panel-body"
				>
					<ToggleControl
						label={ __( "Required" ) }
						checked={ dateRequired }
						onChange={ ( value ) => setAttributes( { dateRequired: ! dateRequired } ) }
					/>
				</PanelBody>
			)
		}

		return (
			<Fragment>
				<InspectorControls>
					{ dateInspectorControls() }
				</InspectorControls>
				<div className={ classnames(
					"uagb-forms-date-wrap",
					"uagb-forms-field-set",
					`uagb-block-${ block_id }`,
					
				) }>
					{isSelected && (
						<div className="uagb-forms-required-wrap">
							<ToggleControl
								label={ __( "Required" ) }
								checked={ dateRequired }
								onChange={ ( value ) => setAttributes( { dateRequired: ! dateRequired } ) }
							/>
						</div>
					)}
					<RichText
						tagName="div"
						placeholder={ __( "Date" ) }
						value={ name }
						onChange={ ( value ) => setAttributes( { name: value } ) }
						className="uagb-forms-date-label"
						multiline={ false }
					/>					
					<input type="date" className="uagb-forms-date-input" name={name} required={ dateRequired }/>
				</div>
			</Fragment>
		)
	}
}

export default UAGBFormsDateEdit
