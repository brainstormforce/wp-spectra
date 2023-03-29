import { TabPanel } from '@wordpress/components';
import styles from './editor.lazy.scss';
import { useLayoutEffect, useEffect, useState, useRef } from '@wordpress/element';
import { getPanelIdFromRef } from '@Utils/Helpers';
import Separator from '@Components/separator';
import { select } from '@wordpress/data';
import getUAGEditorStateLocalStorage from '@Controls/getUAGEditorStateLocalStorage';
import UAGHelpText from '@Components/help-text';
import { applyFilters } from '@wordpress/hooks';

const UAGTabsControl = ( props ) => {
	const [panelNameForHook, setPanelNameForHook] = useState( null );
	const panelRef = useRef( null );
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );


	const { getSelectedBlock } = select( 'core/block-editor' );

	const blockNameForHook = getSelectedBlock()?.name.split( '/' ).pop(); // eslint-disable-line @wordpress/no-unused-vars-before-return
	useEffect( () => {
		setPanelNameForHook( getPanelIdFromRef( panelRef ) )
	}, [blockNameForHook] )

	const tabRef = useRef( null );

	const tabsCountClass =
		3 === props.tabs.length ? 'uag-control-tabs-three-tabs ' : '';

	const tabs = props.tabs.map( ( tab, index )=>{
		return {
			...tab,
			className: `uagb-tab-${index + 1} ${tab?.name}`
		}
	} );

	const controlName = 'tabs'; // there is no label props that's why keep hard coded label
	const controlBeforeDomElement = applyFilters( `spectra.${blockNameForHook}.${panelNameForHook}.${controlName}.before`, '', blockNameForHook );
	const controlAfterDomElement = applyFilters( `spectra.${blockNameForHook}.${panelNameForHook}.${controlName}`, '', blockNameForHook );


	return (
		<div
			ref={panelRef}

		>
			{
				controlBeforeDomElement
			}
			<TabPanel
				className={ `uag-control-tabs ${ tabsCountClass }` }
				activeClass="active-tab"
				tabs={ tabs }
				ref={ tabRef }
				onSelect= {
					( tabName ) => {
						const selectedTab = document.getElementsByClassName( 'uag-control-tabs' )[0]?.querySelector( `.${ tabName }` );
						let selectedTabClass = false;
						if ( selectedTab && selectedTab?.classList ) {
							selectedTab?.classList.forEach( ( className ) => {
								if ( className.includes( 'uagb-tab' ) ) {
									selectedTabClass = `.${ className }`;
								}
							} );
						}

						const blockName = getSelectedBlock()?.name;
						const uagSettingState = getUAGEditorStateLocalStorage( 'uagSettingState' );
						const data = {
							...uagSettingState,
							[blockName] : {
								...uagSettingState?.[blockName],
								selectedInnerTab : selectedTabClass
							}
						}

						const uagLocalStorage = getUAGEditorStateLocalStorage();
						if ( uagLocalStorage ) {
							uagLocalStorage.setItem( 'uagSettingState', JSON.stringify( data ) );
						}
					}
				}
			>
				{ ( tabName ) => {
					return (
						<div className="uag-control-tabs-output">
							{ props[ tabName.name ] }
						</div>
					);
				} }
			</TabPanel>
			{ ! props?.disableBottomSeparator && <Separator/> }
			<UAGHelpText text={ props.help } />
			{
				controlAfterDomElement
			}
		</div>
	);
};
export default UAGTabsControl;
