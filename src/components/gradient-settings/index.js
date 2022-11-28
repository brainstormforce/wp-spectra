import styles from './editor.lazy.scss';
import { GradientPicker } from '@wordpress/components';
import React, { useLayoutEffect } from 'react';
import { select } from '@wordpress/data'

const GradientSettings = ( props ) => {

	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );
	const { getSelectedBlock } = select( 'core/block-editor' );

	const { setAttributes, backgroundGradient } = props;

	const onGradientChange = ( value ) => {
		setAttributes( { [ backgroundGradient.label ]: value } );
	};

	const blockNameForHook = getSelectedBlock()?.name.split( '/' ).pop(); // eslint-disable-line @wordpress/no-unused-vars-before-return
	const controlName = 'gradient-settings'; //
	const controlBeforeDomElement = wp.hooks.applyFilters( `spectra.${blockNameForHook}.gradient-settings.${controlName}.before`, '', blockNameForHook );
	const controlAfterDomElement = wp.hooks.applyFilters( `spectra.${blockNameForHook}.gradient-settings.${controlName}`, '', blockNameForHook );

	return (
		<>
			{
				controlBeforeDomElement
			}
			<GradientPicker
				value={ backgroundGradient.value }
				onChange={ onGradientChange }
				className="uagb-gradient-picker"
			/>
			{
				controlAfterDomElement
			}
		</>
	);
}

export default GradientSettings;
