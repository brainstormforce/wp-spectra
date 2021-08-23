import { TabPanel } from "@wordpress/components";
import styles from "./editor.lazy.scss";
import React, { useLayoutEffect } from "react";

const UAGTabsControl = (props) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect(() => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, []);

	return (
		<TabPanel
			className="uag-control-tabs"
			activeClass="active-tab"
			tabs={props.tabs}
		>
			{(tabName) => {
				return (
					<div className="uag-control-tabs-output">
						{props[tabName.name]}
					</div>
				);
			}}
		</TabPanel>
	);
};
export default UAGTabsControl;
