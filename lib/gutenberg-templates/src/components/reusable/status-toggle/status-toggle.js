import { useSelect, useDispatch } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import { STORE_KEY } from '../../../store';
import { classNames } from '../../../utils/helpers';

const StatusToggle = ( { type = 'blocks' } ) => {
	const { filterByStatus, currentScreen, currentVersionFilter } = useSelect( ( select ) => {
		let statusFilter;
		if ( type === 'blocks' ) {
			statusFilter = select( STORE_KEY ).getFilterBlocksByStatus();
		} else if ( type === 'pages' ) {
			statusFilter = select( STORE_KEY ).getFilterPagesByStatus();
		} else {
			statusFilter = select( STORE_KEY ).getFilterSitesByStatus();
		}

		return {
			filterByStatus: statusFilter,
			currentScreen: select( STORE_KEY ).getCurrentScreen(),
			currentVersionFilter: select( STORE_KEY ).getFilterBySpectraBlocksVersion(),
			licenseStatus: select( STORE_KEY ).getLicenseStatus(),
		};
	}, [ type ] );

	const { setFilterBlocksByStatus, setFilterPagesByStatus, setFilterSitesByStatus } = useDispatch( STORE_KEY );

	// Check if premium filter should be shown
	const shouldShowPremiumFilter = () => {
		const {
			spectra_version,
		} = ast_block_template_vars || {};

		// Only show premium filter for Spectra 3.0.0-beta.1+ users
		if ( spectra_version !== 'v3' ) {
			return false;
		}

		// Hide premium filter ONLY when version toggle is set to v2
		if ( currentVersionFilter === 'v2' ) {
			return false;
		}

		// Show premium filter regardless of license status
		// This allows users to see what's premium even without a license
		return true;
	};

	const premiumFilterShouldShow = shouldShowPremiumFilter();

	// Only show toggle on patterns and template kits pages frontend
	const shouldShowToggle = ( currentScreen === 'all-blocks-grid' || currentScreen === 'all-sites-grid' ) && premiumFilterShouldShow;

	// Reset status filter to 'all' if premium filter is hidden but 'premium' is selected
	// This handles BWC cases where user switches from v3 to v2 or navigates between screens
	useEffect( () => {
		if ( ! premiumFilterShouldShow && filterByStatus === 'premium' ) {
			// Reset to 'all' in both state and localStorage with type-specific key
			const storageKey = `ast_block_templates_status_preference_${ type }`;
			try {
				localStorage.setItem( storageKey, 'all' );
			} catch ( error ) {
				console.warn( '[STATUS-TOGGLE] Could not save to localStorage:', error );
			}

			// Reset the appropriate filter based on type
			if ( type === 'blocks' ) {
				setFilterBlocksByStatus( 'all' );
			} else if ( type === 'pages' ) {
				setFilterPagesByStatus( 'all' );
			} else {
				setFilterSitesByStatus( 'all' );
			}
		}
	}, [ premiumFilterShouldShow, filterByStatus, type, setFilterBlocksByStatus, setFilterPagesByStatus, setFilterSitesByStatus ] );

	if ( ! shouldShowToggle ) {
		return null;
	}

	let setFilter;
	if ( type === 'blocks' ) {
		setFilter = setFilterBlocksByStatus;
	} else if ( type === 'pages' ) {
		setFilter = setFilterPagesByStatus;
	} else {
		setFilter = setFilterSitesByStatus;
	}

	const options = [
		{ value: 'all', label: 'All' },
		{ value: 'premium', label: 'Premium' },
	];

	const handleToggle = ( value ) => {
		// Save user preference to localStorage with type-specific key
		// This ensures blocks and kits have independent status filters
		const storageKey = `ast_block_templates_status_preference_${ type }`;
		try {
			localStorage.setItem( storageKey, value );
		} catch ( error ) {
			console.warn( '[STATUS-TOGGLE] Could not save to localStorage:', error );
		}

		setFilter( value );
	};

	return (
		<div className="flex bg-background-secondary rounded-lg p-2 gap-2 w-full max-w-[248px]">
			{ options.map( ( option ) => (
				<button
					key={ option.value }
					onClick={ () => handleToggle( option.value ) }
					className={ classNames(
						'w-[216px] h-[40px] px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-150 border-none cursor-pointer',
						filterByStatus === option.value
							? 'bg-btn-active text-white shadow-sm'
							: 'bg-btn-inactive hover:text-nav-active hover:bg-background-tertiary'
					) }
				>
					{ option.label }
				</button>
			) ) }
		</div>
	);
};

export default StatusToggle;
