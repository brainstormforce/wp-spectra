import { TabPanel } from '@wordpress/components';
import styles from './editor.lazy.scss';
import React, { useLayoutEffect } from 'react';
import Separator from '@Components/separator';
import { useRef } from '@wordpress/element';
import { select } from '@wordpress/data'
import getUAGEditorStateLocalStorage from '@Controls/getUAGEditorStateLocalStorage';

const UAGTabsControl = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	
	const tabRef = useRef( null );

	const tabsCountClass =
		3 === props.tabs.length ? 'uag-control-tabs-three-tabs ' : '';

	const tabs = props.tabs.map( ( tab, index )=>{
		return {
			...tab,
			className: `uagb-tab-${index + 1} ${tab?.name}`
		}
	} );

	return (
		<>
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

						const { getSelectedBlock } = select( 'core/block-editor' );
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
		</>
	);
};
export default UAGTabsControl;
