/**
 * WordPress dependencies
 */
import Range from '@Components/range/Range.js';
import { useDeviceType } from '@Controls/getPreviewType';
/**
 * Build the Measure controls
 *
 * @param {Object[]} props
 * @return {Object} Measure settings.
 */
export default function RangeTypographyControl( props ) {
	const deviceType = useDeviceType();

	const {
		sizeText,
		size,
		min,
		type,
		typeTablet,
		typeMobile,
		setAttributes,
		sizeLabel,
		sizeTabletText,
		sizeTablet,
		sizeTabletLabel,
		sizeMobileText,
		sizeMobile,
		sizeMobileLabel,
		
	} = props;

	const output = {};

	output.Desktop = (
		<>
			<Range
				{ ...props }
				label={ sizeText }
				value={ size.value || '' }
				min={ min }
				max={ 200 }
				// Add units here if it exisits
				unit={ type }
				responsive={ true }
				setAttributes={ setAttributes }
				data={ {
					value: size.value,
					label: sizeLabel,
				} }
				step={ props?.step }
			/>
		</>
	);
	output.Tablet = (
		<>
			<Range
				{ ...props }
				label={ sizeTabletText }
				value={ sizeTablet.value }
				min={ min }
				max={ 200 }
				unit={ typeTablet? typeTablet : type }
				responsive={ true }
				setAttributes={ setAttributes }
				data={ {
					value: sizeTablet.value,
					label: sizeTabletLabel,
				} }
				step={ props?.stepTablet? props?.stepTablet : props?.step }
			/>
		</>
	);
	output.Mobile = (
		<>
			<Range
				{ ...props }
				label={ sizeMobileText }
				value={ sizeMobile.value }
				min={ min }
				max={ 200 }
				unit={ typeMobile? typeMobile : type }
				responsive={ true }
				setAttributes={ setAttributes }
				data={ {
					value: sizeMobile.value,
					label: sizeMobileLabel,
				} }
				step={ props?.stepMobile? props?.stepMobile : props?.step }
			/>
		</>
	);

	return (
		<div className="uagb-size-type-field-tabs">
			<div className="uagb-responsive-control-inner">
				{ output[ deviceType ] ? output[ deviceType ] : output.Desktop }
			</div>
		</div>
	);
}
