import { useLayoutEffect } from '@wordpress/element';
import styles from './editor.lazy.scss';
import { __ } from '@wordpress/i18n';
import PropTypes from 'prop-types';
import { __experimentalAlignmentMatrixControl as AlignmentMatrixControl } from '@wordpress/components';
import UAGHelpText from '@Components/help-text';

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
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	// Extract all props.
	const { label, data, onChange, setAttributes, help = false } = props;

	// Handle the Appropriate
	const onChangeHandler = ( newValue ) => {
		if ( setAttributes ) {
			setAttributes( { [ data?.label ]: newValue } );
		} else if ( onChange ) {
			onChange( newValue );
		}
	};

	// Render the Alignment Matrix Control.
	return (
		<>
			<div className="components-base-control spectra__matrix-control">
				<div className="uag-control-label">{ label }</div>
				<AlignmentMatrixControl
					className={ 'spectra__matrix-control--box' }
					label={ label }
					value={ data?.value }
					onChange={ onChange || setAttributes ? ( newValue ) => onChangeHandler( newValue ) : false }
				/>
			</div>
			<UAGHelpText text={ help } />
		</>
	);
};

SpectraMatrixControl.propTypes = propTypes;
SpectraMatrixControl.defaultProps = defaultProps;

export default SpectraMatrixControl;
