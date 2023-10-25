import { useEffect, useState, useRef, useMemo } from '@wordpress/element';
import styling from './styling';
import Settings from './settings';
import Render from './render';
import { getSettings as getDateSettings } from '@wordpress/date';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import { applyFilters } from '@wordpress/hooks';
import DynamicFontLoader from './dynamicFontLoader';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import { compose } from '@wordpress/compose';
import AddStaticStyles from '@Controls/AddStaticStyles';
import AddGBSStyles from '@Controls/AddGBSStyles';
import addInitialAttr from '@Controls/addInitialAttr';
//  Import CSS.
import './style.scss';

const UAGBCountdownEdit = ( props ) => {
	const {
		isSelected,
		clientId,
		attributes,
		attributes: {
			block_id,
			timeModified,
			endDateTime,
			showDays,
			showHours,
			showMinutes,
			UAGHideDesktop,
			UAGHideTab,
			UAGHideMob,
		},
		setAttributes,
		name,
		deviceType
	} = props;

	const [ timeChanged, setTimeChanged ] = useState( 0 );

	useEffect( () => {
		// Dynamically set default value to Jan 1 of next year (UTC),
		// on drag and drop of a new instance of the block.
		if ( ! timeModified ) {
			// check if time has been modified dynamically using the flag attribute.

			// Get WordPress' timezone offset from settings.
			const { timezone } = getDateSettings();

			// For countdown calculations.
			const actualTime = new Date();

			// For setting the time in input fields as per selected timezone offset in WordPress settings.
			const displayTime = new Date();

			// Set the default end time to 7 days later (one for displaying in input fields, and another with actual timezone offset calculations).
			actualTime.setMilliseconds( actualTime.getMilliseconds() + 7 * 24 * 60 * 60 * 1000 );

			displayTime.setMilliseconds( displayTime.getMilliseconds() + 7 * 24 * 60 * 60 * 1000 );

			// For display time, we consider local and WP timezone offset.
			displayTime.setMilliseconds(
				displayTime.getMilliseconds() +
					( displayTime.getTimezoneOffset() * 60 * 1000 + timezone.offset * 60 * 60 * 1000 )
			);

			setAttributes( {
				endDateTime: actualTime,
				endDateTimeCopy: actualTime,
				displayEndDateTime: displayTime,
				timeModified: true,
			} );
		}
	}, [] );

	const countdownRef = useRef( null );

	useEffect( () => {
		let countdownInterval = null;
		if ( countdownRef && block_id ) {
			countdownInterval =  setTimeout( () => {
				UAGBCountdown.editorInit( '.uagb-block-' + block_id, attributes, countdownRef.current );
			} );
		}
		return () => {
			if( null === countdownInterval ) {
				clearInterval( countdownInterval );
			}
		}
	}, [ countdownRef, block_id ] );

	const blockStyling = useMemo( () => styling( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );

	useEffect( () => {
		if ( block_id && timeChanged === 1 ) {
			UAGBCountdown.changeEndTime( '.uagb-block-' + block_id, attributes, countdownRef.current );
		}
		setTimeChanged( 1 );
	}, [ endDateTime, showDays, showHours, showMinutes ] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	// Hooks cannot be applied within conditional renders, so we pre-fetch the value.
	const countdownToolbar = applyFilters( 'spectra.countdown.toolbar-hook', '', name );

	return (
		<>
			{ /* Countdown Toolbar options for Pro (Replace feature) */ }
			{ attributes.timerEndAction === 'content' && countdownToolbar }
			<DynamicFontLoader { ...{ attributes } } />
			<DynamicCSSLoader { ...{ blockStyling } } />
			{ isSelected && <Settings { ...props } /> }
			<Render countdownRef={ countdownRef } { ...props } />
		</>
	);
};

export default compose(
	addInitialAttr,
	AddStaticStyles,
	AddGBSStyles
)( UAGBCountdownEdit );
