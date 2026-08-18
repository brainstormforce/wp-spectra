/**
 * Responsive State Notice.
 *
 * WordPress 7.1 adds per-viewport ( "Responsive styles" ) and pseudo-state style
 * editing. While a style state is active, core renders only its native block-support
 * panels and hides every custom inspector control, so a Spectra block's settings go
 * blank on Tablet / Mobile. Rather than disabling the feature, we surface a notice in
 * that otherwise-empty inspector explaining why the settings are hidden and how to edit
 * responsively with Spectra's own device controls.
 *
 * Detection uses public APIs only ( device type ) plus a read-only check for core's
 * style-state badge element, which is present only while a style state is being edited
 * ( absent during plain device preview ). No private APIs and no DOM injection.
 *
 * @since x.x.x
 */

import { InspectorControls } from '@wordpress/block-editor';
import { Notice } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { useSelect } from '@wordpress/data';
import { useState, useEffect } from '@wordpress/element';

// Core (WP 7.1) renders these badges in the block inspector only while a viewport /
// pseudo style state is being edited; the element is absent during plain device preview.
const STATE_BADGES_SELECTOR = '.block-editor-global-styles-state-control__badges';

/**
 * Whether the editor is currently editing a Tablet / Mobile responsive style state.
 *
 * @return {boolean} True when a viewport style state is active.
 */
const useResponsiveStateEditing = () => {
	const deviceType = useSelect(
		( select ) =>
			select( 'core/editor' )?.getDeviceType ? select( 'core/editor' ).getDeviceType() : 'Desktop',
		[]
	);

	const [ isEditingState, setIsEditingState ] = useState(
		() => 'undefined' !== typeof document && !! document.querySelector( STATE_BADGES_SELECTOR )
	);

	useEffect( () => {
		const check = () => setIsEditingState( !! document.querySelector( STATE_BADGES_SELECTOR ) );
		check();
		const target = document.querySelector( '.interface-interface-skeleton__sidebar' ) || document.body;
		const observer = new window.MutationObserver( check );
		observer.observe( target, { childList: true, subtree: true } );
		return () => observer.disconnect();
	}, [] );

	// Scope to the Tablet / Mobile viewport states ( Desktop and pseudo states excluded ).
	return isEditingState && ( 'Tablet' === deviceType || 'Mobile' === deviceType );
};

/**
 * The notice itself. Rendered into a block-support group slot that core keeps mounted
 * during style-state editing, so it appears where the custom controls would normally be.
 *
 * @return {JSX.Element|null} The notice, or null when not in a responsive style state.
 */
const ResponsiveStateNotice = () => {
	const showNotice = useResponsiveStateEditing();

	if ( ! showNotice ) {
		return null;
	}

	return (
		<InspectorControls group="typography">
			<div className="uagb-responsive-state-notice-wrap">
				<Notice status="warning" isDismissible={ false } className="uagb-responsive-state-notice">
					<strong>{ __( 'Note', 'ultimate-addons-for-gutenberg' ) }</strong>
					{ ': ' }
					{ __(
						'Spectra Legacy block settings cannot be edited on Tablet or Mobile while WordPress "Responsive styles" is turned on. To edit them, turn off "Responsive styles" from the viewport ( View ) menu, then use the responsive ( Desktop / Tablet / Mobile ) toggle on each Spectra Legacy block\'s control.',
						'ultimate-addons-for-gutenberg'
					) }
				</Notice>
			</div>
		</InspectorControls>
	);
};

/**
 * Adds the responsive-state notice to selected Spectra ( uagb/* ) blocks.
 *
 * The notice component ( and its observer ) only mounts for the selected Spectra block,
 * so no work is done for other blocks.
 */
const withResponsiveStateNotice = createHigherOrderComponent(
	( BlockEdit ) => ( props ) => {
		const { name, isSelected } = props;
		const isSpectraBlock = 'string' === typeof name && name.startsWith( 'uagb/' );

		return (
			<>
				<BlockEdit { ...props } />
				{ isSpectraBlock && isSelected && <ResponsiveStateNotice /> }
			</>
		);
	},
	'withResponsiveStateNotice'
);

addFilter( 'editor.BlockEdit', 'uagb/responsive-state-notice', withResponsiveStateNotice );
