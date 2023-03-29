/**
 * BLOCK: Marketing Button
 */

import styling from './styling';
import { useEffect } from '@wordpress/element';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { migrateBorderAttributes } from '@Controls/generateAttributes';
import Settings from './settings';
import WebfontLoader from '@Components/typography/fontloader';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

const UAGBMarketingButtonEdit = ( props ) => {
	const deviceType = useDeviceType();
	const {
		isSelected,
		setAttributes,
		attributes,
		attributes: {
			borderStyle,
			borderWidth,
			borderRadius,
			borderColor,
			borderHoverColor,
			UAGHideDesktop,
			UAGHideTab,
			UAGHideMob,
			titleLoadGoogleFonts,
			titleFontFamily,
			titleFontWeight,
			prefixLoadGoogleFonts,
			prefixFontFamily,
			prefixFontWeight
		},
		clientId,
	} = props;
	
	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );
		setAttributes( { classMigrate: true } );

		// border migration
		if( borderWidth || borderRadius || borderColor || borderHoverColor || borderStyle ){
			migrateBorderAttributes( 'btn', {
				label: 'borderWidth',
				value: borderWidth,
			}, {
				label: 'borderRadius',
				value: borderRadius
			}, {
				label: 'borderColor',
				value: borderColor
			}, {
				label: 'borderHoverColor',
				value: borderHoverColor
			},{
				label: 'borderStyle',
				value: borderStyle
			},
			setAttributes,
			attributes
			);
		}
		
	}, [] );

	useEffect( () => {

		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );
		addBlockEditorDynamicStyles( 'uagb-style-marketing-btn-' + clientId.substr( 0, 8 ), blockStyling );
		
	}, [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [deviceType] );

	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	
	// Load Google fonts for heading.
	let loadTitleGoogleFonts;
	if ( titleLoadGoogleFonts === true ) {
		const titleconfig = {
			google: {
				families: [
					titleFontFamily +
						( titleFontWeight ? ':' + titleFontWeight : '' ),
				],
			},
		};

		loadTitleGoogleFonts = (
			<WebfontLoader config={ titleconfig }></WebfontLoader>
		);
	}

	// Load Google fonts for prefix.
	let loadPrefixGoogleFonts;
	if ( prefixLoadGoogleFonts === true ) {
		const prefixconfig = {
			google: {
				families: [
					prefixFontFamily +
						( prefixFontWeight ? ':' + prefixFontWeight : '' ),
				],
			},
		};

		loadPrefixGoogleFonts = (
			<WebfontLoader config={ prefixconfig }></WebfontLoader>
		);
	}
	
	return (
			<>
			{ isSelected && <Settings parentProps={ props } /> }
				<Render parentProps={ props } />	
				{ loadTitleGoogleFonts }
				{ loadPrefixGoogleFonts }
			</>
	);
};
export default UAGBMarketingButtonEdit;
