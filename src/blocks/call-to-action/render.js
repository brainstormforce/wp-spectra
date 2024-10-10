import classnames from 'classnames';
import { useLayoutEffect, memo } from '@wordpress/element';
import Title from './components/Title';
import Description from './components/Description';
import CTA from './components/CallToActionNew';
import SecondCTAButton from './components/SecondCTAButton';
import styles from './editor.lazy.scss';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { setAttributes, attributes, deviceType } = props;

	// Setup the attributes.
	const { 
		block_id,
		ctaType,
		enabledSecondCtaButton,
		htmlTag,
		relString,
	} = attributes;

	const CustomTag = htmlTag || 'div';

	const isCta = <CTA attributes={ attributes } setAttributes={ setAttributes } />;

	const secondCtaButton =
		'button' === ctaType && enabledSecondCtaButton ? (
			<SecondCTAButton attributes={ attributes } setAttributes={ setAttributes } />
		) : (
			''
		);

	// Get description components.
	const descText = <Description attributes={ attributes } setAttributes={ setAttributes } props={ props } />;

	// Get Title components.
	const titleText = <Title attributes={ attributes } setAttributes={ setAttributes } props={ props } />;

	const output = () => {
		return (
			<>
				<div className="uagb-cta__wrap">
					{ titleText }
					{ descText }
				</div>
				<div className="uagb-cta__buttons">
					{ isCta }
					{ secondCtaButton }
				</div>
			</>
		);
	};

	return (
		<CustomTag
			className={ classnames(
				`uagb-block-${ block_id }`,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				'uagb-cta__outer-wrap',
				'button' === ctaType ? 'wp-block-button' : ''
			) }
		>
			{ ctaType === 'all' && (
				<>
					<a
						href="/"
						className="uagb-cta__link-to-all"
						rel={ relString }
						onClick={ ( e ) => e.preventDefault() }
					>
						{ ' ' }
					</a>
					{ output() }
				</>
			) }
			{ ctaType !== 'all' && output() }
		</CustomTag>
	);
};

export default memo( Render );
