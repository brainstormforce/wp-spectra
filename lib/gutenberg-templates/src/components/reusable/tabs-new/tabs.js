import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';
import { memo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { classNames } from '../../../utils/helpers';

const tabs = [
	{
		name: __( 'Patterns', 'ast-block-templates' ),
		slug: 'all-blocks-grid',
	},
	{
		name: __( 'Pages', 'ast-block-templates' ),
		slug: 'all-block-pages-grid',
	},
	{
		name: __( 'Template Kits', 'ast-block-templates' ),
		slug: 'all-sites-grid',
	},
];

const Tabs = ( { currentScreen, updateCurrentScreen } ) => {
	const getIsActiveTab = ( slug ) => {
		return slug === currentScreen;
	};

	const handleUpdateCurrentScreen = ( slug ) => ( event ) => {
		event.preventDefault();
		if ( slug === currentScreen ) {
			return;
		}
		if ( typeof updateCurrentScreen === 'function' ) {
			updateCurrentScreen( slug );
		}
	};

	return (
		<div className="h-full flex items-center justify-self-center">
			{
				tabs.map( ( tab, index ) => {
					return (
						<div
							key={ index }
							className={ classNames( 'cursor-pointer h-full flex items-center relative px-7 py-3 font-semibold text-base text-secondary-text', getIsActiveTab( tab.slug ) && 'text-nav-active bg-background-tertiary after:content-[""] after:absolute after:bottom-0 after:right-0 after:w-full after:h-px after:bg-accent-spectra transition duration-150 ease-in-out' ) }
							onClick={ handleUpdateCurrentScreen( tab.slug ) }
							aria-hidden="true"
						>
							<span>{ tab.name }</span>
						</div>
					);
				} )
			}
		</div>
	);
};

export default compose(
	withSelect( ( select ) => {
		const { getSitePreview, getCurrentScreen } = select(
			'ast-block-templates'
		);
		return {
			preview: getSitePreview(),
			currentScreen: getCurrentScreen(),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const {
			setAllPages,
			setSitePreview,
			setTogglePopup,
			setCurrentScreen,
			setFilterPagesBySearchTerm,
			setFilterBlocksBySearchTerm,
			setFilterBlocksPagesBySearchTerm,
		} = dispatch( 'ast-block-templates' );
		return {
			updateCurrentScreen( currentScreen ) {
				setAllPages( [] );
				setSitePreview( {} );
				setFilterPagesBySearchTerm( '' );
				setFilterBlocksBySearchTerm( '' );
				setFilterBlocksPagesBySearchTerm( '' );
				setCurrentScreen( currentScreen );
			},
			onSetSitePreview: setSitePreview,
			onSetTogglePopup: setTogglePopup,
		};
	} )
)( memo( Tabs ) );
