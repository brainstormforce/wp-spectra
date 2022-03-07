import React from 'react';
import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';

export default function Save( props ) {
	const {attributes} = props;

	const {
		block_id,
		layout,
		heading,
		numberPrefix,
		numberSuffix,
		startNumber,
		endNumber,
		animationDuration,
		thousandSeparator,
	} = attributes

	const percentLayout = ['bars', 'circle'];

	const title = (
		<RichText.Content
			tagName="div"
			className="wp-block-uagb-counter__title"
			value={ heading }
		/>
	)

	const number = (
		<div className="wp-block-uagb-counter__number">
			{
				numberPrefix && (<span className="uagb-counter-block-prefix">{numberPrefix}</span>)
			}
			<span className="uagb-counter-block-number" data-duration={animationDuration} data-to-value={endNumber} data-from-value={startNumber} data-delimiter={thousandSeparator}></span>
			{
				percentLayout.includes(layout) && (<span className='uagb-counter-block-number-type'>%</span>)
			}
			{
				numberSuffix && (<span className="uagb-counter-block-suffix">{numberSuffix}</span>)
			}
		</div>
	);

	const bars = (
		<div className='wp-block-uagb-counter-bars-container'>
			{number}
		</div>
	)

	const circle = (
		<div className="wp-block-uagb-counter-circle-container">
			<div className='wp-block-uagb-counter-circle-container__content'>
				{number}
				{title}
			</div>
			<svg width="200" height="200" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
				<circle r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
				<circle id="bar" r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
			</svg>
		</div>
	)

	return (
		<>
			<div className={ classnames(
				props.className,
				`uagb-block-${ block_id }`,
				'wp-block-uagb-counter',
				`wp-block-uagb-counter--${ layout }`,
			) }>
				{
					layout === 'number' && number
				}
				{
					layout === 'bars' && bars
				}
				{
					layout === 'circle' && circle
				}
				{
					layout !== 'circle' && title
				}
			</div>
		</>
	);
}
