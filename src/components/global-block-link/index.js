import React, { useLayoutEffect, useEffect } from 'react';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import styles from './editor.lazy.scss';
import { blocksAttributes } from '@Attributes/getBlocksDefaultAttributes';
import { select, withSelect, withDispatch } from '@wordpress/data';
import { Button } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { store as spectraStore } from '@Store';
import { STORE_NAME as storeName } from '@Store/constants';
import { compose } from '@wordpress/compose';
import UAGSelectControl from '@Components/select-control';
import { useDeviceType } from '@Controls/getPreviewType';
import AddNewPopupStyle from './add-new-popup-style';
import { 
    clearCurrentAttributes,
    getLabel,
    getGlobalBlockStylesOptions,
    getNewAttributes,
    clearNumberAttributes,
    updatePostIdInGbsArray,
    currentGlobalBlockStyleIdAttributes,
} from './utils';
import { applyFilters } from '@wordpress/hooks';

const GlobalBlockStyles = ( props ) => {
   // Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

    const deviceType = useDeviceType();

    const {
        globalBlockStyles,
        globalBlockStylesFontFamilies,
        updateGlobalBlockStyles,
        updateGlobalBlockStylesFontFamilies,
        attributes,
        attributes : { globalBlockStyleId },
        styling,
        setAttributes,
        blockName,
        clientId
    } = props;

    const [ uniqueID, setUniqueID ] = useState( false );
    const [ updateLoader, setUpdateLoader ] = useState( false );
    const [ panelLoader, setPanelLoader ] = useState( false );
    const [ saveToDatabase, setSaveToDatabase ] = useState( false );
    const [ generate, setGenerate ] = useState( false );

    const blockNameStripped = blockName.replace( 'uagb/', '' );
    const currentPostID = select( 'core/editor' )?.getCurrentPostId();
	const allBlocksAttributes = wp.hooks.applyFilters( 'uagb.blocksAttributes', blocksAttributes );
    const currentBlockDefaultAttributes = allBlocksAttributes[blockNameStripped];

    // Check page context for FSE template.
    const pageContext = select( 'core/edit-site' )?.getPage();
    const pageTemplateSlug = pageContext?.context?.templateSlug ? pageContext.context.templateSlug : null;

    let styleForGlobal = false;
    if( ! pageTemplateSlug && ! currentPostID ){
        styleForGlobal = true;
    }

    const globalBlockStyleOptions = getGlobalBlockStylesOptions( globalBlockStyles, blockName );

    useEffect( () => {
        if ( saveToDatabase ) {
            saveStylesToDatabase();
        }
	}, [saveToDatabase] );

    useEffect( () => {
        if ( generate ) {
            generateBlockStyles();
        } 
	}, [globalBlockStyleId, globalBlockStyles] );

    const saveStylesToDatabase = ( bulkUpdateStyles = 'no', spectraGlobalStyles = globalBlockStyles, noneValue = false ) => {

        let styleAttributes = {};

        spectraGlobalStyles.map( ( style ) => {
            if ( ( style?.value === uniqueID ) || ( style?.value === globalBlockStyleId ) ) {
                styleAttributes = style?.attributes;
            }
            return style;
        } );
        const formData = new window.FormData();

        formData.append( 'action', 'uag_global_block_styles' );
        formData.append( 'security', uagb_blocks_info.uagb_ajax_nonce );
        formData.append( 'attributes', JSON.stringify( styleAttributes ) );
        formData.append( 'spectraGlobalStyles', JSON.stringify( spectraGlobalStyles ) ); 
        formData.append( 'globalBlockStylesFontFamilies', JSON.stringify( globalBlockStylesFontFamilies ) ); 
        formData.append( 'blockName', blockName );
        formData.append( 'postId', currentPostID );
        formData.append( 'globalBlockStyleId', globalBlockStyleId );
        formData.append( 'bulkUpdateStyles', bulkUpdateStyles );

        apiFetch( {
            url: uagb_blocks_info.ajax_url,
            method: 'POST',
            body: formData,
        } ).then( ( data ) => {
            if ( data?.success ) {
                updateGlobalBlockStyles( data?.data );
                if( ! noneValue ){
                    clearCurrentAttributes( currentBlockDefaultAttributes, setAttributes );
                }else{
                    clearNumberAttributes( attributes, setAttributes );
                }
            }
            
            setUpdateLoader( false );
            setPanelLoader( false );
            setSaveToDatabase( false );
        } );
    };

    const generateBlockStyles = ( newStyleID = globalBlockStyleId ) => {
        updateGoogleFontData( attributes );

        if ( ! newStyleID ) {
            return;
        }
        
        globalBlockStyles.map( ( style ) => {
            if ( newStyleID && style?.value === String( newStyleID ) ) {
                const styleNameClass = style?.value;
                const baseSelector = `.spectra-gbs-${styleNameClass}`;

                const newAttributes = getNewAttributes( style, attributes, currentBlockDefaultAttributes );
                const blockStyling = styling( newAttributes, clientId, blockName, deviceType, baseSelector );
                style.editorStyles = blockStyling;
                style.attributes = newAttributes;
                style.clientId = clientId;
                style.blockName = blockName;
                
                // Save the Post IDs of the Pages where GBS is used.
                style.post_ids = updatePostIdInGbsArray( style, currentPostID );

                // Save FSE template slug.
                if ( pageTemplateSlug ) {
                    style.page_template_slugs = updatePostIdInGbsArray( style, pageTemplateSlug, 'page_template_slugs' );
                }

                // Save for widget and customize area.
                if( styleForGlobal ){
                    style.styleForGlobal = updatePostIdInGbsArray( style, 'widget', 'widget_ids' );
                }
            }
            return style;
        } );

        updateGlobalBlockStyles( globalBlockStyles );
        setSaveToDatabase( true );
        setGenerate( false );
    };

    const updateGoogleFontData = ( attrs ) => {
        attrs = { ...attrs };
        Object.keys( attrs ).map( ( attribute ) => {
            
            if ( attribute.includes( 'Family' ) && '' !== attrs[attribute] ) {
                globalBlockStylesFontFamilies.push( attrs[attribute] );
            }
            return attribute;
        } );

        const output = [];
        for( const item of globalBlockStylesFontFamilies ){
            if( ! output.includes( item ) ){
                output.push( item );
            }
        }
        updateGlobalBlockStylesFontFamilies( output );
    };

	const manageGbsOptions = applyFilters( `spectra.manage.gbs.options`, '', props );

    return (
        <UAGAdvancedPanelBody
            title={ __( 'Global Block Styles', 'ultimate-addons-for-gutenberg' ) }
            initialOpen={ true }
            className={ panelLoader ? 'loading' : '' }
        >            
            { manageGbsOptions }
            { globalBlockStyleOptions?.length > 1 ? ( 
                <UAGSelectControl
                    label={ getLabel( globalBlockStyleId ) }
                    data={ {
                        value: globalBlockStyleId,
                        label: 'globalBlockStyleId',
                    } }
                    onChange = {
                        ( value ) => {
                            let label = '';
                            for ( let i = 0; i < globalBlockStyles.length; i++ ) {
                                if ( globalBlockStyles[i]?.value === value ) {
                                    label = globalBlockStyles[i]?.label;
                                    break;
                                }
                            }

                            globalBlockStyles.map( ( style ) => {
                                if ( style?.value === value ) {
                                    label = style?.label;
                                    // Save the Post IDs of the Pages where GBS is used.
                                    style.post_ids = updatePostIdInGbsArray( style, currentPostID );

                                    // Save FSE template slug.
                                    if ( pageTemplateSlug ) {
                                        style.page_template_slugs = updatePostIdInGbsArray( style, pageTemplateSlug, 'page_template_slugs' );
                                    }

                                    // Save for widget and customize area.
                                    if( styleForGlobal ){
                                        style.styleForGlobal = updatePostIdInGbsArray( style, 'widget', 'widget_ids' );
                                    }

                                }
                                return style;
                            } );
                            
                            updateGlobalBlockStyles( globalBlockStyles );
                            const noneValue = '' === value;
                            saveStylesToDatabase( 'bulkUpdateStyles', globalBlockStyles, noneValue );

                            let updateBlockAttribute = { globalBlockStyleId: value, globalBlockStyleName: label };
                            if( noneValue ){
                                const currentAttribute = currentGlobalBlockStyleIdAttributes ( globalBlockStyles, globalBlockStyleId );
                                updateBlockAttribute = { ...currentAttribute, ...updateBlockAttribute };
                            }

                            setAttributes( updateBlockAttribute );
                            setPanelLoader( true );
                            setUniqueID( value );
                        }
                    }
                    options={ globalBlockStyleOptions }
                    layout="stack"
                /> ) : '' }
            
            
            <div className='spectra-gbs-buttons-wrap'>
                <AddNewPopupStyle { ...{ ...props, setGenerate, uniqueID, setUniqueID } } />
                {
                    ( globalBlockStyleId && '' !== globalBlockStyleId ) && (
                        <div className='gbs-update-save-add-btn'>
                            <Button
                                className={`spectra-gbs-button ${updateLoader ? 'loading' : ''} components-base-control`}
                                onClick={ () => {
                                    setUpdateLoader( true );
                                    generateBlockStyles();
                                } }
                                variant="secondary"
                            >
                                { __( 'Update Style', 'ultimate-addons-for-gutenberg' ) }
                            </Button>
                            <Button
                                    className="spectra-gbs-button components-base-control"
                                    onClick={ () => {
                                        // Get current globalBlockStyleId attributes.
                                        const currentAttribute = currentGlobalBlockStyleIdAttributes ( globalBlockStyles, globalBlockStyleId );
                                        const updateBlockAttribute = { ...currentAttribute, globalBlockStyleId: '', globalBlockStyleName: '' };
                                        setAttributes( updateBlockAttribute );
                                        setUniqueID( false );
                                    } }
                                    variant="secondary"
                            >
                                { __( 'Unlink Style', 'ultimate-addons-for-gutenberg' ) }
                            </Button>
                        </div>
                    )
                }
            </div>
        </UAGAdvancedPanelBody>
    );
};

