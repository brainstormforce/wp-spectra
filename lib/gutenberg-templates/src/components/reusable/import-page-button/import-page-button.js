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

const { post } = wp.ajax;

const ImportPageButton = ( {
	className,
	disabled,
} ) => {
	const { insertBlocks } = wp.data.dispatch( 'core/block-editor' );
	const {
		pagePreview,
	} = useSelect( ( select ) => {
		const { getPagePreview } = select( STORE_KEY );
		return {
			pagePreview: getPagePreview(),
		};
	}, [] );
	const { setTogglePopup: onSetTogglePopup } = useDispatch( STORE_KEY );

	let blockInfo = [];
	const [ startImport, setStartImport ] = useState( false ),
		[ showDynamicPopup, setShowDynamicPopup ] = useState( false ),
		toastRef = useRef( null );

	const item = pagePreview;
	const AllRequiredPlugins = pagePreview[ 'required-plugins' ]
			? pagePreview[ 'required-plugins' ].filter( ( plugin ) => 'wpforms-lite' === plugin.slug )
			: [],
		spectraPluginStatus = getSpectraStatus();

	const { insertIndex, insertClientID } = wp.data.useSelect( ( select ) => {
		const { index, rootClientId } = select(
			'core/block-editor'
		).getBlockInsertionPoint();
		return {
			insertIndex: index,
			insertClientID: rootClientId,
		};
	}, [] );

	const triggerToast = ( { title, message, type } ) => {
		if ( ! toastRef.current ) {
			return toastRef.current = toast(
				toaster( {
					title,
					message,
				} ),
				toaster.getOptions( { type } )
			);
		}

		toast.update(
			toastRef.current,
			{
				...toaster.getOptions( { type } ),
				render: toaster(
					{
						title,
						message,
					}
				),
			}
		);
	};

	const toasts = {
		success: () => {
			triggerToast( {
				title: 'Template Inserted',
				message: 'Template inserted successfully.',
				type: 'success',
			} );
		},
		error: () => {
			triggerToast( {
				title: 'Failed!',
				message: 'Failed to insert template.',
				type: 'error',
			} );
		},
	};

	const install_spectra = async () => {
		try {
			await install_plugin( {
				slug: 'ultimate-addons-for-gutenberg',
				init: 'ultimate-addons-for-gutenberg/ultimate-addons-for-gutenberg.php',
				name: 'Spectra',
			} );
			await activate_spectra();
		} catch ( error ) {
			setStartImport( false );
			toasts.error();
		}
	};

	const activate_spectra = async () => {
		try {
			await activate_plugin( {
				slug: 'ultimate-addons-for-gutenberg',
				init: 'ultimate-addons-for-gutenberg/ultimate-addons-for-gutenberg.php',
				name: 'Spectra',
			} );
		} catch ( error ) {
			setStartImport( false );
			toasts.error();
		}
	};

	const install_wpforms = () => {
		install_plugin( {
			slug: 'wpforms-lite',
			init: 'wpforms-lite/wpforms.php',
			name: 'WPForms Lite',
		} )
			.then( ( ) => {
				// Import template.
				activate_wpforms();
			} )
			.catch( ( ) => {
				setStartImport( false );
				toasts.error();
			} );
	};

	const activate_wpforms = () => {
		activate_plugin( {
			slug: 'wpforms-lite',
			init: 'wpforms-lite/wpforms.php',
			name: 'WPForms Lite',
		} )
			.then( ( ) => {
				start_import_process();
			} )
			.catch( () => {
				setStartImport( false );
				toasts.error();
			} );
	};

	const start_import_process = () => {
		const wpforms_url = blockInfo[ 'astra-site-wpforms-path' ] || '';
		const hasWpFormsLite = blockInfo[ 'site-pages-required-plugins' ] && blockInfo[ 'site-pages-required-plugins' ].some( ( plugin ) => plugin.slug === 'wpforms-lite' );

		if ( wpforms_url && hasWpFormsLite ) {
			import_wpforms( wpforms_url );
		} else {
			importer(
				item[ 'astra-page-api-url' ],
				insertBlocks,
				onSetTogglePopup,
				insertIndex,
				insertClientID,
				toasts.success,
				toasts.error
			);
		}
	};

	const import_wpforms = () => {
		post( {
			action: 'ast_block_templates_import_wpforms',
			id: item.ID,
			_ajax_nonce: ast_block_template_vars._ajax_nonce,
		} )
			.done( ( ) => {
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
				setStartImport( false );
				toasts.error();
			} );
	};

	const handleStartImport = async () => {
		if ( startImport || disabled ) {
			return;
		}
		setStartImport( true );

		triggerToast( {
			title: 'Inserting Template..',
			message: 'Inserting selected template.',
			type: 'importing-site',
		} );

		if (
			spectraPluginStatus.notInstalled
		) {
			await install_spectra();
		} else if (
			spectraPluginStatus.inactive
		) {
			await activate_spectra();
		}

		block_api_request( item.ID, 'site-pages' ).then( ( data ) => {
			blockInfo = data;
			if ( AllRequiredPlugins.length ) {
				if (
					'not-installed' ===
					ast_block_template_vars.wpforms_status
				) {
					install_wpforms();
				} else if (
					'inactive' === ast_block_template_vars.wpforms_status
				) {
					activate_wpforms();
				} else {
					start_import_process();
				}
			} else {
				start_import_process();
			}
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
		if ( spectraPluginStatus.notInstalled ) {
			return 'Install Spectra & Insert';
		}

		if ( spectraPluginStatus.inactive ) {
			return 'Activate Spectra & Insert';
		}

		return (
			<>
				<span>Insert Template</span>
				<ArrowDownTrayIcon className="w-5 h-5" />
			</>
		);
	};

	return (
		<>
			<Button
				className={ classNames(
					'lg:grow-[2] w-full lg:w-auto min-w-fit',
					className,
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
				description={ (
					<>
						The page template you are about to import contains a dynamic widget/module. Please note this dynamic data will not be available with the imported page.<br /><br />
						You will need to add it manually on the page.
					</>
				) }
				confirmBtnTitle={ `Skip & Import ${ pagePreview.title } Page` }
				cancelBtnTitle="Cancel"
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
