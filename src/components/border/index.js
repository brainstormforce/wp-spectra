/**
 * Border component.
 *
 */
import { __ } from "@wordpress/i18n";
import Range from "../../components/range/Range.js";
import AdvancedPopColorControl from "../../components/color-control/advanced-pop-color-control.js";
import { SelectControl } from "@wordpress/components";
import styles from "./editor.lazy.scss";

import React, { useLayoutEffect } from "react";
const Border = (props) => {
	useLayoutEffect(() => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, []);
	const {
		setAttributes,
		borderColor,
		borderWidth,
		borderRadius,
		borderStyle,
		borderHoverColor,
	} = props;

	let advancedControls = (
		<>
			<SelectControl
				label={borderStyle.title}
				labelPosition="top"
				value={borderStyle.value}
				onChange={(value) =>
					setAttributes({
						[borderStyle.label]: value,
					})
				}
				options={[
					{
						value: "none",
						label: __("None", "ultimate-addons-for-gutenberg"),
					},
					{
						value: "solid",
						label: __("Solid", "ultimate-addons-for-gutenberg"),
					},
					{
						value: "dotted",
						label: __("Dotted", "ultimate-addons-for-gutenberg"),
					},
					{
						value: "dashed",
						label: __("Dashed", "ultimate-addons-for-gutenberg"),
					},
					{
						value: "double",
						label: __("Double", "ultimate-addons-for-gutenberg"),
					},
					{
						value: "groove",
						label: __("Groove", "ultimate-addons-for-gutenberg"),
					},
					{
						value: "inset",
						label: __("Inset", "ultimate-addons-for-gutenberg"),
					},
					{
						value: "outset",
						label: __("Outset", "ultimate-addons-for-gutenberg"),
					},
					{
						value: "ridge",
						label: __("Ridge", "ultimate-addons-for-gutenberg"),
					},
				]}
			/>

			{"none" !== borderStyle.value && (
				<Range
					label={borderWidth.title}
					value={borderWidth.value}
					onChange={(value) =>
						setAttributes({ [borderWidth.label]: value })
					}
					min={0}
					max={100}
					displayUnit={false}
				/>
			)}
			{"none" !== borderStyle.value && (
				<Range
					label={borderRadius.title}
					value={borderRadius.value}
					onChange={(value) =>
						setAttributes({ [borderRadius.label]: value })
					}
					min={0}
					max={100}
					displayUnit={false}
				/>
			)}
			{"none" !== borderStyle.value && (
				<AdvancedPopColorControl
					label={borderColor.title}
					colorValue={borderColor.value}
					onColorChange={(value) =>
						setAttributes({ [borderColor.label]: value })
					}
				/>
			)}
			{"none" !== borderStyle.value && (
				<AdvancedPopColorControl
					label={borderHoverColor.title}
					colorValue={borderHoverColor.value}
					onColorChange={(value) =>
						setAttributes({ [borderHoverColor.label]: value })
					}
				/>
			)}
		</>
	);

	return advancedControls;
};

export default Border;
