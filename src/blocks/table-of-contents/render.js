import classnames from 'classnames';
import TableOfContents from './toc';
import { useEffect, useRef, useLayoutEffect, memo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import renderSVG from '@Controls/renderIcon';
import { RichText } from '@wordpress/block-editor';
import styles from './editor.lazy.scss';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );
	const { headers } = props;
	const { attributes, setAttributes, className, deviceType, name } = props;
	const blockName = name.replace( 'uagb/', '' );

	const {
		align,
		makeCollapsible,
		initialCollapse,
		icon,
		tColumnsDesktop,
		mappingHeaders,
		headingTitle,
		separatorStyle,
		block_id,
	} = attributes;

	useEffect( () => {
		if ( UAGBTableOfContents ) {
			const selector = '.uagb-block-' + block_id;
			UAGBTableOfContents.init( selector, attributes );
		}
	}, [] );

	// Editor Useable Collaps Begins Here.
	const tocRoot = useRef();

	useEffect( () => {
		if ( tocRoot.current && ! makeCollapsible && tocRoot.current.classList.contains( 'uagb-toc__collapse' ) ) {
			tocRoot.current.classList.remove( 'uagb-toc__collapse' );
			UAGBTableOfContents._slideDown( tocRoot.current.querySelector( '.uagb-toc__list-wrap' ), 500 );
		}
	}, [ makeCollapsible ] );
	// Editor Useable Collaps Ends Here.

	let iconHtml = '';

	if ( makeCollapsible && icon ) {
		iconHtml = renderSVG( icon, setAttributes );
	}

	return (
		<div
			className={ classnames(
				className,
				`uagb-toc__align-${ align }`,
				`uagb-toc__columns-${ getFallbackNumber( tColumnsDesktop, 'tColumnsDesktop', blockName ) }`,
				makeCollapsible && initialCollapse ? 'uagb-toc__collapse' : '',
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ block_id }`
			) }
			ref={ tocRoot }
		>
			<div className="uagb-toc__wrap">
				<div className="uagb-toc__title">
					<RichText
						placeholder={ __( 'Table Of Contents', 'ultimate-addons-for-gutenberg' ) }
						value={ headingTitle }
						onChange={ ( value ) => setAttributes( { headingTitle: value } ) }
						multiline={ false }
						onRemove={ () => props.onReplace( [] ) }
					/>
					{ iconHtml }
				</div>
				{ separatorStyle !== 'none' && <div className="uagb-toc__separator"></div> }
				<TableOfContents mappingHeaders={ mappingHeaders } headers={ headers } />
			</div>
		</div>
	);
};

export default memo( Render );
