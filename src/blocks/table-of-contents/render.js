import classnames from 'classnames';
import TableOfContents from './toc';
import React, { useLayoutEffect, useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import renderSVG from '@Controls/renderIcon';
import { RichText } from '@wordpress/block-editor';
import styles from './editor.lazy.scss';
import { useDeviceType } from '@Controls/getPreviewType';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	useEffect( () => {
		if ( UAGBTableOfContents ) {
			UAGBTableOfContents.init();
		}
	}, [] );

	props = props.parentProps;
	const deviceType = useDeviceType();
	const { attributes, setAttributes, className, headers } = props;

	const {
		align,
		makeCollapsible,
		initialCollapse,
		icon,
		tColumnsDesktop,
		mappingHeaders,
		headingTitle,
		isPreview,
	} = attributes;

	let iconHtml = '';

	if ( makeCollapsible && icon ) {
		iconHtml = renderSVG( icon );
	}
	const previewImageData = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMzUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGZpbGw9IiNGMUYxRjIiIGQ9Ik0yOTYuNDMsMjE0LjE1OGMwLDMuNTA4LTIuODQ1LDYuMzU0LTYuMzU0LDYuMzU0SDU5LjkyNGMtMy41MDksMC02LjM1NC0yLjg0Ni02LjM1NC02LjM1NHYtNzguMzE1DQoJCWMwLTMuNTEsMi44NDUtNi4zNTQsNi4zNTQtNi4zNTRoMjMwLjE1MWMzLjUxLDAsNi4zNTQsMi44NDUsNi4zNTQsNi4zNTRWMjE0LjE1OHoiLz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTI1OS4zNjIsMTU1LjgwMWMwLDMuNDU0LTIuODAxLDYuMjU2LTYuMjU4LDYuMjU2SDg0LjE3OWMtMy40NTYsMC02LjI1Ny0yLjgwMi02LjI1Ny02LjI1NmwwLDANCgkJCWMwLTMuNDU3LDIuODAxLTYuMjU4LDYuMjU3LTYuMjU4aDE2OC45MjZDMjU2LjU2MiwxNDkuNTQzLDI1OS4zNjIsMTUyLjM0NCwyNTkuMzYyLDE1NS44MDFMMjU5LjM2MiwxNTUuODAxeiIvPg0KCQk8Zz4NCgkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yNzIuMDc4LDE4MS45M2MwLDIuMDMxLTEuNjQ2LDMuNjgtMy42NzgsMy42OGgtMTg2LjhjLTIuMDMxLDAtMy42NzktMS42NDgtMy42NzktMy42OHYtMC40NTkNCgkJCQljMC0yLjAzMSwxLjY0Ny0zLjY3NywzLjY3OS0zLjY3N2gxODYuOGMyLjAzMSwwLDMuNjc4LDEuNjQ2LDMuNjc4LDMuNjc3VjE4MS45M3oiLz4NCgkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yMzUuMjY4LDE5Ni43NzdjMCwyLjAzMS0xLjY0NiwzLjY4LTMuNjc4LDMuNjhIODEuNmMtMi4wMzEsMC0zLjY3OC0xLjY0OC0zLjY3OC0zLjY4di0wLjQ1OQ0KCQkJCWMwLTIuMDMzLDEuNjQ2LTMuNjc4LDMuNjc4LTMuNjc4aDE0OS45OWMyLjAzMSwwLDMuNjc4LDEuNjQ1LDMuNjc4LDMuNjc4VjE5Ni43Nzd6Ii8+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==';
	return (
		<>
		 { isPreview ? <img width='100%' src={previewImageData}/> :
			<div
				className={ classnames(
					className,
					`uagb-toc__align-${ align }`,
					`uagb-toc__columns-${ tColumnsDesktop }`,
					initialCollapse ? 'uagb-toc__collapse' : '',
					`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
					`uagb-block-${ props.clientId.substr( 0, 8 ) }`
				) }
			>
				<div className="uagb-toc__wrap">
					<div className="uagb-toc__title">
						<RichText
							placeholder={ __(
								'Table Of Contents',
								'ultimate-addons-for-gutenberg'
							) }
							value={ headingTitle }
							onChange={ ( value ) =>
								setAttributes( { headingTitle: value } )
							}
							multiline={ false }
							onRemove={ () => props.onReplace( [] ) }
						/>
						{ iconHtml }
						</div>
					<TableOfContents
						mappingHeaders={ mappingHeaders }
						headers={ headers }
					/>
				</div>
			</div>
}
		</>
	);
};

export default React.memo( Render );
