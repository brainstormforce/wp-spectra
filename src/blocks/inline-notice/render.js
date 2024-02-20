// Import block dependencies and components
import classnames from 'classnames';
import renderSVG from '@Controls/renderIcon';
import { RichText, useInnerBlocksProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useLayoutEffect, memo } from '@wordpress/element';
import styles from './editor.lazy.scss';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	// Setup the attributes
	const {
		attributes: { block_id, icon, noticeTitle, noticeContent, noticeDismiss, noticeAlignment, headingTag },
		setAttributes,
		className,
		deviceType
	} = props;

	let imageIconHtml = '';

	if ( noticeDismiss ) {
		imageIconHtml = renderSVG( icon, setAttributes );
	}

	const innerBlockOptions = {
		allowedBlocks: ['core/paragraph'],
		template: [
			[
				'core/paragraph',
				{
					content: noticeContent,
				},
			],
		],
		templateLock: false,
		renderAppender: false
	};

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: 'uagb-notice-text',
		},
		innerBlockOptions
	);

	return (
		<div
			className={ classnames(
				className,
				`${ noticeDismiss }`,
				`uagb-inline_notice__align-${ noticeAlignment }`,
				`uagb-block-${ block_id }`,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`
			) }
		>
			<button className="uagb-notice-close-button" type="button" aria-label="Close">
				{imageIconHtml}
			</button>
			<RichText
				tagName={ headingTag }
				placeholder={ __( 'Notice Title', 'ultimate-addons-for-gutenberg' ) }
				keepPlaceholderOnFocus
				value={ noticeTitle }
				className="uagb-notice-title"
				onChange={ ( value ) => setAttributes( { noticeTitle: value } ) }
			/>
			<div {...innerBlocksProps} />
		</div>
	);
};
export default memo( Render );
