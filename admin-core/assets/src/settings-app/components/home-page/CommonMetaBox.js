import React, { Component } from 'react';
import './CommonMetaBox.scss';

function CommonMetaBox( props ) {
	return (
		<div class="uag-metabox {props.wrap-class}">
			<div class="uag-metabox__header">
				<h2>{ props.heading }</h2>
			</div>
			<div class="uag-metabox__body">
				<p>{ props.desc }</p>
			</div>
			<div class="uag-metabox__footer">
				<p>
					<a href={ props.footerLink } target="_blank" rel="noopener">
						{ props.footerText }
					</a>
				</p>
			</div>
		</div>
	);
}

export default CommonMetaBox;
