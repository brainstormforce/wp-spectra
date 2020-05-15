<?php 

function ub_register_how_to_block(){
    if ( function_exists( 'register_block_type' ) ) {
    	die();
        // require dirname(dirname(__DIR__)) . '/defaults.php';
        // register_block_type('ub/how-to', array(
        //     'attributes' => $defaultValues['ub/how-to']['attributes'],
        //     'render_callback' => 'ub_render_how_to_block'));
    }
}

add_action('init', 'ub_register_how_to_block');