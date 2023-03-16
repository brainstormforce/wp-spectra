import classnames from 'classnames';
import { useLayoutEffect,memo } from '@wordpress/element';
import Title from './components/Title';
import Description from './components/Description';
import CTA from './components/CallToActionNew';
import SecondCTAButton from './components/SecondCTAButton';
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
	const { block_id, ctaType, enabledSecondCtaButton  } = attributes;

	const isCta = <CTA attributes={ attributes } setAttributes={ setAttributes } />;

	const secondCtaButton = ( 'button' === ctaType && enabledSecondCtaButton ) ? <SecondCTAButton attributes={ attributes } setAttributes={ setAttributes } /> : '';

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
				<div className="uagb-cta__wrap">
					{ titleText }
					{ descText }
				</div>
				<div className='uagb-cta__buttons'>
					{isCta}
					{secondCtaButton}
				</div>
			</>
		);
	};

	return (
		<div
			className={ classnames(
				`uagb-block-${ block_id }`,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				'uagb-cta__outer-wrap',
				'button' === ctaType ? 'wp-block-button' : '',
			) }
		>
			{ ctaType === 'all' && (
				<>
				<a
					href="/"
					className="uagb-cta__link-to-all"
					rel="noopener noreferrer"
					onClick={ ( e ) => e.preventDefault() }
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

export default memo( Render );
