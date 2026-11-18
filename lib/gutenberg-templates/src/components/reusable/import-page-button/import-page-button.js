import { useSelect, useDispatch } from '@wordpress/data';
import { useState, memo, useRef } from '@wordpress/element';
import importer from '../../../utils/kit-importer';
import { install_plugin, activate_plugin } from '../../../utils/plugins';
import { block_api_request } from '../../../utils/rest-api';
import { classNames, getSpectraStatus } from '../../../utils/helpers';
import { STORE_KEY } from '../../../store';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import Button from '../button/button';
import { toast } from 'react-toastify';
import toaster from '../toaster';
import ConfirmationPopup from '../confirmation-popup/confirmation-popup';
import { __ } from '@wordpress/i18n';
const { post } = wp.ajax;

const ImportPageButton = ( { className, disabled } ) => {
	const { insertBlocks } = wp.data.dispatch( 'core/block-editor' );
	const { pagePreview } = useSelect( ( select ) => {
		const { getPagePreview } = select( STORE_KEY );
		return {
			pagePreview: getPagePreview(),
		};
	}, [] );
	const { setTogglePopup: onSetTogglePopup, setImportInProgress } =
		useDispatch( STORE_KEY );

	let blockInfo = [];
	const [ startImport, setStartImport ] = useState( false ),
		[ showDynamicPopup, setShowDynamicPopup ] = useState( false ),
		toastRef = useRef( null );

	const item = pagePreview;
	const AllRequiredPlugins = pagePreview[ 'required-plugins' ]
			? pagePreview[ 'required-plugins' ].filter(
					( plugin ) => 'wpforms-lite' === plugin.slug
			  )
			: [],
		spectraPluginStatus = getSpectraStatus();

	const { insertIndex, insertClientID } = wp.data.useSelect( ( select ) => {
		const { index, rootClientId } =
			select( 'core/block-editor' ).getBlockInsertionPoint();
		return {
			insertIndex: index,
			insertClientID: rootClientId,
		};
	}, [] );

	const triggerToast = ( { title, message, type } ) => {
		if ( ! toastRef.current ) {
			return ( toastRef.current = toast(
				toaster( {
					title,
					message,
				} ),
				toaster.getOptions( { type } )
			) );
		}

		toast.update( toastRef.current, {
			...toaster.getOptions( { type } ),
			render: toaster( {
				title,
				message,
			} ),
		} );
	};

	const toasts = {
		success: () => {
			triggerToast( {
				title: __( 'Template Inserted', 'ast-block-templates' ),
				message: __( 'Template inserted successfully.', 'ast-block-templates' ),
				type: 'success',
			} );
		},
		error: () => {
			triggerToast( {
				title: __( 'Failed!', 'ast-block-templates' ),
				message: __( 'Failed to insert template.', 'ast-block-templates' ),
				type: 'error',
			} );
		},
	};

	const install_forms = ( plugin ) => {
		install_plugin( plugin )
			.then( () => {
				// Import template.
				activate_forms( plugin );
			} )
			.catch( () => {
				setBlockImportProcess( false );
				toasts.error();
			} );
	};

	const activate_forms = ( plugin ) => {
		activate_plugin( plugin )
			.then( () => {
				start_import_process();
			} )
			.catch( () => {
				setBlockImportProcess( false );
				toasts.error();
			} );
	};
	const setBlockImportProcess = ( value ) => {
		setStartImport( value );
		setImportInProgress( value );
	};

	const start_import_process = () => {
		const wpformsUrl = blockInfo[ 'astra-site-wpforms-path' ] || '';
		const sureformsUrl = blockInfo?.[ 'astra-site-sureforms-path' ] || '';

		const hasWpFormsLite =
			blockInfo[ 'site-pages-required-plugins' ] &&
			blockInfo[ 'site-pages-required-plugins' ].some(
				( plugin ) => plugin.slug === 'wpforms-lite'
			);
		const hasSureForms =
			blockInfo[ 'site-pages-required-plugins' ] &&
			blockInfo[ 'site-pages-required-plugins' ].some(
				( plugin ) => plugin.slug === 'sureforms'
			);

		if ( wpformsUrl && hasWpFormsLite ) {
			import_forms( 'wpforms' );
		} else if ( sureformsUrl && hasSureForms ) {
			import_forms( 'sureforms' );
		} else {
			importer(
				item[ 'astra-page-api-url' ],
				insertBlocks,
				onSetTogglePopup,
				insertIndex,
				insertClientID,
				() => {
					setBlockImportProcess( false );
					toasts.success();
				},
				toasts.error,
				item?.ID
			);
		}
	};

	const import_forms = ( formType ) => {
		post( {
			action: `ast_block_templates_import_${ formType }`,
			id: item.ID,
			_ajax_nonce: ast_block_template_vars._ajax_nonce,
		} )
			.done( () => {
				// Import block.
				importer(
					item[ 'astra-page-api-url' ],
					insertBlocks,
					onSetTogglePopup,
					insertIndex,
					insertClientID
				);
			} )
			.fail( () => {
				setBlockImportProcess( false );
				toasts.error();
			} );
	};

	const handleStartImport = async () => {
		if ( startImport || disabled ) {
			return;
		}
		setStartImport( true );
		setImportInProgress( true );

		triggerToast( {
			title: 'Inserting Template..',
			message: 'Inserting selected template.',
			type: 'importing-site',
		} );
		block_api_request( item.ID, 'site-pages' ).then( ( data ) => {
			blockInfo = data;
			if ( AllRequiredPlugins.length ) {
				const formPlugins = [
					{
						slug: 'wpforms-lite',
						init: 'wpforms-lite/wpforms.php',
						name: 'WPForms Lite',
						status: ast_block_template_vars.wpforms_status,
					},
					{
						slug: 'sureforms',
						init: 'sureforms/sureforms.php',
						name: 'SureForms',
						status: ast_block_template_vars.sureforms_status,
					},
				];

				formPlugins.forEach( ( plugin ) => {
					if ( AllRequiredPlugins?.find( ( p ) => p?.slug === plugin.slug ) ) {
						if ( plugin.status === 'not-installed' ) {
							install_forms( plugin );
						} else if ( plugin.status === 'inactive' ) {
							activate_forms( plugin );
						} else {
							start_import_process();
						}
					}
				} );
			} else {
				start_import_process();
			}
		} ).catch( () => {
			setBlockImportProcess( false );
			toasts.error();
		} );
	};

	const handleClickImport = () => {
		if ( disabled ) {
			return;
		}
		if ( pagePreview[ 'dynamic-page' ] === 'yes' ) {
			return setShowDynamicPopup( true );
		}
		handleStartImport();
	};

	const getInsertButtonContent = () => {
		return (
			<>
				<span className="hidden sm:inline">{ __( 'Insert Template', 'ast-block-templates' ) }</span>
				<ArrowDownTrayIcon className="sm:size-5 size-6" />
			</>
		);
	};

	return (
		<>
			<Button
				className={ classNames(
					'lg:grow-[2] w-full lg:w-auto min-w-fit',
					className
				) }
				variant="primary"
				hasSuffixIcon={ spectraPluginStatus.active }
				onClick={ handleClickImport }
				disabled={ disabled || startImport }
			>
				{ getInsertButtonContent() }
			</Button>
			<ConfirmationPopup
				open={ showDynamicPopup }
				setOpen={ setShowDynamicPopup }
				title="Heads Up!"
				description={ __(
					"This template includes dynamic content that won't carry over with the import. You'll need to manually add this dynamic data to the page.",
					'ast-block-templates'
				) }
				confirmBtnTitle={ __( `Skip & Import` ) }
				cancelBtnTitle={ __( 'Cancel' ) }
				onClickConfirm={ () => {
					setShowDynamicPopup( false );
					handleStartImport();
				} }
				onClickCancel={ () => setShowDynamicPopup( false ) }
				variant="info"
			/>
		</>
	);
};

export default memo( ImportPageButton );
