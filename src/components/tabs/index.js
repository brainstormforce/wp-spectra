import { TabPanel } from '@wordpress/components';
import styles from './editor.lazy.scss';
import React, { useLayoutEffect } from 'react';
import Separator from '@Components/separator';

const UAGTabsControl = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	// Not Required Anymore.
	// const bottomSeparatorClass = ! props?.disableBottomSeparator
	// 	? 'uag-control-tabs-bottom-separator '
	// 	: '';

	const tabsCountClass =
		3 === props.tabs.length ? 'uag-control-tabs-three-tabs ' : '';

	return (
		<>
			<TabPanel
				className={ `uag-control-tabs ${ tabsCountClass }` }
				activeClass="active-tab"
				tabs={ props.tabs }
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
