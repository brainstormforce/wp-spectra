/**
 * WordPress dependencies
 */
 import { __ } from '@wordpress/i18n';

const {
	ButtonGroup,
	Button,
	Dashicon,
} = wp.components

// Extend component
const { Fragment } = wp.element
const { useSelect, useDispatch } = wp.data;
import map from 'lodash/map';

/**
 * Build the Measure controls
 * @returns {object} Measure settings.
 */
export default function Columnresponsive ( props ) {

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
	
	const output = {};

	output.Desktop = (
        <Fragment></Fragment>
	);

	output.Tablet = (
        <Fragment></Fragment>
	);

	output.Mobile = (
        <Fragment></Fragment>
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