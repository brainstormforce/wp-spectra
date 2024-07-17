<?php
/**
 * Frontend JS File.
 *
 * @since 2.15.0
 *
 * @package uagb
 */

/**
 * Adding this comment to avoid PHPStan errors of undefined variable as these variables are defined else where.
 *
 * @var string $id
 */

$block_name = 'icon';
$selector   = '.uagb-block-' . $id;
$js         = '';

$js .= Spectra_Icon::render_icon_click( $id );

return $js;
