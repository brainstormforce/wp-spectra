
/**
 * BLOCK: Post Grid - Edit
 */

import styling from '.././styling';
import { useEffect, useState } from '@wordpress/element';
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
			UAGHideDesktop,
			UAGHideTab,
			UAGHideMob,
			postDisplaytext
		},
		setAttributes,
	} = props;

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
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		if( borderWidth ){
			if( undefined === btnBorderTopWidth ) {
				setAttributes( {
					btnBorderTopWidth: borderWidth,
				} );
			}
			if( undefined === btnBorderLeftWidth ) {
				setAttributes( { btnBorderLeftWidth : borderWidth} );
			}
			if( undefined === btnBorderRightWidth ) {
				setAttributes( { btnBorderRightWidth : borderWidth} );
			}
			if( undefined === btnBorderBottomWidth ) {
				setAttributes( { btnBorderBottomWidth : borderWidth} );
			}
		}

		if( borderRadius ){

			if( undefined === btnBorderTopLeftRadius ) {
				setAttributes( { btnBorderTopLeftRadius : borderRadius} );
			}
			if( undefined === btnBorderTopRightRadius ) {
				setAttributes( { btnBorderTopRightRadius : borderRadius} );
			}
			if( undefined === btnBorderBottomLeftRadius ) {
				setAttributes( { btnBorderBottomLeftRadius : borderRadius} );
			}
			if( undefined === btnBorderBottomRightRadius ) {
				setAttributes( { btnBorderBottomRightRadius : borderRadius} );
			}
		}

		if( borderColor ){
			if( undefined === btnBorderColor ) {
				setAttributes( { btnBorderColor : borderColor} );
			}
		}

		if( borderHColor ){
			if( undefined === btnBorderHColor ) {
				setAttributes( { btnBorderHColor : borderHColor} );
			}
		}

		if( borderStyle ){
			if( undefined === btnBorderStyle ) {
				setAttributes( { btnBorderStyle : borderStyle} );
			}
		}


		setAttributes( { allTaxonomyStore : undefined} );

	}, [] );

	useEffect( () => {

		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-post-grid-style-' + props.clientId.substr( 0, 8 ), blockStyling );

	}, [ attributes, deviceType ] );

	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	const togglePreview = () => {
		setStateValue( { isEditing: ! state.isEditing } );
		if ( ! state.isEditing ) {
			__( 'Showing All Post Grid Layout.' );
		}
	};

	let categoriesList = [];
	const { latestPosts, taxonomyList, block } = useSelect( // eslint-disable-line no-unused-vars
		( select ) => {
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

	return (
		<>
			{ isSelected && (
				<Settings
					parentProps={ props }
					state={ state }
					setStateValue={ setStateValue }
					togglePreview={ togglePreview }
					latestPosts={ latestPosts }
					taxonomyList={ taxonomyList }
					categoriesList={ categoriesList }
				/>
			) }
			<Render
				parentProps={ props }
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

export default PostGridComponent;

