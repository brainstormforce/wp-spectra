/**
 * External dependencies
 */
import styles from "./editor.lazy.scss";
import React, { useLayoutEffect } from "react";
import { __ } from "@wordpress/i18n";
import {
	ButtonGroup,
	Button,
	SelectControl,
	Dashicon,
} from "@wordpress/components";
import { useDispatch, useSelect } from "@wordpress/data";

const ResponsiveSelectControl = (props) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect(() => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, []);

	const { label, data, setAttributes, options } = props;

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

	const output = {};
	output.Desktop = (
		<SelectControl
			value={data.desktop.value}
			onChange={(value) => setAttributes({ [data.desktop.label]: value })}
			options={options.desktop}
		/>
	);
	output.Tablet = (
		<SelectControl
			value={data.tablet.value}
			onChange={(value) => setAttributes({ [data.tablet.label]: value })}
			options={options.tablet || options.desktop}
		/>
	);
	output.Mobile = (
		<SelectControl
			value={data.mobile.value}
			onChange={(value) => setAttributes({ [data.mobile.label]: value })}
			options={options.mobile || options.desktop}
		/>
	);

	return (
		<div className="components-base-control uagb-responsive-select-control">
			<div className="uagb-control__header">
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
							{devices.map(({ name, key, title, itemClass }) => (
								<Button
									key={key}
									className={`components-button components-tab-panel__tabs-item ${itemClass}${
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
					</div>
				</div>
			</div>
			{output[deviceType] ? output[deviceType] : output.Desktop}
		</div>
	);
};

export default ResponsiveSelectControl;
