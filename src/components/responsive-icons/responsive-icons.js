document.addEventListener('load', spectra_responsive_icons);
document.addEventListener('DOMContentLoaded', spectra_responsive_icons);
import './style.scss'
import DeviceIcons from './deviceIcons';

function spectra_responsive_icons() {
	wp.data.subscribe(function () {
		setTimeout(function () {
			spectra_responsive_icon();
		}, 500);
	});
}

function spectra_responsive_icon() {
	if (!document.querySelector('.edit-post-header__settings')) {
		return null;
	}
	if (document.querySelector('.spectra-responsive-icons__wrap')) {
		return null;
	}

	let buttonWrapper = document.createElement('div');
	buttonWrapper.classList.add('spectra-responsive-icons__wrap');

	document.querySelector('.edit-post-header__settings').insertBefore(buttonWrapper,document.querySelector('.edit-post-header__settings').firstChild);
	wp.element.render(
		<DeviceIcons />,
		document.querySelector('.spectra-responsive-icons__wrap')
	);
}

