import React from 'react';
import { useStateValue } from '@Utils/StateProvider';

import { SelectField, ToggleField } from '@Fields';

function SettingTable( props ) {
	const { settings } = props;

	const [ { options } ] = useStateValue();

	return (
		<>
			{ Object.keys( settings.fields ).map( ( field, key ) => {
				const data = settings.fields[ field ];
				const inputType = data.type;
				let component = '';

				const value = options[ data.name ]
					? options[ data.name ]
					: value;

				switch ( inputType ) {
					case 'toggle':
						component = (
							<ToggleField
								id={ data.name }
								name={ data.name }
								value={ value }
								label={ data.label }
								desc={ data.desc }
								key = {key}
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
								key = {key}
							/>
						);
						break;

					default:
						break;
				}
				return component;
			} ) }
		</>
	);
}

export default SettingTable;
