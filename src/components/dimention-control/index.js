/**
 * External dependencies
 */
 import './editor.scss';
 import { __, sprintf } from '@wordpress/i18n';
 import { ButtonGroup, Button, TabPanel, Tooltip, Dashicon } from '@wordpress/components';
 import { useDispatch } from '@wordpress/data';
 
 const DimensionsControl = props =>  {

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
		deviceType,
	} = props;

	const {
		__experimentalSetPreviewDeviceType: setPreviewDeviceType,
	} = useDispatch( 'core/edit-post' );

	const customSetPreviewDeviceType = ( device ) => {
		setPreviewDeviceType( device );
    };
    
    
	 const onChangeUnits = ( value ) => {
		if ( 'mobile' === value.className ) {
			props.setAttributes( { [ mUnit.label  ]: value.unitValue } );
		} else if ( 'tablet' === value.className ) {
			props.setAttributes( { [ tUnit.label  ]: value.unitValue } );
		} else {
			props.setAttributes( { [ unit.label  ]: value.unitValue } );
		}
     }
 
	const onChangeTopValue = ( event, device ) => {

		const newValue = ( event.target.value === '' ) ? undefined : Number( event.target.value );
		
		if ( 'desktop' === device ) {
			props.setAttributes( { [ valueTop.label  ]: newValue } );
		} else if ( 'tablet' === device ) {
			props.setAttributes( { [ valueTopTablet.label  ]: newValue } );
		} else if ( 'mobile' === device ) {
			props.setAttributes( { [ valueTopMobile.label  ]: newValue } );
		}
	};

	const onChangeRightValue = ( event, device ) => {

		const newValue = ( event.target.value === '' ) ? undefined : Number( event.target.value );

		if ( 'desktop' === device ) {
			props.setAttributes( { [ valueRight.label  ]: newValue } );
		} else if ( 'tablet' === device ) {
			props.setAttributes( { [ valueRightTablet.label  ]: newValue } );
		} else if ( 'mobile' === device ) {
			props.setAttributes( { [ valueRightMobile.label  ]: newValue } );
		}
	};

	const onChangeBottomValue = ( event, device ) => {
		const newValue = ( event.target.value === '' ) ? undefined : Number( event.target.value );

		if ( 'desktop' === device ) {
			props.setAttributes( { [ valueBottom.label  ]: newValue } );
		} else if ( 'tablet' === device ) {
			props.setAttributes( { [ valueBottomTablet.label  ]: newValue } );
		} else if ( 'mobile' === device ) {
			props.setAttributes( { [ valueBottomMobile.label  ]: newValue } );
		}
	};

	const onChangeLeftValue = ( event, device ) => {
		const newValue = ( event.target.value === '' ) ? undefined : Number( event.target.value );

		if ( 'desktop' === device ) {
			props.setAttributes( { [ valueLeft.label  ]: newValue } );
		} else if ( 'tablet' === device ) {
			props.setAttributes( { [ valueLeftTablet.label  ]: newValue } );
		} else if ( 'mobile' === device ) {
			props.setAttributes( { [ valueLeftMobile.label  ]: newValue } );
		}
	};

	const unitSizes = [
		{
			name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
			unitValue: 'px',
			className: 'desktop'
		},
		{
			name: __( 'Em', 'ultimate-addons-for-gutenberg' ),
			unitValue: 'em',
			className: 'desktop'
		},
	];
	const mobileUnitSizes = [
		{
			name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
			unitValue: 'px',
			className: 'mobile'
		},
		{
			name: __( 'Em', 'ultimate-addons-for-gutenberg' ),
			unitValue: 'em',
			className: 'mobile'
		},
	];

	const tabletUnitSizes = [
		{
			name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
			unitValue: 'px',
			className: 'tablet'
		},
		{
			name: __( 'Em', 'ultimate-addons-for-gutenberg' ),
			unitValue: 'em',
			className: 'tablet'
		},
	];

	const onSelectDevice = ( tabName ) => {

		let selected = 'desktop';
		switch ( tabName ) {
			case 'desktop':
				selected = 'tablet';
				customSetPreviewDeviceType( 'Desktop' )
				break;
			case 'tablet':
				selected = 'mobile';
				customSetPreviewDeviceType( 'Tablet' )
				break;
			case 'mobile':
				selected = 'desktop';
				customSetPreviewDeviceType( 'Mobile' )
				break;
			default:
				break;
		}

		const buttons = document.getElementsByClassName( `uagb-spacing-control__mobile-controls-item--spacing` );

		for( let i = 0; i < buttons.length; i++ ) {
			buttons[ i ].style.display = 'none';
		}

		if ( tabName === 'default' ) {
			const button = document.getElementsByClassName( `uagb-spacing-control__mobile-controls-item-spacing--tablet` );
			button[ 0 ].click();
		} else {
			const button = document.getElementsByClassName( `uagb-spacing-control__mobile-controls-item-spacing--${ selected }` );
			button[ 0 ].style.display = 'block';
		}
	};
	const onUnitSizeClick = ( unitSizes ) => {

		const items = [];
		
		unitSizes.map( key => { items.push(
			<Tooltip text={ sprintf(
				__( '%s units', 'ultimate-addons-for-gutenberg' ),
				key.name
			) }>
				<Button
					key={ key.unitValue }
					className={ 'uagb-range-control__units--' + key.name }
					isSmall
					isPrimary={ ( 'desktop' === key.className && unit.value === key.unitValue ) || ( 'mobile' === key.className && mUnit.value === key.unitValue ) || ( 'tablet' === key.className && tUnit.value === key.unitValue ) }
					isSecondary={ unit.value !== key.unitValue || mUnit.value !== key.unitValue || tUnit.value !== key.unitValue }
					aria-pressed={ ( 'desktop' === key.className && unit.value === key.unitValue ) || ( 'mobile' === key.className && mUnit.value === key.unitValue ) || ( 'tablet' === key.className && tUnit.value === key.unitValue )  }
					data-device-type={ deviceType }
					aria-label={ sprintf(
						__( '%s units', 'ultimate-addons-for-gutenberg' ),
						key.name
					) }
					onClick={ () => onChangeUnits( key ) }
				>
					{ key.unitValue }
				</Button>
			</Tooltip>
			)});
		return( items );
	}

	return (
			<div className='components-base-control uagb-spacing-control'>
			<div className="uagb-spacing-control__header">
				{ label && <p className={ 'uagb-spacing-control__label' }>{ label }</p> }
				<div className="uagb-spacing-control__actions">
					<ButtonGroup className="uagb-spacing-control__units" aria-label={ __( 'Select Units', 'ultimate-addons-for-gutenberg' ) }>
					{ deviceType == 'Desktop' && onUnitSizeClick( unitSizes ) }
					{ deviceType == 'Mobile' && onUnitSizeClick( mobileUnitSizes ) }
					{ deviceType == 'Tablet' && onUnitSizeClick( tabletUnitSizes ) }
					</ButtonGroup>
				</div>
			</div>
			<TabPanel
			className="uagb-spacing-control__mobile-controls"
			activeClass="is-active"
			initialTabName="default"
			onSelect={ onSelectDevice }
			tabs={ [
				{
					name: 'default',
					title: <Dashicon icon="desktop" />,
					className: `uagb-spacing-control__mobile-controls-item uagb-spacing-control__mobile-controls-item--${ props.type } components-button is-button is-default is-secondary uagb-spacing-control__mobile-controls-item--default uagb-spacing-control__mobile-controls-item-${ props.type }--default`,
				},
				{
					name: "desktop",
					title: <Dashicon icon="smartphone" />,
					className: `uagb-spacing-control__mobile-controls-item uagb-spacing-control__mobile-controls-item--spacing components-button is-button is-default is-secondary uagb-spacing-control__mobile-controls-item--desktop uagb-spacing-control__mobile-controls-item-spacing--desktop`,
				},
				{
					name: "tablet",
					title: <Dashicon icon="desktop" />,
					className: `uagb-spacing-control__mobile-controls-item uagb-spacing-control__mobile-controls-item--spacing components-button is-button is-default is-secondary uagb-spacing-control__mobile-controls-item--tablet uagb-spacing-control__mobile-controls-item-spacing--tablet`,
				},
				{
					name: "mobile",
					title: <Dashicon icon="tablet" />,
					className: `uagb-spacing-control__mobile-controls-item uagb-spacing-control__mobile-controls-item--spacing components-button is-button is-default is-secondary uagb-spacing-control__mobile-controls-item--mobile uagb-spacing-control__mobile-controls-item-spacing--mobile`,
				},
			] }>
			{ ( tab ) => {
				let tabout
				if ( "mobile" === tab.name ) {
					tabout = (
						<div className="uagb-spacing-control__inputs">
							<input
								className="uagb-spacing-control__number"
								type="number"
								onChange={ (e) => onChangeTopValue( e, 'mobile' ) }
								value={ valueTopMobile.value }
								min={ 0 }
							/>
							<input
								className="uagb-spacing-control__number"
								type="number"
								onChange={ (e) => onChangeRightValue( e, 'mobile' ) }
								value={ valueRightMobile.value }
								min={ 0 }
							/>
							<input
								className="uagb-spacing-control__number"
								type="number"
								onChange={ (e) => onChangeBottomValue( e, 'mobile' ) }
								value={ valueBottomMobile.value }
								min={ 0 }
							/>
							<input
								className="uagb-spacing-control__number"
								type="number"
								onChange={ (e) => onChangeLeftValue( e, 'mobile' ) }
								value={ valueLeftMobile.value }
								min={ 0 }
							/>
						</div>
					)
				} else if ( "tablet" === tab.name ) {
					tabout = (
						<div className="uagb-spacing-control__inputs">
							<input
								className="uagb-spacing-control__number"
								type="number"
								onChange={ (e) => onChangeTopValue( e, 'tablet' ) }
								value={ valueTopTablet.value }
								min={ 0 }
							/>
							<input
								className="uagb-spacing-control__number"
								type="number"
								onChange={ (e) => onChangeRightValue( e, 'tablet' ) }
								value={ valueRightTablet.value }
								min={ 0 }
							/>
							<input
								className="uagb-spacing-control__number"
								type="number"
								onChange={ (e) => onChangeBottomValue( e, 'tablet' ) }
								value={ valueBottomTablet.value }
								min={ 0 }
							/>
							<input
								className="uagb-spacing-control__number"
								type="number"
								onChange={ (e) => onChangeLeftValue( e, 'tablet' ) }
								value={ valueLeftTablet.value }
								min={ 0 }
							/>
						</div>
					)
				} else {
					tabout = (
						<div className="uagb-spacing-control__inputs">
							<input
								className="uagb-spacing-control__number"
								type="number"
								onChange={ (e) => onChangeTopValue( e, 'desktop' ) }
								value={ valueTop.value }
								min={ 0 }
							/>
							<input
								className="uagb-spacing-control__number"
								type="number"
								onChange={ (e) => onChangeRightValue( e, 'desktop' ) }
								value={ valueRight.value }
								min={ 0 }
							/>
							<input
								className="uagb-spacing-control__number"
								type="number"
								onChange={ (e) => onChangeBottomValue( e, 'desktop' ) }
								value={ valueBottom.value }
								min={ 0 }
							/>
							<input
								className="uagb-spacing-control__number"
								type="number"
								onChange={ (e) => onChangeLeftValue( e, 'desktop' ) }
								value={ valueLeft.value }
								min={ 0 }
							/>
						</div>
					)
				}

				return <div>{ tabout }</div>
			}
		}
		</TabPanel>
			<div className="uagb-spacing-control__input-labels">
				<span className="uagb-spacing-control__number-label">{ __( 'Top', 'ultimate-addons-for-gutenberg' ) }</span>
				<span className="uagb-spacing-control__number-label">{ __( 'Right', 'ultimate-addons-for-gutenberg' ) }</span>
				<span className="uagb-spacing-control__number-label">{ __( 'Bottom', 'ultimate-addons-for-gutenberg' ) }</span>
				<span className="uagb-spacing-control__number-label">{ __( 'Left', 'ultimate-addons-for-gutenberg' ) }</span>
			</div>
		</div>
	);
 }

export default DimensionsControl