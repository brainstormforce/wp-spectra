/**
 * External dependencies
 */

import styling from './styling';
import { useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import WebfontLoader from '@Components/typography/fontloader';

import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { useSelect } from '@wordpress/data';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

const UAGBTaxonomyList = ( props ) => {
	const deviceType = useDeviceType();
	const {
		isSelected,
		attributes,
		attributes: {
			postType,
			taxonomyType,
			showEmptyTaxonomy,
			listInJson,
			borderStyle,
			borderThickness,
			borderRadius,
			borderColor,
			borderHoverColor,
			overallBorderTopWidth,
			overallBorderLeftWidth,
			overallBorderRightWidth,
			overallBorderBottomWidth,
			overallBorderTopLeftRadius,
			overallBorderTopRightRadius,
			overallBorderBottomLeftRadius,
			overallBorderBottomRightRadius,
			overallBorderColor,
			overallBorderHColor,
			overallBorderStyle,
			UAGHideDesktop,
			UAGHideTab,
			UAGHideMob,
			titleLoadGoogleFonts,
			titleFontFamily,
			titleFontWeight,
			countLoadGoogleFonts,
			countFontFamily,
			countFontWeight,
			listLoadGoogleFonts,
			listFontFamily,
			listFontWeight
		},
		setAttributes,
		clientId,
	} = props;
	
	let categoriesList = [];

	const {
		taxonomyList,
		termsList,
	} = useSelect(
		( select ) => { // eslint-disable-line  no-unused-vars
			const allTaxonomy = ( null !== listInJson ) ? listInJson.data : '';
			const currentTax = ( '' !== allTaxonomy ) ? allTaxonomy[ postType ] : 'undefined';

			const listToShowTaxonomy = showEmptyTaxonomy
				? 'with_empty_taxonomy'
				: 'without_empty_taxonomy';

			if ( 'undefined' !== typeof currentTax ) {
				if (
					'undefined' !== typeof currentTax[ listToShowTaxonomy ] &&
					'undefined' !==
						typeof currentTax[ listToShowTaxonomy ][ taxonomyType ]
				) {
					categoriesList = currentTax[ listToShowTaxonomy ][ taxonomyType ];
				}
			}

			return {
				categoriesList,
				taxonomyList:
					'undefined' !== typeof currentTax ? currentTax.taxonomy : [],
				termsList: 'undefined' !== typeof currentTax ? currentTax.terms : [],
			};
		},
	);

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );

		const formData = new window.FormData();

		formData.append( 'action', 'uagb_get_taxonomy' );
		formData.append(
			'nonce',
			uagb_blocks_info.uagb_ajax_nonce
		);
		apiFetch( {
			url: uagb_blocks_info.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( ( data ) => {
			setAttributes( { listInJson: data } );
		} );

		if( borderThickness ){
			if( undefined === overallBorderTopWidth ) {
				setAttributes( {
					overallBorderTopWidth: borderThickness,
				} );
			}
			if( undefined === overallBorderLeftWidth ) {
				setAttributes( { overallBorderLeftWidth : borderThickness} );
			}
			if( undefined === overallBorderRightWidth ) {
				setAttributes( { overallBorderRightWidth : borderThickness} );
			}
			if( undefined === overallBorderBottomWidth ) {
				setAttributes( { overallBorderBottomWidth : borderThickness} );
			}
		}

		if( borderRadius ){

			if( undefined === overallBorderTopLeftRadius ) {
				setAttributes( { overallBorderTopLeftRadius : borderRadius} );
			}
			if( undefined === overallBorderTopRightRadius ) {
				setAttributes( { overallBorderTopRightRadius : borderRadius} );
			}
			if( undefined === overallBorderBottomLeftRadius ) {
				setAttributes( { overallBorderBottomLeftRadius : borderRadius} );
			}
			if( undefined === overallBorderBottomRightRadius ) {
				setAttributes( { overallBorderBottomRightRadius : borderRadius} );
			}
		}

		if( borderColor ){
			if( undefined === overallBorderColor ) {
				setAttributes( { overallBorderColor : borderColor} );
			}
		}

		if( borderHoverColor ){
			if( undefined === overallBorderHColor ) {
				setAttributes( { overallBorderHColor : borderHoverColor} );
			}
		}

		if( borderStyle ){
			if( undefined === overallBorderStyle ) {
				setAttributes( { overallBorderStyle : borderStyle} );
			}
		}
		
	}, [] );

	useEffect( () => {

		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-taxonomy-list-' + clientId.substr( 0, 8 ), blockStyling );
		
	}, [ attributes, deviceType  ] );

	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [deviceType] );

	let loadTitleGoogleFonts;
	let loadCountGoogleFonts;
	let loadListGoogleFonts;

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

	if ( countLoadGoogleFonts === true ) {
		const countconfig = {
			google: {
				families: [
					countFontFamily +
						( countFontWeight ? ':' + countFontWeight : '' ),
				],
			},
		};

		loadCountGoogleFonts = (
			<WebfontLoader config={ countconfig }></WebfontLoader>
		);
	}

	if ( listLoadGoogleFonts === true ) {
		const listconfig = {
			google: {
				families: [
					listFontFamily +
						( listFontWeight ? ':' + listFontWeight : '' ),
				],
			},
		};

		loadListGoogleFonts = (
			<WebfontLoader config={ listconfig }></WebfontLoader>
		);
	}

	return (
		<>
			{ isSelected && (
				<Settings
					parentProps={ props }
					taxonomyList={ taxonomyList }
					termsList={ termsList }
				/>
			) }
			<Render parentProps={ props } categoriesList={ categoriesList } />
			{ loadTitleGoogleFonts }
			{ loadCountGoogleFonts }
			{ loadListGoogleFonts }
		</>
	);
};

export default UAGBTaxonomyList;
