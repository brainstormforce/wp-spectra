/**
 * BLOCK: Tabs Child - Save Block
 */
import classnames from "classnames"
const {
	InnerBlocks
} = wp.blockEditor

export default function save( props ) {

	const { attributes , className } = props
    const {id, header,block_id} = attributes;
    
    return (
        <div className="uagb-tabs__body-container">
            <div className={ classnames(
					className,
					`uagb-blocks__${block_id}`,
					'uagb-tabs__body'
				) } aria-labelledby={`uagb-tabs__tab${id}`}>
                <InnerBlocks.Content />
            </div>
        </div>
    );
}
