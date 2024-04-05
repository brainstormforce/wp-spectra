import {
	ArrowPathRoundedSquareIcon,
	Cog6ToothIcon,
	PencilSquareIcon,
} from '@heroicons/react/24/outline';
import {
	PauseCircleIcon,
	PhotoIcon,
	RectangleGroupIcon,
} from '@heroicons/react/24/solid';
import Dropdown from '../dropdown/dropdown';
import ActionButton from './header-action-button';
import { STORE_KEY } from '../../../store';
import Divider from '../divider/divider';
import apiFetch from '@wordpress/api-fetch';
import { classNames } from '../../../utils/helpers';
import { compose } from '@wordpress/compose';
import {
	withSelect,
	withDispatch,
	useDispatch,
	useSelect,
} from '@wordpress/data';
import { memo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { AIColorfulIcon } from '../../ui/icons';

const HeaderAIDropdown = ( {
	disableAi,
	adaptiveMode,
	// disablePreview,
	setAllBlocksData,
	setFilterBlocksByCategory,
	setTokenStep,
	// aiCopilotStatus,
	setActiveBlockPaletteSlug,
	setActiveBlockPalette,
	setActivePagePaletteSlug,
	setActivePagePalette,
	setBlockColorPaletteObj,
	setPageColorPaletteObj,
} ) => {
	const {
		toggleOnboardingAIStep,
		resetOnboardingAISteps,
		toggleDisableAiContent,
		toggleAdaptiveMode,
		setDynamicContent,
		setFilterBlocksPagesByCategory,
		setNotice,
		toggleUpdateOnboardingImages,
	} = useDispatch( STORE_KEY );
	const { aiStepData: { token, businessDetails, selectedImages } } = useSelect( ( select ) => {
		const { getAIStepData } = select( STORE_KEY );
		return {
			aiStepData: getAIStepData(),
		};
	}, [] );

	const { dynamicContentSyncStatus } = useSelect( ( select ) => {
		const { getDynamicContentSyncStatus } = select( STORE_KEY );
		return {
			dynamicContentSyncStatus: getDynamicContentSyncStatus(),
		};
	} );

	// const enableMenuItems = () => {
	// 	return true;
	// };

	const resetDetails = () => {
		if (
			! confirm(
				'Are you sure you want to reset the business details and erase the generated content?'
			)
		) {
			return;
		}
		const formData = new window.FormData();

		formData.append( 'action', 'ast-block-templates-reset-business-details' );
		formData.append(
			'security',
			ast_block_template_vars.reset_details_ajax_nonce
		);

		wp.apiFetch( {
			url: ast_block_template_vars.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( ( response ) => {
			if ( response.success ) {
				setNotice( {
					type: 'success',
					message: 'Reset done successfully!',
				} );
				resetOnboardingAISteps();

				if ( response.data.token ) {
					setTokenStep( response.data.token );
				}
				setDynamicContent( {} );
				setFilterBlocksPagesByCategory( '' );
				setFilterBlocksByCategory( '' );
			} else {
				setNotice( {
					type: 'error',
					message: 'Reset Failed!',
				} );
			}
		} );
	};

	const updateSettings = async ( keyName, value ) => {
		const data = {
			key: keyName,
			value,
		};

		try {
			await apiFetch( {
				path: '/gutenberg-templates/v1/settings',
				data,
				method: 'POST',
				headers: {
					'X-WP-Nonce': ast_block_template_vars.rest_api_nonce,
				},
			} ).then( ( response ) => {
				setAllBlocksData( response.blocks );
			} );
		} catch ( error ) {
			// Do nothing
			console.error( error );
		}
	};

	const options = [
		{
			label: () => {
				if ( ! token || ! businessDetails ) {
					return (
						<span className="flex items-center justify-start gap-2">
							{ __( 'Personalize Library', 'ast-block-templates' ) }
							<AIColorfulIcon />
						</span>
					);
				}
				return __( 'Update AI', 'ast-block-templates' );
			},
			description: () => {
				if ( ! token || ! businessDetails ) {
					return __(
						'Add details for the AI to suggest relevant text and images.',
						'ast-block-templates'
					);
				}
				return __(
					'Update the details for the AI to suggest new text and images.',
					'ast-block-templates'
				);
			},
			icon: <PencilSquareIcon className="text-icon-secondary h-5 w-5" />,
			onClick: ( event ) => {
				event.preventDefault();
				toggleOnboardingAIStep( true );
			},
			isHide: false,
			isDisabled: disableAi || ! adaptiveMode,
		},
		{
			label: () => {
				return __( 'Update images', 'ast-block-templates' );
			},
			description: __(
				'Revise the previously entered information from AI setup.',
				'ast-block-templates'
			),
			icon: <PhotoIcon className="text-icon-secondary h-5 w-5" />,
			onClick: ( event ) => {
				event.preventDefault();
				toggleUpdateOnboardingImages();
			},
			isHide: ! token || ! selectedImages?.length,
			isDisabled: disableAi || ! adaptiveMode,
		},
		{
			label: () => {
				return __( 'Reset AI Information', 'ast-block-templates' );
			},
			description: __(
				'Reset the previously entered information from AI setup and erase all the generated AI content.',
				'ast-block-templates'
			),
			icon: (
				<ArrowPathRoundedSquareIcon className="text-icon-secondary h-5 w-5" />
			),
			onClick: resetDetails,
			isHide:
				disableAi ||
				'yes' !== ast_block_template_vars.debug_mode ||
				! adaptiveMode,
			isDisabled: false,
		},
		{
			label: () => {
				return (
					<div className="flex justify-between">
						<span>{ __( 'Disable AI', 'ast-block-templates' ) }</span>
						<button
							type="button"
							className={ classNames(
								`bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-accent-spectra focus:ring-offset-2`,
								disableAi ? 'bg-accent-spectra' : 'bg-gray-200'
							) }
							role="switch"
							aria-checked="false"
							onClick={ () => {
								toggleDisableAiContent( ! disableAi );
								updateSettings( 'disable_ai', ! disableAi );
							} }
						>
							<span className="sr-only">Use setting</span>
							{ /* <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" --> */ }
							<span
								aria-hidden="true"
								className={ classNames(
									'translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
									disableAi
										? 'translate-x-5'
										: 'translate-x-0'
								) }
							></span>
						</button>
					</div>
				);
			},
			description: __(
				'This option will preview & import only wireframe (default) content and images.',
				'ast-block-templates'
			),
			icon: <PauseCircleIcon className="text-icon-secondary h-5 w-5" />,
			onClick: () => {},
			isHide: ! businessDetails,
			isDisabled: ! adaptiveMode,
		},
		{
			label: () => {
				return (
					<div className="flex justify-between">
						<span>
							{ __( 'Adaptive Mode', 'ast-block-templates' ) }
						</span>
						<button
							type="button"
							className={ classNames(
								`bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-accent-spectra focus:ring-offset-2`,
								adaptiveMode
									? 'bg-accent-spectra'
									: 'bg-gray-200'
							) }
							role="switch"
							aria-checked="true"
							onClick={ async () => {
								toggleAdaptiveMode( true );
								updateSettings( 'adaptive_mode', ! adaptiveMode );

								if ( adaptiveMode && ! disableAi ) {
									toggleDisableAiContent( true );
								}

								if ( ! adaptiveMode && disableAi ) {
									toggleDisableAiContent( true );
								}

								const formData = new window.FormData();
								formData.append(
									'action',
									'ast_block_templates_color_palette'
								);
								formData.append(
									'_ajax_nonce',
									ast_block_template_vars._ajax_nonce
								);
								formData.append( 'adaptive_mode', ! adaptiveMode );

								const response = await apiFetch( {
									url: ast_block_template_vars.ajax_url,
									method: 'POST',
									body: formData,
								} );
								if ( response ) {
									setActiveBlockPaletteSlug( 'style-1' );
									setActiveBlockPalette( response.data?.block[ 'style-1' ] );
									setBlockColorPaletteObj( response.data?.block );

									setActivePagePaletteSlug( 'style-1' );
									setActivePagePalette( response.data?.page[ 'style-1' ] );
									setPageColorPaletteObj( response.data?.page );
								}
							} }
						>
							<span className="sr-only">Use setting</span>
							{ /* <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" --> */ }
							<span
								aria-hidden="true"
								className={ classNames(
									'translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
									adaptiveMode
										? 'translate-x-5'
										: 'translate-x-0'
								) }
							></span>
						</button>
					</div>
				);
			},
			description: __(
				'By disabling see templates without personalized text, images, & theme styling.',
				'ast-block-templates'
			),
			icon: (
				<RectangleGroupIcon className="text-icon-secondary h-5 w-5" />
			),
			onClick: () => {},
		},
	];

	return (
		<Dropdown
			trigger={
				<ActionButton
					disabled={ Object.values( dynamicContentSyncStatus ).some(
						( item ) => !! item
					) }
					tooltip="Settings"
				>
					<Cog6ToothIcon className="h-6 w-6" />
				</ActionButton>
			}
			align="top"
			placement="left"
			width="w-[358px]"
			contentClassName="px-2 py-3 bg-white border border-solid border-border-primary"
			wrapperClassName="shadow-large"
		>
			{ options.map( ( option, index ) =>
				option.isHide ? null : (
					<div key={ index }>
						<Dropdown.Item
							as="div"
							className={ classNames(
								option.isHide ? 'hidden' : '',
								'px-2 py-3 grid grid-cols-1 gap-y-1 gap-x-2 justify-center h-fit transition duration-150 ease-in-out rounded-md hover:bg-background-secondary',
								option.isDisabled &&
									'opacity-50 cursor-not-allowed pointer-events-none'
							) }
							{ ...( true && {
								onClick: option.onClick,
							} ) }
						>
							<div className="flex flex-col items-start gap-1">
								<span className="text-base font-medium leading-6 text-nav-inactive w-full">
									{ option.label() }
								</span>
								<p className="m-0 text-sm text-border-secondary leading-5 font-normal">
									{ typeof option.description === 'function' ? (
										option.description()
									) : (
										option.description
									) }
								</p>
							</div>
						</Dropdown.Item>
						{ index !== options.length - 1 && (
							<Divider className="p-0 mx-2 my-4" />
						) }
					</div>
				)
			) }
		</Dropdown>
	);
};

export default compose(
	withSelect( ( select ) => {
		const {
			getDisableAi,
			getDisablePreview,
			getAdaptiveMode,
			getAiDesignCopilotStatus,
		} = select( 'ast-block-templates' );
		return {
			disableAi: getDisableAi(),
			adaptiveMode: getAdaptiveMode(),
			disablePreview: getDisablePreview(),
			aiCopilotStatus: getAiDesignCopilotStatus(),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const {
			setCurrentScreen,
			setAllBlocksData,
			setFilterBlocksByCategory,
			setTokenStep,
			setActiveBlockPaletteSlug,
			setActiveBlockPalette,
			setActivePagePaletteSlug,
			setActivePagePalette,
			setBlockColorPaletteObj,
			setPageColorPaletteObj,
		} = dispatch( 'ast-block-templates' );
		return {
			setCurrentScreen,
			setAllBlocksData,
			setFilterBlocksByCategory,
			setTokenStep,
			setActiveBlockPaletteSlug,
			setActiveBlockPalette,
			setActivePagePaletteSlug,
			setActivePagePalette,
			setBlockColorPaletteObj,
			setPageColorPaletteObj,
		};
	} )
)( memo( HeaderAIDropdown ) );
