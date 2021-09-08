import {
	ButtonGroup,
	Button,
	Tooltip,
	Dashicon,
	RangeControl,
	__experimentalNumberControl as NumberControl,
} from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
const { useSelect, useDispatch } = wp.data;

import { __, sprintf } from '@wordpress/i18n';
import map from 'lodash/map';
import styles from './editor.lazy.scss';
import React, { useLayoutEffect } from 'react';

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
		resetDisabled: true,
		unit: props.unit.value,
	};

	const [ cachedValue, setCacheValue ] = useState( defaultCache );
	const [ displayResponsive, toggleResponsive ] = useState( false );

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
			cachedValueUpdate.resetDisabled = false;
			setCacheValue( cachedValueUpdate );
		}
	}, [ props.value ] );

	useEffect( () => {
		const cachedValueUpdate = { ...cachedValue };

		if (
			JSON.stringify( props.unit.value ) !==
			JSON.stringify( cachedValueUpdate.unit )
		) {
			cachedValueUpdate.resetDisabled = false;
			setCacheValue( cachedValueUpdate );
		}
	}, [ props.unit ] );

	const {
		__experimentalSetPreviewDeviceType: setPreviewDeviceType,
	} = useDispatch( 'core/edit-post' );
	const customSetPreviewDeviceType = ( device ) => {
		setPreviewDeviceType( device );
		toggleResponsive( ! displayResponsive );
	};
	const deviceType = useSelect( ( select ) => {
		return select( 'core/edit-post' ).__experimentalGetPreviewDeviceType();
	}, [] );
	const devicesSvgs = {
		desktop: (
			<svg
				width="8"
				height="7"
				viewBox="0 0 8 7"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z" />
			</svg>
		),
		tablet: (
			<svg
				width="6"
				height="7"
				viewBox="0 0 6 7"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z" />
			</svg>
		),
		mobile: (
			<svg
				width="4"
				height="7"
				viewBox="0 0 4 7"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z" />
			</svg>
		),
	};
	const devices = [
		{
			name: 'Desktop',
			title: devicesSvgs.desktop,
			itemClass: 'uagb-desktop-tab uagb-responsive-tabs',
		},
		{
			name: 'Tablet',
			title: devicesSvgs.tablet,
			itemClass: 'uagb-tablet-tab uagb-responsive-tabs',
		},
		{
			name: 'Mobile',
			key: 'mobile',
			title: devicesSvgs.mobile,
			itemClass: 'uagb-mobile-tab uagb-responsive-tabs',
		},
	];

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

	const handleOnChange = ( value ) => {
		setValue( value );
		const parsedValue = parseFloat( value );
		props.onChange( parsedValue );
	};

	const resetValues = () => {
		const cachedValueUpdate = { ...cachedValue };

		setValue( cachedValueUpdate.value );
		props.onChange( cachedValueUpdate.value );
		onChangeUnits( cachedValueUpdate.unit );

		cachedValueUpdate.resetDisabled = true;
		setCacheValue( cachedValueUpdate );
	};

	const onChangeUnits = ( value ) => {
		props.setAttributes( { [ props.unit.label ]: value } );
	};

	const onUnitSizeClick = ( uSizes ) => {
		const items = [];
		uSizes.map( ( key ) =>
			items.push(
				<Tooltip
					text={ sprintf(
						__( '%s units', 'ultimate-addons-for-gutenberg' ),
						key.name
					) }
				>
					<Button
						key={ key.unitValue }
						className={ 'uagb-range-control__units--' + key.name }
						isSmall
						isPrimary={ props.unit.value === key.unitValue }
						isSecondary={ props.unit.value !== key.unitValue }
						aria-pressed={ props.unit.value === key.unitValue }
						aria-label={ sprintf(
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

	const commonResponsiveHandler = () => {
		toggleResponsive( ! displayResponsive );
	};

	return (
		<div className="components-base-control uag-range-control uagb-size-type-field-tabs">
			<div className="uagb-control__header">
				<div className="uag-responsive-label-wrap">
					{ props.label && (
						<span className="uag-control-label">
							{ props.label }
						</span>
					) }
					{ ! displayResponsive && props.responsive && (
						<Button
							key="uag-responsive-common-button"
							className="uag-responsive-common-button"
							onClick={ commonResponsiveHandler }
						>
							{ devicesSvgs[ deviceType.toLowerCase() ] }
						</Button>
					) }
					{ displayResponsive && props.responsive && (
						<ButtonGroup
							className="uagb-range-control-responsive components-tab-panel__tabs"
							aria-label={ __(
								'Device',
								'ultimate-addons-for-gutenberg'
							) }
						>
							{ map(
								devices,
								( { name, key, title, itemClass } ) => (
									<Button
										key={ key }
										className={ `components-button components-tab-panel__tabs-item uagb-range-control-responsive-item ${ itemClass }${
											name === deviceType
												? ' active-tab'
												: ''
										}` }
										aria-pressed={ deviceType === name }
										onClick={ () =>
											customSetPreviewDeviceType( name )
										}
									>
										{ title }
									</Button>
								)
							) }
						</ButtonGroup>
					) }
				</div>
				<div className="uagb-range-control__actions">
					<Button
						className="uagb-reset"
						disabled={ cachedValue.resetDisabled }
						isSecondary
						isSmall
						onClick={ ( e ) => {
							e.preventDefault();
							resetValues();
						} }
					>
						<Dashicon icon="image-rotate" />
					</Button>
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
					value={ props.value || '' }
					onChange={ handleOnChange }
					withInputField={ false }
					allowReset={ false }
					max={ props.max }
					min={ props.min }
					initialPosition={ 0 }
					step={ props.step || 1 }
				/>
				{ withInputField && isNumberControlSupported && (
					<NumberControl
						disabled={ props.disabled }
						isShiftStepEnabled={ isShiftStepEnabled }
						max={ props.max }
						min={ props.min }
						onChange={ handleOnChange }
						value={ props.value || '' }
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
