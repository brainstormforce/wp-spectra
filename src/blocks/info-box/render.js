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

	const previewImageData = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMzUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cmVjdCB4PSI0NS42NDQiIHk9IjQ3LjY0OSIgZmlsbD0iI0RCRENERSIgd2lkdGg9IjEyNC41IiBoZWlnaHQ9IjU0Ljk5MiIvPg0KCTwvZz4NCgk8Zz4NCgkJPHJlY3QgeD0iMTc4Ljg5NCIgeT0iNDcuNjQ5IiBmaWxsPSIjREJEQ0RFIiB3aWR0aD0iNjEuNDg0IiBoZWlnaHQ9IjU0Ljk5MiIvPg0KCQk8cmVjdCB4PSIyNDIuMjI3IiB5PSI0Ny42NDkiIGZpbGw9IiNEQkRDREUiIHdpZHRoPSI2MS40ODQiIGhlaWdodD0iNTQuOTkyIi8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxyZWN0IHg9IjQ1LjQ4NSIgeT0iMTEzLjE0OCIgZmlsbD0iI0RCRENERSIgd2lkdGg9IjYxLjQ4NCIgaGVpZ2h0PSI1NC45OTIiLz4NCgkJPGc+DQoJCQk8cmVjdCB4PSIxMDguODE4IiB5PSIxMTMuMTQ4IiBmaWxsPSIjREJEQ0RFIiB3aWR0aD0iNjEuNDg0IiBoZWlnaHQ9IjI2LjU0NCIvPg0KCQkJPHJlY3QgeD0iMTA4LjgxOCIgeT0iMTQxLjU2NyIgZmlsbD0iI0RCRENERSIgd2lkdGg9IjYxLjQ4NCIgaGVpZ2h0PSIyNi41NzMiLz4NCgkJPC9nPg0KCTwvZz4NCgk8Zz4NCgkJPHJlY3QgeD0iMjQyLjIyNyIgeT0iMTEzLjE0OCIgZmlsbD0iI0RCRENERSIgd2lkdGg9IjYxLjQ4NCIgaGVpZ2h0PSI1NC45OTIiLz4NCgkJPGc+DQoJCQk8cmVjdCB4PSIxNzguODkzIiB5PSIxMTMuMTQ4IiBmaWxsPSIjREJEQ0RFIiB3aWR0aD0iNjEuNDg0IiBoZWlnaHQ9IjI2LjU0NCIvPg0KCQkJPHJlY3QgeD0iMTc4Ljg5MyIgeT0iMTQxLjU2NyIgZmlsbD0iI0RCRENERSIgd2lkdGg9IjYxLjQ4NCIgaGVpZ2h0PSIyNi41NzMiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cmVjdCB4PSIxNzguOTc3IiB5PSIyMDcuMzk4IiBmaWxsPSIjREJEQ0RFIiB3aWR0aD0iMTI0LjgxOCIgaGVpZ2h0PSIyNi42MjciLz4NCgkJPHJlY3QgeD0iMTc4LjgxIiB5PSIxNzguOTgyIiBmaWxsPSIjREJEQ0RFIiB3aWR0aD0iNjEuNDg0IiBoZWlnaHQ9IjI2LjU0MyIvPg0KCQk8cmVjdCB4PSIyNDIuMzEiIHk9IjE3OS4wMzMiIGZpbGw9IiNEQkRDREUiIHdpZHRoPSI2MS40ODQiIGhlaWdodD0iMjYuNTc0Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cmVjdCB4PSI0NS41NjgiIHk9IjE3OC42NDgiIGZpbGw9IiNEQkRDREUiIHdpZHRoPSIxMjQuODE4IiBoZWlnaHQ9IjI2LjYyNyIvPg0KCQk8cmVjdCB4PSI0NS40MDEiIHk9IjIwNy4xNDgiIGZpbGw9IiNEQkRDREUiIHdpZHRoPSI2MS40ODQiIGhlaWdodD0iMjYuNTQ0Ii8+DQoJCTxyZWN0IHg9IjEwOC45MDEiIHk9IjIwNy4wNjciIGZpbGw9IiNEQkRDREUiIHdpZHRoPSI2MS40ODQiIGhlaWdodD0iMjYuNTczIi8+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=';


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
