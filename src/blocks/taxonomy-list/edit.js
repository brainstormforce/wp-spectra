/**
 * External dependencies
 */

import styling from './styling';
import React, {    useEffect } from 'react';
import apiFetch from '@wordpress/api-fetch';

import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { useSelect } from '@wordpress/data';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

const UAGBTaxonomyList = ( props ) => {
	const deviceType = useDeviceType();
	let categoriesList = [];

	const {
		taxonomyList,
		termsList,
	} = useSelect(
		( select ) => { // eslint-disable-line  no-unused-vars
			const {
				postType,
				taxonomyType,
				showEmptyTaxonomy,
				listInJson
			} = props.attributes;

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
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		const {
			contentPadding,
			contentPaddingMobile,
			contentPaddingTablet,
			contentTopPadding,
			contentRightPadding,
			contentBottomPadding,
			contentLeftPadding,
			contentTopPaddingTablet,
			contentRightPaddingTablet,
			contentBottomPaddingTablet,
			contentLeftPaddingTablet,
			contentTopPaddingMobile,
			contentRightPaddingMobile,
			contentBottomPaddingMobile,
			contentLeftPaddingMobile,
		} = props.attributes;

		if ( contentPadding ) {
			if ( undefined === contentTopPadding ) {
				props.setAttributes( { contentTopPadding: contentPadding } );
			}
			if ( undefined === contentBottomPadding ) {
				props.setAttributes( { contentBottomPadding: contentPadding } );
			}
			if ( undefined === contentLeftPadding ) {
				props.setAttributes( { contentLeftPadding: contentPadding } );
			}
			if ( undefined === contentRightPadding ) {
				props.setAttributes( { contentRightPadding: contentPadding } );
			}
		}
		if ( contentPaddingMobile ) {
			if ( undefined === contentTopPaddingMobile ) {
				props.setAttributes( {
					contentTopPaddingMobile: contentPaddingMobile,
				} );
			}
			if ( undefined === contentBottomPaddingMobile ) {
				props.setAttributes( {
					contentBottomPaddingMobile: contentPaddingMobile,
				} );
			}
			if ( undefined === contentLeftPaddingMobile ) {
				props.setAttributes( {
					contentLeftPaddingMobile: contentPaddingMobile,
				} );
			}
			if ( undefined === contentRightPaddingMobile ) {
				props.setAttributes( {
					contentRightPaddingMobile: contentPaddingMobile,
				} );
			}
		}
		if ( contentPaddingTablet ) {
			if ( undefined === contentTopPaddingTablet ) {
				props.setAttributes( {
					contentTopPaddingTablet: contentPaddingTablet,
				} );
			}
			if ( undefined === contentBottomPaddingTablet ) {
				props.setAttributes( {
					contentBottomPaddingTablet: contentPaddingTablet,
				} );
			}
			if ( undefined === contentLeftPaddingTablet ) {
				props.setAttributes( {
					contentLeftPaddingTablet: contentPaddingTablet,
				} );
			}
			if ( undefined === contentRightPaddingTablet ) {
				props.setAttributes( {
					contentRightPaddingTablet: contentPaddingTablet,
				} );
			}
		}
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
			props.setAttributes( { listInJson: data } );
		} );
		const {
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
		} = props.attributes;

		if( borderThickness ){
			if( undefined === overallBorderTopWidth ) {
				props.setAttributes( {
					overallBorderTopWidth: borderThickness,
				} );
			}
			if( undefined === overallBorderLeftWidth ) {
				props.setAttributes( { overallBorderLeftWidth : borderThickness} );
			}
			if( undefined === overallBorderRightWidth ) {
				props.setAttributes( { overallBorderRightWidth : borderThickness} );
			}
			if( undefined === overallBorderBottomWidth ) {
				props.setAttributes( { overallBorderBottomWidth : borderThickness} );
			}
		}

		if( borderRadius ){

			if( undefined === overallBorderTopLeftRadius ) {
				props.setAttributes( { overallBorderTopLeftRadius : borderRadius} );
			}
			if( undefined === overallBorderTopRightRadius ) {
				props.setAttributes( { overallBorderTopRightRadius : borderRadius} );
			}
			if( undefined === overallBorderBottomLeftRadius ) {
				props.setAttributes( { overallBorderBottomLeftRadius : borderRadius} );
			}
			if( undefined === overallBorderBottomRightRadius ) {
				props.setAttributes( { overallBorderBottomRightRadius : borderRadius} );
			}
		}

		if( borderColor ){
			if( undefined === overallBorderColor ) {
				props.setAttributes( { overallBorderColor : borderColor} );
			}
		}

		if( borderHoverColor ){
			if( undefined === overallBorderHColor ) {
				props.setAttributes( { overallBorderHColor : borderHoverColor} );
			}
		}

		if( borderStyle ){
			if( undefined === overallBorderStyle ) {
				props.setAttributes( { overallBorderStyle : borderStyle} );
			}
		}
		
	}, [] );

	useEffect( () => {

		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-taxonomy-list-' + props.clientId.substr( 0, 8 ), blockStyling );
		
	}, [ props ] );

	const { UAGHideDesktop, UAGHideTab, UAGHideMob  } = props.attributes;
	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-taxonomy-list-' + props.clientId.substr( 0, 8 ), blockStyling );

		scrollBlockToView();
	}, [deviceType] );

	return (
		<>

			<>
			<Settings parentProps={ props } taxonomyList={ taxonomyList } termsList={ termsList } />
			<Render parentProps={ props } categoriesList={ categoriesList } />
			</>

		</>
	);
};

export default UAGBTaxonomyList;
