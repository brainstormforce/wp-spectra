import React from 'react';
import { __ } from '@wordpress/i18n';
import PropTypes from 'prop-types';
import {
	__experimentalAlignmentMatrixControl as AlignmentMatrixControl,
} from '@wordpress/components';

// Set Prop Types for All Valid Props.
const propTypes = {
	label: PropTypes.string,
	data: PropTypes.object,
	onChange: PropTypes.func,
	setAttributes: PropTypes.func,
};

// Set the Required Default Values.
const defaultProps = {
	label: __( 'Alignment', 'ultimate-addons-for-gutenberg' ),
};

// Create the Spectra Control.
const SpectraMatrixControl = ( props ) => {

	// Extract all props.
	const {
		label, 
		data,
		onChange,
		setAttributes,
	} = props;

	// Handle the Appropriate
	const onChangeHandler = ( newValue ) => {
		if ( setAttributes ) {
			setAttributes( { [ data?.label ]: newValue } );
		}
		else if ( onChange ) {
			onChange( newValue );
		}
	}

	// Render the Alignment Matrix Control.
	return (
		<>
			<span className='uag-control-label'>
				{ label }
			</span>
			<AlignmentMatrixControl
				label={ label }
				value={ data?.value }
				onChange={ ( onChange || setAttributes ) ? ( newValue ) => onChangeHandler( newValue ) : false }
			/>
		</>
	);
}

SpectraMatrixControl.propTypes = propTypes;
SpectraMatrixControl.defaultProps = defaultProps;

export default SpectraMatrixControl;

