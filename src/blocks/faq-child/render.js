import classnames from 'classnames';
import renderSVG from '@Controls/renderIcon';
import { __ } from '@wordpress/i18n';
import styles from './editor.lazy.scss';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { useLayoutEffect, memo } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { attributes, setAttributes, state, isSelected, context, clientId } = props;
	const { question, answer, icon, iconActive, layout, headingTag, block_id } = attributes;

	const expandFirstItem = ( context && context[ 'uagb/faqExpandFirstItem' ] ) || false;
	const faqLayout = ( context && context[ 'uagb/faqLayout' ] ) || 'accordion';

	const isFirstChild = useSelect( ( select ) => {
		const { getBlockOrder, getBlockRootClientId } = select( 'core/block-editor' );
		const rootClientId = getBlockRootClientId( clientId );
		const siblings = getBlockOrder( rootClientId );
		return siblings.length > 0 && siblings[ 0 ] === clientId;
	}, [ clientId ] );

	const isExpandedInEditor = 'accordion' === faqLayout && expandFirstItem && isFirstChild;

	const blockProps = useBlockProps( {
		className: classnames(
			'uagb-faq-child__outer-wrap',
			'uagb-faq-item',
			`uagb-block-${ block_id }`,
			( isSelected && false !== state.isFocused ) || isExpandedInEditor ? 'uagb-faq__active' : ''
		),
		role: 'tab',
		tabIndex: '0',
	} );


	// Reset the heading tag to it's default if it somehow has a value other than the valid tag types.
	const validHeadingTags = [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'p' ];
	const childHeadingTag = validHeadingTags.includes( headingTag ) ? headingTag : 'span';

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
						tagName={ 'span' !== childHeadingTag ? childHeadingTag : 'div' }
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
			{ ...blockProps }
		>
			{ faqRenderHtml() }
		</div>
	);
};

export default memo( Render );
