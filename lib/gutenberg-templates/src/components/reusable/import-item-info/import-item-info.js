const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { memo, useState } = wp.element;

import './import-item-info.scss';

const ImportItemInfo = ({ requiredPlugins }) => {

	if (!requiredPlugins.length) {
		return;
	}
	
	let [toggle, setToggle] = useState(false);
	return (
		<div className="used-blocks">
			<div className={`used-blocks-info ${toggle ? 'show' : ''}`}>
				<h3>Install Required Plugins</h3>
				<ul>
					{requiredPlugins.map((plugin) => {
						return <li>{plugin.name}</li>;
					})}
				</ul>
			</div>
			<span
				className="used-blocks-icon dashicons dashicons-editor-help"
				onClick={() => setToggle(!toggle)}
			></span>
		</div>
	);
};

export default compose(
	withSelect((select) => {
		const { getImportItemInfo } = select('gutenberg-templates');
		return {
			importItemInfo: getImportItemInfo(),
		};
	}),
	withDispatch((dispatch) => {
		const { setImportItemInfo } = dispatch('gutenberg-templates');
		return {
			setImportItemInfo: setImportItemInfo,
		};
	})
)(memo(ImportItemInfo));
