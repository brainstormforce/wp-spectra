import classnames from 'classnames';
import React, { useLayoutEffect } from 'react';
import Title from './components/Title';
import Description from './components/Description';
import CTA from './components/CallToActionNew';
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
	const { setAttributes, attributes } = props;
	const deviceType = useDeviceType();

	// Setup the attributes.
	const { isPreview, block_id, ctaPosition, ctaType, stack  } = attributes;

	const isCta = <CTA attributes={ attributes } setAttributes={ setAttributes } />;

	// Get description components.
	const descText = (
		<Description
			attributes={ attributes }
			setAttributes={ setAttributes }
			props={ props }
		/>
	);

	// Get Title components.
	const titleText = (
		<Title
			attributes={ attributes }
			setAttributes={ setAttributes }
			props={ props }
		/>
	);

	const output = () => {
		return (
			<>
					{ ctaPosition === 'below-title' && (
						<>
							{ titleText }
							{ descText }
							{ isCta }
						</>
					) }
					{ ctaPosition === 'right' && (
						<>
							<div className="uagb-cta__wrap">
								{ titleText }
								{ descText }
							</div>
							{isCta}
						</>
					) }
			</>
		);
	};
	let iconimgStyleClass;
	if ( ctaPosition === 'right' && stack !== 'none' ) {
		iconimgStyleClass = 'uagb-cta__content-stacked-' + stack + ' ';
	}
	const previewImageData = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMzUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yMjYuODU4LDExOC4yNTJjMCwzLjk3Ni0zLjIyNCw3LjItNy4xOTksNy4ySDM4LjEyNmMtMy45NzYsMC03LjItMy4yMjQtNy4yLTcuMnYwLjQzNg0KCQljMC0zLjk3NSwzLjIyNC03LjIsNy4yLTcuMmgxODEuNTMzYzMuOTc2LDAsNy4xOTksMy4yMjUsNy4xOTksNy4yVjExOC4yNTJ6Ii8+DQoJPGc+DQoJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0zMTkuMDczLDE1NS43OWMwLDIuMDcxLTEuNjc3LDMuNzQ4LTMuNzQ5LDMuNzQ4SDM0LjY3NmMtMi4wNzIsMC0zLjc1LTEuNjc3LTMuNzUtMy43NDhsMCwwDQoJCQljMC0yLjA3MywxLjY3Ny0zLjc1MSwzLjc1LTMuNzUxaDI4MC42NDhDMzE3LjM5NiwxNTIuMDM4LDMxOS4wNzMsMTUzLjcxNywzMTkuMDczLDE1NS43OUwzMTkuMDczLDE1NS43OXoiLz4NCgkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTMxOS4wNzMsMTY5LjQ4NGMwLDIuMDY5LTEuNjc3LDMuNzQ3LTMuNzQ5LDMuNzQ3SDM0LjY3NmMtMi4wNzIsMC0zLjc1LTEuNjc3LTMuNzUtMy43NDdsMCwwDQoJCQljMC0yLjA3NCwxLjY3Ny0zLjc1MiwzLjc1LTMuNzUyaDI4MC42NDhDMzE3LjM5NiwxNjUuNzMyLDMxOS4wNzMsMTY3LjQxMSwzMTkuMDczLDE2OS40ODRMMzE5LjA3MywxNjkuNDg0eiIvPg0KCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMzE5LjA3MywxODQuNTk2YzAsMi4wNzItMS42NzcsMy43NS0zLjc0OSwzLjc1SDM0LjY3NmMtMi4wNzIsMC0zLjc1LTEuNjc4LTMuNzUtMy43NWwwLDANCgkJCWMwLTIuMDczLDEuNjc3LTMuNzUsMy43NS0zLjc1aDI4MC42NDhDMzE3LjM5NiwxODAuODQ2LDMxOS4wNzMsMTgyLjUyMiwzMTkuMDczLDE4NC41OTZMMzE5LjA3MywxODQuNTk2eiIvPg0KCTwvZz4NCgk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMTU2LjA0NiwyMjYuNzIzYzAsNi41MTItNS4yNzksMTEuNzg5LTExLjc5MSwxMS43ODlINDIuNzE5Yy02LjUxMiwwLTExLjc5Mi01LjI3Ny0xMS43OTItMTEuNzg5bDAsMA0KCQljMC02LjUxMiw1LjI4LTExLjc5MiwxMS43OTItMTEuNzkyaDEwMS41MzZDMTUwLjc2NywyMTQuOTMxLDE1Ni4wNDYsMjIwLjIxMSwxNTYuMDQ2LDIyNi43MjNMMTU2LjA0NiwyMjYuNzIzeiIvPg0KPC9nPg0KPC9zdmc+DQo=';
	return (
		isPreview ? <img width='100%' src={previewImageData}/> :
			<div
				className={ classnames(
					`uagb-block-${ block_id }`,
					`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
					'uagb-cta__outer-wrap',
					'button' === ctaType ? 'wp-block-button' : '',
					iconimgStyleClass
				) }
			>
				{ ctaType === 'all' && (
					<>
					<a
						href="/"
						className="uagb-cta__link-to-all"
						rel="noopener noreferrer"
					>
						{ ' ' }
					</a>
					{ output() }
					</>
				) }
				{ ctaType !== 'all' && output() }
			</div>
	);
};

export default React.memo( Render );
