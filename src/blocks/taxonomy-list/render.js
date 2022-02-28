import classnames from 'classnames';
import React, { useLayoutEffect } from 'react';
import styles from './editor.lazy.scss';
import { decodeEntities } from '@wordpress/html-entities';
import { useDeviceType } from '@Controls/getPreviewType';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	props = props.parentProps;
	const deviceType = useDeviceType();
	// Caching all Props.
	const { attributes, categoriesList } = props;

	// Caching all attributes.
	const {
		isPreview,
		layout,
		seperatorStyle,
		noTaxDisplaytext,
		showCount,
		listDisplayStyle,
		showhierarchy,
		titleTag,
	} = attributes;

	let Tag;
	if ( 'grid' === layout ) {
		Tag = titleTag ? titleTag : 'h4';
	} else if ( 'list' === layout ) {
		Tag = titleTag ? titleTag : 'div';
	}
	const previewImageData = '';
		return (
			<>
			isPreview ? <img width='100%' src={previewImageData}/> :
				<div
					className={ classnames(
						'uagb-taxonomy__outer-wrap',
						`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
						`uagb-layout-${ layout }`,
						`uagb-block-${ props.clientId.substr( 0, 8 ) }`
					) }
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
												{ p.count }{ ' ' }
												{ p.count > '1'
													? `${ p.singular_name }s`
													: p.singular_name }
</>
										) }
									</a>
								</div>
							) ) }

						{ 'list' === layout && 'list' === listDisplayStyle && (
							<ul className="uagb-list-wrap">
								{ categoriesList.map( ( p, index ) => (
									<li className="uagb-tax-list" key={ index }>
										<Tag className="uagb-tax-link-wrap">
											<a
												className="uagb-tax-link"
												href={ p.link }
												dangerouslySetInnerHTML={ {
													__html: p.name,
												} }
											></a>
											{ showCount && (
												` (${ p.count })`
											) }
											{ showhierarchy && p.children !== null && (
												<ul className="uagb-taxonomy-list-children">
													{ Object.keys( p.children ).map(
														function ( key, i ) {
															return (
																<li
																	className="uagb-tax-list"
																	key={ i }
																>
																	<a
																		className="uagb-tax-link"
																		href={ `${ p.link }${ p.children[ key ].slug }` }
																	>
																		{
																			p
																				.children[
																				key
																			].name
																		}
																	</a>
																	{ showCount && (
																		<span>{ ` (${ p.children[ key ].count })` }</span>
																	) }
																</li>
															);
														}
													) }
												</ul>
											) }
										</Tag>

										{ 'none' !== seperatorStyle && (
												<div className="uagb-tax-separator"></div>
										) }
									</li>
								) ) }
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

					{ /* If no Taxonomy is available. */ }
					{ categoriesList === '' && (
						<div className="uagb-tax-not-available">
							{ noTaxDisplaytext }
						</div>
					) }
				</div>
			</>
		);
};

export default React.memo( Render );
