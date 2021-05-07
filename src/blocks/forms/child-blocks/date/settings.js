import React from 'react';
import { __ } from '@wordpress/i18n';

const { PanelBody, SelectControl, ToggleControl } = wp.components;
const { InspectorControls, RichText } = wp.blockEditor;

const YearDefaults = [ { label: 'YYYY', value: '' } ];

for ( var i = 1930; i <= 2030; i++ ) {
	YearDefaults.push( { label: `${ i }`, value: `${ i }` } );
}

const MonthsDefaults = [ { label: 'MM', value: '' } ];

for ( var i = 1; i <= 12; i++ ) {
	const twoDigitMonth = i < 10 ? `0${ i }` : `${ i }`;
	MonthsDefaults.push( { label: twoDigitMonth, value: twoDigitMonth } );
}

const dateDefaults = [ { label: 'DD', value: '' } ];

for ( var i = 1; i <= 31; i++ ) {
	const twoDigitDate = i < 10 ? `0${ i }` : `${ i }`;
	dateDefaults.push( { label: twoDigitDate, value: twoDigitDate } );
}

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes, isSelected } = props;

	const {
		dateRequired,
		additonalVal,
		minYear,
		minMonth,
		minDay,
		maxYear,
		maxMonth,
		maxDay,
	} = attributes;

	let validation_min_value = '';
	let validation_max_value = '';

	if ( minYear && minMonth && minDay ) {
		validation_min_value = minYear + '-' + minMonth + '-' + minDay;
	}

	if ( maxYear && maxMonth && maxDay ) {
		validation_max_value = maxYear + '-' + maxMonth + '-' + maxDay;
	}

	let invalidDateErrorMsg = '';
	const start = Date.parse( validation_min_value );
	const end = Date.parse( validation_max_value );

	if ( start > end ) {
		invalidDateErrorMsg = (
			<p className="uagb-forms-date-invalidate">
				{ __(
					'Invalid date range selected',
					'ultimate-addons-for-gutenberg'
				) }
			</p>
		);
	}

	const dateInspectorControls = () => {
		return (
			<PanelBody
				title={ __( 'General', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
				className="uagb__url-panel-body"
			>
				<ToggleControl
					label={ __( 'Required', 'ultimate-addons-for-gutenberg' ) }
					checked={ dateRequired }
					onChange={ ( value ) =>
						setAttributes( { dateRequired: ! dateRequired } )
					}
				/>
				<ToggleControl
					label={ __(
						'Additional Validation',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ additonalVal }
					onChange={ ( value ) =>
						setAttributes( { additonalVal: ! additonalVal } )
					}
					help={ __(
						'Helps to set range of calender',
						'ultimate-addons-for-gutenberg'
					) }
				/>
				{ additonalVal && (
					<>
						<p>From :</p>
						<SelectControl
							className={ 'minDate' }
							label="Year"
							value={ minYear }
							options={ YearDefaults }
							onChange={ ( minYear ) =>
								setAttributes( { minYear } )
							}
						/>
						<b> - </b>
						<SelectControl
							className={ 'minDate' }
							label="Month"
							value={ minMonth }
							options={ MonthsDefaults }
							onChange={ ( minMonth ) =>
								setAttributes( { minMonth } )
							}
						/>
						<b> - </b>
						<SelectControl
							className={ 'minDate' }
							label="Date"
							value={ minDay }
							options={ dateDefaults }
							onChange={ ( minDay ) =>
								setAttributes( { minDay } )
							}
						/>
						<p>To :</p>
						<SelectControl
							className={ 'maxDate' }
							label="Year"
							value={ maxYear }
							options={ YearDefaults }
							onChange={ ( maxYear ) =>
								setAttributes( { maxYear } )
							}
						/>
						<b> - </b>
						<SelectControl
							className={ 'maxDate' }
							label="Month"
							value={ maxMonth }
							options={ MonthsDefaults }
							onChange={ ( maxMonth ) =>
								setAttributes( { maxMonth } )
							}
						/>
						<b> - </b>
						<SelectControl
							className={ 'maxDate' }
							label="Date"
							value={ maxDay }
							options={ dateDefaults }
							onChange={ ( maxDay ) =>
								setAttributes( { maxDay } )
							}
						/>
						{ invalidDateErrorMsg }
					</>
				) }
			</PanelBody>
		);
	};

	return (
		<>
			<InspectorControls>{ dateInspectorControls() }</InspectorControls>
		</>
	);
};
export default React.memo( Settings );
