import React, { useEffect } from 'react';

import './ToastElement.scss';

function ToastElement( props ) {
	const appearances = {
		success: {
			title: 'Success!',
			text: '#',
			fg: '#',
			bg: '#',
		},
		error: {
			title: 'Error!',
			text: '#',
			fg: '#',
			bg: '#',
		},
		warning: {
			title: 'Warning!',
			text: '#',
			fg: '#',
			bg: '#',
		},
		alert: {
			title: 'Alert!',
			text: '#',
			fg: '#',
			bg: '#',
		},
		info: {
			title: 'Info!',
			text: '#',
			fg: '#',
			bg: '#',
		},
	};

	const {
		id,
		autoDismiss,
		autoDismissTimeout,
		appearance,
		content,
		dismiss_toast,
	} = props;

	const notice_data = appearances[ appearance ];

	useEffect( () => {
		let dismissInterval = false;

		if ( ! dismissInterval ) {
			dismissInterval = setInterval( () => {
				if ( autoDismiss ) {
					dismiss_toast();
				}
			}, autoDismissTimeout );
		}

		return () => {
			clearInterval( dismissInterval );
		};
	} );

	return (
		<div class={ `uag-toast uag-${ appearance }` }>
			<div class="uag-toast__content">
				<div class="uag-toast__icon">
					<i class="fas fa-check-circle" aria-hidden="true"></i>
				</div>
				<div class="uag-toast__text">
					<div class="uag-toast__title">{ notice_data?.title }</div>
					<div class="uag-toast__desc">{ content }</div>
				</div>
				<div class="uag-toast__dismiss" onClick={ dismiss_toast }>
					<span class="uag-toast__dismiss-text"><span className="dashicons dashicons-no"></span></span>
				</div>
			</div>
		</div>
	);
}

export default ToastElement;
