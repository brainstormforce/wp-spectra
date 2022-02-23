import React from 'react';
import { __ } from '@wordpress/i18n';

import { SelectControl, ToggleControl } from '@wordpress/components';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';

import { InspectorControls } from '@wordpress/block-editor';

const YearDefaults = [ { label: 'YYYY', value: '' } ];
const MonthsDefaults = [ { label: 'MM', value: '' } ];
const dateDefaults = [ { label: 'DD', value: '' } ];

let index;

for ( index = 1930; index <= 2030; index++ ) {
	YearDefaults.push( { label: `${ index }`, value: `${ index }` } );
}

for ( index = 1; index <= 12; index++ ) {
	const twoDigitMonth = index < 10 ? `0${ index }` : `${ index }`;
	MonthsDefaults.push( { label: twoDigitMonth, value: twoDigitMonth } );
}

for ( index = 1; index <= 31; index++ ) {
	const twoDigitDate = index < 10 ? `0${ index }` : `${ index }`;
	dateDefaults.push( { label: twoDigitDate, value: twoDigitDate } );
}



import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

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
			<UAGAdvancedPanelBody initialOpen={ true }>
				<ToggleControl
					label={ __( 'Required', 'ultimate-addons-for-gutenberg' ) }
					checked={ dateRequired }
					onChange={ () =>
						setAttributes( { dateRequired: ! dateRequired } )
					}
				/>
				<ToggleControl
					label={ __(
						'Additional Validation',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ additonalVal }
					onChange={ () =>
						setAttributes( { additonalVal: ! additonalVal } )
					}
					help={ __(
						'Helps to set range of calender',
						'ultimate-addons-for-gutenberg'
					) }
				/>
				{ additonalVal && (
					<>
						<p>
							{ __( 'From', 'ultimate-addons-for-gutenberg' ) } :
						</p>
						<SelectControl
							className={ 'minDate' }
							label="Year"
							value={ minYear }
							options={ YearDefaults }
							onChange={ ( newMinYear ) =>
								setAttributes( { newMinYear } )
							}
						/>
						<SelectControl
							className={ 'minDate' }
							label="Month"
							value={ minMonth }
							options={ MonthsDefaults }
							onChange={ ( newMinMonth ) =>
								setAttributes( { newMinMonth } )
							}
						/>
						<SelectControl
							className={ 'minDate' }
							label="Date"
							value={ minDay }
							options={ dateDefaults }
							onChange={ ( newMinDay ) =>
								setAttributes( { newMinDay } )
							}
						/>
						<p>
							{ ' ' }
							{ __( 'To', 'ultimate-addons-for-gutenberg' ) } :
						</p>
						<SelectControl
							className={ 'maxDate' }
							label="Year"
							value={ maxYear }
							options={ YearDefaults }
							onChange={ ( newMaxYear ) =>
								setAttributes( { newMaxYear } )
							}
						/>
						<SelectControl
							className={ 'maxDate' }
							label="Month"
							value={ maxMonth }
							options={ MonthsDefaults }
							onChange={ ( newMaxMonth ) =>
								setAttributes( { newMaxMonth } )
							}
						/>
						<SelectControl
							className={ 'maxDate' }
							label="Date"
							value={ maxDay }
							options={ dateDefaults }
							onChange={ ( newMaxDay ) =>
								setAttributes( { newMaxDay } )
							}
						/>
						{ invalidDateErrorMsg }
					</>
				) }
			</UAGAdvancedPanelBody>
		);
	};

	return (
		<>
			<InspectorControls>
				<InspectorTabs tabs={ [ 'general', 'advance' ] }>
					<InspectorTab { ...UAGTabs.general }>
						{ dateInspectorControls() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.advance }></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</>
	);
};
export default React.memo( Settings );
