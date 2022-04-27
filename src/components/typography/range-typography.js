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
		return select( 'core/edit-post' ).__experimentalGetPreviewDeviceType();
	}, [] );

	const output = {};

	output.Desktop = (
		<>
			<Range
				{ ...props }
				label={ props.sizeText }
				value={ props.size.value || '' }
				min={ 0 }
				max={ 100 }
				unit={ props.type }
				responsive={ true }
				setAttributes={props.setAttributes}
				data={{value:props.size.value, label:props.sizeLabel}}
				onChange={false}
			/>
		</>
	);
	output.Tablet = (
		<>
			<Range
				{ ...props }
				label={ props.sizeTabletText }
				value={ props.sizeTablet.value }
				min={ 0 }
				max={ 100 }
				unit={ props.type }
				responsive={ true }
				setAttributes={props.setAttributes}
				data={{value:props.sizeTablet.value, label:props.sizeTabletLabel}}
				onChange={false}
			/>
		</>
	);
	output.Mobile = (
		<>
			<Range
				{ ...props }
				label={ props.sizeMobileText }
				value={ props.sizeMobile.value }
				min={ 0 }
				max={ 100 }
				unit={ props.type }
				responsive={ true }
				setAttributes={props.setAttributes}
				data={{value:props.sizeMobile.value, label:props.sizeMobileLabel}}
				onChange={false}
			/>
		</>
	);

	return (
		<div className={ 'uag-typography-range-options' }>
			<div className="uagb-size-type-field-tabs">
				<div className="uagb-responsive-control-inner">
					{ output[ deviceType ]
						? output[ deviceType ]
						: output.Desktop }
				</div>
			</div>
		</div>
	);
}
