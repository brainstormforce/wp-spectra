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
					setAttributes={setAttributes}
					label={boxShadowPosition.title}
					data={{
						value: boxShadowPosition.value,
						label: boxShadowPosition.label,
					}}
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
					showIcons={false}
				/>
				<AdvancedPopColorControl
					label={boxShadowColor.title}
					colorValue={boxShadowColor.value}
					onColorChange={(value) =>
						setAttributes({ [boxShadowColor.label]: value })
					}
				/>
				<div className="uagb-horizontal-wrap">
					<Range
						label={boxShadowHOffset.title}
						value={boxShadowHOffset.value}
						onChange={(value) =>
							setAttributes({ [boxShadowHOffset.label]: value })
						}
						min={0}
						max={100}
						displayUnit={false}
					/>
				</div>
				<div className="uagb-vertical-wrap">
					<Range
						label={boxShadowVOffset.title}
						value={boxShadowVOffset.value}
						onChange={(value) =>
							setAttributes({ [boxShadowVOffset.label]: value })
						}
						min={0}
						max={100}
						displayUnit={false}
					/>
				</div>
				<div className="uagb-blur-wrap">
					<Range
						label={boxShadowBlur.title}
						value={boxShadowBlur.value}
						onChange={(value) =>
							setAttributes({ [boxShadowBlur.label]: value })
						}
						min={0}
						max={100}
						displayUnit={false}
					/>
				</div>
				<div className="uagb-spread-wrap">
					<Range
						label={boxShadowSpread.title}
						value={boxShadowSpread.value}
						onChange={(value) =>
							setAttributes({ [boxShadowSpread.label]: value })
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
		<div className="uag-box-shadow-option-actions">
			<span>{props.label}</span>
			{boxShadowAdvancedControls}
			{advancedControls}
		</div>
	);
};

export default BoxShadowControl;
