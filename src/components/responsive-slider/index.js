import Range from '@Components/range/Range.js';
// Extend component
import { useSelect } from '@wordpress/data';

const ResponsiveSlider = ( props ) => {
	const deviceType = useSelect( ( select ) => {
		return select( 'core/edit-post' ).__experimentalGetPreviewDeviceType();
	}, [] );

	const output = {};

	const maxDesk =
		undefined !== props.data.desktop.max
			? props.data.desktop.max
			: props.max;
	const maxTab =
		undefined !== props.data.tablet.max ? props.data.tablet.max : props.max;
	const maxMob =
		undefined !== props.data.mobile.max ? props.data.mobile.max : props.max;
	const minDesk =
		undefined !== props.data.desktop.min
			? props.data.desktop.min
			: props.min;
	const minTab =
		undefined !== props.data.tablet.min ? props.data.tablet.min : props.min;
	const minMob =
		undefined !== props.data.mobile.min ? props.data.mobile.min : props.min;

	output.Desktop = (
		<>
			<Range
				{ ...props }
				label={ props.label }
				value={ props.data.desktop.value || '' }
				onChange={ ( value ) =>
					props.setAttributes( {
						[ props.data.desktop.label ]: value,
					} )
				}
				min={ minDesk }
				max={ maxDesk }
				unit={ props.data.desktop.unit || props.unit }
				responsive={ true }
				units={ props.units }
			/>
		</>
	);
	output.Tablet = (
		<>
			<Range
				{ ...props }
				label={ props.label }
				value={ props.data.tablet.value }
				onChange={ ( value ) =>
					props.setAttributes( {
						[ props.data.tablet.label ]: value,
					} )
				}
				min={ minTab }
				max={ maxTab }
				unit={ props.data.tablet.unit || props.unit }
				responsive={ true }
				units={ props.units }
			/>
		</>
	);
	output.Mobile = (
		<>
			<Range
				{ ...props }
				label={ props.label }
				value={ props.data.mobile.value }
				onChange={ ( value ) =>
					props.setAttributes( {
						[ props.data.mobile.label ]: value,
					} )
				}
				min={ minMob }
				max={ maxMob }
				unit={ props.data.mobile.unit || props.unit }
				responsive={ true }
				units={ props.units }
			/>
		</>
	);

	return (
		<div className="components-base-control uagb-responsive-range">
			<div className="uagb-responsive-control-inner">
				{ output[ deviceType ] ? output[ deviceType ] : output.Desktop }
			</div>
		</div>
	);
};
export default ResponsiveSlider;
