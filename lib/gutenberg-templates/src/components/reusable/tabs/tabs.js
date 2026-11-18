import { useSelect, withSelect, withDispatch } from '@wordpress/data';
import { memo, useState, useEffect } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import { classNames, clearSessionStorage } from '../../../utils/helpers';
import { STORE_KEY } from '../../../store/index';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
const tabs = [
	{
		name: __( 'Patterns', 'ast-block-templates' ),
		slug: 'all-blocks-grid',
	},
	{
		name: __( 'Pages', 'ast-block-templates' ),
		slug: 'all-block-pages-grid',
		childScreens: [ 'single-block-page-full-preview' ],
	},
	{
		name: __( 'Kits', 'ast-block-templates' ),
		slug: 'all-sites-grid',
		childScreens: [ 'all-single-site-pages' ],
	},
	{
		name: __( 'Favorites', 'ast-block-templates' ),
		slug: 'all-favorites',
	},
];

const Tabs = ( {
	currentScreen,
	updateCurrentScreen,
} ) => {
	const getIsActiveTab = ( slug ) => {
		return slug === currentScreen;
	};

	const {
		importInProgress,
		filterBySpectraBlocksVersion,
	} = useSelect( ( select ) => {
		const {
			getImportInProgress,
			getFilterBySpectraBlocksVersion,
		} = select( STORE_KEY );
		return {
			importInProgress: getImportInProgress(),
			filterBySpectraBlocksVersion: getFilterBySpectraBlocksVersion(),
		};
	}, [] );

	const filteredTabs =
		filterBySpectraBlocksVersion === 'v3'
			? tabs.filter( ( tab ) => tab.slug !== 'all-block-pages-grid' )
			: tabs;

	const [ startIndex, setStartIndex ] = useState( 0 );
    const [ isMobile, setIsMobile ] = useState( window.innerWidth < 830 );

    useEffect( () => {
		const handleResize = () => setIsMobile( window.innerWidth < 830 );
		window.addEventListener( 'resize', handleResize );
		return () => window.removeEventListener( 'resize', handleResize );
	}, [ window.innerWidth ] );

	const handleUpdateCurrentScreen = ( event, slug ) => {
		event.preventDefault();
		if ( slug === currentScreen ) {
			return;
		}
		if ( typeof updateCurrentScreen === 'function' ) {
			updateCurrentScreen( slug );
			clearSessionStorage( 'ast-sites-scroll-position' );
			clearSessionStorage( 'ast-pages-scroll-position' );
		}
	};
	const handleNavigation = ( direction ) => () => {
		setStartIndex( ( prev ) =>
			Math.max( 0, Math.min( prev + direction, filteredTabs.length - 2 ) )
		);
	};
	const visibleTabs = isMobile
		? filteredTabs.slice( startIndex, startIndex + 2 )
		: filteredTabs;

	return (
		<div className="h-full flex items-center justify-self-center sm:justify-start mx-2 md:ml-12">
			{ isMobile && startIndex > 0 && (
				<ChevronLeftIcon
					className="h-5 w-5 text-secondary-text cursor-pointer"
					onClick={ handleNavigation( -1 ) }
				/>
			) }
			{ visibleTabs.map( ( tab, index ) => (
				<div
					key={ index }
					className={ classNames(
						'cursor-pointer h-full flex items-center relative px-3.5 md:px-7 py-1.5 md:py-3 font-semibold text-sm md:text-base text-secondary-text md:max-lg:px-5 md:max-lg:py-2',
						( getIsActiveTab( tab.slug ) ||
							tab?.childScreens?.includes( currentScreen ) ) &&
							'text-nav-active bg-background-tertiary after:content-[""] after:absolute after:bottom-0 after:right-0 after:w-full after:h-px after:bg-accent-spectra transition duration-150 ease-in-out',
						importInProgress && 'disable-click-action'
					) }
					onClick={ ( e ) =>
						handleUpdateCurrentScreen( e, tab.slug )
					}
					role="button"
					tabIndex="0"
					onKeyDown={ ( e ) =>
						e.key === 'Enter'
							? handleUpdateCurrentScreen( e, tab.slug )
							: null
					}
				>
					<span>{ tab.name }</span>
				</div>
			) ) }
			{ isMobile && startIndex < filteredTabs.length - 2 && (
				<ChevronRightIcon
					className="h-5 w-5 text-secondary-text cursor-pointer"
					onClick={ handleNavigation( 1 ) }
				/>
			) }
		</div>
	);
};
export default compose(
	withSelect( ( select ) => {
		const { getFavorites, getSitePreview, getCurrentScreen } =
			select( 'ast-block-templates' );
		return {
			favorites: getFavorites(),
			preview: getSitePreview(),
			currentScreen: getCurrentScreen(),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const {
			setAllPages,
			setSitePreview,
			setTogglePopup,
			setCurrentScreen,
			setFilterPagesBySearchTerm,
			setFilterBlocksBySearchTerm,
			setFilterBlocksPagesBySearchTerm,
			setFilterSitesBySearchTerm,
		} = dispatch( 'ast-block-templates' );
		return {
			updateCurrentScreen( currentScreen ) {
				setAllPages( [] );
				setSitePreview( {} );
				setFilterPagesBySearchTerm( '' );
				setFilterBlocksBySearchTerm( '' );
				setFilterBlocksPagesBySearchTerm( '' );
				setFilterSitesBySearchTerm( '' );
				setCurrentScreen( currentScreen );
			},
			onSetSitePreview: setSitePreview,
			onSetTogglePopup: setTogglePopup,
		};
	} )
)( memo( Tabs ) );
