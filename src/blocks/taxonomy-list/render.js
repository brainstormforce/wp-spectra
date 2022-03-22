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
	const previewImageData = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMzUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjRjFGMUYyIiBkPSJNMTcwLjA4LDEzMi42OWMwLDIuMDkyLTEuNjk3LDMuNzkxLTMuNzkxLDMuNzkxSDI4Ljk4MWMtMi4wOTQsMC0zLjc5MS0xLjY5OS0zLjc5MS0zLjc5MVY4NS45NjcNCgkJCWMwLTIuMDk0LDEuNjk3LTMuNzkxLDMuNzkxLTMuNzkxaDEzNy4zMDhjMi4wOTQsMCwzLjc5MSwxLjY5NywzLjc5MSwzLjc5MVYxMzIuNjl6Ii8+DQoJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0xNTEuNzU5LDk3Ljg3NWMwLDIuMDYxLTEuNjcxLDMuNzMyLTMuNzMzLDMuNzMySDQ3LjI0NWMtMi4wNjMsMC0zLjczMi0xLjY3MS0zLjczMi0zLjczMmwwLDANCgkJCWMwLTIuMDYzLDEuNjctMy43MzQsMy43MzItMy43MzRoMTAwLjc4QzE1MC4wODgsOTQuMTQxLDE1MS43NTksOTUuODEyLDE1MS43NTksOTcuODc1TDE1MS43NTksOTcuODc1eiIvPg0KCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMTU1LjU1MSwxMTMuNDYyYzAsMS4yMTItMC45ODEsMi4xOTUtMi4xOTMsMi4xOTVINDEuOTE0Yy0xLjIxMSwwLTIuMTk0LTAuOTgzLTIuMTk0LTIuMTk1di0wLjI3Mw0KCQkJYzAtMS4yMTIsMC45ODMtMi4xOTQsMi4xOTQtMi4xOTRoMTExLjQ0NWMxLjIxMSwwLDIuMTkzLDAuOTgyLDIuMTkzLDIuMTk0VjExMy40NjJ6Ii8+DQoJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0xNDQuNTcyLDEyMi4zMjFjMCwxLjIxMi0wLjk4MywyLjE5NS0yLjE5NSwyLjE5NUg1Mi44OTNjLTEuMjExLDAtMi4xOTMtMC45ODMtMi4xOTMtMi4xOTV2LTAuMjc0DQoJCQljMC0xLjIxMywwLjk4MS0yLjE5NCwyLjE5My0yLjE5NGg4OS40ODRjMS4yMTIsMCwyLjE5NSwwLjk4MSwyLjE5NSwyLjE5NFYxMjIuMzIxeiIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0YxRjFGMiIgZD0iTTMyNC44MDksMTMyLjY5YzAsMi4wOTItMS42OTcsMy43OTEtMy43OTIsMy43OTFIMTgzLjcxYy0yLjA5NSwwLTMuNzkxLTEuNjk5LTMuNzkxLTMuNzkxVjg1Ljk2Nw0KCQkJYzAtMi4wOTQsMS42OTYtMy43OTEsMy43OTEtMy43OTFoMTM3LjMwN2MyLjA5NSwwLDMuNzkyLDEuNjk3LDMuNzkyLDMuNzkxVjEzMi42OXoiLz4NCgkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTMwNi40ODcsOTcuODc1YzAsMi4wNjEtMS42NzEsMy43MzItMy43MzMsMy43MzJoLTEwMC43OGMtMi4wNjMsMC0zLjczMi0xLjY3MS0zLjczMi0zLjczMmwwLDANCgkJCWMwLTIuMDYzLDEuNjctMy43MzQsMy43MzItMy43MzRoMTAwLjc4QzMwNC44MTYsOTQuMTQxLDMwNi40ODcsOTUuODEyLDMwNi40ODcsOTcuODc1TDMwNi40ODcsOTcuODc1eiIvPg0KCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMzEwLjI3OSwxMTMuNDYyYzAsMS4yMTItMC45OCwyLjE5NS0yLjE5MiwyLjE5NUgxOTYuNjQzYy0xLjIxMiwwLTIuMTk1LTAuOTgzLTIuMTk1LTIuMTk1di0wLjI3Mw0KCQkJYzAtMS4yMTIsMC45ODMtMi4xOTQsMi4xOTUtMi4xOTRoMTExLjQ0NGMxLjIxMiwwLDIuMTkyLDAuOTgyLDIuMTkyLDIuMTk0VjExMy40NjJ6Ii8+DQoJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yOTkuMzAxLDEyMi4zMjFjMCwxLjIxMi0wLjk4MywyLjE5NS0yLjE5NSwyLjE5NWgtODkuNDg0Yy0xLjIxMiwwLTIuMTkyLTAuOTgzLTIuMTkyLTIuMTk1di0wLjI3NA0KCQkJYzAtMS4yMTMsMC45OC0yLjE5NCwyLjE5Mi0yLjE5NGg4OS40ODRjMS4yMTIsMCwyLjE5NSwwLjk4MSwyLjE5NSwyLjE5NFYxMjIuMzIxeiIvPg0KCTwvZz4NCgk8Zz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjRjFGMUYyIiBkPSJNMTcwLjA4LDE5OC4zNjJjMCwyLjA5Mi0xLjY5NywzLjc5LTMuNzkxLDMuNzlIMjguOTgxYy0yLjA5NCwwLTMuNzkxLTEuNjk4LTMuNzkxLTMuNzl2LTQ2LjcyNA0KCQkJCWMwLTIuMDk0LDEuNjk3LTMuNzkxLDMuNzkxLTMuNzkxaDEzNy4zMDhjMi4wOTQsMCwzLjc5MSwxLjY5NywzLjc5MSwzLjc5MVYxOTguMzYyeiIvPg0KCQkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTE1MS43NTksMTYzLjU0NmMwLDIuMDYxLTEuNjcxLDMuNzMyLTMuNzMzLDMuNzMySDQ3LjI0NWMtMi4wNjMsMC0zLjczMi0xLjY3Mi0zLjczMi0zLjczMmwwLDANCgkJCQljMC0yLjA2MywxLjY3LTMuNzMzLDMuNzMyLTMuNzMzaDEwMC43OEMxNTAuMDg4LDE1OS44MTMsMTUxLjc1OSwxNjEuNDgzLDE1MS43NTksMTYzLjU0NkwxNTEuNzU5LDE2My41NDZ6Ii8+DQoJCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMTU1LjU1MSwxNzkuMTMzYzAsMS4yMTItMC45ODEsMi4xOTYtMi4xOTMsMi4xOTZINDEuOTE0Yy0xLjIxMSwwLTIuMTk0LTAuOTg0LTIuMTk0LTIuMTk2di0wLjI3MQ0KCQkJCWMwLTEuMjEyLDAuOTgzLTIuMTk1LDIuMTk0LTIuMTk1aDExMS40NDVjMS4yMTEsMCwyLjE5MywwLjk4MywyLjE5MywyLjE5NVYxNzkuMTMzeiIvPg0KCQk8L2c+DQoJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0xNDQuNTcxLDE4Ny45OTJjMCwxLjIxMi0wLjk4MywyLjE5Ni0yLjE5NSwyLjE5Nkg1Mi44OTNjLTEuMjEyLDAtMi4xOTMtMC45ODQtMi4xOTMtMi4xOTZ2LTAuMjc0DQoJCQljMC0xLjIxMiwwLjk4MS0yLjE5MywyLjE5My0yLjE5M2g4OS40ODRjMS4yMTIsMCwyLjE5NSwwLjk4MSwyLjE5NSwyLjE5M1YxODcuOTkyeiIvPg0KCTwvZz4NCgk8Zz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjRjFGMUYyIiBkPSJNMzI0LjgwOSwxOTguMzYyYzAsMi4wOTItMS42OTcsMy43OS0zLjc5MiwzLjc5SDE4My43MWMtMi4wOTUsMC0zLjc5MS0xLjY5OC0zLjc5MS0zLjc5di00Ni43MjMNCgkJCQljMC0yLjA5NCwxLjY5Ni0zLjc5MiwzLjc5MS0zLjc5MmgxMzcuMzA3YzIuMDk1LDAsMy43OTIsMS42OTcsMy43OTIsMy43OTJWMTk4LjM2MnoiLz4NCgkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0zMDYuNDg3LDE2My41NDZjMCwyLjA2MS0xLjY3MSwzLjczMy0zLjczMywzLjczM2gtMTAwLjc4Yy0yLjA2MywwLTMuNzMyLTEuNjcyLTMuNzMyLTMuNzMzbDAsMA0KCQkJCWMwLTIuMDYzLDEuNjctMy43MzMsMy43MzItMy43MzNoMTAwLjc4QzMwNC44MTYsMTU5LjgxMywzMDYuNDg3LDE2MS40ODMsMzA2LjQ4NywxNjMuNTQ2TDMwNi40ODcsMTYzLjU0NnoiLz4NCgkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0zMTAuMjc5LDE3OS4xMzVjMCwxLjIxMS0wLjk4LDIuMTk0LTIuMTkyLDIuMTk0SDE5Ni42NDNjLTEuMjEyLDAtMi4xOTUtMC45ODMtMi4xOTUtMi4xOTR2LTAuMjczDQoJCQkJYzAtMS4yMTIsMC45ODMtMi4xOTUsMi4xOTUtMi4xOTVoMTExLjQ0NGMxLjIxMiwwLDIuMTkyLDAuOTgzLDIuMTkyLDIuMTk1VjE3OS4xMzV6Ii8+DQoJCTwvZz4NCgkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTI5OS4zMDEsMTg3Ljk5MmMwLDEuMjEyLTAuOTgzLDIuMTk2LTIuMTk1LDIuMTk2aC04OS40ODRjLTEuMjEyLDAtMi4xOTItMC45ODQtMi4xOTItMi4xOTZ2LTAuMjc0DQoJCQljMC0xLjIxMiwwLjk4LTIuMTkzLDIuMTkyLTIuMTkzaDg5LjQ4NGMxLjIxMiwwLDIuMTk1LDAuOTgxLDIuMTk1LDIuMTkzVjE4Ny45OTJ6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjRjFGMUYyIiBkPSJNMTcwLjA4LDI2NC4wMzNjMCwyLjA5Mi0xLjY5NywzLjc5MS0zLjc5MSwzLjc5MUgyOC45ODFjLTIuMDk0LDAtMy43OTEtMS42OTktMy43OTEtMy43OTF2LTQ2LjcyMw0KCQkJYzAtMi4wOTMsMS42OTctMy43OTEsMy43OTEtMy43OTFoMTM3LjMwOGMyLjA5NCwwLDMuNzkxLDEuNjk4LDMuNzkxLDMuNzkxVjI2NC4wMzN6Ii8+DQoJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0xNTEuNzU5LDIyOS4yMTljMCwyLjA2LTEuNjcxLDMuNzMxLTMuNzMzLDMuNzMxSDQ3LjI0NWMtMi4wNjMsMC0zLjczMi0xLjY3Mi0zLjczMi0zLjczMWwwLDANCgkJCWMwLTIuMDYzLDEuNjctMy43MzQsMy43MzItMy43MzRoMTAwLjc4QzE1MC4wODgsMjI1LjQ4NCwxNTEuNzU5LDIyNy4xNTUsMTUxLjc1OSwyMjkuMjE5TDE1MS43NTksMjI5LjIxOXoiLz4NCgkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTE1NS41NTEsMjQ0LjgwNmMwLDEuMjEyLTAuOTgxLDIuMTk1LTIuMTkzLDIuMTk1SDQxLjkxNGMtMS4yMTEsMC0yLjE5NC0wLjk4My0yLjE5NC0yLjE5NXYtMC4yNzMNCgkJCWMwLTEuMjEyLDAuOTgzLTIuMTkzLDIuMTk0LTIuMTkzaDExMS40NDVjMS4yMTEsMCwyLjE5MywwLjk4MSwyLjE5MywyLjE5M1YyNDQuODA2eiIvPg0KCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMTQ0LjU3MiwyNTMuNjY0YzAsMS4yMTItMC45ODMsMi4xOTUtMi4xOTUsMi4xOTVINTIuODkzYy0xLjIxMSwwLTIuMTkzLTAuOTgzLTIuMTkzLTIuMTk1di0wLjI3NA0KCQkJYzAtMS4yMTIsMC45ODEtMi4xOTQsMi4xOTMtMi4xOTRoODkuNDg0YzEuMjEyLDAsMi4xOTUsMC45ODIsMi4xOTUsMi4xOTRWMjUzLjY2NHoiLz4NCgk8L2c+DQoJPGc+DQoJCTxnPg0KCQkJPHBhdGggZmlsbD0iI0YxRjFGMiIgZD0iTTMyNC44MDksMjY0LjAzM2MwLDIuMDkyLTEuNjk3LDMuNzkxLTMuNzkyLDMuNzkxSDE4My43MWMtMi4wOTUsMC0zLjc5MS0xLjY5OS0zLjc5MS0zLjc5MXYtNDYuNzIzDQoJCQkJYzAtMi4wOTMsMS42OTYtMy43OTEsMy43OTEtMy43OTFoMTM3LjMwN2MyLjA5NSwwLDMuNzkyLDEuNjk4LDMuNzkyLDMuNzkxVjI2NC4wMzN6Ii8+DQoJCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMzA2LjQ4NywyMjkuMjE5YzAsMi4wNi0xLjY3MSwzLjczMS0zLjczMywzLjczMWgtMTAwLjc4Yy0yLjA2MywwLTMuNzMyLTEuNjcyLTMuNzMyLTMuNzMxbDAsMA0KCQkJCWMwLTIuMDYzLDEuNjctMy43MzQsMy43MzItMy43MzRoMTAwLjc4QzMwNC44MTYsMjI1LjQ4NCwzMDYuNDg3LDIyNy4xNTUsMzA2LjQ4NywyMjkuMjE5TDMwNi40ODcsMjI5LjIxOXoiLz4NCgkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0zMTAuMjc5LDI0NC44MDZjMCwxLjIxMi0wLjk4LDIuMTk1LTIuMTkyLDIuMTk1SDE5Ni42NDNjLTEuMjEyLDAtMi4xOTUtMC45ODMtMi4xOTUtMi4xOTV2LTAuMjczDQoJCQkJYzAtMS4yMTIsMC45ODMtMi4xOTMsMi4xOTUtMi4xOTNoMTExLjQ0NGMxLjIxMiwwLDIuMTkyLDAuOTgxLDIuMTkyLDIuMTkzVjI0NC44MDZ6Ii8+DQoJCTwvZz4NCgkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTI5OS4zMDEsMjUzLjY2NGMwLDEuMjEyLTAuOTgzLDIuMTk1LTIuMTk1LDIuMTk1aC04OS40ODRjLTEuMjEyLDAtMi4xOTItMC45ODMtMi4xOTItMi4xOTV2LTAuMjc0DQoJCQljMC0xLjIxMiwwLjk4LTIuMTk0LDIuMTkyLTIuMTk0aDg5LjQ4NGMxLjIxMiwwLDIuMTk1LDAuOTgyLDIuMTk1LDIuMTk0VjI1My42NjR6Ii8+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=';
		return (
			<>
			{ isPreview ? <img width='100%' src={previewImageData} alt=''/> :
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
}
			</>
		);
};

export default React.memo( Render );
