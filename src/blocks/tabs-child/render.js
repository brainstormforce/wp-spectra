
import classnames from "classnames"

const {
	InnerBlocks
} = wp.blockEditor

const tabsChildRender = props => {
    const { attributes , className} = props;
    const {tabActive, id, block_id} = attributes;
    
    return (
        <div className={`uagb-tabs__body-container uagb-tabs__inner-tab uagb-inner-tab-${id}`} style={{ display: id === tabActive ? 'block' : 'none'}}>
            <div className={ classnames(
                className,
                `uagb-tabs__${block_id}`,
                'uagb-tabs__body'
            ) } aria-labelledby={`uagb-tabs__tab${id}`}>
                <InnerBlocks
                    template={[ [ 'core/paragraph' ] ]}
                    templateLock={false}
                />
            </div>
        </div>
    );
}
export default tabsChildRender