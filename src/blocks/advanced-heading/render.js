import { memo } from '@wordpress/element';
import { uagbClassNames } from '@Utils/Helpers';
import Renderer from './renderer';
import RendererDesc from './renderer-desc';

const Render = ( props ) => {
	const {
		attributes: {
			block_id,
			headingTitleToggle,
			headingDescToggle, 
			seperatorStyle,
			seperatorPosition,
			headingDescPosition,
			headingWrapper,
		},
		className,
		deviceType
	} = props;

	const Element = headingWrapper || 'div';
	const separator = seperatorStyle !== 'none' && (
		<div className="uagb-separator-wrap">
			<div className="uagb-separator"></div>
		</div>
	);

	const headingText = (
		<>
			{ seperatorPosition === 'above-heading' ? separator : '' }
			<Renderer { ...props } />
			{ seperatorPosition === 'below-heading' ? separator : '' }
		</>
	);

	const descText = (
		<>
			{ seperatorPosition === 'above-sub-heading' ? separator : '' }
			<RendererDesc { ...props } />
			{ seperatorPosition === 'below-sub-heading' ? separator : '' }
		</>
	);

	return (
		<Element
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
		</Element>	
	);
};
export default memo( Render );
