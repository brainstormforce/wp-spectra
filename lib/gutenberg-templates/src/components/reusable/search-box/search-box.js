import { useDispatch, useSelect } from '@wordpress/data';
import Input from '../input/input';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { STORE_KEY } from '../../../store';
import EventBus from '../../../utils/event-emitter';
import { classNames } from '../../../utils/helpers';

const SearchBox = ( { className } ) => {
	const { searchString } = useSelect( ( select ) => {
		const {
			getFilterBlocksBySearchTerm,
			getFilterBlocksPagesBySearchTerm,
			getCurrentScreen,
			getFilterSitesBySearchTerm,
			getFilterFavoritres,
		} = select( STORE_KEY );

		if ( 'all-sites-grid' === getCurrentScreen() ) {
			return { searchString: getFilterSitesBySearchTerm() };
		}

		if ( 'all-block-pages-grid' === getCurrentScreen() ) {
			return { searchString: getFilterBlocksPagesBySearchTerm() };
		}

		if ( 'all-favorites' === getCurrentScreen() ) {
			return { searchString: getFilterFavoritres() };
		}
		return { searchString: getFilterBlocksBySearchTerm() };
	} );
	const {
		setFullWidthBlockPreview,
		setFilterBlocksBySearchTerm,
		setFilterBlocksPagesBySearchTerm,
		setFilterSitesBySearchTerm,
		setFilterFavoritres,
	} = useDispatch( STORE_KEY );
	const currentScreen = useSelect( ( select ) => select( STORE_KEY ).getCurrentScreen() );
	const handleChange = ( event ) => {
		setFullWidthBlockPreview( {} );
		EventBus.emit( 'reset-list-count' );

		switch ( currentScreen ) {
			case 'all-sites-grid':
				setFilterSitesBySearchTerm( event.target.value );
				break;
			case 'all-block-pages-grid':
				setFilterBlocksPagesBySearchTerm( event.target.value );
				break;
			case 'all-favorites':
				setFilterFavoritres( event.target.value );
				break;
			default:
				setFilterBlocksBySearchTerm( event.target.value );
				break;
		}
	};
	const handleClearSearch = () => {
		setFilterBlocksBySearchTerm( '' );
		setFilterBlocksPagesBySearchTerm( '' );
		setFilterSitesBySearchTerm( '' );
		setFilterFavoritres( '' );
		EventBus.emit( 'reset-list-count' );
	};

	const renderCloseButton = () => {
		return (
			<button onClick={ handleClearSearch } className="flex items-center justify-center h-5 w-5 border-0 focus:outline-none bg-transparent cursor-pointer">
				<XMarkIcon className="w-5 h-5 text-icon-secondary" />
			</button>
		);
	};

	return (
		<Input
			className={ classNames( 'w-full', className ) }
			inputClassName="bg-background-secondary !border-transparent !text-base pr-9 focus:ring-accent-spectra"
			placeholder="Search..."
			suffixIcon={
				!! searchString?.trim() ? (
					renderCloseButton()
				) : (
					<MagnifyingGlassIcon className="w-5 h-5 text-icon-secondary" />
				)
			}
			suffixIconClassName={ classNames(
				! searchString?.trim() && 'pointer-events-none',
				'absolute right-4 flex items-center'
			) }
			height="[2.8rem]"
			value={ searchString }
			onChange={ handleChange }
			prefixIconClassName="absolute left-4 flex items-center"
		/>
	);
};

export default SearchBox;
