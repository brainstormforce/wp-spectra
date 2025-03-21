import React from 'react';
import { __ } from '@wordpress/i18n';
import { useEffect, useState, useRef } from '@wordpress/element';
import Images from './Images';
import { Zap, X, Check } from 'lucide-react';
import { Modal } from '@wordpress/components';
import './style.scss';
import '@Common/all-config.scss';

const ButtonGhost = ( { modalBtn, children, ...props } ) => (
	<button
		{ ...props }
		className={ `${
			! modalBtn
				? 'outline outline-1 border-none cursor-pointer transition-colors duration-300 ease-in-out text-xs font-semibold disabled:text-text-disabled p-2 rounded [&>svg]:size-4 gap-0.5 text-text-primary bg-transparent outline-transparent hover:bg-button-tertiary-hover'
				: 'outline outline-1 border-none cursor-pointer transition-colors duration-300 ease-in-out font-semibold focus:ring-2 focus:ring-toggle-on focus:ring-offset-2 disabled:text-text-disabled p-2.5 rounded-md text-sm [&>svg]:size-5 gap-1 text-text-primary bg-transparent outline-transparent hover:bg-button-tertiary-hover'
		}` }
	>
		<span className="px-1">{ children }</span>
	</button>
);

const ButtonPrimary = ( { children, ...props } ) => (
	<button
		{ ...props }
		className="outline outline-1 border-none cursor-pointer transition-colors duration-300 ease-in-out text-xs font-semibold disabled:text-text-disabled p-2 rounded [&>svg]:size-4 gap-0.5 text-text-on-color bg-button-primary hover:bg-button-primary-hover outline-button-primary hover:outline-button-primary-hover disabled:bg-button-disabled disabled:outline-button-disabled"
	>
		<span className="px-1">{ children }</span>
	</button>
);

const CustomSkeleton = ( { width, height, addMarginTop = false } ) => (
	<div
		className={ `rounded-md bg-gray-200 animate-pulse w-${ width } h-${ height } mb-6 ${
			addMarginTop ? 'mt-6' : ''
		}` }
	></div>
);

const SpectraProUpsell = () => {
	const accountModalData = {
		title: __( 'Unlock Pro Features', 'ultimate-addons-for-gutenberg' ),
		Image: <Images image="globalBanner.svg" />,
		header: __( 'Limitless Design with Spectra Pro!', 'ultimate-addons-for-gutenberg' ),
		description: __(
			'Experience design freedom with Spectra Pro. Utilize advanced blocks, extensions, and premium features to create a websites that stands out!',
			'ultimate-addons-for-gutenberg'
		),
		features: [
			__( 'Instagram Feed Block', 'ultimate-addons-for-gutenberg' ),
			__( 'Advanced Animations', 'ultimate-addons-for-gutenberg' ),
			__( 'Dynamic Content', 'ultimate-addons-for-gutenberg' ),
			__( 'Loop Builder', 'ultimate-addons-for-gutenberg' ),
			__( 'Popup Builder', 'ultimate-addons-for-gutenberg' ),
			__( 'And more…', 'ultimate-addons-for-gutenberg' ),
		],
	};

	const allPlansData = {
		'Spectra Pro': accountModalData,
		'Essential Toolkit': {
			...accountModalData,
			features: [
				__( 'Spectra Pro', 'ultimate-addons-for-gutenberg' ),
				__( 'Astra Pro', 'ultimate-addons-for-gutenberg' ),
				__( 'Premium Starter Templates', 'ultimate-addons-for-gutenberg' ),
				__( 'Ultimate Addons for Elementor', 'ultimate-addons-for-gutenberg' ),
				__( 'Elementor Premium Templates', 'ultimate-addons-for-gutenberg' ),
				__( 'Seamless Page Building', 'ultimate-addons-for-gutenberg' ),
			],
		},
		'Business Toolkit': {
			...accountModalData,
			features: [
				__( 'Essential Toolkit', 'ultimate-addons-for-gutenberg' ),
				__( 'SureFeedback', 'ultimate-addons-for-gutenberg' ),
				__( 'SureWriter Pro', 'ultimate-addons-for-gutenberg' ),
				__( 'SureTriggers Pro', 'ultimate-addons-for-gutenberg' ),
				__( 'CartFlows Starter', 'ultimate-addons-for-gutenberg' ),
				__( 'ZipWP Pro', 'ultimate-addons-for-gutenberg' ),
			],
		},
	};

	const [ modalOpen, setModalOpen ] = useState( false );

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
					<ProModal setIsModalOpen={ closeModal } modalData={ allPlansData } />,
					modalContainer
				);
			}
		}
	}, [ modalOpen ] );

	return (
		<div
			className="spectra-pro-banner flex items-center justify-between bg-[#f7f3ff] font-[Figtree] px-4 z-[99999]"
			style={ { border: '1px solid #ddd' } }
		>
			<div className="banner-before"></div>

			<div className="banner-content">
				<div className="banner-icon">
					<Images image="bannerLogo.svg" />
				</div>
				<div className="banner-text">
					<h3 className="banner-heading">
						{ __(
							'Ready to take your website to the next level with Spectra Pro?',
							'ultimate-addons-for-gutenberg'
						) }
					</h3>
					<p className="banner-description">
						{ __(
							'Get access to advanced blocks, powerful features, unique designs, and fantastic support.',
							'ultimate-addons-for-gutenberg'
						) }
					</p>
				</div>
				<div className="banner-actions">
					<a href="https://wpspectra.com/pricing/" target="_blank" rel="noopener noreferrer">
						<ButtonGhost
							modalBtn={ false }
							style={ {
								outline: 'none !important',
								boxShadow: 'unset !important',
								textDecoration: 'underline',
							} }
						>
							{ __( 'Learn More', 'ultimate-addons-for-gutenberg' ) }
						</ButtonGhost>
					</a>
					<ButtonPrimary
						onClick={ () => openModal() }
						style={ {
							outline: 'none !important',
							boxShadow: 'unset !important',
						} }
					>
						{ __( 'Upgrade Now', 'ultimate-addons-for-gutenberg' ) }
					</ButtonPrimary>
				</div>

				<div
					className="flex items-center justify-center ml-4 cursor-pointer md:relative absolute top-1 right-1 md:top-0 md:right-0"
					onClick={ () => {
						const dismissCount = parseInt(
							localStorage.getItem( 'spectra-banner-dismiss-count' ) || '0',
							10
						);

						localStorage.setItem( 'spectra-banner-dismiss-count', dismissCount + 1 );
						localStorage.setItem( 'spectra-banner-dismissed-time', Date.now() );

						document.querySelector( '.spectra-pro-banner' )?.remove();
					} }
				>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M18 6L6 18"
							stroke="#6B7280"
							strokeWidth="1.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M6 6L18 18"
							stroke="#6B7280"
							strokeWidth="1.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
			</div>

			{ modalOpen && <Modal title="This is my modal" onRequestClose={ closeModal }></Modal> }
		</div>
	);
};

