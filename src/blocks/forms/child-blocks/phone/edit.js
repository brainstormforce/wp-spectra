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

		const { attributes, setAttributes } = this.props

        const {
			block_id,
			phoneRequired
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
				</PanelBody>
			)
		}

		return (
			<Fragment>
				<InspectorControls>
					{ phoneInspectorControls() }
				</InspectorControls>
				<div className={ classnames(
					"uagb-forms-phone-wrap",
					`uagb-block-${ block_id }`,
				) }>
					<label className="uagb-forms-phone-label"> { __( "Phone" ) } </label>
					<input type="text" required={ phoneRequired } className="uagb-forms-phone-input"/>
				</div>
			</Fragment>
		)
	}
}

export default UAGBFormsPhoneEdit
