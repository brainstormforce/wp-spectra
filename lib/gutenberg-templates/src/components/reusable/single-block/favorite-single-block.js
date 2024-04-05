import { compose } from '@wordpress/compose';
import { withDispatch, withSelect, useSelect } from '@wordpress/data';
import apiFetch from '@wordpress/api-fetch';
import { HeartIcon } from '@heroicons/react/24/outline';
import { classNames } from '../../../utils/helpers';
import { parseInt } from 'lodash';
import EventBus from '../../../utils/event-emitter';
import Tooltip from '../tooltip';
import { getTypeByScreen } from '../../../utils/functions';

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
	children,
	...props
} ) => {
	const { favorites, currentScreen } = useSelect( ( select ) => {
		const { getFavorites, getCurrentScreen } = select( 'ast-block-templates' );
		return {
			favorites: getFavorites(),
			currentScreen: getCurrentScreen(),
		};
	}, [] );

	const type = getTypeByScreen( currentScreen );
	const isFavorite = favorites[ type ]?.map( Number ).includes( +item.ID );

	const handleClick = async ( event ) => {
		event?.preventDefault();
		event?.stopPropagation();
		try {
			await apiFetch( {
				path: '/gutenberg-templates/v1/favorite',
				data: {
					type: item.type,
					block_id: item.ID,
					status: ! isFavorite,
				},
				method: 'POST',
				headers: {
					'X-WP-Nonce': ast_block_template_vars.rest_api_nonce,
				},
			} );
		} catch ( error ) {
			// Do nothing
			console.error( error );
		}

		let updatedFavorites = { ...favorites };
		if ( ! isFavorite ) {
			updatedFavorites = {
				...favorites,
				[ type ]: [ ...new Set( [ ...favorites[ type ], parseInt( item.ID ) ] ) ],
			};
		} else {
			updatedFavorites = {
				...favorites,
				[ type ]: favorites[ type ].filter( ( id ) => id !== parseInt( item.ID ) ),
			};
		}

		setFavorites( updatedFavorites );

		if ( !! updatedFavorites[ type ].length ) {
			return;
		}

		if (
			filterBlocksByCategory !== 'favorite' &&
			filterBlocksPagesByCategory !== 'favorite' &&
			filterSitesByCategory !== 'favorite'
		) {
			return;
		}

		if ( 'block' === type ) {
			setFilterBlocksByCategory( '' );
		}

		if ( 'page' === type ) {
			setFilterBlocksPagesByCategory( '' );
		}

		if ( 'site' === type ) {
			setFilterSitesByCategory( '' );
		}

		EventBus.emit( 'reset-list-count' );
	};

	if ( children ) {
		return typeof children === 'function' ? children( { isFavorite, onClickFavorite: handleClick } ) : false;
	}

	return (
		<button
			className={ classNames(
				'flex items-center justify-center rounded-full p-2 bg-white cursor-pointer border border-solid border-border-primary focus:outline-none',
				isFavorite ? '' : 'text-icon-secondary',
				className
			) }
			onClick={ handleClick }
			{ ...props }
		>
			<Tooltip
				content={ isFavorite ? 'Remove from favorites' : 'Add to favorites' }
			>
				<HeartIcon className={ classNames( 'w-5 h-5 transition-colors ease-out duration-75', isFavorite ? 'fill-favorite text-favorite' : 'hover:fill-favorite hover:text-favorite' ) } />
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
