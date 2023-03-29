/**
 * BLOCK: Advanced Heading
 */
import styling from './styling';
import { useEffect } from '@wordpress/element';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { useDeviceType } from '@Controls/getPreviewType';
import Settings from './settings';
import Render from './render';
import WebfontLoader from '@Components/typography/fontloader';
//  Import CSS.
import './style.scss';

const UAGBAdvancedHeading = ( props ) => {
	const deviceType = useDeviceType();
	const {
		attributes,
		attributes: { UAGHideDesktop, UAGHideTab, UAGHideMob, headLoadGoogleFonts, headFontFamily, headFontWeight, subHeadLoadGoogleFonts, subHeadFontFamily, subHeadFontWeight },
		isSelected,
		setAttributes,
		clientId
	} = props;
	
	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );
		setAttributes( { classMigrate: true } )

	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );
		addBlockEditorDynamicStyles(
			'uagb-adv-heading-style-' + clientId.substr( 0, 8 ),
			blockStyling
		);
	}, [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	let loadHeadingGoogleFonts;
	let loadSubHeadingGoogleFonts;

	if ( headLoadGoogleFonts === true ) {
		const hconfig = {
			google: {
				families: [
					headFontFamily +
						( headFontWeight ? ':' + headFontWeight : '' ),
				],
			},
		};

		loadHeadingGoogleFonts = (
			<WebfontLoader config={ hconfig }></WebfontLoader>
		);
	}
	if ( subHeadLoadGoogleFonts === true ) {
		const sconfig = {
			google: {
				families: [
					subHeadFontFamily +
						( subHeadFontWeight ? ':' + subHeadFontWeight : '' ),
				],
			},
		};

		loadSubHeadingGoogleFonts = (
			<WebfontLoader config={ sconfig }></WebfontLoader>
		);
	}
	return (
			<>
			{ isSelected && <Settings parentProps={ props } /> }
				<Render parentProps={ props } />
				{ loadHeadingGoogleFonts }
				{ loadSubHeadingGoogleFonts }
			</>
	);
};
export default UAGBAdvancedHeading;
