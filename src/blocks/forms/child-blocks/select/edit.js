/**
 * BLOCK: Forms - Select - Edit
 */

import classnames from "classnames"
// import { clone, pullAt, set, assign } from "lodash";
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

class UAGBFormsSelectEdit extends Component {

	constructor() {
		super( ...arguments )
		this.state = { optionsstate: null };
	}

	componentDidMount() {

		const { attributes, setAttributes } = this.props

		// Assigning block_id in the attribute.
		setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-forms-select-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
		
	}

	componentDidUpdate(prevProps, prevState) {
    }
	
	render() {

		const { attributes, setAttributes } = this.props

        const {
			block_id,
			selectRequired,
			options
		} = attributes
		
		const selectInspectorControls = () => {

			return (
				<PanelBody
					title={ __( "General" ) }
					initialOpen={ true }
					className="uagb__url-panel-body"
				>
					<ToggleControl
						label={ __( "Required" ) }
						checked={ selectRequired }
						onChange={ ( value ) => setAttributes( { selectRequired: ! selectRequired } ) }
					/>
				</PanelBody>
			)
		}

		const addSelect = () => {
			let newOption = "Option " + (options.length + 1);
			
			options.push(newOption);
			console.log((options));
	
			setAttributes({ options:options });
			this.setState({optionsstate : this.state.optionsstate});
		};
		const optionChange = (e, index) => {
			
			
			options[index] =  e.target.value;
				
				
				setAttributes({ options: options });
				console.log(options);
		};
		const handleDelete = index => {
			// let new_options = clone(options);
	
			// let deleted_options = pullAt(options, [index]); //dosen't matter :-D
			options.splice(index, 1);
			// setAttributes({ options: deleted_options });
			// setCheckboxes(new_options);
			console.log(options);
			this.setState({optionsstate : this.state.optionsstate});
		};
		const editView = options.map((s, index) => {
			return (
				<div className="uagb-form-select-option">
					<input
						aria-label={s}
						onChange={e => optionChange(e, index)}
						type="text"
						value={s}
						
					/>					
					<IconButton
        				icon="trash"
        				label="Remove" onClick={() => handleDelete(index)}
    				/>
				</div>
			);
		});
		const SelectView = () => {
			return (
				<select>
					<option value="" disabled selected>
						Select your option
					</option>
					{options.map((o, index) => {
						return <option value={o}>{o}</option>;
					})}
				</select>
			);
		};
		

		return (
			<Fragment>
				<InspectorControls>
					{ selectInspectorControls() }
				</InspectorControls>
				<div className={ classnames(
					"uagb-forms-select-wrap",
					`uagb-block-${ block_id }`,
				) }>
					{this.props.isSelected && (
						<Fragment>
							<label>Select</label>
							
							{editView}
						</Fragment>
						)}
					{this.props.isSelected && (
						<div className="uagb-forms-select-controls">
								<div>
									<Button isDefault optionsstate={this.optionsstate} onClick={addSelect}>{ __("+ Add Option") }</Button>									
								</div>								
							</div>
						)}
					{!this.props.isSelected && (<SelectView/>)}
					</div>
			</Fragment>
		)
	}
}

export default UAGBFormsSelectEdit
