import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import React, { useLayoutEffect } from "react";
import styles from "./editor.lazy.scss";
import renderSVG from "@Controls/renderIcon";
import { __ } from "@wordpress/i18n";

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
			<label className="components-base-control__label uag-icon-picker__label">
				{  props?.label || __("Icon", "ultimate-addons-for-gutenberg") }
			</label>
			<FontIconPicker
				icons={props?.icons || wp.UAGBSvgIcons}
				renderFunc={renderSVG}
				theme="default"
				value={props.value}
				onChange={props.onChange}
				isMulti={props.isMulti || false}
				noSelectedPlaceholder={
					props.noSelectedPlaceholder ||
					__("Select Icon", "ultimate-addons-for-gutenberg")
				}
			/>
		</div>
	);
};
export default UAGIconPicker;
