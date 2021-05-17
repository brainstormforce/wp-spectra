import classnames from 'classnames';
import RichText from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const Render = ( props ) => {
	const {
		attributes: {
			block_id,
			headingTitle,
			headingDesc,
			headingTag,
			seperatorStyle,
		},
		setAttributes,
		className,
		deviceType,
	} = props;

	const heading = (
		<RichText
			tagName={ headingTag }
			placeholder={ __(
				'Write a Heading',
				'ultimate-addons-for-gutenberg'
			) }
			value={ headingTitle }
			className="uagb-heading-text"
			multiline={ false }
			onChange={ ( value ) => {
				setAttributes( { headingTitle: value } );
			} }
		/>
	);

	const separator = seperatorStyle !== 'none' && (
		<div className="uagb-separator-wrap">
			<div className="uagb-separator"></div>
		</div>
	);

	const desc = (
		<RichText
			tagName="p"
			placeholder={ __(
				'Write a Description',
				'ultimate-addons-for-gutenberg'
			) }
			value={ headingDesc }
			className="uagb-desc-text"
			onChange={ ( value ) => setAttributes( { headingDesc: value } ) }
		/>
	);

	return (
		<div
			className={ classnames(
				className,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ block_id }`
			) }
		>
			{ heading }
			{ separator }
			{ desc }
		</div>
	);
}
export default React.memo( Render );