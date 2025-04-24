/**
 * Meta Options build.
 */
import { compose } from '@wordpress/compose';
import { withSelect, withDispatch, select as selectData } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import SettingsIcons from './icons.js';
import PageCustomCSS, { applyScopedCSS } from '../custom-page-css';
import { useState, useEffect } from 'react';
import { PanelBody, Modal } from '@wordpress/components';
import { applyFilters } from '@wordpress/hooks';
import './style.scss';

const SpectraPageSettingsPopup = ( props ) => {
	const getSidebarStore =
		'site-editor' !== uagb_blocks_info.is_site_editor ? window?.wp?.editPost : window?.wp?.editSite;
	if ( ! getSidebarStore || ! getSidebarStore?.PluginSidebar || ! getSidebarStore?.PluginSidebarMoreMenuItem ) {
		return null;
	}
	const PluginSidebar = getSidebarStore.PluginSidebar;
	const PluginSidebarMoreMenuItem = getSidebarStore.PluginSidebarMoreMenuItem;
	// If the PluginSidebar or PluginSidebarMoreMenuItem is still not available, then return null for WP lower version.
	if ( 'function' !== typeof PluginSidebarMoreMenuItem || 'function' !== typeof PluginSidebar ) {
		return null;
	}
	const customCSS = selectData( 'core/editor' ).getEditedPostAttribute( 'meta' )?._uag_custom_page_level_css;
	applyScopedCSS( customCSS );

	const pluginSidebarBefore = applyFilters( `spectra.page-sidebar.before`, '', props );

	return (
		<>
			{ /* Page Settings Icon. */ }
			<PluginSidebarMoreMenuItem target="spectra-page-settings-panel" icon={ SettingsIcons.logo }>
				{ __( 'Spectra Page Settings', 'ultimate-addons-for-gutenberg' ) }
			</PluginSidebarMoreMenuItem>

			{ /* Page Settings Area. */ }
			<PluginSidebar
				isPinnable={ true }
				icon={ SettingsIcons.logo }
				name="spectra-page-settings-panel"
				title={ __( 'Spectra Block Settings', 'ultimate-addons-for-gutenberg' ) }
				className={ 'spectra-sidebar' }
			>
				{ pluginSidebarBefore }
				{ 'site-editor' !== uagb_blocks_info.is_site_editor &&
					'yes' === uagb_blocks_info.enable_on_page_css_button && (
						<>
							<PanelBody
								title={ __( 'Custom CSS', 'ultimate-addons-for-gutenberg' ) }
								initialOpen={ true }
								className={ 'spectra-custom-css-panel' }
							>
								<PageCustomCSS />
							</PanelBody>
						</>
					) }

				<SpectraSupport />
			</PluginSidebar>
		</>
	);
};

const Image = () => {
	let imgUrl = uagb_blocks_info.uagb_url;
	imgUrl += '/assets/images/upsell/supportBanner.svg';

	return (
		<img
			src={ imgUrl }
			alt="Upsell Cover"
			className="max-w-full h-auto"
		/>
	);
}

