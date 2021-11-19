<?php
/**
 * Frontend JS File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

if ( ! $attr['enableTweet'] ) {
	return '';
}

$target = $attr['iconTargetUrl'];

$url = '';

if ( 'current' === $target ) {
	global $wp;
	$url = home_url( add_query_arg( array(), $wp->request ) );
} else {
	$url = $attr['customUrl'];
}

$via = isset( $attr['iconShareVia'] ) ? $attr['iconShareVia'] : '';

$base_selector = ( isset( $attr['classMigrate'] ) && $attr['classMigrate'] ) ? '.uagb-block-' : '#uagb-blockquote-';
$selector      = $base_selector . $id;

ob_start();
?>
var selector = document.querySelectorAll( '<?php echo esc_attr( $selector ); ?>' );
if ( selector.length > 0 ) {

	var blockquote__tweet = selector[0].getElementsByClassName("uagb-blockquote__tweet-button");

	if ( blockquote__tweet.length > 0 ) {

		blockquote__tweet[0].addEventListener("click",function(){	
			var request_url = "https://twitter.com/share?url="+ encodeURIComponent("<?php echo esc_url( $url ); ?>")+"&text="+(<?php echo wp_json_encode( $attr['descriptionText'] ); ?>)+"&via="+("<?php echo esc_html( $via ); ?>");
			window.open( request_url );
		});
	}
}
<?php
return ob_get_clean();
?>
