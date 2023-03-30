import { useEffect, useState, useRef } from '@wordpress/element';
import Range from '@Components/range/Range.js';
import { useDeviceType } from '@Controls/getPreviewType';
import { limitMax, limitMin } from '@Controls/unitWiseMinMaxOption';
import { select } from '@wordpress/data';
import { getIdFromString, getPanelIdFromRef } from '@Utils/Helpers';
import { applyFilters } from '@wordpress/hooks';

const ResponsiveSlider = ( props ) => {
	const [ panelNameForHook, setPanelNameForHook ] = useState( null );
	const panelRef = useRef( null );

	const deviceType = useDeviceType();

	const { getSelectedBlock } = select( 'core/block-editor' );
	const blockNameForHook = getSelectedBlock()?.name.split( '/' ).pop(); // eslint-disable-line @wordpress/no-unused-vars-before-return
	useEffect( () => {
		setPanelNameForHook( getPanelIdFromRef( panelRef ) );
	}, [ blockNameForHook ] );

	const output = {};
	const maxDesk = limitMax( props.data.desktop.unit?.value, props, true );
	const maxTab = limitMax( props.data.tablet.unit?.value, props, true );
	const maxMob = limitMax( props.data.mobile.unit?.value, props, true );
	const minDesk = limitMin( props.data.desktop.unit?.value, props, true );
	const minTab = limitMin( props.data.tablet.unit?.value, props, true );
	const minMob = limitMin( props.data.mobile.unit?.value, props, true );

	output.Desktop = (
		<>
			<Range
				{ ...props }
				label={ props.label }
				value={ isNaN( props.data.desktop.value ) ? '' : props.data.desktop.value }
				data={ {
					value: props.data.desktop.value,
					label: props.data.desktop.label,
				} }
				onChange={
					props?.onChange
						? ( value ) => {
								if ( props?.onChange ) {
									props.onChange( value );
								}
						  }
						: false
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
				value={ isNaN( props.data.tablet.value ) ? '' : props.data.tablet.value }
				data={ {
					value: props.data.tablet.value,
					label: props.data.tablet.label,
				} }
				onChange={
					props?.onChange
						? ( value ) => {
								if ( props?.onChange ) {
									props.onChange( value );
								}
						  }
						: false
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
				value={ isNaN( props.data.mobile.value ) ? '' : props.data.mobile.value }
				data={ {
					value: props.data.mobile.value,
					label: props.data.mobile.label,
				} }
				onChange={
					props?.onChange
						? ( value ) => {
								if ( props?.onChange ) {
									props.onChange( value );
								}
						  }
						: false
				}
				min={ minMob }
				max={ maxMob }
				unit={ props.data.mobile.unit || props.unit }
				responsive={ true }
				units={ props.units }
			/>
		</>
	);

	const controlName = getIdFromString( props.label );
	const controlBeforeDomElement = applyFilters(
		`spectra.${ blockNameForHook }.${ panelNameForHook }.${ controlName }.before`,
		'',
		blockNameForHook
	);
	const controlAfterDomElement = applyFilters(
		`spectra.${ blockNameForHook }.${ panelNameForHook }.${ controlName }`,
		'',
		blockNameForHook
	);

	return (
		<div ref={ panelRef } className="components-base-control">
			{ controlBeforeDomElement }
			<div className="uagb-responsive-range">
				<div className="uagb-responsive-control-inner">
					{ output[ deviceType ] ? output[ deviceType ] : output.Desktop }
				</div>
			</div>
			{ controlAfterDomElement }
		</div>
	);
};
export default ResponsiveSlider;
