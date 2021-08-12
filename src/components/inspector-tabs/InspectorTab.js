
const InspectorTab = props => {
    const {children, isActive, className} = props;

    return (
        <div
            style={{
                display: isActive ? 'block' : 'none'
            }}
            className={`uagb-inspector-tab uagb-tab-content-${className}`}
        >
            {Array.isArray(children) ? children.map(item => item) : children}
        </div>
    )
}

export default InspectorTab


export const UAGTabs = {

	general: {
		key: 'general',
		className: 'general',
	},
	style: {
		key: 'style',
		className: 'style',
	},
	advance: {
		key: 'advance',
		className: 'advance',
	},
};
