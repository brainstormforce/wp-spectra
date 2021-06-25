/**
 * WordPress dependencies
 */
 import { __ } from '@wordpress/i18n';
 import Range from '../../components/range/Range.js';
 import { ButtonGroup, Button, Dashicon } from '@wordpress/components';
 import { useSelect, useDispatch } from '@wordpress/data';

/**
 * Build the Measure controls
 * @returns {object} Measure settings.
 */
export default function RangeTypographyControl ( props ) {

	const deviceType = useSelect( ( select ) => {
		return select( 'core/edit-post' ).__experimentalGetPreviewDeviceType();
	}, [] );

	const {
		__experimentalSetPreviewDeviceType: setPreviewDeviceType,
	} = useDispatch( 'core/edit-post' );

	const customSetPreviewDeviceType = ( device ) => {
		setPreviewDeviceType( device );
	};

	const devices = [
		{
			name: 'Desktop',
			title: <Dashicon icon="desktop" />,
			itemClass: 'uagb-desktop-tab uagb-responsive-tabs',
		},
		{
			name: 'Tablet',
			title: <Dashicon icon="tablet" />,
			itemClass: 'uagb-tablet-tab uagb-responsive-tabs',
		},
		{
			name: 'Mobile',
			key: 'mobile',
			title: <Dashicon icon="smartphone" />,
			itemClass: 'uagb-mobile-tab uagb-responsive-tabs',
		},
	];
	
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

	const deviceControls = ( devices ) => {
		const items = [];
        devices.map( key => items.push(
			<Button
				key={ key.key }
				className={ `components-button components-tab-panel__tabs-item ${ key.itemClass }${ key.name === deviceType ? ' active-tab' : '' }` }
				aria-pressed={ deviceType === key.name }
				onClick={ () => customSetPreviewDeviceType( key.name ) }
			>
				{ key.title }
			</Button>
        ))

        return( items );
	}

	return (
		<div className={ 'uag-typography-range-options' }>
			<div className="uagb-size-type-field-tabs">
				<ButtonGroup className="components-tab-panel__tabs" aria-label={ __( 'Device', 'ultimate-addons-for-gutenberg' ) }>
					{ deviceControls( devices ) }
				</ButtonGroup>
				<div className="uagb-responsive-control-inner">
				{ ( output[ deviceType ] ? output[ deviceType ] : output.Desktop ) }
				</div>
			</div>
		</div>
	);
}