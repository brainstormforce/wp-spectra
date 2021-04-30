/**
 * BLOCK: Social Share - Editor Render.
 */

import classnames from "classnames";
import times from "lodash/times";
import memoize from "memize";

const {
	InnerBlocks,
} = wp.blockEditor;

const ALLOWED_BLOCKS = [ "uagb/social-share-child" ];

export default function rendersocialShare( props ) {

    const { attributes, deviceType } = props;

    const {
        className,
        social_count,
        socials,
        social_layout,
    } = attributes;

    const getSocialShareTemplate = memoize( ( icon_block, socials ) => {
        return times( icon_block, n => [ "uagb/social-share-child", socials[n] ] );
    } );

    return(
        
        <div className={ classnames(
            className,
            "uagb-social-share__outer-wrap",
            `uagb-social-share__layout-${social_layout}`,
            `uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
            `uagb-block-${ props.clientId.substr( 0, 8 ) }`
        ) }
        >
            <InnerBlocks
                template={ getSocialShareTemplate( social_count, socials ) }
                templateLock={ false }
                allowedBlocks={ ALLOWED_BLOCKS } 
                __experimentalMoverDirection={ social_layout }	
            />
        </div>
    );

}