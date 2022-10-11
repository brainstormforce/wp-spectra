<?php
/**
 * Blocks config loader.
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}


require_once UAGB_DIR . 'blocks-config/post/class-uagb-post.php';
require_once UAGB_DIR . 'blocks-config/post-timeline/class-uagb-post-timeline.php';
require_once UAGB_DIR . 'blocks-config/cf7-styler/class-uagb-cf7-styler.php';
require_once UAGB_DIR . 'blocks-config/gf-styler/class-uagb-gf-styler.php';
require_once UAGB_DIR . 'blocks-config/taxonomy-list/class-uagb-taxonomy-list.php';
require_once UAGB_DIR . 'blocks-config/table-of-content/class-uagb-table-of-content.php';
require_once UAGB_DIR . 'blocks-config/forms/class-uagb-forms.php';
require_once UAGB_DIR . 'blocks-config/lottie/class-uagb-lottie.php';
require_once UAGB_DIR . 'blocks-config/image/class-uagb-image.php';
