import { TabPanel } from '@wordpress/components';
import styles from './editor.lazy.scss';
import React, { useLayoutEffect } from 'react';

const UAGTabsControl = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const bottomSeparatorClass = ! props?.disableBottomSeparator
		? 'uag-control-tabs-bottom-separator '
		: '';

	const tabsCountClass =
		3 === props.tabs.length ? 'uag-control-tabs-three-tabs ' : '';

	return (
		<>
			<TabPanel
				className={ `uag-control-tabs ${ bottomSeparatorClass } ${ tabsCountClass }` }
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
		</>
	);
};
export default UAGTabsControl;
