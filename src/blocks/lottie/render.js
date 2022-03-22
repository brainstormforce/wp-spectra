import React, { Suspense, useLayoutEffect } from 'react';
import classnames from 'classnames';
import lazyLoader from '@Controls/lazy-loader';
import { Player } from '@lottiefiles/react-lottie-player';
import styles from './editor.lazy.scss';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { lottieplayer } = props;

	props = props.parentProps;

	const { className, attributes } = props;

	const { isPreview, loop, speed, reverse, lottieURl, playOn, align } = attributes;

	const reversedir = reverse && loop ? -1 : 1;

	const handleLottieMouseEnter = () => {
		lottieplayer.current.setPlayerDirection( reversedir );
		lottieplayer.current.play();
	};

	const handleLottieMouseLeave = () => {
		lottieplayer.current.setPlayerDirection( reversedir );
		lottieplayer.current.stop();
	};

	const toStopPlayAnimation = () => {
		lottieplayer.current.stop();
	}
	const previewImageData = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMzUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjREJEQ0RFIiBkPSJNMjM5LjQ3MiwxOTEuNzM4Yy00LjIyOCwwLjQyLTcuNzcyLDIuMTIyLTEwLjkzLDQuNjc2DQoJCWMtNS45ODQsNC44NDEtOS40MzQsMTEuMzgxLTExLjgwOCwxOC40ODRjLTEuNDE1LDQuMjM2LTIuMTk1LDguNjgzLTMuMzY3LDEzLjAwNmMtMC4yODIsMS4wMzktMC43NjQsMi4yMzgtMS41NDgsMi44ODkNCgkJYy0yLjM2NiwxLjk2LTUuMTg0LDAuMTU3LTUuODgyLTMuMTc2Yy0xLjIzNi01LjkwMy0yLjUzMS0xMS44MjQtNC4zNDUtMTcuNTY1Yy0xLjYwMS01LjA2My00LjUwNy05LjUzOC04LjU0Mi0xMy4xMjENCgkJYy05LjY0NS04LjU2Ni0yMy43NzEtNy4wODUtMzEuODg4LDMuMzU2Yy01LjE2Niw2LjY0Ny03LjU1OSwxNC40NDctOS4xMDksMjIuNTY2Yy0wLjMyMSwxLjY3OS0wLjUsMy4zODMtMC43NjEsNS4wNzINCgkJYy0wLjM1OCwyLjMxMy0xLjc3NSwzLjcwNy0zLjcwOCwzLjY2OWMtMS45NDctMC4wMzgtMy4xOC0xLjU0OC0zLjY3OS0zLjc3M2MtMS4zMTctNS44ODgtMi41MjMtMTEuODI0LTQuMzEzLTE3LjU3Mg0KCQljLTEuNjAyLTUuMTQ2LTQuNTMtOS42ODUtOC42Mi0xMy4zMTdjLTkuNjQ2LTguNTY4LTIzLjc1My03LjA5My0zMS44ODgsMy4zNTVjLTUuMTI1LDYuNTgxLTcuNTEzLDE0LjMxMy05LjA3MSwyMi4zNTQNCgkJYy0wLjM2NSwxLjg4Ni0wLjU0MSwzLjgxLTAuODUzLDUuNzA3Yy0wLjMzMywyLjAyMi0yLjAwMSwzLjM5Mi0zLjg2NCwzLjIzN2MtMS44OTYtMC4xNTYtMy41NTItMS43NjctMy4zNTEtMy43NjUNCgkJYzEuMzk2LTEzLjg1Niw1LjA4OS0yNi44NTMsMTUuNzkzLTM2LjYwMmMxMi42NS0xMS41MjEsMzIuMzAxLTguOTY0LDQyLjcyNSw1LjUwOWMyLjg4Niw0LjAwNiw0Ljk5Miw4LjU3NSw3LjQxOCwxMi44MTkNCgkJYzAuMjk1LTAuNjk2LDAuNzQ1LTEuNzc5LDEuMjEzLTIuODU1YzMuMDk4LTcuMTA2LDcuMi0xMy40NjcsMTMuNzg0LTE3Ljg1NWMxMi40MTgtOC4yNzgsMjguNjMzLTUuNjMsMzguNDI4LDYuMTg5DQoJCWMzLjkxNyw0LjcyOSw2LjU1MiwxMC4xNDcsOC43MzgsMTYuMjI5YzAuNTg3LTEuMzU4LDEuMDM3LTIuNDM0LDEuNTEtMy40OThjMy41NjMtOC4wMzMsOC4yMDYtMTUuMjcxLDE2LjExMS0xOS42MzgNCgkJYzIuOTk1LTEuNjUyLDYuNDU4LTIuNTA4LDkuNzcyLTMuNTFjMS4yNDMtMC4zNzYsMi4wNDEtMC42NzIsMi41NTgtMi4wNDRjMi41MjQtNi43MTYsOS4xNjQtMTAuMzY5LDE2LjI2Ny05LjEyNg0KCQljNi41NTUsMS4xNDgsMTEuNTg3LDYuOTQ3LDExLjc5OCwxMy41OTdjMC4yMzEsNy4yNDEtNC4zMSwxMy4yMTctMTEuMzAxLDE0Ljg3MWMtNi41NTQsMS41NTItMTMuNDUyLTEuODA5LTE2LjM2Mi03Ljk3OA0KCQlDMjQwLjA5NywxOTMuMjkxLDIzOS44NDYsMTkyLjYyOCwyMzkuNDcyLDE5MS43Mzh6IE0yNjAuNzk5LDE4Ny42OTNjLTAuMDI1LTQuMDM5LTMuMzc5LTcuMzM0LTcuMzc5LTcuMjQ3DQoJCWMtMy45MzYsMC4wODYtNy4xNjMsMy4zNTItNy4xODksNy4yNzNjLTAuMDI3LDQuMDI5LDMuMjY1LDcuMzE3LDcuMzIyLDcuMzEyQzI1Ny42NDYsMTk1LjAyNCwyNjAuODI0LDE5MS44MDYsMjYwLjc5OSwxODcuNjkzeiIvPg0KCTxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjREJEQ0RFIiBkPSJNMTU4LjU3MSwxNDMuODQ3Yy0wLjAwMS00Ljk4NiwwLjAwNy05Ljk3My0wLjAwNC0xNC45NTkNCgkJYy0wLjAwOC00LjE3OCwxLjUwNi03LjU0LDUuMzUyLTkuNDc5YzMuODE1LTEuOTI0LDcuMjU0LTAuOTM4LDEwLjUzMywxLjUzNmM2LjQ4Miw0Ljg4NiwxMy4wNDUsOS42NjIsMTkuNTYxLDE0LjUNCgkJYzYuMzg1LDQuNzQxLDYuMzk0LDEyLjI0NCwwLjAwNywxNi45OTljLTYuNjI2LDQuOTMtMTMuMjk3LDkuNzk4LTE5LjkxMSwxNC43NDZjLTMuMTgsMi4zNzgtNi41NTIsMy4xMjctMTAuMTgxLDEuMzA3DQoJCWMtMy42Ny0xLjg0LTUuMzEtNS4wMjgtNS4zNDUtOS4wNDlDMTU4LjUzOCwxNTQuMjQ3LDE1OC41NzIsMTQ5LjA0NiwxNTguNTcxLDE0My44NDd6IE0xNjUuODgxLDE0My44NDYNCgkJYzAsNS4wNTYtMC4wNjgsMTAuMTEzLDAuMDU4LDE1LjE2NmMwLjAyNSwwLjk5MywwLjU2MiwyLjMzMSwxLjMxMywyLjgyNWMwLjUzOSwwLjM1NCwxLjk5OC0wLjE5OSwyLjc1NS0wLjc0OA0KCQljNi41NjctNC43NjQsMTMuMDc0LTkuNjExLDE5LjU4Ny0xNC40NTJjMi41ODMtMS45MjEsMi41ODUtMy40NTYsMC4wMTEtNS4zN2MtNi40NTUtNC43OTgtMTIuOTAyLTkuNjA3LTE5LjQxNC0xNC4zMjYNCgkJYy0wLjgxOC0wLjU5NC0yLjM4Mi0xLjIzNC0yLjkzMi0wLjg2M2MtMC43ODQsMC41My0xLjI5MSwxLjk2NS0xLjMyLDMuMDNDMTY1LjgwNiwxMzQuMDE4LDE2NS44OCwxMzguOTMyLDE2NS44ODEsMTQzLjg0NnoiLz4NCjwvZz4NCjwvc3ZnPg0K';

	return (
		isPreview ? <img width='100%' src={previewImageData} alt=''/> :
		<div // eslint-disable-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
			className={ classnames(
				className,
				`uagb-block-${ props.clientId.substr( 0, 8 ) }`,
				'uagb-lottie__outer-wrap',
				`uagb-lottie__${ align }`
			) }
			onMouseEnter={
				'hover' === playOn
					? handleLottieMouseEnter
					: toStopPlayAnimation
			}
			onMouseLeave={
				'hover' === playOn
					? handleLottieMouseLeave
					: toStopPlayAnimation
			}
			onClick={
				'click' === playOn
					? handleLottieMouseEnter
					: toStopPlayAnimation
			}
		>
			<Suspense fallback={ lazyLoader() }>
				<Player
				    autoplay={ true }
					ref={ lottieplayer }
					src={ lottieURl }
        			loop={loop}
					speed={ speed }
				>
				</Player>
			</Suspense>
		</div>
	);
};

export default React.memo( Render );
