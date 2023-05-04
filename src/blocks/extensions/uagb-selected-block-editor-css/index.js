import { useEffect } from '@wordpress/element';
import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
const STYLE_ID = 'uagb-remove-group-parent-tabs';

const AddCssComponent = ( props ) => {
    const { name } = props;

    const addCss = () => {
        return '.components-panel .block-editor-block-inspector div[role="tablist"].components-tab-panel__tabs{display:none;}';
    }

    const addStyleTag = () => {
        const node = document.createElement( 'style' )
        node.setAttribute( 'id', STYLE_ID );
        node.textContent = addCss();
        document.head.appendChild( node );
    }

    const getStyleTag = () => {
        const style = document.getElementById( STYLE_ID );
        return style ? true : false;
    };
    
    const removeStyleTag = () => {
        document.getElementById( STYLE_ID ).remove();
    };


    useEffect( () => {
        if( name ){
            if( name.includes( 'uagb/' ) ){
                if( ! getStyleTag() ){
                    addStyleTag();
                }
            }else if( getStyleTag() ){
                removeStyleTag();
            }
        }
    },[ name ] );

    return null;
}

const addUagbSelectedCss = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
        const { isSelected } = props;
        if( isSelected ){
            return <>
                <BlockEdit { ...props } />
                <AddCssComponent {...props} />
            </>
        }

		return	<BlockEdit { ...props } />
	};
}, 'addUagbSelectedCss' );

addFilter( 'editor.BlockEdit', 'add-uagb-block-selected-css', addUagbSelectedCss );
