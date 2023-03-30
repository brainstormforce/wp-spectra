/**
 * BLOCK: Info Box - Edit Class
 */
import { useEffect } from '@wordpress/element';

import styling from './styling';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { migrateBorderAttributes } from '@Controls/generateAttributes';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import WebfontLoader from '@Components/typography/fontloader';

import Settings from './settings';
import Render from './render';

const UAGBInfoBox = ( props ) => {
	const deviceType = useDeviceType();
	const {
		setAttributes,
		isSelected,
		attributes,
		attributes: {
			ctaBorderStyle,
			ctaBorderWidth,
			ctaBorderRadius,
			ctaBorderColor,
			ctaBorderhoverColor,
			ctaBgType,
			ctaBgHoverType,
			showCtaIcon,
			UAGHideDesktop,
			UAGHideTab,
			UAGHideMob,
			prefixLoadGoogleFonts,
			headLoadGoogleFonts,
			subHeadLoadGoogleFonts,
			ctaLoadGoogleFonts,
			prefixFontFamily,
			prefixFontWeight,
			headFontFamily,
			headFontWeight,
			subHeadFontFamily,
			subHeadFontWeight,
			ctaFontFamily,
			ctaFontWeight,
		},
		clientId,
	} = props;

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );

		setAttributes( { classMigrate: true } );

		if ( ctaBgType === undefined ) {
			setAttributes( { ctaBgType: 'color' } );
		}

		if ( ctaBgHoverType === undefined ) {
			setAttributes( { ctaBgHoverType: 'color' } );
		}

		if ( showCtaIcon === undefined ) {
			setAttributes( { showCtaIcon: true } );
		}

		// Backward Border Migration
		if ( ctaBorderWidth || ctaBorderRadius || ctaBorderColor || ctaBorderhoverColor || ctaBorderStyle ) {
			migrateBorderAttributes(
				'btn',
				{
					label: 'ctaBorderWidth',
					value: ctaBorderWidth,
				},
				{
					label: 'ctaBorderRadius',
					value: ctaBorderRadius,
				},
				{
					label: 'ctaBorderColor',
					value: ctaBorderColor,
				},
				{
					label: 'ctaBorderhoverColor',
					value: ctaBorderhoverColor,
				},
				{
					label: 'ctaBorderStyle',
					value: ctaBorderStyle,
				},
				setAttributes,
				attributes
			);
		}
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-info-box-style-' + clientId.substr( 0, 8 ), blockStyling );
	}, [ attributes, deviceType ] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	let loadPrefixGoogleFonts;
	let loadSubHeadGoogleFonts;
	let loadCtaGoogleFonts;
	let loadHeadGoogleFonts;

	if ( prefixLoadGoogleFonts === true ) {
		const prefixconfig = {
			google: {
				families: [ prefixFontFamily + ( prefixFontWeight ? ':' + prefixFontWeight : '' ) ],
			},
		};

		loadPrefixGoogleFonts = <WebfontLoader config={ prefixconfig }></WebfontLoader>;
	}

	if ( headLoadGoogleFonts === true ) {
		const headconfig = {
			google: {
				families: [ headFontFamily + ( headFontWeight ? ':' + headFontWeight : '' ) ],
			},
		};

		loadHeadGoogleFonts = <WebfontLoader config={ headconfig }></WebfontLoader>;
	}

	if ( subHeadLoadGoogleFonts === true ) {
		const subHeadconfig = {
			google: {
				families: [ subHeadFontFamily + ( subHeadFontWeight ? ':' + subHeadFontWeight : '' ) ],
			},
		};

		loadSubHeadGoogleFonts = <WebfontLoader config={ subHeadconfig }></WebfontLoader>;
	}

	if ( ctaLoadGoogleFonts === true ) {
		const ctaconfig = {
			google: {
				families: [ ctaFontFamily + ( ctaFontWeight ? ':' + ctaFontWeight : '' ) ],
			},
		};

		loadCtaGoogleFonts = <WebfontLoader config={ ctaconfig }></WebfontLoader>;
	}

	return (
		<>
			{ isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
			{ loadPrefixGoogleFonts }
			{ loadSubHeadGoogleFonts }
			{ loadCtaGoogleFonts }
			{ loadHeadGoogleFonts }
		</>
	);
};

export default UAGBInfoBox;
