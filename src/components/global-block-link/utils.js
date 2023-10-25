import { isEmptyObject, GBS_RANDOM_NUMBER } from '@Utils/Helpers';
import { __ } from '@wordpress/i18n';
import { blocksAttributes } from '@Attributes/getBlocksDefaultAttributes';

export function getLabel( globalBlockStyleId ){
    return ! globalBlockStyleId ? __( 'Link to Existing Style',
        'ultimate-addons-for-gutenberg' ) : __( 'Linked Style',
        'ultimate-addons-for-gutenberg' );
}

export function getGlobalBlockStylesOptions( globalBlockStyles, blockName ){
    return globalBlockStyles.filter( ( style ) => style?.blockName === blockName || ! style?.blockName );
}

export function clearCurrentAttributes( currentBlockDefaultAttributes, setAttributes ){
    const saveAttr = {};
    for ( const attrKey in currentBlockDefaultAttributes ) {
        const attrObject = currentBlockDefaultAttributes[ attrKey ];
        if( attrObject?.isGBSStyle ){
            
            let value = '';
            
            switch ( attrObject.type ) {
                case 'boolean':
                    value = false;
                    break;
                case 'number':
                    // GBS_RANDOM_NUMBER is a placeholder kind of value which is used to identify the attribute is a GBS style attribute.
                    value = GBS_RANDOM_NUMBER;
                    break;
                case 'object':
                    value = {};
                    break;
                case 'array':
                    value = [];
                    break;
            }
            saveAttr[ attrKey ] = value;
        }
    }

    if( ! isEmptyObject( saveAttr ) ){
        setAttributes( saveAttr );
    }
}

export function clearNumberAttributes( currentAttributes, setAttributes ){
    const saveAttr = {};
    for ( const attrKey in currentAttributes ) {
        const attrObject = currentAttributes[ attrKey ];
        if( GBS_RANDOM_NUMBER === attrObject ){
            saveAttr[ attrKey ] = undefined;
        }
    }

    if( ! isEmptyObject( saveAttr ) ){
        setAttributes( saveAttr );
    }
}

export function getNewAttributes( style, attributes, currentBlockDefaultAttributes ){
    const defaultAttributes = style?.attributes || attributes;
    const finalAttributes = {};
    for ( const attrKey in attributes ) {
        const attrValue = attributes[attrKey];
        if( currentBlockDefaultAttributes[ attrKey ]?.isGBSStyle && attrValue && '0.001020304' !== attrValue && {} !== attrValue && [] !== attrValue && !isEmptyObject( attrValue ) ){
            finalAttributes[attrKey] = attrValue;
        }
    }

    const newAttributes = { ...defaultAttributes, ...finalAttributes };

    for( const attribute in newAttributes ) {
        if( GBS_RANDOM_NUMBER === newAttributes?.[attribute] ){
            newAttributes[attribute] = '';
        }
    }

    return newAttributes;
}

export function updatePostIdInGbsArray( style, store_ids, id_or_slug = 'post_ids' ){
    const idsArray = 'post_ids' === id_or_slug ? 'post_ids' : 'page_template_slugs';
    let assignArray = style?.[idsArray] ? [ ...style[idsArray] ] : [];
    assignArray.push( store_ids );
    // Make array values unique.
    if( style?.[idsArray] ){
        assignArray = [ ...new Set( assignArray ) ];
    }
    return assignArray;
}

//
export const currentGlobalBlockStyleIdAttributes = ( globalBlockStyles, globalBlockStyleId ) => {
    const getGbsValue = globalBlockStyles.find( style => style?.value === globalBlockStyleId );
    if( ! getGbsValue?.attributes ){
        return {};
    }

    const getGbsAttributes = getGbsValue.attributes;
    // Block name removed uagb/
    const blockName = getGbsValue?.blockName?.replace( 'uagb/', '' );

    const attributes = {};
    for ( const attributeKey in getGbsAttributes ) {
        if( ! blocksAttributes?.[ blockName ]?.[ attributeKey ]?.isGBSStyle ){
            continue;
        }
        attributes[ attributeKey ] = getGbsAttributes[ attributeKey ];
    }

    return attributes;
};
