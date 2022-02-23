/**
 * BLOCK: Tabs - Deprecated Block
 */

import classnames from 'classnames';
import attributes from './attributes';

import { InnerBlocks } from '@wordpress/block-editor';

const deprecated = [
	{
		attributes,
		save( props ) {
			const { attributes, className } = props;

			const { id, block_id } = attributes;

			return (
				<div className="uagb-tabs__body-container">
					<div
						className={ classnames(
							className,
							`uagb-blocks__${ block_id }`,
							'uagb-tabs__body'
						) }
						aria-labelledby={ `uagb-tabs__tab${ id }` }
					>
						<InnerBlocks.Content />
					</div>
				</div>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const { attributes, className } = props;
			const { id, block_id } = attributes;

			return (
				<div
					className={ `uagb-tabs__body-container uagb-tabs__inner-tab uagb-inner-tab-${ id }` }
				>
					<div
						className={ classnames(
							className,
							`uagb-blocks__${ block_id }`,
							'uagb-tabs__body'
						) }
						aria-labelledby={ `uagb-tabs__tab${ id }` }
					>
						<InnerBlocks.Content />
					</div>
				</div>
			);
		}
	}
];

export default deprecated;
