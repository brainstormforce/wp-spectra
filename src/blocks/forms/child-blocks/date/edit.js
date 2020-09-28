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
			maxDay,			
		} = attributes

		var validation_min_value = "";
		var validation_max_value = "";

		if( minYear && minMonth && minDay ){
			validation_min_value = minYear+"-"+minMonth+"-"+minDay;			
		}

		if( maxYear && maxMonth && maxDay ){	
			validation_max_value = maxYear+"-"+maxMonth+"-"+maxDay;	
		}

		var invalidDateErrorMsg = "";
		var start = Date.parse(validation_min_value);
		var end = Date.parse(validation_max_value);

		if (start > end) {
			invalidDateErrorMsg = <p className="uagb-forms-date-invalidate">Invalid Date Range selected</p>			
		}

		const YearDefaults = [	
			{ label: '-YYYY-', value: '' },
			{ label: '2031', value: '2031' },
			{ label: '2030', value: '2030' },
			{ label: '2029', value: '2029' },
			{ label: '2028', value: '2028' },
			{ label: '2027', value: '2027' },
			{ label: '2026', value: '2026' },
			{ label: '2025', value: '2025' },
			{ label: '2024', value: '2024' },
			{ label: '2023', value: '2023' },
			{ label: '2022', value: '2022' },
			{ label: '2021', value: '2021' },
			{ label: '2020', value: '2020' },
			{ label: '2019', value: '2019' },
			{ label: '2018', value: '2018' },
			{ label: '2017', value: '2017' },
			{ label: '2016', value: '2016' },
			{ label: '2015', value: '2015' },
			{ label: '2014', value: '2014' },
			{ label: '2013', value: '2013' },
			{ label: '2012', value: '2012' },
			{ label: '2011', value: '2011' },
			{ label: '2010', value: '2010' },
			{ label: '2009', value: '2009' },
			{ label: '2008', value: '2008' },
			{ label: '2007', value: '2007' },
			{ label: '2006', value: '2006' },
			{ label: '2005', value: '2005' },
			{ label: '2004', value: '2004' },
			{ label: '2003', value: '2003' },
			{ label: '2002', value: '2002' },
			{ label: '2001', value: '2001' },
			{ label: '2000', value: '2000' },
			{ label: '1999', value: '1999' },
			{ label: '1998', value: '1998' },
			{ label: '1997', value: '1997' },
			{ label: '1996', value: '1996' },
			{ label: '1995', value: '1995' },
			{ label: '1994', value: '1994' },
			{ label: '1993', value: '1993' },
			{ label: '1992', value: '1992' },
			{ label: '1991', value: '1991' },
			{ label: '1990', value: '1990' },
			{ label: '1989', value: '1989' },
			{ label: '1988', value: '1988' },
			{ label: '1987', value: '1987' },
			{ label: '1986', value: '1986' },
			{ label: '1985', value: '1985' },
			{ label: '1984', value: '1984' },
			{ label: '1983', value: '1983' },
			{ label: '1982', value: '1982' },
			{ label: '1981', value: '1981' },
			{ label: '1980', value: '1980' },
			{ label: '1979', value: '1979' },
			{ label: '1978', value: '1978' },
			{ label: '1977', value: '1977' },
			{ label: '1976', value: '1976' },
			{ label: '1975', value: '1975' },
			{ label: '1974', value: '1974' },
			{ label: '1973', value: '1973' },
			{ label: '1972', value: '1972' },
			{ label: '1971', value: '1971' },
			{ label: '1970', value: '1970' },
			{ label: '1969', value: '1969' },
			{ label: '1968', value: '1968' },
			{ label: '1967', value: '1967' },
			{ label: '1966', value: '1966' },
			{ label: '1965', value: '1965' },
			{ label: '1964', value: '1964' },
			{ label: '1963', value: '1963' },
			{ label: '1962', value: '1962' },
			{ label: '1961', value: '1961' },
			{ label: '1960', value: '1960' },
			{ label: '1959', value: '1959' },
			{ label: '1958', value: '1958' },
			{ label: '1957', value: '1957' },
			{ label: '1956', value: '1956' },
			{ label: '1955', value: '1955' },
			{ label: '1954', value: '1954' },
			{ label: '1953', value: '1953' },
			{ label: '1952', value: '1952' },
			{ label: '1951', value: '1951' },
			{ label: '1950', value: '1950' },
			{ label: '1949', value: '1949' },
			{ label: '1948', value: '1948' },
			{ label: '1947', value: '1947' },
			{ label: '1946', value: '1946' },
			{ label: '1945', value: '1945' },
			{ label: '1944', value: '1944' },
			{ label: '1943', value: '1943' },
			{ label: '1942', value: '1942' },
			{ label: '1941', value: '1941' },
			{ label: '1940', value: '1940' },
			{ label: '1939', value: '1939' },
			{ label: '1938', value: '1938' },
			{ label: '1937', value: '1937' },
			{ label: '1936', value: '1936' },
			{ label: '1935', value: '1935' },
			{ label: '1934', value: '1934' },
			{ label: '1933', value: '1933' },
			{ label: '1932', value: '1932' },
			{ label: '1931', value: '1931' },
			{ label: '1930', value: '1930' },
		]
		
		const MonthsDefaults = [
			{ label: '-MM-', value: '' },
			{ label: '01', value: '01' },
			{ label: '02', value: '02' },
			{ label: '03', value: '03' },
			{ label: '04', value: '04' },
			{ label: '05', value: '05' },
			{ label: '06', value: '06' },
			{ label: '07', value: '07' },
			{ label: '08', value: '08' },
			{ label: '09', value: '09' },
			{ label: '10', value: '10' },
			{ label: '11', value: '11' },
			{ label: '12', value: '12' },
		]

		const dateDefaults = [
			{ label: '-DD-', value: '' },
			{ label: '01', value: '01' },
			{ label: '02', value: '02' },
			{ label: '03', value: '03' },
			{ label: '04', value: '04' },
			{ label: '05', value: '05' },
			{ label: '06', value: '06' },
			{ label: '07', value: '07' },
			{ label: '08', value: '08' },
			{ label: '09', value: '09' },
			{ label: '10', value: '10' },
			{ label: '11', value: '11' },
			{ label: '12', value: '12' },
			{ label: '13', value: '13' },
			{ label: '14', value: '14' },
			{ label: '15', value: '15' },
			{ label: '16', value: '16' },
			{ label: '17', value: '17' },
			{ label: '18', value: '18' },
			{ label: '19', value: '19' },
			{ label: '20', value: '20' },
			{ label: '21', value: '21' },
			{ label: '22', value: '22' },
			{ label: '23', value: '23' },
			{ label: '24', value: '24' },
			{ label: '25', value: '25' },
			{ label: '26', value: '26' },
			{ label: '27', value: '27' },
			{ label: '28', value: '28' },
			{ label: '29', value: '29' },
			{ label: '30', value: '30' },
			{ label: '31', value: '31' },									
		]

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
						help={ __( "Helps to set range of calender" )}
					/>
					{ additonalVal && (
						<Fragment>
							<p>From :</p>
							<SelectControl
								className={"minDate"}		
								label="Year"
								value={ minYear }
								options={ YearDefaults }
								onChange={ ( minYear ) => setAttributes( { minYear } ) }
							/>
							<b> - </b>
							<SelectControl
								className={"minDate"}		
								label="Month"
								value={ minMonth }
								options={ MonthsDefaults }
								onChange={ ( minMonth ) => setAttributes( { minMonth } ) }
							/>
							<b> - </b>							
							<SelectControl
								className={"minDate"}		
								label="Date"
								value={ minDay }
								options={ dateDefaults }
								onChange={ ( minDay ) => setAttributes( { minDay } ) }
							/>
							<p>To :</p>
							<SelectControl
								className={"maxDate"}		
								label="Year"
								value={ maxYear }
								options={ YearDefaults }
								onChange={ ( maxYear ) => setAttributes( { maxYear } ) }
							/>
							<b> - </b>
							<SelectControl
								className={"maxDate"}		
								label="Month"
								value={ maxMonth }
								options={ MonthsDefaults }
								onChange={ ( maxMonth ) => setAttributes( { maxMonth } ) }
							/>
							<b> - </b>							
							<SelectControl
								className={"maxDate"}		
								label="Date"
								value={ maxDay }
								options={ dateDefaults }
								onChange={ ( maxDay ) => setAttributes( { maxDay } ) }
							/>
							{ invalidDateErrorMsg }
						</Fragment>
					)}				
				</PanelBody>
			)
		}
		
	

	var date_html = "";
	if( additonalVal ){
		date_html = <input type="date" className="uagb-forms-date-input" name={name} required={ dateRequired } min={validation_min_value} max={validation_max_value}/>		
	}else{
		date_html = <input type="date" className="uagb-forms-date-input" name={name} required={ dateRequired }/>
	}

	 
	const isRequired = (dateRequired) ? "required" : "";
	
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
						className={`uagb-forms-date-label ${isRequired}`}
						multiline={ false }
					/>	
					{date_html}									
				</div>
			</Fragment>
		)
	}
}

export default UAGBFormsDateEdit
