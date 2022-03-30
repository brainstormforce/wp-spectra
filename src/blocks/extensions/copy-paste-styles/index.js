import { __ } from '@wordpress/i18n';
import { select, dispatch, useDispatch } from '@wordpress/data';
import { store as keyboardShortcutsStore, useShortcut } from '@wordpress/keyboard-shortcuts';
import { createHigherOrderComponent } from '@wordpress/compose';
// Import Blocks Attributes.
import { blocksAttributes } from '@Controls/getBlocksDefaultAttributes';

import {
	BlockControls,
} from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton, Popover, MenuItem } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import editorStyles from './../editor.lazy.scss';
import { useLayoutEffect } from 'react';
import { addFilter } from '@wordpress/hooks';


const UAGCopyPasteStyles = () => {

    // Registering the shortcuts
	const { registerShortcut } = useDispatch( keyboardShortcutsStore );

    const [ showPopup, setshowPopup ] = useState( false );
    const [ disablePaste, setdisablePaste ] = useState( false );
    const { hasMultiSelection } = select( 'core/block-editor' );

	useLayoutEffect( () => {
		editorStyles.use();
		return () => {
			editorStyles.unuse();
		};
	}, [] );

    useEffect( () => {
        /* eslint-disable no-undef */
        xsLocalStorage.init(
            {
                iframeUrl: 'https://brainstormforce.github.io/uag-cp/updated-index.html',
                initCallback () {

                    xsLocalStorage.getItem( 'uag-copy-paste-styles', function ( loop_element ) {

                        const uagLocalStorageObject = JSON.parse( loop_element.value );

                        if ( ! uagLocalStorageObject ) {
                            xsLocalStorage.setItem( 'uag-copy-paste-styles', JSON.stringify( {} ) );
                        }

                        if ( uagLocalStorageObject ) {
                            for ( const block in uagLocalStorageObject ) {

                                const hoursSinceStylesSaved = Math.abs( Date.now() - uagLocalStorageObject[block].stylesSavedTimeStamp ) / 36e5;

                                if ( hoursSinceStylesSaved >= 8 ) {
                                    delete uagLocalStorageObject[block];
                                }
                            }

                            xsLocalStorage.setItem( 'uag-copy-paste-styles', JSON.stringify( uagLocalStorageObject ) );
                        }
                    } );
                }
            }
        );

        registerShortcut( {
			name: 'uagb/copy',
			category: 'block',
			description: __( 'Copy the selected block(s).' ),
			keyCombination: {
				modifier: 'primaryShift',
				character: 'y',
			},
		} );


        registerShortcut( {
			name: 'uagb/paste',
			category: 'block',
			description: __( 'Paste the selected block(s).' ),
			keyCombination: {
				modifier: 'primaryShift',
				character: 'u',
			},
		} );

	}, [] );

    const copyStylesHandler = () => {

        setshowPopup( false );

        /* eslint-disable no-shadow */
        const { getSelectedBlock, hasMultiSelection, getMultiSelectedBlocks } = select( 'core/block-editor' );

        if ( hasMultiSelection()
		) {
            const multiSelectedBlocksData = getMultiSelectedBlocks();
            multiSelectedBlocksData.map( ( block ) => {

                if( block ) {
                    storeBlockStyles( block );
                }

                return block;
            } );

            return;
        }

        const selectedBlockData = getSelectedBlock();

        if ( selectedBlockData ) {
            storeBlockStyles( selectedBlockData );
        }
    };

    const pasteStylesHandler = () => {

        setshowPopup( false );

        const { getSelectedBlock, hasMultiSelection, getMultiSelectedBlocks } = select( 'core/block-editor' );

        if ( hasMultiSelection() ) {
            const multiSelectedBlocksData = getMultiSelectedBlocks();
            multiSelectedBlocksData.map( ( block ) => {

                if( block ) {
                    pasteBlockStyles( block );
                }

                return block;
            } );

            return;
        }

        const selectedBlockData = getSelectedBlock();

        if ( selectedBlockData ) {

            pasteBlockStyles( selectedBlockData );
        }
    };

    const storeBlockStyles = ( blockData ) => {

		xsLocalStorage.setItem( 'uag-copy-paste-styles', JSON.stringify( {} ) );

        const {
            attributes,
            name,
			innerBlocks
        } = blockData;

        xsLocalStorage.getItem( 'uag-copy-paste-styles', function ( loop_element ) {

            const uagLocalStorageObject = JSON.parse( loop_element.value );

			if ( uagLocalStorageObject ) {
				xsLocalStorage.setItem( 'uag-copy-paste-styles', JSON.stringify( {} ) );
			}

            let styles = {};
			const parentStyle = {};

            if ( name.includes( 'uagb/' ) ) {

                const blockName = name.replace( 'uagb/', '' );
                const blockAttributes = blocksAttributes[blockName];

				uagLocalStorageObject[`${blockName}-styles`] = {};
				uagLocalStorageObject[`global-style`] = {};

                if ( blockAttributes && uagLocalStorageObject ) {

                    Object.keys( blockAttributes ).map( ( attribute ) => {

                        if ( blockAttributes[attribute].UAGCopyPaste ) {

							const key = blockAttributes[attribute].UAGCopyPaste.styleType;

							if ( attributes[attribute] ) {

                                styles[key] = attributes[attribute];
                                parentStyle[attribute] = attributes[attribute];

                            }
                        }

                        return attribute;

                    } );

                }
				if( innerBlocks ) {

					parentStyle.innerblocks = innerBlocks;

				}

				styles.stylesSavedTimeStamp = Date.now();

				uagLocalStorageObject[`${blockName}-styles`] = parentStyle;
				uagLocalStorageObject[`global-style`] = styles;

				xsLocalStorage.setItem( 'uag-copy-paste-styles', JSON.stringify( uagLocalStorageObject ) );
            }

            if ( name.includes( 'core/' ) ) {
                const blockName = name.replace( 'core/', '' );
                styles = attributes;

                styles.stylesSavedTimeStamp = Date.now();

                uagLocalStorageObject[`core-${blockName}-styles`] = styles;

                xsLocalStorage.setItem( 'uag-copy-paste-styles', JSON.stringify( uagLocalStorageObject ) );
            }
        } );
    };

    const pasteBlockStyles = ( blockData ) => {

        const {
            name,
            clientId,
			innerBlocks
        } = blockData

        let styles;
		let pasteStyle;
		const parentAttr = {};
        let uagLocalStorageObject = {};

        xsLocalStorage.getItem( 'uag-copy-paste-styles', function ( loop_element ) {

			uagLocalStorageObject = JSON.parse( loop_element.value );

            if ( name.includes( 'uagb/' ) ) {

				styles = uagLocalStorageObject[`global-style`];

				const blockName = name.replace( 'uagb/', '' );
				const blockAttributes = blocksAttributes[blockName];

				pasteStyle = uagLocalStorageObject[`${blockName}-styles`];

				if(  blockAttributes && pasteStyle ) {

                    updateBlockStyles( clientId, pasteStyle );

					if( innerBlocks  ) {

						const childAttr = {};

						innerBlocks.map( ( childBlock , index ) => {

							const childName = childBlock.name.replace( 'uagb/', '' );
							const blockAttributes = blocksAttributes[childName];

							Object.keys( blockAttributes ).map( ( attribute ) => {

								if ( blockAttributes[attribute].UAGCopyPaste ) {

									childAttr[attribute] = pasteStyle.innerblocks[index].attributes[attribute];
								}
								return childAttr;
							} );

							updateBlockStyles( childBlock.clientId,  childAttr );

							return childBlock;
						} );

					}

				}else if ( blockAttributes && styles ) {

					Object.keys( blockAttributes ).map( ( attribute ) => {

						if ( blockAttributes[attribute].UAGCopyPaste ) {

							const key = blockAttributes[attribute].UAGCopyPaste.styleType;

							Object.keys( styles ).map( ( item ) => {

								if( item === key ){

									parentAttr[attribute] = styles[key];

								}
								return parentAttr;
							} )

						}
						return parentAttr;
					} );

					updateBlockStyles( clientId, parentAttr );
				}
            }

            if ( name.includes( 'core/' ) ) {

                const selectedBlockName = name.replace( 'core/', '' );

                const unwantedAttributes = ['content', 'values', 'value', 'citation', 'body', 'caption', 'foot', 'head', 'url', 'alt', 'id', 'linkDestination'];

                pasteStyle= uagLocalStorageObject[`core-${selectedBlockName}-styles`];

                unwantedAttributes.map( ( attr ) => {
                    if( pasteStyle[attr] ) {
                        delete pasteStyle[attr];
                    }
                    return attr;
                } );
				updateBlockStyles( clientId, pasteStyle );
            }
        } );


    };

    const updateBlockStyles = ( clientId, styles ) => {
        dispatch( 'core/block-editor' ).updateBlockAttributes( clientId, styles );
    };

    useShortcut( 'uagb/copy', ( event ) => {
		copyStylesHandler();
		event.preventDefault();
	} );
    useShortcut( 'uagb/paste', ( event ) => {
		pasteStylesHandler();
		event.preventDefault();
	} );

    const openPopup = () => {

        xsLocalStorage.getItem( 'uag-copy-paste-styles', function ( loop_element ) {

            const uagLocalStorageObject = JSON.parse( loop_element.value );
            setshowPopup( !showPopup );

            if( 0 === Object.keys( uagLocalStorageObject ).length ) {
                setdisablePaste( true );
                return;
            }

            setdisablePaste( false );

        } );

    };

    let stylesText = __( 'Style', 'ultimate-addons-for-gutenberg' );

    if ( hasMultiSelection() ) {
        stylesText = __( 'Styles', 'ultimate-addons-for-gutenberg' );
    }

    return (
        <BlockControls group="block">
            <ToolbarGroup className="uag-copy-paste-styles">
                <ToolbarButton
                    icon="admin-appearance"
                    label={ __( 'Spectra Copy/Paste', 'ultimate-addons-for-gutenberg' ) }
                    onClick={ () => {
                        openPopup();
                    }}
                />
            </ToolbarGroup>
            { showPopup && (
                <Popover
                    position="bottom center"
                    className="uag-copy-paste-styles-popover"
                    focusOnMount="container"

                >
                    <MenuItem
                        onClick={copyStylesHandler}
                    >
                        { __( 'Copy ', 'ultimate-addons-for-gutenberg' ) + stylesText }
                    </MenuItem>
                    <MenuItem
                        onClick={pasteStylesHandler}
                        disabled = {disablePaste}
                    >
                        { __( 'Paste ', 'ultimate-addons-for-gutenberg' ) + stylesText }
                    </MenuItem>
                </Popover>
            )}
        </BlockControls>
    );
};

