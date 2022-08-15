/**
 * External dependencies
 */
import styles from './editor.lazy.scss';
import React, { useLayoutEffect } from 'react';
import { __, sprintf } from '@wordpress/i18n';
import { ButtonGroup, Button, Tooltip } from '@wordpress/components';
import { useDeviceType } from '@Controls/getPreviewType';
import ResponsiveToggle from '../responsive-toggle';
import UAGReset from '../reset';

const SpacingControl = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const deviceType = useDeviceType();
	const responsive = true;

	const {
		label,
		unit,
		mUnit,
		tUnit,
		disableUnits,
		valueBottom,
		valueLeft,
		valueRight,
		valueTop,
		valueBottomTablet,
		valueLeftTablet,
		valueRightTablet,
		valueTopTablet,
		valueBottomMobile,
		valueLeftMobile,
		valueRightMobile,
		valueTopMobile,
		link,
		setAttributes,
	} = props;

	const onChangeUnits = ( value ) => {
		if ( 'Mobile' === deviceType ) {
			setAttributes( { [ mUnit.label ]: value.unitValue } );
		} else if ( 'Tablet' === deviceType ) {
			setAttributes( { [ tUnit.label ]: value.unitValue } );
		} else {
			setAttributes( { [ unit.label ]: value.unitValue } );
		}
	};
	const changeLinkedValues = ( newValue, device ) => {
		switch ( device ) {
			case 'desktop':
				// code block
				setAttributes( { [ valueTop.label ]: newValue } );
				setAttributes( { [ valueRight.label ]: newValue } );
				setAttributes( { [ valueBottom.label ]: newValue } );
				setAttributes( { [ valueLeft.label ]: newValue } );
				break;
			case 'tablet':
				// code block
				setAttributes( { [ valueTopTablet.label ]: newValue } );
				setAttributes( { [ valueRightTablet.label ]: newValue } );
				setAttributes( { [ valueBottomTablet.label ]: newValue } );
				setAttributes( { [ valueLeftTablet.label ]: newValue } );
				break;
			case 'mobile':
				// code block
				setAttributes( { [ valueTopMobile.label ]: newValue } );
				setAttributes( { [ valueRightMobile.label ]: newValue } );
				setAttributes( { [ valueBottomMobile.label ]: newValue } );
				setAttributes( { [ valueLeftMobile.label ]: newValue } );
				break;
		}
	};
	const onChangeTopValue = ( event, device, value = '', resetLink = false ) => {
		let newValue = value;
		if ( '' === value && '' !== event ) {

			newValue =
				event.target.value === ''
					? 0
					: Number( event.target.value );
		}

		if ( ! resetLink ) {
			if ( link.value ) {
				changeLinkedValues( newValue, device );
			} else{
				changedUnLinkedValues( device );
			}
		}

		switch ( device ) {
			case 'desktop':
				setAttributes( { [ valueTop.label ]: newValue } );
				break;
			case 'tablet':
				setAttributes( { [ valueTopTablet.label ]: newValue } );
				break;
			case 'mobile':
				setAttributes( { [ valueTopMobile.label ]: newValue } );
				break;
		}

	};
	const changedUnLinkedValues = ( device ) => {

		switch ( device ) {
			case 'desktop':
				// code block
				setAttributes( { [ valueTop.label ]: ( '' === valueTop.value || undefined === valueTop.value ) ? 0 : valueTop.value  } );
				setAttributes( { [ valueRight.label ]: ( '' === valueRight.value || undefined === valueRight.value ) ? 0 : valueRight.value  } );
				setAttributes( { [ valueBottom.label ]: ( '' === valueBottom.value || undefined === valueBottom.value ) ? 0 : valueBottom.value  } );
				setAttributes( { [ valueLeft.label ]: ( '' === valueLeft.value || undefined === valueLeft.value ) ? 0 : valueLeft.value  } );
				break;
			case 'tablet':
				// code block
				setAttributes( { [ valueTopTablet.label ]: ( undefined === valueTopTablet.value || '' === valueTopTablet.value ) ? 0 : valueTopTablet.value } );
				setAttributes( { [ valueRightTablet.label ]: ( undefined === valueRightTablet.value || '' === valueRightTablet.value ) ? 0 : valueRightTablet.value } );
				setAttributes( { [ valueBottomTablet.label ]: ( undefined === valueBottomTablet.value || '' === valueBottomTablet.value ) ? 0 : valueBottomTablet.value } );
				setAttributes( { [ valueLeftTablet.label ]: ( undefined === valueLeftTablet.value || '' === valueLeftTablet.value ) ? 0 : valueLeftTablet.value } );
				break;
			case 'mobile':
				// code block
				setAttributes( { [ valueTopMobile.label ]: ( '' === valueTopMobile.value || undefined === valueTopMobile.value ) ? 0 : valueTopMobile.value } );
				setAttributes( { [ valueRightMobile.label ]: ( '' === valueRightMobile.value || undefined === valueRightMobile.value ) ? 0 : valueRightMobile.value } );
				setAttributes( { [ valueBottomMobile.label ]: ( '' === valueBottomMobile.value || undefined === valueBottomMobile.value ) ? 0 : valueBottomMobile.value } );
				setAttributes( { [ valueLeftMobile.label ]: ( '' === valueLeftMobile.value || undefined === valueLeftMobile.value ) ? 0 : valueLeftMobile.value } );
				break;
		}

	};
	const onChangeRightValue = ( event, device, value = '', resetLink = false ) => {
		let newValue = value;

		if ( '' === value && '' !== event ) {
			newValue =
				event.target.value === ''
					? 0
					: Number( event.target.value );
		}
		if ( ! resetLink ) {
			if ( link.value ) {
				changeLinkedValues( newValue, device );
			}else {
				changedUnLinkedValues( device );
			}
		}

		switch ( device ) {
			case 'desktop':
				setAttributes( { [ valueRight.label ]: newValue } );
				break;
			case 'tablet':
				setAttributes( { [ valueRightTablet.label ]: newValue } );
				break;
			case 'mobile':
				setAttributes( { [ valueRightMobile.label ]: newValue } );
				break;
		}
	};

	const onChangeBottomValue = ( event, device, value = '', resetLink = false ) => {
		let newValue = value;

		if ( '' === value && '' !== event ) {
			newValue =
				event.target.value === ''
					? 0
					: Number( event.target.value );
		}
		if ( ! resetLink ) {
			if ( link.value ) {
				changeLinkedValues( newValue, device );
			}else {
				changedUnLinkedValues( deviceType );
			}
		}

		switch ( device ) {
			case 'desktop':
				setAttributes( { [ valueBottom.label ]: newValue } );
				break;
			case 'tablet':
				setAttributes( { [ valueBottomTablet.label ]: newValue } );
				break;
			case 'mobile':
				setAttributes( { [ valueBottomMobile.label ]: newValue } );
				break;
		}
	};

	const onChangeLeftValue = ( event, device, value = '', resetLink = false ) => {
		let newValue = value;

		if ( '' === value && '' !== event ) {
			newValue =
				event.target.value === ''
					? 0
					: Number( event.target.value );
		}
		if ( ! resetLink ) {
		if ( link.value && ! resetLink ) {
				changeLinkedValues( newValue, device );
			}else {
				changedUnLinkedValues( deviceType );
			}
		}

		switch ( device ) {
			case 'desktop':
				setAttributes( { [ valueLeft.label ]: newValue } );
				break;
			case 'tablet':
				setAttributes( { [ valueLeftTablet.label ]: newValue } );
				break;
			case 'mobile':
				setAttributes( { [ valueLeftMobile.label ]: newValue } );
				break;
		}
	};

	let unitSizes = [
		{
			name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
			unitValue: 'px',
		},
		{
			name: __( 'Em', 'ultimate-addons-for-gutenberg' ),
			unitValue: 'em',
		},
		{
			name: __( '%', 'ultimate-addons-for-gutenberg' ),
			unitValue: '%',
		},
	];
	if ( props.units ) {
		unitSizes = props.units;
	}

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
				>
					<Button
						key={ key.unitValue }
						className={ 'uagb-range-control__units--' + key.name }
						isSmall
						isPrimary={
							( 'Desktop' === deviceType &&
								unit.value === key.unitValue ) ||
							( 'Mobile' === deviceType &&
								mUnit.value === key.unitValue ) ||
							( 'Tablet' === deviceType &&
								tUnit.value === key.unitValue )
						}
						isSecondary={
							unit.value !== key.unitValue ||
							mUnit.value !== key.unitValue ||
							tUnit.value !== key.unitValue
						}
						aria-pressed={
							( 'Desktop' === deviceType &&
								unit.value === key.unitValue ) ||
							( 'Mobile' === deviceType &&
								mUnit.value === key.unitValue ) ||
							( 'Tablet' === deviceType &&
								tUnit.value === key.unitValue )
						}
						data-device-type={ deviceType }
						aria-label={ sprintf(
							/* translators: abbreviation for units */
							__( '%s units', 'ultimate-addons-for-gutenberg' ),
							key.name
						) }
						onClick={ () => onChangeUnits( key ) }
					>
						{ key.unitValue }
					</Button>
				</Tooltip>
			)
		);

		return items;
	};

	let linkHtml = '';

	if ( link ) {
		linkHtml = (
			<span // eslint-disable-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
				className="uagb-spacing-control__link uagb-spacing-control-connected dashicons dashicons-admin-links "
				onClick={ () => {
					changedUnLinkedValues( deviceType.toLowerCase() );
					setAttributes( { [ link.label ]: false } );
				} }
			></span>
		);

		if ( ! link.value ) {
			linkHtml = (
				<span // eslint-disable-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
					className="uagb-spacing-control__link uagb-spacing-control-disconnected dashicons dashicons-editor-unlink"
					onClick={ () => {
						onLinkClickHandler();
						setAttributes( { [ link.label ]: true } );
					} }
				></span>
			);
		}
	}
	const onLinkClickHandler = () => {
		let linkValue;
		const device = deviceType.toLowerCase();

		switch ( device ) {
			case 'desktop':
				linkValue = valueTop.value;
				break;
			case 'tablet':
				linkValue = valueTopTablet.value;
				break;
			case 'mobile':
				linkValue = valueTopMobile.value;
				break;
		}
		changeLinkedValues( linkValue, device );
	};
	const output = {};
	output.Desktop = (
		<>
			<div className="uagb-spacing-control__inputs">
				<input
					className="uagb-spacing-control__number"
					type="number"
					onChange={ ( e ) => onChangeTopValue( e, 'desktop' ) }
					value={ ( undefined !== valueTop.value ) ? valueTop.value : '' }
				/>
				<input
					className="uagb-spacing-control__number"
					type="number"
					onChange={ ( e ) => onChangeRightValue( e, 'desktop' ) }
					value={ ( undefined !== valueRight.value ) ? valueRight.value : '' }
				/>
				<input
					className="uagb-spacing-control__number"
					type="number"
					onChange={ ( e ) => onChangeBottomValue( e, 'desktop' ) }
					value={ ( undefined !== valueBottom.value ) ? valueBottom.value : '' }
				/>
				<input
					className="uagb-spacing-control__number"
					type="number"
					onChange={ ( e ) => onChangeLeftValue( e, 'desktop' ) }
					value={ ( undefined !== valueLeft.value ) ? valueLeft.value : '' }
				/>
				{ linkHtml }
			</div>
		</>
	);
	output.Tablet = (
		<>
			<div className="uagb-spacing-control__inputs">
				<input
					className="uagb-spacing-control__number"
					type="number"
					onChange={ ( e ) => onChangeTopValue( e, 'tablet' ) }
					value={ ( undefined !== valueTopTablet.value ) ? valueTopTablet.value : '' }
				/>
				<input
					className="uagb-spacing-control__number"
					type="number"
					onChange={ ( e ) => onChangeRightValue( e, 'tablet' ) }
					value={ ( undefined !== valueRightTablet.value ) ? valueRightTablet.value : '' }
				/>
				<input
					className="uagb-spacing-control__number"
					type="number"
					onChange={ ( e ) => onChangeBottomValue( e, 'tablet' ) }
					value={ ( undefined !== valueBottomTablet.value ) ? valueBottomTablet.value : '' }
				/>
				<input
					className="uagb-spacing-control__number"
					type="number"
					onChange={ ( e ) => onChangeLeftValue( e, 'tablet' ) }
					value={ ( undefined !== valueLeftTablet.value ) ? valueLeftTablet.value : '' }
				/>
				{ linkHtml }
			</div>
		</>
	);
	output.Mobile = (
		<>
			<div className="uagb-spacing-control__inputs">
				<input
					className="uagb-spacing-control__number"
					type="number"
					onChange={ ( e ) => onChangeTopValue( e, 'mobile' ) }
					value={ ( undefined !== valueTopMobile.value ) ? valueTopMobile.value : '' }
				/>
				<input
					className="uagb-spacing-control__number"
					type="number"
					onChange={ ( e ) => onChangeRightValue( e, 'mobile' ) }
					value={ ( undefined !== valueRightMobile.value ) ? valueRightMobile.value : '' }
				/>
				<input
					className="uagb-spacing-control__number"
					type="number"
					onChange={ ( e ) => onChangeBottomValue( e, 'mobile' ) }
					value={ ( undefined !== valueBottomMobile.value ) ? valueBottomMobile.value : '' }
				/>
				<input
					className="uagb-spacing-control__number"
					type="number"
					onChange={ ( e ) => onChangeLeftValue( e, 'mobile' ) }
					value={ ( undefined !== valueLeftMobile.value ) ? valueLeftMobile.value : '' }
				/>
				{ linkHtml }
			</div>
		</>
	);

	const resetValues = ( defaultValues ) => {
		const device = deviceType.toLowerCase();

		switch ( device ) {
			case 'desktop':
				onChangeTopValue( '', 'desktop', defaultValues[valueTop.label], true );
				onChangeRightValue( '', 'desktop', defaultValues[valueRight.label], true );
				onChangeBottomValue( '', 'desktop', defaultValues[valueBottom.label], true );
				onChangeLeftValue( '', 'desktop', defaultValues[valueLeft.label], true );
				setAttributes( { [ unit?.label ]: defaultValues[unit?.label] } );
				break;
			case 'tablet':
				onChangeTopValue( '', 'tablet', defaultValues[valueTopTablet.label], true );
				onChangeRightValue( '', 'tablet', defaultValues[valueRightTablet.label], true );
				onChangeBottomValue( '', 'tablet', defaultValues[valueBottomTablet.label], true );
				onChangeLeftValue( '', 'tablet', defaultValues[valueLeftTablet.label], true );
				setAttributes( { [ tUnit?.label ]: defaultValues[tUnit?.label] } );
				break;
			case 'mobile':
				onChangeTopValue( '', 'mobile', defaultValues[valueTopMobile.label], true );
				onChangeRightValue( '', 'mobile', defaultValues[valueRightMobile.label], true );
				onChangeBottomValue( '', 'mobile', defaultValues[valueBottomMobile.label], true );
				onChangeLeftValue( '', 'mobile', defaultValues[valueLeftMobile.label], true );
				setAttributes( { [ mUnit?.label ]: defaultValues[mUnit?.label] } );
				break;
		}
	};
	return (
		<div className="components-base-control uagb-spacing-control">
			<div className="uagb-size-type-field-tabs">
				<div className="uagb-control__header">
				<ResponsiveToggle
					label= { label }
					responsive= { responsive }
				/>
					<div className="uagb-control__actions">
						<UAGReset
							onReset={resetValues}
							attributeNames = {[
								valueTop?.label,
								valueRight?.label,
								valueBottom?.label,
								valueLeft?.label,
								valueTopTablet?.label,
								valueRightTablet?.label,
								valueBottomTablet?.label,
								valueLeftTablet?.label,
								valueTopMobile?.label,
								valueRightMobile?.label,
								valueBottomMobile?.label,
								valueLeftMobile?.label,
								unit?.label,
								tUnit?.label,
								mUnit?.label
							]}
						/>
						<ButtonGroup
							className="uagb-control__units"
							aria-label={ __(
								'Select Units',
								'ultimate-addons-for-gutenberg'
							) }
						>
							{ !disableUnits && onUnitSizeClick( unitSizes ) }
						</ButtonGroup>
					</div>
				</div>
				{ output[ deviceType ] ? output[ deviceType ] : output.Desktop }
				<div className="uagb-spacing-control__input-labels">
					<span className="uagb-spacing-control__number-label">
						{ __( 'Top', 'ultimate-addons-for-gutenberg' ) }
					</span>
					<span className="uagb-spacing-control__number-label">
						{ __( 'Right', 'ultimate-addons-for-gutenberg' ) }
					</span>
					<span className="uagb-spacing-control__number-label">
						{ __( 'Bottom', 'ultimate-addons-for-gutenberg' ) }
					</span>
					<span className="uagb-spacing-control__number-label">
						{ __( 'Left', 'ultimate-addons-for-gutenberg' ) }
					</span>
					<span className="uagb-spacing-control__number-label uagb-spacing-control__link-label"></span>
				</div>
			</div>
			{ props.help && (
				<p className="uag-control-help-notice">{ props.help }</p>
			) }
		</div>
	);

};

export default SpacingControl;
