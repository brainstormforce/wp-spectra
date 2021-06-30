/**
 * WordPress dependencies
 */
 import { __ } from '@wordpress/i18n';

const {
	ButtonGroup,
	Button,
	Dashicon,
	TabPanel,
	RangeControl
} = wp.components

const { useSelect, useDispatch } = wp.data;
import map from 'lodash/map';
import UAGB_Block_Icons from "@Controls/block-icons"

/**
 * Build the Measure controls
 * @returns {object} Measure settings.
 */
export default function Columnresponsive ( props ) {

	const {
		__experimentalSetPreviewDeviceType: setPreviewDeviceType,
	} = useDispatch( 'core/edit-post' );

	const customSetPreviewDeviceType = ( device ) => {
		setPreviewDeviceType( device );
    };

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
	}

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

	const onChangeUnits = ( value ) => {
		if ( 'mobile' === value.className ) {
			props.setAttributes( { [ mUnit.label  ]: value.unitValue } );
		} else if ( 'tablet' === value.className ) {
			props.setAttributes( { [ tUnit.label  ]: value.unitValue } );
		} else {
			props.setAttributes( { [ unit.label  ]: value.unitValue } );
		}
     }

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
	
	const sizeTypesControls = (
		<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type",'ultimate-addons-for-gutenberg' ) }>
			{ props.deviceType == 'Desktop' && onUnitSizeClick( unitSizes ) }
			{ props.deviceType == 'Mobile' && onUnitSizeClick( mobileUnitSizes ) }
			{ props.deviceType == 'Tablet' && onUnitSizeClick( tabletUnitSizes ) }
		</ButtonGroup>
	)

	
	const output = {};

	output.Desktop = (
		<div>
			<h2>{ __( "Padding", 'ultimate-addons-for-gutenberg' ) }</h2>
			{ sizeTypesControls }
			<RangeControl
				label={ UAGB_Block_Icons.top_margin }
				className={ "uagb-margin-control" }
				value={ props.topPadding }
				onChange={ ( value ) => props.setAttributes( { topPadding: value } ) }
				min={ 0 }
				max={ 100 }
				allowReset
			/>
			<RangeControl
				label={ UAGB_Block_Icons.bottom_margin }
				className={ "uagb-margin-control" }
				value={ props.bottomPadding }
				onChange={ ( value ) => props.setAttributes( { bottomPadding: value } ) }
				min={ 0 }
				max={ 100 }
				allowReset
			/>
			<RangeControl
				label={ UAGB_Block_Icons.left_margin }
				className={ "uagb-margin-control" }
				value={ props.leftPadding }
				onChange={ ( value ) => props.setAttributes( { leftPadding: value } ) }
				min={ 0 }
				max={ 100 }
				allowReset
			/>
			<RangeControl
				label={ UAGB_Block_Icons.right_margin }
				className={ "uagb-margin-control" }
				value={ props.rightPadding }
				onChange={ ( value ) => props.setAttributes( { rightPadding: value } ) }
				min={ 0 }
				max={ 100 }
				allowReset
			/>
		</div>
	);

	output.Tablet = (
		<div>
			<h2>{ __( "Padding", 'ultimate-addons-for-gutenberg' ) }</h2>
			{ sizeTypesControls }
			<RangeControl
				label={ UAGB_Block_Icons.top_margin }
				className={ "uagb-margin-control" }
				value={ props.topPaddingTablet }
				onChange={ ( value ) => props.setAttributes( { topPaddingTablet: value } ) }
				min={ 0 }
				max={ 100 }
				allowReset
			/>
			<RangeControl
				label={ UAGB_Block_Icons.bottom_margin }
				className={ "uagb-margin-control" }
				value={ props.bottomPaddingTablet }
				onChange={ ( value ) => props.setAttributes( { bottomPaddingTablet: value } ) }
				min={ 0 }
				max={ 100 }
				allowReset
			/>
			<RangeControl
				label={ UAGB_Block_Icons.left_margin }
				className={ "uagb-margin-control" }
				value={ props.leftPaddingTablet }
				onChange={ ( value ) => props.setAttributes( { leftPaddingTablet: value } ) }
				min={ 0 }
				max={ 100 }
				allowReset
			/>
			<RangeControl
				label={ UAGB_Block_Icons.right_margin }
				className={ "uagb-margin-control" }
				value={ props.rightPaddingTablet }
				onChange={ ( value ) => props.setAttributes( { rightPaddingTablet: value } ) }
				min={ 0 }
				max={ 100 }
				allowReset
			/>
		</div>
	);

	output.Mobile = (
		<div>
			<h2>{ __( "Padding", 'ultimate-addons-for-gutenberg' ) }</h2>
			{ sizeTypesControls }
			<RangeControl
				label={ UAGB_Block_Icons.top_margin }
				className={ "uagb-margin-control" }
				value={ props.topPaddingMobile }
				onChange={ ( value ) => props.setAttributes( { topPaddingMobile: value } ) }
				min={ 0 }
				max={ 100 }
				allowReset
			/>
			<RangeControl
				label={ UAGB_Block_Icons.bottom_margin }
				className={ "uagb-margin-control" }
				value={ props.bottomPaddingMobile }
				onChange={ ( value ) => props.setAttributes( { bottomPaddingMobile: value } ) }
				min={ 0 }
				max={ 100 }
				allowReset
			/>
			<RangeControl
				label={ UAGB_Block_Icons.left_margin }
				className={ "uagb-margin-control" }
				value={ props.leftPaddingMobile }
				onChange={ ( value ) => props.setAttributes( { leftPaddingMobile: value } ) }
				min={ 0 }
				max={ 100 }
				allowReset
			/>
			<RangeControl
				label={ UAGB_Block_Icons.right_margin }
				className={ "uagb-margin-control" }
				value={ props.rightPaddingMobile }
				onChange={ ( value ) => props.setAttributes( { rightPaddingMobile: value } ) }
				min={ 0 }
				max={ 100 }
				allowReset
			/>
		</div>
	);

	return (
		<div className="column-responsive-spacing">
		<TabPanel
			className="uagb-spacing-control__mobile-controls"
			activeClass="is-active"
			initialTabName="default"
			onSelect={ onSelectDevice }
			tabs={ [
				{
					name: 'default',
					title: <Dashicon icon="desktop" />,
					className: `uagb-spacing-control__mobile-controls-item uagb-spacing-control__mobile-controls-item--spacing components-button is-button is-default is-secondary uagb-spacing-control__mobile-controls-item--default uagb-spacing-control__mobile-controls-item-spacing--default`,
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
						output.Mobile
					)
				} else if ( "tablet" === tab.name ) {
					tabout = (
						output.Tablet
					)
				} else {
					tabout = (
						output.Desktop
					)
				}

				return <div>{ tabout }</div>
				}
			}
		</TabPanel>
		</div>
	);
}