/**
 * Box-Shadow reusable component.
 *
 */
import { __ } from "@wordpress/i18n";
import Range from "../../components/range/Range.js";
import AdvancedPopColorControl from "../color-control/advanced-pop-color-control";
import { Button, SelectControl, Dashicon } from "@wordpress/components";
import { useState } from "@wordpress/element";
import MultiButtonsControl from "../multi-buttons-control/index";

const BoxShadowControl = (props) => {
	const [value, setValue] = useState(props);

	const onAdvancedControlClick = () => {
		let control = true;
		let label = __("Hide Advanced", "ultimate-addons-for-gutenberg");

		if (value !== null && value.showAdvancedControls === true) {
			control = false;
			label = __("Advanced", "ultimate-addons-for-gutenberg");
		}

		setValue({
			showAdvancedControls: control,
			showAdvancedControlsLabel: label,
		});
	};

	const {
		setAttributes,
		boxShadowColor,
		boxShadowHOffset,
		boxShadowVOffset,
		boxShadowBlur,
		boxShadowSpread,
		boxShadowPosition,
	} = props;

	var advancedControls;
	var boxShadowAdvancedControls;

	if (value !== null && true === value.showAdvancedControls) {
		advancedControls = (
			<div className="uagb-box-shadow-advanced">
				<MultiButtonsControl
					label={__("Position", "ultimate-addons-for-gutenberg")}
					currentOption={boxShadowPosition.value}
					options={[
						{
							value: "inset",
							label: __("Inset", "ultimate-addons-for-gutenberg"),
							tooltip: __(
								"Inset (10px)",
								"ultimate-addons-for-gutenberg"
							),
						},
						{
							value: "outset",
							label: __(
								"Outset",
								"ultimate-addons-for-gutenberg"
							),
							tooltip: __(
								"Outset",
								"ultimate-addons-for-gutenberg"
							),
						},
					]}
					onChange={(value) =>
						setAttributes({ boxShadowPosition: value })
					}
					showIcons={false}
				/>
				<AdvancedPopColorControl
					label={__("Shadow Color", "ultimate-addons-for-gutenberg")}
					colorValue={boxShadowColor.value}
					colorDefault={""}
					onColorChange={(value) =>
						setAttributes({ boxShadowColor: value })
					}
					onColorClassChange={(value) =>
						setAttributes({ colorClass: value })
					}
				/>
				<div clasName="uagb-horizontal-wrap">
					<Range
						label={boxShadowHOffset.label}
						value={boxShadowHOffset.value}
						onChange={(value) =>
							setAttributes({ boxShadowHOffset: value })
						}
						min={0}
						max={100}
						displayUnit={false}
					/>
				</div>
				<div clasName="uagb-vertical-wrap">
					<Range
						label={boxShadowVOffset.label}
						value={boxShadowVOffset.value}
						onChange={(value) =>
							setAttributes({ boxShadowVOffset: value })
						}
						min={0}
						max={100}
						displayUnit={false}
					/>
				</div>
				<div clasName="uagb-blur-wrap">
					<Range
						label={boxShadowBlur.label}
						value={boxShadowBlur.value}
						onChange={(value) =>
							setAttributes({ boxShadowBlur: value })
						}
						min={0}
						max={100}
						displayUnit={false}
					/>
				</div>
				<div clasName="uagb-spread-wrap">
					<Range
						label={boxShadowSpread.label}
						value={boxShadowSpread.value}
						onChange={(value) =>
							setAttributes({ boxShadowSpread: value })
						}
						min={0}
						max={100}
						displayUnit={false}
					/>
				</div>
			</div>
		);
	}

	boxShadowAdvancedControls = (
		<Button
			className="uagb-size-btn uagb-typography-control-btn"
			isSmall
			aria-pressed={value !== null}
			onClick={onAdvancedControlClick}
		>
			<Dashicon icon="admin-tools" />
		</Button>
	);

	return (
		<div className="uag-typography-option-actions">
			<span>{props.label}</span>
			{boxShadowAdvancedControls}
			{advancedControls}
		</div>
	);
};

export default BoxShadowControl;
