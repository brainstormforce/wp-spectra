import styling from './styling';
import { useEffect } from '@wordpress/element';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import WebfontLoader from '@Components/typography/fontloader';

import Settings from './settings';
import Render from './render';

const UAGBBlockQuote = ( props ) => {

	const deviceType = useDeviceType();
	const {
		attributes,
		attributes: { UAGHideDesktop, UAGHideTab, UAGHideMob, authorImageWidthUnit, authorImgBorderRadiusUnit, descLoadGoogleFonts,
			authorLoadGoogleFonts,
			tweetBtnLoadGoogleFonts, 
			descFontFamily,
			descFontWeight,
			authorFontFamily,
			authorFontWeight,
			tweetBtnFontFamily,
			tweetBtnFontWeight
		},
		isSelected,
		setAttributes,
		clientId
	} = props;

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );

		// Assigning block_id in the attribute.
		setAttributes( { classMigrate: true } );

		if( undefined ===  authorImageWidthUnit ){
			setAttributes( { authorImageWidthUnit: 'px' } );
		}
		if( undefined ===  authorImgBorderRadiusUnit ){
			setAttributes( { authorImgBorderRadiusUnit: '%' } );
		}

	}, [] );

	useEffect( () => {

		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-blockquote-style-' + clientId.substr( 0, 8 ), blockStyling );

	}, [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	let loadDescGoogleFonts;
	let loadAuthorGoogleFonts;
	let loadTweetGoogleFonts;

	if ( descLoadGoogleFonts === true ) {
		const descconfig = {
			google: {
				families: [
					descFontFamily +
						( descFontWeight ? ':' + descFontWeight : '' ),
				],
			},
		};

		loadDescGoogleFonts = (
			<WebfontLoader config={ descconfig }></WebfontLoader>
		);
	}

	if ( authorLoadGoogleFonts === true ) {
		const authorconfig = {
			google: {
				families: [
					authorFontFamily +
						( authorFontWeight ? ':' + authorFontWeight : '' ),
				],
			},
		};

		loadAuthorGoogleFonts = (
			<WebfontLoader config={ authorconfig }></WebfontLoader>
		);
	}

	if ( tweetBtnLoadGoogleFonts === true ) {
		const tweetBtnconfig = {
			google: {
				families: [
					tweetBtnFontFamily +
						( tweetBtnFontWeight ? ':' + tweetBtnFontWeight : '' ),
				],
			},
		};

		loadTweetGoogleFonts = (
			<WebfontLoader config={ tweetBtnconfig }></WebfontLoader>
		);
	}

	return (
			<>
			{ isSelected && <Settings parentProps={ props } /> }
				<Render parentProps={ props } />
				{ loadDescGoogleFonts }
				{ loadAuthorGoogleFonts }
				{ loadTweetGoogleFonts }
			</>
	);
};

export default UAGBBlockQuote;
