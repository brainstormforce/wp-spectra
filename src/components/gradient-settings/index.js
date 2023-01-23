import styles from './editor.lazy.scss';
import { GradientPicker } from '@wordpress/components';
import React, { useLayoutEffect } from 'react';
import Range from '@Components/range/Range.js';
import { __ } from '@wordpress/i18n';
import MultiButtonsControl from '@Components/multi-buttons-control';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';

const GradientSettings = ( props ) => {

	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { setAttributes, gradientType, backgroundGradient, backgroundGradientColor2, backgroundGradientColor1, backgroundGradientType, backgroundGradientLocation1, backgroundGradientLocation2, backgroundGradientAngle } = props;

	const onGradientChange = ( value ) => {
		setAttributes( { [ backgroundGradient.label ]: value } );
	};
	
	return (
		<>
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ __(
					'Select Gradient',
					'ultimate-addons-for-gutenberg'
				) }
				data={ {
					value: gradientType.value,
					label: gradientType.label,
				} }
				className="uagb-multi-button-alignment-control"
				options={ [
					{
						value: 'default',
						label: __(
							'Default',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'manual',
						label: __(
							'Manual',
							'ultimate-addons-for-gutenberg'
						),
					},
				] }
			/>
			{ gradientType.value === 'default' && (
				<GradientPicker
					__nextHasNoMargin = { true }
					value={ backgroundGradient.value }
					onChange={ onGradientChange }
					className="uagb-gradient-picker"
					gradients={[]} // Passing it an empty to resolve block encounters an error when gutenberg is activated.
				/>
			)}
			{ gradientType.value === 'manual' && (
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
