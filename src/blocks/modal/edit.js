import React, { useEffect } from 'react';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import styling from './styling';
import Settings from './settings';
import Render from './render';

//  Import CSS.
import './style.scss';

import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';

const UAGBModalEdit = ( props ) => {
	useEffect( () => {

		const { setAttributes } = props;

		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-modal-style-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [ props ] );

	return (
		<React.Fragment>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</React.Fragment>
	);
}

export default compose(
	withSelect( ( select, ownProps ) => {

		let modalWrapper = document.querySelectorAll( '.wp-block-uagb-modal' );

		if ( modalWrapper.length === 0 ) {
			return;
		}

		for ( const content of modalWrapper ) {

			const modalTrigger = content.querySelector( '.uagb-modal-trigger' );
	
			if( typeof modalTrigger !== 'undefined' && modalTrigger ) {
	
				var innerModal = content.querySelector( '.uagb-modal-popup' );
	
				// if( ownProps.attributes.previewModal ) {
					modalTrigger.addEventListener(
						'click',
						function ( e ) {
							if ( typeof innerModal !== 'undefined' && ! innerModal.classList.contains( 'active' ) ) {
								innerModal.classList.add( 'active' );
		
								var bodyWrap = content.querySelector( 'body' );
								
								if ( typeof bodyWrap !== 'undefined' &&  ! bodyWrap.classList.contains( 'hide-scroll' ) ) {
									bodyWrap.classList.add( 'hide-scroll' );
								}
							}
						}
					)
		
					var closeModal = content.querySelector( '.uagb-modal-popup-close' );
		
					closeModal.addEventListener(
						'click',
						function ( e ) {
							if ( typeof innerModal !== 'undefined' && innerModal.classList.contains( 'active' ) ) {
								innerModal.classList.remove( 'active' );
							}
						}
					);
				// }
	
			}
		}

		return {
			modalWrapper,
		};
	} )
)( UAGBModalEdit );