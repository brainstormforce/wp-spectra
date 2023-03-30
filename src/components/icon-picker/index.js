import { useLayoutEffect, useState } from '@wordpress/element';
import styles from './editor.lazy.scss';
import renderSVG from '@Controls/renderIcon';
import { __ } from '@wordpress/i18n';
import ModalContainer from './modal-container';
import UAGHelpText from '@Components/help-text';

const UAGIconPicker = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { label, value, onChange, help = false } = props;
	const defaultIcons = [ ...wp.UAGBSvgIcons ];
	const iconCategoryList = [ ...wp.uagb_icon_category_list ];
	// For modal.
	const [ isOpen, setOpen ] = useState( false );

	const openModal = () => setOpen( true );
	const closeModal = () => setOpen( false );

	const isIconAvailable = value && '' !== value;

	// Modal placeholder.
	const modalPlaceHolder = (
		<div className={ `uag-ip-placeholder-wrap` }>
			{ /* If icon available then show remove button. */ }
			{ isIconAvailable && (
				<div
					className="uag-ip-remove-icon"
					onClick={ () => {
						onChange( '' );
					} }
				>
					{ renderSVG( 'xmark' ) }
				</div>
			) }

			<div className="uag-ip-selected-icon" onClick={ openModal }>
				<div className="uag-ip-selected-icon-overlay">{ ! isIconAvailable && renderSVG( 'plus' ) }</div>
				{ isIconAvailable && <div className="uag-ip-selected-icon-value">{ renderSVG( value ) }</div> }
			</div>
			<div className="uag-ip-actions">
				<span onClick={ openModal }>
					{ isIconAvailable
						? __( 'Change Icon', 'ultimate-addons-for-gutenberg' )
						: __( 'Choose Icon', 'ultimate-addons-for-gutenberg' ) }
				</span>
			</div>
		</div>
	);
	return (
		<div className="uag-custom-ip components-base-control">
			<span className="uag-control-label">{ label || __( 'Icon', 'ultimate-addons-for-gutenberg' ) }</span>
			{ modalPlaceHolder }
			{ isOpen && (
				<ModalContainer
					{ ...{
						...props,
						closeModal,
						defaultIcons,
						iconCategoryList,
					} }
				/>
			) }
			<UAGHelpText text={ help } />
		</div>
	);
};
export default UAGIconPicker;
