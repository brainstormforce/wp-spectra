import classnames from 'classnames';
import InfoBoxPositionClasses from './style-classes';
import { useEffect, useLayoutEffect, memo } from '@wordpress/element';
import Title from './components/Title';
import InfoBoxDesc from './components/InfoBoxDesc';
import CallToAction from './components/CTA';
import InfoBoxSeparator from './components/Separator';
import Icon from './components/Icons';
import InfoBoxIconImage from './components/IconImages';
import Prefix from './components/Prefix';
import styles from './editor.lazy.scss';
import getImageHeightWidth from '@Controls/getImageHeightWidth';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { attributes, setAttributes, deviceType } = props;

	// Setup the attributes.
	const {
		icon,
		iconimgPosition,
		source_type,
		seperatorPosition,
		seperatorStyle,
		ctaType,
		showPrefix,
		showTitle,
		showDesc,
		block_id,
		imageWidthType,
		imageWidth,
		blockBottomMargin,
		blockLeftMargin,
		blockRightMargin,
		blockTopMargin,
		htmlTag,
	} = attributes;
	// Get icon/Image components.
	let isImage = '';
	if ( source_type === 'icon' && icon !== '' ) {
		isImage = <Icon attributes={ attributes } setAttributes={ setAttributes } />;
	} else {
		isImage = <InfoBoxIconImage attributes={ attributes } />;
	}

	const marginVariables = [blockBottomMargin, blockLeftMargin, blockRightMargin, blockTopMargin];
	const hasMargin = marginVariables.some( ( margin ) => typeof margin === 'number' );
	const CustomTag = htmlTag || 'div';

	let iconImageHtml = isImage;
	let seperatorPos = seperatorPosition;
	const seperatorHtml = <InfoBoxSeparator attributes={ attributes } />;
	let showSeperator = true;

	let urlCheck = '';
	if ( typeof attributes.iconImage !== 'undefined' && attributes.iconImage !== null && attributes.iconImage !== '' ) {
		urlCheck = attributes.iconImage.url;
	}

	let url = '';
	if ( urlCheck !== '' ) {
		const size = attributes.iconImage.sizes;
		const imageSize = attributes.imageSize;

		if ( typeof size !== 'undefined' && typeof size[ imageSize ] !== 'undefined' ) {
			url = size[ imageSize ].url;
		} else {
			url = urlCheck;
		}
	}

	useEffect( () => {
		if ( imageWidthType ) {
			getImageHeightWidth( url, setAttributes, { type: 'width', value: imageWidth } );
		} else {
			getImageHeightWidth( url, setAttributes );
		}
	}, [ url, imageWidth, imageWidthType ] );

	if ( seperatorPos === 'after_icon' && ( iconimgPosition === 'above-title' || iconimgPosition === 'below-title' ) ) {
		showSeperator = false;
		iconImageHtml = (
			<>
				{ isImage }
				{ 'none' !== seperatorStyle && seperatorHtml }
			</>
		);
	}

	if (
		seperatorPos === 'after_icon' &&
		( iconimgPosition === 'left-title' ||
			iconimgPosition === 'right-title' ||
			iconimgPosition === 'left' ||
			iconimgPosition === 'right' )
	) {
		seperatorPos = 'after_title';
	}

	if ( iconimgPosition === 'below-title' && seperatorPos === 'after_title' ) {
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
			{ 'none' !== seperatorStyle && seperatorPos === 'after_title' && showSeperator && seperatorHtml }
			{ showDesc && <InfoBoxDesc { ...props } /> }
			{ 'none' !== seperatorStyle && seperatorPos === 'after_desc' && seperatorHtml }
			{ ctaType !== 'none' && <CallToAction attributes={ attributes } setAttributes={ setAttributes } /> }
		</>
	);

	// Get Title and Prefix components.
	const titleText = (
		<div className="uagb-ifb-title-wrap">
			{ showPrefix && <Prefix { ...props } /> }
			{ 'none' !== seperatorStyle && seperatorPos === 'after_prefix' && seperatorHtml }
			{ showTitle && <Title { ...props } /> }
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

	const ifbInnerContent = (
		<CustomTag
			className={ classnames(
				`uagb-block-${ block_id }`,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				'uagb-infobox__content-wrap',
				ctaType === 'all' ? ' uagb-infobox_cta-type-all' : '',
				...InfoBoxPositionClasses( attributes )
			) }
		>
			{ ctaType === 'all' && (
				<a // eslint-disable-line jsx-a11y/anchor-has-content
					className={ 'uagb-infobox-link-wrap uagb-infbox__link-to-all' }
					aria-label={ 'Infobox Link' }
					rel="noopener noreferrer"
					href="/"
				></a>
			) }
			{ output }
		</CustomTag>
	);

	return ( hasMargin ? (
		<div className='uagb-infobox-margin-wrapper'>
			{ ifbInnerContent }
		</div>
	) : (
		<>
			{ ifbInnerContent }
		</>
	) );
	  
};
export default memo( Render );
