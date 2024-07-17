import classnames from 'classnames';
import styles from './editor.lazy.scss';
import renderSVG from '@Controls/renderIcon';
import { __ } from '@wordpress/i18n';
import { useLayoutEffect, memo } from '@wordpress/element';
import { InnerBlocks, RichText } from '@wordpress/block-editor';
import { Tooltip, Dashicon } from '@wordpress/components';
import { createBlock } from '@wordpress/blocks';
import { select, dispatch } from '@wordpress/data';
const { updateBlockAttributes, insertBlock, removeBlock } = ! wp.blockEditor
	? dispatch( 'core/editor' )
	: dispatch( 'core/block-editor' );
const { getBlockOrder } = ! wp.blockEditor ? select( 'core/editor' ) : select( 'core/block-editor' );
const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { attributes, setAttributes, clientId, deviceType } = props;
	const {
		tabsStyleD,
		tabsStyleM,
		tabsStyleT,
		tabHeaders,
		tabActive,
		tabAlign,
		showIcon,
		icon,
		iconPosition,
	} = attributes;

	const onMoveForward = ( oldIndex, realTabsCount ) => {
		return () => {
			if ( oldIndex === realTabsCount - 1 ) {
				return;
			}
			onMove( oldIndex, oldIndex + 1 );
		};
	};
	const onMoveBack = ( oldIndex ) => {
		return () => {
			if ( oldIndex < 0 ) {
				return;
			}
			onMove( oldIndex, oldIndex - 1 );
		};
	};
	const updateTabsTitle = ( header, index ) => {
		const childBlocks = getBlockOrder( clientId );

		const newHeaders = tabHeaders.map( ( item, idx ) => {
			if ( index === idx ) {
				item = header;
			}
			return item;
		} );

		setAttributes( { tabHeaders: newHeaders } );
		updateBlockAttributes( childBlocks[ index ], { header } );
		updateTabTitle();
	};
	const onMove = ( oldIndex, newIndex ) => {
		const { tabActiveFrontend } = attributes;

		const { getBlock } = ! wp.blockEditor ? select( 'core/editor' ) : select( 'core/block-editor' );
		const tabsBlock = getBlock( clientId );

		const titles = [ ...tabHeaders ];
		titles.splice( newIndex, 1, tabHeaders[ oldIndex ] );
		titles.splice( oldIndex, 1, tabHeaders[ newIndex ] );
		setAttributes( { tabHeaders: titles } );
		if ( tabActiveFrontend === oldIndex + 1 ) {
			setAttributes( { tabActiveFrontend: newIndex + 1 } );
		} else if ( tabActiveFrontend === newIndex + 1 ) {
			setAttributes( { tabActiveFrontend: oldIndex + 1 } );
		}
		props.moveTab( tabsBlock.innerBlocks[ oldIndex ].clientId, newIndex );
		props.resetTabOrder();
	};
	const updateTabTitle = () => {
		const childBlocks = getBlockOrder( clientId );

		childBlocks.forEach( ( childBlockId ) => updateBlockAttributes( childBlockId, { tabHeaders } ) );
	};
	const addTab = () => {
		const tabItemBlock = createBlock( 'uagb/tabs-child' );

		insertBlock( tabItemBlock, attributes.tabHeaders.length, clientId );
		setAttributes( {
			tabHeaders: [ ...attributes.tabHeaders, 'New Tab' ],
		} );
		props.resetTabOrder();
	};
	const removeTab = ( index ) => {
		const childBlocks = getBlockOrder( clientId );

		removeBlock( childBlocks[ index ], false );
		setAttributes( {
			tabHeaders: attributes.tabHeaders.filter( ( vl, idx ) => idx !== index ),
		} );
		updateTabsAttr( { tabActive: 0 } );
		props.resetTabOrder();
	};
	const updateTabsAttr = ( attrs ) => {
		const childBlocks = getBlockOrder( clientId );

		setAttributes( attrs );
		childBlocks.forEach( ( childBlockId ) => updateBlockAttributes( childBlockId, attrs ) );
	};

	return (
		<>
			<div
				className={ classnames(
					`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
					`uagb-block-${ clientId.substr( 0, 8 ) }`,
					'uagb-tabs__wrap',
					`uagb-tabs__${ tabsStyleD }-desktop`,
					`uagb-tabs__${ tabsStyleT }-tablet`,
					`uagb-tabs__${ tabsStyleM }-mobile`
				) }
			>
				<ul className={ `uagb-tabs__panel uagb-tabs__align-${ tabAlign }` }>
					{ tabHeaders.map( ( header, index ) => (
						<li
							key={ index }
							className={ `uagb-tab ${ tabActive === index ? 'uagb-tabs__active' : '' } ` }
							id={ `uagb-tabs__tab${ index }` }
						>
							{ tabHeaders.length > 0 && (
								<div className="uagb-tabs-editor-controls">
									{ index !== 0 && (
										<Tooltip text={ __( 'Move item back', 'ultimate-addons-for-gutenberg' ) }>
											<span // eslint-disable-line jsx-a11y/click-events-have-key-events
												role="button"
												className="uagb-tab-item__move-back"
												onClick={ index === 0 ? ' ' : onMoveBack( index, tabHeaders.length ) }
												aria-disabled={ index === tabHeaders.length }
												disabled={ index === tabHeaders.length }
											>
												{ ( tabsStyleD.includes( 'vstyle' ) && deviceType === 'Desktop' ) ||
												( tabsStyleT.includes( 'vstyle' ) && deviceType === 'Tablet' ) ||
												( ( tabsStyleM.includes( 'vstyle' ) ||
													tabsStyleM.includes( 'stack' ) ) &&
													deviceType === 'Mobile' ) ? (
													<Dashicon icon="arrow-up" />
												) : (
													<Dashicon icon="arrow-left" />
												) }
											</span>
										</Tooltip>
									) }
									{ index + 1 !== tabHeaders.length && (
										<Tooltip text={ __( 'Move item forward', 'ultimate-addons-for-gutenberg' ) }>
											<span // eslint-disable-line jsx-a11y/click-events-have-key-events
												role="button"
												className="uagb-tab-item__move-forward"
												onClick={
													index === tabHeaders.length
														? ' '
														: onMoveForward( index, tabHeaders.length )
												}
												aria-disabled={ index === tabHeaders.length }
												disabled={ index === tabHeaders.length }
											>
												{ ( tabsStyleD.includes( 'vstyle' ) && deviceType === 'Desktop' ) ||
												( tabsStyleT.includes( 'vstyle' ) && deviceType === 'Tablet' ) ||
												( ( tabsStyleM.includes( 'vstyle' ) ||
													tabsStyleM.includes( 'stack' ) ) &&
													deviceType === 'Mobile' ) ? (
													<Dashicon icon="arrow-down" />
												) : (
													<Dashicon icon="arrow-right" />
												) }
											</span>
										</Tooltip>
									) }
									<Tooltip text={ __( 'Remove tab', 'ultimate-addons-for-gutenberg' ) }>
										<span // eslint-disable-line jsx-a11y/click-events-have-key-events
											role="button"
											tabIndex={ index }
											className="uagb-tabs__remove"
											onClick={ () => removeTab( index ) }
										>
											<Dashicon icon="no" />
										</span>
									</Tooltip>
								</div>
							) }
							<a // eslint-disable-line jsx-a11y/anchor-is-valid, jsx-a11y/click-events-have-key-events
								role="button"
								tabIndex={ index }
								className={ `uagb-tabs__icon-position-${ iconPosition } uagb-tabs-list` }
								onClick={ () => {
									props.updateActiveTab( index );
								} }
								data-tab={ index }
							>
								{ showIcon && icon && ( iconPosition === 'left' || iconPosition === 'top' ) && (
									<span className="uagb-tabs__icon">{ renderSVG( icon, setAttributes ) }</span>
								) }
								<RichText
									tagName="p"
									value={ header }
									onChange={ ( value ) => updateTabsTitle( value, index ) }
									onSplit={ () => null }
									placeholder={ __( 'Title…', 'ultimate-addons-for-gutenberg' ) }
									allowedFormats={ [ 'core/bold', 'core/italic' ] }
								/>
								{ showIcon && icon && ( iconPosition === 'right' || iconPosition === 'bottom' ) && (
									<span className="uagb-tabs__icon">{ renderSVG( icon, setAttributes ) }</span>
								) }
							</a>
						</li>
					) ) }
					<li
						className="uagb-tab uagb-tabs__add-tab" // eslint-disable-line jsx-a11y/click-events-have-key-events
						role="presentation"
						tabIndex="0"
						onClick={ () => addTab() }
					>
						<Tooltip text={ __( 'Add tab', 'ultimate-addons-for-gutenberg' ) }>
							<Dashicon icon="plus" />
						</Tooltip>
					</li>
				</ul>
				<div className="uagb-tabs__body-wrap">
					<InnerBlocks
						template={ [ [ 'uagb/tabs-child' ], [ 'uagb/tabs-child' ], [ 'uagb/tabs-child' ] ] }
						templateLock={ false }
						allowedBlocks={ [ 'uagb/tabs-child' ] }
						renderAppender={ false }
					/>
				</div>
			</div>
		</>
	);
};
export default memo( Render );
