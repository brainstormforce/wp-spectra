import classnames from 'classnames';

import { useDeviceType } from '@Controls/getPreviewType';
import { useEffect, useRef } from '@wordpress/element';
import { getFallbackNumber } from '@Controls/getAttributeFallback';
import Masonry from 'react-masonry-component';

import {
	InnerBlockLayoutContextProvider,
	renderPostLayout,
} from '.././function';

function Blog( props ) {
	const blockName = props.name.replace( 'uagb/', '' );
	const article = useRef();
	const { attributes, className, latestPosts, block_id, setAttributes } = props;
	const deviceType = useDeviceType();
	const {
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

	const postsToShowFallback = getFallbackNumber( postsToShow, 'postsToShow', blockName );
	const columnsFallback = getFallbackNumber( columns, 'columns', blockName );
	const tcolumnsFallback = getFallbackNumber( tcolumns, 'tcolumns', blockName );
	const mcolumnsFallback = getFallbackNumber( mcolumns, 'mcolumns', blockName );
	const rowGapFallback = getFallbackNumber( rowGap, 'rowGap', blockName );
	const isImageEnabled = ( attributes.displayPostImage === true ) ? 'uagb-post__image-enabled' : 'uagb-post__image-disabled';

	const updateImageBgWidth = () => {

		setTimeout( () => {

			if( article?.current ){

				const articleWidth  = article?.current?.offsetWidth;
				const imageWidth = 100 - ( rowGapFallback / articleWidth ) * 100;
				const parent = article?.current?.parentNode;

				if ( parent && parent.classList.contains( 'uagb-post__image-position-background' ) ) {
					const images = parent?.getElementsByClassName( 'uagb-post__image' );
					for( const image of images ) {
						if ( image ) {
							image.style.width = imageWidth + '%';
							image.style.marginLeft = rowGapFallback / 2 + 'px';

						}
					}
				}
			}

		}, 100 )
	};

	useEffect( () => {
		updateImageBgWidth();
    }, [ ] );

	useEffect( () => {
		updateImageBgWidth();
    }, [ props ] );

	useEffect( () => {
		updateImageBgWidth();
    }, [article] );

	useEffect( () => {
		updateImageBgWidth();
    }, [imgPosition] );

	// Removing posts from display should be instant.
	const displayPosts =
		latestPosts.length > postsToShowFallback
			? latestPosts.slice( 0, postsToShowFallback )
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

	return (
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

				<Masonry
					className={ classnames(
						'is-masonry',
						`uagb-post__columns-${ columnsFallback }`,
						`uagb-post__columns-tablet-${ tcolumnsFallback }`,
						`uagb-post__columns-mobile-${ mcolumnsFallback }`,
						'uagb-post__items',
						className,
						isImageEnabled,
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
									props.categoriesList,
									setAttributes
								) }
							</article>
						) ) }
					</InnerBlockLayoutContextProvider>
				</Masonry>

			{ paginationRender() }
		</div>
	);
}

export default Blog;
