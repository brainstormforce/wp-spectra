
document.addEventListener('contextmenu', () => {
	console.log('clicked');
});


document.addEventListener('DOMContentLoaded', () => {
	const editorContainer = document.querySelector('.editor-styles-wrapper');
	console.log(editorContainer);
	const rightClickContainer = editorContainer.createElement( 'div' );
	rightClickContainer.setAttribute('id', 'spectra-context-menu')
	rightClickContainer.innerHTML = '<div class="setting"> Option 1 </div><div class="setting"> Option 2 </div><div class="setting"> Option 3 </div>';
	console.log(rightClickContainer);
});
