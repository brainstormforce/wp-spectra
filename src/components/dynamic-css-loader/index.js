import { memo } from '@wordpress/element';
const DynamicCSSLoader = ( { blockStyling } ) => {
	return <style>{ blockStyling }</style>;
};
export default memo( DynamicCSSLoader );
