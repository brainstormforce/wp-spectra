import { useSelect, useDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { STORE_KEY } from '../../../store';
import { classNames } from '../../../utils/helpers';

const VersionToggle = () => {
	const { filterBySpectraBlocksVersion, currentScreen } = useSelect( ( select ) => {
		return {
			filterBySpectraBlocksVersion: select( STORE_KEY ).getFilterBySpectraBlocksVersion(),
			currentScreen: select( STORE_KEY ).getCurrentScreen(),
		};
	} );

	const { setFilterBySpectraBlocksVersion, setFilterBlocksByStatus, setFilterPagesByStatus, setFilterSitesByStatus } = useDispatch( STORE_KEY );

	// Check if version toggle should be available based on Design Library rules
	const shouldShowToggle = () => {
		const {
			show_version_toggle,
		} = ast_block_template_vars;

		// Don't show if toggle is disabled (PHP already handles all other conditions)
		if ( ! show_version_toggle ) {
			return false;
		}

		// Check if we're on a relevant screen
		const isRelevantScreen =
			currentScreen === 'all-blocks-grid' ||
			currentScreen === 'all-sites-grid' ||
			currentScreen === 'all-block-pages-grid';

		return isRelevantScreen;
	};

	// Check if toggle should be disabled (on Pages tab)
	const isDisabled = currentScreen === 'all-block-pages-grid';

	const toggleShouldShow = shouldShowToggle();

	if ( ! toggleShouldShow ) {
		return null;
	}

	// Use the unified version filter for all screens
	const currentVersion = filterBySpectraBlocksVersion;

	// Use PHP-provided labels so the toggle can show "Classic / Spectra Blocks"
	// when both UAGB and spectra-blocks are active, or the default "V2 / V3".
	const toggleLabels = ast_block_template_vars?.version_toggle_labels ?? { v2: 'V2', v3: 'V3' };

	const options = [
		{ value: 'v2', label: toggleLabels.v2 },
		{ value: 'v3', label: toggleLabels.v3 },
	];

	const handleToggle = ( value ) => {
		// Don't allow toggle on Pages tab
		if ( isDisabled ) {
			return;
		}

		// Save user preference to localStorage
		try {
			localStorage.setItem( 'ast_block_templates_version_preference', value );
		} catch ( error ) {
			console.warn( '[VERSION-TOGGLE] Could not save to localStorage:', error );
		}

		// When switching to v2, reset status filter to 'all' since premium filter is not available in v2
		if ( value === 'v2' ) {
			try {
				// Reset all type-specific status preferences
				localStorage.setItem( 'ast_block_templates_status_preference_blocks', 'all' );
				localStorage.setItem( 'ast_block_templates_status_preference_sites', 'all' );
				// No need to set pages preference as it's always 'all'
			} catch ( error ) {
				console.warn( '[VERSION-TOGGLE] Could not save status preference:', error );
			}
			// Reset status filters for all types
			setFilterBlocksByStatus( 'all' );
			setFilterPagesByStatus( 'all' );
			setFilterSitesByStatus( 'all' );
		}

		// Update the unified version filter
		setFilterBySpectraBlocksVersion( value );
	};

	return (
		<div
			className={ classNames(
				'flex bg-background-secondary rounded-lg p-1 gap-1 w-max',
				isDisabled && 'opacity-0 pointer-events-none'
			) }
			aria-hidden={ isDisabled }
		>
			{ options.map( ( option ) => (
				<button
					key={ option.value }
					onClick={ () => handleToggle( option.value ) }
					disabled={ isDisabled }
					className={ classNames(
						'px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-150 border-none whitespace-nowrap',
						! isDisabled && 'cursor-pointer',
						currentVersion === option.value
							? 'bg-btn-active text-white shadow-sm'
							: 'bg-btn-inactive hover:text-nav-active hover:bg-background-tertiary text-body-text'
					) }
					title={
						option.value === 'v2'
							? __( 'Legacy v2 designs', 'ast-block-templates' )
							: __( 'Latest v3 designs with new features', 'ast-block-templates' )
					}
				>
					{ option.label }
				</button>
			) ) }
		</div>
	);
};

export default VersionToggle;
