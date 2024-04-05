const easingFunctions = {
	// linear easing function
	linearTween( t, b, c, d ) {
		return c * t / d + b;
	},

	// ease in function
	easeInQuad( t, b, c, d ) {
		t /= d;
		return c * t * t + b;
	},

	// ease out function
	easeOutQuad( t, b, c, d ) {
		t /= d;
		return -c * t * ( t - 2 ) + b;
	},

	// ease in out function
	easeInOutQuad( t, b, c, d ) {
		t /= d / 2;
		if ( t < 1 ) {
			return ( c / 2 ) * t * t + b;
		}
		t--;
		return ( -c / 2 ) * ( t * ( t - 2 ) - 1 ) + b;
	},

	// ease in cubic function
	easeInCubic( t, b, c, d ) {
		t /= d;
		return c * t * t * t + b;
	},

	// ease out cubic function
	easeOutCubic( t, b, c, d ) {
		t /= d;
		t--;
		return c * ( t * t * t + 1 ) + b;
	},

	// ease in out cubic function
	easeInOutCubic( t, b, c, d ) {
		t /= d / 2;
		if ( t < 1 ) {
			return ( c / 2 ) * t * t * t + b;
		}
		t -= 2;
		return ( c / 2 ) * ( t * t * t + 2 ) + b;
	},
};

Object.seal( easingFunctions );

export default easingFunctions;
