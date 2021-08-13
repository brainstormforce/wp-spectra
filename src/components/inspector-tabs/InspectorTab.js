
const InspectorTab = props => {
    const {children, isActive, type} = props;

    return (
        <div
            style={{
                display: isActive ? 'block' : 'none'
            }}
            className={`uagb-inspector-tab uagb-tab-content-${type}`}
        >
            {Array.isArray(children) ? children.map(item => item) : children}
        </div>
    )
}

export default InspectorTab


export const UAGTabs = {
	general: {
		key: 'general',
		type: 'general',
	},
	style: {
		key: 'style',
		type: 'style',
	},
	advance: {
		key: 'advance',
		type: 'advance',
	},
};
