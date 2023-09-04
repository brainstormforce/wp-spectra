import {
	DEFAULT_POST_LIST_LAYOUT,
	getBlockMap,
	getPostLayoutConfig,
	InnerBlockLayoutContextProvider,
} from '../function';
import { useLayoutEffect, memo } from '@wordpress/element';
import Blog from './blog';
import { __ } from '@wordpress/i18n';

import { createBlock } from '@wordpress/blocks';

import { Placeholder, Button, Tip } from '@wordpress/components';

import { InnerBlocks } from '@wordpress/block-editor';
import styles from '.././editor.lazy.scss';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { state, setState, togglePreview, categoriesList, latestPosts, replaceInnerBlocks, block, clientId,  attributes, deviceType, name, setAttributes, className } = props;

	const renderEditMode = () => {
		const onDone = () => {
			setAttributes( {
				layoutConfig: getPostLayoutConfig( block ),
			} );
			setState( { innerBlocks: block } );
			togglePreview();
		};

		const onCancel = () => {
			const { innerBlocks } = state;
			replaceInnerBlocks( clientId, innerBlocks );
			togglePreview();
		};

		const onReset = () => {
			const newBlocks = [];
			// eslint-disable-next-line no-shadow
			DEFAULT_POST_LIST_LAYOUT.map( ( [ name, attribute ] ) => {
				newBlocks.push( createBlock( name, attribute ) );
				return true;
			} );
			replaceInnerBlocks( clientId, newBlocks );
			setState( { innerBlocks: block } );
		};

		const InnerBlockProps = {
			template: attributes.layoutConfig,
			templateLock: false,
			allowedBlocks: Object.keys( getBlockMap( 'uagb/post-grid' ) ),
		};
		if ( attributes.layoutConfig.length !== 0 ) {
			InnerBlockProps.renderAppender = false;
		}
		return (
			<Placeholder label="Post Carousel Layout">
				<div className="uagb-post-grid uagb-block-all-post-grid-item-template">
					<Tip>
						{ __(
							'Edit the blocks inside the preview below to change the content displayed for each post within the post carousel.', 'ultimate-addons-for-gutenberg'
						) }
					</Tip>
					<InnerBlockLayoutContextProvider parentName="uagb/post-grid" parentClassName="uagb-block-grid">
						<article className="uagb-post__inner-wrap uagb-post__edit-mode">
							<div className="uagb-post__text">
								<InnerBlocks { ...InnerBlockProps } />
							</div>
						</article>
					</InnerBlockLayoutContextProvider>
					<div className="uagb-block-all-post__actions">
						<Button className="uagb-block-all-post__done-button" isPrimary onClick={ onDone }>
							{ __( 'Done', 'ultimate-addons-for-gutenberg' ) }
						</Button>
						<Button className="uagb-block-all-post__cancel-button" isTertiary onClick={ onCancel }>
							{ __( 'Cancel', 'ultimate-addons-for-gutenberg' ) }
						</Button>
						<Button className="uagb-block-all-post__reset-button" onClick={ onReset }>
							{ __( 'Reset Layout', 'ultimate-addons-for-gutenberg' ) }
						</Button>
					</div>
				</div>
			</Placeholder>
		);
	};

	const renderViewMode = (
		<Blog
			attributes={ attributes }
			className={ className }
			latestPosts={ latestPosts }
			block_id={ attributes.block_id }
			categoriesList={ categoriesList }
			deviceType={ deviceType }
			name={ name }
			setAttributes={ setAttributes }
		/>
	);

	return <>{ state.isEditing ? renderEditMode() : renderViewMode }</>;
};

export default memo( Render );
