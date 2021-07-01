import classnames from 'classnames';

const InspectorTab = props => {

    const { children, isActive, key } = props;

    let activeClass = isActive ? 'active' : '';

    return (
        <div
            className = { classnames(
                'uagb-inspector-tab',
                activeClass
            )}
        >
            { Array.isArray(children) ? children.map( item => item ) : children } 
        </div>
    )
}

export default InspectorTab