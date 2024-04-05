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
		} = select( STORE_KEY );

		if ( 'all-sites-grid' === getCurrentScreen() ) {
			return { searchString: getFilterSitesBySearchTerm() };
		}

		if ( 'all-block-pages-grid' === getCurrentScreen() ) {
			return { searchString: getFilterBlocksPagesBySearchTerm() };
		}
		return { searchString: getFilterBlocksBySearchTerm() };
	} );
	const {
		setFullWidthBlockPreview,
		setFilterBlocksBySearchTerm,
		setFilterBlocksPagesBySearchTerm,
		setFilterSitesBySearchTerm,
	} = useDispatch( STORE_KEY );

	const handleChange = ( event ) => {
		setFullWidthBlockPreview( {} );
		setFilterBlocksBySearchTerm( event.target.value );
		setFilterBlocksPagesBySearchTerm( event.target.value );
		setFilterSitesBySearchTerm( event.target.value );
		EventBus.emit( 'reset-list-count' );
	};

	const handleClearSearch = () => {
		setFilterBlocksBySearchTerm( '' );
		setFilterBlocksPagesBySearchTerm( '' );
		setFilterSitesBySearchTerm( '' );
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
			className={ classNames( 'w-full h-10', className ) }
			inputClassName="bg-background-secondary !border-transparent pr-9"
			placeholder="Search..."
			suffixIcon={
				!! searchString?.trim() ? renderCloseButton() : ( <MagnifyingGlassIcon className="w-5 h-5 text-icon-secondary" /> )
			}
			suffixIconClassName={ classNames(
				! searchString?.trim() && 'pointer-events-none'
			) }
			height="[2.8rem]"
			value={ searchString }
			onChange={ handleChange }
		/>
	);
};

export default SearchBox;