export default compose(
	withSelect( ( spectraGbsSelect ) => {

		const globalBlockStyles = spectraGbsSelect( storeName ).getGlobalBlockStyles();
		const isOpen = spectraGbsSelect( storeName ).getGlobalBlockStylesPopupState();
		const globalBlockStylesFontFamilies = spectraGbsSelect( storeName ).getGlobalBlockStylesFontFamilies();
        const { getSelectedBlock } = spectraGbsSelect( 'core/block-editor' );
        const selectedBlockData = getSelectedBlock();
        
        const {
            name,
            clientId
        } = selectedBlockData;

		return {
			globalBlockStyles,
            isOpen,
            globalBlockStylesFontFamilies,
            blockName : name,
            clientId
		};	
	} ),
    withDispatch( ( spectraGbsDispatch ) => ( {
		openModal: () => spectraGbsDispatch( spectraStore ).toggleGlobalBlockStylesPopup( 'open' ),
		closeModal: () => spectraGbsDispatch( spectraStore ).toggleGlobalBlockStylesPopup( 'close' ),
        updateGlobalBlockStyles: ( value ) => spectraGbsDispatch( spectraStore ).updateGlobalBlockStyles( value ),
        updateGlobalBlockStylesFontFamilies: ( value ) => spectraGbsDispatch( spectraStore ).updateGlobalBlockStylesFontFamilies( value )
	} ) ),
)( GlobalBlockStyles );