const displayUAGCopyPasteSettingConditionally = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {

        const { getSelectedBlock, getMultiSelectedBlocks } = select( 'core/block-editor' );
        const excludeBlocks = [ 'core/missing', 'uagb/faq-child', 'uagb/restaurant-menu-child', 'uagb/google-map', 'uagb/content-timeline-child', 'uagb/tabs-child' ];
        const selectedBlock = getSelectedBlock();
        const multiSelectedBlock = getMultiSelectedBlocks();
        let singleSelectBlockFlag = false;
        let multiSelectBlockFlag = false;

        if ( selectedBlock ) {
            const singleSelectedBlockName = selectedBlock.name;

            if ( ( singleSelectedBlockName.includes( 'uagb/' ) || singleSelectedBlockName.includes( 'core/' ) ) && 'core/missing' !== singleSelectedBlockName && ! excludeBlocks.includes( singleSelectedBlockName ) ) {

                singleSelectBlockFlag = true
            }
        }

        if ( multiSelectedBlock && 0 !== multiSelectedBlock.length ) {
            multiSelectedBlock.map( ( value ) => {
                const singleSelectedBlockName = value.name;

                if ( ( singleSelectedBlockName.includes( 'uagb/' ) || singleSelectedBlockName.includes( 'core/' ) ) && 'core/missing' !== singleSelectedBlockName && ! excludeBlocks.includes( singleSelectedBlockName ) ) {

                    multiSelectBlockFlag = true;
                }

                return value;
            } );
        }

		if ( singleSelectBlockFlag || multiSelectBlockFlag ) {
            return (
                <>
                    <BlockEdit { ...props } />
                    <UAGCopyPasteStyles/>
                </>
            );
        }

        if ( ! singleSelectBlockFlag && ! multiSelectBlockFlag ) {
            return (
                <>
                    <BlockEdit { ...props } />
                </>
            );
        }

	};
}, 'displayUAGCopyPasteSettingConditionally' );

if ( 'enabled' === uagb_blocks_info.copy_paste ) {
    addFilter(
        'editor.BlockEdit',
        'uag-copy-paste',
        displayUAGCopyPasteSettingConditionally
    );
}

