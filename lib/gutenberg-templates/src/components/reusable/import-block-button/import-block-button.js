const { compose } = wp.compose;
const { useSelect, withSelect, withDispatch } = wp.data;
const { post } = wp.ajax;
const { parse } = wp.blocks;
const { useState, memo, useEffect, useCallback } = wp.element;
const { Spinner } = wp.components;

import importer from './../../../utils/importer';

import { install_plugin, activate_plugin } from '../../../utils/plugins';
import { PHP } from '../../../utils/serialize';
import { block_api_request } from '../../../utils/rest-api';

import './import-block-button.scss';

const useStateCallback = (initialState) => {
	const [state, setState] = useState(initialState);
	const setter = useCallback((state, callback) => {
		setState(state);
		return typeof callback === 'function' && callback(state);
	}, []);
	return [state, setter];
};

const ImportBlockButton = ({
	setImportItemInfo,
	liveRequest,
	requiredPlugins,
	importItemInfo,
	title,
	btnClass,
	currentScreen,
	insertBlocks,
	onSetTogglePopup,
	item,
	withIcon,
}) => {
	let [blockInfo, setBlockInfo] = useState(importItemInfo);
	let SendliveRequest = liveRequest ? liveRequest : false;
	let AllRequiredPlugins = requiredPlugins ? requiredPlugins : [];
	let buttonClass = btnClass ? btnClass : '';
	let buttonTitle = title ? title : 'Import';
	let displayClass =
		'full-width-block-preview' === currentScreen ? 'show' : '';

	let [startImport, setStartImport] = useState(false);

	const { insertIndex, insertClientID } = useSelect((select) => {
		let { index, rootClientId } = select(
			'core/block-editor'
		).getBlockInsertionPoint();
		return {
			insertIndex: index,
			insertClientID: rootClientId,
		};
	}, []);

	const install_wpforms = () => {

		install_plugin({
			slug: 'wpforms-lite',
			init: 'wpforms-lite/wpforms.php',
			name: 'WPForms Lite',
		})
			.then((data) => {
				// Import template.
				activate_wpforms();
			})
			.catch((data) => {
			});
	};

	const activate_wpforms = () => {
		activate_plugin({
			slug: 'wpforms-lite',
			init: 'wpforms-lite/wpforms.php',
			name: 'WPForms Lite',
		})
			.then((data) => {
				start_import_process();
			})
			.catch((data) => {
			});
	};

	const import_wpforms = (wpforms_url) => {
		post({
			action: 'gutenberg_templates_import_wpforms',
			wpforms_url: wpforms_url,
			_ajax_nonce: GutenbergTemplatesVars._ajax_nonce,
		})
			.done((response) => {
				// Import block.
				import_block();
			})
			.fail((response) => {
			});
	};

	const import_block = () => {
		const content = blockInfo['original_content'];
		post({
			action: 'gutenberg_templates_import_block',
			content: content,
			_ajax_nonce: GutenbergTemplatesVars._ajax_nonce,
		})
			.done((content) => {
				/**
				 * @todo Try to use `setStartImport(false)` instead of `startImport = false`
				 */
				// setStartImport(false);
				startImport = false;

				insertBlocks(parse(content), insertIndex, insertClientID);
				onSetTogglePopup();
				document
					.getElementById('gutenberg-templates-modal-wrap')
					.classList.remove('open');
				document.body.classList.remove(
					'gutenberg-templates-modal-open'
				);
			})
			.fail((response) => {
			});
	};

	const start_import_process = () => {
		// Import WP Forms.
		// 1. import wp forms
		// 2. import block

		const wpforms_url =
			blockInfo['post-meta']['astra-site-wpforms-path'] || '';
		if (wpforms_url) {
			import_wpforms(wpforms_url);
		} else {
			import_block();
		}
	};

	return (
		<div
			className={`gutenberg-import-block-button ${displayClass} ${buttonClass}`}
			onClick={() => {
				/**
				 * @todo Try to use `setStartImport(true)` instead of `startImport = true`
				 */
				setStartImport(true);
				// startImport = true;  				
				if (AllRequiredPlugins.length) {
					if (
						'not-installed' ===
						GutenbergTemplatesVars.wpforms_status
					) {
						install_wpforms();
					} else if (
						'inactive' === GutenbergTemplatesVars.wpforms_status
					) {
						activate_wpforms();
					} else {
						start_import_process();
					}
				} else if (SendliveRequest) {
					block_api_request(item.ID, 'astra-blocks' )
						.then((data) => {
							setImportItemInfo(data);

							/**
							 * @todo Set state and use callback function.
							 * Avoid `blockInfo = data` and try to use `setBlockInfo(data)`
							 */
							// setBlockInfo(data);
							blockInfo = data;

							AllRequiredPlugins = data['post-meta'][
								'astra-blocks-required-plugins'
							]
								? PHP.parse(
										data['post-meta'][
											'astra-blocks-required-plugins'
										]
								  )
								: [];
							console.log(
								'AllRequiredPlugins',
								AllRequiredPlugins
							);

							if (AllRequiredPlugins.length) {
								if (
									'not-installed' ===
									GutenbergTemplatesVars.wpforms_status
								) {
									install_wpforms();
								} else if (
									'inactive' ===
									GutenbergTemplatesVars.wpforms_status
								) {
									activate_wpforms();
								} else {
									start_import_process();
								}
							} else {
								start_import_process();
							}
						})
						.catch((err) => {
						});
				} else {
					start_import_process();
				}
			}}
		>
			{startImport ? (
				<>
					<Spinner /> Importing..
				</>
			) : (
				<>
					{withIcon ? (
						<i className="dashicons dashicons-download"></i>
					) : (
						''
					)}

					{buttonTitle}
				</>
			)}
		</div>
	);
};

export default compose(
	withSelect((select) => {
		const { getImportItemInfo, getCurrentScreen, getSitePreview } = select(
			'gutenberg-templates'
		);
		return {
			importItemInfo: getImportItemInfo(),
			sitePreview: getSitePreview(),
			currentScreen: getCurrentScreen(),
		};
	}),
	withDispatch((dispatch) => {
		const {
			setImportItemInfo,
			setFullWidthBlockPreview,
			setCurrentScreen,
			setTogglePopup,
			setFullWidthPreview,
		} = dispatch('gutenberg-templates');
		const { insertBlocks } = dispatch('core/block-editor');
		return {
			setImportItemInfo: setImportItemInfo,
			onSetTogglePopup: setTogglePopup,
			insertBlocks: insertBlocks,
		};
	})
)(memo(ImportBlockButton));
