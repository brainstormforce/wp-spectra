import styles from './editor.lazy.scss';
import { GradientPicker } from '@wordpress/components';
import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';
import { getPanelIdFromRef } from '@Utils/Helpers';
import { select } from '@wordpress/data'

const GradientSettings = ( props ) => {
	const [panelNameForHook, setPanelNameForHook] = useState( null );
	const panelRef = useRef( null );
	const { getSelectedBlock } = select( 'core/block-editor' );
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const blockNameForHook = getSelectedBlock()?.name.split( '/' ).pop(); // eslint-disable-line @wordpress/no-unused-vars-before-return
	useEffect( () => {
		setPanelNameForHook( getPanelIdFromRef( panelRef ) )
	}, [blockNameForHook] )



	const { setAttributes, backgroundGradient } = props;

	const onGradientChange = ( value ) => {
		setAttributes( { [ backgroundGradient.label ]: value } );
	};

	const controlName = 'gradient-settings'; // there is no label props that's why keep hard coded label
	const controlBeforeDomElement = wp.hooks.applyFilters( `spectra.${blockNameForHook}.${panelNameForHook}.${controlName}.before`, '', blockNameForHook );
	const controlAfterDomElement = wp.hooks.applyFilters( `spectra.${blockNameForHook}.${panelNameForHook}.${controlName}`, '', blockNameForHook );

	return (
		<div
			ref={panelRef}
			
		>
			{
				controlBeforeDomElement
			}
			<GradientPicker
				__nextHasNoMargin = { true }
				value={ backgroundGradient.value }
				onChange={ onGradientChange }
				className="uagb-gradient-picker"
				gradients={[]} // Passing it an empty to resolve block encounters an error when gutenberg is activated.
			/>
			{
				controlAfterDomElement
			}
		</div>
	);
}

export default GradientSettings;