/**
 * EXTENSION: Animation Extension Admin Dashboard Card
 */

import { __ } from '@wordpress/i18n';
import { useDispatch, useSelector } from 'react-redux';
import UAGB_Block_Icons from '@Common/block-icons';
import { useCallback } from '@wordpress/element';
import { debounce } from '@Helpers/Helpers';
import getApiData from '@Controls/getApiData';
import { Container } from '@bsf/force-ui';
import BlockItem from '@Common/components/BlockItem';
import { updateAnimationsExtensionStatus } from './UtilityFunctions';
import React, { useEffect } from 'react';

const AnimationsExtension = ( { trigger, searchTerm, status } ) => {
	const enableAnimationsExtension = useSelector( ( state ) => state.enableAnimationsExtension );
	const dispatch = useDispatch();

	const animationExtensionStatus = 'disabled' === enableAnimationsExtension ? false : true;

	// Debounce function to limit the rate of execution of a function.
	const debouncedApiCall = useCallback(
		debounce( ( currentStatus ) => {
			const data = {
				security: uag_react.enable_animations_extension_nonce,
				value: currentStatus,
			};

			const getApiDataFetch = getApiData( {
				url: uag_react.ajax_url,
				action: 'uag_enable_animations_extension',
				data,
			} );

			getApiDataFetch.then( () => {} );
		}, 300 ), // Adjust the delay as needed.
		[ enableAnimationsExtension ]
	);

	const IconElement = UAGB_Block_Icons[ 'animations-extension' ];
	const icon = React.cloneElement( IconElement, { className: 'w-5 h-5' } );

	const block = {
		icon,
		title: __( 'Animations', 'ultimate-addons-for-gutenberg' ),
		is_pro: false,
		slug: 'animations',
	};

	useEffect( () => {
		if ( trigger === true || trigger === false ) {
			updateAnimationsExtensionStatus( enableAnimationsExtension, debouncedApiCall, dispatch, trigger );
		}
	}, [ trigger ] );

	if ( searchTerm.length > 0 && ! block.title.toLowerCase().includes( searchTerm.toLowerCase() ) ) return null;

	if ( status !== animationExtensionStatus && status !== null ) return null;

	return (
		<Container.Item
			key={ block.id }
			alignSelf="auto"
			className="text-wrap rounded-md bg-background-primary p-2 shadow hover:shadow-hover"
		>
			<BlockItem
				block={ block }
				updateCounter={ 0 }
				is_extension={ true }
				checked={ animationExtensionStatus }
				onChange={ () =>
					updateAnimationsExtensionStatus( enableAnimationsExtension, debouncedApiCall, dispatch )
				}
			/>
		</Container.Item>
	);
};

export default AnimationsExtension;
