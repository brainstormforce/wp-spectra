// Internal dependencies.
import './style.scss';
import './store/index';
import Container from './components/layout/container';

document.addEventListener('DOMContentLoaded', () => {
	// Add modal popup markup.
	let modal = document.createElement('div');
	modal.id = 'gutenberg-templates-modal-wrap';
	modal.innerHTML = `<div id="gutenberg-templates-modal"></div>`;
	document.body.appendChild(modal);

	wp.element.render(
		<Container />,
		document.getElementById('gutenberg-templates-modal')
	);
});
