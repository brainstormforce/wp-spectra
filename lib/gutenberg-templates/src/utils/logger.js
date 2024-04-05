/**
 * Log
 *
 * @since 1.0.0
 *
 * @param {string} message
 * @param {*}      payload
 * @param {string} color
 */
export const log = ( message = '', payload = '', color = '#9E9E9E' ) => {
	// // Disable logger on production.
	// if (process.env.NODE_ENV === `production`) {
	//     return;
	// }

	// Not have log message then return.
	if ( ! message ) {
		return;
	}

	// Print the log.
	console.log(
		`%c ${ message }  `,
		`color: ${ color }; font-weight: lighter;`,
		payload,
	);
};

/**
 * Info
 *
 * @since 1.0.0
 *
 * @param {string} message
 * @param {*}      payload
 */
export const info = ( message = '', payload = '' ) => log( message, payload, '#03A9F4' );

/**
 * Success
 *
 * @since 1.0.0
 *
 * @param {string} message
 * @param {*}      payload
 */
export const success = ( message = '', payload = '' ) => log( message, payload, '#4CAF50' );

/**
 * Error
 *
 * @since 1.0.0
 *
 * @param {string} message
 * @param {*}      payload
 */
export const error = ( message = '', payload = '' ) => log( message, payload, '#F20404' );

/**
 * Warning
 *
 * @since 1.0.0
 *
 * @param {string} message
 * @param {*}      payload
 */
export const warn = ( message = '', payload = '' ) => log( message, payload, '#FF9800' );
