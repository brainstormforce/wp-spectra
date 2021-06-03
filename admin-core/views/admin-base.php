<?php
/**
 * Admin Base HTML.
 *
 * @package uag
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

?>
<div class="wcf-menu-page-wrapper">
	<div id="wcf-menu-page">
		<div class="wcf-menu-page-content wcf-clear">
		<?php

			do_action( 'uag_render_admin_page_content', $menu_page_slug, $page_action );
		?>
		</div>
	</div>
</div>
