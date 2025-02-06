import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Switch, Badge, Skeleton, Tooltip } from '@bsf/force-ui';
import getApiData from '@Controls/getApiData';
import { useCallback, useEffect, useState } from 'react';
import { debounce } from '@Helpers/Helpers';
import './BlockItem.scss';

const BlockItem = ( { block, is_extension } ) => {
	const dispatch = useDispatch();
	const enableExtension = useSelector( ( state ) => state[ block.extensionKey ] || null );

	const blocksStatuses = useSelector( ( state ) => state.blocksStatuses );
	const coreBlocks = useSelector( ( state ) => state.coreBlocks );

	const [ isLoading, setIsLoading ] = useState( true );

	const ExtensionStatus = 'disabled' === enableExtension ? false : true;

	// Debounce function to limit the rate of execution of a function.
	const debouncedApiCall = useCallback(
		debounce( ( currentStatus ) => {
			const data = {
				security: block.nonce,
				value: currentStatus,
			};

			const getApiDataFetch = getApiData( {
				url: uag_react.ajax_url,
				action: block.action,
				data,
			} );

			getApiDataFetch.then( () => {} );
		}, 300 ), // Adjust the delay as needed.
		[ enableExtension ]
	);

	const updateExtensionStatus = ( trigger = null ) => {
		let assetStatus;

		if ( trigger === null ) {
			assetStatus = enableExtension === 'disabled' ? 'enabled' : 'disabled';
		} else {
			assetStatus = block.trigger ? 'enabled' : 'disabled';
		}

		dispatch( { type: block.actionType, payload: assetStatus } );
		dispatch( {
			type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION',
			payload: __( 'Successfully saved!', 'ultimate-addons-for-gutenberg' ),
		} );
		debouncedApiCall( assetStatus ); // Call the debounced function.
	};

	useEffect( () => {
		if ( block.is_extension && ! ( block.is_pro && uag_react.pro_plugin_status !== 'Activated' ) ) {
			block.onChange( ( prev ) => ( {
				...prev,
				[ block.slug ]: ExtensionStatus,
			} ) );
		}
	}, [ ExtensionStatus, block.trigger ] );

	useEffect( () => {
		if ( block.trigger === true || block.trigger === false ) {
			updateExtensionStatus( block.trigger );
		}
	}, [ block.trigger ] );

	useEffect( () => {
		if ( blocksStatuses.length === 0 ) {
			setIsLoading( true );
		} else {
			setIsLoading( false );
		}
	}, [ blocksStatuses, enableExtension ] );

	if ( ! is_extension ) {
		const isCoreBlock = coreBlocks.includes( block.slug );

		const blockActivationStatus = 'disabled' === blocksStatuses[ block.slug ] && ! isCoreBlock ? false : true;

		const updateBlockStatus = () => {
			let status = 'disabled';

			if ( ! blockActivationStatus ) {
				status = block.slug;
			}

			const optionsClone = { ...blocksStatuses };
			optionsClone[ block.slug ] = status;

			dispatch( { type: 'UPDATE_BLOCK_STATUSES', payload: optionsClone } );

			// Create an object with the security and value properties
			const data = {
				security: uag_react.blocks_activation_and_deactivation_nonce,
				value: JSON.stringify( optionsClone ),
				status: '',
			};

			// Call the getApiData function with the specified parameters
			const getApiFetchData = getApiData( {
				url: uag_react.ajax_url,
				action: 'uag_blocks_activation_and_deactivation',
				data,
			} );

			// Wait for the API call to complete, then update the state to show a notification that the settings have been saved
			getApiFetchData.then( () => {
				dispatch( {
					type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION',
					payload: __( 'Successfully saved!', 'ultimate-addons-for-gutenberg' ),
				} );
			} );
		};

		if ( isLoading ) {
			return (
				<>
					<Skeleton className="w-12 h-2 rounded-md mb-2" />
					<Skeleton className="w-16 h-2 rounded-md mb-2" />
					<Skeleton className="w-12 h-2 rounded-md mb-2" />
				</>
			);
		}

		return (
			<Container align="center" containerType="flex" direction="column" justify="between" gap="">
				<div className="flex items-center justify-between w-full mb-1 p-1">
					<div style={ { fontSize: '22px' } }>{ block.icon }</div>

					<div className="flex items-center gap-x-2">
						{ block.is_pro && uag_react.pro_plugin_status !== 'Activated' ? (
							<Badge label="PRO" size="xs" type="pill" variant="inverse" />
						) : (
							<>
								{ isCoreBlock ? (
									<Tooltip
										arrow
										content={
											<span>
												{ __( 'Core blocks are essential for Spectra\'s operation and cannot be turned off.', 'ultimate-addons-for-gutenberg' ) }
											</span>
										}
										placement="bottom"
										title={ __( 'Core Block', 'ultimate-addons-for-gutenberg' ) }
										triggers={ [ 'hover', 'focus' ] }
										variant="dark"
									>
										<Switch
											size="sm"
											value={ blockActivationStatus }
											onChange={ updateBlockStatus }
											disabled={ true }
											className="switch-disabled uagb-remove-ring border-none"
										/>
									</Tooltip>
								) : (
									<Switch
										size="sm"
										value={ blockActivationStatus }
										onChange={ updateBlockStatus }
										className="uagb-remove-ring border-none"
									/>
								) }
							</>
						) }
					</div>
				</div>

				<div className="flex flex-col w-full p-1">
					<p className="text-sm font-medium text-text-primary m-0">{ block.title }</p>
					<div className="flex items-center justify-between w-full">
						<a
							href={ `https://wpspectra.com/blocks-and-extensions/${ block.link }` }
							target="_blank"
							rel="noreferrer"
							className="mt-1 text-text-tertiary no-underline"
						>
							{ __( 'Demo', 'ultimate-addons-for-gutenberg' ) }
						</a>
					</div>
				</div>
			</Container>
		);
	}

	if ( isLoading ) {
		return (
			<>
				<Skeleton className="w-12 h-2 rounded-md mb-2" />
				<Skeleton className="w-16 h-2 rounded-md mb-2" />
				<Skeleton className="w-12 h-2 rounded-md mb-2" />
			</>
		);
	}

	return (
		<Container align="center" containerType="flex" direction="column" justify="between" gap="">
			<div className="flex items-center justify-between w-full mb-1 p-1">
				<div style={ { fontSize: '22px' } }>{ block.icon }</div>

				<div className="flex items-center gap-x-2">
					{ block.is_pro && uag_react.pro_plugin_status !== 'Activated' ? (
						<Badge label="PRO" size="xs" type="pill" variant="inverse" />
					) : (
						<div className="flex items-center gap-2">
							{ block.slug === 'motion-effects' ? (
							    <Badge
									label={ __( 'beta', 'ultimate-addons-for-gutenberg' ) }
									size="xs"
									type="pill"
									variant="blue"
							    />
							) : (
									<Badge
										label={ __( 'Extension', 'ultimate-addons-for-gutenberg' ) }
										size="xs"
										type="pill"
										variant="yellow"
									/>
						        )
					        }

							<Switch
								size="sm"
								value={ ExtensionStatus }
								className="uagb-remove-ring border-none"
								onChange={ () => updateExtensionStatus() }
							/>
						</div>
					) }
				</div>
			</div>

			<div className="flex flex-col w-full p-1">
				<p className="text-sm font-medium text-text-primary m-0">{ block.title }</p>
				<div className="flex items-center justify-between w-full">
					<a
						href={ `https://wpspectra.com/blocks-and-extensions/${ block.link }` }
						target="_blank"
						rel="noreferrer"
						className="mt-1 text-text-tertiary no-underline"
					>
						{ __( 'Documentation', 'ultimate-addons-for-gutenberg' ) }
					</a>
				</div>
			</div>
		</Container>
	);
};

export default BlockItem;
