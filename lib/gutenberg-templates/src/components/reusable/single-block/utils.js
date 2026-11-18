export const withinIframe = () => {
	if ( window.location.href !== window.parent.location.href ) {
		return true;
	}
	return false;
};

export const shouldSkipReplacement = ( imageUrl ) => {
	const skipKeywords = [
		'skip',
		'logo',
		'fav-icon',
	];
	for ( const keyword of skipKeywords ) {
		if ( imageUrl.includes( keyword ) ) {
			return true;
		}
	}
	return false;
};
