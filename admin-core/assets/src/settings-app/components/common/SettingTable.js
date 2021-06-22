import React from 'react';
import { useStateValue } from '@Utils/StateProvider';
import './SettingTable.scss';

import {
	SelectField,
	SectionHeadingField,
	ToggleField
} from '@Fields';

function SettingTable( props ) {
	const { settings } = props;

	const [ { options } ] = useStateValue();

	return (
		<table className="uag-global-settigs-content-table">
			<tbody>
				{ Object.keys( settings.fields ).map( ( field, i ) => {
					let data = settings.fields[ field ];
					let input_type = data.type;
					let component = '';

					let value = options[ data.name ]
						? options[ data.name ]
						: value;

					switch ( input_type ) {
						case 'toggle':
							component = (
								<ToggleField
									id={ data.name }
									name={ data.name }
									value={ value }
									label={ data.label }
									desc={ data.desc }
								/>
							);
							break;
						case 'select':
							component = (
								<SelectField
									id={ data.name }
									name={ data.name }
									value={ value }
									label={ data.label }
									options={ data.options }
									desc={ data.desc }
									tooltip={ data.tooltip }
								/>
							);
							break;
						case 'heading':
							component = (
								<SectionHeadingField
									label={ data.label }
									desc={ data.desc }
								/>
							);
							break;

						default:
							break;
					}
					return (
						<tr
							key={ i }
							className={ `uag-field-row-${ field }` }
						>
							<td scope="row">
								<>{ component }</>
							</td>
						</tr>
					);
				} ) }
			</tbody>
		</table>
	);
}

export default SettingTable;
