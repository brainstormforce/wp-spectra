/**
 * External dependencies
 */

import styling from './styling';
import React, { lazy, Suspense, useEffect } from 'react';

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
			if ( ! contentTopPadding ) {
				props.setAttributes( { contentTopPadding: contentPadding } );
			}
			if ( ! contentBottomPadding ) {
				props.setAttributes( { contentBottomPadding: contentPadding } );
			}
			if ( ! contentLeftPadding ) {
				props.setAttributes( { contentLeftPadding: contentPadding } );
			}
			if ( ! contentRightPadding ) {
				props.setAttributes( { contentRightPadding: contentPadding } );
			}
		}
		if ( contentPaddingMobile ) {
			if ( ! contentTopPaddingMobile ) {
				props.setAttributes( {
					contentTopPaddingMobile: contentPaddingMobile,
				} );
			}
			if ( ! contentBottomPaddingMobile ) {
				props.setAttributes( {
					contentBottomPaddingMobile: contentPaddingMobile,
				} );
			}
			if ( ! contentLeftPaddingMobile ) {
				props.setAttributes( {
					contentLeftPaddingMobile: contentPaddingMobile,
				} );
			}
			if ( ! contentRightPaddingMobile ) {
				props.setAttributes( {
					contentRightPaddingMobile: contentPaddingMobile,
				} );
			}
		}
		if ( contentPaddingTablet ) {
			if ( ! contentTopPaddingTablet ) {
				props.setAttributes( {
					contentTopPaddingTablet: contentPaddingTablet,
				} );
			}
			if ( ! contentBottomPaddingTablet ) {
				props.setAttributes( {
					contentBottomPaddingTablet: contentPaddingTablet,
				} );
			}
			if ( ! contentLeftPaddingTablet ) {
				props.setAttributes( {
					contentLeftPaddingTablet: contentPaddingTablet,
				} );
			}
			if ( ! contentRightPaddingTablet ) {
				props.setAttributes( {
					contentRightPaddingTablet: contentPaddingTablet,
				} );
			}
		}
	}, [] );

	useEffect( () => {
		const element = document.getElementById(
			'uagb-style-taxonomy-list-' + props.clientId.substr( 0, 8 )
		);

		if ( null != element && 'undefined' !== typeof element ) {
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
	} = props.attributes;
	const { getEntityRecords } = select( 'core' );
	const { __experimentalGetPreviewDeviceType = null } = select(
		'core/edit-post'
	);

	const deviceType = __experimentalGetPreviewDeviceType
		? __experimentalGetPreviewDeviceType()
		: null;

	const allTaxonomy = uagb_blocks_info.taxonomy_list;
	const currentTax = allTaxonomy[ postType ];

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

	return {
		latestPosts: getEntityRecords( 'postType', postType, latestPostsQuery ),
		categoriesList,
		taxonomyList:
			'undefined' !== typeof currentTax ? currentTax.taxonomy : [],
		termsList: 'undefined' !== typeof currentTax ? currentTax.terms : [],
		deviceType,
	};
} )( UAGBTaxonomyList );
