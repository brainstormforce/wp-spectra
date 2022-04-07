
export const PostTaxonomy = ( props ) => {

	const { post, categoriesList } = props;

	const { taxStyle, displayPostTaxonomy, displayPostTaxonomyAboveTitle, hideTaxonomyIcon, taxDivider } = props.attributes;

	const list = categoriesList;
	const cat = post.categories;
	const categoriesName = [];

	if ( list !== undefined && cat !== undefined ) {
		for ( let j = 0; j < list.length; j++ ) {
			for ( let i = 0; i < cat.length; i++ ) {
				if ( list[ j ].id === cat[ i ] ) {
					categoriesName.push( list[ j ].name );
				}
			}
		}
	}

	return (
		<>
			{ displayPostTaxonomy && 'aboveTitle' === displayPostTaxonomyAboveTitle && (
				<>
				{ ( 'default' === taxStyle ) && (
					<span className="uagb-post__taxonomy default">
					{ ( hideTaxonomyIcon && 'aboveTitle' === displayPostTaxonomyAboveTitle ) && ( <span className="dashicons-tag dashicons"></span> ) }
					<div
						dangerouslySetInnerHTML={ {
							__html: categoriesName.join( taxDivider ),
						} }
					></div>
					</span>
				) }
				{ ( 'highlighted' === taxStyle ) && (
				list.map( ( Litem ) => (
					cat.map( ( Citem ) => (
						( Litem.id === Citem ) && (
							<span className={`uagb-post__taxonomy ${taxStyle}`}>
							{ ( hideTaxonomyIcon && 'aboveTitle' === displayPostTaxonomyAboveTitle ) && ( <span className="dashicons-tag dashicons"></span> ) }
							{Litem.name}
							</span>
						)
					) )
				) )
			) }
			</>
			) }
		</>
	);
};
