import classnames from 'classnames';
import renderSVG from '@Controls/renderIcon';
import { __ } from '@wordpress/i18n';
import styles from './editor.lazy.scss';
import { RichText } from '@wordpress/block-editor';
import { useLayoutEffect, memo } from '@wordpress/element';
const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { attributes, setAttributes, state, isSelected } = props;
	const { question, answer, icon, iconActive, layout, headingTag, block_id } = attributes;

	const faqRenderIcon = () => {
		return (
			<>
				<span className="uagb-icon uagb-faq-icon-wrap">{ renderSVG( icon, setAttributes ) }</span>
				<span className="uagb-icon-active uagb-faq-icon-wrap">{ renderSVG( iconActive, setAttributes ) }</span>
			</>
		);
	};

	const faqRenderHtml = () => {
		return (
			<>
				<div className="uagb-faq-questions-button uagb-faq-questions">
					{ 'accordion' === layout && faqRenderIcon() }
					<RichText
						tagName={ 'span' !== headingTag ? headingTag : 'div' }
						placeholder={ __( 'Question', 'ultimate-addons-for-gutenberg' ) }
						value={ question }
						onChange={ ( value ) => setAttributes( { question: value } ) }
						className="uagb-question"
						multiline={ false }
						allowedFormats={ [ 'core/bold', 'core/italic', 'core/strikethrough' ] }
					/>
				</div>
				<RichText
					className="uagb-faq-content"
					tagName="p"
					placeholder={ __( 'Answer', 'ultimate-addons-for-gutenberg' ) }
					value={ answer }
					onChange={ ( value ) => setAttributes( { answer: value } ) }
					multiline={ false }
					allowedFormats={ [ 'core/bold', 'core/italic', 'core/strikethrough', 'core/link' ] }
				/>
			</>
		);
	};

	return (
		<div
			className={ classnames(
				'uagb-faq-child__outer-wrap',
				'uagb-faq-item',
				`uagb-block-${ block_id }`,
				isSelected && false !== state.isFocused ? 'uagb-faq__active' : ''
			) }
			role="tab"
			tabIndex="0"
		>
			{ faqRenderHtml() }
		</div>
	);
};

export default memo( Render );
