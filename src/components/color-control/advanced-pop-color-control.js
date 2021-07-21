/**
 * Advanced Color Control.
 *
 */
import cIcons from "./uagb-color-icons";
import UAGBColorPicker from "./uagb-color-picker";
import hexToRGBA from "./hex-to-rgba";
import { __ } from "@wordpress/i18n";
import {
	Button,
	Popover,
	ColorIndicator,
	Tooltip,
	Dashicon,
} from "@wordpress/components";
import { withSelect } from "@wordpress/data";
import { ColorPalette } from "@wordpress/block-editor";
import { useState, useEffect } from "@wordpress/element";
import styles from "./editor.lazy.scss";
import React, { useLayoutEffect } from "react";

const AdvancedPopColorControl = (props) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect(() => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, []);

	const [value, setValue] = useState({
		alpha: false === props.alpha ? false : true,
		colors: [],
		classSat: "first",
		currentColor: props.colorValue,
		inherit: false,
		currentOpacity:
			props.opacityValue !== undefined ? props.opacityValue : 1,
		isPalette:
			(props.colorValue && props.colorValue.startsWith("palette")) ||
			(props.colorDefault && props.colorDefault.startsWith("palette"))
				? true
				: false,
	});
	const [visible, setVisible] = useState({ isVisible: false });

	let defaultCache = {
		value: value,
		resetDisabled: true,
	};

	const [cachedValue, setCacheValue] = useState(defaultCache);

	useEffect(() => {
		let cachedValueUpdate = { ...cachedValue };

		if (undefined !== value) {
			cachedValueUpdate["value"] = value;
			setCacheValue(cachedValueUpdate);
		}
	}, []);

	useEffect(() => {
		let cachedValueUpdate = { ...cachedValue };

		if (JSON.stringify(value) !== JSON.stringify(cachedValueUpdate.value)) {
			cachedValueUpdate["resetDisabled"] = false;
			setCacheValue(cachedValueUpdate);
		}
	}, [value]);

	const onChangeState = (color, palette) => {
		let opacity = 100 === props.opacityUnit ? 100 : 1;
		let newColor;
		if (palette) {
			newColor = color;
		} else if (
			undefined !== color.rgb &&
			undefined !== color.rgb.a &&
			1 !== color.rgb.a
		) {
			if (props.onOpacityChange) {
				newColor = color.hex;
				opacity =
					100 === props.opacityUnit
						? unConvertOpacity(color.rgb.a)
						: color.rgb.a;
			} else {
				newColor =
					"rgba(" +
					color.rgb.r +
					"," +
					color.rgb.g +
					"," +
					color.rgb.b +
					"," +
					color.rgb.a +
					")";
			}
		} else if (undefined !== color.hex) {
			newColor = color.hex;
		} else {
			newColor = color;
		}
		if (undefined !== props.onChange) {
			props.onChange(newColor);
		}
		setValue({
			currentColor: newColor,
			currentOpacity: opacity,
			isPalette: palette ? true : false,
		});
	};

	const onChangeComplete = (color, palette) => {
		let opacity = 100 === props.opacityUnit ? 100 : 1;
		let newColor;
		if (palette) {
			newColor = color;
		} else if (
			undefined !== color.rgb &&
			undefined !== color.rgb.a &&
			1 !== color.rgb.a
		) {
			if (props.onOpacityChange) {
				newColor = color.hex;
				opacity =
					100 === props.opacityUnit
						? unConvertOpacity(color.rgb.a)
						: color.rgb.a;
			} else {
				newColor =
					"rgba(" +
					color.rgb.r +
					"," +
					color.rgb.g +
					"," +
					color.rgb.b +
					"," +
					color.rgb.a +
					")";
			}
		} else if (undefined !== color.hex) {
			newColor = color.hex;
		} else {
			newColor = color;
		}

		if (undefined !== props.onArrayChange) {
			props.onArrayChange(newColor, opacity);
		} else {
			props.onColorChange(newColor);
			if (undefined !== props.onOpacityChange) {
				setTimeout(() => {
					props.onOpacityChange(opacity);
				}, 50);
			}
		}

		setValue({
			currentColor: newColor,
			currentOpacity: opacity,
			isPalette: palette ? true : false,
		});
	};

	const toggleVisible = () => {
		setVisible({ isVisible: true });
	};

	const toggleClose = () => {
		if (visible.isVisible === true) {
			setVisible({ isVisible: false });
		}
	};

	const resetValues = () => {
		let cachedValueUpdate = { ...cachedValue };

		setValue(cachedValueUpdate.value);

		props.onColorChange(cachedValueUpdate.value.currentColor);

		cachedValueUpdate["resetDisabled"] = true;
		setCacheValue(cachedValueUpdate);
	};

	const unConvertOpacity = (value) => {
		let val = 100;
		if (value) {
			val = value * 100;
		}
		return val;
	};

	const convertOpacity = (value) => {
		let val = 1;
		if (value) {
			val = value / 100;
		}
		return val;
	};

	const convertedOpacityValue =
		100 === props.opacityUnit
			? convertOpacity(props.opacityValue)
			: props.opacityValue;
	let colorVal = value.currentColor ? value.currentColor : props.colorValue;

	if ("" === colorVal) {
		colorVal = props.colorDefault;
	}

	if (props.onOpacityChange && !value.isPalette) {
		colorVal = hexToRGBA(
			undefined === colorVal ? "" : colorVal,
			convertedOpacityValue !== undefined && convertedOpacityValue !== ""
				? convertedOpacityValue
				: 1
		);
	}

	return (
		<div className="uagb-color-popover-container components-base-control new-uagb-advanced-colors">
			<div className="uagb-advanced-color-settings-container">
				{props.label && (
					<h2 className="uagb-beside-color-label">{props.label}</h2>
				)}
				<Button
					className="uagb-reset"
					disabled={cachedValue.resetDisabled}
					isSecondary
					isSmall
					onClick={(e) => {
						e.preventDefault();
						resetValues();
					}}
				>
					<Dashicon icon="image-rotate" />
				</Button>
				<div className="uagb-beside-color-click">
					{visible.isVisible && (
						<Popover
							position="top left"
							className="uagb-popover-color new-uagb-advanced-colors-pop"
							onClose={toggleClose}
						>
							{value.classSat === "first" &&
								!props.disableCustomColors && (
									<UAGBColorPicker
										color={colorVal}
										onChange={(color) =>
											onChangeState(color, "")
										}
										onChangeComplete={(color) => {
											onChangeComplete(color, "");
											if (props.onColorClassChange) {
												props.onColorClassChange("");
											}
										}}
									/>
								)}
							{value.classSat !== "first" &&
								!props.disableCustomColors && (
									<UAGBColorPicker
										color={colorVal}
										onChange={(color) =>
											onChangeState(color, "")
										}
										onChangeComplete={(color) => {
											onChangeComplete(color, "");
											if (props.onColorClassChange) {
												props.onColorClassChange("");
											}
										}}
									/>
								)}
							{props.colors && (
								<ColorPalette
									color={colorVal}
									onChange={(color) =>
										onChangeComplete(color, true)
									}
									clearable={false}
									disableCustomColors={true}
								/>
							)}
						</Popover>
					)}
					{visible.isVisible && (
						<Tooltip text={__("Select Color")}>
							<Button
								className={`uagb-color-icon-indicate ${
									value.alpha
										? "uagb-has-alpha"
										: "uagb-no-alpha"
								}`}
								onClick={toggleClose}
							>
								<ColorIndicator
									className="uagb-advanced-color-indicate"
									colorValue={colorVal}
								/>
								{"" === colorVal && value.inherit && (
									<span className="color-indicator-icon">
										{cIcons.inherit}
									</span>
								)}
								{((props.colorValue &&
									props.colorValue.startsWith("palette")) ||
									(props.colorDefault &&
										props.colorDefault.startsWith(
											"palette"
										))) && (
									<span className="color-indicator-icon">
										{<Dashicon icon="admin-site" />}
									</span>
								)}
							</Button>
						</Tooltip>
					)}
					{!visible.isVisible && (
						<Tooltip text={__("Select Color")}>
							<Button
								className={`uagb-color-icon-indicate ${
									value.alpha
										? "uagb-has-alpha"
										: "uagb-no-alpha"
								}`}
								onClick={toggleVisible}
							>
								<ColorIndicator
									className="uagb-advanced-color-indicate"
									colorValue={colorVal}
								/>
								{"" === colorVal && value.inherit && (
									<span className="color-indicator-icon">
										{cIcons.inherit}
									</span>
								)}
								{((props.colorValue &&
									props.colorValue.startsWith("palette")) ||
									(props.colorDefault &&
										props.colorDefault.startsWith(
											"palette"
										))) && (
									<span className="color-indicator-icon">
										{<Dashicon icon="admin-site" />}
									</span>
								)}
							</Button>
						</Tooltip>
					)}
				</div>
			</div>
		</div>
	);
};

export default withSelect((select, ownProps) => {
	const settings = select("core/block-editor").getSettings();
	const colors = settings.colors;
	const disableCustomColors =
		ownProps.disableCustomColors === undefined
			? settings.disableCustomColors
			: ownProps.disableCustomColors;
	return { colors, disableCustomColors };
})(AdvancedPopColorControl);
