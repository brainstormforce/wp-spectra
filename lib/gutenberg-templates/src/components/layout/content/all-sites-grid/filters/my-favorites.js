import { useDispatch, useSelect } from "@wordpress/data";
import { STORE_KEY } from "../../../../../store";
import { HeartIcon } from "@heroicons/react/24/outline";
import { classNames } from "../../../../../utils/helpers";
import EventBus from "../../../../../utils/event-emitter";


const MyFavorites = () => {
    const { searchTerm, categoryFilter, favorites } = useSelect((select) => {
		const { getFilterSitesBySearchTerm, getFilterSitesByCategory, getFavorites } =
			select(STORE_KEY);
		return {
			searchTerm: getFilterSitesBySearchTerm(),
			categoryFilter: getFilterSitesByCategory(),
      favorites: getFavorites()?.site ?? [],
		};
	}, []);
    const {setFilterSitesByCategory} = useDispatch(STORE_KEY);
    const isActive = categoryFilter === 'favorite',
        disabled = !favorites?.length;

    const handleClickShowFavorites = () => {
        if ( disabled ) return;
        setFilterSitesByCategory(isActive ? '' : 'favorite');
        EventBus.emit( 'reset-list-count' );
    }

  return ! searchTerm && (
    <button 
        className={classNames(
          'min-w-fit inline-flex items-center justify-start gap-2 border-0 focus:outline-none bg-transparent cursor-pointer text-nav-active',
          disabled && 'cursor-not-allowed'
        )}
        onClick={ handleClickShowFavorites }
    >
        <HeartIcon className={ classNames( 'w-4 h-4 transition-colors ease-out duration-150 text-icon-secondary', isActive && 'fill-favorite text-favorite' ) } />
        <span className='text-sm font-medium'>My Favorites {!!favorites?.length && `(${favorites.length})`}</span>
    </button>
  )
}

export default MyFavorites