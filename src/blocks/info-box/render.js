import classnames from 'classnames';
import InfoBoxPositionClasses from './style-classes';
import React, { useLayoutEffect } from 'react';
import Title from './components/Title';
import InfoBoxDesc from './components/InfoBoxDesc';
import CallToAction from './components/CTA';
import InfoBoxSeparator from './components/Separator';
import Icon from './components/Icons';
import InfoBoxIconImage from './components/IconImages';
import Prefix from './components/Prefix';
import styles from './editor.lazy.scss';
import { useDeviceType } from '@Controls/getPreviewType';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	props = props.parentProps;
	const deviceType = useDeviceType();
	const { attributes, setAttributes } = props;

	// Setup the attributes.
	const {
		isPreview,
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
		prefixTitle,
		infoBoxTitle
	} = attributes;
	// Get icon/Image components.
	let isImage = '';
	if ( source_type === 'icon' && icon !== '' ) {
		isImage = <Icon attributes={ attributes } />;
	} else {
		isImage = <InfoBoxIconImage attributes={ attributes } />;
	}

	let iconImageHtml = isImage;
	let seperatorPos = seperatorPosition;
	const seperatorHtml = <InfoBoxSeparator attributes={ attributes } />;
	let showSeperator = true;

	if (
		seperatorPos === 'after_icon' &&
		( iconimgPosition === 'above-title' || iconimgPosition === 'below-title' )
	) {
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
		( iconimgPosition !== 'above-title' ||
			iconimgPosition !== 'below-title' )
	) {
		seperatorPos = 'after_title';
	}

	if (
		iconimgPosition === 'below-title' &&
		seperatorPos === 'after_title'
	) {
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
			{ 'none' !== seperatorStyle &&
				seperatorPos === 'after_title' &&
				showSeperator &&
				seperatorHtml }
				{ showDesc && (
					<InfoBoxDesc
						attributes={ attributes }
						setAttributes={ setAttributes }
						props={ props }
					/>
				) }
				{ 'none' !== seperatorStyle &&
					seperatorPos === 'after_desc' &&
					seperatorHtml }
					{ ctaType !== 'none' && (
						<CallToAction
							attributes={ attributes }
							setAttributes={ setAttributes }
						/>
					)}
		</>
	);

	// Get Title and Prefix components.
	const titleText = (
		<div className="uagb-ifb-title-wrap">
			{ showPrefix && '' !== prefixTitle && (
				<Prefix
					attributes={ attributes }
					setAttributes={ setAttributes }
					props={ props }
				/>
			) }
			{ 'none' !== seperatorStyle &&
				seperatorPos === 'after_prefix' &&
				seperatorHtml }
			{ showTitle && '' !== infoBoxTitle && (
				<Title
					attributes={ attributes }
					setAttributes={ setAttributes }
					props={ props }
				/>
			) }
		</div>
	);

	const output = (
		<>
			{ iconimgPosition === 'left' && iconImageHtml }
			<div className="uagb-ifb-content">
				{ iconimgPosition === 'above-title' && iconImageHtml }

				{ ( iconimgPosition === 'above-title' ||
					iconimgPosition === 'below-title' ) &&
					titleText }

				{ iconimgPosition === 'below-title' && iconImageHtml }

				{ ( iconimgPosition === 'above-title' ||
					iconimgPosition === 'below-title' ) &&
					desc }

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

				{ ( iconimgPosition === 'left' ||
					iconimgPosition === 'right' ) && (
					<>
						{ titleText }
						{ desc }
					</>
				) }
			</div>

			{ iconimgPosition === 'right' && iconImageHtml }
		</>
	);

	const previewImageData = 'data:image/png;base64,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';

	return (
		isPreview ? <img width='100%' src={previewImageData}/> :
		<div
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
					className="uagb-infobox-link-wrap uagb-infbox__link-to-all"
					aria-label={ 'Infobox Link' }
					rel="noopener noreferrer"
					href="/"
				></a>
			) }
			{ output }
		</div>
	);
};
export default React.memo( Render );
