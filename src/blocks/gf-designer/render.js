import classnames from 'classnames';
import { SelectControl, Placeholder, Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import React, { useLayoutEffect } from 'react';
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
	const { className, attributes, setAttributes } = props;
	// Setup the attributes.
	const {
		isPreview,
		formId,
		align,
		isHtml,
		formJson,
		titleDescStyle,
		fieldStyle,
		buttonAlignment,
		enableLabel,
		enableOveride,
		advancedValidationSettings,
	} = attributes;

	/*
	 * Event to set Image as while adding.
	 */
	const onSelectForm = ( id ) => {
		if ( ! id ) {
			setAttributes( { isHtml: false } );
			setAttributes( { formId: null } );
			return;
		}
		setAttributes( { isHtml: false } );
		setAttributes( { formId: id } );
	};

	let html = '';

	if ( formJson && formJson.data.html ) {
		html = formJson.data.html;
	}
	const previewImageData = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMzUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNNDQuMDMzLDIxOS4wNTZjMCwwLjg2NS0wLjcwMiwxLjU2Ny0xLjU2NywxLjU2N2gtOS41NzhjLTAuODY1LDAtMS41NjctMC43MDItMS41NjctMS41Njd2LTkuNTc4DQoJCQljMC0wLjg2NSwwLjcwMi0xLjU2NywxLjU2Ny0xLjU2N2g5LjU3OGMwLjg2NiwwLDEuNTY3LDAuNzAyLDEuNTY3LDEuNTY3TDQ0LjAzMywyMTkuMDU2TDQ0LjAzMywyMTkuMDU2eiIvPg0KCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNODkuMTYzLDIxNC40NjljMCwxLjgxLTEuNDY3LDMuMjc2LTMuMjczLDMuMjc2SDU2LjA2NWMtMS44MDgsMC0zLjI3NC0xLjQ2Ny0zLjI3NC0zLjI3NnYtMC40MDcNCgkJCWMwLTEuODA5LDEuNDY3LTMuMjczLDMuMjc0LTMuMjczSDg1Ljg5YzEuODA3LDAsMy4yNzMsMS40NjUsMy4yNzMsMy4yNzNWMjE0LjQ2OXoiLz4NCgk8L2c+DQoJPGc+DQoJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0xNjEsMjE5LjA1NmMwLDAuODY1LTAuNzAyLDEuNTY3LTEuNTY3LDEuNTY3aC05LjU3OGMtMC44NjUsMC0xLjU2Ny0wLjcwMi0xLjU2Ny0xLjU2N3YtOS41NzgNCgkJCWMwLTAuODY1LDAuNzAyLTEuNTY3LDEuNTY3LTEuNTY3aDkuNTc4YzAuODY2LDAsMS41NjcsMC43MDIsMS41NjcsMS41NjdMMTYxLDIxOS4wNTZMMTYxLDIxOS4wNTZ6Ii8+DQoJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yMDYuMTMsMjE0LjQ2OWMwLDEuODEtMS40NjgsMy4yNzYtMy4yNzQsMy4yNzZoLTI5LjgyNGMtMS44MDgsMC0zLjI3NC0xLjQ2Ny0zLjI3NC0zLjI3NnYtMC40MDcNCgkJCWMwLTEuODA5LDEuNDY3LTMuMjczLDMuMjc0LTMuMjczaDI5LjgyNGMxLjgwNywwLDMuMjc0LDEuNDY1LDMuMjc0LDMuMjczVjIxNC40Njl6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMjc3Ljk2NiwyMTkuMDU2YzAsMC44NjUtMC43MDIsMS41NjctMS41NjcsMS41NjdoLTkuNTc4Yy0wLjg2NSwwLTEuNTY2LTAuNzAyLTEuNTY2LTEuNTY3di05LjU3OA0KCQkJYzAtMC44NjUsMC43MDEtMS41NjcsMS41NjYtMS41NjdoOS41NzhjMC44NjUsMCwxLjU2NiwwLjcwMiwxLjU2NiwxLjU2N0wyNzcuOTY2LDIxOS4wNTZMMjc3Ljk2NiwyMTkuMDU2eiIvPg0KCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMzIzLjA5NiwyMTQuNDY5YzAsMS44MS0xLjQ2NywzLjI3Ni0zLjI3MywzLjI3NmgtMjkuODI0Yy0xLjgwOCwwLTMuMjc0LTEuNDY3LTMuMjc0LTMuMjc2di0wLjQwNw0KCQkJYzAtMS44MDksMS40NjctMy4yNzMsMy4yNzQtMy4yNzNoMjkuODI0YzEuODA3LDAsMy4yNzMsMS40NjUsMy4yNzMsMy4yNzNWMjE0LjQ2OXoiLz4NCgk8L2c+DQo8L2c+DQo8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMTM4LjQ2MiwzMTEuMzI2YzAsNS41NzYtNC41MjEsMTAuMDk2LTEwLjA5NywxMC4wOTZINDEuNDE5Yy01LjU3NiwwLTEwLjA5OS00LjUyLTEwLjA5OS0xMC4wOTZsMCwwDQoJYzAtNS41NzgsNC41MjItMTAuMSwxMC4wOTktMTAuMWg4Ni45NDRDMTMzLjk0MSwzMDEuMjI5LDEzOC40NjIsMzA1Ljc0OCwxMzguNDYyLDMxMS4zMjZMMTM4LjQ2MiwzMTEuMzI2eiIvPg0KPGc+DQoJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTMyNC42OCwzOC45NDFjMCwyLjIyMy0xLjgwNSw0LjAyNi00LjAyNyw0LjAyNkgzNS4zNDhjLTIuMjI0LDAtNC4wMjctMS44MDMtNC4wMjctNC4wMjZ2LTAuNTA0DQoJCWMwLTIuMjIzLDEuODA0LTQuMDI2LDQuMDI3LTQuMDI2aDI4NS4zMDVjMi4yMjMsMCw0LjAyNSwxLjgwMyw0LjAyNSw0LjAyNnYwLjUwNEgzMjQuNjh6Ii8+DQoJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTMyNC42OCw2Ny44NWMwLDIuMjIzLTEuODA1LDQuMDI2LTQuMDI3LDQuMDI2SDM1LjM0OGMtMi4yMjQsMC00LjAyNy0xLjgwMy00LjAyNy00LjAyNnYtMC41MDQNCgkJYzAtMi4yMjMsMS44MDQtNC4wMjYsNC4wMjctNC4wMjZoMjg1LjMwNWMyLjIyMywwLDQuMDI1LDEuODAzLDQuMDI1LDQuMDI2djAuNTA0SDMyNC42OHoiLz4NCgk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMzI0LjY4LDk2Ljc1N2MwLDIuMjIyLTEuODA1LDQuMDI2LTQuMDI3LDQuMDI2SDM1LjM0OGMtMi4yMjQsMC00LjAyNy0xLjgwNC00LjAyNy00LjAyNnYtMC41MDQNCgkJYzAtMi4yMjMsMS44MDQtNC4wMjYsNC4wMjctNC4wMjZoMjg1LjMwNWMyLjIyMywwLDQuMDI1LDEuODAzLDQuMDI1LDQuMDI2djAuNTA0SDMyNC42OHoiLz4NCjwvZz4NCjxnPg0KCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0zMTYuMzk4LDEyNi4wODljMS40ODcsMCwyLjY5NywxLjIyLDIuNjk3LDIuNzJ2NTEuMDc1YzAsMS41LTEuMjEsMi43MjEtMi42OTcsMi43MjFIMzguMDE4DQoJCWMtMS40ODYsMC0yLjY5Ny0xLjIyMS0yLjY5Ny0yLjcyMXYtNTEuMDc1YzAtMS41LDEuMjA5LTIuNzIsMi42OTctMi43MkgzMTYuMzk4IE0zMTYuMzk4LDEyMi4wODlIMzguMDE4DQoJCWMtMy42OTksMC02LjY5NywzLjAwOS02LjY5Nyw2LjcydjUxLjA3NWMwLDMuNzEsMi45OTgsNi43MjEsNi42OTcsNi43MjFoMjc4LjM4MWMzLjcwMSwwLDYuNjk3LTMuMDExLDYuNjk3LTYuNzIxdi01MS4wNzUNCgkJQzMyMy4wOTgsMTI1LjA5NywzMjAuMSwxMjIuMDg5LDMxNi4zOTgsMTIyLjA4OUwzMTYuMzk4LDEyMi4wODl6Ii8+DQo8L2c+DQo8Zz4NCgk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMTE0LjE4MSwyNDUuNzIyYzAsMC44NzQtMC43MDgsMS41ODItMS41ODEsMS41ODJINDcuMDdjLTAuODczLDAtMS41ODEtMC43MDgtMS41ODEtMS41ODJ2LTAuMTk3DQoJCWMwLTAuODczLDAuNzA4LTEuNTgxLDEuNTgxLTEuNTgxSDExMi42YzAuODczLDAsMS41ODEsMC43MDgsMS41ODEsMS41ODFWMjQ1LjcyMnoiLz4NCgk8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQkJCREMwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik00MC42MDgsMjQ1LjYzMQ0KCQljMC4wMSwyLjAxNS0xLjYzMiwzLjY4LTMuNjM3LDMuNjg4Yy0yLjA2NiwwLjAxLTMuNzM1LTEuNjMtMy43NDMtMy42NzVjLTAuMDA3LTIuMDI1LDEuNjUxLTMuNzA1LDMuNjcxLTMuNzE2DQoJCUMzOC45NTgsMjQxLjkxNyw0MC41OTgsMjQzLjU1NCw0MC42MDgsMjQ1LjYzMXoiLz4NCgk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMTE0LjE4MSwyNjAuMzk5YzAsMC44NzQtMC43MDgsMS41ODItMS41ODEsMS41ODJINDcuMDdjLTAuODczLDAtMS41ODEtMC43MDgtMS41ODEtMS41ODJ2LTAuMTk3DQoJCWMwLTAuODczLDAuNzA4LTEuNTgxLDEuNTgxLTEuNTgxSDExMi42YzAuODczLDAsMS41ODEsMC43MDgsMS41ODEsMS41ODFWMjYwLjM5OXoiLz4NCgk8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQkJCREMwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik00MC42MDgsMjYwLjMwOQ0KCQljMC4wMSwyLjAxNS0xLjYzMiwzLjY4LTMuNjM3LDMuNjg4Yy0yLjA2NiwwLjAwOS0zLjczNS0xLjYzLTMuNzQzLTMuNjc1Yy0wLjAwNy0yLjAyNSwxLjY1MS0zLjcwNSwzLjY3MS0zLjcxNg0KCQlDMzguOTU4LDI1Ni41OTUsNDAuNTk4LDI1OC4yMzEsNDAuNjA4LDI2MC4zMDl6Ii8+DQoJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTExNC4xODEsMjc2LjMyM2MwLDAuODc0LTAuNzA4LDEuNTgyLTEuNTgxLDEuNTgySDQ3LjA3Yy0wLjg3MywwLTEuNTgxLTAuNzA4LTEuNTgxLTEuNTgydi0wLjE5Nw0KCQljMC0wLjg3MywwLjcwOC0xLjU4MSwxLjU4MS0xLjU4MUgxMTIuNmMwLjg3MywwLDEuNTgxLDAuNzA4LDEuNTgxLDEuNTgxVjI3Ni4zMjN6Ii8+DQoJPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0JCQkRDMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNNDAuNjA4LDI3Ni4yMzINCgkJYzAuMDEsMi4wMTUtMS42MzIsMy42OC0zLjYzNywzLjY4OGMtMi4wNjYsMC4wMS0zLjczNS0xLjYyOS0zLjc0My0zLjY3NWMtMC4wMDctMi4wMjUsMS42NTEtMy43MDUsMy42NzEtMy43MTYNCgkJQzM4Ljk1OCwyNzIuNTE5LDQwLjU5OCwyNzQuMTU1LDQwLjYwOCwyNzYuMjMyeiIvPg0KCTxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjQkJCREMwIiBkPSJNMzkuMDY3LDI0NS42MjhjMC4wMDYsMS4xNzMtMC45NSwyLjE0My0yLjExOCwyLjE0Nw0KCQljLTEuMjAzLDAuMDA2LTIuMTc1LTAuOTQ5LTIuMTc5LTIuMTRjLTAuMDA0LTEuMTc5LDAuOTYxLTIuMTU3LDIuMTM3LTIuMTYzQzM4LjEwNiwyNDMuNDY2LDM5LjA2MSwyNDQuNDE5LDM5LjA2NywyNDUuNjI4eiIvPg0KPC9nPg0KPC9zdmc+DQo=';
	if ( parseInt( formId ) === 0 ) {
		return (
			isPreview ? <img width='100%' src={previewImageData} alt=''/> :
		<>
			<Placeholder
				icon="admin-post"
				label={ __(
					'Select a Gravity Form',
					'ultimate-addons-for-gutenberg'
				) }
			>
				<SelectControl
					value={ formId }
					onChange={ onSelectForm }
					options={ uagb_blocks_info.gf_forms }
				/>
			</Placeholder>
		</>
		);
	}
	return (
		<div
			className={ classnames(
				className,
				'uagb-gf-styler__outer-wrap',
				`uagb-block-${ props.clientId.substr( 0, 8 ) }`
			) }
		>
			<div
				className={ classnames(
					`uagb-gf-styler__align-${ align }`,
					`uagb-gf-styler__field-style-${ fieldStyle }`,
					`uagb-gf-styler__btn-align-${ buttonAlignment }`,
					`uagb-gf-styler__gform-heading-${ titleDescStyle }`,
					enableOveride ? 'uagb-gf-styler__check-style-enabled' : '',
					enableLabel ? 'uagb-gf-styler__hide-label' : '',
					advancedValidationSettings
						? 'uagb-gf-styler__error-yes'
						: ''
				) }
			>
				{ isHtml && (
					<div dangerouslySetInnerHTML={ { __html: html } } />
				) }
				{ isHtml === false && (
					<Placeholder
						icon="admin-post"
						label={ __(
							'Loading',
							'ultimate-addons-for-gutenberg'
						) }
					>
						<Spinner />
					</Placeholder>
				) }
			</div>
		</div>
	);
};
export default React.memo( Render );
