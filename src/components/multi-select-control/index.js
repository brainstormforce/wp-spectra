import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const propTypes = {
	options: PropTypes.array,
	data: PropTypes.object,
	setAttributes: PropTypes.func
};

const defaultProps = {
	options: [],
	data: {
		label: '',
		value: []
	},
	setAttributes: () => {}
};

export default function UAGMultiSelectControl( {options, data, setAttributes} ) {
	return (
		<div className="components-base-control">
			<Select
				options={options}
				defaultValue={options.filter( ( item ) => data.value.includes( item.value ) )}
				onChange={( option ) => setAttributes( {[data.label]: option.reduce( ( acc, current ) => {
					acc.push( current.value );
					return acc;
				}, [] )} )}
				classNamePrefix={'spectra-multi-select'}
				className={'spectra-multi-select'}
				isMulti
			/>
		</div>
	);
}

UAGMultiSelectControl.propTypes = propTypes;
UAGMultiSelectControl.defaultProps = defaultProps;
