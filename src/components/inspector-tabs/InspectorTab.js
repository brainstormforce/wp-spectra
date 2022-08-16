import { applyFilters } from '@wordpress/hooks';
import { useRef, useEffect  } from '@wordpress/element';
import getUAGEditorStateLocalStorage from '@Controls/getUAGEditorStateLocalStorage';
import { select } from '@wordpress/data';

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

	useEffect( () => {

		const { getSelectedBlock } = select( 'core/block-editor' );
		const blockName = getSelectedBlock()?.name;
		const uagSettingState = getUAGEditorStateLocalStorage( 'uagSettingState' );

		if ( uagSettingState ) {
			const inspectorTabName = uagSettingState[blockName]?.selectedTab;
			const panelBodyClass = uagSettingState[blockName]?.selectedPanel;
			const settingsPopup = uagSettingState[blockName]?.selectedSetting;
			const selectedInnerTab = uagSettingState[blockName]?.selectedInnerTab;

			// This code is to fix the side-effect of the editor responsive click settings panel refresh issue AND aldo for preserving state for better block editor experinence.
			if ( inspectorTabName && type === inspectorTabName ) {
				let panelToActivate = false
				if ( panelBodyClass ) {
					panelToActivate = tabRef.current.querySelector( `.${panelBodyClass}` );
				} else {
					panelToActivate = tabRef.current.querySelector( '.is-opened' );
				}

				if ( panelToActivate ) {
					if ( ! panelToActivate.classList.contains( 'is-opened' ) ) {
						panelToActivate.querySelector( '.components-button' ).click();
					}
					if ( selectedInnerTab ) {
						// Need a delay to open the popup as the makup load just after the above click function called.
						setTimeout( function() {
							const selectedInnerTabToActivate = panelToActivate.querySelector( selectedInnerTab );
							if ( selectedInnerTabToActivate && ! selectedInnerTabToActivate.classList.contains( 'active-tab' ) ) {
								selectedInnerTabToActivate.click();
							}
						}, 100 );
					}
					if ( settingsPopup ) {
						// Need a delay to open the popup as the makup load just after the above click function called.
						setTimeout( function() {
							const settingsPopupToActivate = panelToActivate.querySelector( settingsPopup );

							if ( settingsPopupToActivate && ! settingsPopupToActivate.classList.contains( 'active' ) ) {
								settingsPopupToActivate.querySelector( '.components-button' ).click();
							}
						}, 100 );
					}
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
