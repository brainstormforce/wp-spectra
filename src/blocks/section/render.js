import classnames from 'classnames';
import { useLayoutEffect, memo } from '@wordpress/element';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import styles from './editor.lazy.scss';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { attributes, isSelected, className, deviceType } = props;

	const { align, contentWidth, tag, backgroundType, backgroundVideo, block_id } = attributes;

	const CustomTag = `${ tag }`;

	const active = isSelected ? 'active' : 'not-active';

	let blockControlsClass = '';
	if ( 'full_width' === contentWidth ) {
		if ( align === 'wide' || align === 'full' ) {
			blockControlsClass = 'align' + align;
		}
	}

	const dataAlign =
		( 'left' === align || 'right' === align || 'wide' === align || 'full' === align ) &&
		'full_width' === contentWidth
			? align
			: undefined;

	const blockProps = useBlockProps( {
		'className': classnames(
			className,
			'uagb-section__wrap',
			`uagb-section__background-${ backgroundType }`,
			`uagb-section__edit-${ active }`,
			blockControlsClass,
			`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
			`uagb-block-${ block_id }`
		),
		'data-align': dataAlign,
	} );

	return (
		<CustomTag
			{ ...blockProps }
		>
			<div className="uagb-section__overlay"></div>
			{ 'video' === backgroundType && (
				<div className="uagb-section__video-wrap">
					{ backgroundVideo && (
						<video autoPlay loop muted playsinline>
							<source src={ backgroundVideo.url } type="video/mp4" />
						</video>
					) }
				</div>
			) }
			<div className="uagb-section__inner-wrap">
				<InnerBlocks templateLock={ false } />
			</div>
		</CustomTag>
	);
};

export default memo( Render );
