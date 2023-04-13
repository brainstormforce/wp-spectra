/**
 * BLOCK: Column - Save Block
 */

// Import block dependencies and components.
import classnames from 'classnames';
import Icon from './components/Icons';
import InfoBoxPositionClasses from './style-classes';
import InfoBoxSeparator from './components/Separator';
import CallToAction from './components/CTA';
import InfoBoxIconImage from './components/IconImages';
import { RichText } from '@wordpress/block-editor';

export default function save( props ) {
	const { attributes } = props; 
	const {
		iconimgPosition,
		block_id,
		source_type,
		seperatorStyle,
		ctaType,
		ctaLink,
		ctaTarget,
		prefixTitle,
		infoBoxTitle,
		headingDesc,
		showPrefix,
		showTitle,
		showDesc,
		icon,
		seperatorPosition,
	} = attributes;

	// Get icon/Image components.
	let isImage = '';

	if ( source_type === 'icon' && icon !== '' ) {
		isImage = <Icon attributes={ attributes } />;
	} else {
		isImage = <InfoBoxIconImage attributes={ attributes } />;
	}

	let iconImageHtml = isImage;
	let position = seperatorPosition;
	const seperatorHtml = <InfoBoxSeparator attributes={ attributes } />;
	let showSeperator = true;

	if ( position === 'after_icon' && ( iconimgPosition === 'above-title' || iconimgPosition === 'below-title' ) ) {
		showSeperator = false;
		iconImageHtml = (
			<>
				{ isImage }
				{ 'none' !== seperatorStyle && seperatorHtml }
			</>
		);
	}

	if (
		position === 'after_icon' &&
		( iconimgPosition === 'left-title' ||
			iconimgPosition === 'right-title' ||
			iconimgPosition === 'left' ||
			iconimgPosition === 'right' )
	) {
		position = 'after_title';
	}

	if ( iconimgPosition === 'below-title' && position === 'after_title' ) {
		showSeperator = false;
		iconImageHtml = (
			<>
				{ 'none' !== seperatorStyle && seperatorHtml }
				{ isImage }
			</>
		);
	}
	// Get description and seperator components.
	const desc = (
		<>
			{ 'none' !== seperatorStyle && position === 'after_title' && showSeperator && seperatorHtml }
			{ showDesc && '' !== headingDesc && (
				<RichText.Content tagName="p" value={ attributes.headingDesc } className="uagb-ifb-desc" />
			) }
			{ 'none' !== seperatorStyle && position === 'after_desc' && seperatorHtml }
			{ ctaType !== 'none' && <CallToAction attributes={ attributes } /> }
		</>
	);

	// Get Title and Prefix components.
	const titleText = (
		<div className="uagb-ifb-title-wrap">
			{ showPrefix && '' !== prefixTitle && <RichText.Content tagName="span" value={ attributes.prefixTitle } className="uagb-ifb-title-prefix" /> }
			{ 'none' !== seperatorStyle && position === 'after_prefix' && seperatorHtml }
			{showTitle && '' !== infoBoxTitle &&
				<RichText.Content
					tagName={attributes.headingTag}
					value={attributes.infoBoxTitle}
					className="uagb-ifb-title"
				/>}
		</div>
	);

	const output = (
		<>
			{ iconimgPosition === 'left' && iconImageHtml }
			<div className="uagb-ifb-content">
				{ iconimgPosition === 'above-title' && iconImageHtml }

				{ ( iconimgPosition === 'above-title' || iconimgPosition === 'below-title' ) && titleText }

				{ iconimgPosition === 'below-title' && iconImageHtml }

				{ ( iconimgPosition === 'above-title' || iconimgPosition === 'below-title' ) && desc }

				{ iconimgPosition === 'left-title' && (
					<>
						<div className="uagb-ifb-left-title-image">
							{ iconImageHtml }
							{ titleText }
						</div>
						{ desc }
					</>
				) }

				{ iconimgPosition === 'right-title' && (
					<>
						<div className="uagb-ifb-right-title-image">
							{ titleText }
							{ iconImageHtml }
						</div>
						{ desc }
					</>
				) }

				{ ( iconimgPosition === 'left' || iconimgPosition === 'right' ) && (
					<>
						{ titleText }
						{ desc }
					</>
				) }
			</div>

			{ iconimgPosition === 'right' && iconImageHtml }
		</>
	);

	let target = '_self';
	if ( ctaTarget ) {
		target = '_blank';
	}

	return (
		<div
			className={ classnames(
				`uagb-block-${ block_id }`,
				'uagb-infobox__content-wrap',
				ctaType === 'all' ? ' uagb-infobox_cta-type-all' : '',
				...InfoBoxPositionClasses( attributes )
			) }
		>
			{ ctaType === 'all' && (
				<a // eslint-disable-line jsx-a11y/anchor-has-content
					href={ ctaLink }
					className={ 'uagb-infobox-link-wrap uagb-infbox__link-to-all' }
					target={ target }
					aria-label={ 'Infobox Link' }
					rel="noopener noreferrer"
					onClick={ '' === ctaLink || '#' === ctaLink ? 'return false;' : 'return true;' }
				></a>
			) }
			{ output }
		</div>
	);
}
