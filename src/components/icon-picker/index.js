import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import React, { useLayoutEffect } from "react";
import styles from "./editor.lazy.scss";

const UAGIconPicker = (props) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect(() => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, []);

	return (
		<div className="components-base-control uag-icon-picker">
			<FontIconPicker {...props} />
		</div>
	);
};
export default UAGIconPicker;
