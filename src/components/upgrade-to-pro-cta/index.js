import PropTypes from 'prop-types';
import { __ } from '@wordpress/i18n';
import { useState, useEffect, useRef } from 'react';
import styles from './editor.lazy.scss';
import { useLayoutEffect } from '@wordpress/element';
import { Modal } from '@wordpress/components';
import { spectraProFeatures } from './SpectraProFeatures';

const UpgradeComponent = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { campaign = 'default' } = props.control;

	return (
		<>
			<div className="uagb-upgrade-pro-wrap">
				<SpectraSupport campaign={ campaign } />
			</div>
		</>
	);
};

UpgradeComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default UpgradeComponent;

const SpectraSupport = ( { campaign } ) => {
	const postCampaigns = {
		'post-grid': 'post-grid',
		'post-carousel': 'post-grid',
		'post-masonry': 'post-grid',
	};

	const modalData = spectraProFeatures[ postCampaigns[ campaign ] || campaign ];

	const supportModalData = {
		title: modalData?.title,
		Image: modalData?.image,
		header: modalData?.header,
		description: modalData?.description,
		features: modalData?.features,
		shortDesc: modalData?.shortDesc,
	};

	const allPlansData = {
		'Spectra Pro': supportModalData,
		'Essential Toolkit': {
			...supportModalData,
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
			...supportModalData,
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
					<ProModal setIsModalOpen={ closeModal } modalData={ allPlansData } />,
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
				backgroundColor: '#fff',
				bottom: isMobile ? '0' : '38px',
				width: isMobile ? '100%' : '250px',
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
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M8.66667 1.3335L2 9.3335H8L7.33333 14.6668L14 6.66683H8L8.66667 1.3335Z"
							stroke="#6005FF"
							strokeWidth="1.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>

				<div
					className="spectra-support-text"
					style={ { fontSize: '13px', fontFamily: 'Figtree', fontWeight: 400, color: '#111827' } }
				>
					{ modalData.shortDesc }{ ' ' }
					<div
						style={ {
							display: 'inline',
							color: '#0369A1',
							textDecoration: 'underline',
							cursor: 'pointer',
						} }
						onClick={ () => openModal() }
					>
						{ __( 'Learn more', 'ultimate-addons-for-gutenberg' ) }
					</div>
				</div>
			</div>

			{ modalOpen && <Modal title="This is my modal" onRequestClose={ closeModal }></Modal> }
		</div>
	);
};

const ProModal = ( { modalData, setIsModalOpen } ) => {
	const [ isMobile, setIsMobile ] = useState( window.innerWidth <= 768 );
	const [ loading, setLoading ] = useState( true );
	const [ productsList, setProductsList ] = useState( '' );
	const [ productKey, setProductKey ] = useState( '' );
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

				setProductsList( filteredData );

				if ( Object.keys( filteredData ).length > 0 ) {
					setProductKey( Object.keys( filteredData )[ 0 ] );
				}
				setLoading( false );
			} catch ( error ) {
				setProductsList( '' );
			}
		};

		fetchPricingData();
	}, [] );

	useEffect( () => {
		const productName = productsList[ productKey ]?.product || '';
		const titleMapping = {
			'Spectra Pro': 'Spectra Pro',
			'Essential Toolkit': 'Essential Toolkit',
		};

		const newTitle =
			Object.keys( titleMapping ).find( ( key ) => productName.includes( key ) ) || 'Business Toolkit';
		setSelectedTitle( newTitle );
	}, [ productKey ] );

	const handleProductSelect = ( option ) => {
		if ( productsList && Object.keys( productsList ).length > 0 ) {
			for ( const key in productsList ) {
				if ( productsList[ key ]?.product.split( ' - ' )[ 0 ]?.replace( ' for Spectra', '' ) === option ) {
					setProductKey( key );
					break;
				}
			}
		}
	};

	const closeModal = ( e ) => {
		e.stopPropagation();
	};

	const getGridClass = () => {
		if ( selectedTitle === 'Essential Toolkit' || selectedTitle === 'Business Toolkit' ) {
			return 'grid grid-cols-2';
		}
	
		if ( features.length > 3 && !features.some( ( feature ) => feature.length > 25 ) ) {
			return 'grid grid-cols-2';
		}
	
		return 'flex flex-col';
	};

	return (
		<div
			className={ `bg-white rounded-lg p-5 upsell-modal-component ${ isMobile ? '' : 'w-[500px]' }` }
			onClick={ closeModal }
			style={ { width: isMobile ? 'auto' : '500px', fontFamily: 'Figtree' } }
		>
			<div className="flex w-full justify-between items-center">
				<div className="text-brand-primary-600 flex space-x-1">
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M8.66667 1.3335L2 9.3335H8L7.33333 14.6668L14 6.66683H8L8.66667 1.3335Z"
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
					<div className="w-full flex justify-center items-center mt-4">{ Image }</div>

					<div className="mt-4">
						<h5 className="text-lg font-medium m-0 text-text-primary">{ header }</h5>
						<p className="text-sm text-text-secondary mt-1 m-0">{ description }</p>
					</div>

					<div
						className={ `${ getGridClass() } w-full gap-1 mt-4` }
					>
						{ features?.map( ( ele, idx ) => (
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
										d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
										stroke="#6005FF"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>

								<p className="text-field-label m-0" style={ { fontSize: '14px', lineHeight: '20px' } }>{ ele }</p>
							</div>
						) ) }
					</div>

					<hr className="w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle mt-4" />

					<div className="flex justify-between items-center mt-4">
						<div className="w-1/2">
							<CustomDropdown
								options={
									productsList
										? Object.values( productsList )?.map( ( item ) =>
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
							{ productsList && productKey && (
								<>
									<button
										className=""
										tag="button"
										type="button"
										style={ {
											padding: '10px 14px',
											color: 'white',
											fontSize: '14px',
											fontWeight: '600',
											backgroundColor: '#F9FAFB',
											borderRadius: '8px',
											outline: 'none !important',
											boxShadow: 'unset !important',
											cursor: 'pointer',
											border: 'none',
											lineHeight: '20px',
										} }
									>
										<span style={ { color: 'black' } }>
											${ productsList[ productKey ]?.price?.USD?.discounted }
										</span>
										{ productsList[ productKey ]?.variant?.includes( 'Annual Subscription' ) ||
										productsList[ productKey ]?.product?.includes( 'Annual Subscription' ) ? (
											<span className="text-text-tertiary font-normal">
												{ __( '/year', 'ultimate-addons-for-gutenberg' ) }
											</span>
										) : null }
									</button>

									<a
										href={ productsList[ productKey ].checkout_url }
										target="_blank"
										rel="noreferrer"
										className="no-underline text-text-on-color"
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
												lineHeight: '20px',
											} }
										>
											{ __( 'Buy Now', 'ultimate-addons-for-gutenberg' ) }
										</button>
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
				<div
					className="absolute mt-2 bg-white border border-gray-300 rounded-md shadow-lg w-60 -top-4 -translate-y-full p-2"
					// style={ { height: '400px', overflowY: 'scroll' } }
				>
					{ uniqueOptions?.map( ( option, index ) => (
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
