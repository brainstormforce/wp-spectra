/**
 * BLOCK: Column - Save Block
 */

const {
	InnerBlocks
} = wp.blockEditor

export default function save( props ) {

	const { attributes, className } = props
    const {
        tabHeaders,
        tabActiveFrontend,
        tabsStyleD,
        tabsStyleT,
        tabsStyleM,
        headerBgColor,
        headerTextColor,
        bodyBgColor,
        bodyTextColor,
        borderStyle,
        borderWidth,
        borderColor,
        borderRadius,
        pid
    } = attributes;

    const blockClass = [
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
                    <li key={ index } className="uagb-tab"
                        style={ {
                            backgroundColor: headerBgColor,
                            borderStyle: borderStyle,
                            borderWidth: borderWidth + 'px',
                            borderColor: borderColor,
                            borderRadius: borderRadius + 'px',
                        } }
                    >
                        <a href={`#uagb-tabs__tab${index}`}
                           style={ { color: headerTextColor } }
                        >
                            <span>{header}</span>
                        </a>
                    </li>
                ) ) }
            </ul>
            <div className="uagb-tabs__body-wrap"
                 style={ {
                     backgroundColor: bodyBgColor,
                     color: bodyTextColor,
                     borderStyle: borderStyle,
                     borderWidth: borderWidth + 'px',
                     borderColor: borderColor,
                     borderRadius: borderRadius + 'px',
                 } }
            >
                <InnerBlocks.Content />
            </div>
        </div>
    );
}
