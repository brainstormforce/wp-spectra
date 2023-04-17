/**
 * External dependencies
 */

import { useEffect, useState, useMemo } from '@wordpress/element';

import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { useDeviceType } from '@Controls/getPreviewType';
import { getFallbackNumber } from '@Controls/getAttributeFallback';
import apiFetch from '@wordpress/api-fetch';
import DynamicFontLoader from './dynamicFontLoader';

// Import css for timeline.
import contentTimelineStyle from '.././inline-styles';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import DynamicCSSLoader from '@Components/dynamic-css-loader';

import { useSelect } from '@wordpress/data';

const PostTimelineComponent = ( props ) => {
	const deviceType = useDeviceType();
	const {
		isSelected,
		setAttributes,
		attributes,
		name,
		clientId,
		attributes: {
			categories,
			postsToShow,
			order,
			orderBy,
			postType,
			taxonomyType,
			excludeCurrentPost,
			allTaxonomyStore,
			timelinAlignment,
			stack,
			timelinAlignmentTablet,
			timelinAlignmentMobile,
			UAGHideDesktop,
			UAGHideTab,
			UAGHideMob,
		},
	} = props;

	const [ isTaxonomyLoading, setIsTaxonomyLoading ] = useState( false );

	useEffect( () => {
		//Store Client id.
		setAttributes( { block_id: props.clientId } );
		if ( timelinAlignment ) {
			if ( 'none' === stack ) {
				if ( undefined === timelinAlignmentTablet ) {
					setAttributes( { timelinAlignmentTablet: timelinAlignment } );
				}
				if ( undefined === timelinAlignmentMobile ) {
					setAttributes( { timelinAlignmentMobile: timelinAlignment } );
				}
			} else {
				if ( undefined === timelinAlignmentTablet && 'tablet' === stack ) {
					setAttributes( { timelinAlignmentTablet: 'left' } );
					setAttributes( { timelinAlignmentMobile: 'left' } );
				}

				if ( undefined === timelinAlignmentMobile && 'mobile' === stack ) {
					setAttributes( { timelinAlignmentMobile: 'left' } );
					setAttributes( { timelinAlignmentTablet: timelinAlignment } );
				}
			}
		}
	}, [] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		addBlockEditorDynamicStyles();
		const loadPostTimelineEditor = new CustomEvent( 'UAGTimelineEditor', {
			// eslint-disable-line no-undef
			detail: {},
		} );
		document.dispatchEvent( loadPostTimelineEditor );
	}, [ props, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	let categoriesList = [];

	// eslint-disable-next-line no-unused-vars
	const { latestPosts, taxonomyList, block } = useSelect( ( select ) => {
		const postsToShowFallback = getFallbackNumber( postsToShow, 'postsToShow', 'post-timeline' );
		const { getEntityRecords } = select( 'core' );

		if ( ! allTaxonomyStore && ! isTaxonomyLoading ) {
			setIsTaxonomyLoading( true );
			apiFetch( {
				path: '/spectra/v1/all_taxonomy',
			} ).then( ( data ) => {
				setAttributes( { allTaxonomyStore: data } );
				setIsTaxonomyLoading( false );
			} );
		}
		const allTaxonomy = allTaxonomyStore;
		const currentTax = allTaxonomy ? allTaxonomy[ postType ] : undefined;

		let restBase = '';

		if ( 'undefined' !== typeof currentTax ) {
			if ( 'undefined' !== typeof currentTax.taxonomy[ taxonomyType ] ) {
				restBase =
					currentTax.taxonomy[ taxonomyType ].rest_base === false ||
					currentTax.taxonomy[ taxonomyType ].rest_base === null
						? currentTax.taxonomy[ taxonomyType ].name
						: currentTax.taxonomy[ taxonomyType ].rest_base;
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
			per_page: postsToShowFallback,
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
			latestPostsQuery[ restBase ] = undefined === categories || '' === categories ? categories : category;
		}
		return {
			latestPosts: getEntityRecords( 'postType', postType, latestPostsQuery ),
			categoriesList,
			taxonomyList: 'undefined' !== typeof currentTax ? currentTax.taxonomy : [],
		};
	} );

	const blockStyling = useMemo( () => contentTimelineStyle( attributes, clientId, name, deviceType ), [
		attributes,
		deviceType,
	] );

	return (
		<>
			<DynamicCSSLoader { ...{ blockStyling } } />
			<DynamicFontLoader { ...{ attributes } } />
			{ isSelected && (
				<Settings parentProps={ props } taxonomyList={ taxonomyList } categoriesList={ categoriesList } />
			) }
			<Render parentProps={ props } latestPosts={ latestPosts } />
		</>
	);
};
export default PostTimelineComponent;
