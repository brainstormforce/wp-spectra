import classnames from 'classnames';
import React, { useLayoutEffect } from 'react';
import Title from './components/Title';
import Description from './components/Description';
import CTA from './components/CallToActionNew';
import styles from './editor.lazy.scss';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	props = props.parentProps;
	const { setAttributes, attributes, deviceType } = props;

	// Setup the attributes.
	const { block_id, ctaPosition, ctaType, stack  } = attributes;

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
	return (
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
					<a
						href="/"
						className="uagb-cta__link-to-all"
						rel="noopener noreferrer"
					>
						{ ' ' }
					</a>
				) }
				{ output() }
			</div>
	);
};

export default React.memo( Render );
