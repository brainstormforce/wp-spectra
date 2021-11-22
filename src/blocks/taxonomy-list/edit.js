/**
 * External dependencies
 */

import styling from './styling';
import React, { lazy, Suspense, useEffect } from 'react';
import apiFetch from '@wordpress/api-fetch';
import lazyLoader from '@Controls/lazy-loader';

const Settings = lazy( () =>
	import(
		/* webpackChunkName: "chunks/taxonomy-list/settings" */ './settings'
	)
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/taxonomy-list/render" */ './render' )
);

import { withSelect } from '@wordpress/data';

const UAGBTaxonomyList = ( props ) => {
	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
		// Pushing Style tag for this block css.
		const $style = document.createElement( 'style' );
		$style.setAttribute(
			'id',
			'uagb-style-taxonomy-list-' + props.clientId.substr( 0, 8 )
		);
		document.head.appendChild( $style );

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

	}, [] );

	useEffect( () => {
		const element = document.getElementById(
			'uagb-style-taxonomy-list-' + props.clientId.substr( 0, 8 )
		);

		if ( null !== element && 'undefined' !== typeof element ) {
			element.innerHTML = styling( props );
		}
	}, [ props ] );

	return (
		<>
			<Suspense fallback={ lazyLoader() }>
				<Settings parentProps={ props } />
				<Render parentProps={ props } />
			</Suspense>
		</>
	);
};

export default withSelect( ( select, props ) => {
	
	const {
		postsToShow,
		order,
		orderBy,
		postType,
		taxonomyType,
		showEmptyTaxonomy,
		listInJson
	} = props.attributes;
	
	const { __experimentalGetPreviewDeviceType = null } = select(
		'core/edit-post'
	);
	const deviceType = __experimentalGetPreviewDeviceType
		? __experimentalGetPreviewDeviceType()
		: null;
	
		const allTaxonomy = ( null !== listInJson ) ? listInJson.data : '';
		const currentTax = ( '' !== allTaxonomy ) ? allTaxonomy[ postType ] : 'undefined';

		const listToShowTaxonomy = showEmptyTaxonomy
			? 'with_empty_taxonomy'
			: 'without_empty_taxonomy';

		let categoriesList = [];
		if ( 'undefined' !== typeof currentTax ) {
			if (
				'undefined' !== typeof currentTax[ listToShowTaxonomy ] &&
				'undefined' !==
					typeof currentTax[ listToShowTaxonomy ][ taxonomyType ]
			) {
				categoriesList = currentTax[ listToShowTaxonomy ][ taxonomyType ];
			}
		}
	
		const latestPostsQuery = {
			order,
			orderby: orderBy,
			per_page: postsToShow,
		};
		const { getEntityRecords } = select( 'core' );
		return {
			latestPosts: getEntityRecords( 'postType', postType, latestPostsQuery ),
			categoriesList,
			taxonomyList:
				'undefined' !== typeof currentTax ? currentTax.taxonomy : [],
			termsList: 'undefined' !== typeof currentTax ? currentTax.terms : [],
			deviceType,
		};
} )( UAGBTaxonomyList );
