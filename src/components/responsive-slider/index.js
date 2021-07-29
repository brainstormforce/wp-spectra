import { __ } from "@wordpress/i18n";
import Range from "../../components/range/Range.js";
// Extend component
import { useSelect, useDispatch } from "@wordpress/data";

const ResponsiveSlider = (props) => {
	const deviceType = useSelect((select) => {
		return select("core/edit-post").__experimentalGetPreviewDeviceType();
	}, []);

	const output = {};

	output.Desktop = (
		<>
			<Range
				{...props}
				label={__(props.label)}
				value={props.data.desktop.value || ""}
				onChange={(value) =>
					props.setAttributes({ [props.data.desktop.label]: value })
				}
				min={props.data.desktop.min || props.min}
				max={props.data.desktop.min || props.max}
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
				min={props.data.tablet.min || props.min}
				max={props.data.tablet.min || props.max}
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
				min={props.data.mobile.min || props.min}
				max={props.data.mobile.min || props.max}
				unit={props.data.mobile.unit || props.unit}
				responsive={true}
				units={props.units}
			/>
		</>
	);

	return (
		<div className="uagb-size-type-field-tabs">
			<div className="uagb-responsive-control-inner">
				{output[deviceType] ? output[deviceType] : output.Desktop}
			</div>
		</div>
	);
};
export default ResponsiveSlider;
