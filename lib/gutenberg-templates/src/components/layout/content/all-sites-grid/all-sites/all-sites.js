import { compose } from '@wordpress/compose';
import { useDispatch, useSelect, withSelect } from '@wordpress/data';
import { memo, useCallback, useState, useEffect, useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import SingleSite from './single-site';
import { STORE_KEY } from '../../../../../store';
import EventBus from '../../../../../utils/event-emitter';
import Button from '../../../../reusable/button/button';
import { classNames, clearSessionStorage, getFromSessionStorage, setToSessionStorage } from '../../../../../utils/helpers';
import SingleBlockLoadingSkeleton from '../../../../reusable/single-block/single-block-loading-skeleton';

const AllSites = ( { allSites } ) => {
	const { searchTerm, favorites, categoryFilter, statusFilter, versionFilter, loadingBlocksAndSites } = useSelect((select) => {
		const {
			getFilterSitesBySearchTerm,
			getFavorites,
			getFilterSitesByCategory,
			getFilterSitesByStatus,
			getFilterBySpectraBlocksVersion,
			getLoadingBlocksAndSites,
		} = select(STORE_KEY);
		return {
			searchTerm: getFilterSitesBySearchTerm(),
			favorites: getFavorites()?.site ?? [],
			categoryFilter: getFilterSitesByCategory(),
			statusFilter: getFilterSitesByStatus(),
			versionFilter: getFilterBySpectraBlocksVersion(),
			loadingBlocksAndSites: getLoadingBlocksAndSites(),
		};
	}, []);
	const { setFilterSitesBySearchTerm } = useDispatch( STORE_KEY );

	const items = Object.values(allSites)
		.map((item) => {
			item.type = 'site';
			return item;
		})
		.filter((item) => {
			// Filter by category/favorites
			if (categoryFilter === 'favorite') {
				if (!favorites.map(Number).includes(+item.ID)) {
					return false;
				}
			}

			// Filter by status
			if (statusFilter === 'premium') {
				if (item['astra-sites-type'] === 'free') {
					return false;
				}
			}

			// Filter by version (v2/v3)
			// versionFilter is set by the reducer based on:
			// - Detected Spectra version when toggle is NOT shown
			// - User's selected version when toggle IS shown
			if (versionFilter && versionFilter !== 'all') {
				// Get the item's version, treating empty/missing/empty array as v2
				let itemVersion = item['spectra-ver'];

				// Handle empty arrays, empty strings, null, undefined
				if (!itemVersion || (Array.isArray(itemVersion) && itemVersion.length === 0) || itemVersion === '') {
					itemVersion = 'v2';
				}

				// Filter by version
				if (itemVersion !== versionFilter) {
					return false;
				}
			}

			// Filter by search term
			if (searchTerm) {
				const tags = Object.values(item.tag).map((tag) =>
					tag.toLowerCase()
				);
				if (
					!item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
					!tags.includes(searchTerm.toLowerCase())
				) {
					return false;
				}
			}

			return true;
		});

	const initialVisibleItems = getFromSessionStorage( 'ast-sites-visible-items' ) || 12,
		initialScrollPosition = getFromSessionStorage( 'ast-sites-scroll-position' ) || 0;
	const [numOfVisibleItems, setNumOfVisibleItems] = useState( initialVisibleItems );
	const scrollingContainer = useRef( null );

	const handleScroll = useCallback(() => {
		const { scrollTop, clientHeight, scrollHeight } = scrollingContainer.current;
		// Save scroll position to session storage.
		setToSessionStorage( 'ast-sites-scroll-position', scrollTop );

		if (allSites.length <= numOfVisibleItems) {
			return;
		}
		if ( scrollTop + clientHeight >= scrollHeight - ( clientHeight / 2 ) ) {
			setNumOfVisibleItems( ( prevValue ) => {
				setToSessionStorage( 'ast-sites-visible-items',  prevValue + 12 );
				return prevValue + 12;
			} );
		}
	}, []);

	const handleBackToTemplates = useCallback( ( event ) => {
		EventBus.emit( 'reset-list-count' );
		setFilterSitesBySearchTerm( '' );
	}, [] );

	// Add scroll event listener to the scrolling container for scroll to load more items.
	useEffect( () => {
		scrollingContainer.current = document.getElementById( 'ast-template-kits-list' );
		const container = scrollingContainer.current;
		if ( ! container ) {
			return;
		}
		container.addEventListener( 'scroll', handleScroll );

		// Scroll to the previous position.
		if ( !!initialScrollPosition ) {
			container.scrollTo( {
				top: initialScrollPosition,
			} );
		}

		return () => {
			container.removeEventListener( 'scroll', handleScroll );
		};
	}, [] );

	// Reset the number of visible items when reset-list-count event is fired.
	useEffect( () => {
		EventBus.on( 'reset-list-count', () => {
			setNumOfVisibleItems( 12 );
			clearSessionStorage( 'ast-sites-visible-items' );
			clearSessionStorage( 'ast-sites-scroll-position' );
		} )
	}, [] );

	if ( loadingBlocksAndSites ) {
		return (
			<div className='grid auto-rows-auto gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
				{ Array.from({length: 12}).map((_, indx) => (
					<SingleBlockLoadingSkeleton type={ ! ( indx % 2 ) ? 2 : 3 } key={ indx } />
				)) }
			</div>
		)
	}

	// Slice the items array to render only the number of visible items.
	const itemsToRender = items.slice( 0, numOfVisibleItems );

	return (
		<div
			className={ classNames(
				'grid auto-rows-auto gap-8',
				itemsToRender.length
					? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
					: 'grid-cols-1'
			) }
		>
			{ itemsToRender.length ? (
				itemsToRender.map( ( item ) => (
					<SingleSite key={ item.ID } item={ item } />
				) )
			) : (
				<div className="mx-auto mt-10 md:mt-16 lg:mt-24 xl:mt-32 space-y-6 text-center w-full">
					<div className="space-y-2.5">
						<p className="m-0 text-lg font-semibold text-heading-text">
							Sorry No Results Found 😕
						</p>
						<p className="m-0 text-base font-normal text-body-text">
							Don’t see a template you would like to import?
							<br />
							<a
								href="https://wpastra.com/sites-suggestions/"
								className="no-underline text-accent-spectra"
								target="_blank"
							>
								Make a template suggestion!
							</a>
						</p>
					</div>
					<Button
						onClick={ handleBackToTemplates }
						variant="white"
						className="mx-auto border-border-secondary text-border-secondary"
					>
						Back to Templates
					</Button>
				</div>
			) }
		</div>
	);
};

export default compose(
	withSelect( ( select ) => {
		const { getAllPages, getCurrentScreen, getAllSites } = select(
			'ast-block-templates'
		);
		return {
			currentScreen: getCurrentScreen(),
			allSites: getAllSites(),
			allPages: getAllPages(),
		};
	} )
)( memo( AllSites ) );
