import React, { Component } from 'react';
import './CommonMetaBox.scss';

function CommonMetaBox( props ) {
	return (
		<div class="wcf-metabox {props.wrap-class}">
			<div class="wcf-metabox__header">
				<h2>{ props.heading }</h2>
			</div>
			<div class="wcf-metabox__body">
				<p>{ props.desc }</p>
			</div>
			<div class="wcf-metabox__footer">
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
