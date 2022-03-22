import classnames from 'classnames';
import {
	InnerBlockLayoutContextProvider,
	renderPostLayout,
} from '.././function';
import { useDeviceType } from '@Controls/getPreviewType';
import React, { useRef, useEffect } from 'react';

const Blog = ( props ) => {
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
		equalHeight,
		paginationMarkup,
		postPagination,
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

	const equalHeightClass = equalHeight ? 'uagb-post__equal-height' : '';
	// Removing posts from display should be instant.
	const displayPosts =
		latestPosts.length > postsToShow
			? latestPosts.slice( 0, postsToShow )
			: latestPosts;
	const previewImageData = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMzUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjRjFGMUYyIiBkPSJNMTY4LjQxNiwyOTYuMzQ2YzAsNS41MjEtNC40NzgsMTAtMTAsMTBIMzEuMDgyYy01LjUyMiwwLTEwLTQuNDc5LTEwLTEwVjUzLjY1NGMwLTUuNTIyLDQuNDc4LTEwLDEwLTEwDQoJCQloMTI3LjMzNGM1LjUyMiwwLDEwLDQuNDc4LDEwLDEwVjI5Ni4zNDZ6Ii8+DQoJCTxnPg0KCQkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTEzOC41ODMsMTA1Ljg2M2MwLDIuODA3LTIuMjc1LDUuMDgyLTUuMDgyLDUuMDgySDU1Ljk5OGMtMi44MDcsMC01LjA4Mi0yLjI3NS01LjA4Mi01LjA4MnYwLjMwOA0KCQkJCWMwLTIuODA2LDIuMjc1LTUuMDgyLDUuMDgyLTUuMDgySDEzMy41YzIuODA3LDAsNS4wODIsMi4yNzYsNS4wODIsNS4wODJWMTA1Ljg2M3oiLz4NCgkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0xMDEuOTQ3LDExOS45NjRjMCwxLjQ2Mi0xLjE4NCwyLjY0Ni0yLjY0NiwyLjY0Nkg1My41NjJjLTEuNDYyLDAtMi42NDYtMS4xODQtMi42NDYtMi42NDZsMCwwDQoJCQkJYzAtMS40NjMsMS4xODUtMi42NDcsMi42NDYtMi42NDdIOTkuM0MxMDAuNzYzLDExNy4zMTYsMTAxLjk0NywxMTguNTAxLDEwMS45NDcsMTE5Ljk2NEwxMDEuOTQ3LDExOS45NjR6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMTMxLjk3LDEzNi41MDFjMCwxLjQ2Mi0xLjE4NCwyLjY0Ni0yLjY0NiwyLjY0Nkg1My41NjJjLTEuNDYyLDAtMi42NDYtMS4xODQtMi42NDYtMi42NDZsMCwwDQoJCQkJYzAtMS40NjMsMS4xODUtMi42NDcsMi42NDYtMi42NDdoNzUuNzYyQzEzMC43ODcsMTMzLjg1NCwxMzEuOTcsMTM1LjAzOCwxMzEuOTcsMTM2LjUwMUwxMzEuOTcsMTM2LjUwMXoiLz4NCgkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0xMzEuOTcsMTQ2LjE2N2MwLDEuNDYyLTEuMTg0LDIuNjQ2LTIuNjQ2LDIuNjQ2SDUzLjU2MmMtMS40NjIsMC0yLjY0Ni0xLjE4NC0yLjY0Ni0yLjY0NmwwLDANCgkJCQljMC0xLjQ2MywxLjE4NS0yLjY0NywyLjY0Ni0yLjY0N2g3NS43NjJDMTMwLjc4NywxNDMuNTIsMTMxLjk3LDE0NC43MDQsMTMxLjk3LDE0Ni4xNjdMMTMxLjk3LDE0Ni4xNjd6Ii8+DQoJCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMTMxLjk3LDE1Ni44MzRjMCwxLjQ2Mi0xLjE4NCwyLjY0Ni0yLjY0NiwyLjY0Nkg1My41NjJjLTEuNDYyLDAtMi42NDYtMS4xODQtMi42NDYtMi42NDZsMCwwDQoJCQkJYzAtMS40NjMsMS4xODUtMi42NDcsMi42NDYtMi42NDdoNzUuNzYyQzEzMC43ODcsMTU0LjE4NywxMzEuOTcsMTU1LjM3MSwxMzEuOTcsMTU2LjgzNEwxMzEuOTcsMTU2LjgzNHoiLz4NCgkJPC9nPg0KCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMTI5LjIzMSwxODEuNDg0YzAsNC4wNzYtMy4zMDUsNy4zNzktNy4zODEsNy4zNzlINTguMjk2Yy00LjA3NiwwLTcuMzgxLTMuMzAzLTcuMzgxLTcuMzc5bDAsMA0KCQkJYzAtNC4wNzcsMy4zMDUtNy4zODIsNy4zODEtNy4zODJoNjMuNTU0QzEyNS45MjYsMTc0LjEwMywxMjkuMjMxLDE3Ny40MDcsMTI5LjIzMSwxODEuNDg0TDEyOS4yMzEsMTgxLjQ4NHoiLz4NCgk8L2c+DQoJPGc+DQoJCTxwYXRoIGZpbGw9IiNGMUYxRjIiIGQ9Ik0zMjguOTE4LDI5Ni4zNDZjMCw1LjUyMS00LjQ3NywxMC0xMCwxMEgxOTEuNTg0Yy01LjUyMSwwLTEwLTQuNDc5LTEwLTEwVjUzLjY1NGMwLTUuNTIyLDQuNDc5LTEwLDEwLTEwDQoJCQloMTI3LjMzNGM1LjUyMywwLDEwLDQuNDc4LDEwLDEwVjI5Ni4zNDZ6Ii8+DQoJCTxnPg0KCQkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTI5OS4wODYsMTA1Ljg2M2MwLDIuODA3LTIuMjc1LDUuMDgyLTUuMDgyLDUuMDgySDIxNi41Yy0yLjgwNywwLTUuMDgyLTIuMjc1LTUuMDgyLTUuMDgydjAuMzA4DQoJCQkJYzAtMi44MDYsMi4yNzUtNS4wODIsNS4wODItNS4wODJoNzcuNTA0YzIuODA3LDAsNS4wODIsMi4yNzYsNS4wODIsNS4wODJWMTA1Ljg2M3oiLz4NCgkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yNjIuNDQ5LDExOS45NjRjMCwxLjQ2Mi0xLjE4NCwyLjY0Ni0yLjY0NiwyLjY0NmgtNDUuNzM4Yy0xLjQ2MSwwLTIuNjQ2LTEuMTg0LTIuNjQ2LTIuNjQ2bDAsMA0KCQkJCWMwLTEuNDYzLDEuMTg2LTIuNjQ3LDIuNjQ2LTIuNjQ3aDQ1LjczOEMyNjEuMjY2LDExNy4zMTYsMjYyLjQ0OSwxMTguNTAxLDI2Mi40NDksMTE5Ljk2NEwyNjIuNDQ5LDExOS45NjR6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMjkyLjQ3MywxMzYuNTAxYzAsMS40NjItMS4xODQsMi42NDYtMi42NDYsMi42NDZoLTc1Ljc2MmMtMS40NjEsMC0yLjY0Ni0xLjE4NC0yLjY0Ni0yLjY0NmwwLDANCgkJCQljMC0xLjQ2MywxLjE4Ni0yLjY0NywyLjY0Ni0yLjY0N2g3NS43NjJDMjkxLjI4OSwxMzMuODU0LDI5Mi40NzMsMTM1LjAzOCwyOTIuNDczLDEzNi41MDFMMjkyLjQ3MywxMzYuNTAxeiIvPg0KCQkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTI5Mi40NzMsMTQ5Ljk2OGMwLDEuNDYyLTEuMTg0LDIuNjQ2LTIuNjQ2LDIuNjQ2aC03NS43NjJjLTEuNDYxLDAtMi42NDYtMS4xODQtMi42NDYtMi42NDZsMCwwDQoJCQkJYzAtMS40NjMsMS4xODYtMi42NDcsMi42NDYtMi42NDdoNzUuNzYyQzI5MS4yODksMTQ3LjMyLDI5Mi40NzMsMTQ4LjUwNSwyOTIuNDczLDE0OS45NjhMMjkyLjQ3MywxNDkuOTY4eiIvPg0KCQkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTI5Mi40NzMsMTYzLjQzNWMwLDEuNDYyLTEuMTg0LDIuNjQ2LTIuNjQ2LDIuNjQ2aC03NS43NjJjLTEuNDYxLDAtMi42NDYtMS4xODQtMi42NDYtMi42NDZsMCwwDQoJCQkJYzAtMS40NjMsMS4xODYtMi42NDcsMi42NDYtMi42NDdoNzUuNzYyQzI5MS4yODksMTYwLjc4NywyOTIuNDczLDE2MS45NzIsMjkyLjQ3MywxNjMuNDM1TDI5Mi40NzMsMTYzLjQzNXoiLz4NCgkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yOTIuNDczLDE3Ni45MDFjMCwxLjQ2Mi0xLjE4NCwyLjY0Ni0yLjY0NiwyLjY0NmgtNzUuNzYyYy0xLjQ2MSwwLTIuNjQ2LTEuMTg0LTIuNjQ2LTIuNjQ2bDAsMA0KCQkJCWMwLTEuNDYzLDEuMTg2LTIuNjQ3LDIuNjQ2LTIuNjQ3aDc1Ljc2MkMyOTEuMjg5LDE3NC4yNTQsMjkyLjQ3MywxNzUuNDM4LDI5Mi40NzMsMTc2LjkwMUwyOTIuNDczLDE3Ni45MDF6Ii8+DQoJCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMjkyLjQ3MywxOTAuMzY5YzAsMS40NjEtMS4xODQsMi42NDUtMi42NDYsMi42NDVoLTc1Ljc2MmMtMS40NjEsMC0yLjY0Ni0xLjE4NC0yLjY0Ni0yLjY0NWwwLDANCgkJCQljMC0xLjQ2MywxLjE4Ni0yLjY0OCwyLjY0Ni0yLjY0OGg3NS43NjJDMjkxLjI4OSwxODcuNzIxLDI5Mi40NzMsMTg4LjkwNiwyOTIuNDczLDE5MC4zNjlMMjkyLjQ3MywxOTAuMzY5eiIvPg0KCQkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTI5Mi40NzMsMjAzLjgzNGMwLDEuNDYzLTEuMTg0LDIuNjQ2LTIuNjQ2LDIuNjQ2aC03NS43NjJjLTEuNDYxLDAtMi42NDYtMS4xODQtMi42NDYtMi42NDZsMCwwDQoJCQkJYzAtMS40NjMsMS4xODYtMi42NDYsMi42NDYtMi42NDZoNzUuNzYyQzI5MS4yODksMjAxLjE4OCwyOTIuNDczLDIwMi4zNzEsMjkyLjQ3MywyMDMuODM0TDI5Mi40NzMsMjAzLjgzNHoiLz4NCgkJPC9nPg0KCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMjg5LjczNCwyMzEuNDgyYzAsNC4wNzYtMy4zMDUsNy4zNzktNy4zODEsNy4zNzloLTYzLjU1NWMtNC4wNzYsMC03LjM4MS0zLjMwMy03LjM4MS03LjM3OWwwLDANCgkJCWMwLTQuMDc2LDMuMzA1LTcuMzgxLDcuMzgxLTcuMzgxaDYzLjU1NUMyODYuNDMsMjI0LjEwMiwyODkuNzM0LDIyNy40MDYsMjg5LjczNCwyMzEuNDgyTDI4OS43MzQsMjMxLjQ4MnoiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==';
	return (
		isPreview ? <img width='100%' src={previewImageData}/> :
		<div
			className={ classnames(
				'is-grid',
				`uagb-post__columns-${ columns }`,
				`uagb-post__columns-tablet-${ tcolumns }`,
				`uagb-post__columns-mobile-${ mcolumns }`,
				'uagb-post__items',
				`${ equalHeightClass }`,
				className,
				'uagb-post-grid',
				`uagb-post__image-position-${ imgPosition }`,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ block_id }`
			) }
		>
			<InnerBlockLayoutContextProvider
				parentName="uagb/post-grid"
				parentClassName="uagb-block-grid"
			>
				{ displayPosts.map( ( post = {}, i ) => (
					<article ref={article} key={ i } className="uagb-post__inner-wrap">
						{ renderPostLayout(
							'uagb/post-grid',
							post,
							layoutConfig,
							props.attributes,
							props.categoriesList,
							article
						) }
					</article>
				) ) }
			</InnerBlockLayoutContextProvider>
			{ postPagination === true && 'empty' !== paginationMarkup && (
				<div
					dangerouslySetInnerHTML={ { __html: paginationMarkup } }
					className="uagb-post-pagination-wrap"
				></div>
			) }
		</div>
	);
};
export default React.memo( Blog );