const SpectraSupport = () => {
	const supportModalData = {
		title: __( 'VIP Priority Support', 'ultimate-addons-for-gutenberg' ),
		Image,
		header: __( 'Enjoy Uninterrupted Productivity and Complete Peace of Mind', 'ultimate-addons-for-gutenberg' ),
		description: __(
			'Get the red carpet treatment! Exclusive support service designed for faster assistance and benefits.',
			'ultimate-addons-for-gutenberg'
		),
		features: [
			__( 'Unmatched Speed', 'ultimate-addons-for-gutenberg' ),
			__( 'Priority Treatment', 'ultimate-addons-for-gutenberg' ),
			__( 'Expert Support', 'ultimate-addons-for-gutenberg' ),
			__( '24/7 Peace of Mind', 'ultimate-addons-for-gutenberg' ),
		],
	};

	const [ modalOpen, setModalOpen ] = useState( false );
	const [ isMobile, setIsMobile ] = useState( window.innerWidth <= 768 );

	const openModal = () => {
		setModalOpen( true );
	};

	const closeModal = ( val ) => {
		if ( ! val ) {
			setModalOpen( false );
		}
	};

	useEffect( () => {
		if ( modalOpen ) {
			const modalContainer = document.querySelector( '.components-modal__content' );

			if ( modalContainer ) {
				const modalFrame = document.querySelector( '.components-modal__frame' );
				modalFrame.style.margin = '0 !important';

				modalContainer.style.marginTop = '0 !important';
				modalContainer.style.padding = '0 !important';
				modalContainer.innerHTML = '';
				modalContainer.classList.remove( 'components-modal__content' );
				wp.element.render(
					<ProModal setIsModalOpen={ closeModal } modalData={ supportModalData } />,
					modalContainer
				);
			}
		}
	}, [ modalOpen ] );

	useEffect( () => {
		const handleResize = () => {
			setIsMobile( window.innerWidth <= 768 );
		};

		window.addEventListener( 'resize', handleResize );
		return () => window.removeEventListener( 'resize', handleResize );
	}, [] );

	return (
		<div
			style={ {
				padding: '12px',
				backgroundColor: '#fff',
				position: 'fixed',
				zIndex: '9999999',
				bottom: isMobile ? '0' : '38px',
				width: isMobile ? '100%' : '280px',
			} }
		>
			<div
				className="spectra-support-container"
				style={ {
					padding: '8px',
					border: '0.5px solid #D6CDFF',
					borderRadius: '5px',
					backgroundColor: '#F3F0FF',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '8px',
					zIndex: '1000005',
				} }
			>
				<div className="spectra-support-icon" style={ { height: '100%' } }>
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M2.5 9.1665H5C5.44203 9.1665 5.86595 9.3421 6.17851 9.65466C6.49107 9.96722 6.66667 10.3911 6.66667 10.8332V13.3332C6.66667 13.7752 6.49107 14.1991 6.17851 14.5117C5.86595 14.8242 5.44203 14.9998 5 14.9998H4.16667C3.72464 14.9998 3.30072 14.8242 2.98816 14.5117C2.67559 14.1991 2.5 13.7752 2.5 13.3332V9.1665ZM2.5 9.1665C2.5 8.18159 2.69399 7.20632 3.0709 6.29638C3.44781 5.38644 4.00026 4.55964 4.6967 3.8632C5.39314 3.16676 6.21993 2.61432 7.12987 2.23741C8.03982 1.8605 9.01509 1.6665 10 1.6665C10.9849 1.6665 11.9602 1.8605 12.8701 2.23741C13.7801 2.61432 14.6069 3.16676 15.3033 3.8632C15.9997 4.55964 16.5522 5.38644 16.9291 6.29638C17.306 7.20632 17.5 8.18159 17.5 9.1665M17.5 9.1665V13.3332C17.5 13.7752 17.3244 14.1991 17.0118 14.5117C16.6993 14.8242 16.2754 14.9998 15.8333 14.9998H15C14.558 14.9998 14.134 14.8242 13.8215 14.5117C13.5089 14.1991 13.3333 13.7752 13.3333 13.3332V10.8332C13.3333 10.3911 13.5089 9.96722 13.8215 9.65466C14.134 9.3421 14.558 9.1665 15 9.1665H17.5Z"
							stroke="#6005FF"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M17.5 13.3335V15.0002C17.5 15.8842 17.1488 16.7321 16.5237 17.3572C15.8986 17.9823 15.0507 18.3335 14.1667 18.3335H10"
							stroke="#6005FF"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>

				<div
					className="spectra-support-text"
					style={ { fontSize: '13px', fontFamily: 'Figtree', fontWeight: 400, color: '#111827' } }
				>
					{ __( 'Experience peace of mind with premium support. ', 'ultimate-addons-for-gutenberg' ) }
					<div
						style={ {
							display: 'inline',
							color: '#0369A1',
							textDecoration: 'underline',
							cursor: 'pointer',
						} }
						onClick={ () => openModal() }
					>
						{ __( ' Learn more', 'ultimate-addons-for-gutenberg' ) }
					</div>
				</div>
			</div>

			{ modalOpen && <Modal title="This is my modal" onRequestClose={ closeModal }></Modal> }
		</div>
	);
};

