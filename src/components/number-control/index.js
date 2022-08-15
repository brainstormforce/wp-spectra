import {
	ButtonGroup,
	Button,
	Tooltip,
	__experimentalNumberControl as NumberControl,
} from '@wordpress/components';
import ResponsiveToggle from '../responsive-toggle';
import { __, sprintf } from '@wordpress/i18n';
import styles from './editor.lazy.scss';
import React, { useLayoutEffect } from 'react';
import { limitMax, limitMin } from '@Controls/unitWiseMinMaxOption';
import UAGReset from '../reset';

const UAGNumberControl = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { isShiftStepEnabled } = props;

	let max = limitMax( props.unit?.value, props );
	let min = limitMin( props.unit?.value, props );
	const inputValue = isNaN( props?.value ) ? '' :  props?.value;

	let unitSizes = [
		{
			name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
			unitValue: 'px',
		},
		{
			name: __( 'Em', 'ultimate-addons-for-gutenberg' ),
			unitValue: 'em',
		},
	];

	if ( props.units ) {
		unitSizes = props.units;
	}

	const handleOnChange = ( newValue ) => {
		const parsedValue = parseFloat( newValue );
		if ( props.setAttributes ) {
			props.setAttributes( {
				[ props.data.label ]: parsedValue,
			} )
		}
		if ( props?.onChange ) {
			props.onChange( parsedValue );
		}
	};

	const resetValues = ( defaultValues ) => {

		if ( props?.onChange ) {
			props?.onChange( defaultValues[props?.data?.label] )
		}
		if ( props.displayUnit ) {
			onChangeUnits( defaultValues[props?.unit?.label] )
		}
	};

	const onChangeUnits = ( newValue ) => {

		props.setAttributes( { [ props.unit.label ]: newValue } );

		max = limitMax( newValue, props );
		min = limitMin( newValue, props );

		if ( props.value > max ) {
			handleOnChange( max );
		}
		if ( props.value < min ) {
			handleOnChange( min );
		}

	};

	const onUnitSizeClick = ( uSizes ) => {
		const items = [];
		uSizes.map( ( key ) =>
			items.push(
				<Tooltip
					text={ sprintf(
						/* translators: abbreviation for units */
						__( '%s units', 'ultimate-addons-for-gutenberg' ),
						key.name
					) }
					key={key.name}
				>
					<Button
						key={ key.unitValue }
						className={ 'uagb-number-control__units--' + key.name }
						isSmall
						isPrimary={ props.unit.value === key.unitValue }
						isSecondary={ props.unit.value !== key.unitValue }
						aria-pressed={ props.unit.value === key.unitValue }
						aria-label={ sprintf(
							/* translators: abbreviation for units */
							__( '%s units', 'ultimate-addons-for-gutenberg' ),
							key.name
						) }
						onClick={ () => onChangeUnits( key.unitValue ) }
					>
						{ key.unitValue }
					</Button>
				</Tooltip>
			)
		);

		return items;
	};

	return (
		<div className="components-base-control uag-number-control uagb-size-type-field-tabs">
			<div className="uagb-control__header">
				<div className="uagb-number-control__actions uagb-control__actions">
					<UAGReset
						onReset={resetValues}
						attributeNames = {[
							props.data.label,
							props.displayUnit ? props.unit.label : false
						]}
						setAttributes={ props.setAttributes }
					/>
					{ props.displayUnit && (
						<ButtonGroup
							className="uagb-control__units"
							aria-label={ __(
								'Select Units',
								'ultimate-addons-for-gutenberg'
							) }
						>
							{ onUnitSizeClick( unitSizes ) }
						</ButtonGroup>
					) }
				</div>
			</div>
			<div className="uagb-number-control__mobile-controls">
				<ResponsiveToggle
					label= { props.label }
					responsive= { props.responsive }
				/>
				<NumberControl
					labelPosition="edge"
					disabled={ props.disabled }
					isShiftStepEnabled={ isShiftStepEnabled }
					max={ max }
					min={ min }
					onChange={ handleOnChange }
					value={ inputValue }
					step={ props?.step || 1 }
				/>
			</div>
			{ props.help && (
				<p className="uag-control-help-notice">{ props.help }</p>
			) }
		</div>
	);
};

UAGNumberControl.defaultProps = {
	label: __( 'Margin', 'ultimate-addons-for-gutenberg' ),
	className: '',
	allowReset: true,
	isShiftStepEnabled: true,
	max: Infinity,
	min: -Infinity,
	resetFallbackValue: '',
	placeholder: null,
	unit: [ 'px', 'em' ],
	displayUnit: true,
	responsive: false,
};

export default UAGNumberControl;
