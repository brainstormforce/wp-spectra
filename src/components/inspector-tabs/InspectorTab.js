
const InspectorTab = props => {
    const {children, isActive, key} = props;
    
    return (
        <div 
            style={{
                display: isActive ? 'block' : 'none'
            }}
            className={`uagb-inspector-tab uagb-${props.className}-tab-content`}
        >
            {Array.isArray(children) ? children.map(item => item) : children}
        </div>
    )
}

export default InspectorTab