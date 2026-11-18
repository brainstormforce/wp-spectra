<?php

namespace Gutenberg_Templates\Inc\Traits {
    /**
     * Trait Instance.
     */
    trait Instance
    {
        /**
         * Instance object.
         *
         * @var self Class Instance.
         */
        private static $instance = null;
        /**
         * Initiator
         *
         * @since 0.0.1
         * @return self Initialized object of class.
         */
        public static function instance()
        {
        }
    }
}
namespace Gutenberg_Templates\Inc\Importer {
    /**
     * Ast_Block Templates Kit Importer
     *
     * @since 2.1.0
     */
    class Template_Kit_Importer
    {
        use \Gutenberg_Templates\Inc\Traits\Instance;
        /**
         * Constructor
         *
         * @since 2.1.0
         */
        public function __construct()
        {
        }
        /**
         * Template kit Importer
         *
         * @return void
         * @since 1.0.0
         */
        public function template_importer()
        {
        }
        /**
         * Import Block
         * 
         * @return void
         */
        public function import_template_kit()
        {
        }
        /**
         * Allowed tags for the batch update process.
         *
         * @param  array<string, array<string, boolean>> $allowedposttags   Array of default allowable HTML tags.
         * @param  string                                $context    The context for which to retrieve tags. Allowed values are 'post',
         *                                                                 'strip', 'data', 'entities', or the name of a field filter such as
         *                                                                 'pre_user_description'.
         * @return array<string, array<string, boolean>> Array of allowed HTML tags and their allowed attributes.
         */
        public function allowed_tags_and_attributes($allowedposttags, $context)
        {
        }
        /**
         * Download and Replace hotlink images
         *
         * @since 1.0.0
         *
         * @param  string $content Mixed post content.
         * @return string
         */
        public function get_content($content = '')
        {
        }
    }
    /**
     * Admin
     */
    class Plugin
    {
        use \Gutenberg_Templates\Inc\Traits\Instance;
        /**
         * Default Color Palette
         *
         * @since 2.0.0
         * @access public
         * @var array<string> Last checksums.
         */
        public static $color_palette = array();
        /**
         * Custom Capability
         *
         * @since 2.1.14
         * @access public
         * @var string capabilities.
         */
        public static $custom_capability = 'manage_ast_block_templates';
        /**
         * Add custom capabilities.
         *
         * @since 2.1.14
         * @return void
         */
        public function add_custom_capabilities()
        {
        }
        /**
         * Remove custom capabilities.
         *
         * @since 2.1.14
         * @return void
         */
        public function remove_custom_capability_from_other_roles()
        {
        }
        /**
         * Define constants.
         *
         * @return void
         */
        public function define_constants()
        {
        }
        /**
         * Get Color Palette.
         *
         * @since 2.0.0
         * @return array<string>
         */
        public function get_default_color_palette()
        {
        }
        /**
         * Add .json files as supported format in the uploader.
         *
         * @param array<string, string> $mimes Already supported mime types.
         * @return array<string, string>
         */
        public function custom_upload_mimes($mimes)
        {
        }
        /**
         * Save the auth token in business details option.
         *
         * @since 2.0.0
         * @return void
         */
        public function init()
        {
        }
        /**
         * Update disable AI settings based on AI Design Copilot status.
         *
         * @since 2.0.18
         * @return void
         */
        public function sync_disable_ai_settings()
        {
        }
        /**
         * Retrieve block data from an API and update the option with the data.
         *
         * @since 1.3.0
         * @return void
         */
        public function api_request()
        {
        }
        /**
         * Hide notice.
         *
         * @since 2.1.1
         * @return void
         */
        public function hide_notices()
        {
        }
        /**
         * Get the Color palette.
         *
         * @since 1.3.0
         * @return void
         */
        public function get_color_palette()
        {
        }
        /**
         * Import WP Forms
         *
         * @since 1.0.0
         *
         * @param  string $wpforms_url WP Forms JSON file URL.
         * @return void
         */
        public function import_wpforms($wpforms_url = '')
        {
        }
        /**
         * Import SureForms
         *
         * @since 2.4.11
         * @return void
         */
        public function import_sureforms()
        {
        }
        /**
         * Import Block
         *
         * @return void
         */
        public function import_block()
        {
        }
        /**
         * Walk blocks and update buttons.
         *
         * @param array<mixed> $node Block node.
         * @return void;
         */
        public function walk_blocks_and_update_buttons(&$node)
        {
        }
        /**
         * Import Images if required.
         *
         * @param string $content block content.
         * @return string
         */
        public function maybe_import_images($content)
        {
        }
        /**
         * Replace content
         *
         * @param  string               $content         Content.
         * @param  array<string, mixed> $dynamic_content Dynamic content.
         * @return string                  Content.
         */
        public function replace($content, $dynamic_content)
        {
        }
        /**
         * Update the Blocks with new mapping data.
         *
         * @since {{since}}
         * @param array<mixed> $blocks Array of Blocks.
         * @param array<mixed> $dynamic_content Array of dynamic content.
         * @return array<mixed> $blocks Modified array of Blocks.
         */
        public function get_updated_blocks(&$blocks, $dynamic_content)
        {
        }
        /**
         * Traverse the attributes recursively.
         *
         * @since {{since}}
         * @param array<mixed> $attrs Reference of the attributes array.
         * @param string       $match Placeholder match.
         * @param string       $ai_content AI generated content.
         * @return void
         */
        public function recursively_traverse_attrs(array &$attrs, $match, $ai_content)
        {
        }
        /**
         * Allowed tags for the batch update process.
         *
         * @param  array<string, mixed> $allowedposttags   Array of default allowable HTML tags.
         * @param  string               $context    The context for which to retrieve tags. Allowed values are 'post',
         *                                                'strip', 'data', 'entities', or the name of a field filter such as
         *                                                'pre_user_description'.
         * @return array<string, mixed> Array of allowed HTML tags and their allowed attributes.
         */
        public function allowed_tags_and_attributes($allowedposttags, $context)
        {
        }
        /**
         * Activate a dependency plugin required by the imported pattern (e.g., form plugins).
         * Host plugin (Spectra/UAG) is excluded — always active. Called only on user-initiated
         * "Insert" action with capability and nonce checks. Permitted per WP.org guidelines
         * as activation to prevent errors.
         *
         * @return void
         */
        public function activate_plugin()
        {
        }
        /**
         * Template Importer
         *
         * @since 1.0.0
         * @return void
         */
        public function template_importer()
        {
        }
        /**
         * Template Assets
         *
         * @since 1.0.0
         * @return void
         */
        public function template_assets()
        {
        }
        /**
         * Get Spec Credit Details
         *
         * @since 2.1.24
         * @param  array<string, mixed> $business_details business details.
         * @return array<string, mixed>
         */
        public function maybe_parse_social_profiles($business_details)
        {
        }
        /**
         * Get is show personalize AI notice.
         *
         * @since 2.1.1
         * @return array<string, bool>
         */
        public function is_show_personalize_ai_notice()
        {
        }
        /**
         * Check if white label enabled
         *
         * @since 2.0.0
         *
         * @return boolean
         */
        public function is_white_label()
        {
        }
        /**
         * Regenerate Spectra CSS.
         *
         * @since 2.0.0
         *
         * @return void
         */
        public function regenerate_spectra_css()
        {
        }
        /**
         * Get palette colors
         *
         * @since 2.0.0
         *
         * @return mixed
         */
        public function get_page_palette_colors()
        {
        }
        /**
         * Get adaptive mode
         *
         * @since 2.4.21
         *
         * @return boolean
         */
        public function get_adaptive_mode()
        {
        }
        /**
         * Get palette colors
         *
         * @since 2.0.0
         *
         * @return mixed
         */
        public function get_block_palette_colors()
        {
        }
        /**
         * Get plugin status
         *
         * @since 1.0.0
         *
         * @param  string $plugin_init_file Plguin init file.
         * @return mixed
         */
        public function get_plugin_status($plugin_init_file)
        {
        }
        /**
         * Get Spectra version
         *
         * @since 2.4.10
         *
         * @return string
         */
        public function get_spectra_version()
        {
        }
        /**
         * Get the installed UAGB (ultimate-addons-for-gutenberg) version string, or null if not active.
         *
         * @since 2.4.29
         * @return string|null
         */
        public function get_uagb_version()
        {
        }
        /**
         * Check if version toggle should be available
         *
         * @since 2.4.10
         *
         * @return bool
         */
        public function should_show_version_toggle()
        {
        }
        /**
         * Get the labels to use for the version toggle.
         *
         * When spectra-blocks and UAGB are both active the toggle switches between
         * the UAGB Classic pattern library and Spectra Blocks patterns, so the
         * labels are renamed accordingly.  In all other cases the original "v2"
         * and "v3" labels are used.
         *
         * @since 2.4.18
         *
         * @return array{v2: string, v3: string}
         */
        public function get_version_toggle_labels()
        {
        }
        /**
         * Get user migration status using UAGB's Enable Legacy Design Library setting
         *
         * Uses UAGB's 'uag_enable_legacy_design_library' option to determine if user
         * is upgraded (from < 3.0.0) or fresh (new installation of 3.0.0+)
         *
         * @since 2.4.10
         *
         * @return array<string, bool>  Associative array with keys:
         *                              - is_upgraded_user (bool): True if user has legacy library enabled.
         *                              - is_fresh_user (bool): True if user is a fresh installation.
         *                              - show_premium_filter (bool): True if premium filter should be shown.
         */
        public function get_uagb_user_migration_status()
        {
        }
        /**
         * Check if white label enabled
         *
         * @since 2.0.0
         *
         * @return boolean
         */
        public function get_white_label()
        {
        }
        /**
         * Get Zip AI Credits.
         *
         * @since 1.0.0
         * @return array<string, int>
         */
        public function get_spec_credit_details()
        {
        }
        /**
         * Get all sites
         *
         * @since 1.0.0
         *
         * @return array<int, mixed> page builder sites.
         */
        public function get_all_sites()
        {
        }
        /**
         * Get all blocks
         *
         * @since 1.0.0
         * @param  int $start Start Page.
         * @param  int $end End Page.
         * @return array<string, mixed> All Elementor Blocks.
         */
        public function get_all_blocks($start = 0, $end = 0)
        {
        }
        /**
         * Download File Into Uploads Directory
         *
         * @since 1.0.0
         *
         * @param  string               $file Download File URL.
         * @param  array<string, mixed> $overrides Upload file arguments.
         * @param  int                  $timeout_seconds Timeout in downloading the XML file in seconds.
         * @return array<string, mixed>        Downloaded file data.
         */
        public function download_file($file = '', $overrides = array(), $timeout_seconds = 300)
        {
        }
        /**
         * Remove query parameters from the URL.
         *
         * @param  String   $url URL.
         * @param  String[] $params Query parameters.
         *
         * @return string       URL.
         */
        public function remove_query_params($url, $params): string
        {
        }
        /**
         * Check is valid URL
         *
         * @param string $url  The site URL.
         *
         * @since 2.1.5
         * @return boolean
         */
        public function is_valid_url($url = '')
        {
        }
        /**
         * Save auto-open design library setting via AJAX
         *
         * @since 2.4.20
         * @return void
         */
        public function save_auto_open_setting()
        {
        }
    }
    /**
     * Ast_Block Templates WP CLI
     */
    class Sync_Library_WP_CLI
    {
        use \Gutenberg_Templates\Inc\Traits\Instance;
        /**
         * Sync
         *
         *  Example: wp ast-block-templates sync
         *
         * @since 1.0.0
         * @param  array<string, string|int> $args       Arguments with specific value types.
         * @param  array<string, mixed>      $assoc_args Associated Arguments.
         * @return void
         */
        public function sync($args = array(), $assoc_args = array())
        {
        }
    }
    /**
     * Ast_Block Templates Image Importer
     *
     * @since 1.0.0
     */
    class Image_Importer
    {
        use \Gutenberg_Templates\Inc\Traits\Instance;
        /**
         * Constructor
         *
         * @since 1.0.0
         */
        public function __construct()
        {
        }
        /**
         * Process Image Download
         *
         * @since 1.0.0
         * @param  array<int, mixed> $attachments Attachment array.
         * @return array<int, mixed> Attachment array.
         */
        public function process($attachments)
        {
        }
        /**
         * Get Hash Image.
         *
         * @since 1.0.0
         * @param  string $attachment_url Attachment URL.
         * @return string                 Hash string.
         */
        public function get_hash_image($attachment_url)
        {
        }
        /**
         * Get Already Imported IDs
         *
         * @return array<int>
         * This function to is to suppress phpstan warnings
         * since this parameter is not being used
         */
        public function get_already_imported_ids()
        {
        }
        /**
         * Import Image
         *
         * @since 1.0.0
         * @param  array<string, mixed> $attachment Attachment array.
         * @return array<string, mixed> Attachment array.,
         */
        public function import($attachment)
        {
        }
        /**
         * Is Image URL
         *
         * @since 1.0.0
         *
         * @param  string $url URL.
         * @return boolean
         */
        public function is_image_url($url = '')
        {
        }
    }
    /**
     * Importer Helper
     *
     * @since {{since}}
     */
    class Importer_Helper
    {
        /**
         * Get pages.
         *
         * @return array<int|\WP_Post> Array for pages.
         * @param string $type Post type.
         * @since  {{since}}
         */
        public static function get_pages($type = 'page')
        {
        }
        /**
         * Get Business details.
         *
         * @since {{since}}
         * @param string $key options name.
         * @return array<string, mixed> Array for business details or single detail in a string.
         */
        public static function get_business_details($key = '')
        {
        }
        /**
         * Check if we need to skip the URL.
         *
         * @param string $url URL to check.
         * @return boolean
         * @since {{since}}
         */
        public static function is_skipable($url)
        {
        }
        /**
         * Get image orientation of the specified image.
         *
         * @param string $url Image URL.
         * @return string Image orientation.
         * @since {{since}}
         */
        public static function get_image_orientation($url): string
        {
        }
    }
    /**
     * Block Editor Blocks Replacer
     *
     * @since {{since}}
     */
    class BlockEditor
    {
        use \Gutenberg_Templates\Inc\Traits\Instance;
        /**
         * Constructor
         *
         * @since {{since}}
         */
        public function __construct()
        {
        }
        /**
         * Old Images
         *
         * @var array<int> $old_images Old images.
         */
        public static $old_images = array();
        /**
         * Parses images and other content in the Spectra Container block.
         *
         * @since {{since}}
         * @param array<mixed> $block Block.
         * @return array<mixed> $block Block.
         */
        public function parse_spectra_container($block)
        {
        }
        /**
         * Parses images and other content in the Spectra Info Box block.
         *
         * @since {{since}}
         * @param array<mixed> $block Block.
         * @return array<mixed> $block Block.
         */
        public function parse_spectra_infobox($block)
        {
        }
        /**
         * Parses images and other content in the Spectra Image block.
         *
         * @since {{since}}
         * @param array<mixed> $block Block.
         * @return array<mixed> $block Block.
         */
        public function parse_spectra_image($block)
        {
        }
        /**
         * Parses images and other content in the Spectra Info Box block.
         *
         * @since {{since}}
         * @param array<mixed> $block Block.
         * @return array<mixed> $block Block.
         */
        public function parse_spectra_gallery($block)
        {
        }
        /**
         * Parses Google Map for the Spectra Google Map block.
         *
         * @since {{since}}
         * @param array<mixed> $block Block.
         * @return array<mixed> $block Block.
         */
        public function parse_spectra_google_map($block)
        {
        }
        /**
         * Parses images and other content in the Spectra Info Box block.
         *
         * @since {{since}}
         * @param \WP_Post $post Post.
         * @return void
         */
        public function parse_featured_image($post)
        {
        }
        /**
         * Parses address and contct in the block.
         *
         * @since {{since}}
         * @param string $key key to replace.
         * @param string $ai_content ai content string.
         *
         * @return string
         */
        public function replace_contact_details($key, $ai_content)
        {
        }
        /**
         * Parses Spectra form block.
         *
         * @since {{since}}
         * @param array<mixed> $block Block.
         * @return array<mixed> $block Block.
         */
        public function parse_spectra_form($block)
        {
        }
        /**
         * Parse social icon list.
         *
         * @since {{since}}
         * @param array<mixed> $block Block.
         * @return array<mixed> $block Block.
         */
        public function parse_spectra_social_icons($block)
        {
        }
        /**
         * Parses images and other content in the Spectra v3 Container block.
         *
         * @since 2.4.11
         * @param array<mixed> $block Block.
         * @return array<mixed> $block Block.
         */
        public function parse_spectra_v3_container($block)
        {
        }
        /**
         * Parses images and other content in the Spectra Image block.
         *
         * @since 2.4.11
         * @param array<mixed> $block Block.
         * @return array<mixed> $block Block.
         */
        public function parse_core_image($block)
        {
        }
    }
    /**
     * Updater class
     *
     * @since 2.0.0
     */
    class Updater
    {
        use \Gutenberg_Templates\Inc\Traits\Instance;
        /**
         *  Constructor
         */
        public function __construct()
        {
        }
        /**
         * Init
         *
         * @since 2.0.0
         * @return void
         */
        public function init()
        {
        }
        /**
         * Update onboarding variables
         * 
         * @since 2.1.12
         * @return void
         */
        public function remove_deprecated_option()
        {
        }
        /**
         * Fresh v2 install
         * 
         * @since 2.0.0
         * @return void
         */
        public function fresh_v2_install()
        {
        }
        /**
         * Updated
         * 
         * @since 2.0.0
         * @param string $old_version Old version number.
         * @param string $new_version New version number.
         * @return void
         */
        public function updated($old_version, $new_version)
        {
        }
    }
    /**
     * Sync Library
     *
     * @since 1.0.0
     */
    class Sync_Library
    {
        use \Gutenberg_Templates\Inc\Traits\Instance;
        /**
         * Catch the latest checksums
         *
         * @since 1.1.0
         * @access public
         * @var string Last checksums.
         */
        public $last_export_checksums;
        /**
         * Constructor
         *
         * @since 1.0.0
         */
        public function __construct()
        {
        }
        /**
         * Get spectra blocks version for API requests.
         *
         * @since 2.4.14
         * @return string
         */
        public function get_spectra_blocks_version()
        {
        }
        /**
         * Get Custimizer CSS.
         *
         * @return void
         */
        public function get_server_astra_customizer_css()
        {
        }
        /**
         * Get Spectra Common CSS.
         *
         * @return string
         */
        public function get_server_spectra_common_css()
        {
        }
        /**
         * Start Importer
         *
         * @since 1.0.0
         * @return void
         */
        public function setup_templates()
        {
        }
        /**
         * Set default assets
         *
         * @since 1.0.2
         * @return  void
         */
        public function set_default_assets()
        {
        }
        /**
         * Process Import
         *
         * @since 1.0.6
         *
         * @return void
         */
        public function process_sync()
        {
        }
        /**
         * Sync Blocks
         * Sync blocks from library.
         *
         * @since 2.0.0
         * @return void
         */
        public function sync_blocks()
        {
        }
        /**
         * Handle Sync API Response
         *
         * @since 2.0.0
         * @return array<string, mixed>
         */
        public function check_checksum_and_get_blocks_data()
        {
        }
        /**
         * Process Data Sync
         *
         * @since 2.0.0
         * @param  array<string, mixed> $data Data to process.
         * @return void
         */
        public function process_data_sync($data)
        {
        }
        /**
         * Json Files Names.
         *
         * @since 1.0.1
         * @return array<string>
         */
        public function get_default_assets()
        {
        }
        /**
         * Update Library
         *
         * @since 1.0.0
         * @return void
         */
        public function sync_via_ajax()
        {
        }
        /**
         * Get Last Exported Checksum Status
         *
         * @since 1.0.0
         * @return string Checksums Status.
         */
        public function get_last_export_checksums()
        {
        }
        /**
         * Set Last Exported Checksum
         *
         * @since 1.0.0
         * @return string Checksums Status.
         */
        public function set_last_export_checksums()
        {
        }
        /**
         * Update Latest Checksums
         *
         * Store latest checksum after batch complete.
         *
         * @param string $new_checksum New Checksum.
         *
         * @since 1.0.0
         * @return void
         */
        public function update_latest_checksums($new_checksum)
        {
        }
        /**
         * Import Categories
         *
         * @since 1.0.3
         * @return void
         */
        public function ajax_import_categories()
        {
        }
        /**
         * Import Blocks
         *
         * @since 1.0.0
         * @return void
         */
        public function ajax_import_blocks()
        {
        }
        /**
         * Blocks Requests Count
         *
         * @since 1.0.0
         * @return void
         */
        public function ajax_blocks_requests_count()
        {
        }
        /**
         * Get Blocks Total Requests
         *
         * @return integer
         */
        public function get_total_blocks_requests()
        {
        }
        /**
         * Import Categories
         *
         * @since 1.0.3
         * @return void
         */
        public function import_categories()
        {
        }
        /**
         * Import Blocks
         *
         * @since 1.0.0
         * @param  integer $page Page number.
         * @return void
         */
        public function import_blocks($page = 1)
        {
        }
        /**
         * Get Sites Total Requests
         *
         * @return integer
         */
        public function get_total_sites_count()
        {
        }
        /**
         * Import Sites
         *
         * @since 1.0.0
         * @param  integer $page Page number.
         * @return void
         */
        public function import_sites($page = 1)
        {
        }
        /**
         * Blocks Requests Count
         *
         * @since 2.1.0
         * @return void
         */
        public function ajax_sites_requests_count()
        {
        }
        /** 
         * Import Sites
         *
         * @since 2.1.0
         * @return void
         */
        public function ajax_import_sites()
        {
        }
        /**
         * Enable force sync
         *
         * Sets the force sync flag to 'yes'.
         *
         * @since 2.4.16
         * @return void
         */
        public static function enable_force_sync()
        {
        }
        /**
         * Handle Spectra plugin deletion.
         *
         * Sets the force sync flag when Spectra plugin is deleted.
         *
         * @since 2.4.16
         * @param string $plugin Path to the plugin file relative to the plugins directory.
         * @return void
         */
        public function handle_spectra_deletion($plugin)
        {
        }
        /**
         * Handle Spectra plugin activation.
         *
         * Forces a library re-sync when spectra-blocks or UAGB is activated so that
         * the spectra-blocks-ver parameter reflects the now-active plugin combination.
         * upgrader_process_complete fires before the plugin is active so its sync
         * uses stale version negotiation; this hook corrects that.
         *
         * @since 2.4.29
         *
         * @param string $plugin Path to the plugin file relative to the plugins directory.
         * @return void
         */
        public function handle_spectra_activation($plugin)
        {
        }
        /**
         * Handle Spectra plugin options add.
         *
         * Sets the force sync flag when Spectra plugin options are added for the first time.
         *
         * @since 2.4.18
         * @return void
         */
        public function handle_spectra_options_add()
        {
        }
        /**
         * Handle Spectra plugin options update.
         *
         * Sets the force sync flag when Spectra plugin options are updated.
         *
         * @since 2.4.18
         * @param mixed $old_value The old value of the option.
         * @param mixed $new_value The new value of the option.
         * @return void
         */
        public function handle_spectra_options_update($old_value, $new_value)
        {
        }
        /**
         * Handle Spectra plugin installation or update.
         *
         * Sets the force sync flag when Spectra plugin is installed or updated.
         *
         * @since 2.4.16
         * @param \WP_Upgrader         $upgrader_object WP_Upgrader instance.
         * @param array<string, mixed> $options         Array of bulk item update data.
         * @return void
         */
        public function handle_spectra_install_update($upgrader_object, $options)
        {
        }
    }
    /**
     * Images
     *
     * @since {{since}}
     */
    class Images
    {
        use \Gutenberg_Templates\Inc\Traits\Instance;
        /**
         * Images
         *
         * @since {{since}}
         * @var array<string, array<mixed>> $images
         */
        public static $images = array('landscape' => array(), 'portrait' => array(), 'square' => array());
        /**
         * Image index
         *
         * @since {{since}}
         * @var (int) image_index
         */
        public static $image_index = 0;
        /**
         * Get Images
         *
         * @return array<string|int, mixed> Array of images.
         * @since {{since}}
         */
        public function get_images()
        {
        }
        /**
         * Get Image for the specified index and orientation
         *
         * @param int $index Index of the image.
         * @return array<int, mixed>|boolean Array of images or false.
         * @since {{since}}
         */
        public function get_image($index = 0)
        {
        }
        /**
         * Download image from URL.
         *
         * @param array<int|string, mixed> $image Image data.
         * @return int|\WP_Error Image ID or WP_Error.
         * @since {{since}}
         */
        public function download_image($image)
        {
        }
        /**
         * Create the image and return the new media upload id.
         *
         * @param String $url URL to the image.
         * @param String $name Name to the image.
         * @param String $photo_id Photo ID to the image.
         * @param String $description Description to the image.
         * @return mixed
         * @see http://codex.wordpress.org/Function_Reference/wp_insert_attachment#Example
         */
        public function create_image_from_url($url, $name, $photo_id, $description)
        {
        }
    }
}
namespace Gutenberg_Templates\Inc\Traits {
    /**
     * Trait Instance.
     */
    class Helper
    {
        use \Gutenberg_Templates\Inc\Traits\Instance;
        /**
         * Log
         *
         * @param string $message   Log message.
         * @return void
         */
        public function ast_block_templates_log($message = '')
        {
        }
        /**
         * Doing WP CLI
         *
         * @return bool
         */
        public function ast_block_templates_doing_wp_cli()
        {
        }
        /**
         * Get an instance of WP_Filesystem_Direct.
         *
         * @since 1.0.0
         * @return object A WP_Filesystem_Direct instance.
         */
        public function ast_block_templates_get_filesystem()
        {
        }
        /**
         * Check for the valid image
         *
         * @param string $link  The Image link.
         *
         * @since 1.0.0
         * @return bool
         */
        public function ast_block_templates_is_valid_image($link = '')
        {
        }
        /**
         * Encrypt data using base64.
         *
         * @param string $input The input string which needs to be encrypted.
         * @since 1.0.0
         * @return string The encrypted string.
         */
        public static function encrypt($input)
        {
        }
        /**
         * Decrypt data using base64.
         *
         * @param string $input The input string which needs to be decrypted.
         * @since 1.0.0
         * @return string The decrypted string.
         */
        public static function decrypt($input)
        {
        }
        /**
         * Get an option from the database.
         *
         * @param string  $key              The option key.
         * @param mixed   $default          The option default value if option is not available.
         * @param boolean $network_override Whether to allow the network admin setting to be overridden on subsites.
         * @since 1.0.0
         * @return mixed  The option value.
         */
        public static function get_admin_settings_option($key, $default = false, $network_override = false)
        {
        }
        /**
         * Get the Zip AI Settings.
         *
         * If used with a key, it will return that specific setting.
         * If used without a key, it will return the entire settings array.
         *
         * @param string $key The setting key.
         * @param mixed  $default The default value to return if the setting is not found.
         * @since 1.0.0
         * @return mixed|array The setting value, or the default.
         */
        public static function get_setting($key = '', $default = array())
        {
        }
        /**
         * Delete an option from the database for.
         *
         * @param string  $key              The option key.
         * @param boolean $network_override Whether to allow the network admin setting to be overridden on subsites.
         * @since 1.0.0
         * @return void
         */
        public static function delete_admin_settings_option($key, $network_override = false)
        {
        }
        /**
         * This helper function returns credit details.
         *
         * @since 1.0.0
         * @return array<string, integer>
         */
        public static function get_credit_details()
        {
        }
        /**
         * Get the Zip AI Response from the Zip Credit Server.
         *
         * @param string $endpoint The endpoint to get the response from.
         * @since 1.0.0
         * @return mixed The Zip AI Response.
         */
        public static function get_credit_server_response($endpoint)
        {
        }
        /**
         * Get the decrypted auth token.
         *
         * @since 1.0.0
         * @return string The decrypted auth token.
         */
        public static function get_decrypted_auth_token()
        {
        }
        /**
         * Get default AI categories.
         *
         * @since 2.0.0
         *
         * @return array<string, string>
         */
        public function get_default_ai_categories()
        {
        }
        /**
         * Is debug mode enabled
         * 
         * @since 2.0.0
         * @return boolean
         */
        public function is_debug_mode()
        {
        }
        /**
         * Create files/directories.
         * 
         * @param array<int, array<string, string>> $files The files array.
         * 
         * @return void
         */
        public function create_files($files = array())
        {
        }
        /**
         * Create file/directories.
         * 
         * @param array<string, string> $file The file array.
         * 
         * @return void
         */
        public function create_single_file($file)
        {
        }
        /**
         * Update files/directories.
         * 
         * @param string     $file_name The file path.
         * @param string|int $file_content The file content.
         * 
         * @return void
         */
        public function update_json_file($file_name, $file_content)
        {
        }
        /**
         * Get files/directories.
         * 
         * @param string $file_name The file name.
         * @param bool   $get_array Is The file content array.
         * 
         * @return mixed
         */
        public function get_json_file_content($file_name, $get_array = true)
        {
        }
        /**
         * Get block categories.
         * 
         * @return array<int, array<string, string>>
         */
        public function get_block_template_category()
        {
        }
        /**
         * Get customiser CSS.
         * 
         * @return string
         */
        public function get_block_template_customiser_css()
        {
        }
        /**
         * Get global styles for Spectra v3.
         *
         * @return string
         */
        public function get_block_template_global_styles()
        {
        }
        /**
         * Get last exported checksum.
         * 
         * @return string
         */
        public function get_last_exported_checksum()
        {
        }
        /**
         * Get site request count.
         * 
         * @return int
         */
        public function get_site_request()
        {
        }
        /**
         * Get block request count.
         * 
         * @return int
         */
        public function get_block_templates_requests()
        {
        }
        /**
         * Get blocks page wise.
         * 
         * @param int $page The page number.
         * @return  array<int, mixed>
         */
        public function get_blocks_templates($page = 0)
        {
        }
        /**
         * Get sites page wise.
         * 
         * @param int $page The page number.
         * @return array<int, mixed>
         */
        public function get_sites_templates($page = 0)
        {
        }
        /**
         * Get Images Engines
         *
         * @since 2.4.11
         * @return array<string> Image Engines.
         */
        public static function get_images_engines()
        {
        }
    }
}
namespace Gutenberg_Templates\Inc\Classes {
    /**
     * Ast BlockTemplates
     */
    class Ast_Block_Templates_Notices
    {
        use \Gutenberg_Templates\Inc\Traits\Instance;
        /**
         * Check file read/write permissions and process.
         *
         * @since 2.2.4
         * @return bool
         */
        public function has_file_read_write()
        {
        }
        /**
         * File Permission Notice
         *
         * @since 2.0.0
         * @return void
         */
        public function file_permission_notice()
        {
        }
        /**
         * Get an instance of WP_Filesystem_Direct.
         *
         * @since 2.0.0
         * @return mixed A WP_Filesystem_Direct instance.
         */
        public static function get_filesystem()
        {
        }
        /**
         * Log file directory
         *
         * @since 2.2.4
         * @param  string $dir_name Directory Name.
         * @return array<string, string>   Uploads directory array.
         */
        public static function log_dir($dir_name = 'ast-block-templates-json')
        {
        }
    }
    /**
     * AST Block Templates ZipWP API
     *
     * @since {{since}}
     */
    class Ast_Block_Templates_Zipwp_Api
    {
        use \Gutenberg_Templates\Inc\Traits\Instance;
        /**
         * Constructor
         *
         * @since 2.1.13
         */
        public function __construct()
        {
        }
        /**
         * Get api domain
         *
         * @since 2.1.13
         * @return string
         */
        public function get_api_domain()
        {
        }
        /**
         * Get API headers
         *
         * @since 2.1.13
         * @return array<string, string>
         */
        public function get_api_headers()
        {
        }
        /**
         * Get api namespace
         *
         * @since 2.1.13
         * @return string
         */
        public function get_api_namespace()
        {
        }
        /**
         * Check whether a given request has permission to read notes.
         *
         * @param  object $request WP_REST_Request Full details about the request.
         * @return object|boolean
         */
        public function get_item_permissions_check($request)
        {
        }
        /**
         * Register route
         *
         * @since 2.1.13
         * @return void
         */
        public function register_route()
        {
        }
        /**
         * Search business category.
         *
         * @param \WP_REST_Request $request Full details about the request.
         * @return mixed
         */
        public function search_business_category($request)
        {
        }
        /**
         * Get ZipWP Languages list.
         *
         * @param \WP_REST_Request $request Full details about the request.
         * @return mixed
         */
        public function get_site_languages($request)
        {
        }
    }
}
namespace Gutenberg_Templates\Inc\Content {
    /**
     * Sync Library
     *
     * @since 1.0.0
     */
    class Ai_Content
    {
        use \Gutenberg_Templates\Inc\Traits\Instance;
        /**
         * Constructor
         *
         * @since 1.0.0
         */
        public function __construct()
        {
        }
        /**
         * Debug mode for testing.
         *
         * @return void
         */
        public function footer()
        {
        }
        /**
         * Define Required Constants
         *
         * @since 2.0.0
         * @return void
         */
        public function define_required_constants()
        {
        }
        /**
         * Reset Business details
         *
         * @since 2.0.0
         * @return void
         */
        public function reset_business_details()
        {
        }
        /**
         * Generate AI based blocks.
         *
         * @since 2.0.0
         * @return void
         */
        public function generate_ai_content()
        {
        }
        /**
         * Get Club of Category
         *
         * @since 2.0.0
         * @param array<int, array<string, mixed>> $categories Categories.
         * @param array<string, mixed>             $post_data Post Data.
         *
         * @return string
         */
        public function get_club_of_category($categories, $post_data)
        {
        }
        /**
         * Get Matching Categories
         *
         * @since 2.0.0
         * @param array<int, array<string, mixed>> $categories Categories.
         * @param string                           $club_categories Club Categories.
         *
         * @return array<int, array<string, mixed>>
         */
        public function get_matching_categories($categories, $club_categories)
        {
        }
        /**
         * Get AI Content
         *
         * @since 2.0.0
         * @param array<string, mixed> $post_data Post Data.
         * @param string               $category_content Categories content.
         *
         * @return void
         */
        public function get_ai_content($post_data, $category_content)
        {
        }
        /**
         * Save user details
         *
         * @since 2.0.0
         * @return void
         */
        public function save_user_details()
        {
        }
        /**
         * Download Selected Images
         *
         * @since 2.0.17
         *
         * @return void
         */
        public function download_selected_images()
        {
        }
    }
}
namespace Gutenberg_Templates\Inc\Api {
    /**
     * Api_Base
     *
     * @since 0.0.1
     */
    abstract class Api_Base extends \WP_REST_Controller
    {
        /**
         * Endpoint namespace.
         *
         * @var string
         */
        protected $namespace = 'gutenberg-templates/v1';
        /**
         * Constructor
         *
         * @since 0.0.1
         */
        public function __construct()
        {
        }
        /**
         * Get API namespace.
         *
         * @since 0.0.1
         * @return string
         */
        public function get_api_namespace()
        {
        }
    }
    /**
     * Progress
     *
     * @since 0.0.1
     */
    class Sites extends \Gutenberg_Templates\Inc\Api\Api_Base
    {
        use \Gutenberg_Templates\Inc\Traits\Instance;
        /**
         * Route base.
         *
         * @var string
         */
        protected $rest_base = '/sites/';
        /**
         * Init Hooks.
         *
         * @since 0.0.1
         * @return void
         */
        public function register_routes()
        {
        }
        /**
         * Check whether a given request has permission to read notes.
         *
         * @param  object $request WP_REST_Request Full details about the request.
         * @return object|boolean
         */
        public function get_item_permissions_check($request)
        {
        }
        /**
         * Save Prompts.
         *
         * @param \WP_REST_Request $request Full details about the request.
         * @return \WP_REST_Response
         */
        public function get_sites($request)
        {
        }
    }
    /**
     * Progress
     *
     * @since 0.0.1
     */
    class Blocks extends \Gutenberg_Templates\Inc\Api\Api_Base
    {
        use \Gutenberg_Templates\Inc\Traits\Instance;
        /**
         * Route base.
         *
         * @var string
         */
        protected $rest_base = '/blocks/';
        /**
         * Init Hooks.
         *
         * @since 0.0.1
         * @return void
         */
        public function register_routes()
        {
        }
        /**
         * Check whether a given request has permission to read notes.
         *
         * @param  object $request WP_REST_Request Full details about the request.
         * @return object|boolean
         */
        public function get_item_permissions_check($request)
        {
        }
        /**
         * Save Prompts.
         *
         * @param \WP_REST_Request $request Full details about the request.
         * @return \WP_REST_Response
         */
        public function get_blocks($request)
        {
        }
    }
    /**
     * Progress
     *
     * @since 2.0.0
     */
    class Keywords extends \Gutenberg_Templates\Inc\Api\Api_Base
    {
        use \Gutenberg_Templates\Inc\Traits\Instance;
        /**
         * Route base.
         *
         * @var string
         */
        protected $rest_base = '/keywords/';
        /**
         * Init Hooks.
         *
         * @since 2.0.0
         * @return void
         */
        public function register_routes()
        {
        }
        /**
         * Check whether a given request has permission to read notes.
         *
         * @param  object $request WP_REST_Request Full details about the request.
         * @return object|boolean
         */
        public function get_item_permissions_check($request)
        {
        }
        /**
         * Save Prompts.
         *
         * @param \WP_REST_Request $request Full details about the request.
         * @return mixed
         */
        public function get($request)
        {
        }
    }
    /**
     * Progress
     *
     * @since 0.0.1
     */
    class Category extends \Gutenberg_Templates\Inc\Api\Api_Base
    {
        use \Gutenberg_Templates\Inc\Traits\Instance;
        /**
         * Route base.
         *
         * @var string
         */
        protected $rest_base = '/categories/';
        /**
         * Init Hooks.
         *
         * @since 0.0.1
         * @return void
         */
        public function register_routes()
        {
        }
        /**
         * Check whether a given request has permission to read notes.
         *
         * @param  object $request WP_REST_Request Full details about the request.
         * @return object|boolean
         */
        public function get_item_permissions_check($request)
        {
        }
        /**
         * Save Prompts.
         *
         * @param \WP_REST_Request $request Full details about the request.
         * @return \WP_REST_Response
         */
        public function get($request)
        {
        }
    }
    /**
     * Do It Later
     *
     * @since 2.0.0
     */
    class Do_It_Later extends \Gutenberg_Templates\Inc\Api\Api_Base
    {
        use \Gutenberg_Templates\Inc\Traits\Instance;
        /**
         * Route base.
         *
         * @var string
         */
        protected $rest_base = '/do-it-later/';
        /**
         * Init Hooks.
         *
         * @since 2.0.0
         * @return void
         */
        public function register_routes()
        {
        }
        /**
         * Check whether a given request has permission to read notes.
         *
         * @param  object $request WP_REST_Request Full details about the request.
         * @return object|boolean
         */
        public function get_item_permissions_check($request)
        {
        }
        /**
         * Save Prompts.
         *
         * @return \WP_REST_Response
         */
        public function get()
        {
        }
    }
    /**
     * Settings
     *
     * @since 2.0.0
     */
    class Settings extends \Gutenberg_Templates\Inc\Api\Api_Base
    {
        use \Gutenberg_Templates\Inc\Traits\Instance;
        /**
         * Route base.
         *
         * @var string
         */
        protected $rest_base = '/settings/';
        /**
         * Init Hooks.
         *
         * @since 2.0.0
         * @return void
         */
        public function register_routes()
        {
        }
        /**
         * Check whether a given request has permission to read notes.
         *
         * @param  object $request WP_REST_Request Full details about the request.
         * @return object|boolean
         */
        public function get_item_permissions_check($request)
        {
        }
        /**
         * Get Settings.
         *
         * @param \WP_REST_Request $request Full details about the request.
         * @return mixed
         */
        public function get($request)
        {
        }
        /**
         * Save Settings.
         *
         * @param \WP_REST_Request $request Full details about the request.
         * @return mixed
         */
        public function save($request)
        {
        }
    }
    /**
     * Progress
     *
     * @since 0.0.1
     */
    class Initialize_Setup extends \Gutenberg_Templates\Inc\Api\Api_Base
    {
        use \Gutenberg_Templates\Inc\Traits\Instance;
        /**
         * Route base.
         *
         * @var string
         */
        protected $rest_base = '/setup/';
        /**
         * Init Hooks.
         *
         * @since 0.0.1
         * @return void
         */
        public function register_routes()
        {
        }
        /**
         * Check whether a given request has permission to read notes.
         *
         * @param  object $request WP_REST_Request Full details about the request.
         * @return object|boolean
         */
        public function get_item_permissions_check($request)
        {
        }
        /**
         * Save Prompts.
         *
         * @param \WP_REST_Request $request Full details about the request.
         * @return \WP_REST_Response
         */
        public function setup_templates($request)
        {
        }
    }
    /**
     * Pages generate content confirmation.
     *
     * @since 0.0.1
     */
    class RevokeAccess extends \Gutenberg_Templates\Inc\Api\Api_Base
    {
        use \Gutenberg_Templates\Inc\Traits\Instance;
        /**
         * Route base.
         *
         * @var string
         */
        protected $rest_base = '/revoke-access/';
        /**
         * Init Hooks.
         *
         * @since 0.0.1
         * @return void
         */
        public function register_routes()
        {
        }
        /**
         * Check whether a given request has permission to read notes.
         *
         * @param  object $request WP_REST_Request Full details about the request.
         * @return object|boolean
         */
        public function get_item_permissions_check($request)
        {
        }
        /**
         * Revoke access.
         *
         * @param \WP_REST_Request $request Full details about the request.
         * @return WP_REST_Response|WP_Error
         */
        public function set($request)
        {
        }
    }
    /**
     * License API Class
     */
    class License extends \Gutenberg_Templates\Inc\Api\Api_Base
    {
        /**
         * The namespace of this controller's route.
         *
         * @var string
         */
        public $namespace;
        /**
         * The base of this controller's route.
         *
         * @var string
         */
        public $rest_base;
        /**
         * Initiator
         *
         * @return self The single instance of the class.
         */
        public static function instance()
        {
        }
        /**
         * Constructor.
         *
         * @return void
         */
        public function __construct()
        {
        }
        /**
         * Make sure 'astra-pro-sites' plugin is initialized in the products array.
         *
         * @param array<string, mixed> $products Products.
         * @return array<string, mixed> $products Products.
         */
        public static function bsf_maybe_update_products_option($products)
        {
        }
        /**
         * Register the routes for the objects of the controller.
         *
         * @return void
         */
        public function register_routes()
        {
        }
        /**
         * Check if a given request has access to activate license.
         *
         * @param  \WP_REST_Request $request Full details about the request.
         * @return \WP_Error|boolean
         */
        public function get_items_permissions_check($request)
        {
        }
        /**
         * BSF get API site.
         *
         * @param bool $prefer_unsecure Prefer unsecure.
         * @param bool $is_rest_api use rest api base URL.
         * @return string $bsf_api_site.
         */
        public static function get_api_site($prefer_unsecure = false, $is_rest_api = false)
        {
        }
        /**
         * BSF get API URL.
         *
         * @since 2.4.21 Updated to use a filterable ajax path instead of hardcoding wp-admin/admin-ajax.php.
         *
         * @param bool $prefer_unsecure Prefer unsecure.
         * @return string $bsf_api_url.
         */
        public static function get_api_url($prefer_unsecure = false)
        {
        }
        /**
         * Activate License Key.
         *
         * @param \WP_REST_Request $request Full details about the request.
         * @return \WP_Error|\WP_REST_Response Rest Response with access key.
         */
        public function activate_license($request)
        {
        }
        /**
         *  BSF Activate license processing.
         *
         * @param array<string, mixed> $post_data Post data.
         * @return array<string, mixed> $res.
         */
        public function bsf_process_license_activation($post_data)
        {
        }
        /**
         *  Is EDD.
         *
         * @param string $license_key License key.
         * @return bool
         */
        public static function is_edd($license_key)
        {
        }
        /**
         *  BSF Update product Info.
         *
         * @param string               $product_id Product ID.
         * @param array<string, mixed> $args Arguments.
         * @return void
         */
        public function bsf_update_product_info($product_id, $args)
        {
        }
        /**
         *  BSF is active license.
         *
         * @param string $product_id Product ID.
         * @return bool
         */
        public static function bsf_is_active_license($product_id)
        {
        }
        /**
         * Get BSF all products.
         *
         * @param  bool $skip_plugins Skip plugins.
         * @param  bool $skip_themes Skip themes.
         * @param  bool $skip_bundled Skip bundled.
         *
         * @return array<string, mixed> $all_products.
         */
        public static function brainstorm_get_all_products($skip_plugins = false, $skip_themes = false, $skip_bundled = false)
        {
        }
        /**
         * Get brainstorm product.
         *
         * @param string $product_id Product ID.
         * @return array<string, mixed> $product.
         */
        public static function get_brainstorm_product($product_id = '')
        {
        }
        /**
         *  Is product free.
         *
         * @param string $product_id Product ID.
         * @return bool
         */
        public static function is_product_free($product_id)
        {
        }
        /**
         *  Get product info.
         *
         * @param string $product_id Product ID.
         * @param string $key Key.
         * @return mixed $all_products[ $product_id ][ $key ].
         */
        public static function bsf_get_product_info($product_id, $key)
        {
        }
        /**
         * Check if product is bundled.
         *
         * @param string $bsf_product Product.
         * @param string $search_by   Search By.
         * @return array<int, string> $product_parent.
         */
        public static function bsf_is_product_bundled($bsf_product, $search_by = 'id')
        {
        }
        /**
         *  Get remote license status.
         *
         * @param string $purchase_key Purchase Key.
         * @param string $product_id Product ID.
         * @return bool
         */
        public static function get_remote_license_status($purchase_key, $product_id)
        {
        }
    }
    /**
     * Progress
     *
     * @since 2.0.0
     */
    class Description extends \Gutenberg_Templates\Inc\Api\Api_Base
    {
        use \Gutenberg_Templates\Inc\Traits\Instance;
        /**
         * Route base.
         *
         * @var string
         */
        protected $rest_base = '/description/';
        /**
         * Init Hooks.
         *
         * @since 2.0.0
         * @return void
         */
        public function register_routes()
        {
        }
        /**
         * Check whether a given request has permission to read notes.
         *
         * @param  object $request WP_REST_Request Full details about the request.
         * @return object|boolean
         */
        public function get_item_permissions_check($request)
        {
        }
        /**
         * Save Prompts.
         *
         * @param \WP_REST_Request $request Full details about the request.
         * @return mixed
         */
        public function get($request)
        {
        }
    }
    /**
     * Progress
     *
     * @since 2.0.16
     */
    class PageDescription extends \Gutenberg_Templates\Inc\Api\Api_Base
    {
        use \Gutenberg_Templates\Inc\Traits\Instance;
        /**
         * Route base.
         *
         * @var string
         */
        protected $rest_base = '/page-description/';
        /**
         * Init Hooks.
         *
         * @since 2.0.16
         * @return void
         */
        public function register_routes()
        {
        }
        /**
         * Check whether a given request has permission to read notes.
         *
         * @param  object $request WP_REST_Request Full details about the request.
         * @return object|boolean
         */
        public function get_item_permissions_check($request)
        {
        }
        /**
         * Save Prompts.
         *
         * @param \WP_REST_Request $request Full details about the request.
         * @return mixed
         */
        public function get($request)
        {
        }
    }
    /**
     * Progress
     *
     * @since 2.0.0
     */
    class Images extends \Gutenberg_Templates\Inc\Api\Api_Base
    {
        use \Gutenberg_Templates\Inc\Traits\Instance;
        /**
         * Route base.
         *
         * @var string
         */
        protected $rest_base = '/images/';
        /**
         * Init Hooks.
         *
         * @since 2.0.0
         * @return void
         */
        public function register_routes()
        {
        }
        /**
         * Check whether a given request has permission to read notes.
         *
         * @param  object $request WP_REST_Request Full details about the request.
         * @return object|boolean
         */
        public function get_item_permissions_check($request)
        {
        }
        /**
         * Save Prompts.
         *
         * @param \WP_REST_Request $request Full details about the request.
         * @return mixed
         */
        public function get($request)
        {
        }
    }
    /**
     * Favorite
     *
     * @since 2.0.0
     */
    class Favorite extends \Gutenberg_Templates\Inc\Api\Api_Base
    {
        use \Gutenberg_Templates\Inc\Traits\Instance;
        /**
         * Route base.
         *
         * @var string
         */
        protected $rest_base = '/favorite/';
        /**
         * Init Hooks.
         *
         * @since 2.0.0
         * @return void
         */
        public function register_routes()
        {
        }
        /**
         * Check whether a given request has permission to read notes.
         *
         * @param  object $request WP_REST_Request Full details about the request.
         * @return object|boolean
         */
        public function get_item_permissions_check($request)
        {
        }
        /**
         * Get Favorite.
         *
         * @param \WP_REST_Request $request Full details about the request.
         * @return mixed
         */
        public function get($request)
        {
        }
        /**
         * Save Favorite.
         *
         * @param \WP_REST_Request $request Full details about the request.
         * @return mixed
         */
        public function save($request)
        {
        }
    }
    /**
     * Pages generate content confirmation.
     *
     * @since 0.0.1
     */
    class Pages extends \Gutenberg_Templates\Inc\Api\Api_Base
    {
        use \Gutenberg_Templates\Inc\Traits\Instance;
        /**
         * Route base.
         *
         * @var string
         */
        protected $rest_base = '/pages-onboarding/';
        /**
         * Init Hooks.
         *
         * @since 0.0.1
         * @return void
         */
        public function register_routes()
        {
        }
        /**
         * Check whether a given request has permission to read notes.
         *
         * @param  object $request WP_REST_Request Full details about the request.
         * @return object|boolean
         */
        public function get_item_permissions_check($request)
        {
        }
        /**
         * Save the pages onboarding flag status.
         *
         * @return WP_REST_Response
         */
        public function set(): \WP_REST_Response
        {
        }
    }
    /**
     * Api_Base
     *
     * @since 0.0.1
     */
    class Api_Init
    {
        use \Gutenberg_Templates\Inc\Traits\Instance;
        /**
         * Controller object.
         *
         * @var object class.
         */
        public $controller = null;
        /**
         * Constructor
         *
         * @since 0.0.1
         */
        public function __construct()
        {
        }
        /**
         * Register API routes.
         *
         * @since 0.0.1
         * @return void
         */
        public function register_routes()
        {
        }
    }
}
namespace Gutenberg_Templates\Inc\Block {
    /**
     * Spectra_AI_Block
     *
     * @since 2.0.16
     */
    class Spectra_AI_Block
    {
        /**
         * Constructor
         *
         * @since 2.0.16
         */
        public function __construct()
        {
        }
        /**
         * Get Instance
         *
         * @since 2.0.16
         *
         * @return object Class object.
         */
        public static function get_instance()
        {
        }
        /**
         * Register Block Type
         *
         * @since 2.0.16
         *
         * @return void
         */
        public function register_block_type()
        {
        }
        /**
         * Add the block on new page creation.
         *
         * @since 2.0.16
         *
         * @param array<string, string> $paths   Array of preload paths.
         * @param mixed                 $context Context of the request.
         *
         * @return array<string, string>
         */
        public static function update_new_post($paths, $context)
        {
        }
        /**
         * Remove broken p tags.
         *
         * @since 2.0.16
         *
         * @param string $content Post content.
         *
         * @return string
         */
        public static function remove_broken_p_tags($content)
        {
        }
    }
}
namespace Gutenberg_Templates {
    /**
     * Ast_Block_Plugin_Loader
     *
     * @since 2.0.0
     */
    class Ast_Block_Plugin_Loader
    {
        /**
         * Initiator
         *
         * @since 2.0.0
         * @return object initialized object of class.
         */
        public static function get_instance()
        {
        }
        /**
         * Autoload classes.
         *
         * @param string $class class name.
         *
         * @return void
         */
        public function autoload($class)
        {
        }
        /**
         * Constructor
         *
         * @since 2.0.0
         */
        public function __construct()
        {
        }
        /**
         * Loads plugin classes as per requirement.
         *
         * @return void
         * @since  2.0.0
         */
        public function load_classes()
        {
        }
        /**
         * Load Plugin Text Domain.
         *
         * @since 2.0.0
         * @return void
         */
        public function load_textdomain()
        {
        }
    }
}
namespace {
    /**
     * Admin
     */
    class Ast_Block_Templates
    {
        /**
         * Get Instance
         *
         * @since 2.0.0
         *
         * @return object Class object.
         */
        public static function get_instance()
        {
        }
    }
}
/**
 * Init
 *
 * @since 1.0.0
 * @package Ast Block Templates
 */
namespace Gutenberg_Templates\Inc\Importer {
    const FALLBACK_TEXT = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
}
namespace {
    \define('AST_BLOCK_TEMPLATES_LIBRARY_URL', \trailingslashit(\apply_filters('ast_block_templates_library_url', 'https://websitedemos.net/')));
    \define('AST_BLOCK_TEMPLATES_VER', '2.4.30');
    \define('AST_BLOCK_TEMPLATES_FILE', __FILE__);
    \define('AST_BLOCK_TEMPLATES_BASE', \plugin_basename(\AST_BLOCK_TEMPLATES_FILE));
    \define('AST_BLOCK_TEMPLATES_DIR', \plugin_dir_path(\AST_BLOCK_TEMPLATES_FILE));
    \define('AST_BLOCK_TEMPLATES_URI', \plugins_url('/', \AST_BLOCK_TEMPLATES_FILE));
    \define('AST_BLOCK_TEMPLATES_JSON_DIR', \trailingslashit($upload_dir['basedir']) . 'ast-block-templates-json/');
}