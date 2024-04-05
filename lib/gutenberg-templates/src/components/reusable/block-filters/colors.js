import { __ } from '@wordpress/i18n';
const { compose } = wp.compose;
const { memo } = wp.element;
const { withSelect, withDispatch } = wp.data;

const ColorsFilter = ( { filterBlocksByColor, setFilterBlocksByColor, allBlocks } ) => {
	if ( ! allBlocks ) {
		return;
	}

	const allColors = [];
	allBlocks.map( ( item ) => {
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
			<h3>{ __( 'Filter by Color', 'ast-block-templates' ) }</h3>
			<div className="block-color-list">
				<div
					className={ `block-color-item ${ ! filterBlocksByColor ? 'active' : '' }` }
					onClick={ ( ) => setFilterBlocksByColor( '' ) }
					role="button"
					tabIndex={ 0 }
					onKeyDown={ ( ) => setFilterBlocksByColor( '' ) }
				>{ ( 'All', 'ast-block-templates' ) }</div>
				{
					allColors.map( ( item ) => {
						return (
							<div
								key={ item }
								className={ `block-color-item ${ filterBlocksByColor === item ? 'active' : '' }` }
								onClick={ ( ) => setFilterBlocksByColor( item ) }
								role="button"
								tabIndex={ 0 }
								onKeyDown={ ( ) => setFilterBlocksByColor( item ) }
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
