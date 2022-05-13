import classnames from 'classnames';
import { InnerBlocks } from '@wordpress/block-editor';
import React, { useLayoutEffect, useMemo } from 'react';
import styles from './editor.lazy.scss';
import { useDeviceType } from '@Controls/getPreviewType';

const ALLOWED_BLOCKS = [ 'uagb/buttons-child' ];

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	props = props.parentProps;

	const { attributes } = props;

	const deviceType = useDeviceType();

	const { className, btn_count, buttons, stack, isPreview, buttonSize, buttonSizeTablet, buttonSizeMobile } = attributes;

	const getButtonTemplate = useMemo( () => {
		const childButtons = [];

		for ( let i = 0; i < btn_count; i++ ) {
			childButtons.push( [ 'uagb/buttons-child', buttons[ i ] ] );
		}

		return childButtons;
	}, [ btn_count, buttons ] );

	const previewImageData = `${ uagb_blocks_info.uagb_url }/admin/assets/preview-images/multi-button.png`;

	return (
		isPreview ? <img width='100%' src={previewImageData} alt=''/> :
		<>
		<div
			className={ classnames(
				className,
				'uagb-buttons__outer-wrap',
				`uagb-btn__${buttonSize}-btn`,
				`uagb-btn-tablet__${buttonSizeTablet}-btn`,
				`uagb-btn-mobile__${buttonSizeMobile}-btn`,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ props.clientId.substr( 0, 8 ) }`,
			) }
		>
			<div
				className={ classnames(
					'uagb-buttons__wrap',
					`uagb-buttons-stack-${ stack }`
				) }
			>
				<InnerBlocks
					template={ getButtonTemplate }
					templateLock={ false }
					allowedBlocks={ ALLOWED_BLOCKS }
					__experimentalMoverDirection={
						'desktop' === stack ? 'vertical' : 'horizontal'
					}
				/>
			</div>
		</div>
		</>
	);
};

export default React.memo( Render );
