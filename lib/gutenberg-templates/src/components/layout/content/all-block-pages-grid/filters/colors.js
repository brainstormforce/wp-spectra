import { compose } from '@wordpress/compose';
import { memo } from '@wordpress/element';
import { withSelect, withDispatch } from '@wordpress/data';

const ColorsFilter = ( {
	filterBlocksByColor,
	setFilterBlocksPagesByColor,
	allBlocks,
} ) => {
	if ( ! allBlocks ) {
		return null;
	}

	const allColors = [];
	allBlocks?.map( ( item ) => {
		if ( item.filter && ! allColors.includes( item.filter ) ) {
			allColors.push( item.filter );
		}
		return null;
	} );

	if ( allColors.length <= 1 ) {
		return '';
	}

	return (
		<div className="blocks-color">
			<h3>Filter by Color</h3>
			<div className="block-color-list">
				<div // eslint-disable-line
					className={ `block-color-item ${
						! filterBlocksByColor ? 'active' : ''
					}` }
					onClick={ () => setFilterBlocksPagesByColor( '' ) }
				>
					All
				</div>
				{ allColors.map( ( item ) => {
					return (
						<div // eslint-disable-line
							key={ item }
							className={ `block-color-item ${
								filterBlocksByColor === item ? 'active' : ''
							}` }
							onClick={ () => setFilterBlocksPagesByColor( item ) }
						>
							{ item }
						</div>
					);
				} ) }
			</div>
		</div>
	);
};

export default compose(
	withSelect( ( select ) => {
		const { getFilterBlocksPagesByColor, getAllBlocksPages } = select(
			'ast-block-templates'
		);
		return {
			filterBlocksByColor: getFilterBlocksPagesByColor(),
			allBlocks: getAllBlocksPages(),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { setFilterBlocksPagesByColor } = dispatch( 'ast-block-templates' );
		return {
			setFilterBlocksPagesByColor,
		};
	} )
)( memo( ColorsFilter ) );
