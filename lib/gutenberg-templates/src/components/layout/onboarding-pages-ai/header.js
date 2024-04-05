import { useDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { STORE_KEY } from '../../../store';
import { SpectraLogo } from '../../ui/icons';
import { XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
	const { setTogglePopup } = useDispatch( STORE_KEY );

	const handleClosePopup = () => {
		setTogglePopup();
		document
			.getElementById( 'ast-block-templates-modal-wrap' )
			.classList.remove( 'open' );
		document.body.classList.remove( 'ast-block-templates-modal-open' );
	};

	return (
		<div className="spectra-ai h-[4.5rem] w-full grid grid-cols-2 grid-rows-1 items-center bg-white border-0 border-b border-solid border-b-border-primary px-5">
			<div className="flex items-center gap-3">
				<SpectraLogo className="w-10 h-10 !shrink-0" />
				<div className="h-[1.0625rem] w-px !shrink-0 bg-border-primary" />
				<span className="text-[1.15rem] font-semibold text-heading-text leading-[1.875rem]">
					{ __( 'Build using AI', 'ast-block-templates' ) }
				</span>
			</div>

			<button className="ml-auto border-0 bg-transparent outline-none focus:outline-none active:outline-none text-nav-inactive hover:text-nav-active cursor-pointer flex items-center justify-center rounded-full p-2 hover:bg-background-tertiary active:bg-background-tertiary transition-colors ease-in-out duration-150">
				<XMarkIcon className="w-5 h-5 transition-colors duration-150 ease-in-out" onClick={ handleClosePopup } />
			</button>
		</div>
	);
};

export default Header;
