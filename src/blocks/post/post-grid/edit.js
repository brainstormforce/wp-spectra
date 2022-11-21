
/**
 * BLOCK: Post Grid - Edit
 */

import styling from '.././styling';
import React, { useEffect, useState,    } from 'react';

import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { getFallbackNumber } from '@Controls/getAttributeFallback';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

import Settings from './settings';
import Render from './render';

import { useSelect, useDispatch } from '@wordpress/data';
import { Placeholder, Spinner } from '@wordpress/components';

const PostGridComponent = ( props ) => {

	const deviceType = useDeviceType();

	const initialState = {
		isEditing: false,
		innerBlocks: [],
	};

	const [ state, setStateValue ] = useState( initialState );
	const [ isTaxonomyLoading, setIsTaxonomyLoading] = useState( false );


	useEffect( () => {
		// Replacement for componentDidMount.
		const { block } = props;
		setStateValue( { innerBlocks: block } );
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
		const {
			btnVPadding,
			btnHPadding,
			paddingBtnTop,
			paddingBtnBottom,
			paddingBtnRight,
			paddingBtnLeft,
			contentPadding,
			contentPaddingMobile,
			paddingTop,
			paddingBottom,
			paddingLeft,
			paddingRight,
			paddingTopMobile,
			paddingRightMobile,
			paddingBottomMobile,
			paddingLeftMobile,
		} = props.attributes;

		if ( btnVPadding ) {
			if ( undefined === paddingBtnTop ) {
				props.setAttributes( { paddingBtnTop: btnVPadding } );
			}
			if ( undefined === paddingBtnBottom ) {
				props.setAttributes( { paddingBtnBottom: btnVPadding } );
			}
		}
		if ( btnHPadding ) {
			if ( undefined === paddingBtnRight ) {
				props.setAttributes( { paddingBtnRight: btnHPadding } );
			}
			if ( undefined === paddingBtnLeft ) {
				props.setAttributes( { paddingBtnLeft: btnHPadding } );
			}
		}
		if ( contentPadding ) {
			if ( undefined === paddingTop ) {
				props.setAttributes( { paddingTop: contentPadding } );
			}
			if ( undefined === paddingBottom ) {
				props.setAttributes( { paddingBottom: contentPadding } );
			}
			if ( undefined === paddingRight ) {
				props.setAttributes( { paddingRight: contentPadding } );
			}
			if ( undefined === paddingLeft ) {
				props.setAttributes( { paddingLeft: contentPadding } );
			}
		}

		if ( contentPaddingMobile ) {
			if ( undefined === paddingTopMobile ) {
				props.setAttributes( {
					paddingTopMobile: contentPaddingMobile,
				} );
			}
			if ( undefined === paddingBottomMobile ) {
				props.setAttributes( {
					paddingBottomMobile: contentPaddingMobile,
				} );
			}
			if ( undefined === paddingRightMobile ) {
				props.setAttributes( {
					paddingRightMobile: contentPaddingMobile,
				} );
			}
			if ( undefined === paddingLeftMobile ) {
				props.setAttributes( {
					paddingLeftMobile: contentPaddingMobile,
				} );
			}
		}
		const {
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
		} = props.attributes;

		if( borderWidth ){
			if( undefined === btnBorderTopWidth ) {
				props.setAttributes( {
					btnBorderTopWidth: borderWidth,
				} );
			}
			if( undefined === btnBorderLeftWidth ) {
				props.setAttributes( { btnBorderLeftWidth : borderWidth} );
			}
			if( undefined === btnBorderRightWidth ) {
				props.setAttributes( { btnBorderRightWidth : borderWidth} );
			}
			if( undefined === btnBorderBottomWidth ) {
				props.setAttributes( { btnBorderBottomWidth : borderWidth} );
			}
		}

		if( borderRadius ){

			if( undefined === btnBorderTopLeftRadius ) {
				props.setAttributes( { btnBorderTopLeftRadius : borderRadius} );
			}
			if( undefined === btnBorderTopRightRadius ) {
				props.setAttributes( { btnBorderTopRightRadius : borderRadius} );
			}
			if( undefined === btnBorderBottomLeftRadius ) {
				props.setAttributes( { btnBorderBottomLeftRadius : borderRadius} );
			}
			if( undefined === btnBorderBottomRightRadius ) {
				props.setAttributes( { btnBorderBottomRightRadius : borderRadius} );
			}
		}

		if( borderColor ){
			if( undefined === btnBorderColor ) {
				props.setAttributes( { btnBorderColor : borderColor} );
			}
		}

		if( borderHColor ){
			if( undefined === btnBorderHColor ) {
				props.setAttributes( { btnBorderHColor : borderHColor} );
			}
		}

		if( borderStyle ){
			if( undefined === btnBorderStyle ) {
				props.setAttributes( { btnBorderStyle : borderStyle} );
			}
		}
		

		props.setAttributes( { allTaxonomyStore : undefined} );

	}, [] );

	useEffect( () => {

		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-post-grid-style-' + props.clientId.substr( 0, 8 ), blockStyling );
		
	}, [ props ] );

	const { UAGHideDesktop, UAGHideTab, UAGHideMob  } = props.attributes;
	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-post-grid-style-' + props.clientId.substr( 0, 8 ), blockStyling );

		scrollBlockToView();

	}, [ deviceType ] );

	const togglePreview = () => {
		setStateValue( { isEditing: ! state.isEditing } );
		if ( ! state.isEditing ) {
			__( 'Showing All Post Grid Layout.' );
		}
	};

	const { attributes } = props;

	let categoriesList = [];
	const { latestPosts, taxonomyList, block } = useSelect( // eslint-disable-line no-unused-vars
		( select ) => {
			const {
				blockName,
				categories,
				postsToShow,
				postsOffset,
				order,
				orderBy,
				postType,
				taxonomyType,
				excludeCurrentPost,
				allTaxonomyStore
			} = props.attributes;
			const { getEntityRecords } = select( 'core' );

			if ( ! allTaxonomyStore && ! isTaxonomyLoading ) {
				setIsTaxonomyLoading( true );
				apiFetch( {
					path: '/spectra/v1/all_taxonomy',
				} ).then( ( data ) => {
					props.setAttributes( { allTaxonomyStore: data } );
					setIsTaxonomyLoading( false );
				} );
			}
			const allTaxonomy = allTaxonomyStore;
			const currentTax = allTaxonomy ? allTaxonomy[ postType ] : undefined;

			// let categoriesList = [];
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
				latestPostsQuery.exclude = select(
					'core/editor'
				).getCurrentPostId();
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
				latestPostsQuery[ rest_base ] =
					undefined === categories || '' === categories
						? categories
						: category;
			}
			return {
				latestPosts: getEntityRecords(
					'postType',
					postType,
					latestPostsQuery
				),
				categoriesList,
				taxonomyList:
					'undefined' !== typeof currentTax ? currentTax.taxonomy : [],
				block: getBlocks( props.clientId ),
			};
		},
	);
	const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );
	const hasPosts = Array.isArray( latestPosts ) && latestPosts.length;

	// Caching all attributes.
	const { postDisplaytext } = attributes;

	if ( ! hasPosts ) {
		return (
			<>

					<Settings
						parentProps={ props }
						state={ state }
						setStateValue={ setStateValue }
						latestPosts={ latestPosts }
						taxonomyList={ taxonomyList }
						categoriesList={ categoriesList }
					/>


				<Placeholder
					icon="admin-post"
					label={ __( 'Post Grid', 'ultimate-addons-for-gutenberg' ) }
				>
					{ ! Array.isArray( latestPosts ) ? (
						<Spinner />
					) : (
						postDisplaytext
					) }
				</Placeholder>
			</>
		);
	}

	const previewImageData = `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/post-grid.svg`;
	return (
		props.attributes.isPreview ? <img width='100%' src={ previewImageData } alt=''/> : (
			<>
				<Settings
					parentProps={ props }
					state={ state }
					setStateValue={ setStateValue }
					togglePreview={ togglePreview }
					latestPosts={ latestPosts }
					taxonomyList={ taxonomyList }
					categoriesList={ categoriesList }
				/>
				<Render
					parentProps={ props }
					state={ state }
					setStateValue={ setStateValue }
					togglePreview={ togglePreview }
					latestPosts={ latestPosts }
					replaceInnerBlocks={ replaceInnerBlocks }
					block={ block }
				/>
			</>
		)
	);
};

export default PostGridComponent;

