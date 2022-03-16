
export const PostTaxonomy = ( props ) => {

	const { post, categoriesList } = props;

	const { taxStyle, displayPostTaxonomy, displayPostTaxonomyAboveTitle } = props.attributes;

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
			{ displayPostTaxonomy && displayPostTaxonomyAboveTitle && (
				<span className={`uagb-post__text uagb-post__taxonomy ${taxStyle}`}>
					{ 'withoutIcons' !== taxStyle && ( <span className="dashicons-tag dashicons"></span> ) }
					<div
						dangerouslySetInnerHTML={ {
							__html: categoriesName.join( ', ' ),
						} }
					></div>
				</span>
			) }
		</>
	);
};
