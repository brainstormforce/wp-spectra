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
			name,
			additonalVal,
			minYear,
			minMonth,
			minDay,
			maxYear,
			maxMonth,
			maxDay
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
					<ToggleControl
						label={ __( "Additional Validation" ) }
						checked={ additonalVal }
						onChange={ ( value ) => setAttributes( { additonalVal: ! additonalVal } ) }
					/>
					{ additonalVal && (
						<Fragment>
							<p>Minimum Date</p>
							<TextControl
							className={"minDate"}					
							value={ parseInt(minYear)  }
							onChange={ ( value ) => setAttributes( { minYear:  value } ) }
							placeholder="YYYY"
							type="number"
							/>
							<b> - </b>
							<TextControl
							className={"minDate"}							
							value={ parseInt(minMonth)  }
							onChange={ ( minMonth ) => setAttributes( { minMonth } ) }
							placeholder="MM"
							type="number"
							/> 
							<b> - </b>
							<TextControl
							className={"minDate"}							
							value={ parseInt(minDay)  }
							onChange={ ( minDay ) => setAttributes( { minDay } ) }
							placeholder="DD"
							type="number"
							/>
							<p>Maximum Date</p>
							<TextControl
							className={"maxDate"}					
							value={ parseInt(maxYear)  }
							onChange={ ( value ) => setAttributes( { maxYear:  value } ) }
							placeholder="YYYY"
							type="number"					
							/>
							<b> - </b>
							<TextControl
							className={"maxDate"}							
							value={ parseInt(maxMonth)  }
							onChange={ ( maxMonth ) => setAttributes( { maxMonth } ) }
							placeholder="MM"
							type="number"
							/> 
							<b> - </b>
							<TextControl
							className={"maxDate"}							
							value={ parseInt(maxDay)  }
							onChange={ ( maxDay ) => setAttributes( { maxDay } ) }
							placeholder="DD"
							type="number"
							/>
						</Fragment>
						
					)}
				</PanelBody>
			)
		}
		
	var validation_min_value =""
	var validation_max_value =""
	
	if( minYear && minMonth && minDay ){
		validation_min_value = minYear+"-"+minMonth+"-"+minDay			
	}

	if( maxYear && maxMonth && maxDay ){	
		validation_max_value = maxYear+"-"+maxMonth+"-"+maxDay		
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

					{additonalVal &&(
					<input type="date" className="uagb-forms-date-input" name={name} required={ dateRequired } min={validation_min_value} max={validation_max_value}/>
					)}	

					{!additonalVal &&(
					<input type="date" className="uagb-forms-date-input" name={name} required={ dateRequired }/>
					)}	
									
				</div>
			</Fragment>
		)
	}
}

export default UAGBFormsDateEdit
