import { __ } from '@wordpress/i18n';
import { memo } from '@wordpress/element';
import { ToggleControl } from '@wordpress/components';
import UAGSelectControl from '@Components/select-control';
import Separator from '@Components/separator';
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
						<Separator/>
						<p>
							{ __( 'From', 'ultimate-addons-for-gutenberg' ) } :
						</p>
						<UAGSelectControl
							label={ __(
								'Year',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: minYear,
								label: 'minYear',
							} }
							setAttributes={ setAttributes }
							options={ YearDefaults }
						/>
						<UAGSelectControl
							label={ __(
								'Month',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: minMonth,
								label: 'minMonth',
							} }
							setAttributes={ setAttributes }
							options={ MonthsDefaults }
						/>
						<UAGSelectControl
							label={ __(
								'Date',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: minDay,
								label: 'minDay',
							} }
							setAttributes={ setAttributes }
							options={ dateDefaults }
						/>
						<Separator/>
						<p>
							{ __( 'To', 'ultimate-addons-for-gutenberg' ) } :
						</p>
						<UAGSelectControl
							label={ __(
								'Year',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: maxYear,
								label: 'maxYear',
							} }
							setAttributes={ setAttributes }
							options={ YearDefaults }
						/>
						<UAGSelectControl
							label={ __(
								'Month',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: maxMonth,
								label: 'maxMonth',
							} }
							setAttributes={ setAttributes }
							options={ MonthsDefaults }
						/>
						<UAGSelectControl
							label={ __(
								'Date',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: maxDay,
								label: 'maxDay',
							} }
							setAttributes={ setAttributes }
							options={ dateDefaults }
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
export default memo( Settings );
