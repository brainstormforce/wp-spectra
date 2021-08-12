
const InspectorTab = props => {
    const {children, isActive, key} = props;
    
    return (
        <div className={ `uagb-inspector-tab ${ isActive }` }>
            {Array.isArray(children) ? children.map(item => item) : children}
        </div>
    )
}

export default InspectorTab