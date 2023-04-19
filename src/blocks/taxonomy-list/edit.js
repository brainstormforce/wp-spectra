/**
 * External dependencies
 */

import styling from './styling';
import { useEffect, useMemo } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import DynamicFontLoader from './dynamicFontLoader';
import { useDeviceType } from '@Controls/getPreviewType';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { useSelect } from '@wordpress/data';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import { compose } from '@wordpress/compose';
import AddStaticStyles from '@Controls/AddStaticStyles';
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
		},
		setAttributes,
		clientId,
		name,
	} = props;

	let categoriesList = [];

	// eslint-disable-next-line  no-unused-vars
	const { taxonomyList, termsList } = useSelect( ( select ) => {
		const allTaxonomy = null !== listInJson ? listInJson.data : '';
		const currentTax = '' !== allTaxonomy ? allTaxonomy[ postType ] : 'undefined';

		const listToShowTaxonomy = showEmptyTaxonomy ? 'with_empty_taxonomy' : 'without_empty_taxonomy';

		if ( 'undefined' !== typeof currentTax ) {
			if (
				'undefined' !== typeof currentTax[ listToShowTaxonomy ] &&
				'undefined' !== typeof currentTax[ listToShowTaxonomy ][ taxonomyType ]
			) {
				categoriesList = currentTax[ listToShowTaxonomy ][ taxonomyType ];
			}
		}

		return {
			categoriesList,
			taxonomyList: 'undefined' !== typeof currentTax ? currentTax.taxonomy : [],
			termsList: 'undefined' !== typeof currentTax ? currentTax.terms : [],
		};
	} );

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );

		const formData = new window.FormData();

		formData.append( 'action', 'uagb_get_taxonomy' );
		formData.append( 'nonce', uagb_blocks_info.uagb_ajax_nonce );
		apiFetch( {
			url: uagb_blocks_info.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( ( data ) => {
			setAttributes( { listInJson: data } );
		} );

		if ( borderThickness ) {
			if ( undefined === overallBorderTopWidth ) {
				setAttributes( {
					overallBorderTopWidth: borderThickness,
				} );
			}
			if ( undefined === overallBorderLeftWidth ) {
				setAttributes( { overallBorderLeftWidth: borderThickness } );
			}
			if ( undefined === overallBorderRightWidth ) {
				setAttributes( { overallBorderRightWidth: borderThickness } );
			}
			if ( undefined === overallBorderBottomWidth ) {
				setAttributes( { overallBorderBottomWidth: borderThickness } );
			}
		}

		if ( borderRadius ) {
			if ( undefined === overallBorderTopLeftRadius ) {
				setAttributes( { overallBorderTopLeftRadius: borderRadius } );
			}
			if ( undefined === overallBorderTopRightRadius ) {
				setAttributes( { overallBorderTopRightRadius: borderRadius } );
			}
			if ( undefined === overallBorderBottomLeftRadius ) {
				setAttributes( { overallBorderBottomLeftRadius: borderRadius } );
			}
			if ( undefined === overallBorderBottomRightRadius ) {
				setAttributes( { overallBorderBottomRightRadius: borderRadius } );
			}
		}

		if ( borderColor ) {
			if ( undefined === overallBorderColor ) {
				setAttributes( { overallBorderColor: borderColor } );
			}
		}

		if ( borderHoverColor ) {
			if ( undefined === overallBorderHColor ) {
				setAttributes( { overallBorderHColor: borderHoverColor } );
			}
		}

		if ( borderStyle ) {
			if ( undefined === overallBorderStyle ) {
				setAttributes( { overallBorderStyle: borderStyle } );
			}
		}
	}, [] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	const blockStyling = useMemo( () => styling( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );

	return (
		<>
			<DynamicCSSLoader { ...{ blockStyling } } />
			<DynamicFontLoader { ...{ attributes } } />
			{ isSelected && <Settings parentProps={ props } taxonomyList={ taxonomyList } termsList={ termsList } /> }
			<Render parentProps={ props } categoriesList={ categoriesList } />
		</>
	);
};

export default compose(
	AddStaticStyles,
)( UAGBTaxonomyList );
