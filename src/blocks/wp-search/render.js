import classnames from 'classnames';
import React, { useLayoutEffect } from 'react';
import renderSVG from '@Controls/renderIcon';
import { __ } from '@wordpress/i18n';
import styles from './editor.lazy.scss';
import { useDeviceType } from '@Controls/getPreviewType';
import { RichText } from '@wordpress/block-editor';

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
		block_id,
		layout,
		placeholder,
		buttonType,
		buttonText,
		isPreview
	} = attributes;

	const renderClassic = () => {
		if ( 'input-button' === layout ) {
			return (
				<form
					className="uagb-search-wrapper"
					onSubmit={ ( e ) => e.preventDefault() }
					role="search"
					action={ uagb_blocks_info.uagb_home_url }
					method="get"
				>
					<div
						className="uagb-search-form__container wp-block-button"
						role="tablist"
					>
						<input
							placeholder={ placeholder }
							className="uagb-search-form__input"
							type="search"
							name="s"
							title="Search"
						/>

						<button
							className="uagb-search-submit wp-block-button__link"
							type="submit"
						>
							{ 'icon' === buttonType && (
								<span className="uagb-wp-search-button-icon-wrap">
									{ renderSVG( 'fas fa-search' ) }
								</span>
							) }
							{ 'text' === buttonType && (
								<RichText
									tagName="span"
									placeholder={ __(
										'Search',
										'ultimate-addons-for-gutenberg'
									) }
									value={ buttonText }
									onChange={ ( value ) =>
										setAttributes( {
											buttonText: value,
										} )
									}
									className="uagb-wp-search-button-text"
									multiline={ false }
									allowedFormats={ [
										'core/bold',
										'core/italic',
										'core/strikethrough',
									] }
								/>
							) }
						</button>
					</div>
				</form>
			);
		}

		return '';
	};

	const renderMinimal = () => {
		if ( 'input' === layout ) {
			return (
				<form
					className="uagb-search-wrapper"
					onSubmit={ ( e ) => e.preventDefault() }
					role="search"
					action={ uagb_blocks_info.uagb_home_url }
					method="get"
				>
					<div className="uagb-search-form__container" role="tablist">
						<span className="uagb-wp-search-icon-wrap">
							{ renderSVG( 'fas fa-search' ) }
						</span>
						<input
							placeholder={ placeholder }
							className="uagb-search-form__input"
							type="search"
							name="s"
							title="Search"
						/>
					</div>
				</form>
			);
		}

		return '';
	};

	const previewImageData = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMzUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGZpbGw9IiNGMUYxRjIiIGQ9Ik0zMTYuNDMsMTgzLjgxNWMwLDQuMDg2LTMuMzE0LDcuMzk5LTcuNDAyLDcuMzk5SDQwLjk3MWMtNC4wODcsMC03LjQtMy4zMTMtNy40LTcuMzk5di0xNy42MjkNCgkJYzAtNC4wODgsMy4zMTMtNy40MDEsNy40LTcuNDAxaDI2OC4wNTdjNC4wODgsMCw3LjQwMiwzLjMxMyw3LjQwMiw3LjQwMVYxODMuODE1eiIvPg0KCTxnPg0KCQk8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0JCQkRDMCIgZD0iTTI5OS45NzEsMTgxLjUzOWMtMC4wODUsMC0wLjE3MSwwLTAuMjU1LDANCgkJCWMtMC4yMjUtMC4wNjktMC4zODEtMC4yMjgtMC41MzctMC4zOTFjLTAuOTUxLTAuOTkyLTEuOTA1LTEuOTgyLTIuODU3LTIuOTc0Yy0wLjAzNC0wLjAzNi0wLjA1OC0wLjA4My0wLjA4Ny0wLjEyNg0KCQkJYy0wLjA1MSwwLjAzOS0wLjA3MywwLjA1My0wLjA5NCwwLjA2NWMtMC44NzQsMC41ODgtMS44MzYsMC44ODktMi44OTEsMC45MDNjLTEuMTE0LDAuMDE1LTIuMTMxLTAuMzAxLTMuMDQ3LTAuOTMNCgkJCWMtMC44MTMtMC41NTktMS40MjMtMS4yOTUtMS44My0yLjE5N2MtMC40MzEtMC45NTItMC41NTgtMS45NDgtMC4zOTYtMi45NzhjMC4xNy0xLjA4NSwwLjY0Ni0yLjAyNywxLjQwNy0yLjgxOA0KCQkJYzAuNzY5LTAuODAzLDEuNy0xLjMxNywyLjc5My0xLjUzMmMwLjIyMS0wLjA0NCwwLjQ0NC0wLjA2OCwwLjY2Ni0wLjEwMmMwLjIyOSwwLDAuNDYsMCwwLjY4OSwwDQoJCQljMC4xMTgsMC4wMTcsMC4yMzUsMC4wMzMsMC4zNTIsMC4wNDljMS4xOTMsMC4xNiwyLjIxNSwwLjY3NSwzLjA1OCwxLjUyNmMwLjgzNCwwLjg0MywxLjMzNSwxLjg1OSwxLjQ4NCwzLjAzOA0KCQkJYzAuMTMxLDEuMDM5LTAuMDI2LDIuMDM5LTAuNDk4LDIuOTc2Yy0wLjE5LDAuMzgtMC40MzksMC43MzMtMC42OTMsMS4xNTJjMC4wOTMsMC4wOCwwLjIyOCwwLjE3OSwwLjM0NCwwLjI5OA0KCQkJYzAuOTA4LDAuOTM5LDEuODEzLDEuODgyLDIuNzE5LDIuODIyYzAuMjA5LDAuMjE3LDAuMjk1LDAuNDY0LDAuMTk1LDAuNzU4QzMwMC40MDksMTgxLjMzMywzMDAuMjExLDE4MS40NiwyOTkuOTcxLDE4MS41Mzl6DQoJCQkgTTI5My4xOTMsMTY5Ljg0Yy0yLjE0NS0wLjAwMy0zLjg5NSwxLjc0My0zLjkwMiwzLjg5NmMtMC4wMDksMi4xNDYsMS43NTksMy45MTUsMy45MDIsMy45MDZjMi4xNTUtMC4wMDksMy44OTYtMS43NTEsMy44OTYtMy45DQoJCQlDMjk3LjA5MSwxNzEuNTk1LDI5NS4zNDIsMTY5Ljg0NCwyOTMuMTkzLDE2OS44NHoiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==';

	return (
		isPreview ? <img width='100%' src={previewImageData} alt=''/> :
		<>
		<div
			className={ classnames(
				'uagb-wp-search__outer-wrap',
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ block_id }`,
				`uagb-layout-${ layout }`
			) }
		>
			{ renderClassic() }
			{ renderMinimal() }
		</div>
		</>
	);
};

export default React.memo( Render );
