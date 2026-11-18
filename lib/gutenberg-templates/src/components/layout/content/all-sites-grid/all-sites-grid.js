import { memo } from '@wordpress/element';
import SingleSites from './all-sites/all-sites';
// import SinglePages from './all-pages/all-pages';
import { classNames } from '../../../../utils/helpers';
import SearchBox from '../../../reusable/search-box/search-box';
// import MyFavorites from './filters/my-favorites';
import StatusToggle from '../../../reusable/status-toggle';
import { STORE_KEY } from '../../../../store';
import { useDispatch, useSelect } from '@wordpress/data';
import Button from '../../../reusable/button/button';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

function AllSites() {
	const { myFavoritesActive } = useSelect((select) => {
		const { getFilterSitesByCategory } = select(STORE_KEY);
		return {
			myFavoritesActive: getFilterSitesByCategory() === 'favorite',
		};
	}, []);

	const { setFilterSitesByCategory } = useDispatch( STORE_KEY );

	const handleClickBack = () => {
		setFilterSitesByCategory( '' );
	};

	return (
		<div
			id="ast-template-kits-list"
			className="h-full overflow-y-auto px-10 pb-10 pt-6"
		>
			{/* Top Bar: Back Button (optional) + Search & Toggle */}
			<div className="flex flex-col gap-4 mb-6">
				{ myFavoritesActive && (
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
				)}

				{/* Search and Toggle Row */}
				<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
					{ /* Favorite button */ }
					{ /* <MyFavorites /> */ }
					{ /* Searchbox */ }
					<SearchBox
						className="w-full sm:w-[270px]"
						placeholder="Search.."
					/>
					<div className="flex gap-2">
						<StatusToggle type="sites" />
					</div>
				</div>
			</div>

			{/* Sites List */}
			<SingleSites />
		</div>
	);
}

export default memo( AllSites );
