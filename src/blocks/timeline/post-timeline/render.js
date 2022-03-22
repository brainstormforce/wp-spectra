import classnames from 'classnames';

import ContentTmClasses from '.././classes';
import AlignClass from '.././align-classes';
import DayAlignClass from '.././day-align-classes';
import Title from './components/Title';
import FeaturedImage from './components/FeaturedImage';
import Excerpt from './components/Excerpt';
import CtaLink from './components/CtaLink';
import Author from './components/Author';
import PostDate from './components/PostDate';
import Icon from './components/Icon';
import { useDeviceType } from '@Controls/getPreviewType';
import { __ } from '@wordpress/i18n';
import { Placeholder, Spinner } from '@wordpress/components';
import React, { useLayoutEffect } from 'react';
import styles from '../editor.lazy.scss';

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
	const { attributes, className, latestPosts } = props;

	const {
		isPreview,
		displayPostLink,
		timelinAlignment,
		postsToShow,
	} = attributes;

	/* Render output at backend */
	const getContent = () => {

		const hasPosts = Array.isArray( latestPosts ) && latestPosts.length;

		if ( ! hasPosts ) {
			return (
				<Placeholder
					icon="admin-post"
					label={
						uagb_blocks_info.blocks[ 'uagb/post-timeline' ].title
					}
				>
					{ ! Array.isArray( latestPosts ) ? (
						<Spinner />
					) : (
						__( 'No posts found.' )
					) }
				</Placeholder>
			);
		}
		// Removing posts from display should be instant.
		const displayPosts =
			latestPosts.length > postsToShow
				? latestPosts.slice( 0, postsToShow )
				: latestPosts;

		let contentAlignClass = AlignClass( props.attributes, 0 ); // Get classname for layout alignment
		let dayAlignClass = DayAlignClass( props.attributes, 0 ); // Get classname for day alignment.

		let displayInnerDate = false;
		const previewImageData = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMzUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGZpbGw9IiNGMUYxRjIiIGQ9Ik0xNTMuNjIyLDE2OC4yNDljMCwzLjUyNy0yLjg2LDYuMzg5LTYuMzg5LDYuMzg5SDQ3LjE0OWMtMy41MywwLTYuMzg5LTIuODYxLTYuMzg5LTYuMzg5VjY3LjcwNA0KCQljMC0zLjUyOSwyLjg1OS02LjM4OSw2LjM4OS02LjM4OWgxMDAuMDgzYzMuNTI5LDAsNi4zODksMi44Niw2LjM4OSw2LjM4OVYxNjguMjQ5TDE1My42MjIsMTY4LjI0OXoiLz4NCgk8cGF0aCBmaWxsPSIjRjFGMUYyIiBkPSJNMzA5LjI0LDI4Mi4yOTljMCwzLjUyNi0yLjg2LDYuMzg3LTYuMzg5LDYuMzg3SDIwMi43NjhjLTMuNTI5LDAtNi4zOS0yLjg2LTYuMzktNi4zODdWMTgxLjc1Mg0KCQljMC0zLjUyNywyLjg2LTYuMzg4LDYuMzktNi4zODhoMTAwLjA4NGMzLjUyOCwwLDYuMzg5LDIuODYsNi4zODksNi4zODhWMjgyLjI5OUwzMDkuMjQsMjgyLjI5OXoiLz4NCgk8Y2lyY2xlIGZpbGw9IiNEQkRDREUiIGN4PSIxNzQuODExIiBjeT0iMTE3Ljk3NiIgcj0iMTEuODgiLz4NCgk8Y2lyY2xlIGZpbGw9IiNEQkRDREUiIGN4PSIxNzQuODExIiBjeT0iMjMyLjAyNSIgcj0iMTEuODgiLz4NCgk8bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiNEQkRDREUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB4MT0iMTc0LjgxIiB5MT0iMTE3Ljk3NiIgeDI9IjE3NC44MSIgeTI9IjIzNS4zNzMiLz4NCgk8cG9seWdvbiBmaWxsPSIjRjFGMUYyIiBwb2ludHM9IjE2My4wMTMsMTE3Ljk3NiAxNTguMzMsMTIwLjY4IDE1My42NDYsMTIzLjM4NCAxNTMuNjQ2LDExNy45NzYgMTUzLjY0NiwxMTIuNTY5IDE1OC4zMywxMTUuMjczIAkNCgkJIi8+DQoJPHBvbHlnb24gZmlsbD0iI0YxRjFGMiIgcG9pbnRzPSIxODcuNDkzLDIzMC41NDEgMTkyLjE3NiwyMzMuMjQzIDE5Ni44NTcsMjM1Ljk0OSAxOTYuODU3LDIzMC41NDEgMTk2Ljg1NywyMjUuMTM0IA0KCQkxOTIuMTc2LDIyNy44MzggCSIvPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0xMzAuOTIsODguOTg4YzAsMi4xNjEtMS43NSwzLjkxMi0zLjkxMSwzLjkxMkg2Ny4zNzJjLTIuMTYsMC0zLjkxLTEuNzUtMy45MS0zLjkxMnYwLjIzNw0KCQkJCWMwLTIuMTYsMS43NS0zLjkxMSwzLjkxLTMuOTExaDU5LjYzN2MyLjE2MSwwLDMuOTExLDEuNzUxLDMuOTExLDMuOTExVjg4Ljk4OHoiLz4NCgkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0xMTYuODI0LDk5LjgzOWMwLDEuMTI0LTAuOTEsMi4wMzUtMi4wMzYsMi4wMzVINzkuNTkyYy0xLjEyNSwwLTIuMDM3LTAuOTExLTIuMDM3LTIuMDM1bDAsMA0KCQkJCWMwLTEuMTI2LDAuOTExLTIuMDM4LDIuMDM3LTIuMDM4aDM1LjE5NkMxMTUuOTE0LDk3LjgwMiwxMTYuODI0LDk4LjcxMywxMTYuODI0LDk5LjgzOUwxMTYuODI0LDk5LjgzOXoiLz4NCgkJCTxnPg0KCQkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0xMjguMzc2LDExMi41NjRjMCwxLjEyNS0wLjkxMSwyLjAzNi0yLjAzNiwyLjAzNmgtNTguM2MtMS4xMjUsMC0yLjAzNi0wLjkxMS0yLjAzNi0yLjAzNmwwLDANCgkJCQkJYzAtMS4xMjYsMC45MS0yLjAzOCwyLjAzNi0yLjAzOGg1OC4zQzEyNy40NjUsMTEwLjUyNiwxMjguMzc2LDExMS40MzgsMTI4LjM3NiwxMTIuNTY0TDEyOC4zNzYsMTEyLjU2NHoiLz4NCgkJCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMTI4LjM3NiwxMjAuMDAzYzAsMS4xMjQtMC45MTEsMi4wMzUtMi4wMzYsMi4wMzVoLTU4LjNjLTEuMTI1LDAtMi4wMzYtMC45MTEtMi4wMzYtMi4wMzVsMCwwDQoJCQkJCWMwLTEuMTI3LDAuOTEtMi4wMzksMi4wMzYtMi4wMzloNTguM0MxMjcuNDY1LDExNy45NjQsMTI4LjM3NiwxMTguODc2LDEyOC4zNzYsMTIwLjAwM0wxMjguMzc2LDEyMC4wMDN6Ii8+DQoJCQkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTEyOC4zNzYsMTI4LjIxYzAsMS4xMjUtMC45MTEsMi4wMzYtMi4wMzYsMi4wMzZoLTU4LjNjLTEuMTI1LDAtMi4wMzYtMC45MTEtMi4wMzYtMi4wMzZsMCwwDQoJCQkJCWMwLTEuMTI2LDAuOTEtMi4wMzcsMi4wMzYtMi4wMzdoNTguM0MxMjcuNDY1LDEyNi4xNzQsMTI4LjM3NiwxMjcuMDg0LDEyOC4zNzYsMTI4LjIxTDEyOC4zNzYsMTI4LjIxeiIvPg0KCQkJPC9nPg0KCQk8L2c+DQoJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0xMjAuMjc5LDE0Ni4yMTJjMCwyLjQ0NS0xLjk4MSw0LjQyNS00LjQyNiw0LjQyNUg3Ny43NDFjLTIuNDQzLDAtNC40MjUtMS45OC00LjQyNS00LjQyNWwwLDANCgkJCWMwLTIuNDQzLDEuOTgxLTQuNDI2LDQuNDI1LTQuNDI2aDM4LjExMkMxMTguMjk4LDE0MS43ODcsMTIwLjI3OSwxNDMuNzY5LDEyMC4yNzksMTQ2LjIxMkwxMjAuMjc5LDE0Ni4yMTJ6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yODYuNTM5LDIwMy4wMzljMCwyLjE1OS0xLjc1MSwzLjkwOS0zLjkxMiwzLjkwOWgtNTkuNjM2Yy0yLjE2MSwwLTMuOTExLTEuNzUtMy45MTEtMy45MDl2MC4yMzQNCgkJCQljMC0yLjE1NywxLjc1LTMuOTEsMy45MTEtMy45MWg1OS42MzZjMi4xNjEsMCwzLjkxMiwxLjc1MywzLjkxMiwzLjkxVjIwMy4wMzl6Ii8+DQoJCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMjcyLjQ0MiwyMTMuODg4YzAsMS4xMjYtMC45MSwyLjAzNi0yLjAzNiwyLjAzNmgtMzUuMTk1Yy0xLjEyNSwwLTIuMDM3LTAuOTEtMi4wMzctMi4wMzZsMCwwDQoJCQkJYzAtMS4xMjUsMC45MTItMi4wMzUsMi4wMzctMi4wMzVoMzUuMTk1QzI3MS41MzIsMjExLjg1MywyNzIuNDQyLDIxMi43NjMsMjcyLjQ0MiwyMTMuODg4TDI3Mi40NDIsMjEzLjg4OHoiLz4NCgkJCTxnPg0KCQkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yODMuOTk0LDIyNi42MTNjMCwxLjEyNS0wLjkwOSwyLjAzNy0yLjAzNSwyLjAzN2gtNTguMzAxYy0xLjEyNCwwLTIuMDM1LTAuOTEyLTIuMDM1LTIuMDM3bDAsMA0KCQkJCQljMC0xLjEyNCwwLjkxMS0yLjAzNiwyLjAzNS0yLjAzNmg1OC4zMDFDMjgzLjA4NSwyMjQuNTc3LDI4My45OTQsMjI1LjQ4OSwyODMuOTk0LDIyNi42MTNMMjgzLjk5NCwyMjYuNjEzeiIvPg0KCQkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yODMuOTk0LDIzNC4wNTNjMCwxLjEyNC0wLjkwOSwyLjAzNC0yLjAzNSwyLjAzNGgtNTguMzAxYy0xLjEyNCwwLTIuMDM1LTAuOTEtMi4wMzUtMi4wMzRsMCwwDQoJCQkJCWMwLTEuMTI4LDAuOTExLTIuMDM3LDIuMDM1LTIuMDM3aDU4LjMwMUMyODMuMDg1LDIzMi4wMTYsMjgzLjk5NCwyMzIuOTI1LDI4My45OTQsMjM0LjA1M0wyODMuOTk0LDIzNC4wNTN6Ii8+DQoJCQkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTI4My45OTQsMjQyLjI2YzAsMS4xMjYtMC45MDksMi4wMzYtMi4wMzUsMi4wMzZoLTU4LjMwMWMtMS4xMjQsMC0yLjAzNS0wLjkxLTIuMDM1LTIuMDM2bDAsMA0KCQkJCQljMC0xLjEyNSwwLjkxMS0yLjAzNSwyLjAzNS0yLjAzNWg1OC4zMDFDMjgzLjA4NSwyNDAuMjI1LDI4My45OTQsMjQxLjEzNSwyODMuOTk0LDI0Mi4yNkwyODMuOTk0LDI0Mi4yNnoiLz4NCgkJCTwvZz4NCgkJPC9nPg0KCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMjc1Ljg5NywyNjAuMjY0YzAsMi40NDMtMS45ODEsNC40MjQtNC40MjYsNC40MjRIMjMzLjM2Yy0yLjQ0NCwwLTQuNDI2LTEuOTgtNC40MjYtNC40MjRsMCwwDQoJCQljMC0yLjQ0NiwxLjk4MS00LjQyNyw0LjQyNi00LjQyN2gzOC4xMTFDMjczLjkxNiwyNTUuODM3LDI3NS44OTcsMjU3LjgxNywyNzUuODk3LDI2MC4yNjRMMjc1Ljg5NywyNjAuMjY0eiIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K';
		return (
			<>
			{ isPreview } ? <img width='100%' src={previewImageData}/> :
				{ displayPosts.map( ( post, index ) => {
					if ( timelinAlignment === 'center' ) {
						displayInnerDate = true;
						contentAlignClass = AlignClass(
							props.attributes,
							index
						);
						dayAlignClass = DayAlignClass(
							props.attributes,
							index
						);
					}

					return (
						<article
							className={ classnames( 'uagb-timeline__field ', contentAlignClass ) }
							key={ index }
						>
							{ <Icon attributes={ attributes } /> }
							<div className={ classnames( dayAlignClass, 'uagb-timeline__events-inner-new' ) }>
								<PostDate
									post={ post }
									attributes={ attributes }
									dateClass="uagb-timeline__date-hide uagb-timeline__inner-date-new"
								/>
								{
									<FeaturedImage
										post={ post }
										attributes={ attributes }
									/>
								}
									{
										<Title
											post={ post }
											attributes={ attributes }
										/>
									}
									{
										<Author
											post={ post }
											attributes={ attributes }
										/>
									}
									{
										<Excerpt
											post={ post }
											attributes={ attributes }
										/>
									}
									{
										<CtaLink
											post={ post }
											attributes={ attributes }
										/>
									}

									<div className="uagb-timeline__arrow"></div>
							</div>
							{ displayInnerDate && (
								<>
									<PostDate
										post={ post }
										attributes={ attributes }
										dateClass="uagb-timeline__date-new"
									/>
								</>
							) }
						</article>
					);
				} ) }
			</>
		);
	};

	let ctaEnable = '';

	if ( displayPostLink ) {
		ctaEnable = 'uagb_timeline__cta-enable';
	}

	return (
		<div
			className={ classnames(
				className,
				'uagb-timeline__outer-wrap',
				'uagb-timeline__content-wrap',
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ props.clientId }`,
				ctaEnable,
				...ContentTmClasses( props.attributes )
			) }
		>
			{ getContent() }
			<div className="uagb-timeline__line">
				<div className="uagb-timeline__line__inner"></div>
			</div>
		</div>
	);
};
export default React.memo( Render );
