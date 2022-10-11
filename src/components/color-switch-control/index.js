import React, {useLayoutEffect} from 'react';
import { __ } from '@wordpress/i18n';
import GradientSettings from '@Components/gradient-settings';
import MultiButtonsControl from '@Components/multi-buttons-control';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import styles from './editor.lazy.scss';


export default function ColorSwitchControl( {label, type, classic, gradient, setAttributes} ) {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	return (
		<React.Fragment>
			<div className="uagb-color-switch-control-container components-base-control">
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ label }
					data={ type }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: 'classic',
							label: __(
								'Classic',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'gradient',
							label: __(
								'Gradient',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					showIcons={ false }
				/>
				{
					type.value === 'classic' ? (
						<AdvancedPopColorControl
							label={__( 'Color', 'ultimate-addons-for-gutenberg' )}
							colorValue={ classic.value }
							data={ {
								value: classic.value,
								label: classic.label,
							} }
							setAttributes={ setAttributes }
						/>
					) : (
						<GradientSettings
							backgroundGradient={
								gradient
							}
							setAttributes={ setAttributes }
						/>
					)
				}
			</div>
		</React.Fragment>
	);
}
