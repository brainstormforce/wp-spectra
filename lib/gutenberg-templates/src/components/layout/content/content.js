// External.
import { useEffect, memo } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import {
	withSelect,
	withDispatch,
	useSelect,
	useDispatch,
} from '@wordpress/data';
import AllWireframesGrid from './all-wireframes-grid/index';
import AllBlocksGrid from './all-blocks-grid/all-blocks-grid';
import AllSingleSitePages from './all-single-site-pages/all-single-site-pages';
import AllSitesGrid from './all-sites-grid/all-sites-grid';
import FullWidthBlockPreview from './full-width-block-preview/full-width-block-preview';
import FullWidthBagePreview from './full-width-page-preview/full-width-page-preview';
import AllSinglePages from './all-single-pages/all-single-pages';
import AllBlockPagesPages from './all-block-pages-grid/all-block-pages-grid';
import LoginToSpecAi from '../../upgrade/login-to-spec-ai';
import GeneratePagesContent from './all-block-pages-grid/generate-pages-content';
import { STORE_KEY } from '../../../store';
import {
	clearSessionStorage,
	getFromSessionStorage,
} from '../../../utils/helpers';
import useImportBlock from '../../../hooks/use-import-block';
import './content.scss';
import EventEmitter from '../../../utils/custom-event-emitter';
import apiFetch from '@wordpress/api-fetch';

const ContentItem = ( { filterPagesBySearchTerm, currentScreen } ) => {
	const {
		showPagesOnboarding,
		stepData: { businessDetails },
		dynamicContentSyncStatus,
		disableAi,
	} = useSelect( ( select ) => {
		const {
			getShowPagesOnboarding,
			getAIStepData,
			getDynamicContentSyncStatus,
			getDisableAi,
		} = select( STORE_KEY );
		return {
			showPagesOnboarding: getShowPagesOnboarding(),
			stepData: getAIStepData(),
			dynamicContentSyncStatus: getDynamicContentSyncStatus(),
			disableAi: getDisableAi(),
		};
	}, [] );

	useEffect( () => {
		localStorage.setItem(
			'gt-current-screen-' + ast_block_template_vars.site_host,
			currentScreen
		);
	}, [ currentScreen ] );

	if ( 'all-single-pages' === currentScreen ) {
		return <AllSinglePages />;
	}

	if ( 'all-wireframe-grid' === currentScreen ) {
		return <AllWireframesGrid />;
	}

	if ( 'all-blocks-grid' === currentScreen ) {
		return <AllBlocksGrid />;
	}

	if ( 'all-block-pages-grid' === currentScreen ) {
		if (
			!! showPagesOnboarding &&
			!! businessDetails &&
			! dynamicContentSyncStatus.pages &&
			! disableAi
		) {
			return <GeneratePagesContent />;
		}
		return <AllBlockPagesPages />;
	}

	if ( ! filterPagesBySearchTerm && 'all-single-site-pages' === currentScreen ) {
		return <AllSingleSitePages />;
	}

	if ( 'all-sites-grid' === currentScreen ) {
		return <AllSitesGrid />;
	}

	if ( 'full-width-block-preview' === currentScreen ) {
		return <FullWidthBlockPreview />;
	}

	if ( 'full-width-page-preview' === currentScreen ) {
		return <FullWidthBagePreview />;
	}
};

/* const DisplayNotice = ( { currentScreen } ) => {
	if (
		'all-sites-grid' === currentScreen ||
		'all-single-site-pages' === currentScreen ||
		'full-width-page-preview' === currentScreen ||
		'all-single-pages' === currentScreen
	) {
		return <Notice />;
	}

	return null;
}; */

