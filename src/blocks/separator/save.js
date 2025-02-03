/**
 * BLOCK: Separator - Save Block
 */
import { uagbClassNames } from '@Utils/Helpers';
import { RichText,useBlockProps } from '@wordpress/block-editor';
import renderSVG from '@Controls/renderIcon';
import renderCustomSVG from './separator-svg';

export default function save( props ) {
	const {
		attributes: { 
			block_id, 
			elementType, 
			separatorText, 
			separatorTextTag, 
			separatorStyle, 
			separatorIcon,
			blockTopPadding, 
			blockRightPadding, 
			blockLeftPadding, 
			blockBottomPadding,
			blockTopPaddingTablet, 
			blockRightPaddingTablet, 
			blockLeftPaddingTablet, 
			blockBottomPaddingTablet,
			blockTopPaddingMobile, 
			blockRightPaddingMobile, 
			blockLeftPaddingMobile, 
			blockBottomPaddingMobile,
			blockTopMargin, 
			blockRightMargin, 
			blockLeftMargin, 
			blockBottomMargin,
			blockTopMarginTablet, 
			blockRightMarginTablet, 
			blockLeftMarginTablet, 
			blockBottomMarginTablet,
			blockTopMarginMobile, 
			blockRightMarginMobile, 
			blockLeftMarginMobile, 
			blockBottomMarginMobile 
		 },
	} = props;

	const spacingAttributes = [
		blockTopPadding, blockRightPadding, blockLeftPadding, blockBottomPadding,blockTopPaddingTablet, blockRightPaddingTablet, blockLeftPaddingTablet, blockBottomPaddingTablet,
		blockTopPaddingMobile, blockRightPaddingMobile, blockLeftPaddingMobile, blockBottomPaddingMobile,blockTopMargin, blockRightMargin, blockLeftMargin, blockBottomMargin,
		blockTopMarginTablet, blockRightMarginTablet, blockLeftMarginTablet, blockBottomMarginTablet, blockTopMarginMobile, blockRightMarginMobile, blockLeftMarginMobile, blockBottomMarginMobile
	];
	
	const shouldAddWrapper = spacingAttributes.some( attribute => typeof attribute === 'number' );
	

	const customSVG = renderCustomSVG( separatorStyle );
	const CustomTag = `${ separatorTextTag }`;
	const blockProps = useBlockProps.save( {
		className: uagbClassNames( [
			`uagb-block-${ block_id }`,
			`${ elementType !== 'none' ? 'wp-block-uagb-separator--' + elementType : '' }`
		] ),
	} );

	const InnerContent = () => (
		<div className="wp-block-uagb-separator__inner" style={{ '--my-background-image': `${customSVG}` }}>
			{ elementType !== 'none' && (
				<div className="wp-block-uagb-separator-element">
					{ elementType === 'icon' ? (
						renderSVG( separatorIcon )
					) : (
					<RichText.Content
					    tagName={ CustomTag }
					    value={ separatorText }
					    className="uagb-html-tag"
					/>
					)}
				</div>
			) }
		</div>
	);
	

	return (
		<div { ...blockProps }>
			{	shouldAddWrapper ? (
				<div className='uagb-separator-spacing-wrapper'>
					{ InnerContent() }
				</div>
			) : (
				 InnerContent() 
			) }
		</div>
	);
}
