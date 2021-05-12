import classnames from 'classnames';
import TableOfContents from './toc';
import React from 'react';
import { __ } from '@wordpress/i18n';
import renderSVG from '@Controls/renderIcon';

const { RichText } = wp.blockEditor;

const Render = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes, className, headers, deviceType } = props;

	const {
		align,
		makeCollapsible,
		initialCollapse,
		icon,
		tColumnsDesktop,
		mappingHeaders,
		headingTitle,
	} = attributes;

	let icon_html = '';

	if ( makeCollapsible && icon ) {
		icon_html = (
			<span className="uag-toc__collapsible-wrap">
				{ renderSVG( icon ) }
			</span>
		);
	}

	return (
		<>
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
					<div className="uagb-toc__title-wrap">
						<RichText
							tagName={ 'div' }
							placeholder={ __(
								'Table Of Contents',
								'ultimate-addons-for-gutenberg'
							) }
							value={ headingTitle }
							className="uagb-toc__title"
							onChange={ ( value ) =>
								setAttributes( { headingTitle: value } )
							}
							multiline={ false }
							onRemove={ () => props.onReplace( [] ) }
						/>
						{ icon_html }
					</div>
					<TableOfContents
						mappingHeaders={ mappingHeaders }
						headers={ headers }
					/>
				</div>
			</div>
		</>
	);
};

export default React.memo( Render );
