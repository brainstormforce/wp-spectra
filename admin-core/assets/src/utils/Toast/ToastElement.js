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
		<div className={ `uag-toast uag-${ appearance }` }>
			<div className="uag-toast__content">
				<div className="uag-toast__icon">
					<i className="fas fa-check-circle" aria-hidden="true"></i>
				</div>
				<div className="uag-toast__text">
					<div className="uag-toast__title">{ notice_data?.title }</div>
					<div className="uag-toast__desc">{ content }</div>
				</div>
				<div className="uag-toast__dismiss" onClick={ dismiss_toast }>
					<span className="uag-toast__dismiss-text"><span className="dashicons dashicons-no"></span></span>
				</div>
			</div>
		</div>
	);
}

export default ToastElement;
