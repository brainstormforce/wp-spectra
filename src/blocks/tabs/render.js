import classnames from 'classnames';
import styles from './editor.lazy.scss';
import renderSVG from '@Controls/renderIcon';
import { __ } from '@wordpress/i18n';
import React, { useLayoutEffect } from 'react';
import { InnerBlocks, RichText } from '@wordpress/block-editor';
import { Tooltip, Dashicon } from '@wordpress/components';
import { createBlock } from '@wordpress/blocks';
import { select, dispatch } from '@wordpress/data';
const { updateBlockAttributes, insertBlock, removeBlock } = ! wp.blockEditor
	? dispatch( 'core/editor' )
	: dispatch( 'core/block-editor' );
const { getBlockOrder } = ! wp.blockEditor
	? select( 'core/editor' )
	: select( 'core/block-editor' );
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
	const {
		attributes,
		setAttributes,
		clientId,
	} = props;
	const {
		isPreview,
		tabsStyleD,
		tabsStyleM,
		tabsStyleT,
		tabHeaders,
		tabActive,
		tabAlign,
		showIcon,
		icon,
		iconPosition
	} = attributes;

	const deviceType = useDeviceType()

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

		const { getBlock } = ! wp.blockEditor
			? select( 'core/editor' )
			: select( 'core/block-editor' );
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

		childBlocks.forEach( ( childBlockId ) =>
			updateBlockAttributes( childBlockId, { tabHeaders } )
		);
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
			tabHeaders: attributes.tabHeaders.filter(
				( vl, idx ) => idx !== index
			),
		} );
		updateTabsAttr( { tabActive: 0 } );
		props.resetTabOrder();
	};
	const updateTabsAttr = ( attrs ) => {
		const childBlocks = getBlockOrder( clientId );

		setAttributes( attrs );
		childBlocks.forEach( ( childBlockId ) =>
			updateBlockAttributes( childBlockId, attrs )
		);
	};
	const previewImageData = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMzUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNNzMuODc0LDExMy4xODFjMCwyLjcxLTIuMTk3LDQuOTA2LTQuOTA2LDQuOTA2SDMwLjk3NmMtMi43MDksMC00LjkwNi0yLjE5Ni00LjkwNi00LjkwNnYtMS42MzYNCgkJCWMwLTIuNzA5LDIuMTk3LTQuOTA2LDQuOTA2LTQuOTA2aDM3Ljk5MmMyLjcwOSwwLDQuOTA2LDIuMTk3LDQuOTA2LDQuOTA2VjExMy4xODF6Ii8+DQoJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0xMjguNjA1LDExMy4xODFjMCwyLjcxLTIuMTk3LDQuOTA2LTQuOTA2LDQuOTA2SDg1LjcwOGMtMi43MDksMC00LjkwNi0yLjE5Ni00LjkwNi00LjkwNnYtMS42MzYNCgkJCWMwLTIuNzA5LDIuMTk3LTQuOTA2LDQuOTA2LTQuOTA2aDM3Ljk5MmMyLjcwOSwwLDQuOTA2LDIuMTk3LDQuOTA2LDQuOTA2VjExMy4xODF6Ii8+DQoJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0xODMuMzM2LDExMy4xODFjMCwyLjcxLTIuMTk2LDQuOTA2LTQuOTA2LDQuOTA2aC0zNy45OTFjLTIuNzA5LDAtNC45MDYtMi4xOTYtNC45MDYtNC45MDZ2LTEuNjM2DQoJCQljMC0yLjcwOSwyLjE5Ny00LjkwNiw0LjkwNi00LjkwNmgzNy45OTFjMi43MSwwLDQuOTA2LDIuMTk3LDQuOTA2LDQuOTA2VjExMy4xODF6Ii8+DQoJPC9nPg0KCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0zMjMuOTMsMjM1LjU2OGMwLDQuMzAzLTMuNDg5LDcuNzkzLTcuNzk0LDcuNzkzSDMzLjg2M2MtNC4zMDQsMC03Ljc5My0zLjQ5LTcuNzkzLTcuNzkzdi05Ni4wNTENCgkJYzAtNC4zMDUsMy40ODktNy43OTQsNy43OTMtNy43OTRoMjgyLjI3MmM0LjMwNSwwLDcuNzk0LDMuNDg5LDcuNzk0LDcuNzk0VjIzNS41Njh6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==';
	return (
		<>
		{ isPreview ? <img width='100%' src={previewImageData}/> :
			<div
				className={ classnames(
					`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
					`uagb-block-${ props.clientId.substr( 0, 8 ) }`,
					'uagb-tabs__wrap',
					`uagb-tabs__${ tabsStyleD }-desktop`,
					`uagb-tabs__${ tabsStyleT }-tablet`,
					`uagb-tabs__${ tabsStyleM }-mobile`
				) }
			>
				<ul
					className={ `uagb-tabs__panel uagb-tabs__align-${ tabAlign }` }
				>
					{ tabHeaders.map( ( header, index ) => (
						<li
							key={ index }
							className={ `uagb-tab ${
								tabActive === index ? 'uagb-tabs__active' : ''
							} ` }
							id={ `uagb-tabs__tab${ index }` }
						>
							{ tabHeaders.length > 0 && (
								<div className="uagb-tabs-editor-controls">
									{ index !== 0 && (
										<Tooltip
											text={ __(
												'Move Item Back',
												'ultimate-addons-for-gutenberg'
											) }
										>
											<span // eslint-disable-line jsx-a11y/click-events-have-key-events
												role='button'
												className="uagb-tab-item__move-back"
												onClick={
													index === 0
														? ' '
														: onMoveBack(
																index,
																tabHeaders.length
														  )
												}
												aria-disabled={
													index === tabHeaders.length
												}
												disabled={
													index === tabHeaders.length
												}
											>
												<Dashicon icon="arrow-left" />
											</span>
										</Tooltip>
									) }
									{ index + 1 !== tabHeaders.length && (
										<Tooltip
											text={ __(
												'Move Item Forward',
												'ultimate-addons-for-gutenberg'
											) }
										>
											<span // eslint-disable-line jsx-a11y/click-events-have-key-events
												role='button'
												className="uagb-tab-item__move-forward"
												onClick={
													index === tabHeaders.length
														? ' '
														: onMoveForward(
																index,
																tabHeaders.length
														  )
												}
												aria-disabled={
													index === tabHeaders.length
												}
												disabled={
													index === tabHeaders.length
												}
											>
												<Dashicon icon="arrow-right" />
											</span>
										</Tooltip>
									) }
									<Tooltip
										text={ __(
											'Remove tab',
											'ultimate-addons-for-gutenberg'
										) }
									>
										<span // eslint-disable-line jsx-a11y/click-events-have-key-events
											role='button'
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
								role='button'
								tabIndex={ index }
								className={ `uagb-tabs__icon-position-${ iconPosition } uagb-tabs-list` }
								onClick={ () => {
									props.updateActiveTab( index );
								} }
								data-tab={ index }
							>
								{ showIcon &&
									icon &&
									( iconPosition === 'left' ||
										iconPosition === 'top' ) && (
										<span className="uagb-tabs__icon">
											{ renderSVG( icon ) }
										</span>
									) }
								<RichText
									tagName="p"
									value={ header }
									onChange={ ( value ) =>
										updateTabsTitle( value, index )
									}
									onSplit={ () => null }
									placeholder={ __(
										'Title…',
										'ultimate-addons-for-gutenberg'
									) }
								/>
								{ showIcon &&
									icon &&
									( iconPosition === 'right' ||
										iconPosition === 'bottom' ) && (
										<span className="uagb-tabs__icon">
											{ renderSVG( icon ) }
										</span>
									) }
							</a>
						</li>
					) ) }
					<li className="uagb-tab uagb-tabs__add-tab">
						<Tooltip
							text={ __(
								'Add tab',
								'ultimate-addons-for-gutenberg'
							) }
						>
							<span // eslint-disable-line jsx-a11y/click-events-have-key-events
								role='button'
								tabIndex='0'
								onClick={ () => addTab() }
							>
								<Dashicon icon="plus" />
							</span>
						</Tooltip>
					</li>
				</ul>
				<div className="uagb-tabs__body-wrap">
					<InnerBlocks
						template={ [
							[ 'uagb/tabs-child' ],
							[ 'uagb/tabs-child' ],
							[ 'uagb/tabs-child' ],
						] }
						templateLock={ false }
						allowedBlocks={ [ 'uagb/tabs-child' ] }
					/>
				</div>
			</div>
}
		</>
	);
};
export default React.memo( Render );
