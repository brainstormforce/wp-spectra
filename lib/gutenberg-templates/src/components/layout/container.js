import { compose } from '@wordpress/compose';
import { withDispatch, useSelect, useDispatch } from '@wordpress/data';
import Header from './header/header';
import Content from './content/content';
import OnboardingAI from './onboarding-ai/onboarding-ai';
import { STORE_KEY } from '../../store';
import { ToastContainer, toast, cssTransition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment, useEffect, memo, useCallback } from '@wordpress/element';
import useSyncToaster from '../../hooks/use-sync-toaster';
import useSyncLib from '../../hooks/use-sync-lib';
import OnboardingPagesAi from './onboarding-pages-ai';
import EventEmitter from '../../utils/custom-event-emitter';
import { clearSessionStorage } from '../../utils/helpers';
import StarterTemplatesButton from '../reusable/starter-templates-button/starter-templates-button';

// eslint-disable-next-line import/no-extraneous-dependencies
import 'tippy.js/dist/tippy.css';
import ModalRoot from '../reusable/modal/modal-root';
import NiceModal from '@ebay/nice-modal-react';
import ModalAutoopenSetting from './footer/modal-autoopen-setting/modal-autoopen-setting';

const Container = ( { onSetTogglePopup } ) => {
	const {
		onboardingAI: { showOnboarding },
		onboardingPageAI: { showOnboarding: showOnboardingPageAI },
	} = useSelect( ( select ) => {
		const { getOnboardingAI, getOnboardingPageAI } = select( STORE_KEY );
		return {
			onboardingAI: getOnboardingAI(),
			onboardingPageAI: getOnboardingPageAI(),
		};
	}, [] );
	const fadeAnimation = cssTransition( {
		enter: 'fade-in-fwd',
		exit: 'fade-out-bck',
	} );

	const { toggleOnboardingPageAI } = useDispatch( STORE_KEY );

	// Show sync dynamic content toaster when sync is in progress.
	useSyncToaster( 'pages' );
	useSyncToaster( 'patterns' );

	// Show sync design library toaster when sync is in progress.
	useSyncLib();

	const togglePopup = ( event ) => {
		if (
			event.target ===
			document.getElementById( 'ast-block-templates-modal-wrap' )
		) {
			document.body.classList.remove( 'ast-block-templates-modal-open' );
			document
				.getElementById( 'ast-block-templates-modal-wrap' )
				.classList.remove( 'open' );
			onSetTogglePopup();
		}
	};

	useEffect( () => {
		document.addEventListener( 'click', togglePopup );
		return () => {
			document.removeEventListener( 'click', togglePopup );
		};
	} );

	useEffect( () => {
		EventEmitter.on( 'toggle-onboarding-page-ai', toggleOnboardingPageAI );

		return () => {
			EventEmitter.off(
				'toggle-onboarding-page-ai',
				toggleOnboardingPageAI
			);
		};
	}, [] );

	const renderContent = () => {
		if ( showOnboardingPageAI ) {
			return <OnboardingPagesAi />;
		}

		if ( showOnboarding ) {
			return (
				<NiceModal.Provider>
					<OnboardingAI />
				</NiceModal.Provider>
			);
		}

		return (
			<Fragment>
				<Header />
				<NiceModal.Provider>
					<Content />
				</NiceModal.Provider>
				{ /* <Footer /> */ }
				<ModalAutoopenSetting />
			</Fragment>
		);
	};

	const clearSessionStorageValues = useCallback( () => {
		clearSessionStorage( 'ast-sites-visible-items' );
		clearSessionStorage( 'ast-sites-scroll-position' );
		clearSessionStorage( 'ast-pages-scroll-position' );
		clearSessionStorage( 'ast-pages-visible-items' );
		clearSessionStorage( 'ast-free-ai-content' );
	}, [] );

	useEffect( () => {
		window.addEventListener( 'beforeunload', clearSessionStorageValues );
		return () =>
			window.removeEventListener(
				'beforeunload',
				clearSessionStorageValues
			);
	}, [] );

	return (
		<Fragment>
			<StarterTemplatesButton />

			<ToastContainer
				position={ toast.POSITION.TOP_RIGHT }
				autoClose={ false }
				closeOnClick={ false }
				closeButton={ ( { closeToast } ) => (
					<button
						className="bg-transparent border-0 m-0 p-0 focus:outline-none cursor-pointer flex items-center justify-center mt-2 self-start"
						onClick={ closeToast }
					>
						<XMarkIcon className="w-4 h-4 text-background-primary" />
					</button>
				) }
				className="[&.Toastify\_\_toast-container--top-right]:top-[8rem] [&.Toastify\_\_toast-container--top-right]:right-[4rem]"
				bodyClassName="bg-nav-active flex-row gap-4 items-start !p-2 [&_:last-child]:w-auto [&_:first-child]:!m-0 [&_:first-child]:mr-auto [&_:first-child]:w-10"
				toastClassName="bg-nav-active !p-2 !shadow-xlarge !rounded-lg"
				transition={ fadeAnimation }
				hideProgressBar
			/>

			<div className="inner">{ renderContent() }</div>

			{ /* Headless UI Modal root */ }
			<ModalRoot />
		</Fragment>
	);
};

export default compose(
	withDispatch( ( dispatch ) => {
		const { setTogglePopup } = dispatch( 'ast-block-templates' );
		return {
			onSetTogglePopup: setTogglePopup,
		};
	} )
)( memo( Container ) );
