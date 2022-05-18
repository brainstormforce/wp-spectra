import {
	ButtonGroup,
	Button,
	Tooltip,
	Dashicon,
	RangeControl,
	__experimentalNumberControl as NumberControl,
} from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import ResponsiveToggle from '../responsive-toggle';
import { __, sprintf } from '@wordpress/i18n';
import styles from './editor.lazy.scss';
import React, { useLayoutEffect } from 'react';
import { limitMax, limitMin } from '@Controls/unitWiseMinMaxOption';

const isNumberControlSupported = !! NumberControl;

const Range = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );
	const { withInputField, isShiftStepEnabled } = props;

	const [ value, setValue ] = useState( props.value );

	const defaultCache = {
		value: props.value,
		unit: props.unit.value,
	};

	const [ cachedValue, setCacheValue ] = useState( defaultCache );
	let max = limitMax( props.unit?.value, props );
	let min = limitMin( props.unit?.value, props );

	useEffect( () => {
		const cachedValueUpdate = { ...cachedValue };

		if ( undefined !== value ) {
			cachedValueUpdate.value = value;
			setCacheValue( cachedValueUpdate );
		}
		if ( undefined !== props.unit.value ) {
			cachedValueUpdate.unit = props.unit.value;
			setCacheValue( cachedValueUpdate );
		}
	}, [] );

	useEffect( () => {
		const cachedValueUpdate = { ...cachedValue };

		if (
			JSON.stringify( value ) !==
			JSON.stringify( cachedValueUpdate.value )
		) {
			setCacheValue( cachedValueUpdate );
		}
	}, [ props.value ] );

	useEffect( () => {
		const cachedValueUpdate = { ...cachedValue };

		if (
			JSON.stringify( props.unit.value ) !==
			JSON.stringify( cachedValueUpdate.unit )
		) {
			setCacheValue( cachedValueUpdate );
		}
	}, [ props.unit ] );

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
		setValue( newValue );
		const parsedValue = parseFloat( newValue );
		if ( props?.onChange ) {
			props.onChange( parsedValue );
			return;
		}
		if ( props.setAttributes ) {
			props.setAttributes( {
				[ props.data.label ]: parsedValue,
			} )
		}
	};

	const resetValues = () => {
		const cachedValueUpdate = { ...cachedValue };

		setValue( cachedValueUpdate.value );
		props?.onChange // eslint-disable-line no-unused-expressions
			? props?.onChange( cachedValueUpdate.value )
			: (
				props.setAttributes && (
					props.setAttributes( {
						[ props.data.label ]: cachedValueUpdate.value,
					} )
				)
			);
		if( cachedValueUpdate.unit ){
			onChangeUnits( cachedValueUpdate.unit );
		}

		setCacheValue( cachedValueUpdate );
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
						className={ 'uagb-range-control__units--' + key.name }
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
		<div className="components-base-control uag-range-control uagb-size-type-field-tabs">
			<div className="uagb-control__header">
				<ResponsiveToggle
					label= { props.label }
					responsive= { props.responsive }
				/>
				<div className="uagb-range-control__actions">
					<Tooltip
						text={ __( 'Reset', 'ultimate-addons-for-gutenberg' )}
						key={ 'reset' }
					>
					<Button
						className="uagb-reset"
						isSecondary
						isSmall
						onClick={ ( e ) => {
							e.preventDefault();
							resetValues();
						} }
					>
						<Dashicon icon="image-rotate" />
					</Button>
					</Tooltip>
					{ props.displayUnit && (
						<ButtonGroup
							className="uagb-range-control__units"
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
			<div className="uagb-range-control__mobile-controls">
				<RangeControl
					value={ props?.value }
					onChange={ handleOnChange }
					withInputField={ false }
					allowReset={ false }
					max={ max }
					min={ min }
					step={ props.step || 1 }
					initialPosition = {props?.value}
				/>
				{ withInputField && isNumberControlSupported && (
					<NumberControl
						disabled={ props.disabled }
						isShiftStepEnabled={ isShiftStepEnabled }
						max={ max }
						min={ min }
						onChange={ handleOnChange }
						value={ props?.value }
						step={ props.step || 1 }
					/>
				) }
			</div>
			{ props.help && (
				<p className="uag-control-help-notice">{ props.help }</p>
			) }
		</div>
	);
};

Range.defaultProps = {
	label: __( 'Margin', 'ultimate-addons-for-gutenberg' ),
	className: '',
	allowReset: true,
	withInputField: true,
	isShiftStepEnabled: true,
	max: Infinity,
	min: -Infinity,
	resetFallbackValue: '',
	placeholder: null,
	unit: [ 'px', 'em' ],
	displayUnit: true,
	responsive: false,
	onChange: () => {},
};

export default Range;
