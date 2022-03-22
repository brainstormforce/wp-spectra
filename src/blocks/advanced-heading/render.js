import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import React from 'react';
import { useDeviceType } from '@Controls/getPreviewType';

const Render = ( props ) => {
	props = props.parentProps;
	const {
		attributes: {
			isPreview,
			block_id,
			headingTitle,
			headingDesc,
			headingTag,
			seperatorStyle,
		},
		setAttributes,
		className,
	} = props;

	const deviceType = useDeviceType();
	const headingText = (
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

	const descText = (
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
	const previewImageData = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMzUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yOTguOTA1LDEzOC4yOTljMCw0LjcxOS0zLjgyNSw4LjU0Ni04LjU0Niw4LjU0Nkg1OS42NDFjLTQuNzIxLDAtOC41NDYtMy44MjctOC41NDYtOC41NDZsMCwwDQoJCWMwLTQuNzIsMy44MjYtOC41NDcsOC41NDYtOC41NDdoMjMwLjcxOEMyOTUuMDgsMTI5Ljc1MiwyOTguOTA1LDEzMy41NzksMjk4LjkwNSwxMzguMjk5TDI5OC45MDUsMTM4LjI5OXoiLz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTMzMi43MzgsMTc3LjQyYzAsMi4xMDQtMS43MDQsMy44MDktMy44MDcsMy44MDlIMjEuMDY5Yy0yLjEwMywwLTMuODA3LTEuNzA1LTMuODA3LTMuODA5di0wLjQ3NQ0KCQkJYzAtMi4xMDQsMS43MDUtMy44MDcsMy44MDctMy44MDdoMzA3Ljg2M2MyLjEwMywwLDMuODA3LDEuNzAzLDMuODA3LDMuODA3VjE3Ny40MnoiLz4NCgkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTMxMy42ODgsMTk2LjkzMmMwLDIuMTAyLTEuNzA0LDMuODA3LTMuODA3LDMuODA3SDQwLjExOGMtMi4xMDMsMC0zLjgwNy0xLjcwNS0zLjgwNy0zLjgwN3YtMC40NzcNCgkJCWMwLTIuMTAyLDEuNzA1LTMuODA3LDMuODA3LTMuODA3aDI2OS43NjRjMi4xMDMsMCwzLjgwNywxLjcwNSwzLjgwNywzLjgwN1YxOTYuOTMyeiIvPg0KCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMjk0LjY0LDIxNi40NDFjMCwyLjEwNC0xLjcwNSwzLjgwNy0zLjgwOCwzLjgwN0g1OS4xNjdjLTIuMTAyLDAtMy44MDctMS43MDMtMy44MDctMy44MDd2LTAuNDc1DQoJCQljMC0yLjEwNCwxLjcwNS0zLjgwOSwzLjgwNy0zLjgwOWgyMzEuNjY1YzIuMTAzLDAsMy44MDgsMS43MDUsMy44MDgsMy44MDlWMjE2LjQ0MXoiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==';
	return (
		isPreview ? <img width='100%' src={previewImageData}/> :
		<div
			className={ classnames(
				className,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ block_id }`
			) }
		>
			{ headingText }
			{ separator }
			{ descText }
		</div>
	);
};
export default React.memo( Render );
