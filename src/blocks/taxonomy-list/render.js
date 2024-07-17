import { uagbClassNames } from '@Utils/Helpers';
import { useLayoutEffect, memo } from '@wordpress/element';
import styles from './editor.lazy.scss';
import { decodeEntities } from '@wordpress/html-entities';
import { useEntityRecords } from '@wordpress/core-data';
import { __ } from '@wordpress/i18n';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	// Caching all Props.
	const { categoriesList, attributes, deviceType } = props;

	// Caching all attributes.
	const {
		layout,
		seperatorStyle,
		noTaxDisplaytext,
		showCount,
		listDisplayStyle,
		titleTag,
		block_id,
		showEmptyTaxonomy,
		taxonomyType,
	} = attributes;

	const showhierarchy = 'post_tag' === taxonomyType ? false : attributes.showhierarchy;

	let Tag;
	if ( 'grid' === layout ) {
		Tag = titleTag ? titleTag : 'h4';
	} else if ( 'list' === layout ) {
		Tag = titleTag ? titleTag : 'div';
	}
	const query = { per_page: -1, hide_empty: !showEmptyTaxonomy, context: 'view' };

	const { records: categories } = useEntityRecords(
		'taxonomy',
		taxonomyType,
		query
	);

	const getCategoriesList = ( parentId ) => {
		if ( !categories?.length ) {
			return [];
		}
		if ( parentId === null ) {
			return categories;
		}

		return categories.filter( ( { parent } ) => parent === parentId );
	};

	const renderCategoryName = ( name ) =>
		!name ? __( '(Untitled)', 'ultimate-addons-for-gutenberg' ) : decodeEntities( name ).trim();

	const renderCategoryList = () => {
		const parentId = showhierarchy ? 0 : null;
		const categoryList = getCategoriesList( parentId );
		return categoryList.map( ( category ) =>
			renderCategoryListItem( category )
		);
	};

	const renderCategoryListItem = ( category ) => {
		const childCategories = getCategoriesList( category.id );
		const { id, link, count, name } = category;
		if ( 0 === category.parent && ! showhierarchy || 'post_tag' === taxonomyType ) {
			return (
				<li key={id} className={`uagb-tax-list`}>
					<Tag class="uagb-tax-link-wrap">
						<a className="uagb-tax-link" href={link} target="_blank" rel="noreferrer noopener">
							{ renderCategoryName( name ) }
						</a>
						{showCount && ` (${count})`}
					</Tag>
					{'none' !== seperatorStyle && <div className="uagb-tax-separator" ></div>}
				</li>
			);
		} else if ( showhierarchy ) {
			return (
				<li key={id} className={`uagb-tax-list`}>
					<Tag class="uagb-tax-link-wrap">
					<a className="uagb-tax-link"  href={link} target="_blank" rel="noreferrer noopener">
						{renderCategoryName( name )}
					</a>
						{showCount && ` (${count})`}
					</Tag>
					{'none' !== seperatorStyle && <div className="uagb-tax-separator" ></div>}
					{ showhierarchy && !!childCategories.length && (
						<ul className="uagb-taxonomy-list-children">
							{childCategories.map( ( childCategory ) =>
								renderCategoryListItem( childCategory )
							)}
						</ul>
					)}
				</li>
			);
		}
	};

	return categoriesList.length ? (
		<div
			className={ uagbClassNames( [
				'uagb-taxonomy__outer-wrap',
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-layout-${ layout }`,
				`uagb-block-${ block_id }`
			] ) }
		>
			{ 'grid' === layout &&
				categoriesList.map( ( p, index ) => (
					<div className="uagb-taxomony-box" key={ index }>
						<a className="uagb-tax-link" href={ p.link }>
							<Tag
								className="uagb-tax-title"
								dangerouslySetInnerHTML={ {
									__html: p.name,
								} }
							></Tag>
							{ showCount && (
								<>
									{ p.count } { p.count > '1' ? `${ p.singular_name }s` : p.singular_name }
								</>
							) }
						</a>
					</div>
				) ) }

			{ 'list' === layout && 'list' === listDisplayStyle && (
				<ul className="uagb-list-wrap">
					{ renderCategoryList() }
				</ul>
			) }

			{ 'list' === layout && 'dropdown' === listDisplayStyle && (
				<select className="uagb-list-dropdown-wrap">
					{ categoriesList.map( ( p, index ) => (
						<option key={ index } value={ p.link }>
							{ decodeEntities( p.name ) }
							{ showCount && ` (${ p.count })` }
						</option>
					) ) }
				</select>
			) }
		</div>
	) : (
		<div
			className={ uagbClassNames( [
				'uagb-taxonomy__outer-wrap',
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-layout-${ layout }`,
				`uagb-block-${ block_id }`
			] ) }
		>
			<div className="uagb-tax-not-available">{ noTaxDisplaytext }</div>
		</div>
	);
};

export default memo( Render );
