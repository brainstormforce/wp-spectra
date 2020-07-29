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
		this.state = { optionsstate: null };
		
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
			console.log(options);
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

		const addSelect = () => {
			let newOption = "Option Name";
			
			options.push(newOption);
			console.log((options));
	
			setAttributes({ options:options });
			this.setState({optionsstate : options});
		};

		const optionChange = (e, index) => {
			options[index] =  e.target.value;
			setAttributes({ options: options });
			console.log(options);
			this.setState({optionsstate : this.state.optionsstate});

		};
		const handleDelete = index => {
		
			options.splice(index, 1);
			setAttributes({ options });
			
			console.log(options);
			this.setState({optionsstate : this.state.optionsstate});
		};

		const editView = options.map((s, index) => {
			return (
				<div className={`uagb-form-checkbox-option uagb-block-${ block_id }`}>
					<input type="checkbox" name={s} value={s}></input>
					<input
						aria-label={s}
						onChange={e => optionChange(e, index)}
						type="text"
						value={s}
						
					/>					
					<Button 
						className="uagb-form-checkbox-option-delete"
        				icon="trash"
        				label="Remove" onClick={() => handleDelete(index)}
    				/>
				</div>
			);
		});
		const CheckboxView = () => {
			return (
				
				<div className={ classnames(
					"uagb-form-checkbox-wrapper",
					`uagb-block-${ block_id }`,
					) }>
					
					{options.map((o, index) => {
						var optionvalue = o.replace(/\s+/g, '-').toLowerCase();
						return (<Fragment>
							<input type="checkbox"  name={optionvalue} value={optionvalue}/>
							<label for={optionvalue}>{o}</label><br/>
							</Fragment>);
					})}
				</div>
				
			);
		};
		

		return (
			<Fragment>
				<InspectorControls>
					{ checkboxInspectorControls() }
				</InspectorControls>
				<div className={ classnames(
					"uagb-forms-checkbox-wrap",
					`uagb-block-${ block_id }`,
				) }>
					<RichText
						tagName="div"
						placeholder={ __( "checkbox Title" ) }
						value={ checkboxName }
						onChange={ ( value ) => setAttributes( { checkboxName: value } ) }
						className='uagb-forms-checkbox-label'
						multiline={ false }
					/>
					{isSelected && (
						<Fragment>														
							{editView}
							<div className="uagb-forms-checkbox-controls">
								<div>
									<Button isSecondary onClick={addSelect}>{ __(" + Add Option ") }</Button>									
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