const ProModal = ( { modalData, setIsModalOpen } ) => {
	const [ isMobile, setIsMobile ] = useState( window.innerWidth <= 768 );
	const [ pricingData, setPricingData ] = useState( '' );
	const [ selectedProduct, setSelectedProduct ] = useState( '' );
	const [ loading, setLoading ] = useState( true );
	const [ selectedTitle, setSelectedTitle ] = useState( 'Spectra Pro' );

	const { title, Image, header, description, features } = modalData[ selectedTitle ];

	useEffect( () => {
		const handleResize = () => {
			setIsMobile( window.innerWidth <= 768 );
		};

		window.addEventListener( 'resize', handleResize );
		return () => window.removeEventListener( 'resize', handleResize );
	}, [] );

	useEffect( () => {
		// Fetch pricing data from the API
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

				// Filter products based on required names
				const filteredData = Object.entries( data.data ).reduce( ( acc, [ key, value ] ) => {
					if (
						( value.product.includes( 'Spectra Pro - Annual Subscription' ) &&
							value.variant.includes( '1 Site' ) ) ||
						( value.product.includes( 'Essential Toolkit for Spectra - Annual Subscription' ) &&
							value.variant.includes( '1 Site' ) ) ||
						( value.product.includes( 'Business Toolkit - Annual Subscription' ) &&
							value.variant.includes( '1 Site' ) )
					) {
						acc[ key ] = value;
					}
					return acc;
				}, {} );

				// Set filtered pricing data
				setPricingData( filteredData );

				// Set the first product as default
				if ( Object.keys( filteredData ).length > 0 ) {
					setSelectedProduct( Object.keys( filteredData )[ 0 ] );
				}
				setLoading( false );
			} catch ( error ) {
				setSelectedProduct( '' );
			}
		};

		fetchPricingData();
	}, [] );

	useEffect( () => {
		const productName = pricingData[ selectedProduct ]?.product || '';
		const titleMapping = {
			'Spectra Pro': 'Spectra Pro',
			'Essential Toolkit': 'Essential Toolkit',
		};

		const newTitle =
			Object.keys( titleMapping ).find( ( key ) => productName.includes( key ) ) || 'Business Toolkit';
		setSelectedTitle( newTitle );
	}, [ selectedProduct ] );

	const handleProductSelect = ( option ) => {
		if ( pricingData && Object.keys( pricingData ).length > 0 ) {
			for ( const key in pricingData ) {
				if ( pricingData[ key ].product.split( ' - ' )[ 0 ]?.replace( ' for Spectra', '' ) === option ) {
					setSelectedProduct( key );
					break;
				}
			}
		}
	};

	const closeModal = ( e ) => {
		e.stopPropagation();
	};

	return (
		<div
			className="bg-white rounded-lg p-5 w-[500px] upsell-modal-component"
			onClick={ closeModal }
			style={ { width: isMobile ? 'auto' : '500px' } }
		>
			<div className="flex w-full justify-between items-center">
				<div className="text-brand-primary-600 flex space-x-1">
					<Zap size={ 14 } className="flex items-center justify-center" />
					<div className="font-semibold text-xs">{ title }</div>
				</div>
				<div onClick={ () => setIsModalOpen( false ) } className="p-1 cursor-pointer">
					<X size={ 14 } />
				</div>
			</div>

			{ loading ? (
				<>
					<CustomSkeleton width={ 48 } height={ 6 } addMarginTop={ true } />
					<CustomSkeleton width={ 60 } height={ 6 } />
					<CustomSkeleton width={ 48 } height={ 6 } />
				</>
			) : (
				<>
					<div className="w-full flex justify-center items-center mt-4">{ Image }</div>

					<div className="mt-4">
						<h5 className="text-lg font-medium m-0">{ header }</h5>
						<p className="text-sm text-text-secondary mt-1 m-0">{ description }</p>
					</div>

					<div
						className={ `${
							features.length > 4 ? 'grid grid-cols-2' : 'flex flex-col'
						} w-full gap-1 mt-4` }
					>
						{ features.map( ( ele, idx ) => (
							<div
								key={ idx }
								className={ `text-brand-primary-600 flex gap-1.5 items-center ${
									idx % 2 !== 0 && 'mr-3'
								}` }
							>
								<Check size={ 12 } />
								<p className="text-field-label m-0">{ ele }</p>
							</div>
						) ) }
					</div>

					<hr className="w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle mt-4" />

					<div className="flex justify-between items-center mt-4">
						<div className="w-1/2">
							<CustomDropdown
								options={
									pricingData
										? Object.values( pricingData ).map( ( item ) =>
												item?.product.split( ' - ' )[ 0 ]?.replace( ' for Spectra', '' )
										  )
										: []
								}
								onSelect={ ( option ) => {
									handleProductSelect( option );
								} }
							/>
						</div>

						<div className="flex items-center justify-between gap-2">
							{ pricingData && selectedProduct && (
								<>
									<ButtonGhost
										modalBtn={ true }
										style={ {
											outline: 'none !important',
											boxShadow: 'unset !important',
										} }
									>
										${ pricingData[ selectedProduct ]?.price.USD.discounted }
										{ pricingData[ selectedProduct ]?.variant?.includes( 'Annual Subscription' ) ||
										pricingData[ selectedProduct ]?.product?.includes( 'Annual Subscription' ) ? (
											<span className="text-text-tertiary font-normal">
												{ __( '/year', 'ultimate-addons-for-gutenberg' ) }
											</span>
										) : (
											'null'
										) }
									</ButtonGhost>

									<a
										href={ pricingData[ selectedProduct ].checkout_url }
										target="_blank"
										rel="noreferrer"
										className="no-underline text-text-on-color"
									>
										<ButtonPrimary>
											{ __( 'Buy Now', 'ultimate-addons-for-gutenberg' ) }
										</ButtonPrimary>
									</a>
								</>
							) }
						</div>
					</div>

					<div className="flex justify-end md:pr-[10px] pr-2 w-full">
						<a
							href="https://wpspectra.com/pricing/"
							target="_blank"
							rel="noreferrer"
							className="text-xxs text-brand-primary-600 uagb-remove-ring"
						>
							{ __( 'View plans', 'ultimate-addons-for-gutenberg' ) }
						</a>
					</div>
				</>
			) }
		</div>
	);
};

