/**
 * BLOCK: Social Share - Save Block
 */

const {
	InnerBlocks
} = wp.blockEditor

export default function save( props ) {

	const { attributes } = props
    const {id, uniqueID, header} = attributes;
    
    const tabClassName = [
        `uagb-tabs__${uniqueID}`,
        'uagb-tabs__body'
    ].filter(Boolean).join(' ');

    return (
        <div className="uagb-tabs__body-container">
            <div className="uagb-tabs__body-header">{header}</div>
            <div className={tabClassName} aria-labelledby={`uagb-tabs__tab${id}`}>
                <InnerBlocks.Content />
            </div>
        </div>
    );
}
