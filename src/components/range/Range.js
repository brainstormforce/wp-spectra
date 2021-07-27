import {
	ButtonGroup,
	Button,
	Tooltip,
	Dashicon,
	RangeControl,
	__experimentalNumberControl as NumberControl,
} from "@wordpress/components";
import { useState, useEffect } from "@wordpress/element";
const { useSelect, useDispatch } = wp.data;

import { __ } from "@wordpress/i18n";
import map from "lodash/map";
import styles from "./editor.lazy.scss";
import React, { useLayoutEffect } from "react";

const isNumberControlSupported = !!NumberControl;

const Range = (props) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect(() => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, []);
	const { withInputField, isShiftStepEnabled } = props;

	const [value, setValue] = useState(props.value);

	let defaultCache = {
		value: props.value,
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
	}, [props.value]);

	const {
		__experimentalSetPreviewDeviceType: setPreviewDeviceType,
	} = useDispatch("core/edit-post");
	const customSetPreviewDeviceType = (device) => {
		setPreviewDeviceType(device);
	};
	const deviceType = useSelect((select) => {
		return select("core/edit-post").__experimentalGetPreviewDeviceType();
	}, []);
	const devices = [
		{
			name: "Desktop",
			title: <Dashicon icon="desktop" />,
			itemClass: "uagb-desktop-tab uagb-responsive-tabs",
		},
		{
			name: "Tablet",
			title: <Dashicon icon="tablet" />,
			itemClass: "uagb-tablet-tab uagb-responsive-tabs",
		},
		{
			name: "Mobile",
			key: "mobile",
			title: <Dashicon icon="smartphone" />,
			itemClass: "uagb-mobile-tab uagb-responsive-tabs",
		},
	];

	let unitSizes = [
		{
			name: __("Pixel", "ultimate-addons-for-gutenberg"),
			unitValue: "px",
		},
		{
			name: __("Em", "ultimate-addons-for-gutenberg"),
			unitValue: "em",
		},
	];

	if (props.units) {
		unitSizes = props.units;
	}

	const handleOnChange = (value) => {
		setValue(value);
		const parsedValue = parseFloat(value);
		props.onChange(parsedValue);
		return;
	};

	const resetValues = () => {
		let cachedValueUpdate = { ...cachedValue };

		setValue(cachedValueUpdate.value);
		props.onChange(cachedValueUpdate.value);

		cachedValueUpdate["resetDisabled"] = true;
		setCacheValue(cachedValueUpdate);
	};

	const onChangeUnits = (value) => {
		props.setAttributes({ [props.unit.label]: value });
	};

	const onUnitSizeClick = (unitSizes) => {
		const items = [];
		unitSizes.map((key) =>
			items.push(
				<Tooltip
					text={sprintf(
						__("%s units", "ultimate-addons-for-gutenberg"),
						key.name
					)}
				>
					<Button
						key={key.unitValue}
						className={"uagb-range-control__units--" + key.name}
						isSmall
						isPrimary={props.unit.value === key.unitValue}
						isSecondary={props.unit.value !== key.unitValue}
						aria-pressed={props.unit.value === key.unitValue}
						aria-label={sprintf(
							__("%s units", "ultimate-addons-for-gutenberg"),
							key.name
						)}
						onClick={() => onChangeUnits(key.unitValue)}
					>
						{key.unitValue}
					</Button>
				</Tooltip>
			)
		);

		return items;
	};

	return (
		<div className="components-base-control">
			<div className="uagb-range-control__header">
				{props.label && (
					<p className={"uagb-range-control__label"}>{props.label}</p>
				)}
				<div className="uagb-range-control__actions">
					{props.responsive && (
						<ButtonGroup
							className="uagb-range-control-responsive components-tab-panel__tabs"
							aria-label={__(
								"Device",
								"ultimate-addons-for-gutenberg"
							)}
						>
							{map(devices, ({ name, key, title, itemClass }) => (
								<Button
									key={key}
									className={`components-button components-tab-panel__tabs-item uagb-range-control-responsive-item ${itemClass}${
										name === deviceType ? " active-tab" : ""
									}`}
									aria-pressed={deviceType === name}
									onClick={() =>
										customSetPreviewDeviceType(name)
									}
								>
									{title}
								</Button>
							))}
						</ButtonGroup>
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
					{props.displayUnit && (
						<ButtonGroup
							className="uagb-range-control__units"
							aria-label={__(
								"Select Units",
								"ultimate-addons-for-gutenberg"
							)}
						>
							{onUnitSizeClick(unitSizes)}
						</ButtonGroup>
					)}
				</div>
			</div>
			<div className="uagb-range-control__mobile-controls">
				<RangeControl
					value={props.value || ""}
					onChange={handleOnChange}
					withInputField={false}
					allowReset={false}
					max={props.max}
					min={props.min}
				/>
				{withInputField && isNumberControlSupported && (
					<NumberControl
						disabled={props.disabled}
						isShiftStepEnabled={isShiftStepEnabled}
						max={props.max}
						min={props.min}
						onChange={handleOnChange}
						value={props.value || ""}
					/>
				)}
			</div>
		</div>
	);
};

Range.defaultProps = {
	label: __("Margin", "ultimate-addons-for-gutenberg"),
	className: "",
	allowReset: true,
	withInputField: true,
	isShiftStepEnabled: true,
	max: Infinity,
	min: -Infinity,
	resetFallbackValue: "",
	placeholder: null,
	unit: ["px", "em"],
	displayUnit: true,
	responsive: false,
	onChange: () => {},
};

export default Range;
