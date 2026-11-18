import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { useModal } from '@ebay/nice-modal-react';
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { PuzzlePieceIcon } from '@heroicons/react/24/outline';
import Modal from '../modal';
import withModals from '../../../hoc/withModals';
import LoadingSpinner from '../loading-spinner/loading-spinner';
import Button from '../button/button';
import { install_plugin, activate_plugin } from '../../../utils/plugins';

export const PLUGIN_INSTALL_POPUP = 'PLUGIN_INSTALL_POPUP';

/**
 * Per-row installation state machine values.
 */
const STATE = {
	PENDING: 'pending',
	INSTALLING: 'installing',
	ACTIVATING: 'activating',
	DONE: 'done',
	ERROR: 'error',
};

const STATE_LABELS = {
	[ STATE.INSTALLING ]: __( 'Installing…', 'ast-block-templates' ),
	[ STATE.ACTIVATING ]: __( 'Activating…', 'ast-block-templates' ),
	[ STATE.DONE ]: __( 'Ready', 'ast-block-templates' ),
	[ STATE.ERROR ]: __( 'Failed', 'ast-block-templates' ),
};

/**
 * Consent / installation popup for the third-party plugins a pattern needs
 * before it can be inserted.
 *
 * Each plugin is listed with a checkbox (checked by default). The user clicks
 * "Install & Activate" to install/activate the selected plugins from
 * WordPress.org. Progress is shown per row and the popup auto-closes on success
 * so the import can proceed.
 *
 * Resolves the NiceModal promise with `{ success: boolean }`.
 *
 * @since x.x.x
 * @param {Object} props
 * @param {Array}  props.plugins Plugin definitions with `slug`, `init`, `name`, `status`.
 */
const PluginInstallPopup = ( { plugins = [] } ) => {
	const modalRef = useModal( PLUGIN_INSTALL_POPUP );
	const [ rows, setRows ] = useState( () =>
		plugins.map( ( plugin ) => ( {
			...plugin,
			state: STATE.PENDING,
			checked: true,
		} ) )
	);
	const [ hasError, setHasError ] = useState( false );
	const [ running, setRunning ] = useState( false );

	const selectedCount = rows.filter( ( row ) => row.checked ).length;

	const updateRow = ( slug, changes ) => {
		setRows( ( prev ) =>
			prev.map( ( row ) =>
				row.slug === slug ? { ...row, ...changes } : row
			)
		);
	};

	const toggleRow = ( slug ) => {
		setRows( ( prev ) =>
			prev.map( ( row ) =>
				row.slug === slug ? { ...row, checked: ! row.checked } : row
			)
		);
	};

	const finish = ( success ) => {
		modalRef.resolve( { success } );
		modalRef.hide();
		modalRef.remove();
	};

	const runInstall = async () => {
		setHasError( false );
		setRunning( true );

		let failed = false;

		for ( const plugin of rows ) {
			// Skip unchecked plugins and ones already installed in a prior run.
			if ( ! plugin.checked || plugin.state === STATE.DONE ) {
				continue;
			}

			try {
				if ( plugin.status === 'not-installed' ) {
					updateRow( plugin.slug, { state: STATE.INSTALLING } );
					await install_plugin( plugin );
				}
				updateRow( plugin.slug, { state: STATE.ACTIVATING } );
				await activate_plugin( plugin );
				updateRow( plugin.slug, { state: STATE.DONE } );
			} catch ( error ) {
				updateRow( plugin.slug, { state: STATE.ERROR } );
				failed = true;
				break;
			}
		}

		setRunning( false );

		if ( failed ) {
			setHasError( true );
			return;
		}

		// Brief pause so the user sees the completed state, then proceed.
		setTimeout( () => finish( true ), 700 );
	};

	const renderRowStatus = ( row ) => {
		if ( row.state === STATE.DONE ) {
			return (
				<CheckCircleIcon className="size-5 shrink-0 text-accent-st-secondary" />
			);
		}
		if ( row.state === STATE.ERROR ) {
			return (
				<ExclamationCircleIcon className="size-5 shrink-0 text-alert-error" />
			);
		}
		if (
			row.state === STATE.INSTALLING ||
			row.state === STATE.ACTIVATING
		) {
			return (
				<span className="flex items-center gap-2 text-xs font-medium text-body-text">
					{ STATE_LABELS[ row.state ] }
					<LoadingSpinner className="size-5 shrink-0" />
				</span>
			);
		}
		return null;
	};

	const primaryLabel = () => {
		if ( running ) {
			return __( 'Installing…', 'ast-block-templates' );
		}
		if ( hasError ) {
			return __( 'Retry', 'ast-block-templates' );
		}
		return __( 'Install & Activate', 'ast-block-templates' );
	};

	return (
		<Modal
			open={ modalRef.visible }
			setOpen={ () => finish( false ) }
			width={ 520 }
			closeButton={ true }
			overlayClassName="bg-black/30"
		>
			<div className="space-y-2">
				<h2 className="m-0 text-lg font-semibold text-heading-text">
					{ __( 'Install required plugins', 'ast-block-templates' ) }
				</h2>
				<p className="m-0 text-sm text-body-text">
					{ __(
						'This pattern needs the following plugins to render correctly. Selected plugins will be installed from WordPress.org and activated on your site.',
						'ast-block-templates'
					) }
				</p>
			</div>

			<ul className="m-0 list-none space-y-3 p-0">
				{ rows.map( ( row ) => (
					<li
						key={ row.slug }
						className="flex items-center justify-between gap-3 rounded-md border border-solid border-border-primary p-3"
					>
						<div className="flex items-center gap-3">
							<input
								type="checkbox"
								checked={ row.checked }
								disabled={ running || row.state === STATE.DONE }
								onChange={ () => toggleRow( row.slug ) }
								className="size-4 shrink-0 cursor-pointer accent-accent-spectra"
								aria-label={ row.name }
							/>
							{ row.logo ? (
								<img
									src={ row.logo }
									alt={ row.name }
									className="size-9 shrink-0 rounded object-contain"
								/>
							) : (
								<PuzzlePieceIcon className="size-9 shrink-0 rounded p-1.5 text-body-text" />
							) }
							<div className="text-left">
								<span className="block text-sm font-medium text-heading-text">
									{ row.name }
								</span>
								<span className="block text-xs text-body-text">
									{ row.author }
								</span>
							</div>
						</div>
						<div className="flex shrink-0 items-center gap-2">
							{ renderRowStatus( row ) }
						</div>
					</li>
				) ) }
			</ul>

			<div className="flex items-center justify-end gap-3">
				<Button
					variant="white"
					isSmall
					onClick={ () => finish( false ) }
					disabled={ running }
				>
					{ __( 'Cancel', 'ast-block-templates' ) }
				</Button>
				<Button
					variant="primary"
					isSmall
					onClick={ runInstall }
					disabled={ running || selectedCount === 0 }
					hasPrefixIcon={ running }
				>
					{ running && <LoadingSpinner className="size-4 !shrink-0" /> }
					{ primaryLabel() }
				</Button>
			</div>
		</Modal>
	);
};

export default withModals( PluginInstallPopup, PLUGIN_INSTALL_POPUP );
