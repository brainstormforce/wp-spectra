/**
 * WordPress dependencies
 */
import {
	BaseControl,
	Button,
	ButtonGroup,
	PanelRow,
	Tooltip,
	Dashicon,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
const { useSelect, useDispatch } = wp.data;
/**
 * Import Css
 */
import styles from "./editor.lazy.scss";
import React, { useLayoutEffect } from "react";

const MultiButtonsControl = (props) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect(() => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, []);
	const {
		data,
		label,
		onChange,
		options,
		showIcons,
		setAttributes,
		responsive,
	} = props;

	const deviceType = useSelect((select) => {
		return select("core/edit-post").__experimentalGetPreviewDeviceType();
	}, []);
	const {
		__experimentalSetPreviewDeviceType: setPreviewDeviceType,
	} = useDispatch("core/edit-post");

	const customSetPreviewDeviceType = (device) => {
		setPreviewDeviceType(device);
	};

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
	if (!options) {
		return __(
			"Please add a option props to MultiButtonsControl",
			"ultimate-addons-for-gutenberg"
		);
	}

	if (responsive) {
		const output = {};

		output.Desktop = (
			<ButtonGroup
				className={`uagb-multi-button-button-group`}
				aria-label={label}
			>
				{options.map((option) => (
					<Tooltip
						key={`option-${option.value}`}
						text={option.tooltip}
					>
						<Button
							className={`uagb-multi-button`}
							isLarge
							isSecondary={data.desktop.value !== option.value}
							isPrimary={data.desktop.value === option.value}
							aria-pressed={data.desktop.value === option.value}
							onClick={() =>
								setAttributes({
									[data.desktop.label]: option.value,
								})
							}
							aria-label={option.tooltip}
						>
							{showIcons ? option.icon : option.label}
						</Button>
					</Tooltip>
				))}
			</ButtonGroup>
		);
		output.Tablet = (
			<ButtonGroup
				className={`uagb-multi-button-button-group`}
				aria-label={label}
			>
				{options.map((option) => (
					<Tooltip
						key={`option-${option.value}`}
						text={option.tooltip}
					>
						<Button
							className={`uagb-multi-button`}
							isLarge
							isSecondary={data.tablet.value !== option.value}
							isPrimary={data.tablet.value === option.value}
							aria-pressed={data.tablet.value === option.value}
							onClick={() =>
								setAttributes({
									[data.tablet.label]: option.value,
								})
							}
							aria-label={option.tooltip}
						>
							{showIcons ? option.icon : option.label}
						</Button>
					</Tooltip>
				))}
			</ButtonGroup>
		);
		output.Mobile = (
			<ButtonGroup
				className={`uagb-multi-button-button-group`}
				aria-label={label}
			>
				{options.map((option) => (
					<Tooltip
						key={`option-${option.value}`}
						text={option.tooltip}
					>
						<Button
							className={`uagb-multi-button`}
							isLarge
							isSecondary={data.mobile.value !== option.value}
							isPrimary={data.mobile.value === option.value}
							aria-pressed={data.mobile.value === option.value}
							onClick={() =>
								setAttributes({
									[data.mobile.label]: option.value,
								})
							}
							aria-label={option.tooltip}
						>
							{showIcons ? option.icon : option.label}
						</Button>
					</Tooltip>
				))}
			</ButtonGroup>
		);

		return (
			<>
				<div className="uagb-control__header uagb-multibuttons-header">
					{label && <p className={"uagb-control__label"}>{label}</p>}
					<div className="uagb-control__actions">
						<div className="uagb-size-type-field-tabs">
							<ButtonGroup
								className="components-tab-panel__tabs"
								aria-label={__(
									"Device",
									"ultimate-addons-for-gutenberg"
								)}
							>
								{devices.map(
									({ name, key, title, itemClass }) => (
										<Button
											key={key}
											className={`components-button components-tab-panel__tabs-item ${itemClass}${
												name === deviceType
													? " active-tab"
													: ""
											}`}
											aria-pressed={deviceType === name}
											onClick={() =>
												customSetPreviewDeviceType(name)
											}
										>
											{title}
										</Button>
									)
								)}
							</ButtonGroup>
						</div>
					</div>
				</div>
				{output[deviceType] ? output[deviceType] : output.Desktop}
			</>
		);
	}

	return (
		<>
			<p class="uagb-multi-buttons-control__label">{label}</p>
			<ButtonGroup
				className={`uagb-multi-button-button-group`}
				aria-label={label}
			>
				{options.map((option) => (
					<Tooltip
						key={`option-${option.value}`}
						text={option.tooltip}
					>
						<Button
							className={`uagb-multi-button`}
							isLarge
							isSecondary={data.value !== option.value}
							isPrimary={data.value === option.value}
							aria-pressed={data.value === option.value}
							onClick={() =>
								setAttributes({
									[data.label]: option.value,
								})
							}
							aria-label={option.tooltip}
						>
							{showIcons ? option.icon : option.label}
						</Button>
					</Tooltip>
				))}
			</ButtonGroup>
		</>
	);
};

export default MultiButtonsControl;
