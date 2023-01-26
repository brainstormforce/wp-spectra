import FontIconPicker from '@fonticonpicker/react-fonticonpicker';
import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';
import styles from './editor.lazy.scss';
import renderSVG from '@Controls/renderIcon';
import { select } from '@wordpress/data';
import { getIdFromString, getPanelIdFromRef } from '@Utils/Helpers';
import { __ } from '@wordpress/i18n';

const UAGIconPicker = ( props ) => {
	const [panelNameForHook, setPanelNameForHook] = useState( null );
	const panelRef = useRef( null );

	const { getSelectedBlock } = select( 'core/block-editor' );
	const blockNameForHook = getSelectedBlock()?.name.split( '/' ).pop(); // eslint-disable-line @wordpress/no-unused-vars-before-return
	useEffect( () => {
		setPanelNameForHook( getPanelIdFromRef( panelRef ) )
	}, [blockNameForHook] )

	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const controlName = getIdFromString( props?.label ); //
	const controlBeforeDomElement = wp.hooks.applyFilters( `spectra.${blockNameForHook}.${panelNameForHook}.${controlName}.before`, '', blockNameForHook );
	const controlAfterDomElement = wp.hooks.applyFilters( `spectra.${blockNameForHook}.${panelNameForHook}.${controlName}`, '', blockNameForHook );

	return (
		<div
			ref={panelRef}
			className={`spectra-components-control spectra-components-control--${controlName}`}
		>
			{
				controlBeforeDomElement
			}
			<div className="components-base-control uag-icon-picker">
				<span className="uag-control-label">
					{ props?.label ||
						__( 'Icon', 'ultimate-addons-for-gutenberg' ) }
				</span>
				<FontIconPicker
					icons={ props?.icons || wp.UAGBSvgIcons }
					renderFunc={ renderSVG }
					theme="default"
					value={ props.value }
					onChange={ props?.onChange }
					isMulti={ props.isMulti || false }
					noSelectedPlaceholder={
						props.noSelectedPlaceholder ||
						__( 'Select Icon', 'ultimate-addons-for-gutenberg' )
					}
				/>
				{ props.help && (
					<p className="uag-control-help-notice">{ props.help }</p>
				) }
			</div>
			{
				controlAfterDomElement
			}
		</div>
	);
};
export default UAGIconPicker;
