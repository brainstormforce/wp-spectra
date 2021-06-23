// When the route changes, we need to update wp-admin's menu with the correct section & current link
window.uagWpNavMenuChange = function ( path ) {
	const pageSlug = uag_react.admin_base_slug;
	const pageUrl = path
		? 'admin.php?page=' + pageSlug + '&path=' + encodeURIComponent( path )
		: 'admin.php?page=' + pageSlug;

	const currentItemsSelector = `.wp-submenu-wrap li > a[href$="${ pageUrl }"]`;

	const currentItems = document.querySelectorAll( currentItemsSelector );

	/* Remove current */
	Array.from( document.getElementsByClassName( 'current' ) ).forEach(
		function ( item ) {
			item.classList.remove( 'current' );
		}
	);
	/* Add current */
	Array.from( currentItems ).forEach( function ( item ) {
		item.parentElement.classList.add( 'current' );
	} );
};

window.uagUnsavedChanges = false;

window.onbeforeunload = function () {
	if ( uagUnsavedChanges ) return 'Unsaved Changes';
};
