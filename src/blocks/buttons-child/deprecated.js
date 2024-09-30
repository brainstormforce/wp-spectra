/**
 * BLOCK: Button Child - Deprecated Block
 */

import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
import renderSVG from '@Controls/deprecatedRenderIcon';
import { getBorderAttributes } from '@Controls/generateAttributes';
import newAttributesV2_0_14 from './deprecated/v2.0.14/attributes';
import newSaveV2_0_14 from './deprecated/v2.0.14/save';

import newAttributesV2_1_1 from './deprecated/v2.1.1/attributes';
import newAttributesV2_7_11 from './deprecated/v2.7.11/attributes';
import newSaveV2_1_1 from './deprecated/v2.1.1/save';
import saveV2_6_2 from './deprecated/v2.6.2/save';
import attributesV2_6_2 from './deprecated/v2.6.2/attributes';
import saveV2_7_11 from './deprecated/v2.7.11/save';
import saveV2_6_7 from './deprecated/v2.6.7/save';
import attributesV2_6_7 from './deprecated/v2.6.7/attributes';
import saveV2_6_9 from './deprecated/v2.6.9/save';
import attributesV2_6_9 from './deprecated/v2.6.9/attributes';
import saveV2_7_0 from './deprecated/v2.7.0/save';
import attributesV2_7_0 from './deprecated/v2.7.0/attributes';
import saveV2_12_2 from './deprecated/v2.12.2/save';
import newAttributesV2_12_2 from './deprecated/v2.12.2/attributes';
import attributesV2_12_3 from './deprecated/v2.12.3/attributes';
import saveV2_12_3 from './deprecated/v2.12.3/save';
import attributesV2_13_0 from './deprecated/v2.13.0/attributes';
import saveV2_13_0 from './deprecated/v2.13.0/save';
import attributesV2_15_3 from './deprecated/v2.15.3/attributes';
import saveV2_15_3 from './deprecated/v2.15.3/save';

const borderAttributes = getBorderAttributes( 'btn' );
const attributes = {
	inheritFromTheme: {
		type: 'boolean',
		default: false,
	},
	block_id: {
		type: 'string',
	},
	align: {
		type: 'string',
		default: 'center',
	},
	gap: {
		type: 'number',
		default: 10,
	},
	stack: {
		type: 'string',
		default: 'none',
	},
	loadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	fontFamily: {
		type: 'string',
		default: 'Default',
	},
	fontWeight: {
		type: 'string',
	},
	fontSubset: {
		type: 'string',
	},
	label: {
		type: 'html',
		default: '#Click Here',
	},
	link: {
		type: 'string',
		default: '',
	},
	target: {
		type: 'string',
		default: '_self',
	},
	size: {
		type: 'number',
	},
	vPadding: {
		type: 'number',
		default: 10,
	},
	hPadding: {
		type: 'number',
		default: 14,
	},
	borderWidth: {
		type: 'number',
		default: 1,
	},
	borderRadius: {
		type: 'number',
		default: 2,
	},
	borderStyle: {
		type: 'string',
		default: 'solid',
	},
	borderColor: {
		type: 'string',
		default: '#333',
	},
	borderHColor: {
		type: 'string',
		default: '#333',
	},
	color: {
		type: 'string',
		default: '#333',
	},
	background: {
		type: 'string',
		default: '',
	},
	backgroundType: {
		type: 'string',
		default: 'color',
	},
	hColor: {
		type: 'string',
		default: '#333',
	},
	hBackground: {
		type: 'string',
		default: '',
	},
	sizeType: {
		type: 'string',
		default: 'px',
	},
	sizeMobile: {
		type: 'number',
		default: '',
	},
	sizeTablet: {
		type: 'number',
		default: '',
	},
	lineHeight: {
		type: 'number',
		default: '',
	},
	lineHeightType: {
		type: 'string',
		default: 'em',
	},
	lineHeightMobile: {
		type: 'number',
		default: '',
	},
	lineHeightTablet: {
		type: 'number',
		default: '',
	},
	opensInNewTab: {
		type: 'boolean',
	},
	icon: {
		type: 'string',
		default: '',
	},
	iconPosition: {
		type: 'string',
		default: 'after',
	},
	iconSpace: {
		type: 'number',
		default: 8,
	},
	paddingUnit: {
		type: 'string',
		default: 'px',
	},
	...borderAttributes,
};

const deprecated = [
	{
		attributes,
		save: ( props ) => {
			const { attributes, className } = props;

			const { block_id, target, link, label } = attributes;

			return (
				<div className={ classnames( className, 'uagb-buttons__outer-wrap', `uagb-block-${ block_id }` ) }>
					<div className="uagb-button__wrapper">
						<div className="uagb-buttons-repeater">
							<RichText.Content
								value={ label }
								tagName="a"
								className="uagb-button__link"
								href={ link }
								rel="noopener noreferrer"
								target={ target }
							/>
						</div>
					</div>
				</div>
			);
		},
	},
	{
		attributes,
		save: ( props ) => {
			const { attributes, className } = props;

			const { block_id, target, link, label, inheritFromTheme, icon, iconPosition } = attributes;

			const iconHtml = ( curr_position ) => {
				if ( '' !== icon && curr_position === iconPosition ) {
					return (
						<span
							className={ classnames(
								'uagb-button__icon',
								`uagb-button__icon-position-${ iconPosition }`
							) }
						>
							{ renderSVG( icon ) }
						</span>
					);
				}
				return null;
			};

			return (
				<div
					className={ classnames(
						className,
						'uagb-buttons__outer-wrap',
						`uagb-block-${ block_id }`,
						inheritFromTheme ? 'wp-block-button' : null
					) }
				>
					<div className="uagb-button__wrapper">
						<a
							className={ classnames(
								'uagb-buttons-repeater',
								inheritFromTheme ? 'wp-block-button__link' : null
							) }
							href={ link }
							rel="noopener noreferrer"
							target={ target }
						>
							{ iconHtml( 'before' ) }
							<RichText.Content value={ label } tagName="div" className="uagb-button__link" />
							{ iconHtml( 'after' ) }
						</a>
					</div>
				</div>
			);
		},
	},
	{
		attributes: newAttributesV2_0_14,
		save: newSaveV2_0_14,
	},
	{
		attributes: newAttributesV2_1_1,
		save: newSaveV2_1_1,
	},
	{
		attributes: attributesV2_6_2,
		save: saveV2_6_2,
	},
	{
		attributes: attributesV2_6_7,
		save: saveV2_6_7,
	},
	{
		attributes: attributesV2_6_9,
		save: saveV2_6_9,
	},
	{
		attributes: attributesV2_7_0,
		save: saveV2_7_0,
	},
	{
		attributes: newAttributesV2_7_11,
		save: saveV2_7_11,
	},
	{
		attributes: newAttributesV2_12_2,
		save: saveV2_12_2,
	},
	{
		attributes: attributesV2_12_3,
		save: saveV2_12_3,
	},
	{
		attributes: attributesV2_13_0,
		save: saveV2_13_0,
	},
	{
		attributes: attributesV2_15_3,
		save: saveV2_15_3,
	}
];

export default deprecated;
