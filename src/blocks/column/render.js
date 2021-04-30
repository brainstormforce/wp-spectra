/**
 * BLOCK: Column - Editor Render.
 */

import classnames from 'classnames';

const { InnerBlocks } = wp.blockEditor;

export default function renderColumn( props ) {
	const {
		attributes: { align, backgroundType, alignMobile, alignTablet },
		deviceType,
		isSelected,
		className,
	} = props;

	const active = isSelected ? 'active' : 'not-active';

	const align_class =
		'center' == align ? '' : `uagb-column__align-${ align }`;
	const align_class_mobile =
		'' == alignMobile ? '' : `uagb-column__align-mobile-${ alignMobile }`;
	const align_class_tablet =
		'' == alignTablet ? '' : `uagb-column__align-tablet-${ alignTablet }`;

	return (
		<>
			<div
				className={ classnames(
					className,
					'uagb-column__wrap',
					`uagb-column__background-${ backgroundType }`,
					`uagb-column__edit-${ active }`,
					align_class,
					align_class_mobile,
					align_class_tablet,
					`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
					`uagb-block-${ props.clientId.substr( 0, 8 ) }`
				) }
			>
				<div className="uagb-column__overlay"></div>
				<InnerBlocks templateLock={ false } />
			</div>
		</>
	);
}
