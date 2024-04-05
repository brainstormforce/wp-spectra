const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { memo, useState } = wp.element;

import './import-item-info.scss';

const ImportItemInfo = ( { requiredPlugins } ) => {
	const [ toggle, setToggle ] = useState( false );
	if ( ! requiredPlugins.length ) {
		return null;
	}

	return (
		<div className="used-blocks">
			<div className={ `used-blocks-info ${ toggle ? 'show' : '' }` }>
				<h3>Install Required Plugins</h3>
				<ul>
					{ requiredPlugins.map( ( plugin, index ) => {
						return <li key={ index }>{ plugin.name }</li>;
					} ) }
				</ul>
			</div>
			<span
				className="used-blocks-icon dashicons dashicons-editor-help"
				onClick={ () => setToggle( ! toggle ) }
				role="button"
				tabIndex="0"
				onKeyDown={ () => setToggle( ! toggle ) }
			></span>
		</div>
	);
};

export default compose(
	withSelect( ( select ) => {
		const { getImportItemInfo } = select( 'ast-block-templates' );
		return {
			importItemInfo: getImportItemInfo(),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { setImportItemInfo } = dispatch( 'ast-block-templates' );
		return {
			setImportItemInfo,
		};
	} )
)( memo( ImportItemInfo ) );
