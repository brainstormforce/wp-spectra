// Import block dependencies and components.
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
import styles from './editor.lazy.scss';
import React, { useLayoutEffect } from 'react';
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
	// Setup the attributes
	const {
		className,
		setAttributes,
		attributes: { isPreview, rating, range, title, displayTitle },
	} = props;

	const rangeValue = parseInt( range );
	const stars = [];
	for ( let i = 1; i <= rangeValue; i++ ) {
		stars.push(
			<span key={ i } className="uag-star">
				★
			</span>
		);
	}
	const previewImageData = `${ uagb_blocks_info.uagb_url }/admin/assets/preview-images/star-ratings.png`;
	return (
		isPreview ? <img width='100%' src={previewImageData} alt=''/> :
		<div
			className={ classnames(
				className,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ props.clientId.substr( 0, 8 ) }`
			) }
		>
			{ displayTitle && (
				<RichText
					tagName="p"
					placeholder={ __(
						'Write a title',
						'ultimate-addons-for-gutenberg'
					) }
					value={ title }
					className="uag-star-rating__title"
					onChange={ ( value ) => setAttributes( { title: value } ) }
				/>
			) }
			<div className="uag-star-rating" title={ `${ rating }/${ range }` }>
				{ stars }
			</div>
		</div>
	);
};
export default React.memo( Render );