const CustomDropdown = ( { options, onSelect } ) => {
	// Remove duplicates from the options array
	const uniqueOptions = Array.from( new Set( options ) );

	const [ isOpen, setIsOpen ] = useState( false );
	const [ selectedOption, setSelectedOption ] = useState( '' );
	const [ loading, setLoading ] = useState( true ); // Add a loading state
	const isInitialRender = useRef( true ); // Track initial render

	const dropdownRef = useRef( null );

	const handleClickOutside = ( event ) => {
		if ( dropdownRef.current && ! dropdownRef.current.contains( event.target ) ) {
			setIsOpen( false );
		}
	};

	const toggleDropdown = () => setIsOpen( ! isOpen );

	const handleOptionClick = ( option ) => {
		setSelectedOption( option );
		onSelect( option );
		setIsOpen( false );
	};

	useEffect( () => {
		if ( isInitialRender.current && uniqueOptions.length > 0 ) {
			setSelectedOption( uniqueOptions[ 0 ] );
			isInitialRender.current = false; // Marking initial render as complete
			setLoading( false ); // Data is now loaded
		}
	}, [ uniqueOptions ] );

	useEffect( () => {
		document.addEventListener( 'mousedown', handleClickOutside );

		return () => {
			document.removeEventListener( 'mousedown', handleClickOutside );
		};
	}, [] );

	if ( loading ) return <div className="w-full flex justify-center items-center text-lg">Loading...</div>;

	return (
		<div className="relative w-full" ref={ dropdownRef }>
			<div
				className="p-2 cursor-pointer rounded-lg outline-none shadow-none w-full flex justify-center items-center border-border-subtle font-semibold text-text-primary"
				style={ { border: '1px solid rgb(229, 231, 235)' } }
				onClick={ toggleDropdown }
			>
				<div className="text-sm text-text-primary flex items-center justify-between w-full">
					{ selectedOption }
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-chevron-down"
						>
							<path d="m6 9 6 6 6-6"></path>
						</svg>
					</span>
				</div>
			</div>

			{ /* Dropdown Items */ }
			{ isOpen && (
				<div className="absolute mt-2 bg-white border border-gray-300 rounded-md shadow-lg w-60 -top-4 -translate-y-full p-2">
					{ uniqueOptions.map( ( option, index ) => (
						<div
							key={ index }
							className={ `px-4 py-2 cursor-pointer text-base rounded ${
								selectedOption === option ? 'bg-background-secondary' : 'hover:bg-background-secondary'
							}` }
							onClick={ () => handleOptionClick( option ) }
						>
							{ option }
						</div>
					) ) }
				</div>
			) }
		</div>
	);
};

