import { __, sprintf } from '@wordpress/i18n';
import { useDispatch } from 'react-redux';
import getApiData from '@Controls/getApiData';
import { Container, Button } from '@bsf/force-ui';
import { ArrowUpRight } from 'lucide-react';
import React, { useState } from 'react';
import ProModal from '../../../common/components/ProModal';

const UpgradeNotices = ( { title, description, upgradeText, upgradeBold, modalData, dynamicContent = false } ) => {
	const dispatch = useDispatch();
	const [ isModalOpen, setIsModalOpen ] = useState( false );

	if ( uag_react.spectra_pro_ver ) {
		return '';
	}

	const onUpgradeLinkTrigger = () => {
		window.open(
			'https://wpspectra.com/pricing/?utm_source=dashboard&utm_medium=free-plugin&utm_campaign=setting',
			'_blank'
		);
	};

	const activatePro = ( e ) => {
		const isThisNull = uag_react.pro_plugin_status;

		if ( 'Install' !== isThisNull ) {
			// Create an object with the required data to activate the 'spectra' Pro feature
			const data = {
				security: uag_react.pro_activate_nonce,
				value: 'spectra',
			};
			e.target.innerText = uag_react.plugin_activating_text + '…';
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
		return 'Installed' === uag_react.pro_plugin_status
			? __( 'Activate Now', 'ultimate-addons-for-gutenberg' )
			: __( 'Upgrade Now', 'ultimate-addons-for-gutenberg' );
	};

	const translatedSpectraProTitle = sprintf(
		/* translators: abbreviation for units */
		__( ' %s', 'ultimate-addons-for-gutenberg' ),
		getSpectraProTitle()
	);

	const translatedDesc = sprintf(
		/* translators: abbreviation for units */
		__( 'You are using %1$s version, %2$s', 'ultimate-addons-for-gutenberg' ),
		'<span class="text-text-primary font-medium">Spectra Free</span>',
		description
	);

	return (
		<Container
			align="stretch"
			className="bg-background-primary rounded-lg"
			containerType="flex"
			direction="column"
			gap="sm"
			justify="start"
		>
			<div className="flex justify-between items-center">
				<Container.Item className="flex flex-col space-y-2 shrink" style={ { flexShrink: '1' } }>
					<p className="font-semibold m-0" style={ { fontSize: '1rem' } }>{ title }</p>
					{ ! dynamicContent && <p
						className="text-sm font-normal m-0 text-text-tertiary"
						dangerouslySetInnerHTML={ { __html: translatedDesc } }
					></p> }
					{ dynamicContent && <p
						className="text-sm font-normal m-0 text-text-tertiary"
					>{ description }</p> }
				</Container.Item>

				{ dynamicContent && (
					<div
						className="text-text-tertiary flex justify-center items-center rounded-sm overflow-hidden cursor-not-allowed"
						style={ { border: '1px solid #e5e7eb', borderRadius: '0.25rem' } }
					>
						<div
							className="text-text-tertiary p-2"
							style={ { border: 'none', borderRight: '1px solid #e5e7eb' } }
						>
							{ __( 'Popup', 'ultimate-addons-for-gutenberg' ) }
						</div>
						<div className="text-text-tertiary p-2" style={ { border: 'none' } }>
							{ __( 'Sidebar', 'ultimate-addons-for-gutenberg' ) }
						</div>
					</div>
				) }
			</div>

			<div className="flex flex-col sm:flex-row sm:items-center items-start justify-between gap-2 rounded-xl bg-[#F3F0FF] p-3" style={ { border: '1px solid #D6CDFF' } }>
				<span className="text-sm sm:flex sm:items-center sm:gap-1">
					<strong className="font-semibold">{ upgradeBold }</strong> { upgradeText }
				</span>

				<Button
					className="uagb-remove-ring items-start"
					icon={ React.cloneElement( <ArrowUpRight />, { className: 'w-3.5 h-3.5' } ) }
					iconPosition="right"
					size="xs"
					tag="button"
					type="button"
					variant="link"
					onClick={ ( e ) => {
						if ( 'Installed' === uag_react.pro_plugin_status ) {
							activatePro( e );
						} else {
							setIsModalOpen( true );
						}
					} }
				>
					{ translatedSpectraProTitle }
				</Button>
			</div>

			{ isModalOpen && (
				<ProModal setIsModalOpen={ setIsModalOpen } activatePro={ activatePro } modalData={ modalData } />
			) }
		</Container>
	);
};

export default UpgradeNotices;
