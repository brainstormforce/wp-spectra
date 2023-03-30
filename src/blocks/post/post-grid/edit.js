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
import WebfontLoader from '@Components/typography/fontloader';

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
			postPagination,
			paginationMarkup,
			UAGHideDesktop,
			UAGHideTab,
			UAGHideMob,
			postDisplaytext,
			titleLoadGoogleFonts,
			titleFontFamily,
			titleFontWeight,
			metaLoadGoogleFonts,
			metaFontFamily,
			metaFontWeight,
			excerptLoadGoogleFonts,
			excerptFontFamily,
			excerptFontWeight,
			ctaLoadGoogleFonts,
			ctaFontFamily,
			ctaFontWeight,
		},
		setAttributes,
		clientId,
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
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );

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

		setAttributes( { allTaxonomyStore: undefined } );
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-post-grid-style-' + clientId.substr( 0, 8 ), blockStyling );
	}, [ attributes, deviceType ] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	const togglePreview = () => {
		setStateValue( { isEditing: ! state.isEditing } );
	};

	let categoriesList = [];
	const { latestPosts, taxonomyList, block } = useSelect( ( select ) => {
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

		if ( true === postPagination && 'empty' === paginationMarkup ) {
			const formData = new window.FormData();

			formData.append( 'action', 'uagb_post_pagination' );
			formData.append( 'nonce', uagb_blocks_info.uagb_ajax_nonce );
			formData.append( 'attributes', JSON.stringify( props.attributes ) );

			apiFetch( {
				url: uagb_blocks_info.ajax_url,
				method: 'POST',
				body: formData,
			} ).then( ( data ) => {
				props.setAttributes( { paginationMarkup: data.data } );
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
					parentProps={ props }
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

	// Load all the Google Fonts for The Post Grid Block.
	let loadTitleGoogleFonts;
	let loadMetaGoogleFonts;
	let loadExcerptGoogleFonts;
	let loadCtaGoogleFonts;

	if ( titleLoadGoogleFonts === true ) {
		const titleconfig = {
			google: {
				families: [ titleFontFamily + ( titleFontWeight ? ':' + titleFontWeight : '' ) ],
			},
		};
		loadTitleGoogleFonts = <WebfontLoader config={ titleconfig }></WebfontLoader>;
	}

	if ( metaLoadGoogleFonts === true ) {
		const metaconfig = {
			google: {
				families: [ metaFontFamily + ( metaFontWeight ? ':' + metaFontWeight : '' ) ],
			},
		};
		loadMetaGoogleFonts = <WebfontLoader config={ metaconfig }></WebfontLoader>;
	}

	if ( excerptLoadGoogleFonts === true ) {
		const excerptconfig = {
			google: {
				families: [ excerptFontFamily + ( excerptFontWeight ? ':' + excerptFontWeight : '' ) ],
			},
		};
		loadExcerptGoogleFonts = <WebfontLoader config={ excerptconfig }></WebfontLoader>;
	}

	if ( ctaLoadGoogleFonts === true ) {
		const ctaconfig = {
			google: {
				families: [ ctaFontFamily + ( ctaFontWeight ? ':' + ctaFontWeight : '' ) ],
			},
		};
		loadCtaGoogleFonts = <WebfontLoader config={ ctaconfig }></WebfontLoader>;
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
			{ loadTitleGoogleFonts }
			{ loadMetaGoogleFonts }
			{ loadExcerptGoogleFonts }
			{ loadCtaGoogleFonts }
		</>
	);
};

export default PostGridComponent;
