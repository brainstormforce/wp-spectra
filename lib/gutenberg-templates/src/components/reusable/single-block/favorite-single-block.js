import { compose } from '@wordpress/compose';
import { withDispatch, withSelect, useSelect } from '@wordpress/data';
import { apiFetch } from '@Helpers';
import { HeartIcon } from '@heroicons/react/24/outline';
import { classNames } from '../../../utils/helpers';
import EventBus from '../../../utils/event-emitter';
import Tooltip from '../tooltip';
import { logError } from '../error-toast/handle-error';

const FavoriteSingleBlock = ( {
	item,
	className,
	setFavorites,
	setFilterBlocksByCategory,
	filterBlocksByCategory,
	filterBlocksPagesByCategory,
	filterSitesByCategory,
	setFilterBlocksPagesByCategory,
	setFilterSitesByCategory,
	setFilterFavoritres,
	children,
	...props
} ) => {
	const { favorites, importInProgress } = useSelect( ( select ) => {
		const { getFavorites, getImportInProgress } = select(
			'ast-block-templates'
		);
		return {
			favorites: getFavorites(),
			importInProgress: getImportInProgress(),
		};
	}, [] );

	const favoriteArray = [
		...( Array.isArray( favorites?.block ) ? favorites?.block : [] ),
		...( Array.isArray( favorites?.page ) ? favorites?.page : [] ),
		...( Array.isArray( favorites?.site ) ? favorites?.site : [] ),
	];
	const isFavorite = favoriteArray?.map( Number ).includes( +item.ID );
	const handleClick = async ( event ) => {
		event?.preventDefault();
		event?.stopPropagation();

		const itemType = item?.type ?? 'site';
		try {
			const response = await apiFetch( {
				path: `gutenberg-templates/v1/favorite`,
				data: {
					type: itemType,
					block_id: item.ID,
					status: ! isFavorite,
				},
				method: 'POST',
				headers: {
					'X-WP-Nonce': ast_block_template_vars.rest_api_nonce,
				},
			} );
			if ( ! response.success ) {
				setFavorites( response?.data );
				throw new Error( response?.message );
			}
			setFavorites( response?.data );
		} catch ( error ) {
			logError( error );
		}

		if (
			filterBlocksByCategory !== 'favorite' &&
			filterBlocksPagesByCategory !== 'favorite' &&
			filterSitesByCategory !== 'favorite'
		) {
			return;
		}

		if ( 'block' === itemType ) {
			setFilterBlocksByCategory( '' );
		}

		if ( 'page' === itemType ) {
			setFilterBlocksPagesByCategory( '' );
		}

		if ( 'site' === itemType ) {
			setFilterSitesByCategory( '' );
		}

		EventBus.emit( 'reset-list-count' );
	};

	if ( children ) {
		return typeof children === 'function'
			? children( { isFavorite, onClickFavorite: handleClick } )
			: false;
	}

	return (
		<button
			className={ classNames(
				'flex items-center justify-center rounded-full p-2 bg-white cursor-pointer border border-solid border-border-primary focus:outline-none',
				isFavorite ? '' : 'text-icon-secondary',
				importInProgress && 'disable-click-action',
				className
			) }
			onClick={ handleClick }
			{ ...props }
		>
			<Tooltip
				content={
					isFavorite ? 'Remove from favorites' : 'Add to favorites'
				}
			>
				<HeartIcon
					className={ classNames(
						'w-5 h-5 transition-colors ease-out duration-75',
						isFavorite
							? 'fill-favorite text-favorite'
							: 'hover:fill-favorite hover:text-favorite'
					) }
				/>
			</Tooltip>
		</button>
	);
};

export default compose(
	withSelect( ( select ) => {
		const {
			getFilterBlocksByCategory,
			getFilterBlocksPagesByCategory,
			getFilterSitesByCategory,
		} = select( 'ast-block-templates' );
		return {
			filterBlocksByCategory: getFilterBlocksByCategory(),
			filterBlocksPagesByCategory: getFilterBlocksPagesByCategory(),
			filterSitesByCategory: getFilterSitesByCategory(),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const {
			setFavorites,
			setFilterBlocksByCategory,
			setFilterBlocksPagesByCategory,
			setFilterSitesByCategory,
		} = dispatch( 'ast-block-templates' );

		return {
			setFavorites,
			setFilterBlocksByCategory,
			setFilterBlocksPagesByCategory,
			setFilterSitesByCategory,
		};
	} )
)( FavoriteSingleBlock );
