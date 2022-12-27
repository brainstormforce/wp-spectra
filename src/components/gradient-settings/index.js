import styles from './editor.lazy.scss';
import { GradientPicker } from '@wordpress/components';
import React, { useLayoutEffect } from 'react';

const GradientSettings = ( props ) => {
	
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { setAttributes, backgroundGradient } = props;

	const onGradientChange = ( value ) => {
		setAttributes( { [ backgroundGradient.label ]: value } );
	};

	return (
		<GradientPicker
			__nextHasNoMargin = { true }
			value={ backgroundGradient.value }
			onChange={ onGradientChange }
			className="uagb-gradient-picker"
		/>
	);
}

export default GradientSettings;