const ProModal = ( { modalData, setIsModalOpen } ) => {
	const { title, header, description, features } = modalData;

	const [ isMobile, setIsMobile ] = useState( window.innerWidth <= 768 );
	const [ loading, setLoading ] = useState( true );
	const [ supportData, setSupportData ] = useState( '' );
	const [ supportKey, setSupportKey ] = useState( '' );

	useEffect( () => {
		const handleResize = () => {
			setIsMobile( window.innerWidth <= 768 );
		};

		window.addEventListener( 'resize', handleResize );
		return () => window.removeEventListener( 'resize', handleResize );
	}, [] );

	useEffect( () => {
		const fetchPricingData = async () => {
			try {
				const response = await fetch( 'https://store.brainstormforce.com/wp-json/pse/v1/pricing', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify( {} ),
				} );
				const data = await response.json();

				const filteredData = Object.entries( data.data ).reduce( ( acc, [ key, value ] ) => {
					if ( value.product.includes( 'VIP' ) ) {
						acc[ key ] = value;
					}
					return acc;
				}, {} );

				setSupportData( filteredData );

				if ( Object.keys( filteredData ).length > 0 ) {
					setSupportKey( Object.keys( filteredData )[ 0 ] );
				}
				setLoading( false );
			} catch ( error ) {
				setSupportData( '' );
			}
		};

		fetchPricingData();
	}, [] );

	const closeModal = ( e ) => {
		e.stopPropagation();
	};

	return (
		<div
			className={ `bg-white rounded-lg p-5 upsell-modal-component ${ isMobile ? '' : 'w-[500px]' }` }
			onClick={ closeModal }
			style={ { width: isMobile ? 'auto' : '500px' } }
		>
			<div className="flex w-full justify-between items-center">
				<div className="text-brand-primary-600 flex space-x-1">
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M2 7.3335H4C4.35362 7.3335 4.69276 7.47397 4.94281 7.72402C5.19286 7.97407 5.33333 8.31321 5.33333 8.66683V10.6668C5.33333 11.0205 5.19286 11.3596 4.94281 11.6096C4.69276 11.8597 4.35362 12.0002 4 12.0002H3.33333C2.97971 12.0002 2.64057 11.8597 2.39052 11.6096C2.14048 11.3596 2 11.0205 2 10.6668V7.3335ZM2 7.3335C2 6.54557 2.15519 5.76535 2.45672 5.0374C2.75825 4.30944 3.20021 3.64801 3.75736 3.09086C4.31451 2.5337 4.97595 2.09175 5.7039 1.79022C6.43185 1.48869 7.21207 1.3335 8 1.3335C8.78793 1.3335 9.56815 1.48869 10.2961 1.79022C11.0241 2.09175 11.6855 2.5337 12.2426 3.09086C12.7998 3.64801 13.2417 4.30944 13.5433 5.0374C13.8448 5.76535 14 6.54557 14 7.3335M14 7.3335V10.6668C14 11.0205 13.8595 11.3596 13.6095 11.6096C13.3594 11.8597 13.0203 12.0002 12.6667 12.0002H12C11.6464 12.0002 11.3072 11.8597 11.0572 11.6096C10.8071 11.3596 10.6667 11.0205 10.6667 10.6668V8.66683C10.6667 8.31321 10.8071 7.97407 11.0572 7.72402C11.3072 7.47397 11.6464 7.3335 12 7.3335H14Z"
							stroke="#6005FF"
							strokeWidth="1.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M14 10.6665V11.9998C14 12.7071 13.719 13.3854 13.219 13.8855C12.7189 14.3856 12.0406 14.6665 11.3333 14.6665H8"
							stroke="#6005FF"
							strokeWidth="1.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>

					<div className="font-semibold text-xs">{ title }</div>
				</div>

				<div onClick={ () => setIsModalOpen( false ) } className="p-1 cursor-pointer">
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M12 4L4 12"
							stroke="#111827"
							strokeWidth="1.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M4 4L12 12"
							stroke="#111827"
							strokeWidth="1.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
			</div>

			{ loading ? (
				<>
					<div className="w-48 h-6 rounded-md mb-6 mt-6" style={ { background: '#e5e7eb' } }></div>
					<div className="w-60 h-6 rounded-md mb-6" style={ { background: '#e5e7eb' } }></div>
					<div className="w-48 h-6 rounded-md mb-6" style={ { background: '#e5e7eb' } }></div>
				</>
			) : (
				<>
					<div className="w-full flex justify-center items-center mt-4">
						<modalData.Image />
					</div>

					<div className="mt-4">
						<h5 className="text-lg font-medium m-0">{ header }</h5>
						<p className="text-sm text-text-secondary mt-1 m-0">{ description }</p>
					</div>

					<div className="grid grid-cols-2 w-full gap-1 mt-4">
						{ features.map( ( ele, idx ) => (
							<div
								key={ idx }
								className={ `text-brand-primary-600 flex gap-1.5 items-center ${
									idx % 2 !== 0 && 'mr-3'
								}` }
							>
								<svg
									width="14"
									height="14"
									viewBox="0 0 14 14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M11.6668 3.5L5.25016 9.91667L2.3335 7"
										stroke="#6005FF"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>

								<p className="text-field-label m-0">{ ele }</p>
							</div>
						) ) }
					</div>

					<hr className="w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle mt-4" />

					<div className="flex justify-between items-center mt-4 gap-3">
						<div
							className="bg-background-secondary rounded-lg flex-1 py-[10px] flex justify-center items-center"
							style={ {
								fontSize: '14px',
								fontWeight: '600',
								padding: '10px 0',
								backgroundColor: '#F9FAFB',
								borderRadius: '8px',
								display: 'flex',
								flex: 1,
								justifyContent: 'center',
								alignItems: 'center',
							} }
						>
							${ ( supportData[ supportKey ]?.price?.US?.discounted / 12 ).toFixed( 2 ) }
							<span className="text-text-tertiary">
								{ __( '/month (billed annually)', 'ultimate-addons-for-gutenberg' ) }
							</span>
						</div>

						<div className="flex items-center justify-between">
							<a
								href={ supportData[ supportKey ].checkout_url }
								target="_blank"
								rel="noreferrer"
								className="no-underline text-text-on-color cursor-pointer"
							>
								<button
									className=""
									tag="button"
									type="button"
									style={ {
										padding: '10px 14px',
										color: 'white',
										fontSize: '14px',
										fontWeight: '600',
										backgroundColor: '#6005FF',
										borderRadius: '8px',
										outline: 'none !important',
										boxShadow: 'unset !important',
										cursor: 'pointer',
										border: 'none',
									} }
								>
									{ __( 'Buy Now', 'ultimate-addons-for-gutenberg' ) }
								</button>
							</a>
						</div>
					</div>
				</>
			) }
		</div>
	);
};

export default compose(
	withSelect( ( select ) => {
		const postMeta = select( 'core/editor' ).getEditedPostAttribute( 'meta' );
		const oldPostMeta = select( 'core/editor' ).getCurrentPostAttribute( 'meta' );
		return {
			meta: { ...oldPostMeta, ...postMeta },
			oldMeta: oldPostMeta,
		};
	} ),
	withDispatch( ( dispatch ) => ( {
		setMetaFieldValue: ( value, field ) => dispatch( 'core/editor' ).editPost( { meta: { [ field ]: value } } ),
	} ) )
)( SpectraPageSettingsPopup );
