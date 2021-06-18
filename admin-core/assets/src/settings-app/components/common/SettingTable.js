import React from 'react';
import { useStateValue } from '@Utils/StateProvider';
import './SettingTable.scss';
import { conditions } from '@Utils/Helpers';

import {
	TextField,
	CheckboxField,
	SelectField,
	RadioField,
	TextareaField,
	NumberField,
	SubmitButton,
	DocField,
	SectionHeadingField,
	ToggleField
} from '@Fields';

function SettingTable( props ) {
	const { data, settings } = props;

	const [ { globaldata, options }, dispatch ] = useStateValue();

	var checkout_list = globaldata.checkout_list;

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

					let isActive = conditions.isActiveControl( data, options );

					switch ( input_type ) {
						case 'text':
							component = (
								<TextField
									type={ data.type }
									id={ data.name }
									name={ data.name }
									value={ data.readonly ? data.value : value }
									label={ data.label }
									placeholder={ data.placeholder }
									readonly={ data.readonly }
									desc={ data.desc }
									tooltip={ data.tooltip }
									className={ data.class }
								/>
							);

							break;

						case 'number':
							component = (
								<NumberField
									type={ data.type }
									id={ data.name }
									name={ data.name }
									value={ value }
									label={ data.label }
									placeholder={ data.placeholder }
									readonly={ data.readonly }
									min={ data.min }
									max={ data.max }
									desc={ data.desc }
									tooltip={ data.tooltip }
								/>
							);

							break;
						case 'checkbox':
							component = (
								<CheckboxField
									id={ data.name }
									name={ data.name }
									value={ value }
									label={ data.label }
									desc={ data.desc }
									tooltip={ data.tooltip }
									child_className={ data.child_class }
									backComp={ true }
									notice={ data.notice }
								/>
							);

							break;
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
						case 'radio':
							component = (
								<RadioField
									name={ data.name }
									value={
										'undefined' === typeof value
											? ''
											: value
									}
									label={ data.label }
									desc={ data.desc }
									tooltip={ data.tooltip }
									options={ data.options }
								/>
							);
							break;
						case 'textarea':
							component = (
								<TextareaField
									id={ data.name }
									name={ data.name }
									value={ value }
									label={ data.label }
									desc={ data.desc }
									tooltip={ data.tooltip }
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

						case 'doc':
							component = <DocField content={ data.content } />;
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
							className={ `uag-field-row-${ field } ${
								! isActive ? 'uag-hide' : ''
							}` }
						>
							<td scope="row">
								<>{ component }</>
							</td>
							{ /* <th scope="row">
							</th> */ }
						</tr>
					);
				} ) }
			</tbody>
		</table>
	);
}

export default SettingTable;
