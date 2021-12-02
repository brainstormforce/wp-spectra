import { PanelBody } from '@wordpress/components';
import { useRef  } from '@wordpress/element';
import React from 'react';

const UAGAdvancedPanelBody = ( props ) => {
    
    const {
        children
    } = props;

    const panelRef = useRef( null );

    const onPanelToggle = () => {
        
        if ( 'enabled' === uagb_blocks_info.collapse_panels ) {
            const siblings = getSiblings( panelRef.current );

            siblings.forEach( ( element ) => {
                element.querySelector( '.components-button' ).click();
            } );
        }
    }

    const getSiblings = function ( elem ) {

        const siblings = [];
        let sibling = elem.parentNode.firstChild;
    
        while ( sibling ) {
            if ( sibling.nodeType === 1 && sibling !== elem && sibling.classList.contains( 'is-opened' ) ) {
                siblings.push( sibling );
            }
            sibling = sibling.nextSibling
        }
    
        return siblings;
    
    };

    return (
        <PanelBody
            { ...props }
            onToggle={onPanelToggle}
            ref={panelRef}
        >
            { children }
        </PanelBody>
    );
}
export default React.memo( UAGAdvancedPanelBody );