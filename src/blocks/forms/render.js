import classnames from 'classnames';
import React, { useCallback, useLayoutEffect } from 'react';
import { __ } from '@wordpress/i18n';
import styles from './editor.lazy.scss';
import { useDeviceType } from '@Controls/getPreviewType';

const ALLOWED_BLOCKS = [
	'uagb/forms-name',
	'uagb/forms-email',
	'uagb/forms-hidden',
	'uagb/forms-phone',
	'uagb/forms-textarea',
	'uagb/forms-url',
	'uagb/forms-select',
	'uagb/forms-radio',
	'uagb/forms-checkbox',
	'uagb/forms-toggle',
	'uagb/forms-date',
	'uagb/forms-accept',
];

import { InnerBlocks, RichText } from '@wordpress/block-editor';

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
	const {
		isPreview,
		block_id,
		submitButtonText,
		formLabel,
		buttonSize,
		reCaptchaEnable,
		reCaptchaType,
		reCaptchaSecretKeyV2,
		reCaptchaSiteKeyV2,
	} = attributes;

	const onSubmitClick = useCallback( ( e ) => {
		e.preventDefault();
	} );

	const renderButtonHtml = () => {
		return (
			<button
				onClick={ onSubmitClick }
				className="uagb-forms-main-submit-button wp-block-button__link"
			>
				<RichText
					tagName="div"
					placeholder={ __(
						'Submit',
						'ultimate-addons-for-gutenberg'
					) }
					value={ submitButtonText }
					onChange={ ( value ) =>
						setAttributes( {
							submitButtonText: value,
						} )
					}
					className="uagb-forms-main-submit-button-text"
					multiline={ false }
					allowedFormats={ [
						'core/bold',
						'core/italic',
						'core/strikethrough',
					] }
				/>
			</button>
		);
	};

	const previewImageData = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMzUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0xMzUuNDYyLDI2Mi44MjZjMCw1LjU3Ni00LjUyMSwxMC4wOTYtMTAuMDk3LDEwLjA5NkgzOC40MTljLTUuNTc2LDAtMTAuMDk4LTQuNTItMTAuMDk4LTEwLjA5NmwwLDANCgkJYzAtNS41NzgsNC41MjItMTAuMDk5LDEwLjA5OC0xMC4wOTloODYuOTQ1QzEzMC45NDEsMjUyLjcyOCwxMzUuNDYyLDI1Ny4yNDgsMTM1LjQ2MiwyNjIuODI2TDEzNS40NjIsMjYyLjgyNnoiLz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTMyMS42NzksODEuNjA4YzAsMi4yMjMtMS44MDQsNC4wMjYtNC4wMjYsNC4wMjZIMzIuMzQ4Yy0yLjIyNCwwLTQuMDI3LTEuODAzLTQuMDI3LTQuMDI2di0wLjUwNA0KCQkJYzAtMi4yMjMsMS44MDMtNC4wMjYsNC4wMjctNC4wMjZoMjg1LjMwNGMyLjIyMywwLDQuMDI2LDEuODAzLDQuMDI2LDQuMDI2VjgxLjYwOHoiLz4NCgkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTMyMS42NzksMTEwLjUxNmMwLDIuMjIzLTEuODA0LDQuMDI2LTQuMDI2LDQuMDI2SDMyLjM0OGMtMi4yMjQsMC00LjAyNy0xLjgwMy00LjAyNy00LjAyNnYtMC41MDQNCgkJCWMwLTIuMjIzLDEuODAzLTQuMDI2LDQuMDI3LTQuMDI2aDI4NS4zMDRjMi4yMjMsMCw0LjAyNiwxLjgwMyw0LjAyNiw0LjAyNlYxMTAuNTE2eiIvPg0KCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMzIxLjY3OSwxMzkuNDI0YzAsMi4yMjItMS44MDQsNC4wMjYtNC4wMjYsNC4wMjZIMzIuMzQ4Yy0yLjIyNCwwLTQuMDI3LTEuODA0LTQuMDI3LTQuMDI2di0wLjUwNA0KCQkJYzAtMi4yMjMsMS44MDMtNC4wMjYsNC4wMjctNC4wMjZoMjg1LjMwNGMyLjIyMywwLDQuMDI2LDEuODAzLDQuMDI2LDQuMDI2VjEzOS40MjR6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMzEzLjM5OSwxNjkuODMyYzEuNDg3LDAsMi42OTcsMS4yMiwyLjY5NywyLjcydjUxLjA3NWMwLDEuNS0xLjIxLDIuNzItMi42OTcsMi43MkgzNS4wMTcNCgkJCWMtMS40ODYsMC0yLjY5Ni0xLjIyLTIuNjk2LTIuNzJ2LTUxLjA3NWMwLTEuNSwxLjIwOS0yLjcyLDIuNjk2LTIuNzJIMzEzLjM5OSBNMzEzLjM5OSwxNjUuODMySDM1LjAxNw0KCQkJYy0zLjY5OCwwLTYuNjk2LDMuMDA5LTYuNjk2LDYuNzJ2NTEuMDc1YzAsMy43MSwyLjk5OCw2LjcyLDYuNjk2LDYuNzJoMjc4LjM4MmMzLjcsMCw2LjY5Ny0zLjAxLDYuNjk3LTYuNzJ2LTUxLjA3NQ0KCQkJQzMyMC4wOTcsMTY4Ljg0LDMxNy4xLDE2NS44MzIsMzEzLjM5OSwxNjUuODMyTDMxMy4zOTksMTY1LjgzMnoiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==';

	return (
		<>
		{ isPreview ? <img width='100%' src={previewImageData}/> :
			<div
				className={ classnames(
					'uagb-forms__outer-wrap',
					`uagb-block-${ block_id }`,
					`uagb-forms__${ buttonSize }-btn`,
					`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`
				) }
			>
				<form
					className="uagb-forms-main-form"
					name={ `uagb-form-${ block_id }` }
				>
					<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
					<div className="uagb-forms-form-hidden-data">
						{ reCaptchaEnable && (
							<input
								type="hidden"
								id="g-recaptcha-response"
								className="uagb-forms-recaptcha"
							/>
						) }
						<input
							type="hidden"
							name="uagb_forms_form_label"
							value={ formLabel }
						/>
						<input
							type="hidden"
							name="uagb_forms_form_id"
							value={ `uagb-form-${ block_id }` }
						/>
					</div>

					{ reCaptchaEnable &&
						'v2' === reCaptchaType &&
						reCaptchaSiteKeyV2 &&
						reCaptchaSecretKeyV2 && (
							<>
								<div
									className="g-recaptcha uagb-forms-field-set"
									data-sitekey={ reCaptchaSiteKeyV2 }
								></div>
								<div
									className={ `uagb-form-reacaptcha-error-${ block_id }` }
								></div>
							</>
						) }

					<div className="uagb-forms-main-submit-button-wrap wp-block-button">
						{ renderButtonHtml() }
					</div>
				</form>
			</div>
}
		</>
	);
};

export default React.memo( Render );
