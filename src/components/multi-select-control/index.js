import React from 'react';
import Select from 'react-select'
import { __ } from '@wordpress/i18n';
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

export default function UAGMultiSelectControl({options, data, setAttributes}) {
	return (
		<React.Fragment>
			<Select
				options={options}
				defaultValue={options.filter((item) => data.value.includes(item.value))}
				onChange={(option) => setAttributes({[data.label]: option.reduce((acc, current) => {
					acc.push(current.value);
					return acc;
				}, [])})}
				isMulti
			/>
		</React.Fragment>
	);
}

UAGMultiSelectControl.propTypes = propTypes;
UAGMultiSelectControl.defaultProps = defaultProps;
