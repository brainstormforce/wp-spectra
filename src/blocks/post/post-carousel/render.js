import {
	DEFAULT_POST_LIST_LAYOUT,
	getBlockMap,
	getPostLayoutConfig,
	InnerBlockLayoutContextProvider,
} from '../function';

import React, { lazy, Suspense } from 'react';

import { __ } from '@wordpress/i18n';
import lazyLoader from '@Controls/lazy-loader';

const Blog = lazy( () =>
	import( /* webpackChunkName: "chunks/post-carousel/blog" */ './blog' )
);

const { InnerBlocks } = wp.blockEditor;

const { createBlock } = wp.blocks;

const { Placeholder, Button, Tip, Disabled } = wp.components;

const Render = ( props ) => {
	const { state, setState, togglePreview } = props;

	props = props.parentProps;

	const { attributes, categoriesList, latestPosts, deviceType } = props;

	const renderEditMode = () => {
		const onDone = () => {
			const { block, setAttributes } = props;
			setAttributes( {
				layoutConfig: getPostLayoutConfig( block ),
			} );
			setState( { innerBlocks: block } );
			togglePreview();
		};

		const onCancel = () => {
			const { replaceInnerBlocks } = props;
			const { innerBlocks } = state;
			replaceInnerBlocks( props.clientId, innerBlocks );
			togglePreview();
		};

		const onReset = () => {
			const { block, replaceInnerBlocks } = props;
			const newBlocks = [];
			DEFAULT_POST_LIST_LAYOUT.map( ( [ name, attributes ] ) => {
				newBlocks.push( createBlock( name, attributes ) );
				return true;
			} );
			replaceInnerBlocks( props.clientId, newBlocks );
			setState( { innerBlocks: block } );
		};

		const InnerBlockProps = {
			template: props.attributes.layoutConfig,
			templateLock: false,
			allowedBlocks: Object.keys( getBlockMap( 'uagb/post-grid' ) ),
		};
		if ( props.attributes.layoutConfig.length !== 0 ) {
			InnerBlockProps.renderAppender = false;
		}
		return (
			<Placeholder label="Post Carousel Layout">
				<div className="uagb-block-all-post-grid-item-template">
					<Tip>
						{ __(
							'Edit the blocks inside the preview below to change the content displayed for each post within the post carousel.'
						) }
					</Tip>
					<InnerBlockLayoutContextProvider
						parentName="uagb/post-grid"
						parentClassName="uagb-block-grid"
					>
						<article>
							<div className="uagb-post__inner-wrap uagb-post__edit-mode">
								<div className="uagb-post__text">
									<InnerBlocks { ...InnerBlockProps } />
								</div>
							</div>
						</article>
					</InnerBlockLayoutContextProvider>
					<div className="uagb-block-all-post__actions">
						<Button
							className="uagb-block-all-post__done-button"
							isPrimary
							onClick={ onDone }
						>
							{ __( 'Done' ) }
						</Button>
						<Button
							className="uagb-block-all-post__cancel-button"
							isTertiary
							onClick={ onCancel }
						>
							{ __( 'Cancel' ) }
						</Button>
						<Button
							className="uagb-block-all-post__reset-button"
							onClick={ onReset }
						>
							{ __( 'Reset Layout' ) }
						</Button>
					</div>
				</div>
			</Placeholder>
		);
	};

	const renderViewMode = (
		<Disabled>
			<Suspense fallback={ lazyLoader() }>
				<Blog
					attributes={ attributes }
					className={ props.className }
					latestPosts={ latestPosts }
					block_id={ props.clientId.substr( 0, 8 ) }
					categoriesList={ categoriesList }
					deviceType={ deviceType }
				/>
			</Suspense>
		</Disabled>
	);

	return <>{ state.isEditing ? renderEditMode() : renderViewMode }</>;
};

export default React.memo( Render );
