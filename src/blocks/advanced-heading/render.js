import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { memo } from '@wordpress/element';

import { useDeviceType } from '@Controls/getPreviewType';

const Render = ( props ) => {
	props = props.parentProps;

	const {
		attributes: {
			block_id,
			headingTitleToggle,
			headingTitle,
			headingDesc,
			headingDescToggle,
			headingTag,
			seperatorStyle,
			seperatorPosition,
			headingDescPosition
		},
		setAttributes,
		className,
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
			{ seperatorPosition === 'below-heading' ? separator : '' }
		</>
	);

	const descText = (
		<>
			{ seperatorPosition === 'above-sub-heading' ? separator : '' }
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
			{ seperatorPosition === 'below-sub-heading' ? separator : '' }
		</>
	);

	return (
		<div
			className={ classnames(
				className,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ block_id }`
			) }
		>
			{ headingDescToggle && 'above-heading' === headingDescPosition ? descText : '' }
			{ headingTitleToggle && headingText }
			{ headingDescToggle && 'below-heading' === headingDescPosition ? descText : '' }
			{ ! headingDescToggle && ! headingTitleToggle ? separator : '' }
		</div>
	);
};
export default memo( Render );
