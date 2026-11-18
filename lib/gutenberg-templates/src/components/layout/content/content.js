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
import GeneratePagesContent from './all-block-pages-grid/generate-pages-content';
import { STORE_KEY } from '../../../store';
import AllFavorites from './all-favorites/all-favorites.js';
import './content.scss';
import EventEmitter from '../../../utils/custom-event-emitter';
import ImportLoader from './ImportLoader/';
import FullBlockPagePreview from './full-block-page-preview/full-block-page-preview.js';

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

	if ( 'single-block-page-full-preview' === currentScreen ) {
		return <FullBlockPagePreview />;
	}

	if ( ! filterPagesBySearchTerm && 'all-single-site-pages' === currentScreen ) {
		return <AllSingleSitePages />;
	}

	if ( 'all-favorites' === currentScreen ) {
		return <AllFavorites />;
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
	setActivePagePaletteSlug,
	setActivePagePalette,
	toggleOnboardingAIStep,
} ) => {
	const { initializeBlocksAndSites } =
		useDispatch( STORE_KEY );

	useEffect( () => {
		if ( true === togglePopup ) {
			document.body.classList.add( 'ast-block-templates-modal-open' );
			document
				.getElementById( 'ast-block-templates-modal-wrap' )
				.classList.add( 'open' );
			setActiveBlockPaletteSlug( 'style-1' );

			setActivePagePaletteSlug( 'style-1' );
			setActivePagePalette(
				ast_block_template_vars.page_color_palette[ 'style-1' ]
			);
		}
	}, [togglePopup, currentScreen, sitePreview]); // eslint-disable-line

	useEffect( () => {
		EventEmitter.on( 'open-onboarding-ai', () => {
			toggleOnboardingAIStep( true );
		} );
	}, [] );

	const inner_content = () => {
		return <ContentItem currentScreen={ currentScreen } />;
	};

	useEffect( () => {
		initializeBlocksAndSites();
	}, [] );

	return (
		<div className="bg-white h-[calc(100vh_-_13.5rem)]">
			{ /* <DisplayNotice currentScreen={ currentScreen } /> */ }
			{ inner_content() }
			<ImportLoader />
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
		} = select( 'ast-block-templates' );
		return {
			filterPagesBySearchTerm: getFilterPagesBySearchTerm(),
			sitePreview: getSitePreview(),
			currentScreen: getCurrentScreen(),
			togglePopup: getTogglePopup(),
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
