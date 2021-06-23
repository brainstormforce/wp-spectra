/**
 * External dependencies
 */
 import './editor.scss';
 import { __, sprintf } from '@wordpress/i18n';
 import { ButtonGroup, Button, TabPanel, Tooltip, Dashicon } from '@wordpress/components';
 import { useDispatch } from '@wordpress/data';
 
 const DimensionsControl = props =>  {

	const {
		__experimentalSetPreviewDeviceType: setPreviewDeviceType,
	} = useDispatch( 'core/edit-post' );

	const customSetPreviewDeviceType = ( device ) => {
		setPreviewDeviceType( device );
    };
    
    const onChangeTop = ( value, device ) => {
        if ( props.type === 'padding' ) {
            props.setAttributes( { [ 'paddingTop' + device  ]: value } );
        } else {
            props.setAttributes( { [ 'marginTop' + device  ]: value } );
        }
     }
 
	const onChangeRight = ( value, device ) => {
        if ( props.type === 'padding' ) {
            props.setAttributes( { [ 'paddingRight' + device  ]: value } );
        } else {
            props.setAttributes( { [ 'marginRight' + device  ]: value } );
        }
     }
 
	const onChangeBottom = ( value, device ) => {
        if ( props.type === 'padding' ) {
            props.setAttributes( { [ 'paddingBottom' + device  ]: value } );
        } else {
            props.setAttributes( { [ 'marginBottom' + device  ]: value } );
        }
     }
 
	 const onChangeLeft = ( value, device ) => {
        if ( props.type === 'padding' ) {
			props.setAttributes( { [ 'paddingLeft' + device ]: value } );
		} else {
			props.setAttributes( { [ 'marginLeft' + device ]: value } );
		}
     }
 
	 const onChangeUnits = ( value ) => {
        if ( props.type === 'padding' ) {
			if( 'mobile' === value.className ){
				props.setAttributes( { mobilePaddingUnit: value.unitValue } );
			}else if( 'tablet' === value.className ){
				props.setAttributes( { tabletPaddingUnit: value.unitValue } );
			}else {
				props.setAttributes( { paddingUnit: value.unitValue } );
			}
        } else {
			if( 'mobile' === value.className ){
				props.setAttributes( { mobileMarginUnit: value.unitValue } );
			}else if( 'tablet' === value.className ){
				props.setAttributes( { tabletMarginUnit: value.unitValue } );
			}else {
				props.setAttributes( { marginUnit: value.unitValue } );
			}
        }
     }
 
        const {
            help,
            instanceId,
            label = __( 'Margin', 'ultimate-addons-for-gutenberg' ),
            type = 'margin',
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
 
        const id = `inspector-uagb-spacing-control-${ instanceId }`;
 
        const onChangeTopValue = ( event ) => {
            const newValue = ( event.target.value === '' ) ? undefined : Number( event.target.value );
                
            let device = '';
            if ( typeof event.target.getAttribute( 'data-device-type' ) !== 'undefined' ) {
                device = event.target.getAttribute( 'data-device-type' );
            }
 
            onChangeTop( newValue, device );
        };
 
        const onChangeRightValue = ( event ) => {
            const newValue = ( event.target.value === '' ) ? undefined : Number( event.target.value );

            let device = '';
            if ( typeof event.target.getAttribute( 'data-device-type' ) !== 'undefined' ) {
                device = event.target.getAttribute( 'data-device-type' );
            }
 
            onChangeRight( newValue, device );
        };
 
        const onChangeBottomValue = ( event ) => {
            const newValue = ( event.target.value === '' ) ? undefined : Number( event.target.value );

            let device = '';
			if ( typeof event.target.getAttribute( 'data-device-type' ) !== 'undefined' ) {
				device = event.target.getAttribute( 'data-device-type' );
			}
 
            onChangeBottom( newValue, device );
        };
 
        const onChangeLeftValue = ( event ) => {
            const newValue = ( event.target.value === '' ) ? undefined : Number( event.target.value );

			let device = '';
			if ( typeof event.target.getAttribute( 'data-device-type' ) !== 'undefined' ) {
				device = event.target.getAttribute( 'data-device-type' );
			}

            onChangeLeft( newValue, device );
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
		const mobilePaddingType = [
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

		const tabletPaddingType = [
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

        const onSelect = ( tabName ) => {
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

			const buttons = document.getElementsByClassName( `uagb-spacing-control__mobile-controls-item--${ props.type }` );

			for( let i = 0; i < buttons.length; i++ ) {
				buttons[ i ].style.display = 'none';
			}

			if ( tabName === 'default' ) {
				const button = document.getElementsByClassName( `uagb-spacing-control__mobile-controls-item-${ props.type }--tablet` );
				button[ 0 ].click();
			} else {
				const button = document.getElementsByClassName( `uagb-spacing-control__mobile-controls-item-${ props.type }--${ selected }` );
				button[ 0 ].style.display = 'block';
			}
		};

		const onUnitSizeClick = ( unitSizes ) => {
			const items = [];
			unitSizes.map( key => items.push(
				<Tooltip text={ sprintf(
					__( '%s units', 'ultimate-addons-for-gutenberg' ),
					key.name
				) }>
					<Button
						key={ key.unitValue }
						className={ 'uagb-range-control__units--' + key.name }
						isSmall
						isPrimary={ ( 'desktop' === key.className && unit === key.unitValue ) || ( 'mobile' === key.className && mUnit === key.unitValue ) || ( 'tablet' === key.className && tUnit === key.unitValue ) }
						isSecondary={ unit !== key.unitValue || mUnit !== key.unitValue || tUnit !== key.unitValue }
						aria-pressed={ ( 'desktop' === key.className && unit === key.unitValue ) || ( 'mobile' === key.className && mUnit === key.unitValue ) || ( 'tablet' === key.className && tUnit === key.unitValue )  }
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
				));
			return( items );
		}

        return (
				<div className='components-base-control uagb-spacing-control'>
				<div className="uagb-spacing-control__header">
					{ label && <p className={ 'uagb-spacing-control__label' }>{ label }</p> }
					<div className="uagb-spacing-control__actions">
						<ButtonGroup className="uagb-spacing-control__units" aria-label={ __( 'Select Units', 'ultimate-addons-for-gutenberg' ) }>
						{ deviceType == 'Desktop' && onUnitSizeClick( unitSizes ) }
						{ deviceType == 'Mobile' && onUnitSizeClick( mobilePaddingType ) }
						{ deviceType == 'Tablet' && onUnitSizeClick( tabletPaddingType ) }
						</ButtonGroup>
					</div>
				</div>
				<TabPanel
				className="uagb-spacing-control__mobile-controls"
				activeClass="is-active"
				initialTabName="default"
				onSelect={ onSelect }
				tabs={ [
					{
						name: 'default',
						title: <Dashicon icon="desktop" />,
						className: `uagb-spacing-control__mobile-controls-item uagb-spacing-control__mobile-controls-item--${ props.type } components-button is-button is-default is-secondary uagb-spacing-control__mobile-controls-item--default uagb-spacing-control__mobile-controls-item-${ props.type }--default`,
					},
					{
						name: "desktop",
						title: <Dashicon icon="smartphone" />,
						className: `uagb-spacing-control__mobile-controls-item uagb-spacing-control__mobile-controls-item--${ props.type } components-button is-button is-default is-secondary uagb-spacing-control__mobile-controls-item--desktop uagb-spacing-control__mobile-controls-item-${ props.type }--desktop`,
					},
					{
						name: "tablet",
						title: <Dashicon icon="desktop" />,
						className: `uagb-spacing-control__mobile-controls-item uagb-spacing-control__mobile-controls-item--${ props.type } components-button is-button is-default is-secondary uagb-spacing-control__mobile-controls-item--tablet uagb-spacing-control__mobile-controls-item-${ props.type }--tablet`,
					},
					{
						name: "mobile",
						title: <Dashicon icon="tablet" />,
						className: `uagb-spacing-control__mobile-controls-item uagb-spacing-control__mobile-controls-item--${ props.type } components-button is-button is-default is-secondary uagb-spacing-control__mobile-controls-item--mobile uagb-spacing-control__mobile-controls-item-${ props.type }--mobile`,
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
									onChange={ onChangeTopValue }
									aria-label={ sprintf(
										__( '%s top', 'ultimate-addons-for-gutenberg' ),
										label
									) }
									aria-describedby={ !! help ? id + '__help' : undefined }
									value={ valueTopMobile !== '' ? valueTopMobile : '' }
									min={ type === 'padding' ? 0 : undefined }
									data-device-type="Mobile"
								/>
								<input
									className="uagb-spacing-control__number"
									type="number"
									onChange={ onChangeRightValue }
									aria-label={ sprintf(
										__( '%s right', 'ultimate-addons-for-gutenberg' ),
										label
									) }
									aria-describedby={ !! help ? id + '__help' : undefined }
									value={ valueRightMobile !== '' ? valueRightMobile : '' }
									min={ type === 'padding' ? 0 : undefined }
									data-device-type="Mobile"
								/>
								<input
									className="uagb-spacing-control__number"
									type="number"
									onChange={ onChangeBottomValue }
									aria-label={ sprintf(
										__( '%s bottom', 'ultimate-addons-for-gutenberg' ),
										label
									) }
									aria-describedby={ !! help ? id + '__help' : undefined }
									value={ valueBottomMobile !== '' ? valueBottomMobile : '' }
									min={ type === 'padding' ? 0 : undefined }
									data-device-type="Mobile"
								/>
								<input
									className="uagb-spacing-control__number"
									type="number"
									onChange={ onChangeLeftValue }
									aria-label={ sprintf(
										__( '%s left', 'ultimate-addons-for-gutenberg' ),
										label
									) }
									aria-describedby={ !! help ? id + '__help' : undefined }
									value={ valueLeftMobile !== '' ? valueLeftMobile : '' }
									min={ type === 'padding' ? 0 : undefined }
									data-device-type="Mobile"
								/>
							</div>
						)
					} else if ( "tablet" === tab.name ) {
						tabout = (
							<div className="uagb-spacing-control__inputs">
								<input
									className="uagb-spacing-control__number"
									type="number"
									onChange={ onChangeTopValue }
									aria-label={ sprintf(
										__( '%s top', 'ultimate-addons-for-gutenberg' ),
										label
									) }
									aria-describedby={ !! help ? id + '__help' : undefined }
									value={ valueTopTablet !== '' ? valueTopTablet : '' }
									min={ type === 'padding' ? 0 : undefined }
									data-device-type="Tablet"
								/>
								<input
									className="uagb-spacing-control__number"
									type="number"
									onChange={ onChangeRightValue }
									aria-label={ sprintf(
										__( '%s right', 'ultimate-addons-for-gutenberg' ),
										label
									) }
									aria-describedby={ !! help ? id + '__help' : undefined }
									value={ valueRightTablet !== '' ? valueRightTablet : '' }
									min={ type === 'padding' ? 0 : undefined }
									data-device-type="Tablet"
								/>
								<input
									className="uagb-spacing-control__number"
									type="number"
									onChange={ onChangeBottomValue }
									aria-label={ sprintf(
										__( '%s bottom', 'ultimate-addons-for-gutenberg' ),
										label
									) }
									aria-describedby={ !! help ? id + '__help' : undefined }
									value={ valueBottomTablet !== '' ? valueBottomTablet : '' }
									min={ type === 'padding' ? 0 : undefined }
									data-device-type="Tablet"
								/>
								<input
									className="uagb-spacing-control__number"
									type="number"
									onChange={ onChangeLeftValue }
									aria-label={ sprintf(
										__( '%s left', 'ultimate-addons-for-gutenberg' ),
										label
									) }
									aria-describedby={ !! help ? id + '__help' : undefined }
									value={ valueLeftTablet !== '' ? valueLeftTablet : '' }
									min={ type === 'padding' ? 0 : undefined }
									data-device-type="Tablet"
								/>
							</div>
						)
					} else {
						tabout = (
							<div className="uagb-spacing-control__inputs">
								<input
									className="uagb-spacing-control__number"
									type="number"
									onChange={ onChangeTopValue }
									aria-label={ sprintf(
										__( '%s top', 'ultimate-addons-for-gutenberg' ),
										label
									) }
									aria-describedby={ !! help ? id + '__help' : undefined }
									value={ valueTop !== '' ? valueTop : '' }
									min={ type === 'padding' ? 0 : undefined }
									data-device-type=""
								/>
								<input
									className="uagb-spacing-control__number"
									type="number"
									onChange={ onChangeRightValue }
									aria-label={ sprintf(
										__( '%s right', 'ultimate-addons-for-gutenberg' ),
										label
									) }
									aria-describedby={ !! help ? id + '__help' : undefined }
									value={ valueRight !== '' ? valueRight : '' }
									min={ type === 'padding' ? 0 : undefined }
									data-device-type=""
								/>
								<input
									className="uagb-spacing-control__number"
									type="number"
									onChange={ onChangeBottomValue }
									aria-label={ sprintf(
										__( '%s bottom', 'ultimate-addons-for-gutenberg' ),
										label
									) }
									aria-describedby={ !! help ? id + '__help' : undefined }
									value={ valueBottom !== '' ? valueBottom : '' }
									min={ type === 'padding' ? 0 : undefined }
									data-device-type=""
								/>
								<input
									className="uagb-spacing-control__number"
									type="number"
									onChange={ onChangeLeftValue }
									aria-label={ sprintf(
										__( '%s left', 'ultimate-addons-for-gutenberg' ), label
									) }
									aria-describedby={ !! help ? id + '__help' : undefined }
									value={ valueLeft !== '' ? valueLeft : '' }
									min={ type === 'padding' ? 0 : undefined }
									data-device-type=""
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
					<span className="uagb-spacing-control__number-label-blank"></span>
				</div>
			</div>
        );
 }

export default DimensionsControl