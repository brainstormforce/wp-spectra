import { applyFilters } from '@wordpress/hooks';
import { useRef, useEffect  } from '@wordpress/element';
import getUAGEditorStateLocalStorage from '@Controls/getUAGEditorStateLocalStorage';

const InspectorTab = ( props ) => {
	const { children, isActive, type } = props;
	const tabRef = useRef( null );

	const tabContent = function () {
		return applyFilters(
			`uag_${ type }_tab_content`,
			'',
			props.parentProps
		);
	};

	const uagLastOpenedState = getUAGEditorStateLocalStorage( 'uagLastOpenedState' );
	const inspectorTabName = uagLastOpenedState?.inspectorTabName;
	const panelBodyClass = uagLastOpenedState?.panelBodyClass;
	const settingsPopup = uagLastOpenedState?.settingsPopup;

	useEffect( () => {
		// This code is to fix the side-effect of the editor responsive click settings panel refresh issue.
		if ( inspectorTabName && type === inspectorTabName && panelBodyClass ) {
			const panelToActivate = tabRef.current.querySelector( `.${uagLastOpenedState.panelBodyClass}` );

			if ( panelToActivate ) {
				if ( ! panelToActivate.classList.contains( 'is-opened' ) ) {
					panelToActivate.querySelector( '.components-button' ).click();
				}
				if ( settingsPopup ) {
					// Need a delay to open the popup as the makup load just after the above click function called.
					setTimeout( function() {
						const settingsPopupToActivate = panelToActivate.querySelector( '.uag-typography-options' );

						if ( settingsPopupToActivate && ! settingsPopupToActivate.classList.contains( 'active' ) ) {
							settingsPopupToActivate.querySelector( '.components-button' ).click();
						}
					}, 100 );
				}
			}
		}
	}, [] );

	return (
		<div
			style={ {
				display: isActive ? 'block' : 'none',
			} }
			className={ `uagb-inspector-tab uagb-tab-content-${ type }` }
			ref={tabRef}
		>
			{ Array.isArray( children )
				? children.map( ( item ) => item )
				: children }
			{ tabContent() }
		</div>
	);
};

export default InspectorTab;

export const UAGTabs = {
	general: {
		key: 'general',
		type: 'general',
	},
	style: {
		key: 'style',
		type: 'style',
	},
	advance: {
		key: 'advance',
		type: 'advance',
	},
}
