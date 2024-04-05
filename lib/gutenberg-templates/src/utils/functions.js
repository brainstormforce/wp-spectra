import { unescape } from 'lodash';
import { __, sprintf } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';

export const _unescape = ( title = '' ) => {
	// WordPress encoded chars.
	title = title.replace( '&#038;', '&' );
	title = title.replace( '&amp;', '&' );

	// Unescape all charactors.
	title = unescape( title );

	return title.__wrapped__;
};

export const getBlocks = () => {
	const result = {
		patterns: [],
		wireframes: [],
	};

	const { allBlocks } = ast_block_template_vars;

	for ( const blockId in allBlocks ) {
		const wireframe = allBlocks[ blockId ].wireframe || {};

		if ( Object.keys( wireframe ).length ) {
			result.wireframes.push( allBlocks[ blockId ] );
		} else {
			result.patterns.push( allBlocks[ blockId ] );
		}
	}

	return result;
};

export const getBlocksPages = () => {
	const result = [];

	const { allBlocksPages } = ast_block_template_vars;

	for ( const blockId in allBlocksPages ) {
		result.push( allBlocksPages[ blockId ] );
	}

	return result;
};

export const getPatterns = () => {
	const items = getBlocks();
	return items.patterns;
};

export const getWireframes = () => {
	const items = getBlocks();
	return items.wireframes;
};

export const savePostIfSpectraInactive = async () => {
	const currentPostId = wp.data.select( 'core/editor' )?.getCurrentPostId();
	if ( currentPostId ) {
		let message;
		try {
			message = __(
				'Installed the required plugin. The page will be saved and refreshed.',
				'ast-block-templates'
			);
			displayNotice( 'success', message );
			await wp.data.dispatch( 'core/editor' ).savePost( currentPostId );
			window.location.reload();
		} catch ( error ) {
			message = sprintf(
				/* translators: %s: error message */
				__( `Error saving the page: %s`, 'ast-block-templates' ),
				error
			);
			displayNotice( 'error', message );
		}
	}
};

const displayNotice = ( status, message ) => {
	( function ( wp ) {
		wp.data.dispatch( 'core/notices' ).createNotice(
			status, // Can be one of: success, info, warning, error.
			message, // Text string to display.
			{
				isDismissible: true, // Whether the user can dismiss the notice.
			}
		);
	}( window.wp ) );
};

export const getDefaultBlockPalette = () => {
	return ast_block_template_vars.block_color_palette[ 'style-1' ];
};

export const getDefaultPagePalette = () => {
	return ast_block_template_vars.page_color_palette[ 'style-1' ];
};

export const getActiveBlockPaletteSlug = () => {
	return 'style-1';
};

export const generateContentForAllCategories = async (
	allPatternsCategories,
	setDynamicContent,
	dynamicContentFlagSet,
	setCurrentCategory,
	setCreditsDetails,
	type
) => {
	const succeeded = [];
	let isLastCat = false;
	for ( const [ index, item ] of allPatternsCategories.entries() ) {
		if ( ! item?.id ) {
			continue;
		}
		setCurrentCategory( item );
		try {
			if ( index === allPatternsCategories.length - 1 ) {
				isLastCat = true;
			}

			const catFormData = new window.FormData();
			catFormData.append( 'action', 'ast-block-templates-regenerate' );
			catFormData.append(
				'security',
				ast_block_template_vars.ai_content_ajax_nonce
			);
			catFormData.append( 'category', item.id );
			catFormData.append( 'regenerate', false );
			catFormData.append( 'block_type', type );
			catFormData.append( 'is_last_category', isLastCat );
			const response = await apiFetch( {
				url: ast_block_template_vars.ajax_url,
				method: 'POST',
				body: catFormData,
			} );
			if ( response.success ) {
				setDynamicContent( response.data.data );
				dynamicContentFlagSet( item.id, true );
				setCreditsDetails( response.data.spec_credit_details );
				succeeded.push( true );
			} else if ( response.data.code === 'api_throttle_error' ) {
				throw response;
			}
		} catch ( error ) {
			if ( error.data.code === 'api_throttle_error' ) {
				throw error;
			}
			succeeded.push( false );
		}
	}

	return succeeded.some( ( item ) => !! item );
};

export const getTypeByScreen = ( screen ) => {
	switch ( screen ) {
		case 'all-blocks-grid':
			return 'block';
		case 'all-sites-grid':
			return 'site';
		case 'all-single-site-pages':
			return 'site';
		case 'all-block-pages-grid':
			return 'page';
		default:
			return '';
	}
};

export const updateHideNoticeFlag = async ( noticeType ) => {
	const mapType = {
		personalizeAi: 'personalize-ai',
		creditWarning: 'credit-warning',
		creditDanger: 'credit-danger',
		buildPageAi: 'build-page-ai',
	};

	if ( ! mapType[ noticeType ] ) {
		return;
	}

	try {
		const formData = new FormData();
		formData.append( 'action', 'ast_block_templates_hide_notices' );
		formData.append( 'notice_type', mapType[ noticeType ] );
		formData.append( '_ajax_nonce', ast_block_template_vars._ajax_nonce );

		const response = await apiFetch( {
			url: ast_block_template_vars.ajax_url,
			method: 'POST',
			body: formData,
		} );

		if ( response.success ) {
			// Do nothing.
		}
	} catch ( error ) {
		// Do nothing.
	}
};
