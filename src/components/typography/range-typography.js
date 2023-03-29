/**
 * WordPress dependencies
 */
import Range from '@Components/range/Range.js';
// Extend component
import { useSelect } from '@wordpress/data';
/**
 * Build the Measure controls
 *
 * @param {Object[]} props
 * @return {Object} Measure settings.
 */
export default function RangeTypographyControl( props ) {
	const deviceType = useSelect( ( select ) => {
		return select( 'core/edit-post' )?.__experimentalGetPreviewDeviceType();
	}, [] );

	const {
		sizeText,
		size,
		min,
		type,
		setAttributes,
		sizeLabel,
		sizeTabletText,
		sizeTablet,
		sizeTabletLabel,
		sizeMobileText,
		sizeMobile,
		sizeMobileLabel
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
				unit={ type }
				responsive={ true }
				setAttributes={setAttributes}
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
				unit={ type }
				responsive={ true }
				setAttributes={setAttributes}
				data={ {
					value: sizeTablet.value,
					label: sizeTabletLabel,
				} }
				step={ props?.step }
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
				unit={ type }
				responsive={ true }
				setAttributes={setAttributes}
				data={ {
					value: sizeMobile.value,
					label: sizeMobileLabel,
				} }
				step={ props?.step }
			/>
		</>
	);

	return (
		<div className="uagb-size-type-field-tabs">
			<div className="uagb-responsive-control-inner">
				{ output[ deviceType ]
					? output[ deviceType ]
					: output.Desktop }
			</div>
		</div>
	);
}
