import { __ } from "@wordpress/i18n";
import Range from "../../components/range/Range.js";
// Extend component
import { useSelect } from "@wordpress/data";

const ResponsiveSlider = (props) => {
	const deviceType = useSelect((select) => {
		return select("core/edit-post").__experimentalGetPreviewDeviceType();
	}, []);

	const output = {};

	let maxDesk =
		undefined !== props.data.desktop.max
			? props.data.desktop.max
			: props.max;
	let maxTab =
		undefined !== props.data.tablet.max
			? props.data.tablet.max.value
			: props.max;
	let maxMob =
		undefined !== props.data.mobile.max
			? props.data.mobile.max.value
			: props.max;
	let minDesk =
		undefined !== props.data.desktop.min
			? props.data.desktop.min
			: props.min;
	let minTab =
		undefined !== props.data.tablet.min
			? props.data.tablet.min.value
			: props.min;
	let minMob =
		undefined !== props.data.mobile.min
			? props.data.mobile.min.value
			: props.min;

	output.Desktop = (
		<>
			<Range
				{...props}
				label={__(props.label)}
				value={props.data.desktop.value || ""}
				onChange={(value) =>
					props.setAttributes({ [props.data.desktop.label]: value })
				}
				min={minDesk}
				max={maxDesk}
				unit={props.data.desktop.unit || props.unit}
				responsive={true}
				units={props.units}
			/>
		</>
	);
	output.Tablet = (
		<>
			<Range
				{...props}
				label={__(props.label)}
				value={props.data.tablet.value}
				onChange={(value) =>
					props.setAttributes({ [props.data.tablet.label]: value })
				}
				min={minTab}
				max={maxTab}
				unit={props.data.tablet.unit || props.unit}
				responsive={true}
				units={props.units}
			/>
		</>
	);
	output.Mobile = (
		<>
			<Range
				{...props}
				label={__(props.label)}
				value={props.data.mobile.value}
				onChange={(value) =>
					props.setAttributes({ [props.data.mobile.label]: value })
				}
				min={minMob}
				max={maxMob}
				unit={props.data.mobile.unit || props.unit}
				responsive={true}
				units={props.units}
			/>
		</>
	);

	return (
		<div className="components-base-control uagb-size-type-field-tabs">
			<div className="uagb-responsive-control-inner">
				{output[deviceType] ? output[deviceType] : output.Desktop}
			</div>
		</div>
	);
};
export default ResponsiveSlider;
