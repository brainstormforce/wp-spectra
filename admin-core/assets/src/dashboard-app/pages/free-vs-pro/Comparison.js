import { __ } from '@wordpress/i18n';
import {
	DynamicContentFeatures,
	LoopBuilderFeatures,
	PopupBuilderProFeatures,
	GlobalBlockStylesFeatures,
	LoginFormFeatures,
	RegistrationFormFeatures,
	InstagramFeedFeatures,
	ModalProFeatures,
	SliderProFeatures,
	CountdownTimerProFeatures,
	ImageGalleryProFeatures,
	AdvancedAnimationsFeatures
} from './featuresData';
import { useDispatch } from 'react-redux';
import getApiData from '@Controls/getApiData';


const Comparison = () => {

	const dispatch = useDispatch();
	// Function to open the pricing page in a new tab when the "Upgrade Now" button is clicked.
	const onUpgradeNowClick = () => {
		window.open(
			'https://wpspectra.com/pricing/?utm_source=dashboard&utm_medium=free-plugin&utm_campaign=free-vs-pro',
			'_blank'
		);
	};

	// Function to render a close icon.
	const CloseIcon = ( props ) => (
		<svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" { ...props }>
			<path
				d="M17.94 7.75206L13.692 12.0001L17.94 16.2481L16.248 17.9401L12 13.7041L7.764 17.9401L6.06 16.2361L10.296 12.0001L6.06 7.76406L7.764 6.06006L12 10.2961L16.248 6.06006L17.94 7.75206Z"
				fill="#F87171"
			/>
		</svg>
	);

	// This function creates a CheckmarkIcon component.
	const CheckmarkIcon = ( props ) => (
		<svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg" { ...props }>
			<path d="M15.3 5.3L8.5 12.1L5.7 9.3L4.3 10.7L8.5 14.9L16.7 6.7L15.3 5.3Z" fill="#10B981" />
		</svg>
	);

	// This function creates a FeatureRow component with a title and an optional badge
	const FeatureRow = ( { title, badge = false, tooltip = '' } ) => (
		<div className="col-span-3 flex items-start w-full bg-spectra-verylight">
			<div className="items-start px-8 py-[13px] border-b flex w-full">
				<div className="w-full flex items-center gap-3">
					<div className="relative flex items-center gap-1">
						<div className="font-medium text-slate-800 text-base tracking-normal leading-8">
							{ title }
						</div>
						{ badge && (
							<div className="relative group">
								<Badge />
								{ tooltip && (
									<div className="absolute opacity-0 group-hover:opacity-100 bg-gray-700 text-white text-xs rounded py-1 px-2 z-10 whitespace-nowrap transform -translate-x-[40%] -top-12 left-1/2 transition-all pointer-events-none">
										{ tooltip }
									</div>
								) }
							</div>
						) }
					</div>
				</div>
			</div>
		</div>
	);
		
	

	// Generates row of feature with item with check or cross mark icon.
	const FeatureRowWithIcons = ( { featureName, isFreeFeature } ) => {
		return (
			<>
				<div className="flex items-center justify-start px-8 py-5 border-b bg-white">
					<div className="font-normal text-slate-500 text-base tracking-normal leading-normal ">
						{ featureName }
					</div>
				</div>
				<div className="flex items-center bg-white justify-center px-6 py-5 border-b bg-white">
				{ isFreeFeature ? (
					<CheckmarkIcon className="w-6 h-6" />
					
				) : (
					<CloseIcon className="w-6 h-6" />
				) }
				</div>
				<div className="flex items-center bg-white justify-center px-6 py-5 border-b bg-white">
					<CheckmarkIcon className="w-6 h-6" />
				</div>
			</>
		);
	};

	const FreeProComparisonHeader = ( { title = 'FEATURES' } ) => {
		return (
			<>
				<div className="flex items-center gap-3 px-8 py-[15px] border-b bg-white border-spectra">
					<div className="flex items-center gap-1">
						<div className="font-medium text-sm tracking-[2px] text-spectra">{ title }</div>
					</div>
				</div>
				<div className="flex items-center justify-center bg-white gap-3 px-6 py-[15px] border-b bg-slate-200 border-spectra lg:w-[240px]">
				<div className="flex items-center gap-1">
					<div className="font-medium text-sm tracking-[2px] text-spectra">
						{ __( 'FREE', 'ultimate-addons-for-gutenberg' ) }
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center bg-white gap-3 px-6 py-[15px] border-b bg-white border-spectra lg:w-[240px]">
				<div className="flex items-center gap-1">
					<div className="font-medium text-sm tracking-[2px] text-spectra">
						{ __( 'PRO', 'ultimate-addons-for-gutenberg' ) }
					</div>
				</div>
			</div>

			</>
		);
	};

	// Feature Link component for the free vs pro comparison table.
	const FeatureLink = ( { title } ) => {
		return (
			<div className="col-span-3 flex bg-white items-start w-full">
				<div className="flex items-center justify-center px-6 py-4 w-full">
					<div className="flex items-center gap-2">
						<a
							href="https://wpspectra.com/pricing/?utm_source=dashboard&utm_medium=free-plugin&utm_campaign=free-vs-pro"
							target="_blank"
							rel="noopener noreferrer"
							className="text-spectra hover:text-spectra-hover text-base font-medium tracking-normal leading-6 flex items-center gap-2"
						>
							{ title }
							<svg
								className="w-5 h-5 text-spectra hover:text-spectra-hover"
								fill="none"
								height="20"
								viewBox="0 0 20 20"
								width="20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.33334 5.00004H5C4.07953 5.00004 3.33334 5.74623 3.33334 6.66671V15C3.33334 15.9205 4.07953 16.6667 5 16.6667H13.3333C14.2538 16.6667 15 15.9205 15 15V11.6667M11.6667 3.33337H16.6667M16.6667 3.33337V8.33337M16.6667 3.33337L8.33334 11.6667"
									stroke="#6104FF"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.6"
								></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
		);
	};

	// Upgrade to Pro Card with Upgrade Button.
	const SpectraProCard = () => {
		return (
			<div className="flex flex-col w-full items-center mt-6 gap-7 p-10 outline outline-1 outline-slate-200 rounded-md overflow-hidden shadow-sm bg-spectra-verylight w-full ">
				<div className="flex flex-col items-center gap-3 lg:pl-60 lg:pr-60 md:pl-20 md:pr-20 w-full">
					<div className="text-2xl font-semibold text-slate-800 text-center">
						{ __( 'Do More with Spectra Pro', 'ultimate-addons-for-gutenberg' ) }
					</div>
					<div className="text-base text-center text-slate-500 font-normal">
						{ __(
							'Get access to powerful features for painless WordPress designing, without the high costs. With all the time you will save, it’s a product that pays for itself!',
							'ultimate-addons-for-gutenberg'
						) }
					</div>
				</div>
				<button
					type="button"
					className="inline-flex items-center py-[9px] px-[17px] border border-transparent text-base font-medium leading-6 rounded-md shadow-sm text-white bg-spectra transition focus:bg-spectra-hover hover:bg-spectra-hover focus:outline-none font-inter"
					onClick={activatePro}
					>
					{getSpectraProTitle()}
				</button>

			</div>
		);
	};

	// This function creates a badge component with a default text of 'New'.
	const Badge = ( { text = 'Beta' } ) => {
		return (
			<div className="absolute -top-5 right-[-45px] inline-flex items-start gap-2 pt-[2px] pl-[5px] pb-[3px] pr-[6px] bg-spectra-light rounded cursor-default">
				<div className="w-fit font-medium text-spectra text-xs tracking-normal leading-3 ">
					{ text }
				</div>
			</div>
		);
	};

	const getSpectraProTitle = () => {
		return 'inactive' === uag_react.pro_plugin_status ? __( 'Activate Now', 'ultimate-addons-for-gutenberg' ) : __( 'Get Spectra Pro Now', 'ultimate-addons-for-gutenberg' );
	}

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
			onUpgradeNowClick();
		}
	};

	return (
		<>
			<div className="flex flex-col items-center px-6 mx-auto lg:max-w-[78rem] gap-6 w-full">
				{ /* Outer Frame  */ }
				<div className="flex w-full flex-col items-start mt-12 mb-6 md:flex-row md:items-center gap-4">
					<section className="flex-1 font-semibold text-2xl font-inter text-slate-800">{ __( 'Spectra Free vs Pro', 'ultimate-addons-for-gutenberg' ) }</section>
					<button
						type="button"
						className="inline-flex items-center px-[18px] py-3 border border-transparent text-sm leading-[14px] font-medium rounded-md shadow-sm text-white bg-spectra transition focus:bg-spectra-hover hover:bg-spectra-hover focus:outline-none font-inter"
						onClick={ activatePro }
					>
						{ getSpectraProTitle() }
					</button>
				</div>

				{ /* Table  */ }

				<div className="grid grid-cols-[1fr_auto_auto] rounded-lg outline outline-1 outline-slate-200 w-full">
					
					<FreeProComparisonHeader title="BLOCKS" />

					
					<FeatureRow title="Loop Builder" />
					{ LoopBuilderFeatures.map( ( feature, index ) => (
						<FeatureRowWithIcons 
							key={ index } featureName={ feature.feature } isFreeFeature={ feature.isFreeFeature } 
						/>
					) ) }

					<FeatureRow title="Instagram Feed" />
					{ InstagramFeedFeatures.map( ( feature, index ) => (
						<FeatureRowWithIcons 
							key={ index } featureName={ feature.feature } isFreeFeature={ feature.isFreeFeature } 
						/>
					) ) }

					<FeatureRow title="Login Form" />
					{ LoginFormFeatures.map( ( feature, index ) => (
						<FeatureRowWithIcons 
							key={ index } featureName={ feature.feature } isFreeFeature={ feature.isFreeFeature } 
						/>
					) ) }

					<FeatureRow title="Registeration Form" />
					{ RegistrationFormFeatures.map( ( feature, index ) => (
						<FeatureRowWithIcons 
							key={ index } featureName={ feature.feature } isFreeFeature={ feature.isFreeFeature } 
						/>
					) ) }

					<FeatureRow title="Modal" />
					{ ModalProFeatures.map( ( feature, index ) => (
						<FeatureRowWithIcons 
							key={ index } featureName={ feature.feature } isFreeFeature={ feature.isFreeFeature } 
						/>
					) ) }

					<FeatureRow title="Slider" />
					{ SliderProFeatures.map( ( feature, index ) => (
						<FeatureRowWithIcons 
							key={ index } featureName={ feature.feature } isFreeFeature={ feature.isFreeFeature } 
						/>
					) ) }

					<FeatureRow title="Countdown Timer" />
					{ CountdownTimerProFeatures.map( ( feature, index ) => (
						<FeatureRowWithIcons 
							key={ index } featureName={ feature.feature } isFreeFeature={ feature.isFreeFeature } 
						/>
					) ) }

					<FeatureRow title="Image Gallery" />
					{ ImageGalleryProFeatures.map( ( feature, index ) => (
						<FeatureRowWithIcons 
							key={ index } featureName={ feature.feature } isFreeFeature={ feature.isFreeFeature } 
						/>
					) ) }
				</div>

				<div className="grid grid-cols-[1fr_auto_auto] rounded-lg outline outline-1 outline-slate-200 w-full">
					
					<FreeProComparisonHeader />

					<FeatureRow title="Dynamic Content" />
					{ DynamicContentFeatures.map( ( feature, index ) => (
						<FeatureRowWithIcons 
							key={ index } featureName={ feature.feature } isFreeFeature={ feature.isFreeFeature } 
						/>
					) ) }

					
					<FeatureRow title="Global Block Styles" badge="true" tooltip="Available only for the 8 Spectra core blocks" />
					{ GlobalBlockStylesFeatures.map( ( feature, index ) => (
						<FeatureRowWithIcons 
							key={ index } featureName={ feature.feature } isFreeFeature={ feature.isFreeFeature } 
						/>
					) ) }

					<FeatureRow title="Advanced Animations" />
					{ AdvancedAnimationsFeatures.map( ( feature, index ) => (
						<FeatureRowWithIcons 
							key={ index } featureName={ feature.feature } isFreeFeature={ feature.isFreeFeature } 
						/>
					) ) }

					<FeatureRow title="Advanced Popup Builder" />
					{ PopupBuilderProFeatures.map( ( feature, index ) => (
						<FeatureRowWithIcons 
							key={ index } featureName={ feature.feature } isFreeFeature={ feature.isFreeFeature } 
						/>
					) ) }

					<FeatureLink title="See all Spectra Pro features" />
				</div>

				<SpectraProCard />

			</div>
		</>
	);
};

export default Comparison;
