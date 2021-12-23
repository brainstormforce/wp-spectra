/**
 * External dependencies
 */
import React, { useEffect, lazy, Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
const Settings = lazy( () =>
	import(
		/* webpackChunkName: "chunks/post-timeline/settings" */ './settings'
	)
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/post-timeline/render" */ './render' )
);

import { withSelect } from '@wordpress/data';

const PostTimelineComponent = ( props ) => {
	
	useEffect( () => {
		
		// Replacement for componentDidMount.
		//Store Client id.
		props.setAttributes( { block_id: props.clientId } );

		// Pushing Style tag for this block css.
		const style = document.createElement( 'style' );
		style.setAttribute( 'id', 'uagb-timeline-style-' + props.clientId );
		document.head.appendChild( style );

		const {
			verticalSpace,
			horizontalSpace,
			topMargin,
			rightMargin,
			bottomMargin,
			leftMargin,
			bgPadding,
			topPadding,
			rightPadding,
			bottomPadding,
			leftPadding,
		} = props.attributes;

		if ( bgPadding ) {
			if ( ! topPadding ) {
				props.setAttributes( { topPadding: bgPadding } );
			}
			if ( ! bottomPadding ) {
				props.setAttributes( { bottomPadding: bgPadding } );
			}
			if ( ! rightPadding ) {
				props.setAttributes( { rightPadding: bgPadding } );
			}
			if ( ! leftPadding ) {
				props.setAttributes( { leftPadding: bgPadding } );
			}
		}

		if ( verticalSpace ) {
			if ( ! topMargin ) {
				props.setAttributes( { topMargin: verticalSpace } );
			}
			if ( ! bottomMargin ) {
				props.setAttributes( { bottomMargin: verticalSpace } );
			}
		}
		if ( horizontalSpace ) {
			if ( ! rightMargin ) {
				props.setAttributes( { rightMargin: horizontalSpace } );
			}
			if ( ! leftMargin ) {
				props.setAttributes( { leftMargin: horizontalSpace } );
			}
		}
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const loadPostTimelineEditor = new CustomEvent( 'UAGTimelineEditor', { // eslint-disable-line no-undef
			detail: {},
		} );
		document.dispatchEvent( loadPostTimelineEditor );
	}, [ props ] );
	
	
	return (
		<Suspense fallback={ lazyLoader() }>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</Suspense>
	);
};

export default withSelect( ( select, props ) => {
	const {
		categories,
		postsToShow,
		order,
		orderBy,
		postType,
		taxonomyType,
		excludeCurrentPost,
	} = props.attributes;
	const { getEntityRecords } = select( 'core' );

	const { __experimentalGetPreviewDeviceType = null } = select(
		'core/edit-post'
	);
	const deviceType = __experimentalGetPreviewDeviceType
		? __experimentalGetPreviewDeviceType()
		: null;

	const allTaxonomy = uagb_blocks_info.all_taxonomy;
	const currentTax = allTaxonomy[ postType ];

	let categoriesList = [];
	let restBase = '';

	if ( 'undefined' !== typeof currentTax ) {
		if ( 'undefined' !== typeof currentTax.taxonomy[ taxonomyType ] ) {
			restBase = ( currentTax.taxonomy[taxonomyType].rest_base === false || currentTax.taxonomy[taxonomyType].rest_base === null ) ? currentTax.taxonomy[taxonomyType].name : currentTax.taxonomy[taxonomyType].rest_base
		}

		if ( '' !== taxonomyType ) {
			if (
				'undefined' !== typeof currentTax.terms &&
				'undefined' !== typeof currentTax.terms[ taxonomyType ]
			) {
				categoriesList = currentTax.terms[ taxonomyType ];
			}
		}
	}

	const latestPostsQuery = {
		order,
		orderby: orderBy,
		per_page: postsToShow,
	};

	if ( excludeCurrentPost ) {
		latestPostsQuery.exclude = select( 'core/editor' ).getCurrentPostId();
	}
	const category = [];
	const temp = parseInt( categories );
	category.push( temp );
	const catlenght = categoriesList.length;
	for ( let i = 0; i < catlenght; i++ ) {
		if ( categoriesList[ i ].id === temp ) {
			if ( categoriesList[ i ].child.length !== 0 ) {
				categoriesList[ i ].child.forEach( ( element ) => {
					category.push( element );
				} );
			}
		}
	}
	if ( undefined !== categories && '' !== categories ) {
		latestPostsQuery[ restBase ] =
			undefined === categories || '' === categories
				? categories
				: category;
	}
	return {
		deviceType,
		latestPosts: getEntityRecords( 'postType', postType, latestPostsQuery ),
		categoriesList,
		taxonomyList:
			'undefined' !== typeof currentTax ? currentTax.taxonomy : [],
	};
} )( PostTimelineComponent );
