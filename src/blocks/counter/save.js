import React from 'react';
import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';

export default function Save( props ) {
	const {block_id} = props.attributes;

	return (
		<>
			Saved Counter
		</>
	);
}
