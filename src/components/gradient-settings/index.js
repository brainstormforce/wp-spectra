import styles from './editor.lazy.scss';
import { GradientPicker } from '@wordpress/components';
import Range from '@Components/range/Range.js';
import { __ } from '@wordpress/i18n';
import MultiButtonsControl from '@Components/multi-buttons-control';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import { useLayoutEffect, useEffect, useState, useRef } from '@wordpress/element';
import { getPanelIdFromRef } from '@Utils/Helpers';
import { select } from '@wordpress/data';
import { applyFilters } from '@wordpress/hooks';

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

	const  { 	
		setAttributes,
		gradientType,
		backgroundGradient,
		backgroundGradientColor2,
		backgroundGradientColor1,
		backgroundGradientType,
		backgroundGradientLocation1,
		backgroundGradientLocation2,
		backgroundGradientAngle 
		} = props;
	
	const blockNameForHook = getSelectedBlock()?.name.split( '/' ).pop(); // eslint-disable-line @wordpress/no-unused-vars-before-return
	
	useEffect( () => {
		setPanelNameForHook( getPanelIdFromRef( panelRef ) )
	}, [blockNameForHook] );

	const onGradientChange = ( value ) => {
		setAttributes( { [ backgroundGradient.label ]: value } );
	};

	const controlName = 'gradient-settings'; // there is no label props that's why keep hard coded label
	const controlBeforeDomElement = applyFilters( `spectra.${blockNameForHook}.${panelNameForHook}.${controlName}.before`, '', blockNameForHook );
	const controlAfterDomElement = applyFilters( `spectra.${blockNameForHook}.${panelNameForHook}.${controlName}`, '', blockNameForHook );

	const type = undefined !== gradientType ? gradientType.value : 'basic';

	return (
		<>
			{ undefined !== gradientType && (
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ 'Select Gradient'}
					data={ {
						value: gradientType.value,
						label: gradientType.label,
					} }
					options={ [
						{
							value: 'basic',
							label: __(
								'Basic',
								'ultimate-addons-for-gutenberg'
							)
						},
						{
							value: 'advanced',
							label: __(
								'Advanced',
								'ultimate-addons-for-gutenberg'
							)
						},
					] }
					showIcons={ false }
				/>
			)}
			<div ref={panelRef}>
				{
					controlBeforeDomElement
				}
				{ 'basic' === type && (
					<GradientPicker
						__nextHasNoMargin = { true }
						value={ backgroundGradient.value }
						onChange={ onGradientChange }
						className="uagb-gradient-picker"
						gradients={[]} // Passing it an empty to resolve block encounters an error when gutenberg is activated.
					/>
				)}
				{
					controlAfterDomElement
				}
			</div>
			{ 'advanced' === type && (
				<>
					<AdvancedPopColorControl
						label={ __(
							'Color 1',
							'ultimate-addons-for-gutenberg'
						) }
						colorValue={ backgroundGradientColor1.value ? backgroundGradientColor1.value : '' }
						data={ {
							value: backgroundGradientColor1.value,
							label: backgroundGradientColor1.label,
						} }
						setAttributes={ setAttributes }
					/>
					<AdvancedPopColorControl
						label={ __(
							'Color 2',
							'ultimate-addons-for-gutenberg'
						) }
						colorValue={ backgroundGradientColor2.value ? backgroundGradientColor2.value : '' }
						data={ {
							value: backgroundGradientColor2.value,
							label: backgroundGradientColor2.label,
						} }
						setAttributes={ setAttributes }
					/>
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __(
							'Type',
							'ultimate-addons-for-gutenberg'
						) }
						data={ {
							value: backgroundGradientType.value,
							label: backgroundGradientType.label,
						} }
						className="uagb-multi-button-alignment-control"
						options={ [
							{
								value: 'linear',
								label: __(
									'Linear',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'radial',
								label: __(
									'Radial',
									'ultimate-addons-for-gutenberg'
								),
							},
						] }
					/>
					<Range
						label={ __(
							'Location 1',
							'ultimate-addons-for-gutenberg'
						) }
						setAttributes={ setAttributes }
						value={ backgroundGradientLocation1.value }
						data={ {
							value: backgroundGradientLocation1.value,
							label: backgroundGradientLocation1.label,
						} }
						min={ 0 }
						max={ 100 }
						displayUnit={ false }
					/>
					<Range
						label={ __(
							'Location 2',
							'ultimate-addons-for-gutenberg'
						) }
						setAttributes={ setAttributes }
						value={ backgroundGradientLocation2.value }
						data={ {
							value: backgroundGradientLocation2.value,
							label: backgroundGradientLocation2.label,
						} }
						min={ 0 }
						max={ 100 }
						displayUnit={ false }
					/>
					{ 'linear' === backgroundGradientType.value &&
						<Range
							label={ __(
								'Angle',
								'ultimate-addons-for-gutenberg'
							) }
							setAttributes={ setAttributes }
							value={ backgroundGradientAngle.value }
							data={ {
								value: backgroundGradientAngle.value,
								label: backgroundGradientAngle.label,
							} }
							min={ 0 }
							max={ 360 }
							displayUnit={ false }
						/>
					}
				</>
			)}
		</>
	);
}

export default GradientSettings;
