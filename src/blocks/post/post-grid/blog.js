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

			if(article?.current){
				let articleWidth  = article?.current?.offsetWidth;
				let imageWidth = 100 - ( rowGap / articleWidth ) * 100;
				let parent = article?.current?.parentNode;

				if ( parent && parent.classList.contains('uagb-post__image-position-background')) {
					let images = parent?.getElementsByClassName('uagb-post__image');

					for( let image of images ) {
						if ( image ) {
							image.style.width = imageWidth + '%';
							image.style.marginLeft = rowGap / 2 + 'px';

						}
					}
				}
			}

		}, 100)
	};

    useEffect( () => {
		updateImageBgWidth();
    }, [article]);

	useEffect( () => {
		updateImageBgWidth();
    }, [imgPosition]);

	const equalHeightClass = equalHeight ? 'uagb-post__equal-height' : '';
	// Removing posts from display should be instant.
	const displayPosts =
		latestPosts.length > postsToShow
			? latestPosts.slice( 0, postsToShow )
			: latestPosts;

	return (
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
