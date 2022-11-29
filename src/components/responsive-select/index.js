/**
 * External dependencies
 */
import React, { useLayoutEffect } from 'react';
import { SelectControl } from '@wordpress/components';
import { useDeviceType } from '@Controls/getPreviewType';
import ResponsiveToggle from '../responsive-toggle';
import { select } from '@wordpress/data';
import { getIdFromString } from '@Utils/Helpers';
import styles from './editor.lazy.scss';

const ResponsiveSelectControl = ( props ) => {

	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { getSelectedBlock } = select( 'core/block-editor' );


	const { label, data, setAttributes, options } = props;

	const responsive = true;

	const deviceType = useDeviceType();

	const output = {};
	output.Desktop = (
		<SelectControl
			value={ data.desktop.value }
			onChange={ ( value ) =>
				setAttributes( { [ data.desktop.label ]: value } )
			}
			options={ options.desktop }
		/>
	);
	output.Tablet = (
		<SelectControl
			value={ data.tablet.value }
			onChange={ ( value ) =>
				setAttributes( { [ data.tablet.label ]: value } )
			}
			options={ options.tablet || options.desktop }
		/>
	);
	output.Mobile = (
		<SelectControl
			value={ data.mobile.value }
			onChange={ ( value ) =>
				setAttributes( { [ data.mobile.label ]: value } )
			}
			options={ options.mobile || options.desktop }
		/>
	);

	const blockNameForHook = getSelectedBlock()?.name.split( '/' ).pop(); // eslint-disable-line @wordpress/no-unused-vars-before-return
	const controlName = getIdFromString(props.label);
	const controlBeforeDomElement = wp.hooks.applyFilters( `spectra.${blockNameForHook}.responsive-select.${controlName}.before`, '', blockNameForHook );
	const controlAfterDomElement = wp.hooks.applyFilters( `spectra.${blockNameForHook}.responsive-select.${controlName}`, '', blockNameForHook );


	return (
		<>
			{
				controlBeforeDomElement
			}
			<div className="components-base-control uagb-responsive-select-control">
				<div className="uagb-size-type-field-tabs">
					<div className="uagb-control__header">
						<ResponsiveToggle
							label= { label }
							responsive= { responsive }
						/>
					</div>
					{ output[ deviceType ] ? output[ deviceType ] : output.Desktop }
				</div>
				{ props.help && (
					<p className="uag-control-help-notice">{ props.help }</p>
				) }
			</div>
			{
				controlAfterDomElement
			}
		</>
	);
};

export default ResponsiveSelectControl;
