
import './ConfirmPopup.scss';
import React, { useEffect } from 'react';

function ConfirmPopup( props ) {
	const show = props.showPopup ? 'show' : '';

	useEffect( () => {
		document.addEventListener( 'keydown', escKeyPressed, false );
	}, [] );

	const escKeyPressed = ( event ) => {
		if ( 27 === event.keyCode ) {
			props.cancelPopup();
		}
	};

	const closePopup = () => {
		props.cancelPopup();
	};

	const confirmPopup = () => {
		props.confirmPopup();
	};

	return (
		<div className={ `uagb-confirm-rollback-popup ${ show }` }>
			<div className="uagb-confirm-rollback-popup__content">
				<div className="uagb-confirm-rollback-popup__header">
					Rollback to Previous Version
				</div>
				<div className="uagb-confirm-rollback-popup__message">
					Are you sure you want to reinstall previous version?
				</div>
				<div className="uagb-confirm-rollback-popup__buttons-wrapper">
					<button
						onClick={ closePopup }
						className="uagb-confirm-rollback-popup__button confirm-cancel"
					>
						Cancel
					</button>
					<button
						onClick={ confirmPopup }
						className="uagb-confirm-rollback-popup__button confirm-ok"
					>
						Continue
					</button>
				</div>
			</div>
		</div>
	);
}

export default ConfirmPopup;
