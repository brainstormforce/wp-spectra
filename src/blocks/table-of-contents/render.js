import { uagbClassNames } from '@Utils/Helpers';
import TableOfContents from './toc';
import TableOfContentCollapsable from './tocCollapsable';
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
		collapsibleListDepth,
		enableCollapsableList,
		fontSize,
		fontSizeTablet,
		fontSizeMobile,
		markerView,
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

	useEffect( () => {
		const selector = '.uagb-block-' + block_id;
		const block_element = UAGBTableOfContents._getDocumentElement().querySelector( selector );
		// Set computed margin for collapsable marker in editor.			
		if ( UAGBTableOfContents?._setCollapseIconMargin && enableCollapsableList ) {
			// Set initial styles on the block_element itself.
			block_element.style.transition = 'opacity 200ms';
			block_element.style.opacity = '0.25';
			// Set computed margin for collapsable marker in editor.
			UAGBTableOfContents._setCollapseIconMargin( selector, attributes );
		}
		block_element.style.opacity = '';
		
	}, [ fontSize, fontSizeTablet, fontSizeMobile, markerView, headers.length, enableCollapsableList, deviceType ] );

	let iconHtml = '';

	if ( makeCollapsible && icon ) {
		iconHtml = renderSVG( icon, setAttributes );
	}

	return (
		<div
			className={ uagbClassNames( [
				className,
				`uagb-toc__align-${ align }`,
				`uagb-toc__columns-${ getFallbackNumber( tColumnsDesktop, 'tColumnsDesktop', blockName ) }`,
				makeCollapsible && initialCollapse ? 'uagb-toc__collapse' : '',
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ block_id }`,
				enableCollapsableList && 'uagb-toc__collapse--list',
			] ) }
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
				{ enableCollapsableList ? (
					<TableOfContentCollapsable mappingHeaders={ mappingHeaders } headers={ headers } collapsibleListDepth={ collapsibleListDepth } />
				) : (
					<TableOfContents mappingHeaders={ mappingHeaders } headers={ headers } />
				) }
			</div>
		</div>
	);
};

export default memo( Render );