const Content = ( {
	sitePreview,
	currentScreen,
	togglePopup,
	setActiveBlockPaletteSlug,
	setActiveBlockPalette,
	setActivePagePaletteSlug,
	setActivePagePalette,
	connectZipAI,
	toggleOnboardingAIStep,
} ) => {
	const { token = null, loadingBlocksAndSites } = useSelect( ( select ) => {
		const { getAIStepData, getLoadingBlocksAndSites } = select( STORE_KEY );
		return {
			...getAIStepData(),
			loadingBlocksAndSites: getLoadingBlocksAndSites(),
		};
	}, [] );
	const { initializeBlocksAndSites } =
		useDispatch( STORE_KEY );

	useEffect( () => {
		if ( true === togglePopup ) {
			document.body.classList.add( 'ast-block-templates-modal-open' );
			document
				.getElementById( 'ast-block-templates-modal-wrap' )
				.classList.add( 'open' );
			setActiveBlockPaletteSlug( 'style-1' );
			setActiveBlockPalette(
				ast_block_template_vars.block_color_palette[ 'style-1' ]
			);

			setActivePagePaletteSlug( 'style-1' );
			setActivePagePalette(
				ast_block_template_vars.page_color_palette[ 'style-1' ]
			);
		}
	}, [togglePopup, currentScreen, sitePreview]); // eslint-disable-line

	const { initiateImportProcess } = useImportBlock();
	useEffect( () => {
		const blockToImportKey = 'ast-import';
		const blockToImport = getFromSessionStorage( blockToImportKey );
		if ( ! blockToImport || ! token ) {
			return clearSessionStorage( blockToImportKey );
		}
		const { blockId, blockType, blockPaletteSlug, pagePaletteSlug } =
			blockToImport;
		initiateImportProcess( {
			blockId,
			colorPalette:
				blockType === 'block' ? blockPaletteSlug : pagePaletteSlug,
			type: blockType,
		} );
		clearSessionStorage( blockToImportKey );
	}, [] );

	useEffect( () => {
		EventEmitter.on( 'open-onboarding-ai', () => {
			toggleOnboardingAIStep( true );
		} );
	}, [] );

	const fetchData = async () => {
		try {
			const response = await apiFetch( {
				path: '/gutenberg-templates/v1/blocks',
				headers: {
					'X-WP-Nonce': ast_block_template_vars.rest_api_nonce,
				},
			} );

			if ( response.success ) {
				const { allBlocks, allBlocksPages, allSites } = response;
				initializeBlocksAndSites( {
					blocks: allBlocks,
					blocks_pages: allBlocksPages,
					sites: allSites,
				} );
			}
		} catch ( error ) {
			// DO Nothing
			console.error( error );
		}
	};

	useEffect( () => {
		fetchData();
	}, [] );

	const inner_content = () => {
		if ( connectZipAI ) {
			return <LoginToSpecAi />;
		}

		return <ContentItem currentScreen={ currentScreen } />;
	};

	useEffect( () => {
		if ( togglePopup && ! loadingBlocksAndSites ) {
			initializeBlocksAndSites();
		}
	}, [ togglePopup ] );

	return (
		<div className="bg-white h-[calc(100vh_-_9.5rem)]">
			{ /* <DisplayNotice currentScreen={ currentScreen } /> */ }
			{ inner_content() }
		</div>
	);
};

export default compose(
	withSelect( ( select ) => {
		const {
			getFilterPagesBySearchTerm,
			getSitePreview,
			getCurrentScreen,
			getTogglePopup,
			getConnectZipAI,
		} = select( 'ast-block-templates' );
		return {
			filterPagesBySearchTerm: getFilterPagesBySearchTerm(),
			sitePreview: getSitePreview(),
			currentScreen: getCurrentScreen(),
			togglePopup: getTogglePopup(),
			connectZipAI: getConnectZipAI(),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const {
			setActiveBlockPaletteSlug,
			setActiveBlockPalette,
			setActivePagePaletteSlug,
			setActivePagePalette,
			toggleOnboardingAIStep,
		} = dispatch( 'ast-block-templates' );
		return {
			setActiveBlockPaletteSlug,
			setActiveBlockPalette,
			setActivePagePaletteSlug,
			setActivePagePalette,
			toggleOnboardingAIStep,
		};
	} )
)( memo( Content ) );
