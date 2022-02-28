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
	const previewImageData = '';
	return (
		<>
		  isPreview ? <img width='100%' src={previewImageData}/> :
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
		</>
	);
};

export default React.memo( Render );
