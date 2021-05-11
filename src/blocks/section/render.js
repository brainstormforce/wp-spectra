import classnames from 'classnames';
import React from 'react';

const { InnerBlocks } = wp.blockEditor;

const Render = ( props ) => {
	props = props.parentProps;

	const { attributes, isSelected, className, deviceType } = props;

	const {
		align,
		contentWidth,
		tag,
		backgroundType,
		backgroundVideo,
	} = attributes;

	const CustomTag = `${ tag }`;

	const active = isSelected ? 'active' : 'not-active';

	let blockControlsClass = '';
	if ( 'full_width' == contentWidth ) {
		if ( align == 'wide' || align == 'full' ) {
			blockControlsClass = 'align' + align;
		}
	}

	return (
		<>
			<CustomTag
				className={ classnames(
					className,
					'uagb-section__wrap',
					`uagb-section__background-${ backgroundType }`,
					`uagb-section__edit-${ active }`,
					blockControlsClass,
					`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
					`uagb-block-${ props.clientId.substr( 0, 8 ) }`
				) }
			>
				<div className="uagb-section__overlay"></div>
				{ 'video' == backgroundType && (
					<div className="uagb-section__video-wrap">
						{ backgroundVideo && (
							<video autoPlay loop muted playsinline>
								<source
									src={ backgroundVideo.url }
									type="video/mp4"
								/>
							</video>
						) }
					</div>
				) }
				<div className="uagb-section__inner-wrap">
					<InnerBlocks templateLock={ false } />
				</div>
			</CustomTag>
		</>
	);
};

export default React.memo( Render );
