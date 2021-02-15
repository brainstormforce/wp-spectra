/**
 * BLOCK: Tabs - Save Block
 */

import renderSVG from "../../../dist/blocks/uagb-controls/renderIcon"

const {
	InnerBlocks,
	RichText
} = wp.blockEditor

export default function save( props ) {

	const { attributes, className } = props
    const {
        block_id,
        tabHeaders,
        tabActiveFrontend,
        tabsStyleD,
        tabsStyleT,
        tabsStyleM,
        Icon,
        showIcon,
        pid,
        iconPosition
    } = attributes;

    const blockClass = [
        `uagb-block-${ block_id}`,
        `uagb-tabs__wrap`,
        `uagb-tabs__${tabsStyleD}-desktop`,
        `uagb-tabs__${tabsStyleT}-tablet`,
        `uagb-tabs__${tabsStyleM}-mobile`,
        pid
    ].filter( Boolean ).join( ' ' );

    return (
        <div className={blockClass} data-tab-active={tabActiveFrontend}>
            <ul className="uagb-tabs__panel">
                {tabHeaders.map( ( header, index ) => (
                    <li key={ index } className="uagb-tab">
                        <a href={`#uagb-tabs__tab${index}`} className={`uagb-tabs__icon-position-${iconPosition}`}>
                        {(showIcon && (iconPosition === 'left' || iconPosition === 'top' ) &&
                                 <span className="uagb-tabs__icon">{ renderSVG(Icon) }</span>)}
                            <RichText.Content
                                tagName={ 'span' }
                                value={ header }					
                            />
                            {(showIcon && (iconPosition === 'right' || iconPosition === 'bottom') &&
                                 <span className="uagb-tabs__icon">{ renderSVG(Icon) }</span>)}
                        </a>
                    </li>
                ) ) }
            </ul>
            <div className="uagb-tabs__body-wrap">
                <InnerBlocks.Content />
            </div>
        </div>
    );
}
