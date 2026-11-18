import { compose } from '@wordpress/compose';
import { memo } from '@wordpress/element';
import { withSelect, withDispatch } from '@wordpress/data';

const ColorsFilter = ( { filterBlocksByColor, setFilterBlocksByColor, allBlocks } ) => {
	if ( ! allBlocks ) {
		return null;
	}

	const allColors = [];
	allBlocks?.forEach( ( item ) => {
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
				<div
					className={ `block-color-item ${ ! filterBlocksByColor ? 'active' : '' }` }
					onClick={ ( ) => setFilterBlocksByColor( '' ) }
					role="button"
					tabIndex="0"
					onKeyDown={ ( event ) => {
						if ( event.keyCode === 13 ) {
							setFilterBlocksByColor( '' );
						}
					} }
				>All</div>
				{
					allColors.map( ( item ) => {
						return (
							<div
								key={ item }
								className={ `block-color-item ${ filterBlocksByColor === item ? 'active' : '' }` }
								onClick={ ( ) => setFilterBlocksByColor( item ) }
								role="button"
								tabIndex="0"
								onKeyDown={ ( event ) => {
									if ( event.keyCode === 13 ) {
										setFilterBlocksByColor( item );
									}
								} }
							>{ item }</div>
						);
					} )
				}
			</div>
		</div>
	);
};

export default compose(
	withSelect( ( select ) => {
		const { getFilterBlocksByColor, getAllBlocks } = select( 'ast-block-templates' );
		return {
			filterBlocksByColor: getFilterBlocksByColor(),
			allBlocks: getAllBlocks(),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { setFilterBlocksByColor } = dispatch( 'ast-block-templates' );
		return {
			setFilterBlocksByColor,
		};
	} )
)( memo( ColorsFilter ) );
