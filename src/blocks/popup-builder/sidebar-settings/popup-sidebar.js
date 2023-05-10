import { useLayoutEffect } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
import {
	PanelBody,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import styles from './editor.lazy.scss';
import RepetitionSettings from './settings-repetition';

// React Component to Render all the Sidebar Panels.
const RenderPopupSidebarPanels = () => {
		
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	return (
		<PanelBody
			title={ __( 'Popup Builder', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ true }
			className={ 'spectra-popup__panel--accordian' }
		>
			{ applyFilters(
				'spectra.popup-builder-sidebar.repetition',
				<RepetitionSettings/>
			) }
		</PanelBody>
	);
};

// Add the Sidebar Component to the Menu if this is a Popup. Props are got from the filter, but are not required.
export const addSidebarPopupMenu = ( content, props ) => ( // eslint-disable-line no-unused-vars
	( 'spectra-popup' === window.typenow ) ? (
		<>
			<RenderPopupSidebarPanels/>
			{ content }
		</>
	) : content
);