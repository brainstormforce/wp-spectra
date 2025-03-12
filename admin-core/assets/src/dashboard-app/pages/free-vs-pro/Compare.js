import React, { useEffect, useState } from 'react';
import { Button } from '@bsf/force-ui';
import { Check, X } from 'lucide-react';
import { __, sprintf } from '@wordpress/i18n';
import { sections } from './featuresData';
import { useDispatch } from 'react-redux';
import getApiData from '@Controls/getApiData';
import './Compare.scss';

const Compare = () => {
	const dispatch = useDispatch();

	const [ buttonText, setButtonText ] = useState();

	useEffect( () => {
		const currentButtonText = sprintf(
			/* translators: abbreviation for units */ __( ' %s', 'ultimate-addons-for-gutenberg' ),
			getSpectraProTitle()
		);

		setButtonText( currentButtonText );
	}, [] );

	// Function to open the pricing page in a new tab when the "Upgrade Now" button is clicked.
	const onUpgradeNowClick = () => {
		window.open(
			uag_admin_react.spectra_website?.freeVsPro,
			'_blank'
		);
	};

	const getSpectraProTitle = () => {
		return 'Installed' === uag_react.pro_plugin_status
			? __( 'Activate Now', 'ultimate-addons-for-gutenberg' )
			: __( 'Get Spectra Pro Now', 'ultimate-addons-for-gutenberg' );
	};

	const activatePro = () => {
		const isThisNull = uag_react.pro_plugin_status;

		if ( 'Install' !== isThisNull ) {
			// Create an object with the required data to activate the 'spectra' Pro feature
			const data = {
				security: uag_react.pro_activate_nonce,
				value: 'spectra',
			};
			setButtonText( uag_react.plugin_activating_text );
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
			onUpgradeNowClick();
		}
	};

	const renderIcon = ( isAvailable ) => ( isAvailable ? <Check color="#16A34A" /> : <X color="#DC2626" /> );

	const getLabel = ( item, type ) => {
		if ( item.id === 10 && item.content === __( 'Navigation Menu', 'ultimate-addons-for-gutenberg' ) ) {
			if ( type === 'pro' ) {
				return item.iconPro
					? __( 'Advanced', 'ultimate-addons-for-gutenberg' )
					: __( 'Basic', 'ultimate-addons-for-gutenberg' );
			}
			return item.iconPro
				? __( 'Basic', 'ultimate-addons-for-gutenberg' )
				: __( 'Advanced', 'ultimate-addons-for-gutenberg' );
		}
		return type === 'pro' ? renderIcon( item.iconFree ) : renderIcon( item.iconPro );
	};

	const renderItems = ( items ) =>
		items.map( ( item, idx ) => (
			<>
				<div key={ item.id } className="flex fle-row p-3 items-center justify-between gap-8 rounded-lg">
					<p className="text-sm text-text-secondary font-normal">{ item.content }</p>
					<div className="flex flex-row items-center justify-between lg:gap-36 md:gap-32 sm:gap-24 gap-10">
						<div className="text-sm text-text-primary font-medium flex justify-center items-center">
							{ getLabel( item, 'pro' ) }
						</div>
						<div className="text-sm text-text-primary font-medium flex justify-center items-center">
							{ getLabel( item, 'free' ) }
						</div>
					</div>
				</div>
				{ idx !== items.length - 1 ? (
					<hr className="w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle" />
				) : (
					<hr className="w-full border-b-0 border-x-0 border-t border-solid border-t-white mb-0" />
				) }
			</>
		) );

	return (
		<div
			className="rounded-lg bg-white w-full border-border-subtle mb-8 shadow-sm"
			style={ { border: '1px solid rgb(229, 231, 235)' } }
		>
			<div
				className="flex flex-col sm:flex-row custom:flex-col sm:items-center items-start custom:items-start justify-between sm:gap-0 gap-4 custom:gap-4 p-5"
				style={ { paddingBottom: '0' } }
			>
				<div className="flex flex-col">
					<div className="m-0 text-xl font-semibold sm:pt-4 custom:pt-0 pt-0 text-text-primary">
						{ __( 'Free VS Pro', 'ultimate-addons-for-gutenberg' ) }
					</div>
					<p className="m-0 text-sm font-normal pt-1 text-text-secondary">
						{ __(
							'Compare the features to find the best option for your website.',
							'ultimate-addons-for-gutenberg'
						) }
					</p>
				</div>
				<div className="flex items-center sm:p-1 p-0">
					{ uag_react.pro_plugin_status !== 'Activated' && (
						<Button
							iconPosition="right"
							variant="primary"
							style={ {
								color: 'white',
								transition: 'color 0.3s ease, border-color 0.3s ease',
								backgroundColor: '#6005ff',
								// fontSize: '16px',
								fontWeight: '600',
								// padding: '12px 16px',
							} }
							className="uagb-remove-ring text-[#6005FF] text-base px-4 py-3"
							onClick={ () => activatePro() }
						>
							{ buttonText }
						</Button>
					) }
				</div>
			</div>
			<div className="px-4 pb-4">
				<div className="flex flex-col pt-4">
					{ sections.map( ( section, idx ) => (
						<React.Fragment key={ section.title }>
							<div
								className={ `flex fle-row p-3 items-center justify-between rounded-lg ${
									idx !== 0 && 'mt-4'
								}` }
								style={ { backgroundColor: '#F9FAFB' } }
							>
								<p className="text-sm text-text-primary font-medium">{ section.title }</p>
								<div className="flex flex-row items-center lg:gap-36 md:gap-32 sm:gap-24 gap-10">
									<p className="text-sm text-text-primary font-medium">
										{ __( 'Free', 'ultimate-addons-for-gutenberg' ) }
									</p>
									<p
										className="text-sm text-text-primary font-medium"
										style={ { marginRight: '50px' } }
									>
										{ __( 'Pro', 'ultimate-addons-for-gutenberg' ) }
									</p>
								</div>
							</div>
							{ renderItems( section.items ) }
						</React.Fragment>
					) ) }
				</div>
			</div>
		</div>
	);
};

export default Compare;
