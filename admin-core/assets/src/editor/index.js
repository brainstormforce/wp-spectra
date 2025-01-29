import React from 'react';
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';
import { Button } from '@bsf/force-ui';
import { Img, AccountModalImage } from './Images';
import { Zap, X, Check } from 'lucide-react';
import { Modal } from '@wordpress/components';
import './style.scss';
import '@Common/all-config.scss';

const SpectraProUpsell = () => {
	const accountModalData = {
		title: __( 'Unlock Pro Features', 'ultimate-addons-for-gutenberg' ),
		Image: AccountModalImage,
		header: __( 'Limitless Design with Spectra Pro!', 'ultimate-addons-for-gutenberg' ),
		description: __(
			'Experience design freedom with Spectra Pro. Utilize advanced blocks, extensions, and premium features to create a websites that stands out!',
			'ultimate-addons-for-gutenberg'
		),
		features: [
			__( 'Instagram Feed Block', 'ultimate-addons-for-gutenberg' ),
			__( 'Global Block Styles', 'ultimate-addons-for-gutenberg' ),
			__( 'Dynamic Content', 'ultimate-addons-for-gutenberg' ),
			__( 'Loop Builder', 'ultimate-addons-for-gutenberg' ),
			__( 'Popup Builder', 'ultimate-addons-for-gutenberg' ),
			__( 'And more…', 'ultimate-addons-for-gutenberg' ),
		],
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
					<ProModal setIsModalOpen={ closeModal } modalData={ accountModalData } />,
					modalContainer
				);
			}
		}
	}, [ modalOpen ] );

	return (
		<div className="spectra-pro-banner flex items-center justify-between bg-[#f7f3ff] ">
			<div className="banner-before"></div>

			<div className="banner-content">
				<div className="banner-icon">{ Img() }</div>
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
						<Button
							variant="ghost"
							size="sm"
							style={ {
								outline: 'none !important',
								boxShadow: 'unset !important',
							} }
						>
							{ __( 'Learn More', 'ultimate-addons-for-gutenberg' ) }
						</Button>
					</a>
					<Button
						isPrimary
						href="#"
						target="_blank"
						rel="noopener noreferrer"
						variant="primary"
						size="sm"
						onClick={ () => openModal() }
						style={ {
							outline: 'none !important',
							boxShadow: 'unset !important',
						} }
					>
						{ __( 'Upgrade Now', 'ultimate-addons-for-gutenberg' ) }
					</Button>
				</div>

				<div
					className="flex items-center justify-center ml-4 cursor-pointer md:relative absolute top-1 right-1"
					onClick={ () => document.querySelector( '.spectra-pro-banner' ).remove() }
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
	const { title, Image, header, description, features } = modalData;

	const [ pricingData, setPricingData ] = useState( null );
	const [ selectedProduct, setSelectedProduct ] = useState( '' );

	useEffect( () => {
		// Fetch pricing data from the API
		const fetchPricingData = async () => {
			try {
				const response = await fetch( 'https://store.brainstormforce.com/wp-json/pse/v1/pricing', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify( {} ), // Empty body
				} );
				const data = await response.json();
				setPricingData( data.data );
				// Set the first product as default
				if ( Object.keys( data.data ).length > 0 ) {
					setSelectedProduct( Object.keys( data.data )[ 0 ] );
				}
			} catch ( error ) {
				setSelectedProduct( '' );
			}
		};

		fetchPricingData();
	}, [] );

	const closeModal = ( e ) => {
		e.stopPropagation();
	};

	return (
		<div className="bg-white rounded-lg p-5 w-[400px] upsell-modal-component" onClick={ closeModal }>
			<div className="flex w-full justify-between items-center">
				<div className="text-brand-primary-600 flex space-x-1">
					<Zap size={ 14 } className="flex items-center justify-center" />
					<div className="font-semibold text-xs">{ title }</div>
				</div>
				<div onClick={ () => setIsModalOpen( false ) } className="p-1">
					<X size={ 14 } />
				</div>
			</div>

			<div className="w-full flex justify-center items-center mt-4">
				<Image />
			</div>

			<div className="mt-4">
				<h5 className="text-lg font-medium m-0">{ header }</h5>
				<p className="text-sm text-text-secondary mt-1 m-0">{ description }</p>
			</div>

			<div className={ `${ features.length > 4 ? 'grid grid-cols-2' : 'flex flex-col' } w-full gap-1 mt-4` }>
				{ features.map( ( ele, idx ) => (
					<div
						key={ idx }
						className={ `text-brand-primary-600 flex gap-1.5 items-center ${ idx % 2 !== 0 && 'mr-3' }` }
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
						options={ [ 'Option 1', 'Option 2', 'Option 3' ] }
					/>
				</div>

				<div className="flex items-center justify-between">
					{ pricingData && selectedProduct && (
						<>
							<Button
								variant="ghost"
								size="md"
								style={ {
									outline: 'none !important',
									boxShadow: 'unset !important',
								} }
							>
								${ pricingData[ selectedProduct ].price.USD.discounted }
								{ pricingData[ selectedProduct ]?.variant?.includes( 'Annual Subscription' ) ||
								pricingData[ selectedProduct ]?.product?.includes( 'Annual Subscription' ) ? (
									<span className="text-text-tertiary">/year</span>
								) : null }
							</Button>

							<a
								href={ pricingData[ selectedProduct ].checkout_url }
								target="_blank"
								rel="noreferrer"
								className="no-underline text-text-on-color"
							>
								<Button
									className=""
									size="sm"
									tag="button"
									type="button"
									variant="primary"
									onClick={ () => setIsModalOpen( false ) }
								>
									{ __( 'Buy Now', 'ultimate-addons-for-gutenberg' ) }
								</Button>
							</a>
						</>
					) }
				</div>
			</div>
		</div>
	);
};

const CustomDropdown = ( { options } ) => {
	const [ isOpen, setIsOpen ] = useState( false );
	const [ selectedOption, setSelectedOption ] = useState( options[ 0 ] );

	const toggleDropdown = () => setIsOpen( ! isOpen );

	const handleOptionClick = ( option ) => {
		setSelectedOption( option );
		// onSelect( option );
		setIsOpen( false );
	};

	return (
		<div className="relative w-full">
			{ /* Selected Option */ }
			<div
				className="bg-white border border-gray-300 rounded-md px-4 py-2 cursor-pointer flex justify-between items-center"
				onClick={ toggleDropdown }
			>
				{ selectedOption }
				<span className="ml-2 transform transition-transform duration-200">{ isOpen ? '▲' : '▼' }</span>
			</div>

			{ /* Dropdown Items */ }
			{ isOpen && (
				<div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg">
					{ options.map( ( option, index ) => (
						<div
							key={ index }
							className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
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
	// eslint-disable-next-line no-undef
	const mutationObserver = new MutationObserver( ( mutationsList, observer ) => {
		// Look for the target element being added to the DOM
		const container = document.querySelector( '.interface-interface-skeleton__content' );

		if ( container ) {
			// Once found, stop observing and proceed with appending the custom banner
			observer.disconnect(); // Stop observing further mutations

			const target = document.createElement( 'div' );
			target.id = 'spectra-pro-banner';
			target.classList.add( 'components-notice-list' );
			target.classList.add( 'components-editor-notices__dismissible' );
			container.prepend( target ); // Append the custom notice

			// Render the custom React component inside the new div
			wp.element.render( <SpectraProUpsell />, target );
		}
	} );

	// Configure the observer to watch for child additions to the body
	mutationObserver.observe( document.body, {
		childList: true, // Look for added/removed children
		subtree: true, // Observe the entire DOM subtree
	} );
} );
