import UAGB_Block_Icons from '@Common/block-icons';
import { __ } from '@wordpress/i18n';
import React from 'react';
import { useDispatch } from 'react-redux';
import getApiData from '@Controls/getApiData';

const ProBlockInFree = () => {

	const dispatch = useDispatch();

	// Added it here so it becomes easy to modify the blocks to skip later on
	const blockToSkipLiveDemo = ['image',];

	const ProBlocksAndExtensions = [
		{ title: __( 'Login Form', 'ultimate-addons-for-gutenberg' ), slug: 'login', link: 'https://wpspectra.com/docs/login-form-block/' },
		{ title: __( 'Registration Form', 'ultimate-addons-for-gutenberg' ), slug: 'register', link: 'https://wpspectra.com/docs/registration-form-block/' },
		{ title: __( 'Instagram Feed', 'ultimate-addons-for-gutenberg' ), slug: 'instagram-feed', link: 'https://wpspectra.com/docs/instagram-feed/' },
		{ title: __( 'Loop Builder', 'ultimate-addons-for-gutenberg' ), slug: 'loop-builder', link: 'https://wpspectra.com/docs/loop-builder/' },
		{ title: __( 'Dynamic content', 'ultimate-addons-for-gutenberg' ), slug: 'dynamic-content', link: 'https://wpspectra.com/docs/how-to-use-dynamic-content/' },
		{ title: __( 'Global Block Style', 'ultimate-addons-for-gutenberg' ), slug: 'global-block-styles', link: 'https://wpspectra.com/docs/global-block-style-extension/' },
		{ title: __( 'Popup Builder Pro', 'ultimate-addons-for-gutenberg' ), slug: 'popup-builder', link: 'https://wpspectra.com/docs/create-popups/' },
		{ title: __( 'Modal Pro', 'ultimate-addons-for-gutenberg' ), slug: 'modal', link: 'https://wpspectra.com/docs/modal-block/' },
		{ title: __( 'Advanced Animations', 'ultimate-addons-for-gutenberg' ), slug: 'animations-extension', link: 'https://wpspectra.com/docs/animations/' },
		{ title: __( 'Countdown Pro', 'ultimate-addons-for-gutenberg' ), slug: 'countdown', link: 'https://wpspectra.com/docs/countdown-pro/' },
		{ title: __( 'Slider Pro', 'ultimate-addons-for-gutenberg' ), slug: 'slider', link: 'https://wpspectra.com/docs/slider-block/' },
		{ title: __( 'Image Gallery Pro', 'ultimate-addons-for-gutenberg' ), slug: 'image-gallery', link: 'https://wpspectra.com/docs/image-gallery/' },
	];

	const onUpgradeLinkTrigger = () => {
		window.open(
			'https://wpspectra.com/pricing/?utm_source=dashboard&utm_medium=free-plugin&utm_campaign=tooltip',
			'_blank'
		);
	};

	const activatePro = ( e ) => {
		const isThisNull = uag_react.pro_plugin_status;

		if ( 'not-installed' !== isThisNull ) {
			
			// Create an object with the required data to activate the 'spectra' Pro feature
			const data = {
				security: uag_react.pro_activate_nonce,
				value: 'spectra',
			};
			e.target.innerText = uag_react.plugin_activating_text;
			// Call the getApiData function with the specified parameters
			const getApiFetchData = getApiData( {
				url: uag_react.ajax_url,
				action: 'uag_pro_activate',
				data,
			} );

			// Wait for the API call to complete, update the state to show a notification, and reload the page
			getApiFetchData.then( () => {
				dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Spectra Pro Activated!' } );
				setTimeout( () => {
					window.location.reload();
				}, 500 );
			} );
		} else {
			onUpgradeLinkTrigger();
		}
	};

	const getSpectraProTitle = () => {
		return 'not-installed' !== uag_react.pro_plugin_status ? __( 'Activate Now', 'ultimate-addons-for-gutenberg' ) : __( 'Upgrade Now', 'ultimate-addons-for-gutenberg' );
	}

	const renderProBlocksAndExtensionsCards = ProBlocksAndExtensions.map( ( block ) => {
		return (
			<div
				key={block.slug}
				className={'group border border-slate-300 border-spectra bg-white shadow hover:shadow-hover hover:z-50 box-border relative rounded-md h-20 p-4 flex items-center gap-x-4 snap-start transition spectra-icon-transition' }
			>
				<div className="flex-shrink-0">
					{UAGB_Block_Icons[block.slug]}
				</div>
				<div className="uagb-admin-block-card__title flex-1 min-w-0">
					<p className="text-base font-medium text-slate-800">
						{block.title}
					</p>
					{!blockToSkipLiveDemo.includes( block.slug ) &&
						<a className="focus-visible:text-slate-500 active:text-slate-500 hover:text-slate-500 focus:text-slate-400 text-slate-400 text-sm truncate" href={`https://wpspectra.com/blocks/${block.link}`} target="_blank" rel="noreferrer">
							{__( 'Live Demo', 'ultimate-addons-for-gutenberg' )}
						</a>
					}
				</div>
				<div className="inline-block align-text-bottom max-h-4 px-1.5 py-[3px] ml-1.5 text-[10px] leading-[10px] border border-slate-800 bg-slate-800 text-white rounded spectra-admin__block-label">
					{__( 'Pro', 'ultimate-addons-for-gutenberg' )}
				</div>
				<div className="w-max absolute -top-[1.8rem] left-[2rem] rounded-[1rem] z-10 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300 ease-in-out">
					<div
						id="pro-tooltip-top"
						role="tooltip"
						className="text-left inline-block z-10 h-fit px-2.5 py-1.5 text-[0.75rem] leading-[1rem] text-white bg-slate-800 rounded-sm shadow-sm opacity-1 tooltip"
					>
						{'not-installed' === uag_react.pro_plugin_status ? __( 'Upgrade to Spectra Pro to use this block.', 'ultimate-addons-for-gutenberg' ) : __( 'Activate the Pro plugin to enable this block.', 'ultimate-addons-for-gutenberg' ) }
						<button
							type="button"
							className={'underline text-white px-1'}
							onClick={activatePro}
							style={{ color: 'rgb(255, 254, 255)', textDecoration: 'underline' }}
							onMouseOver={() => { this.style.textDecoration = 'underline'; }}
							onFocus={() => { this.style.textDecoration = 'underline'; }}
						>
							{getSpectraProTitle()}
						</button>
					</div>
					<div
						className="ml-[20rem] mr-auto w-2 h-2 flex -mt-1 rotate-45 bg-slate-800 overflow-hidden"
					>
					</div>
				</div>
			</div>
		);
	} );

	return renderProBlocksAndExtensionsCards;
};

export default ProBlockInFree;