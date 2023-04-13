import { memo } from '@wordpress/element';
import { uagbClassNames } from '@Utils/Helpers';

import { useDeviceType } from '@Controls/getPreviewType';
import Renderer from './renderer';
import RendererDesc from './renderer-desc';

const Render = ( props ) => {
	props = props.parentProps;

	const {
		attributes,
		attributes: {
			block_id,
			headingTitleToggle,
			headingDescToggle,
			seperatorStyle,
			seperatorPosition,
			headingDescPosition,
		},
		setAttributes,
		className,
		context,
	} = props;

	const deviceType = useDeviceType();

	const separator = seperatorStyle !== 'none' && (
		<div className="uagb-separator-wrap">
			<div className="uagb-separator"></div>
		</div>
	);

	const headingText = (
		<>
			{ seperatorPosition === 'above-heading' ? separator : '' }
			<Renderer { ...{ setAttributes, attributes, context } } />
			{ seperatorPosition === 'below-heading' ? separator : '' }
		</>
	);

	const descText = (
		<>
			{ seperatorPosition === 'above-sub-heading' ? separator : '' }
			<RendererDesc { ...{ setAttributes, attributes, context } } />
			{ seperatorPosition === 'below-sub-heading' ? separator : '' }
		</>
	);

	return (
		<div
			className={ uagbClassNames( [
				className,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ block_id }`,
			] ) }
		>
			{ headingDescToggle && 'above-heading' === headingDescPosition ? descText : '' }
			{ headingTitleToggle && headingText }
			{ headingDescToggle && 'below-heading' === headingDescPosition ? descText : '' }
			{ ! headingDescToggle && ! headingTitleToggle ? separator : '' }
		</div>
	);
};
export default memo( Render );