// Mounting the custom component in the editor.
document.addEventListener( 'DOMContentLoaded', () => {
	let prevDistractionFreeState = wp.data.select( 'core/edit-post' )?.isFeatureActive( 'distractionFree' );
	const now = Date.now();

	const insertBanner = () => {
		const url = new URL( window.location.href );
		const isSiteEditor = url.pathname === '/wp-admin/site-editor.php';
		const isTemplateEditMode = url.searchParams?.get( 'canvas' ) === 'edit';

		if ( isSiteEditor && ! isTemplateEditMode ) {
			removeBanner();
			return;
		}

		const dismissCount = parseInt( localStorage.getItem( 'spectra-banner-dismiss-count' ) || '0', 10 );

		if ( dismissCount >= 2 ) {
			return; // Do not show banner after second dismissal
		}

		const lastDismissed = parseInt( localStorage.getItem( 'spectra-banner-dismissed-time' ) || '0', 10 );
		const TWO_WEEKS = 10000 * 60 * 60 * 24 * 14;

		// Ensure it does NOT reappear within two weeks of refresh
		if ( now - lastDismissed < TWO_WEEKS ) {
			return;
		}

		if ( document.getElementById( 'spectra-pro-banner' ) ) {
			return;
		}

		const isDistractionFree = wp.data.select( 'core/edit-post' )?.isFeatureActive( 'distractionFree' );

		if ( isDistractionFree ) {
			return;
		}

		const container = document.querySelector( '.interface-interface-skeleton__content' );

		if ( container ) {
			const target = document.createElement( 'div' );
			target.id = 'spectra-pro-banner';
			target.classList.add( 'components-notice-list', 'components-editor-notices__dismissible' );

			container.prepend( target );
			if ( uag_react?.pro_plugin_status === 'Install' ) {
				wp.element.render( <SpectraProUpsell />, target );
			}
		}
	};

	const removeBanner = () => {
		document.getElementById( 'spectra-pro-banner' )?.remove();
	};

	insertBanner();

	const checkDistractionFreeChange = () => {
		const currentDistractionFreeState = wp.data.select( 'core/edit-post' )?.isFeatureActive( 'distractionFree' );

		if ( currentDistractionFreeState !== prevDistractionFreeState ) {
			prevDistractionFreeState = currentDistractionFreeState;
			removeBanner();

			if ( ! currentDistractionFreeState ) {
				insertBanner();
			}
		}
	};

	wp.data.subscribe( checkDistractionFreeChange );

	wp.data.subscribe( () => {
		const isPostEditor = wp.data.select( 'core/edit-post' ) !== undefined;
		const isSiteEditor = wp.data.select( 'core/edit-site' ) !== undefined;

		if ( isPostEditor || isSiteEditor ) {
			insertBanner();
		}
	} );
} );
