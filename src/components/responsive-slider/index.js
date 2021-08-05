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
				min={props.min}
				max={props.max}
				unit={props.unit}
				responsive={true}
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
				min={props.min}
				max={props.max}
				unit={props.unit}
				responsive={true}
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
				min={props.min}
				max={props.max}
				unit={props.unit}
				responsive={true}
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
