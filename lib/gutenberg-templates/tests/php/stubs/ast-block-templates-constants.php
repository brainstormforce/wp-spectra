<?php
namespace {
    define( 'WP_LANG_DIR', '' );
    define( 'ZIP_AI_CREDIT_THRESHOLD_MEDIUM', '');
    define( 'ZIP_AI_CREDIT_THRESHOLD_HIGH', '');
    define( 'ZIP_AI_CREDIT_SERVER_API', '');
    define( 'ASTRA_THEME_DIR', '');
    $url = \apply_filters('ast_block_templates_library_url', 'https://websitedemos.net/');
    if ( empty( $url ) ) {
        $url = 'https://websitedemos.net/';
    }
    \define('AST_BLOCK_TEMPLATES_LIBRARY_URL', $url);
    \define('AST_BLOCK_TEMPLATES_VER', '2.0.12');
    \define('AST_BLOCK_TEMPLATES_FILE', __FILE__);
    \define('AST_BLOCK_TEMPLATES_BASE', \plugin_basename(\AST_BLOCK_TEMPLATES_FILE));
    \define('AST_BLOCK_TEMPLATES_DIR', \plugin_dir_path(\AST_BLOCK_TEMPLATES_FILE));
    \define('AST_BLOCK_TEMPLATES_URI', \plugins_url('/', \AST_BLOCK_TEMPLATES_FILE));
    define( 'ZIPWP_APP', '' );
}

