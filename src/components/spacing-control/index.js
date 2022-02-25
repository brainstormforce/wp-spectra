/**
 * External dependencies
 */
import styles from './editor.lazy.scss';
import React, { useLayoutEffect } from 'react';
import { __, sprintf } from '@wordpress/i18n';
import { ButtonGroup, Button, Tooltip, Dashicon } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import { useDeviceType } from '@Controls/getPreviewType';
import ResponsiveToggle from '../responsive-toggle';

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

	const defaultCache = {
		...props,
	};

	const [ cachedValue, setCacheValue ] = useState( defaultCache );

	const {
		label,
		unit,
		mUnit,
		tUnit,
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

	useEffect( () => {
		let cachedValueUpdate = { ...cachedValue };

		if ( undefined !== props ) {
			cachedValueUpdate = { ...props, ...cachedValue };
			setCacheValue( cachedValueUpdate );
		}
	}, [] );

	useEffect( () => {
		const cachedValueUpdate = { ...cachedValue };
		const propsValue = { ...props };
		if (
			JSON.stringify( cachedValueUpdate ) !== JSON.stringify( propsValue )
		) {
			setCacheValue( cachedValueUpdate );
		}
	}, [ props ] );

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
	const onChangeTopValue = ( event, device, value = '' ) => {
		let newValue = value;

		if ( '' === value && '' !== event ) {
			newValue =
				event.target.value === ''
					? undefined
					: Number( event.target.value );
		}

		if ( link.value ) {
			changeLinkedValues( newValue, device );
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

	const onChangeRightValue = ( event, device, value = '' ) => {
		let newValue = value;

		if ( '' === value && '' !== event ) {
			newValue =
				event.target.value === ''
					? undefined
					: Number( event.target.value );
		}
		if ( link.value ) {
			changeLinkedValues( newValue, device );
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

	const onChangeBottomValue = ( event, device, value = '' ) => {
		let newValue = value;

		if ( '' === value && '' !== event ) {
			newValue =
				event.target.value === ''
					? undefined
					: Number( event.target.value );
		}
		if ( link.value ) {
			changeLinkedValues( newValue, device );
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

	const onChangeLeftValue = ( event, device, value = '' ) => {
		let newValue = value;

		if ( '' === value && '' !== event ) {
			newValue =
				event.target.value === ''
					? undefined
					: Number( event.target.value );
		}
		if ( link.value ) {
			changeLinkedValues( newValue, device );
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
					value={ valueTop.value }
					min={ 0 }
				/>
				<input
					className="uagb-spacing-control__number"
					type="number"
					onChange={ ( e ) => onChangeRightValue( e, 'desktop' ) }
					value={ valueRight.value }
					min={ 0 }
				/>
				<input
					className="uagb-spacing-control__number"
					type="number"
					onChange={ ( e ) => onChangeBottomValue( e, 'desktop' ) }
					value={ valueBottom.value }
					min={ 0 }
				/>
				<input
					className="uagb-spacing-control__number"
					type="number"
					onChange={ ( e ) => onChangeLeftValue( e, 'desktop' ) }
					value={ valueLeft.value }
					min={ 0 }
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
					value={ valueTopTablet.value }
					min={ 0 }
				/>
				<input
					className="uagb-spacing-control__number"
					type="number"
					onChange={ ( e ) => onChangeRightValue( e, 'tablet' ) }
					value={ valueRightTablet.value }
					min={ 0 }
				/>
				<input
					className="uagb-spacing-control__number"
					type="number"
					onChange={ ( e ) => onChangeBottomValue( e, 'tablet' ) }
					value={ valueBottomTablet.value }
					min={ 0 }
				/>
				<input
					className="uagb-spacing-control__number"
					type="number"
					onChange={ ( e ) => onChangeLeftValue( e, 'tablet' ) }
					value={ valueLeftTablet.value }
					min={ 0 }
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
					value={ valueTopMobile.value }
					min={ 0 }
				/>
				<input
					className="uagb-spacing-control__number"
					type="number"
					onChange={ ( e ) => onChangeRightValue( e, 'mobile' ) }
					value={ valueRightMobile.value }
					min={ 0 }
				/>
				<input
					className="uagb-spacing-control__number"
					type="number"
					onChange={ ( e ) => onChangeBottomValue( e, 'mobile' ) }
					value={ valueBottomMobile.value }
					min={ 0 }
				/>
				<input
					className="uagb-spacing-control__number"
					type="number"
					onChange={ ( e ) => onChangeLeftValue( e, 'mobile' ) }
					value={ valueLeftMobile.value }
					min={ 0 }
				/>
				{ linkHtml }
			</div>
		</>
	);

	const resetValues = () => {
		const device = deviceType.toLowerCase();

		const cachedValueUpdate = { ...cachedValue };
		setCacheValue( cachedValueUpdate );

		switch ( device ) {
			case 'desktop':
				onChangeTopValue( '', 'desktop', cachedValue?.valueTop?.value );
				onChangeRightValue(
					'',
					'desktop',
					cachedValue?.valueRight?.value
				);
				onChangeBottomValue(
					'',
					'desktop',
					cachedValue?.valueBottom?.value
				);
				onChangeLeftValue( '', 'desktop', cachedValue?.valueLeft?.value );
				setAttributes( { [ unit?.label ]: cachedValue?.unit?.value } );
				break;
			case 'tablet':
				onChangeTopValue(
					'',
					'tablet',
					cachedValue?.valueTopTablet?.value
				);
				onChangeRightValue(
					'',
					'tablet',
					cachedValue?.valueRightTablet?.value
				);
				onChangeBottomValue(
					'',
					'tablet',
					cachedValue?.valueBottomTablet?.value
				);
				onChangeLeftValue(
					'',
					'tablet',
					cachedValue?.valueLeftTablet?.value
				);
				setAttributes( { [ tUnit?.label ]: cachedValue?.tUnit?.value } );
				break;
			case 'mobile':
				onChangeTopValue(
					'',
					'mobile',
					cachedValue?.valueTopMobile?.value
				);
				onChangeRightValue(
					'',
					'mobile',
					cachedValue?.valueRightMobile?.value
				);
				onChangeBottomValue(
					'',
					'mobile',
					cachedValue?.valueBottomMobile?.value
				);
				onChangeLeftValue(
					'',
					'mobile',
					cachedValue?.valueLeftMobile?.value
				);
				setAttributes( { [ mUnit?.label ]: cachedValue?.mUnit?.value } );
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
						<Button
							className="uagb-reset"
							disabled={ false }
							isSecondary
							isSmall
							onClick={ ( e ) => {
								e.preventDefault();
								resetValues();
							} }
						>
							<Dashicon icon="image-rotate" />
						</Button>
						<ButtonGroup
							className="uagb-spacing-control__units"
							aria-label={ __(
								'Select Units',
								'ultimate-addons-for-gutenberg'
							) }
						>
							{ onUnitSizeClick( unitSizes ) }
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
