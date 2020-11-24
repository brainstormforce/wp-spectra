/**
 * BLOCK: Forms - Checkbox - Edit
 */

import classnames from "classnames"
const { __ } = wp.i18n

const {
	Component,
	Fragment
} = wp.element

const {
	PanelBody,
	Button,
	ToggleControl,
	
} = wp.components
const {
	InspectorControls,
	RichText,
} = wp.blockEditor

class UAGBFormsCheckboxEdit extends Component {

	constructor() {
		super( ...arguments )
		this.state = { optionsstate:  [ { "optiontitle": "Option Name 1" } ] };
	}

	componentDidMount() {

		const { attributes, setAttributes } = this.props

		// Assigning block_id in the attribute.
		setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-forms-checkbox-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
		
	}

	componentDidUpdate(prevProps, prevState) {
    }
	
	render() {

		const { attributes, setAttributes, isSelected } = this.props

        const {
			block_id,
			checkboxRequired,
			options,
			checkboxName
		} = attributes
		const checkboxInspectorControls = () => {

			return (
				<PanelBody
					title={ __( "General" ) }
					initialOpen={ true }
					className="uagb__url-panel-body"
				>
					<ToggleControl
						label={ __( "Required" ) }
						checked={ checkboxRequired }
						onChange={ ( value ) => setAttributes( { checkboxRequired: ! checkboxRequired } ) }
					/>
				</PanelBody>
			)
		}

		const addOption = () => {
			const newOption ={ "optiontitle": `Option Name ${options.length + 1}`,"optionvalue": `Option Value ${options.length + 1}` }
			options[options.length] = newOption; 
			const addnewOptions = options.map( ( item, thisIndex ) => {				
				return item
			} )

			setAttributes({ options:addnewOptions });
			this.setState({optionsstate : addnewOptions});
		};

		const changeOption = (e, index) => {			
			const editOptions = options.map( ( item, thisIndex ) => {
				if ( index === thisIndex ) {
					item = { ...item, ...e }
				}
				return item
			} )
			
			setAttributes({ options: editOptions });
			this.setState({ optionsstate : editOptions });
			
		};

		const deleteOption = index => {
			const deleteOptions = options.map( ( item, thisIndex ) => {
				if ( index === thisIndex ) {
					 options.splice(index, 1)
					item = { options }
				}
				return item
			} )
		
			this.setState({optionsstate : deleteOptions});
			setAttributes({ deleteOptions });			

		};
		
		
		const editView = options.map((s, index) => {
			
			return (
				<div className="uagb-form-checkbox-option">
					<input												
						type="checkbox"
						name={`checkbox-${block_id}`}
						value={s.optiontitle}						
					/>	
					<input
						className="uagb-inner-input-view"
						aria-label={s.optiontitle}
						onChange={e => changeOption( { optiontitle: e.target.value,optionvalue: e.target.value }, index)}
						type="text"
						value={s.optiontitle}						
					/>
					<input
						className="uagb-inner-input-view"
						aria-label={s.optionvalue}
						onChange={e => changeOption( { optionvalue: e.target.value }, index)}
						type="text"
						value={s.optionvalue}						
					/>					
					<Button 
						className="uagb-form-checkbox-option-delete"
        				icon="trash"
        				label="Remove" onClick={ () => deleteOption(index) }
    				/>
				</div>
			);
		});

		const CheckboxView = () => {

			return  (	
					
				options.map((o, index) => {
					var optionvalue = o.optionvalue;
					var value = optionvalue.replace(/\s+/g, '-').toLowerCase();
					return (
						<Fragment>
						<input type="checkbox" id={`checkbox-${value}-${block_id}`} name={ `${checkboxName}[]` } value={value} required={checkboxRequired} />
						<label for={`checkbox-${value}-${block_id}`}>{o.optiontitle}</label><br/>						
						</Fragment>
					);
				})
			)			
		};
		

		const isRequired = (checkboxRequired) ? "required" : "";

		return (
			<Fragment>
				<InspectorControls>
					{ checkboxInspectorControls() }
				</InspectorControls>
				<div className={ classnames(
					"uagb-forms-checkbox-wrap",
					"uagb-forms-field-set",
					`uagb-block-${ block_id }`,
				) }>
					{isSelected && (
					<div className="uagb-forms-required-wrap">
						<ToggleControl
							label={ __( "Required" ) }
							checked={ checkboxRequired }
							onChange={ ( value ) => setAttributes( { checkboxRequired: ! checkboxRequired } ) }
						/>
					</div>
					)}
					<RichText
						tagName="div"
						placeholder={ __( "Checkbox Title" ) }
						value={ checkboxName }
						onChange={ ( value ) => setAttributes( { checkboxName: value } ) }
						className={`uagb-forms-checkbox-label ${isRequired} uagb-forms-input-label`}
						multiline={ false }
						id={ block_id }
					/>
					{isSelected && (
						<Fragment>														
							{editView}
							<div className="uagb-forms-checkbox-controls">
								<div>
									<Button isSecondary onClick={addOption}>{ __(" + Add Option ") }</Button>									
								</div>								
							</div>
						</Fragment>
						)}
					
					{!isSelected && (<CheckboxView/>)}
					</div>
			</Fragment>
		)
	}
}

export default UAGBFormsCheckboxEdit