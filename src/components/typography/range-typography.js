/**
 * WordPress dependencies
 */
 import { __ } from '@wordpress/i18n';
 import Range from '../../components/range/Range.js';
 import { ButtonGroup, Button, Dashicon, TabPanel } from '@wordpress/components';
 import { useDispatch } from '@wordpress/data';

/**
 * Build the Measure controls
 * @returns {object} Measure settings.
 */
export default function RangeTypographyControl ( props ) {

	const {
		__experimentalSetPreviewDeviceType: setPreviewDeviceType,
	} = useDispatch( 'core/edit-post' );

	const customSetPreviewDeviceType = ( device ) => {
		setPreviewDeviceType( device );
	};
	
 	let sizeTypes

	if( "sizeTypes" in props ) {
		sizeTypes = props.sizeTypes
	} else {
		sizeTypes = [
			{ key: "px", name: __( "px",'ultimate-addons-for-gutenberg' ) },
			{ key: "em", name: __( "em",'ultimate-addons-for-gutenberg' ) },
		]
	}

	const onUnitSizeClick = ( sizeTypes ) => {
        const items = [];
        sizeTypes.map( key => items.push(
			<Button
				key={ key.key }
				className="uagb-size-btn"
				isSmall
				isPrimary={ props.type.value === key.key }
				aria-pressed={ props.type.value === key.key }
				onClick={ () => props.setAttributes( { [props.typeLabel]: key.key } ) }
			>
				{ key.name }
			</Button>
        ))

        return( items );
    }

	const sizeTypesControls = (
		<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type",'ultimate-addons-for-gutenberg' ) }>
			{ onUnitSizeClick( sizeTypes ) }
		</ButtonGroup>
	)

	const onSelectDevice = ( tabName ) => {

		console.log(tabName)
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

	const output = {};

	output.Desktop = (
		<>
			{ sizeTypesControls }
			<Range 
				label={ __( props.sizeText ) }
				value={ props.size.value || "" }
				onChange={ ( value ) => props.setAttributes( { [props.sizeLabel]: value } ) }
				min={ 0 }
				max={ 100 }
				unit={ sizeTypes } 
				displayUnit={ false }
			/>
		</>
	);

	output.Tablet = (
		<>
			{ sizeTypesControls }
			<Range 
				label={ __( props.sizeTabletText ) }
				value={ props.sizeTablet.value }
				onChange={ ( value ) => props.setAttributes( { [props.sizeTabletLabel]: value } ) }
				min={ 0 }
				max={ 100 }
				unit={ sizeTypes }
				displayUnit={ false }
			/>
		</>
	);

	output.Mobile = (
		<>
			{ sizeTypesControls }
			<Range 
				label={ __( props.sizeMobileText ) }
				value={ props.sizeMobile.value }
				onChange={ ( value ) => props.setAttributes( { [props.sizeMobileLabel]: value } ) }
				min={ 0 }
				max={ 100 }
				displayUnit={ false }
			/>
		</>
	);

	return (
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
	);
}