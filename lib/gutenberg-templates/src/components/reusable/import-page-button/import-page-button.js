const { compose } = wp.compose;
const { useSelect, withSelect, withDispatch } = wp.data;

const { useState, memo } = wp.element;
const { Spinner } = wp.components;
const { post } = wp.ajax;
import importer from './../../../utils/importer';
import { install_plugin, activate_plugin } from './../../../utils/plugins';

import './import-page-button.scss';

const ImportPageButton = ({
	title,
	currentScreen,
	insertBlocks,
	onSetTogglePopup,
	item,
	importItemInfo
}) => {
	let [blockInfo, setBlockInfo] = useState(importItemInfo);
	let buttonTitle = title ? title : 'Import';
	let displayClass =
		'full-width-page-preview' === currentScreen ? 'show' : '';
	let [startImport, setStartImport] = useState(false);

	let AllRequiredPlugins = importItemInfo['required-plugins'] ? importItemInfo['required-plugins'] : [];

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
	
	const start_import_process = () => {

		const wpforms_url =
		importItemInfo['astra-site-wpforms-path'] || '';
		
		if (wpforms_url) {
			import_wpforms(wpforms_url);
		} else {
			importer(
				item['astra-page-api-url'],
				insertBlocks,
				onSetTogglePopup,
				insertIndex,
				insertClientID
			);
		}
	}

	const import_wpforms = (wpforms_url) => {
		post({
			action: 'gutenberg_templates_import_wpforms',
			wpforms_url: wpforms_url,
			_ajax_nonce: GutenbergTemplatesVars._ajax_nonce,
		})
		.done((response) => {
			// Import block.
			importer(
				item['astra-page-api-url'],
				insertBlocks,
				onSetTogglePopup,
				insertIndex,
				insertClientID
			);
		})
		.fail((response) => {
		});
	};

	return (
		<button
			className={`button button-primary gutenberg-import-page-button ${displayClass}`}
			onClick={() => {

				setStartImport(true);
			
				if (AllRequiredPlugins.length && AllRequiredPlugins.find( item => item.init === 'wpforms-lite/wpforms.php' )) {
					
					if ( 'not-installed' === GutenbergTemplatesVars.wpforms_status ) {
						install_wpforms();
					} else if ( 'inactive' === GutenbergTemplatesVars.wpforms_status ) {
						activate_wpforms();
					} else {
						start_import_process();
					}
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
					<i
						className="dashicons dashicons-download"
						aria-hidden="true"
					></i>
					{buttonTitle}
				</>
			)}
		</button>
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
			setFullWidthBlockPreview,
			setCurrentScreen,
			setTogglePopup,
			setFullWidthPreview,
		} = dispatch('gutenberg-templates');
		const { insertBlocks } = dispatch('core/block-editor');
		return {
			onSetTogglePopup: setTogglePopup,
			insertBlocks: insertBlocks,
		};
	})
)(memo(ImportPageButton));
