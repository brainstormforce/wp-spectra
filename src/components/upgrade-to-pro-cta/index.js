import PropTypes from 'prop-types';
import { __ } from '@wordpress/i18n';
import styles from './editor.lazy.scss';
import { useLayoutEffect } from '@wordpress/element';

const UpgradeComponent = props => {

	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const {
		title,
		choices = {},
		renderAs = 'block',
		campaign = 'default',
	} = props.control;

	// Pro upgrade URL.
	const upgradeUrl = `https://wpspectra.com/pricing/?utm_source=dashboard&utm_medium=free-plugin&utm_campaign=${campaign}`;
	// Check mark svg.
	const checkMark = <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><g clipPath="url(#clip0_6404_1763)"><path d="M12.9955 5.64817L7.93251 12.4574L4.99665 10.2744" stroke="#5A03EF" strokeWidth="1.5"></path></g><defs><clipPath id="clip0_6404_1763"><rect width="18" height="18" rx="9" fill="white"></rect></clipPath></defs></svg>;

	const getSpectraProItemData = ( data, key ) => {
		return undefined !== data[key] && data[key] ? data[key] : '';
	}

	const proOptionsList = () => {
		const htmlContent = Object.entries( choices ).map( ( [key, value] ) => {
			return <li key={key} className='uagb-pro-upgrade-item'>
					{checkMark}
					<span className='uagb-upgrade-list-title'> {getSpectraProItemData( value, 'title' )} </span>
					{'' !== getSpectraProItemData( value, 'description' ) &&
						<span className='uagb-upgrade-list-description'> {getSpectraProItemData( value, 'description' )} </span>
					}
			</li>
		} );

		return htmlContent;
	};
	
	const renderListUpgrade = () => {
		return <>
			<div className='uagb-upgrade-list-wrapper'>
				<p className='uagb-brand-logo'>
					<button type="button" aria-pressed="false" aria-controls="spectra-page-level-settings:spectra-page-settings-panel" aria-expanded="false" aria-disabled="false" className="components-button is-compact has-icon" aria-label="Spectra Page Settings"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 70 70" fill="none" className="spectra-page-settings-button" aria-hidden="true" focusable="false"> <path fillRule="evenodd" clipRule="evenodd" d="M35 70C54.33 70 70 54.33 70 35C70 15.67 54.33 0 35 0C15.67 0 0 15.67 0 35C0 54.33 15.67 70 35 70ZM24.4471 23.5112C18.9722 26.7403 20.2852 35.3759 26.5032 37.0351L36.8875 39.806C37.7533 40.037 37.91 41.224 37.135 41.6811L27.0972 47.5799L26.036 58L45.5529 46.4888C51.0278 43.2597 49.7148 34.6241 43.4968 32.9649L33.1125 30.1941C32.2467 29.963 32.09 28.776 32.865 28.3189L42.9028 22.4202L43.964 12L24.4471 23.5112Z"></path> </svg></button>
				</p>
				<p className="uagb-upgrade-list-section-title">{title}</p>
			</div>
			 <ul className='uagb-upgrade-list-items'>
				{proOptionsList()}
			</ul> 
			<p>
				<a
					href={upgradeUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="button uagb-button-link"
				>
					{__( 'Upgrade to Pro', 'ultimate-addons-for-gutenberg' )}
				</a>
			</p>
		</>
	};

	return (
		<>
			<div className="uagb-upgrade-pro-wrap">
				{ 'list' === renderAs && renderListUpgrade() }
			</div>
		</>
	);
};

UpgradeComponent.propTypes = {
	control: PropTypes.object.isRequired
};

export default UpgradeComponent;
