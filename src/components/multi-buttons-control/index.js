/**
 * WordPress dependencies
 */
import {
	BaseControl,
	Button,
	ButtonGroup,
	PanelRow,
	Tooltip,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
/**
 * Import Css
 */
import "./editor.scss";

const MultiButtonsControl = (props) => {
	const {
		data,
		label,
		onChange,
		options,
		showIcons,
		setAttributes,
		responsive,
	} = props;

	if (!options) {
		return __(
			"Please add a option props to MultiButtonsControl",
			"ultimate-addons-for-gutenberg"
		);
	}

	let renderHtml = (
		<ButtonGroup
			className={`uagb-multi-button-button-group`}
			aria-label={label}
		>
			{options.map((option) => (
				<Tooltip key={`option-${option.value}`} text={option.tooltip}>
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
	);

	const output = {};

	output.Desktop = (
		<ButtonGroup
			className={`uagb-multi-button-button-group`}
			aria-label={label}
		>
			{options.map((option) => (
				<Tooltip key={`option-${option.value}`} text={option.tooltip}>
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
				<Tooltip key={`option-${option.value}`} text={option.tooltip}>
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
				<Tooltip key={`option-${option.value}`} text={option.tooltip}>
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
			<p class="uagb-multi-buttons-control__label">{label}</p>
		</>
	);
};

export default MultiButtonsControl;
