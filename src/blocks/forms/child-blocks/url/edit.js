/**
 * BLOCK: Forms - URL - Edit
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

class UAGBFormsUrlEdit extends Component {

	constructor() {
		super( ...arguments )
	}

	componentDidMount() {

		const { attributes, setAttributes } = this.props

		// Assigning block_id in the attribute.
		setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-forms-url-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
		
	}

	componentDidUpdate(prevProps, prevState) {
    }
	
	render() {

		const { attributes, setAttributes } = this.props

        const {
			block_id,
			urlRequired,
			urlName
		} = attributes
		
		const urlInspectorControls = () => {

			return (
				<PanelBody
					title={ __( "General" ) }
					initialOpen={ true }
					className="uagb__url-panel-body"
				>
					<ToggleControl
						label={ __( "Required" ) }
						checked={ urlRequired }
						onChange={ ( value ) => setAttributes( { urlRequired: ! urlRequired } ) }
					/>
				</PanelBody>
			)
		}

		return (
			<Fragment>
				<InspectorControls>
					{ urlInspectorControls() }
				</InspectorControls>
				<div className={ classnames(
					"uagb-forms-url-wrap",
					`uagb-block-${ block_id }`,
				) }>
					<RichText
						tagName="div"
						placeholder={ __( "URL Name" ) }
						value={ urlName }
						onChange={ ( value ) => setAttributes( { urlName: value } ) }
						className='uagb-forms-url-label'
						multiline={ false }
					/>
					<input type="url" required={ urlRequired } className="uagb-forms-url-input"/>					
					
					
				</div>
			</Fragment>
		)
	}
}

export default UAGBFormsUrlEdit
