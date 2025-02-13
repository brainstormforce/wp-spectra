import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Switch, Badge } from '@bsf/force-ui';
import getApiData from '@Controls/getApiData';

const BlockItem = ( { block } ) => {
	const { icon, title, is_pro, slug } = block;

	const dispatch = useDispatch();

	const blocksStatuses = useSelector( ( state ) => state.blocksStatuses );
	const coreBlocks = useSelector( ( state ) => state.coreBlocks );
	const isCoreBlock = coreBlocks.includes( slug );

	const blockActivationStatus = 'disabled' === blocksStatuses[ slug ] && ! isCoreBlock ? false : true;

	const updateBlockStatus = () => {
		let status = 'disabled';

		if ( ! blockActivationStatus ) {
			status = slug;
		}

		const optionsClone = { ...blocksStatuses };
		optionsClone[ slug ] = status;

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
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
		} );
	};

	return (
		<Container align="center" containerType="flex" direction="column" justify="between" gap="">
			<div className="flex items-center justify-between w-full mb-1 p-1">
				<div style={ { fontSize: '22px' } }>{ icon }</div>

				<div className="flex items-center gap-x-2">
					{ is_pro && uag_react.pro_plugin_status !== 'Activated' ? (
						<Badge label="PRO" size="xs" type="pill" variant="inverse" />
					) : (
						<Switch
							size="sm"
							value={ blockActivationStatus }
							onChange={ updateBlockStatus }
							className="uagb-remove-ring"
						/>
					) }
				</div>
			</div>

			<div className="flex flex-col w-full p-1">
				<p className="text-sm font-medium text-text-primary m-0">{ title }</p>
				<div className="flex items-center justify-between w-full">
					<div className="mt-1 text-text-tertiary">{ __( 'Demo', 'ultimate-addons-for-gutenberg' ) }</div>
				</div>
			</div>
		</Container>
	);
};

export default BlockItem;
