/**
 * Inline Notice Block.
 */

// Import block dependencies and components.
import { withSelect } from '@wordpress/data';
import styling from './styling';
import lazyLoader from '@Controls/lazy-loader';
import React, { useEffect, Suspense, lazy } from 'react';

const Settings = lazy( () =>
	import(
		/* webpackChunkName: "chunks/inline-notice/settings" */ './settings'
	)
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/inline-notice/render" */ './render' )
);

const UAGBInlineNoticeEdit = ( props ) => {
	useEffect( () => {
		const { setAttributes, clientId, attributes } = props;
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );

		// Pushing Style tag for this block css.
		const $style = document.createElement( 'style' );
		$style.setAttribute(
			'id',
			'uagb-inline-notice-style-' + clientId.substr( 0, 8 )
		);
		document.head.appendChild( $style );

		const {
			contentVrPadding,
			contentHrPadding,
			titleVrPadding,
			titleHrPadding,
			titleTopPadding,
			titleRightPadding,
			titleBottomPadding,
			titleLeftPadding,
			contentTopPadding,
			contentRightPadding,
			contentBottomPadding,
			contentLeftPadding,
		} = attributes;

		if (titleVrPadding) {
			if (!titleTopPadding) {
				setAttributes({ titleTopPadding: titleVrPadding });
			}
			if (!titleBottomPadding) {
				setAttributes({ titleBottomPadding: titleVrPadding });
			}
		}
		if (titleHrPadding) {
			if (!titleRightPadding) {
				setAttributes({ titleRightPadding: titleHrPadding });
			}
			if (!titleLeftPadding) {
				setAttributes({ titleLeftPadding: titleHrPadding });
			}
		}

		if (contentVrPadding) {
			if (!contentTopPadding) {
				setAttributes({ contentTopPadding: contentVrPadding });
			}
			if (!contentBottomPadding) {
				setAttributes({ contentBottomPadding: contentVrPadding });
			}
		}
		if (contentHrPadding) {
			if (!contentRightPadding) {
				setAttributes({ contentRightPadding: contentHrPadding });
			}
			if (!contentLeftPadding) {
				setAttributes({ contentLeftPadding: contentHrPadding });
			}
		}

	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const element = document.getElementById(
			'uagb-inline-notice-style-' + props.clientId.substr( 0, 8 )
		);

		if ( null !== element && undefined !== element ) {
			element.innerHTML = styling( props );
		}
	}, [ props ] );

	return (
		<Suspense fallback={ lazyLoader() }>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</Suspense>
	);
};

export default withSelect( ( select ) => {
	const { __experimentalGetPreviewDeviceType = null } = select(
		'core/edit-post'
	);

	const deviceType = __experimentalGetPreviewDeviceType
		? __experimentalGetPreviewDeviceType()
		: null;

	return {
		deviceType,
	};
} )( UAGBInlineNoticeEdit );
