/**
 * BLOCK: Post Grid - Edit
 */

import styling from '.././styling';
import { useEffect, useState, useMemo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { getFallbackNumber } from '@Controls/getAttributeFallback';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import Settings from './settings';
import Render from './render';
import { useSelect, useDispatch } from '@wordpress/data';
import { Placeholder, Spinner } from '@wordpress/components';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import DynamicFontLoader from '.././dynamicFontLoader';
import { compose } from '@wordpress/compose';
import AddStaticStyles from '@Controls/AddStaticStyles';
import getApiData from '@Controls/getApiData';
import addInitialAttr from '@Controls/addInitialAttr';

const PostGridComponent = ( props ) => {
	const {
		isSelected,
		attributes,
		attributes: {
			borderStyle,
			borderWidth,
			borderRadius,
			borderColor,
			borderHColor,
			btnBorderTopWidth,
			btnBorderLeftWidth,
			btnBorderRightWidth,
			btnBorderBottomWidth,
			btnBorderTopLeftRadius,
			btnBorderTopRightRadius,
			btnBorderBottomLeftRadius,
			btnBorderBottomRightRadius,
			btnBorderColor,
			btnBorderHColor,
			btnBorderStyle,
			blockName,
			categories,
			postsToShow,
			postsOffset,
			order,
			orderBy,
			postType,
			taxonomyType,
			excludeCurrentPost,
			allTaxonomyStore,
			postPagination,
			paginationMarkup,
			UAGHideDesktop,
			UAGHideTab,
			UAGHideMob,
			postDisplaytext,
		},
		setAttributes,
		clientId,
		deviceType
	} = props;

	const initialState = {
		isEditing: false,
		innerBlocks: [],
	};
	const [ state, setStateValue ] = useState( initialState );
	const [ isTaxonomyLoading, setIsTaxonomyLoading ] = useState( false );

	useEffect( () => {
		// Replacement for componentDidMount.
		const { block } = props;
		setStateValue( { innerBlocks: block } );

		if ( borderWidth ) {
			if ( undefined === btnBorderTopWidth ) {
				setAttributes( {
					btnBorderTopWidth: borderWidth,
				} );
			}
			if ( undefined === btnBorderLeftWidth ) {
				setAttributes( { btnBorderLeftWidth: borderWidth } );
			}
			if ( undefined === btnBorderRightWidth ) {
				setAttributes( { btnBorderRightWidth: borderWidth } );
			}
			if ( undefined === btnBorderBottomWidth ) {
				setAttributes( { btnBorderBottomWidth: borderWidth } );
			}
		}

		if ( borderRadius ) {
			if ( undefined === btnBorderTopLeftRadius ) {
				setAttributes( { btnBorderTopLeftRadius: borderRadius } );
			}
			if ( undefined === btnBorderTopRightRadius ) {
				setAttributes( { btnBorderTopRightRadius: borderRadius } );
			}
			if ( undefined === btnBorderBottomLeftRadius ) {
				setAttributes( { btnBorderBottomLeftRadius: borderRadius } );
			}
			if ( undefined === btnBorderBottomRightRadius ) {
				setAttributes( { btnBorderBottomRightRadius: borderRadius } );
			}
		}

		if ( borderColor ) {
			if ( undefined === btnBorderColor ) {
				setAttributes( { btnBorderColor: borderColor } );
			}
		}

		if ( borderHColor ) {
			if ( undefined === btnBorderHColor ) {
				setAttributes( { btnBorderHColor: borderHColor } );
			}
		}

		if ( borderStyle ) {
			if ( undefined === btnBorderStyle ) {
				setAttributes( { btnBorderStyle: borderStyle } );
			}
		}
	}, [] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	const blockStyling = useMemo( () => styling( attributes, clientId, deviceType ), [ attributes, deviceType ] );

	const togglePreview = () => {
		setStateValue( { isEditing: ! state.isEditing } );
	};

	let categoriesList = [];
	const { latestPosts, taxonomyList, block } = useSelect( ( select ) => {
		const { getEntityRecords } = select( 'core' );

		if ( ! allTaxonomyStore && ! isTaxonomyLoading ) {
			setIsTaxonomyLoading( true );
    		// We are not using the our wrapper getApiData function here because we need to pass any form data.
			apiFetch( {
				path: '/spectra/v1/all_taxonomy',
			} ).then( ( data ) => {
				setAttributes( { allTaxonomyStore: data } );
				setIsTaxonomyLoading( false );
			} );
		}
		const allTaxonomy = allTaxonomyStore;
		const currentTax = allTaxonomy ? allTaxonomy[ postType ] : undefined;

		if ( true === postPagination && 'empty' === paginationMarkup ) {
			const formData = {
				nonce: uagb_blocks_info.uagb_ajax_nonce,
				attributes: JSON.stringify( props.attributes ),
			};

			const getApiFetchData = getApiData( {
				url: uagb_blocks_info.ajax_url,
				action: 'uagb_post_pagination',
				data : formData,
			} );

			getApiFetchData.then( ( data ) => {
				setAttributes( { paginationMarkup: data.data } );
			} );
		}

		let rest_base = '';

		if ( 'undefined' !== typeof currentTax ) {
			if ( 'undefined' !== typeof currentTax.taxonomy[ taxonomyType ] ) {
				rest_base =
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
			per_page: getFallbackNumber( postsToShow, 'postsToShow', blockName ),
			offset: getFallbackNumber( postsOffset, 'postsOffset', blockName ),
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
		const { getBlocks } = select( 'core/block-editor' );
		if ( undefined !== categories && '' !== categories ) {
			latestPostsQuery[ rest_base ] = undefined === categories || '' === categories ? categories : category;
		}
		return {
			latestPosts: getEntityRecords( 'postType', postType, latestPostsQuery ),
			categoriesList,
			taxonomyList: 'undefined' !== typeof currentTax ? currentTax.taxonomy : [],
			block: getBlocks( clientId ),
		};
	} );
	const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );

	if ( ! ( Array.isArray( latestPosts ) && latestPosts.length ) ) {
		return (
			<>
				<Settings
					{ ...props }
					state={ state }
					setStateValue={ setStateValue }
					latestPosts={ latestPosts }
					taxonomyList={ taxonomyList }
					categoriesList={ categoriesList }
				/>

				<Placeholder icon="admin-post" label={ __( 'Post Grid', 'ultimate-addons-for-gutenberg' ) }>
					{ ! Array.isArray( latestPosts ) ? <Spinner /> : postDisplaytext }
				</Placeholder>
			</>
		);
	}

	return (
		<>
			<DynamicCSSLoader { ...{ blockStyling } } />
			<DynamicFontLoader { ...{ attributes } } />
			{ isSelected && (
				<Settings
					{ ...props }
					state={ state }
					setStateValue={ setStateValue }
					togglePreview={ togglePreview }
					latestPosts={ latestPosts }
					taxonomyList={ taxonomyList }
					categoriesList={ categoriesList }
				/>
			) }
			<Render
				{ ...props }
				state={ state }
				setStateValue={ setStateValue }
				togglePreview={ togglePreview }
				latestPosts={ latestPosts }
				categoriesList={ categoriesList }
				replaceInnerBlocks={ replaceInnerBlocks }
				block={ block }
			/>
		</>
	);
};

export default compose(
	addInitialAttr,
	AddStaticStyles,
)( PostGridComponent );
