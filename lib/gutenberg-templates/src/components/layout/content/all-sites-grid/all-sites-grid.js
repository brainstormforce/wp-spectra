import { memo } from '@wordpress/element';
import SingleSites from './all-sites/all-sites';
// import SinglePages from './all-pages/all-pages';
import { classNames } from '../../../../utils/helpers';
import SearchBox from '../../../reusable/search-box/search-box';
import MyFavorites from './filters/my-favorites';
import { STORE_KEY } from '../../../../store';
import { useDispatch, useSelect } from '@wordpress/data';
import Button from '../../../reusable/button/button';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

function AllSites() {
	const {myFavoritesActive} = useSelect((select) => {
		const { getFilterSitesByCategory } = select(STORE_KEY);
		return {
			myFavoritesActive: getFilterSitesByCategory() === 'favorite',
		};
	}, [] ),
		{ setFilterSitesByCategory } = useDispatch( STORE_KEY );

	const handleClickBack = () => {
		setFilterSitesByCategory( '' );
	}

	return (
		<div id="ast-template-kits-list" className="h-full overflow-y-auto px-10 pb-10 pt-6">
			<div className='flex items-center justify-between mb-6'>
			{
				myFavoritesActive ? (
					<Button
						className="inline-flex pl-1 py-1 pr-2 h-7 gap-1 border-border-primary text-body-text"
						variant="white"
						hasPrefixIcon
						isSmall
						onClick={ handleClickBack }
					>
						<ChevronLeftIcon className="w-4 h-4" />
						<span>Back</span>
					</Button>
				) : (
					<p className='m-0 text-xl font-semibold inline-block'>Template Kits</p>
				)
			}
				{/* Search and Favorites list */}
				<div className='flex items-center gap-10'>
					{/* Favorite button */}
					<MyFavorites />
					{/* Searchbox */}
					<SearchBox
						className="w-full md:w-[270px]"
						placeholder='Search..'
					/>
				</div>
			</div>
			{/* Sites list */}
			<SingleSites />
		</div>
	);
}

export default memo( AllSites )
