/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import AddStaticStyles from '@Controls/AddStaticStyles';
import addInitialAttr from '@Controls/addInitialAttr';
import { useState, useLayoutEffect, useEffect } from '@wordpress/element';
import styles from '../editor.lazy.scss';
import { InspectorControls } from '@wordpress/block-editor';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, { UAGTabs } from '@Components/inspector-tabs/InspectorTab.js';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import { handlePluginActivation } from '../block';
import { select, dispatch } from '@wordpress/data';
const Edit = ( props ) => {
	const { clientId, isSelected, deviceType } = props;
	useEffect( () => {
		if ( isSelected ) {
			let editorStore = null;

			if ( select( 'core/edit-site' ) ) {
				editorStore = 'core/edit-site';
			} else if ( select( 'core/edit-post' ) ) {
				editorStore = 'core/edit-post';
			}

			if ( editorStore ) {
				dispatch( editorStore ).openGeneralSidebar( 'edit-post/block' );
			}
		}
	}, [ clientId, isSelected ] );
	const sureCartNotInstalled = uagb_blocks_info.status_of_surecart === 'not-installed';

	// Activation function for SureCart
	const activateSureCart = async ( e ) => {
		const { status_of_surecart: status } = uagb_blocks_info;
		const button = e.target;

		if ( status === 'not-installed' ) {
			await handlePluginActivation( button, 'uagb_surecart', {
				error: 'Installation Failed',
				blockTextStart: 'Installing SureCart.',
				blockTextSuccess: 'Activating SureCart.',
			}, setSureCartBlockHelper );
		} else if ( status === 'inactive' ) {
			await handlePluginActivation( button, 'uagb_surecart', {
				error: 'Activation Failed',
				blockTextStart: 'Activating SureCart.',
				blockTextSuccess: 'SureCart Activated.',
			}, setSureCartBlockHelper );
		}
	};

	const [sureCartBlockHelper, setSureCartBlockHelper] = useState( () => {
		if ( sureCartNotInstalled ) {
			return (
				<span>
					{__( 'Please ', 'ultimate-addons-for-gutenberg' )}
					<button
						type="button"
						className="link-button components-button is-link"
						onClick={activateSureCart}
					>
						{__( 'install and activate', 'ultimate-addons-for-gutenberg' )}
					</button>
					{__( ' SureCart to use this block.', 'ultimate-addons-for-gutenberg' )}
				</span>
			);
		} 
			return (
				<span>
					{__( 'Please ', 'ultimate-addons-for-gutenberg' )}
					<button
						type="button"
						className="link-button components-button is-link"
						onClick={activateSureCart}
					>
						{__( 'activate', 'ultimate-addons-for-gutenberg' )}
					</button>
					{__( ' SureCart to use this block.', 'ultimate-addons-for-gutenberg' )}
				</span>
			);
		
	} );

	let imgUrl = uagb_blocks_info.uagb_url;
	imgUrl += '/assets/images/block-previews/frame-product-list.png';

	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );
	return (
		<>
			<div className="uagb-sure-cart-product-container" style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: ( 'Mobile' === deviceType ) ? 'contain' : 'auto' }}>
			</div>
			{isSelected &&
				<InspectorControls>
					<InspectorTabs tabs={['general', 'advance']}>
						<InspectorTab {...UAGTabs.general}>
							<UAGAdvancedPanelBody initialOpen={true}>
								<p className="uagb-form-notice">
									{sureCartBlockHelper}
								</p>
							</UAGAdvancedPanelBody>
						</InspectorTab>
						<InspectorTab {...UAGTabs.advance} parentProps={props}></InspectorTab>
					</InspectorTabs>
				</InspectorControls>
			}
		</>
	);
};

export default compose(
	addInitialAttr,
	AddStaticStyles,
)( Edit );