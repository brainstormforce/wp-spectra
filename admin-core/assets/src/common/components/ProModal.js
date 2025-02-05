import { __ } from '@wordpress/i18n';
import React from 'react';
import { useEffect, useState } from '@wordpress/element';
import { Button, DropdownMenu, Skeleton } from '@bsf/force-ui';
import { Zap, X, Check, ChevronDown } from 'lucide-react';

const ProModal = ( { modalData, setIsModalOpen } ) => {
	const [ productsList, setProductsList ] = useState( [] );
	const [ selectedProduct, setSelectedProduct ] = useState( '' );
	const [ loading, setLoading ] = useState( true );
	const [ selectedTitle, setSelectedTitle ] = useState( 'Spectra Pro' );

	const { title, Image, header, description, features } = modalData[ selectedTitle ];

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
						value.product.includes( 'Spectra Pro - Annual Subscription' ) && value.variant.includes( '1 Site' ) ||
						value.product.includes( 'Essential Toolkit for Spectra - Annual Subscription' ) && value.variant.includes( '1 Site' ) ||
						value.product.includes( 'Business Toolkit - Annual Subscription' ) && value.variant.includes( '1 Site' )
					) {
						acc[ key ] = value;
					}
					return acc;
				}, {} );

				// Set filtered pricing data
				setProductsList( filteredData );

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
		const productName = productsList[ selectedProduct ]?.product || '';
		const titleMapping = {
			'Spectra Pro': 'Spectra Pro',
			'Essential Toolkit': 'Essential Toolkit',
		};
		
		const newTitle = Object.keys( titleMapping ).find( ( key ) => productName.includes( key ) ) || 'Business Toolkit';
		setSelectedTitle( newTitle )
	}, [ selectedProduct ] )

	const closeModal = ( e ) => {
		e.stopPropagation();
	};

	return (
		<div
			onClick={ () => setIsModalOpen( false ) }
			className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-999999"
		>
			<div
			className={`bg-white rounded-lg p-5
				${selectedTitle === 'Essential Toolkit' ? 'sm:w-[500px] w-[400px]' : 'sm:w-[400px] w-[300px]'}`
			}
			onClick={closeModal}
			>
				<div className="flex w-full justify-between items-center">
					<div className="text-brand-primary-600 flex space-x-1">
						<Zap size={ 14 } className="flex items-center justify-center" />
						<div className="font-semibold text-xs">{ title }</div>
					</div>

					<div onClick={ () => setIsModalOpen( false ) } className="p-1">
						<X size={ 14 } />
					</div>
				</div>

				{ loading ? (
					<>
						<Skeleton className="w-48 h-6 rounded-md mb-6 mt-6" />
						<Skeleton className="w-60 h-6 rounded-md mb-6" />
						<Skeleton className="w-48 h-6 rounded-md mb-6" />
					</>
				) : (
					<>
						<div className="w-full flex justify-center items-center mt-4">
							<Image />
						</div>

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

						{ Object.keys( productsList ).length > 0 && (
							<div className="flex justify-between items-center mt-4 flex-col sm:flex-row gap-2">
								<div className="sm:w-1/2 w-full dropdown-container">
									<DropdownMenu placement="bottom-start" style={ { width: '100%' } }>
										<DropdownMenu.Trigger style={ { width: '100%' } }>
											<div
												className="p-2 cursor-pointer rounded-lg outline-none shadow-none w-full flex justify-center items-center border-border-subtle font-semibold text-text-primary"
												style={ { border: '1px solid #E5E7EB', width: '100%' } }
											>
												<div className="text-sm text-text-primary flex items-center justify-between w-full">
													{ productsList[ selectedProduct ]?.product.split( ' - ' )[ 0 ]?.replace( ' for Spectra', '' ) }
													<span>
														<ChevronDown size={ 14 } />
													</span>
												</div>
											</div>
										</DropdownMenu.Trigger>
										<DropdownMenu.Content className="w-60" style={ { zIndex: '99999999' } }>
											<DropdownMenu.List
												style={ { zIndex: '99999999' } }
												className="dropdown-list"
											>
												{ Object.entries( productsList ).map( ( [ key, value ] ) => (
													<DropdownMenu.Item
														onClick={ () => setSelectedProduct( key ) }
														style={ { zIndex: '99999999' } }
														key={ value.product + value.variant }
													>
														{ value.product.split( ' - ' )[ 0 ].replace( ' for Spectra', '' ) }
													</DropdownMenu.Item>
												) ) }
											</DropdownMenu.List>
										</DropdownMenu.Content>
									</DropdownMenu>
								</div>

								<div className="flex items-center justify-between sm:gap-0 gap-[88px]">
									<Button variant="ghost" size="md">
										{ '$' + productsList[ selectedProduct ]?.price.USD.discounted }
										{ productsList[ selectedProduct ]?.variant?.includes( 'Annual Subscription' ) ||
										productsList[ selectedProduct ]?.product?.includes( 'Annual Subscription' ) ? (
											<span className="text-text-tertiary">
												{ __( '/year', 'ultimate-addons-for-gutenberg' ) }
											</span>
										) : null }
									</Button>

									<a
										href={ productsList[ selectedProduct ]?.checkout_url }
										target="_blank"
										rel="noreferrer"
										className="no-underline text-text-on-color relative"
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
								</div>
							</div>
						) }

						<a href='https://wpspectra.com/pricing/' target='_blank' rel='noreferrer' className='text-xxs text-brand-primary-600 w-full flex justify-end md:pr-[10px] pr-2'>
							{ __( 'View plans', 'ultimate-addons-for-gutenberg' ) }
						</a>
					</>
				) }
			</div>
		</div>
	);
};

export default ProModal;
