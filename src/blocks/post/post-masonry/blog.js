import classnames from 'classnames';
import lazyLoader from '@Controls/lazy-loader';
import { useDeviceType } from '@Controls/getPreviewType';
import React, { useRef, useEffect, lazy, Suspense } from 'react';

const Masonry = lazy( () =>
	import(
		/* webpackChunkName: "chunks/post-masonry/react-masonry-component" */ 'react-masonry-component'
	)
);

import {
	InnerBlockLayoutContextProvider,
	renderPostLayout,
} from '.././function';

function Blog( props ) {
	const article = useRef();
	const { attributes, className, latestPosts, block_id } = props;
	const deviceType = useDeviceType();
	const {
		isPreview,
		columns,
		tcolumns,
		mcolumns,
		imgPosition,
		postsToShow,
		paginationEventType,
		buttonText,
		paginationType,
		layoutConfig,
		rowGap
	} = attributes;

	const updateImageBgWidth = () => {

		setTimeout( () => {

			if( article?.current ){

				const articleWidth  = article?.current?.offsetWidth;
				const imageWidth = 100 - ( rowGap / articleWidth ) * 100;
				const parent = article?.current?.parentNode;

				if ( parent && parent.classList.contains( 'uagb-post__image-position-background' ) ) {
					const images = parent?.getElementsByClassName( 'uagb-post__image' );
					for( const image of images ) {
						if ( image ) {
							image.style.width = imageWidth + '%';
							image.style.marginLeft = rowGap / 2 + 'px';

						}
					}
				}
			}

		}, 100 )
	};

	useEffect( () => {
		updateImageBgWidth();
    }, [article] );

	useEffect( () => {
		updateImageBgWidth();
    }, [imgPosition] );

	// Removing posts from display should be instant.
	const displayPosts =
		latestPosts.length > postsToShow
			? latestPosts.slice( 0, postsToShow )
			: latestPosts;

	const paginationRender = () => {
		if ( 'infinite' === paginationType ) {
			if ( 'scroll' === paginationEventType ) {
				return (
					<div className="uagb-post-inf-loader">
						<div className="uagb-post-loader-1"></div>
						<div className="uagb-post-loader-2"></div>
						<div className="uagb-post-loader-3"></div>
					</div>
				);
			}
			if ( 'button' === paginationEventType ) {
				return (
					<div className="uagb-post__load-more-wrap">
						<span className="uagb-post-pagination-button">
							<a // eslint-disable-line jsx-a11y/anchor-is-valid
								className="uagb-post__load-more">
								{ buttonText }
							</a>
						</span>
					</div>
				);
			}
		}
	};
	const previewImageData = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMzUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjRjFGMUYyIiBkPSJNMTY4LjQxNSwyMzYuMjk5YzAsNS41MjEtNC40NzgsMTAtMTAsMTBIMzEuMDgxYy01LjUyMiwwLTEwLTQuNDc5LTEwLTEwVjUzLjY1NWMwLTUuNTIyLDQuNDc4LTEwLDEwLTEwDQoJCQloMTI3LjMzNGM1LjUyMiwwLDEwLDQuNDc4LDEwLDEwVjIzNi4yOTl6Ii8+DQoJCTxnPg0KCQkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTEzOC41ODIsMTA1Ljg2NGMwLDIuODA3LTIuMjc1LDUuMDgyLTUuMDgyLDUuMDgySDU1Ljk5N2MtMi44MDcsMC01LjA4Mi0yLjI3NS01LjA4Mi01LjA4MnYwLjMwOA0KCQkJCWMwLTIuODA2LDIuMjc1LTUuMDgyLDUuMDgyLTUuMDgySDEzMy41YzIuODA3LDAsNS4wODIsMi4yNzYsNS4wODIsNS4wODJWMTA1Ljg2NHoiLz4NCgkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0xMDEuOTQ2LDExOS45NjRjMCwxLjQ2Mi0xLjE4NCwyLjY0Ni0yLjY0NiwyLjY0Nkg1My41NjJjLTEuNDYyLDAtMi42NDYtMS4xODQtMi42NDYtMi42NDZsMCwwDQoJCQkJYzAtMS40NjMsMS4xODUtMi42NDcsMi42NDYtMi42NDdIOTkuM0MxMDAuNzYzLDExNy4zMTcsMTAxLjk0NiwxMTguNTAxLDEwMS45NDYsMTE5Ljk2NEwxMDEuOTQ2LDExOS45NjR6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMTMxLjk3LDEzNi41MDFjMCwxLjQ2Mi0xLjE4NCwyLjY0Ni0yLjY0NiwyLjY0Nkg1My41NjJjLTEuNDYyLDAtMi42NDYtMS4xODQtMi42NDYtMi42NDZsMCwwDQoJCQkJYzAtMS40NjMsMS4xODUtMi42NDcsMi42NDYtMi42NDdoNzUuNzYyQzEzMC43ODYsMTMzLjg1NCwxMzEuOTcsMTM1LjAzOCwxMzEuOTcsMTM2LjUwMUwxMzEuOTcsMTM2LjUwMXoiLz4NCgkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0xMzEuOTcsMTQ2LjE2N2MwLDEuNDYyLTEuMTg0LDIuNjQ2LTIuNjQ2LDIuNjQ2SDUzLjU2MmMtMS40NjIsMC0yLjY0Ni0xLjE4NC0yLjY0Ni0yLjY0NmwwLDANCgkJCQljMC0xLjQ2MywxLjE4NS0yLjY0NywyLjY0Ni0yLjY0N2g3NS43NjJDMTMwLjc4NiwxNDMuNTIsMTMxLjk3LDE0NC43MDUsMTMxLjk3LDE0Ni4xNjdMMTMxLjk3LDE0Ni4xNjd6Ii8+DQoJCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMTMxLjk3LDE1Ni44MzRjMCwxLjQ2Mi0xLjE4NCwyLjY0Ni0yLjY0NiwyLjY0Nkg1My41NjJjLTEuNDYyLDAtMi42NDYtMS4xODQtMi42NDYtMi42NDZsMCwwDQoJCQkJYzAtMS40NjMsMS4xODUtMi42NDcsMi42NDYtMi42NDdoNzUuNzYyQzEzMC43ODYsMTU0LjE4NywxMzEuOTcsMTU1LjM3MSwxMzEuOTcsMTU2LjgzNEwxMzEuOTcsMTU2LjgzNHoiLz4NCgkJPC9nPg0KCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMTI5LjIzLDE4MS40ODRjMCw0LjA3Ni0zLjMwNSw3LjM3OS03LjM4MSw3LjM3OUg1OC4yOTZjLTQuMDc2LDAtNy4zODEtMy4zMDMtNy4zODEtNy4zNzlsMCwwDQoJCQljMC00LjA3NywzLjMwNS03LjM4MSw3LjM4MS03LjM4MWg2My41NTRDMTI1LjkyNiwxNzQuMTAzLDEyOS4yMywxNzcuNDA3LDEyOS4yMywxODEuNDg0TDEyOS4yMywxODEuNDg0eiIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0YxRjFGMiIgZD0iTTMyOC45MTgsMjk2LjM0NmMwLDUuNTIxLTQuNDc3LDEwLTEwLDEwSDE5MS41ODRjLTUuNTIyLDAtMTAtNC40NzktMTAtMTBWNTMuNjU1YzAtNS41MjIsNC40NzgtMTAsMTAtMTANCgkJCWgxMjcuMzM0YzUuNTIzLDAsMTAsNC40NzgsMTAsMTBWMjk2LjM0NnoiLz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMjk5LjA4NSwxMDUuODY0YzAsMi44MDctMi4yNzUsNS4wODItNS4wODIsNS4wODJIMjE2LjVjLTIuODA3LDAtNS4wODItMi4yNzUtNS4wODItNS4wODJ2MC4zMDgNCgkJCQljMC0yLjgwNiwyLjI3NS01LjA4Miw1LjA4Mi01LjA4Mmg3Ny41MDNjMi44MDcsMCw1LjA4MiwyLjI3Niw1LjA4Miw1LjA4MlYxMDUuODY0eiIvPg0KCQkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTI2Mi40NDksMTE5Ljk2NGMwLDEuNDYyLTEuMTg0LDIuNjQ2LTIuNjQ2LDIuNjQ2aC00NS43MzhjLTEuNDYyLDAtMi42NDYtMS4xODQtMi42NDYtMi42NDZsMCwwDQoJCQkJYzAtMS40NjMsMS4xODUtMi42NDcsMi42NDYtMi42NDdoNDUuNzM4QzI2MS4yNjYsMTE3LjMxNywyNjIuNDQ5LDExOC41MDEsMjYyLjQ0OSwxMTkuOTY0TDI2Mi40NDksMTE5Ljk2NHoiLz4NCgkJPC9nPg0KCQk8Zz4NCgkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yOTIuNDczLDEzNi41MDFjMCwxLjQ2Mi0xLjE4NCwyLjY0Ni0yLjY0NiwyLjY0NmgtNzUuNzYyYy0xLjQ2MiwwLTIuNjQ2LTEuMTg0LTIuNjQ2LTIuNjQ2bDAsMA0KCQkJCWMwLTEuNDYzLDEuMTg1LTIuNjQ3LDIuNjQ2LTIuNjQ3aDc1Ljc2MkMyOTEuMjg5LDEzMy44NTQsMjkyLjQ3MywxMzUuMDM5LDI5Mi40NzMsMTM2LjUwMUwyOTIuNDczLDEzNi41MDF6Ii8+DQoJCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMjkyLjQ3MywxNDkuOTY4YzAsMS40NjItMS4xODQsMi42NDYtMi42NDYsMi42NDZoLTc1Ljc2MmMtMS40NjIsMC0yLjY0Ni0xLjE4NC0yLjY0Ni0yLjY0NmwwLDANCgkJCQljMC0xLjQ2MywxLjE4NS0yLjY0NywyLjY0Ni0yLjY0N2g3NS43NjJDMjkxLjI4OSwxNDcuMzIxLDI5Mi40NzMsMTQ4LjUwNSwyOTIuNDczLDE0OS45NjhMMjkyLjQ3MywxNDkuOTY4eiIvPg0KCQkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTI5Mi40NzMsMTYzLjQzNWMwLDEuNDYyLTEuMTg0LDIuNjQ2LTIuNjQ2LDIuNjQ2aC03NS43NjJjLTEuNDYyLDAtMi42NDYtMS4xODQtMi42NDYtMi42NDZsMCwwDQoJCQkJYzAtMS40NjMsMS4xODUtMi42NDcsMi42NDYtMi42NDdoNzUuNzYyQzI5MS4yODksMTYwLjc4NywyOTIuNDczLDE2MS45NzIsMjkyLjQ3MywxNjMuNDM1TDI5Mi40NzMsMTYzLjQzNXoiLz4NCgkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yOTIuNDczLDE3Ni45MDFjMCwxLjQ2Mi0xLjE4NCwyLjY0Ni0yLjY0NiwyLjY0NmgtNzUuNzYyYy0xLjQ2MiwwLTIuNjQ2LTEuMTg0LTIuNjQ2LTIuNjQ2bDAsMA0KCQkJCWMwLTEuNDYzLDEuMTg1LTIuNjQ3LDIuNjQ2LTIuNjQ3aDc1Ljc2MkMyOTEuMjg5LDE3NC4yNTQsMjkyLjQ3MywxNzUuNDM4LDI5Mi40NzMsMTc2LjkwMUwyOTIuNDczLDE3Ni45MDF6Ii8+DQoJCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMjkyLjQ3MywxOTAuMzY5YzAsMS40NjEtMS4xODQsMi42NDUtMi42NDYsMi42NDVoLTc1Ljc2MmMtMS40NjIsMC0yLjY0Ni0xLjE4NC0yLjY0Ni0yLjY0NWwwLDANCgkJCQljMC0xLjQ2MywxLjE4NS0yLjY0OCwyLjY0Ni0yLjY0OGg3NS43NjJDMjkxLjI4OSwxODcuNzIxLDI5Mi40NzMsMTg4LjkwNiwyOTIuNDczLDE5MC4zNjlMMjkyLjQ3MywxOTAuMzY5eiIvPg0KCQkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTI5Mi40NzMsMjAzLjgzNGMwLDEuNDYzLTEuMTg0LDIuNjQ2LTIuNjQ2LDIuNjQ2aC03NS43NjJjLTEuNDYyLDAtMi42NDYtMS4xODQtMi42NDYtMi42NDZsMCwwDQoJCQkJYzAtMS40NjMsMS4xODUtMi42NDYsMi42NDYtMi42NDZoNzUuNzYyQzI5MS4yODksMjAxLjE4OCwyOTIuNDczLDIwMi4zNzEsMjkyLjQ3MywyMDMuODM0TDI5Mi40NzMsMjAzLjgzNHoiLz4NCgkJPC9nPg0KCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMjg5LjczMywyMzEuNDgyYzAsNC4wNzYtMy4zMDUsNy4zNzktNy4zOCw3LjM3OWgtNjMuNTU1Yy00LjA3NiwwLTcuMzgxLTMuMzAzLTcuMzgxLTcuMzc5bDAsMA0KCQkJYzAtNC4wNzYsMy4zMDUtNy4zODEsNy4zODEtNy4zODFoNjMuNTU1QzI4Ni40MjksMjI0LjEwMiwyODkuNzMzLDIyNy40MDYsMjg5LjczMywyMzEuNDgyTDI4OS43MzMsMjMxLjQ4MnoiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==';
	return (
		isPreview ? <img width='100%' src={previewImageData}/> :
		<div
			className={ classnames(
				className,
				'uagb-post-grid',
				'uagb-post__arrow-outside',
				`uagb-post__image-position-${ imgPosition }`,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ block_id }`
			) }
			data-blog-id={ block_id }
		>
			<Suspense fallback={ lazyLoader() }>
				<Masonry
					className={ classnames(
						'is-masonry',
						`uagb-post__columns-${ columns }`,
						`uagb-post__columns-tablet-${ tcolumns }`,
						`uagb-post__columns-mobile-${ mcolumns }`,
						'uagb-post__items',
						className,
						'uagb-post-grid',
						'uagb-post__arrow-outside',
						`uagb-post__image-position-${ imgPosition }`,
						`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
						`uagb-block-${ block_id }`
					) }
					data-blog-id={ block_id }
				>
					<InnerBlockLayoutContextProvider
						parentName="uagb/post-masonry"
						parentClassName="uagb-block-grid"
					>
						{ displayPosts.map( ( post, i ) => (
							<article ref={article} key={ i } className="uagb-post__inner-wrap">
								{ renderPostLayout(
									'uagb/post-masonry',
									post,
									layoutConfig,
									props.attributes,
									props.categoriesList
								) }
							</article>
						) ) }
					</InnerBlockLayoutContextProvider>
				</Masonry>
			</Suspense>
			{ paginationRender() }
		</div>
	);
}

export default Blog;
