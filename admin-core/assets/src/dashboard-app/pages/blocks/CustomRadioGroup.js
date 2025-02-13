import { DropdownMenu } from '@bsf/force-ui';

const CustomRadioGroup = ( { options, name, selectedValue, onChange } ) => {
	if ( ! options || options.length === 0 ) {
		return null;
	}

	return (
		<div className="custom-radio-group grid grid-cols-2 gap-4 w-120">
			{ options.map( ( option ) => {
				const inputId = `${ name }-${ option.value }`;
				return (
					<DropdownMenu.Item key={ option.value }>
						<label htmlFor={ inputId } className="flex items-center gap-2 cursor-pointer">
							<input
								id={ inputId }
								type="radio"
								name={ name }
								value={ option.value }
								checked={ selectedValue === option.value }
								onChange={ ( e ) => onChange( e.target.value ) }
								className="hidden peer uagb-radio-input"
							/>
							<div className="uagb-radio-button"></div>
							<div>
								<span className="text-text-primary font-medium m-0 text-sm leading-5">
									{ option.label }
								</span>
								<div className="text-text-tertiary text-sm font-normal leading-5 m-0">
									{ option.description }
								</div>
							</div>
						</label>
					</DropdownMenu.Item>
				);
			} ) }
		</div>
	);
};

export default CustomRadioGroup;
