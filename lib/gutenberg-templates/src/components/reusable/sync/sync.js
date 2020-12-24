const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { useState, memo } = wp.element;
const { post } = wp.ajax;

import { log, info, success, error } from '../../../utils/logger';

import Tooltip from '../tooltip/tooltip';

import './sync.scss';

let Sync = ({ setNotice }) => {
	let defaultText = 'Sync Library';

	let [selfState, selfSetState] = useState({
		isProcessing: '',
		buttonText: defaultText,
	});

	let { isProcessing, buttonText } = selfState;

	/**
	 * Sync Complete
	 */
	let syncComplete = async () => {
		await post({
			action: 'gutenberg-templates-update-sync-library-status',
			_ajax_nonce: GutenbergTemplatesVars._ajax_nonce,
		}).done((response) => {
			success(response);

			setNotice({
				type: 'success',
				message: 'Template library refreshed!',
			});

			// Updated UI.
			selfSetState({
				isProcessing: 'complete',
				buttonText: 'Sync Complete',
			});
		});
	};

	/**
	 * Import Site
	 */
	let importSite = async (i, total) => {
		await post({
			action: 'gutenberg-templates-import-sites',
			page_no: i,
			_ajax_nonce: GutenbergTemplatesVars._ajax_nonce,
		}).done((response) => {
			success('done', response);

			if (response.status) {
				// Updated UI.
				selfSetState({
					isProcessing: 'process',
					buttonText: `Imported ${i} of ${total} site..`,
				});

				info(`Imported ${i} of ${total} site..`);

				if (i === total) {
					syncComplete();
				}
			} else {
				// Updated UI.
				selfSetState({
					isProcessing: 'error',
					buttonText: `Error ${response.data}`,
				});
			}
		});
	};

	/**
	 * Get Block Count
	 */
	let sitesCount = async () => {
		await post({
			action: 'gutenberg-templates-get-sites-request-count',
			_ajax_nonce: GutenbergTemplatesVars._ajax_nonce,
		})
			.done((response) => {
				success('done', response);

				if (response.status) {
					// Updated UI.
					selfSetState({
						isProcessing: 'process',
						buttonText: 'Importing Sites..',
					});

					var total = response.data;

					for (let i = 1; i <= total; i++) {
						log('i', i);
						importSite(i, total);
					}
				} else {
					// Updated UI.
					selfSetState({
						isProcessing: 'complete',
						buttonText: 'Importing Sites Failed',
					});
				}
			})
			.fail((response) => {
				error('fail', response);
			});
	};

	/**
	 * Import Blocks
	 */
	let importBlock = async (i, total) => {
		await post({
			action: 'gutenberg-templates-import-blocks',
			page_no: i,
			_ajax_nonce: GutenbergTemplatesVars._ajax_nonce,
		}).done((response) => {
			success('done', response);

			if (response.status) {
				// Updated UI.
				selfSetState({
					isProcessing: 'process',
					buttonText: `Imported ${i} of ${total} block..`,
				});

				info(`Imported ${i} of ${total} block..`);

				if (i === total) {
					sitesCount();
				}
			} else {
				// Updated UI.
				selfSetState({
					isProcessing: 'error',
					buttonText: `Error ${response.data}`,
				});
			}
		});
	};

	/**
	 * Get Block Count
	 */
	let blocksCount = async () => {
		await post({
			action: 'gutenberg-templates-get-blocks-request-count',
			_ajax_nonce: GutenbergTemplatesVars._ajax_nonce,
		})
			.done((response) => {
				success('done', response);

				if (response.status) {
					var total = response.data;

					for (let i = 1; i <= total; i++) {
						info('i', i);
						importBlock(i, total);
					}
				} else {
					// Updated UI.
					selfSetState({
						isProcessing: 'complete',
						buttonText: 'Importing Pages Failed',
					});
				}
			})
			.fail((response) => {
				error('fail', response);
			});
	};

	let syncStart = async () => {
		log('Started');
		try {
			log('Sync Started');

			await post({
				action: 'gutenberg-templates-check-sync-library-status',
				_ajax_nonce: GutenbergTemplatesVars._ajax_nonce,
			})
				.done((response) => {
					success('Done', response);

					/**
					 * IMPORTANT: BELOW CODE IS WORKING. TO AVOID MULTILPLE RESET CHECKSUMS FROM LIVE SITE WE HAVE DISABLE IT FROM PLUGIN.
					 */
					// if (response.status) {
					// 	if ('updated' === response.data) {
					// Updated!.
					// 	selfSetState({
					// 		isProcessing: 'complete',
					// 		buttonText: 'Library is up-to date!',
					// 	});
					// setNotice({
					// 	type: 'success',
					// 	message: 'Template library refreshed!'
					// })
					// } else {
					blocksCount();
					// 	}
					// } else {
					// setNotice({
					// 	type: 'error',
					// 	message: `Error! ${response.message}`
					// })
					// 	// Complete.
					// 	selfSetState({
					// 		isProcessing: 'complete',
					// 		buttonText: `Error! ${response.message}`,
					// 	});
					// }
				})
				.fail((response) => {
					error('fail', response);
				});
		} catch (err) {
			error('Complete: Failed', err);
		}
	};

	return (
		<span
			className={`gutenberg-templates-sync ${
				'process' === isProcessing
					? 'gutenberg-templates-sync--processing'
					: ''
			}`}
			onClick={(event) => {
				event.preventDefault();

				setNotice({
					type: 'info',
					message:
						'Syncing template library in the background. The process can take anywhere between 2 to 3 minutes. We will notify you once done.',
				});

				// Updated UI.
				selfSetState({
					isProcessing: 'process',
					buttonText: 'Syncing libray..',
				});

				// Process sync.
				syncStart();
			}}
		>
			<span className="gutenberg-templates-icon gutenberg-templates-icon-refresh"></span>
			<span className="gutenberg-templates-sync__title">
				{buttonText}
			</span>
			<Tooltip message="Sync Library" />
		</span>
	);
};

export default compose(
	withDispatch((dispatch) => {
		const { setNotice } = dispatch('gutenberg-templates');
		return {
			setNotice: setNotice,
		};
	}),
	withSelect((select) => {
		const { getNotice } = select('gutenberg-templates');
		return {
			notice: getNotice(),
		};
	})
)(memo(Sync));
