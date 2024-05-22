<?php

namespace {
    /**
     * Class UAGB_Twenty_Sixteen_Compatibility.
     */
    final class UAGB_Twenty_Sixteen_Compatibility
    {
        /**
         *  Initiator
         *
         * @since 2.11.4
         * @return UAGB_Twenty_Sixteen_Compatibility
         */
        public static function get_instance()
        {
        }
        /**
         * Constructor
         */
        public function __construct()
        {
        }
        /**
         * Generates stylesheet and appends in head tag.
         *
         * @since 2.11.4
         * @return void
         */
        public function generate_stylesheet()
        {
        }
    }
    /**
     * Class UAGB_Astra_Compatibility.
     */
    class UAGB_Astra_Compatibility
    {
        /**
         *  Initiator
         */
        public static function get_instance()
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
         * This functions adds UAG Google Fonts in Astra filter to load a common Google Font File for both UAG & Astra.
         *
         * @param array $astra_fonts Astra Fonts Object.
         *
         * @since 2.0.0
         * @return array
         */
        public function add_google_fonts_in_astra($astra_fonts)
        {
        }
        /**
         * Update Astra's menu priority to show after Dashboard menu.
         *
         * @param int $menu_priority top level menu priority.
         * @since 2.3.0
         */
        public function update_admin_menu_position($menu_priority)
        {
        }
    }
    /**
     * Class UAGB_Twenty_Twenty_Two_Compatibility.
     */
    final class UAGB_Twenty_Twenty_Two_Compatibility
    {
        /**
         *  Initiator
         */
        public static function get_instance()
        {
        }
        /**
         * Constructor
         */
        public function __construct()
        {
        }
        /**
         * Generates stylesheet and appends in head tag.
         *
         * @since 2.0
         */
        public function generate_stylesheet()
        {
        }
    }
    /**
     * Class UAGB_Table_Of_Content.
     */
    class UAGB_Table_Of_Content
    {
        /**
         *  Initiator
         *
         * @since 1.23.0
         */
        public static function get_instance()
        {
        }
        /**
         * Constructor
         */
        public function __construct()
        {
        }
        /**
         * Update Toc tile if old title is set.
         *
         * @access public
         *
         * @since 1.23.0
         * @param array $parsed_block Parsed Block.
         */
        public function update_toc_title($parsed_block)
        {
        }
        /**
         * Delete toc meta.
         *
         * @access public
         *
         * @since 1.23.0
         * @param int     $post_id Post ID.
         * @param object  $post Post object.
         * @param boolean $update Whether this is an existing post being updated.
         */
        public function delete_toc_meta($post_id, $post, $update)
        {
        }
        /**
         * Extracts heading content, id, and level from the given post content.
         *
         * @since 1.23.0
         * @access public
         *
         * @param string $content       The post content to extract headings from.
         *
         * @return array The list of headings.
         */
        public function table_of_contents_get_headings_from_content($content)
        {
        }
        /**
         * Clean up heading content.
         *
         * @since 1.23.0
         * @access public
         *
         * @param string $string The post content to extract headings from.
         *
         * @return string $string.
         */
        public function clean($string)
        {
        }
        /**
         * Converts a flat list of heading parameters to a hierarchical nested list
         * based on each header's immediate parent's level.
         *
         * @since 1.23.0
         * @access public
         *
         * @param array $heading_list Flat list of heading parameters to nest.
         * @param int   $index        The current list index.
         *
         * @return array A hierarchical nested list of heading parameters.
         */
        public function table_of_contents_linear_to_nested_heading_list($heading_list, $index = 0)
        {
        }
        /**
         * Renders the heading list of the UAGB Table Of Contents block.
         *
         * @since 1.23.0
         * @access public
         *
         * @param array  $nested_heading_list Nested list of heading data.
         * @param string $page_url URL of the page the block belongs to.
         * @param array  $attributes array of attributes.
         *
         * @return string The heading list rendered as HTML.
         */
        public function table_of_contents_render_list($nested_heading_list, $page_url, $attributes)
        {
        }
        /**
         * Filters the Headings according to Mapping Headers Array.
         *
         * @since 1.24.0
         * @access public
         *
         * @param  array $headings Headings.
         * @param  array $mapping_headers_array    Mapping Headers.
         *
         * @return array FIltered Headings Array..
         */
        public function filter_headings_by_mapping_headers($headings, $mapping_headers_array)
        {
        }
        /**
         * Get the Reusable Headings Array.
         *
         * @since 2.0.14
         * @access public
         *
         * @param  array $blocks_array Block Array.
         *
         * @return array $final_reusable_array Heading Array.
         */
        public function toc_recursive_reusable_heading($blocks_array)
        {
        }
        /**
         * Renders the UAGB Table Of Contents block.
         *
         * @since 1.23.0
         * @access public
         *
         * @param  array    $attributes Block attributes.
         * @param  string   $content    Block default content.
         * @param  WP_Block $block      Block instance.
         *
         * @return string Rendered block HTML.
         */
        public function render_table_of_contents($attributes, $content, $block)
        {
        }
        /**
         * Registers the UAGB Table Of Contents block.
         *
         * @since 1.23.0
         * @access public
         *
         * @uses render_table_of_contents()
         *
         * @throws WP_Error An exception parsing the block definition.
         */
        public function register_table_of_contents()
        {
        }
    }
    /**
     * Class UAGB_CF7_Styler.
     */
    class UAGB_CF7_Styler
    {
        /**
         *  Initiator
         */
        public static function get_instance()
        {
        }
        /**
         * Constructor
         */
        public function __construct()
        {
        }
        /**
         * Registers the `core/latest-posts` block on server.
         *
         * @since 0.0.1
         */
        public function register_blocks()
        {
        }
        /**
         * Render CF7 HTML.
         *
         * @param array $attributes Array of block attributes.
         *
         * @since 1.10.0
         */
        public function render_html($attributes)
        {
        }
    }
    /**
     * Class UAGB_Post_Timeline.
     */
    class UAGB_Post_Timeline
    {
        /**
         *  Initiator
         *
         * @since 1.18.1
         */
        public static function get_instance()
        {
        }
        /**
         * Constructor
         */
        public function __construct()
        {
        }
        /**
         * Registers the `core/latest-posts` block on server.
         *
         * @since 0.0.1
         */
        public function register_blocks()
        {
        }
        /**
         * Renders the post grid block on server.
         *
         * @param array $attributes Array of block attributes.
         *
         * @since 0.0.1
         */
        public function post_timeline_callback($attributes)
        {
        }
        /**
         * Renders the post timeline block on server.
         *
         * @param array  $attributes Array of block attributes.
         *
         * @param object $query WP_Query object.
         * @since 0.0.1
         */
        public function get_post_html($attributes, $query)
        {
        }
        /**
         * Renders the post timeline single block.
         *
         * @param array  $attributes Array of block attributes.
         * @param int    $index Index value of current post.
         * @param object $post Current Post object.
         *
         * @since 0.0.1
         */
        public function render_single($attributes, $index, $post)
        {
        }
        /**
         * Function Name: get_icon.
         *
         * @param  array $attributes attribute array.
         */
        public function get_icon($attributes)
        {
        }
        /**
         * Function Name: get_image.
         *
         * @param  array $attributes attribute array.
         */
        public function get_image($attributes)
        {
        }
        /**
         * Function Name: get_date.
         *
         * @param  array  $attributes attribute array.
         * @param  string $classname attribute string.
         */
        public function get_date($attributes, $classname)
        {
        }
        /**
         * Function Name: get_title.
         *
         * @param  array $attributes attribute array.
         */
        public function get_title($attributes)
        {
        }
        /**
         * Function Name: get_cta.
         *
         * @param  array $attributes attribute array.
         */
        public function get_cta($attributes)
        {
        }
        /**
         * Function get_author.
         *
         * @param  array $attributes attribute.
         * @param  array $author attribute.
         */
        public function get_author($attributes, $author)
        {
        }
        /**
         * Function get_excerpt.
         *
         * @param  array $attributes attribute.
         */
        public function get_excerpt($attributes)
        {
        }
        /**
         * Function Name: get_classes .
         *
         * @param  array $attributes array of setting.
         * @return string             class name.
         */
        public function get_classes($attributes)
        {
        }
        /**
         * Function Name: get_align_classes description.
         *
         * @param array  $attributes attribute array.
         * @param string $index_val  post index.
         * @return string            output HTML/String.
         */
        public function get_align_classes($attributes, $index_val)
        {
        }
        /**
         * Function Name: get_day_align_classes description.
         *
         * @param array  $attributes attribute array.
         * @param string $index_val  post index.
         * @return string            output HTML/String.
         */
        public function get_day_align_classes($attributes, $index_val)
        {
        }
    }
    /**
     * Class UAGB_Post.
     */
    class UAGB_Post
    {
        /**
         *  Initiator
         *
         * @since 1.18.1
         */
        public static function get_instance()
        {
        }
        /**
         * Constructor
         */
        public function __construct()
        {
        }
        /**
         * Registers the `core/latest-posts` block on server.
         *
         * @since 0.0.1
         */
        public function register_blocks()
        {
        }
        /**
         * Get Post common attributes for all Post Grid, Masonry and Carousel.
         *
         * @since 0.0.1
         */
        public function get_post_attributes()
        {
        }
        /**
         * Renders the post grid block on server.
         *
         * @param array $attributes Array of block attributes.
         *
         * @since 0.0.1
         */
        public function post_grid_callback($attributes)
        {
        }
        /**
         * Renders the post grid block on pagination clicks.
         *
         * @since 2.6.0
         * 
         * @return void
         */
        public function post_grid_pagination_ajax_callback()
        {
        }
        /**
         * Renders the post carousel block on server.
         *
         * @param array $attributes Array of block attributes.
         *
         * @since 0.0.1
         */
        public function post_carousel_callback($attributes)
        {
        }
        /**
         * Renders the post masonry block on server.
         *
         * @param array $attributes Array of block attributes.
         *
         * @since 0.0.1
         */
        public function post_masonry_callback($attributes)
        {
        }
        /**
         * Renders the post grid block on server.
         *
         * @param array  $attributes Array of block attributes.
         *
         * @param object $query WP_Query object.
         * @param string $layout post grid/masonry/carousel layout.
         * @since 0.0.1
         */
        public function get_post_html($attributes, $query, $layout)
        {
        }
        /**
         * Renders the post post pagination on server.
         *
         * @param object $query WP_Query object.
         * @param array  $attributes Array of block attributes.
         * @since 1.18.1
         */
        public function render_pagination($query, $attributes)
        {
        }
        /**
         * Sends the Post pagination markup to edit.js
         *
         * @since 1.14.9
         */
        public function post_pagination()
        {
        }
        /**
         * Required attribute for query.
         *
         * @param array $attributes plugin.
         * @return array of requred query attributes.
         * @since 2.0.0
         */
        public function required_attribute_for_query($attributes)
        {
        }
        /**
         * Sends the Posts to Masonry AJAX.
         *
         * @since 1.18.1
         */
        public function masonry_pagination()
        {
        }
        /**
         * Render Posts HTML for Masonry Pagination.
         *
         * @param object $query WP_Query object.
         * @param array  $attributes Array of block attributes.
         * @since 1.18.1
         */
        public function posts_articles_markup($query, $attributes)
        {
        }
        /**
         * Render layout.
         *
         * @param array $fname to get the block.
         * @param array $attr Array of block attributes.
         *
         * @since 1.20.0
         */
        public function render_layout($fname, $attr)
        {
        }
        /**
         * Render Inner blocks with a wrapper.
         *
         * @param array $attributes Array of block attributes.
         *
         * @since 2.13.3
         * @return void
         */
        public function render_innerblocks_with_wrapper($attributes)
        {
        }
        /**
         * Render Inner blocks.
         *
         * @param array $attributes Array of block attributes.
         *
         * @since 1.20.0
         * @return void
         */
        public function render_innerblocks($attributes)
        {
        }
        /**
         * Renders the post masonry related script.
         *
         * @since 0.0.1
         */
        public function add_post_dynamic_script()
        {
        }
        /**
         * Render Image HTML.
         *
         * @param array $attributes Array of block attributes.
         *
         * @since 0.0.1
         */
        public function render_image($attributes)
        {
        }
        /**
         * Render Post Title HTML.
         *
         * @param array $attributes Array of block attributes.
         *
         * @since 0.0.1
         */
        public function render_title($attributes)
        {
        }
        /**
         * Render Post Meta - Author HTML.
         *
         * @param array $attributes Array of block attributes.
         *
         * @since 1.14.0
         */
        public function render_meta_author($attributes)
        {
        }
        /**
         * Render Post Meta - Date HTML.
         *
         * @param array $attributes Array of block attributes.
         *
         * @since 1.14.0
         */
        public function render_meta_date($attributes)
        {
        }
        /**
         * Render Post Meta - Comment HTML.
         *
         * @param array $attributes Array of block attributes.
         *
         * @since 1.14.0
         */
        public function render_meta_comment($attributes)
        {
        }
        /**
         * Render Post Meta - Comment HTML.
         *
         * @param array $attributes Array of block attributes.
         *
         * @since 1.14.0
         */
        public function render_meta_taxonomy($attributes)
        {
        }
        /**
         * Render Post Meta HTML.
         *
         * @param array $attributes Array of block attributes.
         *
         * @since 0.0.1
         */
        public function render_meta($attributes)
        {
        }
        /**
         * Render Post Excerpt HTML.
         *
         * @param array $attributes Array of block attributes.
         *
         * @since 0.0.1
         */
        public function render_excerpt($attributes)
        {
        }
        /**
         * Render Post CTA button HTML.
         *
         * @param array $attributes Array of block attributes.
         *
         * @since 0.0.1
         */
        public function render_button($attributes)
        {
        }
        /**
         * Render Complete Box Link HTML.
         *
         * @param array $attributes Array of block attributes.
         *
         * @since 1.7.0
         */
        public function render_complete_box_link($attributes)
        {
        }
        /**
         * Disable canonical on Single Post.
         *
         * @param  string $redirect_url  The redirect URL.
         * @param  string $requested_url The requested URL.
         * @since  1.14.9
         * @return bool|string
         */
        public function override_canonical($redirect_url, $requested_url)
        {
        }
    }
    /**
     * Class UAGB_Forms.
     */
    class UAGB_Forms
    {
        /**
         *  Initiator
         *
         * @since 1.22.0
         */
        public static function get_instance()
        {
        }
        /**
         *
         * Constructor
         *
         * @since 1.22.0
         */
        public function __construct()
        {
        }
        /**
         * Return the blocks content for reusable block.
         *
         * @param int $reusable_ref_id reference id of reusable block.
         * @since 2.6.2
         * @return array
         */
        public function reusable_block_content_on_page($reusable_ref_id)
        {
        }
        /**
         * Generates ids for all wp template part.
         *
         * @param array $block_attr attributes array.
         * @since 2.6.2
         * @return integer|boolean
         */
        public function get_fse_template_part($block_attr)
        {
        }
        /**
         * Return array of validated attributes.
         *
         * @param array  $block_attr of Block.
         * @param string $block_id of Block.
         * @since 2.6.2
         * @return array
         */
        public function uagb_forms_block_attr_check($block_attr, $block_id)
        {
        }
        /**
         *
         * Form Process Initiated.
         *
         * @since 1.22.0
         */
        public function process_forms()
        {
        }
        /**
         * Validate emails from $to, $cc and $bcc.
         *
         * @param array $emails array.
         * @since 2.7.0
         * @return array
         */
        public function get_valid_emails($emails)
        {
        }
        /**
         *
         * Trigger Mail.
         *
         * @param object $body Email Body.
         * @param object $form_data Email Body Array.
         * @param object $args Extra Data.
         *
         * @since 1.22.0
         */
        public function send_email($body, $form_data, $args)
        {
        }
    }
    /**
     * Class UAGB_Taxonomy_List.
     *
     * @since 1.18.1
     */
    class UAGB_Taxonomy_List
    {
        /**
         *  Initiator
         *
         * @since 1.18.1
         */
        public static function get_instance()
        {
        }
        /**
         * Constructor
         *
         * @since 1.18.1
         */
        public function __construct()
        {
        }
        /**
         * Registers the `uagb/taxonomy-list` block on server.
         *
         * @since 1.18.1
         */
        public function register_blocks()
        {
        }
        /**
         * Render Grid HTML.
         *
         * @param array $attributes Array of block attributes.
         *
         * @since 1.18.1
         */
        public function grid_html($attributes)
        {
        }
        /**
         * Return link for individual category.
         *
         * @param string $slug of category.
         * @param string $taxonomy_type attributes.
         *
         * @since 2.6.0
         * @return string link using slug.
         */
        public function get_link_of_individual_categories($slug, $taxonomy_type)
        {
        }
        /**
         * Get terms hierarchical.
         *
         * @param string  $taxonomy_type of taxonomy type.
         * @param integer $parent_id of parent id.
         * @param bool    $show_empty_taxonomy of show empty taxonomy.
         * @since 2.10.4
         * @return array of terms.
         */
        public function get_terms_hierarchical($taxonomy_type, $parent_id, $show_empty_taxonomy)
        {
        }
        /**
         * Display terms recursive.
         *
         * @param object $term of terms.
         * @param string $taxonomy_type of taxonomy type.
         * @param bool   $showCount of show count.
         * @param string $seperatorStyle of separator style.
         * @param string $title_tag of title tag.
         * @param bool   $show_hierarchy of show hierarchy.
         * @since 2.10.4
         * @return void
         */
        public function display_terms_recursive($term, $taxonomy_type, $showCount, $seperatorStyle, $title_tag, $show_hierarchy)
        {
        }
        /**
         * Render List HTML.
         *
         * @param array $attributes Array of block attributes.
         *
         * @since 1.18.1
         */
        public function list_html($attributes)
        {
        }
        /**
         * Render Taxonomy List HTML.
         *
         * @param array $attributes Array of block attributes.
         *
         * @since 1.18.1
         */
        public function render_html($attributes)
        {
        }
    }
    /**
     * Class UAGB_Image.
     */
    class UAGB_Image
    {
        /**
         *  Initiator
         *
         * @since 2.0.0
         */
        public static function get_instance()
        {
        }
        /**
         * Constructor
         */
        public function __construct()
        {
        }
        /**
         * Register the Image block on server.
         *
         * @since 2.0.0
         */
        public function register_blocks()
        {
        }
    }
    /**
     * Class UAGB_Block_Positioning.
     * 
     * @since 2.8.0
     */
    class UAGB_Block_Positioning
    {
        /**
         * The Initiator.
         *
         * @since 2.8.0
         * @return object  An instance of this class.
         */
        public static function get_instance()
        {
        }
        /**
         * The Constructor.
         * 
         * @since 2.8.0
         * @return void
         */
        public function __construct()
        {
        }
        /**
         * Add the required positioning classes if needed.
         *
         * @param string $block_content  The block content.
         * @param array  $block          The block data.
         * @since 2.8.0
         * @return string                The block content after updation.
         */
        public function add_positioning_classes($block_content, $block)
        {
        }
        /**
         * This function is used to filter image block content.
         *
         * @param string $block_content Image block content.
         * @param array  $block Image block data.
         * @since 2.10.2
         * @return string
         */
        public function image_block_content_filters($block_content, $block)
        {
        }
    }
    /**
     * Class UAGB_Buttons_Child.
     *
     * @since 2.6.3
     */
    class UAGB_Buttons_Child
    {
        /**
         * Get class instance.
         *
         * @since 2.6.3
         * @return UAGB_Buttons_Child
         */
        public static function get_instance()
        {
        }
        /**
         * Class Constructor.
         *
         * @since 2.6.3
         * @return void
         */
        public function __construct()
        {
        }
        /**
         * Register Buttons Child.
         *
         * @since 2.6.3
         * @return void
         */
        public function register_buttons_child()
        {
        }
        /**
         * Render Button Child
         *
         * @param array  $attributes Attributes.
         * @param String $content Content.
         * @param object $block Block Object.
         * @since 2.6.3
         * @return string $content.
         */
        public function render_buttons_child($attributes, $content, $block)
        {
        }
    }
    /**
     * Class UAGB_GF_Styler.
     */
    class UAGB_GF_Styler
    {
        /**
         *  Initiator
         */
        public static function get_instance()
        {
        }
        /**
         * Constructor
         */
        public function __construct()
        {
        }
        /**
         * Registers the `core/latest-posts` block on server.
         *
         * @since 0.0.1
         */
        public function register_blocks()
        {
        }
        /**
         * Render Gravity Form HTML.
         *
         * @param array $attributes Array of block attributes.
         *
         * @since 1.10.0
         */
        public function render_html($attributes)
        {
        }
    }
    /**
     * Class UAGB_Lottie.
     *
     * @since 1.20.0
     */
    class UAGB_Lottie
    {
        /**
         *  Initiator
         *
         * @since 1.20.0
         */
        public static function get_instance()
        {
        }
        /**
         * Constructor
         *
         * @since 1.20.0
         */
        public function __construct()
        {
        }
        /**
         * Registers the `uagb/lottie` block on server.
         *
         * @since 1.20.0
         */
        public function register_blocks()
        {
        }
        /**
         * Render Lottie HTML.
         *
         * @param array $attributes Array of block attributes.
         *
         * @since 1.20.0
         */
        public function render_html($attributes)
        {
        }
    }
    /**
     * Class UAGB_Popup_Builder.
     *
     * @since 2.6.0
     */
    class UAGB_Popup_Builder
    {
        /**
         * Post ID Member Variable.
         *
         * @var int $post_id
         *
         * @since 2.6.0
         */
        protected $post_id;
        /**
         * Member Variable for all Popup IDs needed to be rendered on the given page.
         *
         * @var array $popup_ids
         *
         * @since 2.6.0
         */
        protected $popup_ids;
        /**
         * Constructor to Default the Current Instance's Post ID and add the Shortcode if needed.
         * 
         * @return void
         *
         * @since 2.6.0
         */
        public function __construct()
        {
        }
        /**
         * Create Instance for the Admin Dashboard.
         *
         * @return object  Initialized object of this class.
         *
         * @since 2.6.0
         */
        public static function create_for_admin()
        {
        }
        /**
         * Create Instance with Script Generation.
         *
         * @return object  Initialized object of this class.
         *
         * @since 2.6.0
         */
        public static function generate_scripts()
        {
        }
        /**
         * Add the Popup Builder Submenu to the Spectra Menu.
         *
         * @return void
         *
         * @since 2.6.0
         */
        public function add_popup_builder_submenu()
        {
        }
        /**
         * Enqueue all popup scripts for the current post.
         *
         * @return void
         *
         * @since 2.6.0
         */
        public function enqueue_popup_scripts_for_post()
        {
        }
        /**
         * Generate Shortcode Content.
         *
         * @param array $attr   The shortcode attributes.
         * @return string|void  The output buffer or void for early return.
         *
         * @since 2.6.0
         */
        public function spectra_popup_shortcode($attr)
        {
        }
        /**
         * Enqueue all the Spectra Popup Scripts needed on the given post.
         *
         * @return void
         *
         * @since 2.6.0
         */
        public function enqueue_popup_scripts()
        {
        }
        /**
         * Generate the popup shortcodes needed.
         *
         * @return void
         *
         * @since 2.6.0
         */
        public function generate_popup_shortcode()
        {
        }
        /**
         * Adds or removes list table column headings for the Popup Builder.
         *
         * @param array $columns  Array of columns.
         * @return array
         *
         * @since 2.6.0
         */
        public static function popup_builder_admin_headings($columns)
        {
        }
        /**
         * Adds the custom list table column content for the Popup Builder.
         *
         * @param string $column   Name of the column.
         * @param int    $post_id  Post id.
         * @return void
         *
         * @since 2.6.0
         */
        public function popup_builder_admin_content($column, $post_id)
        {
        }
        /**
         * Enqueues scripts for the Toggle Button in the Popup Table.
         *
         * @return void
         *
         * @since 2.6.0
         */
        public function popup_toggle_scripts()
        {
        }
        /**
         * Update the Current Popup's Meta from Admin Table.
         *
         * @return void
         *
         * @since 2.6.0
         */
        public function update_popup_status()
        {
        }
    }
    /**
     * Class UAGB_Google_Map.
     */
    class UAGB_Google_Map
    {
        /**
         *  Initiator
         *
         * @since 2.6.4
         */
        public static function get_instance()
        {
        }
        /**
         * Constructor
         */
        public function __construct()
        {
        }
        /**
         * Registers the `core/latest-posts` block on server.
         *
         * @since 2.6.4
         */
        public function register_blocks()
        {
        }
        /**
         * Renders the Google Map block on server.
         *
         * @param array $attributes Array of block attributes.
         *
         * @since 2.6.4
         */
        public function google_map_callback($attributes)
        {
        }
    }
    /**
     * Class Spectra_Icon.
     * 
     * @since 2.12.5
     */
    final class Spectra_Icon
    {
        /**
         *  Initiator
         *
         * @since 2.12.5
         * @return Spectra_Icon
         */
        public static function get_instance()
        {
        }
        /**
         * Constructor
         * 
         * @since 2.12.5
         */
        public function __construct()
        {
        }
        /**
         * Registers the `icon` block on server.
         *
         * @since 2.12.5
         * @return void
         */
        public function register_icon()
        {
        }
        /**
         * Check if a URL has a protocol (http/https).
         *
         * @since 2.12.5
         * 
         * @param string $url The URL to check.
         * @return bool Whether the URL has a protocol.
         */
        public static function get_protocol($url)
        {
        }
        /**
         * Prepend 'http://' to a URL if it doesn't have a protocol.
         *
         * @since 2.12.5
         * 
         * @param string $url The URL to prepend 'http://' to.
         * @return string The modified URL.
         */
        public static function prepend_http($url)
        {
        }
        /**
         * Renders the icon block.
         *
         * @param array $attributes Array of block attributes.
         *
         * @since 2.12.5
         * @return string|false
         */
        public function render_uagb_icon($attributes)
        {
        }
    }
    /**
     * Class Spectra_Image_Gallery.
     */
    final class Spectra_Image_Gallery
    {
        /**
         *  Initiator
         *
         * @since 2.1
         */
        public static function get_instance()
        {
        }
        /**
         * Constructor
         */
        public function __construct()
        {
        }
        /**
         * Registers the `image-gallery` block on server.
         *
         * @since 2.1
         */
        public function register_image_gallery()
        {
        }
        /**
         * Renders All Images.
         *
         * @param array $attributes Array of block attributes.
         *
         * @since 2.1
         */
        public function render_initial_grid($attributes)
        {
        }
        /**
         * Required attribute for query.
         *
         * @param array $attributes Array of block attributes.
         *
         * @return array of requred query attributes.
         *
         * @since 2.1
         */
        public function required_atts($attributes)
        {
        }
        /**
         * Sends the Images to Masonry AJAX.
         *
         * @since 2.1
         */
        public function render_masonry_pagination()
        {
        }
        /**
         * Sends the Imsges to Grid AJAX.
         *
         * @since 2.1
         */
        public function render_grid_pagination()
        {
        }
        /**
         * Renders the Front-end Masonry Layout.
         *
         * @param string $id                 The Block ID.
         * @param array  $attr               An array of attributes.
         * @param string $selector           The selector used to identify the carousel.
         * @param array  $lightbox_settings  An array of Lightbox Swiper Settings.
         * @param array  $thumbnail_settings An array of Thumbnail Swiper Settings.
         * @since 2.1
         * @return string   The rendered markup or an empty string.
         */
        public static function render_frontend_masonry_layout($id, $attr, $selector, $lightbox_settings, $thumbnail_settings)
        {
        }
        /**
         * Renders the Front-end Grid Paginated Layout.
         *
         * @param string $id                 The Block ID.
         * @param array  $attr               An array of attributes.
         * @param string $selector           The selector used to identify the carousel.
         * @param array  $lightbox_settings  An array of Lightbox Swiper Settings.
         * @param array  $thumbnail_settings An array of Thumbnail Swiper Settings.
         * @since 2.1
         * @return string   The rendered markup or an empty string.
         */
        public static function render_frontend_grid_pagination($id, $attr, $selector, $lightbox_settings, $thumbnail_settings)
        {
        }
        /**
         * Renders Front-end Carousel Layout.
         *
         * @param string $id       Block ID.
         * @param array  $settings  Array of carousel settings.
         * @param string $selector Selector to identify the carousel.
         *
         * @since 2.1
         */
        public static function render_frontend_carousel_layout($id, $settings, $selector)
        {
        }
        /**
         * Renders Front-end Tiled Layout.
         *
         * @param string $id Block ID.
         *
         * @since 2.1
         */
        public static function render_frontend_tiled_layout($id)
        {
        }
        /**
         * Renders Front-end Lightbox.
         *
         * @param string $id                  Block ID.
         * @param array  $attr                Array of attributes.
         * @param array  $lightbox_settings   Array of Lightbox Swiper Settings.
         * @param array  $thumbnail_settings  Array of Thumbnail Swiper Settings.
         * @param string $selector            Selector to identify the lightbox.
         * @since 2.4.0
         * @return string       The Output Buffer.
         */
        public static function render_frontend_lightbox($id, $attr, $lightbox_settings, $thumbnail_settings, $selector)
        {
        }
        /**
         * Renders Front-end Click Event.
         *
         * @param string $id             Block ID.
         * @param array  $attr           The array of Attribute.
         * @return string                The Output Buffer.
         *
         * @since 2.4.0
         */
        public static function render_image_click($id, $attr)
        {
        }
    }
    /**
     * Class UAGB_Front_Assets.
     */
    class UAGB_Front_Assets
    {
        /**
         * Post ID
         *
         * @since 1.23.0
         * @var array
         */
        protected $post_id;
        /**
         * Assets Post Object
         *
         * @since 1.23.0
         * @var object
         */
        protected $post_assets;
        /**
         *  Initiator
         *
         * @since 0.0.1
         */
        public static function get_instance()
        {
        }
        /**
         * Constructor
         */
        public function __construct()
        {
        }
        /**
         * Set initial variables.
         *
         * @since 1.23.0
         */
        public function set_initial_variables()
        {
        }
        /**
         * Enqueue asset files.
         *
         * @since 1.23.0
         */
        public function enqueue_asset_files()
        {
        }
        /**
         * Trigger post assets update.
         *
         * @param int     $post_id Post ID.
         * @param WP_Post $post    Post object.
         * @param bool    $update  Whether this is an existing post being updated.
         * @since x.x.x
         * @return mixed void if not an update, otherwise null.
         */
        public function trigger_regeneration_event($post_id, $post, $update)
        {
        }
        /**
         * Update post assets.
         *
         * By passing everything and update assets once post is updated.
         *
         * @param int $post_id Post ID.
         * @since x.x.x
         * @return void
         */
        public function update_current_post_assets($post_id)
        {
        }
        /**
         * Get post_assets obj.
         *
         * @since 1.23.0
         */
        public function get_post_assets_obj()
        {
        }
    }
    /**
     * UAGB_Init_Blocks.
     *
     * @package UAGB
     */
    class UAGB_Init_Blocks
    {
        /**
         *  Initiator
         */
        public static function get_instance()
        {
        }
        /**
         * Constructor
         */
        public function __construct()
        {
        }
        /**
         * Register the Popup Builder CPT.
         *
         * @return void
         *
         * @since 2.6.0
         */
        public function register_popup_builder()
        {
        }
        /**
         * Render block.
         *
         * @param mixed $block_content The block content.
         * @param array $block The block data.
         * @since 1.21.0
         * @return mixed Returns the new block content.
         */
        public function render_block($block_content, $block)
        {
        }
        /**
         * User State Visibility.
         *
         * @param array $block_attributes The block data.
         * @param mixed $block_content The block content.
         *
         * @since 1.21.0
         * @return mixed Returns the new block content.
         */
        public function user_role_visibility($block_attributes, $block_content)
        {
        }
        /**
         * User State Visibility.
         *
         * @param array $block_attributes The block data.
         * @param mixed $block_content The block content.
         * @since 1.21.0
         * @return mixed Returns the new block content.
         */
        public function os_visibility($block_attributes, $block_content)
        {
        }
        /**
         * User State Visibility.
         *
         * @param array $block_attributes The block data.
         * @param mixed $block_content The block content.
         *
         * @since 1.21.0
         * @return mixed Returns the new block content.
         */
        public function browser_visibility($block_attributes, $block_content)
        {
        }
        /**
         * User State Visibility.
         *
         * @param array $block_attributes The block data.
         * @param mixed $block_content The block content.
         *
         * @since 1.21.0
         * @return mixed Returns the new block content.
         */
        public function user_state_visibility($block_attributes, $block_content)
        {
        }
        /**
         * Day Visibility.
         *
         * @param array $block_attributes The block data.
         * @param mixed $block_content The block content.
         *
         * @since 2.1.3
         * @return mixed Returns the new block content.
         */
        public function day_visibility($block_attributes, $block_content)
        {
        }
        /**
         * Ajax call to get Taxonomy List.
         *
         * @since 2.0.0
         */
        public function get_taxonomy()
        {
        }
        /**
         * Renders the Gravity Form shortcode.
         *
         * @since 1.12.0
         */
        public function gf_shortcode()
        {
        }
        /**
         * Renders the forms recaptcha keys.
         *
         * @since 2.0.0
         */
        public function forms_recaptcha()
        {
        }
        /**
         * Renders the Contect Form 7 shortcode.
         *
         * @since 1.10.0
         */
        public function cf7_shortcode()
        {
        }
        /**
         * Gutenberg block category for UAGB.
         *
         * @param array  $categories Block categories.
         * @param object $post Post object.
         * @since 1.0.0
         */
        public function register_block_category($categories, $post)
        {
        }
        /**
         * Localize SVG icon scripts in chunks.
         * Ex - if 1800 icons available so we will localize 4 variables for it.
         *
         * @since 2.7.0
         * @return void
         */
        public function add_svg_icon_assets()
        {
        }
        /**
         * Enqueue Gutenberg block assets for backend editor.
         *
         * @since 1.0.0
         */
        public function editor_assets()
        {
        }
        /**
         *  Get the User Roles
         *
         *  @since 1.21.0
         */
        public function get_user_role()
        {
        }
        /**
         * Function to integrate CF7 Forms.
         *
         * @since 1.10.0
         */
        public function get_cf7_forms()
        {
        }
        /**
         * Returns all gravity forms with ids
         *
         * @since 1.12.0
         * @return array Key Value paired array.
         */
        public function get_gravity_forms()
        {
        }
        /**
         * Ajax call to confirm add users confirmation option in database
         *
         * @return void
         * @since 2.4.0
         */
        public function confirm_svg_upload()
        {
        }
        /**
         * Add Global Block Styles Class.
         *
         * @param string $block_content The block content.
         * @param array  $block The block data.
         * @since 2.9.0
         * @return mixed Returns the new block content.
         */
        public function add_gbs_class($block_content, $block)
        {
        }
        /**
         * Function to save enable/disable data.
         *
         * @since 2.12.0
         * @return void
         */
        public function uag_global_sidebar_enabled()
        {
        }
        /**
         * Function to save allowed block data.
         *
         * @since 2.12.0
         * @return void
         */
        public function uag_global_update_allowed_block()
        {
        }
        /**
         * Function to save Spectra Global Block Styles data.
         *
         * @since 2.9.0
         * @return void
         */
        public function uag_global_block_styles()
        {
        }
    }
    /**
     * Class UAGB_Install.
     */
    class UAGB_Install
    {
        /**
         *  Initiator
         */
        public static function get_instance()
        {
        }
        /**
         * Create files/directories.
         */
        public function create_files()
        {
        }
    }
    /**
     * UAG Rollback.
     *
     * UAG Rollback. handler class is responsible for rolling back UAG to
     * previous version.
     *
     * @since 1.23.0
     */
    class UAGB_Rollback
    {
        /**
         * Package URL.
         *
         * Holds the package URL.
         *
         * @since 1.23.0
         * @access protected
         *
         * @var string Package URL.
         */
        protected $package_url;
        /**
         * Version.
         *
         * Holds the version.
         *
         * @since 1.23.0
         * @access protected
         *
         * @var string Package URL.
         */
        protected $version;
        /**
         * Plugin name.
         *
         * Holds the plugin name.
         *
         * @since 1.23.0
         * @access protected
         *
         * @var string Plugin name.
         */
        protected $plugin_name;
        /**
         * Plugin slug.
         *
         * Holds the plugin slug.
         *
         * @since 1.23.0
         * @access protected
         *
         * @var string Plugin slug.
         */
        protected $plugin_slug;
        /**
         * UAG Rollback constructor.
         *
         * Initializing UAG Rollback.
         *
         * @since 1.23.0
         * @access public
         *
         * @param array $args Optional. UAGB Rollback arguments. Default is an empty array.
         */
        public function __construct($args = array())
        {
        }
        /**
         * Apply package.
         *
         * Change the plugin data when WordPress checks for updates. This method
         * modifies package data to update the plugin from a specific URL containing
         * the version package.
         *
         * @since 1.23.0
         * @access protected
         */
        protected function apply_package()
        {
        }
        /**
         * Upgrade.
         *
         * Run WordPress upgrade to UAGB Rollback to previous version.
         *
         * @since 1.23.0
         * @access protected
         */
        protected function upgrade()
        {
        }
        /**
         * Run.
         *
         * Rollback UAG to previous versions.
         *
         * @since 1.23.0
         * @access public
         */
        public function run()
        {
        }
    }
    /**
     * Class doc
     */
    class UAGB_Block
    {
        /**
         *  Initiator
         */
        public static function get_instance()
        {
        }
        /**
         * Register a Block.
         *
         * @since 2.1.0
         * @param string $block_file Block File Path.
         */
        public function register($block_file)
        {
        }
        /**
         * Register all UAG Lite Blocks.
         *
         * @since 2.1.0
         */
        public function register_blocks()
        {
        }
        /**
         * Gives all Blocks.
         *
         * @since 2.1.0
         */
        public function get_blocks()
        {
        }
    }
    /**
     * Class UAGB_Rest_API.
     */
    final class UAGB_Rest_API
    {
        /**
         *  Initiator
         */
        public static function get_instance()
        {
        }
        /**
         * Constructor
         */
        public function __construct()
        {
        }
        /**
         * Function to delete post assets.
         *
         * @param int $post_id post_id of deleted post.
         * @since 2.13.1
         * @return void 
         */
        public function delete_page_assets_on_trash($post_id)
        {
        }
        /**
         * Function to load assets for post/page in customizer before gutenberg rendering.
         *
         * @param array $block Block data.
         *
         * @since 2.0.13
         *
         * @return array New block data.
         */
        public function content_pre_render($block)
        {
        }
        /**
         * This function updates the __uagb_asset_version when Widgets Editor is Updated.
         *
         * @since 2.0.0
         */
        public function after_widget_save_action()
        {
        }
        /**
         * Create API fields for additional info
         *
         * @since 0.0.1
         */
        public function blocks_register_rest_fields()
        {
        }
        /**
         * Get Initial States.
         *
         * @since 2.12.0
         * @return array
         */
        public function uagb_initial_states()
        {
        }
        /**
         * Get Quick Action Bar Initial States.
         *
         * @since 2.12.0
         * @return array
         */
        public function get_quick_action_bar_initial_states()
        {
        }
        /**
         * Get GBS Initial States.
         *
         * @since 2.9.0
         * @return array
         */
        public function get_gbs_initial_states()
        {
        }
        /**
         * Get all taxonomies.
         *
         * @since 1.11.0
         * @access public
         */
        public function get_related_taxonomy()
        {
        }
        /**
         * Get Post Types.
         *
         * @since 1.11.0
         * @access public
         */
        public static function get_post_types()
        {
        }
        /**
         * Check whether a given request has permission to read notes.
         *
         * @param  WP_REST_Request $request Full details about the request.
         * @return WP_Error|boolean
         */
        public function get_items_permissions_check($request)
        {
        }
        /**
         * Get featured image source for the rest field as per size
         *
         * @param object $object Post Object.
         * @param string $field_name Field name.
         * @param object $request Request Object.
         * @since 0.0.1
         */
        public function get_image_src($object, $field_name, $request)
        {
        }
        /**
         * Get author info for the rest field
         *
         * @param object $object Post Object.
         * @param string $field_name Field name.
         * @param object $request Request Object.
         * @since 0.0.1
         */
        public function get_author_info($object, $field_name, $request)
        {
        }
        /**
         * Get comment info for the rest field
         *
         * @param object $object Post Object.
         * @param string $field_name Field name.
         * @param object $request Request Object.
         * @since 0.0.1
         */
        public function get_comment_info($object, $field_name, $request)
        {
        }
        /**
         * Get excerpt for the rest field
         *
         * @param object $object Post Object.
         * @param string $field_name Field name.
         * @param object $request Request Object.
         * @since 0.0.1
         */
        public function get_excerpt($object, $field_name, $request)
        {
        }
        /**
         * Create API Order By Fields
         *
         * @since 1.12.0
         */
        public function register_rest_orderby_fields()
        {
        }
        /**
         * Adds Order By values to Rest API
         *
         * @param object $params Parameters.
         * @since 1.12.0
         */
        public function add_orderby($params)
        {
        }
        /**
         * Adds the Contect Form 7 Custom Post Type to REST.
         *
         * @param array  $args Array of arguments.
         * @param string $post_type Post Type.
         * @since 1.10.0
         */
        public function add_cpts_to_api($args, $post_type)
        {
        }
        /**
         * Supported arguments to check if the given post type supports custom fields.
         *
         * @since 2.13.1
         * @return array The array of supported arguments.
         */
        public function check_custom_fields_support_args()
        {
        }
        /**
         * Checks if the given post type supports custom fields.
         *
         * @param WP_REST_Request $request All the details about the request.
         * @since 2.13.1
         * @return WP_REST_Response The response.
         */
        public function check_custom_fields_support($request)
        {
        }
    }
    /**
     * Class UAGB_Helper.
     */
    final class UAGB_Helper
    {
        /**
         * Member Variable
         *
         * @since 0.0.1
         * @var instance
         */
        public static $block_list;
        /**
         * UAG File Generation Flag
         *
         * @since 1.14.0
         * @var string
         */
        public static $file_generation = 'disabled';
        /**
         * Store Json variable
         *
         * @since 1.8.1
         * @var array
         */
        public static $icon_json;
        /**
         * Google fonts to enqueue
         *
         * @var array
         */
        public static $gfonts = array();
        /**
         * Current Block List
         *
         * @since 1.13.4
         * @var current_block_list
         * @deprecated 1.23.0
         */
        public static $current_block_list = array();
        /**
         * UAG Block Flag
         *
         * @since 1.13.4
         * @var uag_flag
         * @deprecated 1.23.0
         */
        public static $uag_flag = \false;
        /**
         * Page Blocks Variable
         *
         * @since 1.6.0
         * @var page_blocks
         * @deprecated 1.23.0
         */
        public static $page_blocks;
        /**
         * Stylesheet
         *
         * @since 1.13.4
         * @var stylesheet
         * @deprecated 1.23.0
         */
        public static $stylesheet = '';
        /**
         * Script
         *
         * @since 1.13.4
         * @var script
         * @deprecated 1.23.0
         */
        public static $script = '';
        /**
         * UAG FAQ Layout Flag
         *
         * @since 1.18.1
         * @deprecated 1.23.0
         * @var uag_faq_layout
         */
        public static $uag_faq_layout = \false;
        /**
         * UAG TOC Flag
         *
         * @since 1.18.1
         * @deprecated 1.23.0
         * @var table_of_contents_flag
         */
        public static $table_of_contents_flag = \false;
        /**
         * As our svg icon is too long array so we will divide that into number of icon chunks.
         *
         * @var int
         * @since 2.7.0
         */
        public static $number_of_icon_chunks = 4;
        /**
         * We have icon list in chunks in this variable we will merge all insides array into one single array.
         *
         * @var array
         * @since 2.7.0
         */
        public static $icon_array_merged = array();
        /**
         *  Initiator
         *
         * @since 0.0.1
         */
        public static function get_instance()
        {
        }
        /**
         * Constructor
         */
        public function __construct()
        {
        }
        /**
         * Parse CSS into correct CSS syntax.
         *
         * @param array  $selectors The block selectors.
         * @param string $id The selector ID.
         * @since 0.0.1
         */
        public static function generate_css($selectors, $id)
        {
        }
        /**
         * Get CSS value
         *
         * Syntax:
         *
         *  get_css_value( VALUE, UNIT );
         *
         * E.g.
         *
         *  get_css_value( VALUE, 'em' );
         *
         * @param mixed  $value  CSS value.
         * @param string $unit  CSS unit.
         * @since 1.13.4
         */
        public static function get_css_value($value = '', $unit = '')
        {
        }
        /**
         * Adds Google fonts all blocks.
         *
         * @param bool       $load_google_font the blocks attr.
         * @param array      $font_family the blocks attr.
         * @param int|string $font_weight the blocks attr.
         */
        public static function blocks_google_font($load_google_font, $font_family, $font_weight)
        {
        }
        /**
         * Get Json Data.
         * Customize and add icons via 'uagb_icons_chunks' filter.
         *
         * @since 1.8.1
         * @return array
         */
        public static function backend_load_font_awesome_icons()
        {
        }
        /**
         * Generate SVG.
         *
         * @since 1.8.1
         * @param  array $icon Decoded fontawesome json file data.
         */
        public static function render_svg_html($icon)
        {
        }
        /**
         *  Check MIME Type
         *
         *  @since 1.20.0
         */
        public static function get_mime_type()
        {
        }
        /**
         * Returns Query.
         *
         * @param array  $attributes The block attributes.
         * @param string $block_type The Block Type.
         * @since 1.8.2
         */
        public static function get_query($attributes, $block_type)
        {
        }
        /**
         * Get size information for all currently-registered image sizes.
         *
         * @global $_wp_additional_image_sizes
         * @uses   get_intermediate_image_sizes()
         * @link   https://codex.wordpress.org/Function_Reference/get_intermediate_image_sizes
         * @since  1.9.0
         * @return array $sizes Data for all currently-registered image sizes.
         */
        public static function get_image_sizes()
        {
        }
        /**
         * Get Post Types.
         *
         * @since 1.11.0
         * @access public
         */
        public static function get_post_types()
        {
        }
        /**
         *  Get - RGBA Color
         *
         *  Get HEX color and return RGBA. Default return RGB color.
         *
         * @param  var   $color      Gets the color value.
         * @param  var   $opacity    Gets the opacity value.
         * @param  array $is_array Gets an array of the value.
         * @since   1.11.0
         */
        public static function hex2rgba($color, $opacity = \false, $is_array = \false)
        {
        }
        /**
         * Returns an array of paths for the upload directory
         * of the current site.
         *
         * @since 1.14.0
         * @return array
         */
        public static function get_upload_dir()
        {
        }
        /**
         * Deletes the upload dir.
         *
         * @since 1.18.0
         * @return array
         */
        public static function delete_upload_dir()
        {
        }
        /**
         * Get UAG upload dir path.
         *
         * @since 1.23.0
         * @return string
         */
        public static function get_uag_upload_dir_path()
        {
        }
        /**
         * Get UAG upload url path.
         *
         * @since 1.23.0
         * @return string
         */
        public static function get_uag_upload_url_path()
        {
        }
        /**
         * Delete all files from UAG upload dir.
         *
         * @since 1.23.0
         * @return string
         */
        public static function delete_uag_asset_dir()
        {
        }
        /**
         * Checks to see if the site has SSL enabled or not.
         *
         * @since 1.14.0
         * @return bool
         */
        public static function is_ssl()
        {
        }
        /**
         * Allow File Geranation flag.
         *
         * @since  1.14.0
         */
        public static function allow_file_generation()
        {
        }
        /**
         * Check if UAG upload folder has write permissions or not.
         *
         * @since  1.14.9
         * @return bool true or false.
         */
        public static function is_uag_dir_has_write_permissions()
        {
        }
        /**
         * Gives the paged Query var.
         *
         * @param Object $query Query.
         * @return int $paged Paged Query var.
         * @since 1.14.9
         */
        public static function get_paged($query)
        {
        }
        /**
         * Builds the base url.
         *
         * @param string $permalink_structure Premalink Structure.
         * @param string $base Base.
         * @since 1.14.9
         */
        public static function build_base_url($permalink_structure, $base)
        {
        }
        /**
         * Returns the Paged Format.
         *
         * @param string $permalink_structure Premalink Structure.
         * @param string $base Base.
         * @since 1.14.9
         */
        public static function paged_format($permalink_structure, $base)
        {
        }
        /**
         * Get Typography Dynamic CSS.
         *
         * @param  array  $attr The Attribute array.
         * @param  string $slug The field slug.
         * @param  string $selector The selector array.
         * @param  array  $combined_selectors The combined selector array.
         * @since  1.15.0
         * @return array
         */
        public static function get_typography_css($attr, $slug, $selector, $combined_selectors)
        {
        }
        /**
         * Sets the selector to Global Block Styles Selector if applicable.
         *
         * @param string $selector Selector.
         * @param array  $gbs_attributes GBS attributes array.
         * @since 2.9.0
         * @return string $selector Updated selector.
         */
        public static function add_gbs_selector_if_applicable($selector, $gbs_attributes)
        {
        }
        /**
         * Get the Global block styles CSS selector.
         *
         * @param string $style_name Style Name.
         *
         * @since 2.9.0
         * @return string $selector Styles Selector.
         */
        public static function get_gbs_selector($style_name)
        {
        }
        /**
         * Parse CSS into correct CSS syntax.
         *
         * @param array  $combined_selectors The combined selector array.
         * @param string $id The selector ID.
         * @param string $gbs_class The GBS class as string.
         *
         * @since 1.15.0
         * @return array $css CSS.
         */
        public static function generate_all_css($combined_selectors, $id, $gbs_class = '')
        {
        }
        /**
         * Get Post Assets Instance.
         */
        public function get_post_assets_instance()
        {
        }
        /** Generates stylesheet in loop.
         *
         * @since 1.7.0
         * @param object $this_post Post Object.
         * @deprecated 1.23.0
         * @access public
         */
        public function get_generated_stylesheet($this_post)
        {
        }
        /**
         * Generates stylesheet for reusable blocks.
         *
         * @since 1.1.0
         * @param array $blocks Blocks.
         * @deprecated 1.23.0
         * @access public
         */
        public function get_assets($blocks)
        {
        }
        /**
         * Parse Guten Block.
         *
         * @since 1.1.0
         * @param string $content the content string.
         * @deprecated 1.23.0 Use `parse_blocks()` instead
         * @access public
         */
        public function parse($content)
        {
        }
        /**
         * This is the action where we create dynamic asset files.
         * CSS Path : uploads/uag-plugin/uag-style-{post_id}-{timestamp}.css
         * JS Path : uploads/uag-plugin/uag-script-{post_id}-{timestamp}.js
         *
         * @since 1.15.0
         * @deprecated 1.23.0
         */
        public function generate_asset_files()
        {
        }
        /**
         * Enqueue Gutenberg block assets for both frontend + backend.
         *
         * @since 1.13.4
         * @deprecated 1.23.0
         */
        public function block_assets()
        {
        }
        /**
         * Print the Script in footer.
         *
         * @since 1.15.0
         * @deprecated 1.23.0
         */
        public function print_script()
        {
        }
        /**
         * Print the Stylesheet in header.
         *
         * @since 1.15.0
         * @deprecated 1.23.0
         */
        public function print_stylesheet()
        {
        }
        /**
         * Load the front end Google Fonts.
         *
         * @since 1.15.0
         * @deprecated 1.23.0
         */
        public function frontend_gfonts()
        {
        }
        /**
         * Generates CSS recurrsively.
         *
         * @param object $block The block object.
         * @since 0.0.1
         * @deprecated 1.23.0
         */
        public function get_block_css_and_js($block)
        {
        }
        /**
         * Generates stylesheet and appends in head tag.
         *
         * @since 0.0.1
         * @deprecated 1.23.0
         */
        public function generate_assets()
        {
        }
        /**
         * Get the excerpt.
         *
         * @param int    $post_id          for the block.
         * @param string $content          for post content.
         * @param int    $length_fallback  for excerpt, after fallback has been done.
         *
         * @since 2.0.0
         */
        public static function uagb_get_excerpt($post_id, $content, $length_fallback)
        {
        }
        /**
         * Get User Browser name
         *
         * @param string $user_agent Browser names.
         * @return string
         * @since 2.0.8
         */
        public static function get_browser_name($user_agent)
        {
        }
        /**
         * Get block dynamic CSS selector with filters applied for extending it.
         *
         * @param string $block_name Block name to filter.
         * @param array  $selectors Array of selectors to filter.
         * @param array  $attr Attributes.
         * @return array Combined selectors array.
         * @since 2.4.0
         */
        public static function get_combined_selectors($block_name, $selectors, $attr)
        {
        }
        /**
         * This function deletes the Page assets from the Page Meta Key.
         *
         * @param int $post_id Post Id.
         *
         * @return void
         * @since 1.23.0
         */
        public static function delete_page_assets($post_id)
        {
        }
        /**
         * Does Post contains reusable blocks.
         *
         * @param int $post_id Post ID.
         *
         * @since 1.23.5
         *
         * @return boolean Wether the Post contains any Reusable blocks or not.
         */
        public static function does_post_contain_reusable_blocks($post_id)
        {
        }
        /**
         * Set alignment css function.
         *
         * @param string $align passed.
         * @since 2.7.7
         * @return array
         */
        public static function alignment_css($align)
        {
        }
        /**
         * Get allowed HTML title tag.
         *
         * @param string $title_Tag HTML tag of title.
         * @param array  $allowed_array Array of allowed HTML tags.
         * @param string $default_tag Default HTML tag.
         * @since 2.7.10
         * @return string $title_Tag | $default_tag.
         */
        public static function title_tag_allowed_html($title_Tag, $allowed_array, $default_tag)
        {
        }
        /**
         * Check if file exists and delete it.
         *
         * @param string $file_name File name.
         * @since 2.9.0
         * @return void
         */
        public static function remove_file($file_name)
        {
        }
    }
    /**
     * Class UAGB_Block_JS.
     */
    class UAGB_Block_JS
    {
        /**
         * Adds Google fonts for Advanced Heading block.
         *
         * @since 1.9.1
         * @param array $attr the blocks attr.
         */
        public static function blocks_advanced_heading_gfont($attr)
        {
        }
        /**
         * Adds Google fonts for How To block.
         *
         * @since 1.15.0
         * @param array $attr the blocks attr.
         */
        public static function blocks_how_to_gfont($attr)
        {
        }
        /**
         * Adds Google fonts for How To Step block.
         *
         * @since 2.0.0
         * @param array $attr the blocks attr.
         */
        public static function blocks_how_to_step_gfont($attr)
        {
        }
        /**
         * Adds Google fonts for review block.
         *
         * @since 1.19.0
         * @param array $attr the blocks attr.
         */
        public static function blocks_review_gfont($attr)
        {
        }
        /**
         * Adds Google fonts for Inline Notice block.
         *
         * @since 1.16.0
         * @param array $attr the blocks attr.
         */
        public static function blocks_inline_notice_gfont($attr)
        {
        }
        /**
         * Adds Google fonts for CF7 Styler block.
         *
         * @since 1.10.0
         * @param array $attr the blocks attr.
         */
        public static function blocks_cf7_styler_gfont($attr)
        {
        }
        /**
         * Adds Google fonts for Gravity Form Styler block.
         *
         * @since 1.12.0
         * @param array $attr the blocks attr.
         */
        public static function blocks_gf_styler_gfont($attr)
        {
        }
        /**
         * Adds Google fonts for Marketing Button block.
         *
         * @since 1.11.0
         * @param array $attr the blocks attr.
         */
        public static function blocks_marketing_btn_gfont($attr)
        {
        }
        /**
         * Adds Google fonts for Table Of Contents block.
         *
         * @since 1.13.0
         * @param array $attr the blocks attr.
         */
        public static function blocks_table_of_contents_gfont($attr)
        {
        }
        /**
         * Adds Google fonts for Blockquote.
         *
         * @since 1.9.1
         * @param array $attr the blocks attr.
         */
        public static function blocks_blockquote_gfont($attr)
        {
        }
        /**
         * Adds Google fonts for Testimonials block.
         *
         * @since 1.9.1
         * @param array $attr the blocks attr.
         */
        public static function blocks_testimonial_gfont($attr)
        {
        }
        /**
         * Adds Google fonts for Advanced Heading block.
         *
         * @since 1.9.1
         * @param array $attr the blocks attr.
         */
        public static function blocks_team_gfont($attr)
        {
        }
        /**
         *
         * Adds Google fonts for Restaurant Menu block.
         *
         * @since 1.9.1
         * @param array $attr the blocks attr.
         */
        public static function blocks_restaurant_menu_gfont($attr)
        {
        }
        /**
         * Adds Google fonts for Content Timeline block.
         *
         * @since 1.9.1
         * @param array $attr the blocks attr.
         */
        public static function blocks_content_timeline_gfont($attr)
        {
        }
        /**
         * Adds Google fonts for Post Timeline block.
         *
         * @since 1.9.1
         * @param array $attr the blocks attr.
         */
        public static function blocks_post_timeline_gfont($attr)
        {
        }
        /**
         * Adds Google fonts for Mulit Button's block.
         *
         * @since 1.9.1
         * @param array $attr the blocks attr.
         */
        public static function blocks_buttons_gfont($attr)
        {
        }
        /**
         * Adds Google fonts for Post block.
         *
         * @since 1.9.1
         * @param array $attr the blocks attr.
         */
        public static function blocks_post_gfont($attr)
        {
        }
        /**
         * Adds Google fonts for Advanced Heading block.
         *
         * @since 1.9.1
         * @param array $attr the blocks attr.
         */
        public static function blocks_info_box_gfont($attr)
        {
        }
        /**
         * Adds Google fonts for Call To Action block.
         *
         * @since 1.9.1
         * @param array $attr the blocks attr.
         */
        public static function blocks_call_to_action_gfont($attr)
        {
        }
        /**
         * Adds Google fonts for FAQ block.
         *
         * @since 1.15.0
         * @param array $attr the blocks attr.
         */
        public static function blocks_faq_gfont($attr)
        {
        }
        /**
         * Adds Google fonts for WP Search block.
         *
         * @since 1.16.0
         * @param array $attr the blocks attr.
         */
        public static function blocks_wp_search_gfont($attr)
        {
        }
        /**
         *
         * Adds Google fonts for Separator block.
         *
         * @since 2.6.0
         * @param array $attr the blocks attr.
         * @return void
         */
        public static function blocks_separator_gfont($attr)
        {
        }
        /**
         * Adds Google fonts for Taxonomy List block.
         *
         * @since 1.18.0
         * @param array $attr the blocks attr.
         */
        public static function blocks_taxonomy_list_gfont($attr)
        {
        }
        /**
         * Adds Google fonts for Forms block.
         *
         * @since 1.22.0
         * @param array $attr the blocks attr.
         */
        public static function blocks_forms_gfont($attr)
        {
        }
        /**
         * Adds Google fonts for Star Rating block.
         *
         * @since 2.0.0
         * @param array $attr the blocks attr.
         */
        public static function blocks_star_rating_gfont($attr)
        {
        }
        /**
         * Adds Google fonts for Tabs block.
         *
         * @since 2.0.0
         * @param array $attr the blocks attr.
         */
        public static function blocks_tabs_gfont($attr)
        {
        }
        /**
         * Adds Google fonts for Advanced Image block.
         *
         * @since 2.0.0
         * @param array $attr the blocks attr.
         */
        public static function blocks_advanced_image_gfont($attr)
        {
        }
        /**
         * Adds Google fonts for Counter block.
         *
         * @since 2.1.0
         * @param array $attr the blocks attr.
         */
        public static function blocks_counter_gfont($attr)
        {
        }
        /**
         * Adds Google fonts for Image Gallery block.
         *
         * @since 2.1.0
         * @param array $attr the blocks attr.
         */
        public static function blocks_image_gallery_gfont($attr)
        {
        }
        /**
         * Adds Google fonts for Countdown block.
         *
         * @since 2.4.0
         * @param array $attr the blocks attr.
         * @return void
         */
        public static function blocks_countdown_gfont($attr)
        {
        }
        /**
         * Adds Google fonts for Modal block.
         *
         * @since 2.2.0
         * @param array $attr the blocks attr.
         */
        public static function blocks_modal_gfont($attr)
        {
        }
    }
    /**
     * Class UAGB_Beta_Updates.
     */
    final class UAGB_Beta_Updates
    {
        /**
         *  Initiator
         */
        public static function get_instance()
        {
        }
        /**
         * Constructor
         *
         * @since 1.23.0
         */
        public function __construct()
        {
        }
        /**
         * Check version.
         *
         * Checks whether a beta version exist, and retrieve the version data.
         *
         * Fired by `pre_set_site_transient_update_plugins` filter, before WordPress
         * runs the plugin update checker.
         *
         * @since 1.23.0
         * @access public
         *
         * @param object $transient Plugin version data.
         *
         * @return array Plugin version data.
         */
        public function check_version($transient)
        {
        }
    }
    /**
     * Class UAGB_Admin.
     */
    final class UAGB_Admin
    {
        /**
         *  Initiator
         */
        public static function get_instance()
        {
        }
        /**
         * Constructor
         */
        public function __construct()
        {
        }
        /**
         * Update Old user option using URL Param.
         *
         * If any user wants to set the site as old user then just add the URL param as true.
         *
         * @since 2.0.1
         * @access public
         */
        public function update_old_user_option_by_url_params()
        {
        }
        /**
         * UAG version rollback.
         *
         * Rollback to previous UAG version.
         *
         * Fired by `admin_post_uag_rollback` action.
         *
         * @since 1.23.0
         * @access public
         */
        public function post_uagb_rollback()
        {
        }
        /**
         * Activation Reset
         */
        public function activation_redirect()
        {
        }
        /**
         * Filters and Returns a list of allowed tags and attributes for a given context.
         *
         * @param Array  $allowedposttags Array of allowed tags.
         * @param String $context Context type (explicit).
         * @since 1.8.0
         * @return Array
         */
        public function add_data_attributes($allowedposttags, $context)
        {
        }
        /**
         * Ask Plugin Rating
         *
         * @since 1.8.0
         */
        public function register_notices()
        {
        }
        /**
         * Enqueue the needed CSS/JS for the builder's admin settings page.
         *
         * @since 1.8.0
         */
        public function notice_styles_scripts()
        {
        }
        /**
         * Rank Math SEO filter to add kb-elementor to the TOC list.
         *
         * @param array $plugins TOC plugins.
         */
        public function toc_plugin($plugins)
        {
        }
    }
    /**
     * Class UAGB_Post_Assets.
     */
    class UAGB_Post_Assets
    {
        /**
         * Current Block List
         *
         * @since 1.13.4
         * @var array
         */
        public $current_block_list = array();
        /**
         * UAG Block Flag
         *
         * @since 1.13.4
         * @var uag_flag
         */
        public $uag_flag = \false;
        /**
         * UAG FAQ Layout Flag
         *
         * @since 1.18.1
         * @var uag_faq_layout
         */
        public $uag_faq_layout = \false;
        /**
         * UAG File Generation Flag
         *
         * @since 1.14.0
         * @var string
         */
        public $file_generation = 'disabled';
        /**
         * UAG File Generation Flag
         *
         * @since 1.14.0
         * @var file_generation
         */
        public $is_allowed_assets_generation = \false;
        /**
         * UAG File Generation Fallback Flag for CSS
         *
         * @since 1.15.0
         * @var file_generation
         */
        public $fallback_css = \false;
        /**
         * UAG File Generation Fallback Flag for JS
         *
         * @since 1.15.0
         * @var file_generation
         */
        public $fallback_js = \false;
        /**
         * Enqueue Style and Script Variable
         *
         * @since 1.14.0
         * @var instance
         */
        public $assets_file_handler = array();
        /**
         * Stylesheet
         *
         * @since 1.13.4
         * @var string
         */
        public $stylesheet = '';
        /**
         * Script
         *
         * @since 1.13.4
         * @var script
         */
        public $script = '';
        /**
         * Page Blocks Variable
         *
         * @since 1.6.0
         * @var instance
         */
        public $page_blocks;
        /**
         * Google fonts to enqueue
         *
         * @var array
         */
        public $gfonts = array();
        /**
         * Google fonts preload files
         *
         * @var array
         */
        public $gfonts_files = array();
        /**
         * Google fonts url to enqueue
         *
         * @var string
         */
        public $gfonts_url = '';
        /**
         * Load Google fonts locally
         *
         * @var string
         */
        public $load_gfonts_locally = '';
        /**
         * Preload google fonts files from local
         *
         * @var string
         */
        public $preload_local_fonts = '';
        /**
         * Static CSS Added Array
         *
         * @since 1.23.0
         * @var array
         */
        public $static_css_blocks = array();
        /**
         * Static CSS Added Array
         *
         * @since 1.23.0
         * @var array
         */
        public static $conditional_blocks_printed = \false;
        /**
         * Post ID
         *
         * @since 1.23.0
         * @var integer
         */
        protected $post_id;
        /**
         * Preview
         *
         * @since 1.24.2
         * @var preview
         */
        public $preview = \false;
        /**
         * Load UAG Fonts Flag.
         *
         * @since 2.0.0
         * @var preview
         */
        public $load_uag_fonts = \true;
        /**
         * Common Assets Added.
         *
         * @since 2.0.0
         * @var preview
         */
        public static $common_assets_added = \false;
        /**
         * Custom CSS Appended Flag
         *
         * @since 2.1.0
         * @var custom_css_appended
         */
        public static $custom_css_appended = \false;
        /**
         * Is current post a revision.
         *
         * @since 2.6.2
         * @var is_post_revision
         */
        public $is_post_revision = \false;
        /**
         * Constructor
         *
         * @param int $post_id Post ID.
         */
        public function __construct($post_id)
        {
        }
        /**
         * Get WooCommerce Template.
         *
         * @since 2.9.1
         * @return bool|string The WooCommerce template if found, or false if not found.
         */
        public function get_woocommerce_template()
        {
        }
        /**
         * Get archive page template for current post.
         *
         * @param object $archive_object of current post.
         * @param array  $template_type_slug name.
         * @since 2.12.8
         * @return string The determined archive post type.
         */
        public function get_archive_page_template($archive_object, $template_type_slug)
        {
        }
        /**
         * Generates assets for templates based on post type.
         *
         * @param string $post_type of current template.
         * @since 2.9.1
         * @return void
         */
        public function prepare_assets_for_templates_based_post_type($post_type)
        {
        }
        /**
         * Generate assets of Astra custom layout post in preview
         *
         * @since 2.6.0
         * @return void
         */
        public function prepare_ast_custom_layout_post_assets()
        {
        }
        /**
         * Load Styles for Spectra Global Block Styles.
         *
         * @since 2.9.0
         * @return void
         */
        public function spectra_gbs_load_styles()
        {
        }
        /**
         * Load Google Fonts for Spectra Global Block Styles.
         *
         * @since 2.9.0
         * @return void
         */
        public function spectra_gbs_load_gfonts()
        {
        }
        /**
         * Generates stylesheet for widget area.
         *
         * @param object $content Current Post Object.
         * @since 2.0.0
         */
        public function prepare_widget_area_assets($content)
        {
        }
        /**
         * This function determines wether to generate new assets or not.
         *
         * @since 1.23.0
         */
        public function allow_assets_generation()
        {
        }
        /**
         * Enqueue all page assets.
         *
         * @since 1.23.0
         */
        public function enqueue_scripts()
        {
        }
        /**
         * Get saved fonts.
         *
         * @since 2.0.0
         *
         * @return array
         */
        public function get_fonts()
        {
        }
        /**
         * This function updates the Page assets in the Page Meta Key.
         *
         * @since 1.23.0
         */
        public function update_page_assets()
        {
        }
        /**
         * This is the action where we create dynamic asset files.
         * CSS Path : uploads/uag-plugin/uag-style-{post_id}.css
         * JS Path : uploads/uag-plugin/uag-script-{post_id}.js
         *
         * @since 1.15.0
         */
        public function generate_asset_files()
        {
        }
        /**
         * Enqueue Gutenberg block assets for both frontend + backend.
         *
         * @since 1.13.4
         */
        public function enqueue_blocks_dependency_frontend()
        {
        }
        /**
         * Enqueue File Generation Files.
         */
        public function enqueue_file_generation_assets()
        {
        }
        /**
         * Print the Script in footer.
         */
        public function print_script()
        {
        }
        /**
         * Print the Stylesheet in header.
         */
        public function print_stylesheet()
        {
        }
        /**
         * Print Conditional blocks css.
         */
        public function print_conditional_css()
        {
        }
        /**
         * Generate google fonts link and font files
         *
         * @since 2.0.0
         *
         * @return void
         */
        public function generate_fonts()
        {
        }
        /**
         * Load the Google Fonts.
         */
        public function render_google_fonts()
        {
        }
        /**
         * Load the front end Google Fonts.
         */
        public function print_google_fonts()
        {
        }
        /**
         * Generates CSS recurrsively.
         *
         * @param object $block The block object.
         * @since 0.0.1
         */
        public function get_block_css_and_js($block)
        {
        }
        /**
         * Generates stylesheet and appends in head tag.
         *
         * @since 0.0.1
         */
        public function generate_assets()
        {
        }
        /**
         * Re-generate Spectra based assets.
         *
         * This is reusable function which compile fonts, assets and generate asset files.
         *
         * @since x.x.x
         * @return void
         */
        public function regenerate_post_assets()
        {
        }
        /**
         * Generates stylesheet in loop.
         *
         * @param object $this_post Current Post Object.
         * @since 1.7.0
         */
        public function prepare_assets($this_post)
        {
        }
        /**
         * Common function to generate stylesheet.
         *
         * @param array $post_content Current Post Object.
         * @since 2.0.0
         */
        public function common_function_for_assets_preparation($post_content)
        {
        }
        /**
         * Parse Guten Block.
         *
         * @param string $content the content string.
         * @since 1.1.0
         */
        public function parse_blocks($content)
        {
        }
        /**
         * Generates ids for all wp template part.
         *
         * @param array $block the content array.
         * @since 2.4.1
         */
        public function get_fse_template_part($block)
        {
        }
        /**
         * Generates parse content for all blocks including reusable blocks.
         *
         * @param int $id of blocks.
         * @since 2.4.1
         */
        public function get_assets_using_post_content($id)
        {
        }
        /**
         * Generates assets for all blocks including reusable blocks.
         *
         * @param array $blocks Blocks array.
         * @since 1.1.0
         */
        public function get_blocks_assets($blocks)
        {
        }
        /**
         * Get static & dynamic css for block.
         *
         * @param array $blocks Blocks array.
         * @since 2.12.3
         * @return array Of static and dynamic css and js.
         */
        public function get_static_and_dynamic_assets($blocks)
        {
        }
        /**
         * Creates a new file for Dynamic CSS/JS.
         *
         * @param  string $file_data The data that needs to be copied into the created file.
         * @param  string $type Type of file - CSS/JS.
         * @param  string $file_state Wether File is new or old.
         * @param  string $old_file_name Old file name timestamp.
         * @since 1.15.0
         * @return boolean true/false
         */
        public function create_file($file_data, $type, $file_state = 'new', $old_file_name = '')
        {
        }
        /**
         * Creates css and js files.
         *
         * @param  var    $file_data    Gets the CSS\JS for the current Page.
         * @param  string $type    Gets the CSS\JS type.
         * @param  int    $post_id Post ID.
         * @since  1.14.0
         */
        public function file_write($file_data, $type = 'css', $post_id = 0)
        {
        }
        /**
         * Get Static CSS of Block.
         *
         * @param string $block_name Block Name.
         *
         * @return string Static CSS.
         * @since 1.23.0
         */
        public function get_block_static_css($block_name)
        {
        }
        /**
         * Merge two arrays with string values.
         *
         * @param array $array1 First array.
         * @param array $array2 Second array.
         * @since 2.7.3
         * @return array
         */
        public function merge_array_string_values($array1, $array2)
        {
        }
        /**
         * Handle the block assets when blocks type will be core/pattern.
         *
         * @param array $block The block array.
         * @since 2.9.1
         * @return array
         */
        public function get_core_pattern_assets($block)
        {
        }
        /**
         * Get static and dynamic assets data for a post. Its a helper function used by starter templates and GT library.
         *
         * @param int $post_id The post id.
         * @since 2.12.3
         * @return array of Static and dynamic css and js.
         */
        public function get_static_and_dynamic_css($post_id)
        {
        }
    }
    /**
     * Class UAGB_Visibility.
     */
    class UAGB_Visibility
    {
        /**
         *  Initiator
         *
         * @since 2.8.0
         * @return UAGB_Visibility
         */
        public static function get_instance()
        {
        }
        /**
         * Constructor
         */
        public function __construct()
        {
        }
        /**
         * Set Visibility Template.
         * 
         * @since 2.8.0
         * 
         * @return string Template file path.
         */
        public function set_visibility_template()
        {
        }
        /**
         * Set Visibility Page.
         *
         * @since 2.8.0
         * 
         * @return void
         */
        public function set_visibility_page()
        {
        }
        /**
         * Enqueue asset files.
         *
         * @since 2.8.0
         */
        public function enqueue_asset_files()
        {
        }
    }
    /**
     * Class UAGB_Filesystem.
     */
    class UAGB_Filesystem
    {
        /**
         *  Initiator
         */
        public static function get_instance()
        {
        }
        /**
         * Get an instance of WP_Filesystem.
         *
         * @since 1.23.0
         */
        public function get_filesystem()
        {
        }
        /**
         * Method to direct.
         *
         * @since 1.23.0
         */
        public function filesystem_method()
        {
        }
        /**
         * Sets credentials to true.
         *
         * @since 1.23.0
         */
        public function request_filesystem_credentials()
        {
        }
    }
    /**
     * UAGB Update initial setup
     *
     * @since 1.13.4
     */
    class UAGB_Update
    {
        /**
         * Initiator
         */
        public static function get_instance()
        {
        }
        /**
         *  Constructor
         */
        public function __construct()
        {
        }
        /**
         * Init
         *
         * @since 1.13.4
         * @return void
         */
        public function init()
        {
        }
        /**
         * Migrate_visibility_mode
         *
         * @since 2.8.0
         * @return void
         */
        public static function migrate_visibility_mode()
        {
        }
        /**
         * Update asset generation option if it is not exist.
         *
         * @since 1.22.4
         * @return void
         */
        public function fresh_install_update_asset_generation_option()
        {
        }
        /**
         * Plugin update notification.
         *
         * @param array $data Plugin update data.
         * @since 2.7.2
         * @return void
         */
        public function plugin_update_notification($data)
        {
        }
        /**
         * Enqueue styles.
         *
         * @since 2.7.2
         * @return void
         */
        public function enqueue_styles()
        {
        }
    }
    /**
     * Class doc
     */
    class UAGB_Block_Module
    {
        /**
         * Block Attributes
         *
         * @var block_attributes
         */
        public static $block_attributes = \null;
        /**
         * Block Assets
         *
         * @var block_assets
         */
        public static $block_assets = \null;
        /**
         *  Initiator
         */
        public static function get_instance()
        {
        }
        /**
         * Constructor
         */
        public function __construct()
        {
        }
        /**
         * Add Blocks Static Assets.
         *
         * @since 2.0.0
         *
         * @param array $block_assets Block Assets.
         * @return array
         */
        public static function uag_register_block_static_dependencies($block_assets)
        {
        }
        /**
         * Get frontend CSS.
         *
         * @since 2.0.0
         *
         * @param string $slug Block slug.
         * @param array  $attr Block attributes.
         * @param string $id   Block id.
         * @param bool   $is_gbs Is Global Block Style.
         * @return array
         */
        public static function get_frontend_css($slug, $attr, $id, $is_gbs = \false)
        {
        }
        /**
         * Get frontend JS.
         *
         * @since 2.0.0
         *
         * @param string $slug Block slug.
         * @param array  $attr Block attributes.
         * @param string $id   Block id.
         * @return array
         */
        public static function get_frontend_js($slug, $attr, $id)
        {
        }
        /**
         * Filter GBS Placeholder Attributes.
         *
         * @param array $attributes Block attributes.
         * @since 2.9.0
         * @return array $attributes Block attributes by removing 0.001020304.
         */
        public static function gbs_filter_placeholder_attributes($attributes)
        {
        }
        /**
         * Get frontend Assets.
         *
         * @since 2.0.0
         *
         * @param string $slug Block slug.
         * @param array  $attr Block attributes.
         * @param string $id   Block id.
         * @param string $type Asset Type.
         * @param bool   $is_gbs Is Global Block Style.
         * @return array
         */
        public static function get_frontend_assets($slug, $attr, $id, $type = 'css', $is_gbs = \false)
        {
        }
        /**
         * Get Widget List.
         *
         * @since 2.0.0
         *
         * @return array The Widget List.
         */
        public static function get_blocks_info()
        {
        }
        /**
         * Get Block Assets.
         *
         * @since 1.13.4
         *
         * @return array The Asset List.
         */
        public static function get_block_dependencies()
        {
        }
        /**
         * Returns attributes array with default value wherever required.
         *
         * @param array $default_attr default attribute value array from attributes.php.
         * @param array $attr saved attributes data from database.
         * @return array
         * @since 2.3.2
         */
        public static function get_fallback_values($default_attr, $attr)
        {
        }
    }
    /**
     * Class UAGB_Scripts_Utils.
     */
    final class UAGB_Scripts_Utils
    {
        /**
         * Enqueue Gutenberg block assets for both frontend + backend.
         *
         * @since 1.23.0
         */
        public static function enqueue_blocks_dependency_both()
        {
        }
        /**
         * Enqueue block styles.
         *
         * @since 1.23.0
         */
        public static function enqueue_blocks_styles()
        {
        }
        /**
         * Enqueue block rtl styles.
         *
         * @since 1.23.0
         */
        public static function enqueue_blocks_rtl_styles()
        {
        }
        /**
         * Get folder name by post id.
         *
         * @param int $post_id post id.
         * @since 2.0.0
         */
        public static function get_asset_folder_name($post_id)
        {
        }
        /**
         * Returns an array of paths for the CSS and JS assets
         * of the current post.
         *
         * @param  string $type    Gets the CSS\JS type.
         * @param  int    $post_id Post ID.
         * @since 1.14.0
         * @return array
         */
        public static function get_asset_info($type, $post_id)
        {
        }
        /**
         * Get JS url from to assets.
         *
         * @since 2.0.0
         *
         * @param string $file_name File name.
         *
         * @return string JS url.
         */
        public static function get_js_url($file_name)
        {
        }
    }
    /**
     * Class UAGB_Loader.
     */
    final class UAGB_Loader
    {
        /**
         * Post assets object cache
         *
         * @var array
         */
        public $post_assets_objs = array();
        /**
         *  Initiator
         */
        public static function get_instance()
        {
        }
        /**
         * Constructor
         */
        public function __construct()
        {
        }
        /**
         * Defines all constants
         *
         * @since 1.0.0
         */
        public function define_constants()
        {
        }
        /**
         * Loads Other files.
         *
         * @since 1.0.0
         *
         * @return void
         */
        public function loader()
        {
        }
        /**
         * Loads plugin files.
         *
         * @since 1.0.0
         *
         * @return void
         */
        public function load_plugin()
        {
        }
        /**
         * Loads theme compatibility files.
         *
         * @since 2.5.1
         *
         * @return void
         */
        public function load_compatibility()
        {
        }
        /**
         * Fix REST API issue with blocks registered via PHP register_block_type.
         *
         * @since 1.25.2
         *
         * @param mixed  $result  Response to replace the requested version with.
         * @param object $server  Server instance.
         * @param object $request Request used to generate the response.
         *
         * @return array Returns updated results.
         */
        public function rest_pre_dispatch($result, $server, $request)
        {
        }
        /**
         * Check if Gutenberg is active
         *
         * @since 1.1.0
         *
         * @return boolean
         */
        public function is_gutenberg_active()
        {
        }
        /**
         * Load Ultimate Gutenberg Text Domain.
         * This will load the translation textdomain depending on the file priorities.
         *      1. Global Languages /wp-content/languages/ultimate-addons-for-gutenberg/ folder
         *      2. Local directory /wp-content/plugins/ultimate-addons-for-gutenberg/languages/ folder
         *
         * @since  1.0.0
         * @return void
         */
        public function load_textdomain()
        {
        }
        /**
         * Fires admin notice when Gutenberg is not installed and activated.
         *
         * @since 1.0.0
         *
         * @return void
         */
        public function uagb_fails_to_load()
        {
        }
        /**
         * Activation Reset
         */
        public function activation_reset()
        {
        }
        /**
         * Deactivation Reset
         */
        public function deactivation_reset()
        {
        }
        /**
         * Init actions
         *
         * @since 2.0.0
         *
         * @return void
         */
        public function init_actions()
        {
        }
        /**
         * Adds specified blocks to the list of allowed blocks in excerpts.
         *
         * @param array $allowed    List of allowed blocks in excerpts.
         * @since 2.6.0
         * @return array            Modified list of allowed blocks in excerpts.
         */
        public function add_blocks_to_excerpt($allowed)
        {
        }
        /**
         * Adds specified wrapper blocks to the list of allowed blocks in excerpts.
         *
         * @param array $allowed    List of allowed blocks in excerpts.
         * @since 2.6.0
         * @return array            Modified list of allowed blocks in excerpts.
         */
        public function add_wrapper_blocks_to_excerpt($allowed)
        {
        }
        /**
         * Adds specified UAGB blocks to the list of allowed blocks in excerpts.
         *
         * @param array $excerpt_blocks     List of allowed blocks in excerpts.
         * @param array $blocks_to_add      Blocks to add to the list of allowed blocks in excerpts.
         * @since 2.6.0
         * @return array                    The merged excerpt blocks array if both parameters are arrays, or the original excerpt blocks if either parameter is not an array.
         */
        public function add_uagb_blocks_to_excerpt($excerpt_blocks, $blocks_to_add)
        {
        }
        /**
         * Generate assets on migration.
         *
         * @since 2.7.10
         * @return void
         */
        public function get_regenerate_assets_on_migration()
        {
        }
        /**
         * Add the Zip AI Collab Product Details.
         *
         * @param mixed $product_details The previous product details, if any.
         * @since 2.10.2
         * @return array The Spectra product details.
         */
        public function add_zip_ai_collab_product_details($product_details)
        {
        }
        /**
         * Add the Zip AI Modules that come with Spectra.
         *
         * @param mixed $modules The modules for Zip AI, if any.
         * @since 2.10.2
         * @return array The Spectra default modules.
         */
        public function add_zip_ai_modules($modules)
        {
        }
        /**
         * Add the Zip AI Authorization/Revoke URL.
         *
         * @param mixed $auth_url The previous authorization URL, if any.
         * @since 2.10.2
         * @return string The Spectra redirection URL.
         */
        public function add_zip_ai_redirection_url($auth_url)
        {
        }
    }
    /**
     * Class UAGB_Block_Helper.
     */
    class UAGB_Block_Helper
    {
        /**
         * Get Buttons Block CSS
         *
         * @since 1.14.9
         * @param array  $attr The block attributes.
         * @param string $id The key for the Icon List Item.
         * @param string $child_migrate The child migration flag.
         * @return array The Widget List.
         */
        public static function get_buttons_child_selectors($attr, $id, $child_migrate)
        {
        }
        /**
         * Get Social share Block CSS
         *
         * @since 1.14.9
         * @param array  $attr The block attributes.
         * @param string $id The key for the Icon List Item.
         * @param mixed  $childMigrate The child migration flag.
         * @return array The Widget List.
         */
        public static function get_social_share_child_selectors($attr, $id, $childMigrate)
        {
        }
        /**
         * Get Icon List Block CSS
         *
         * @since 1.14.9
         * @param array  $attr The block attributes.
         * @param string $id The key for the Icon List Item.
         * @param string $childMigrate The child migration flag.
         * @return array The Widget List.
         */
        public static function get_icon_list_child_selectors($attr, $id, $childMigrate)
        {
        }
        /**
         * Get Post Block Selectors CSS
         *
         * @param array $attr The block attributes.
         * @since 1.4.0
         */
        public static function get_post_selectors($attr)
        {
        }
        /**
         * Get Post Block Selectors CSS for Mobile devices
         *
         * @param array $attr The block attributes.
         * @since 1.6.1
         */
        public static function get_post_mobile_selectors($attr)
        {
        }
        /**
         * Get Post Block Selectors CSS for Tablet devices
         *
         * @param array $attr The block attributes.
         * @since 1.8.2
         */
        public static function get_post_tablet_selectors($attr)
        {
        }
        /**
         * Get Timeline Block Desktop Selectors CSS
         *
         * @param array $attr The block attributes.
         * @since 1.8.2
         */
        public static function get_timeline_selectors($attr)
        {
        }
        /**
         * Get Timeline Block Tablet Selectors CSS.
         *
         * @param array $attr The block attributes.
         * @since 1.8.2
         */
        public static function get_timeline_tablet_selectors($attr)
        {
        }
        /**
         * Get Timeline Block Mobile Selectors CSS.
         *
         * @param array $attr The block attributes.
         * @since 1.8.2
         */
        public static function get_timeline_mobile_selectors($attr)
        {
        }
        /**
         * Get Condition block CSS.
         *
         * @since 1.22.0
         */
        public static function get_condition_block_css()
        {
        }
        /**
         * Get Masonry Gallery CSS.
         *
         * @since 1.24.0
         * @param array  $attr The block attributes.
         * @param string $id The selector ID.
         */
        public static function get_gallery_css($attr, $id)
        {
        }
        /**
         * Get Masonry Gallery CSS.
         *
         * @since 1.24.0
         */
        public static function get_masonry_gallery_css()
        {
        }
        /**
         * Generates background CSS for a specific device type.
         *
         * This function takes attributes for styling and a device type, and returns
         * the corresponding background object and overlay CSS for that device type.
         *
         * @param array  $attr         The array of attributes containing styling options.
         * @param string $device_type   The device type ('Desktop', 'Tablet', 'Mobile') for which to generate background CSS.
         * @param string $overlay      The overlay option ('no' or 'yes') to determine whether to include overlay CSS.
         *
         * @since 2.7.8
         * @return array               The background CSS object for the specified device type.
         */
        public static function get_background_css_by_device($attr, $device_type = 'Desktop', $overlay = 'no')
        {
        }
        /**
         * Background Control CSS Generator Function.
         *
         * @param array  $bg_obj          The background object with all CSS properties.
         * @param string $css_for_overlay The overlay option ('no' or 'yes') to determine whether to include overlay CSS. Leave empty for blocks that do not use the '::before' overlay.
         *
         * @return array                  The formatted CSS properties for the background.
         */
        public static function uag_get_background_obj($bg_obj, $css_for_overlay = '')
        {
        }
        /**
         * Border attribute generation Function.
         *
         * @since 2.0.0
         * @param  array $prefix   Attribute Prefix.
         * @param array $default_args  default attributes args.
         * @return array
         */
        public static function uag_generate_php_border_attribute($prefix, $default_args = array())
        {
        }
        /**
         * Border attribute generation Function.
         *
         * @since 2.0.0
         * @param  string $prefix   Attribute Prefix.
         * @return array
         */
        public static function uag_generate_border_attribute($prefix)
        {
        }
        /**
         * Border CSS generation Function.
         *
         * @since 2.0.0
         * @param  array  $attr   Attribute List.
         * @param  string $prefix Attribuate prefix .
         * @param  string $device Responsive.
         * @return array         border css array.
         */
        public static function uag_generate_border_css($attr, $prefix, $device = 'desktop')
        {
        }
        /**
         * Deprecated Border CSS generation Function.
         *
         * @since 2.0.0
         * @param  array  $current_css   Current style list.
         * @param  string $border_width   Border Width.
         * @param  string $border_radius Border Radius.
         * @param  string $border_color Border Color.
         * @param string $border_style Border Style.
         */
        public static function uag_generate_deprecated_border_css($current_css, $border_width, $border_radius, $border_color = '', $border_style = '')
        {
        }
        /**
         * For flex-direction: row-reverse, justify-content work opposite.
         *
         * @since 2.0.0
         * @param string $text_align Alignment value from text-align property.
         */
        public static function flex_alignment_when_direction_is_row_reverse($text_align)
        {
        }
        /**
         * Return the Current Attribute or the Default Attribute.
         *
         * @param array  $current_value  The current variable / attribute that is altered by settings.
         * @param string $key           The key of the default attribute for that setting.
         * @param string $block_name     The name of the block.
         */
        public static function get_attribute_fallback($current_value, $key, $block_name)
        {
        }
        /**
         * Return the Current Attribute or the Default Attribute for Numeric Data.
         *
         * @param array  $current_value  The current variable / attribute that is altered by settings.
         * @param string $key           The key of the default attribute for that setting.
         * @param string $block_name     The name of the block.
         */
        public static function get_fallback_number($current_value, $key, $block_name)
        {
        }
        /**
         * Get Matrix Alignment Value
         *
         * Syntax:
         *
         *  get_matrix_alignment( VALUE, POSITION, FORMAT );
         *
         * E.g.
         *
         *  get_matrix_alignment( VALUE, 2, 'flex' );
         *
         * @param string $value  Alignment Matrix value.
         * @param int    $pos    Human readable position.
         * @param string $format Response format.
         * @return string        The formatted Matrix Alignment.
         *
         * @since 2.1.0
         */
        public static function get_matrix_alignment($value, $pos, $format = '')
        {
        }
        /**
         * Generate Border Radius
         *
         * Syntax:
         *
         *  generate_border_radius( UNIT, TOP_LEFT, TOP_RIGHT, BOTTOM_RIGHT, BOTTOM_LEFT );
         *
         * E.g.
         *
         *  generate_border_radius( 'em', 9, 7, 5, 3 );
         *
         * @param string $unit  Alignment Matrix value.
         * @param int    $topLeft  Top Left Value.
         * @param int    $topRight  Top Right Value.
         * @param int    $bottomRight  Bottom Right Value.
         * @param int    $bottomLeft  Bottom Left Value.
         * @since 2.1.0
         */
        public static function generate_border_radius($unit, $topLeft, $topRight = \null, $bottomRight = \null, $bottomLeft = \null)
        {
        }
        /**
         * Generate Spacing
         *
         * Syntax:
         *
         *  generate_spacing( UNIT, TOP, RIGHT, BOTTOM, LEFT );
         *
         * E.g.
         *
         *  generate_spacing( 'em', 9, 7, 5, 3 );
         *
         * @param string $unit   Alignment Matrix value.
         * @param int    $top    Top Value.
         * @param int    $right  Right Value.
         * @param int    $bottom Bottom Value.
         * @param int    $left   Left Value.
         * @since 2.1.0
         */
        public static function generate_spacing($unit, $top, $right = \null, $bottom = \null, $left = \null)
        {
        }
        /**
         * Get the Precise 2-Floating Point Percentage, Rounded to Floor for Precision.
         *
         * Syntax:
         *
         *  get_precise_percentage( DIVISIONS );
         *
         * E.g.
         *
         *  get_precise_percentage( 7 );
         *
         * @param int $divisions The number of divisions.
         * @since 2.0.0
         */
        public static function get_precise_percentage($divisions)
        {
        }
        /**
         * Generate the Box Shadow or Text Shadow CSS.
         *
         * For Text Shadow CSS:
         * ( 'spread', 'position' ) should not be sent as params during the function call.
         * ( 'spread_unit' ) will have no effect.
         *
         * For Box/Text Shadow Hover CSS:
         * ( 'alt_color' ) should be set as the attribute used for ( 'color' ) in Box/Text Shadow Normal CSS.
         *
         * @param array $shadow_properties  Array containing the necessary shadow properties.
         * @return string                   The generated border CSS or an empty string on early return.
         *
         * @since 2.5.0
         */
        public static function generate_shadow_css($shadow_properties)
        {
        }
        /**
         * Generate the Grid CSS.
         *
         * @param array $grid_object  Array containing the necessary grid properties.
         * @return string  The generated grid CSS or an empty string on early return.
         *
         * @since 2.13.0
         */
        public static function grid_css_creator($grid_object)
        {
        }
        /**
         * Generate the Grid CSS object according to the device type.
         *
         * @param array  $attr Array containing the necessary grid properties.
         * @param string $device_type Device type ex : Desktop, Tablet, Mobile.
         * @return array Array of the css object ex : array( 'grid-template-columns' => '1fr 1fr 1fr', 'grid-template-rows' => '1fr 1fr 1fr' )
         * 
         * @since 2.13.0
         */
        public static function grid_css_object($attr, $device_type = 'Desktop')
        {
        }
    }
    /**
     * Class Spectra_Block_Prioritization.
     */
    class Spectra_Block_Prioritization
    {
        /**
         *  Initiator.
         */
        public static function get_instance()
        {
        }
        /**
         * Get the Block Priority of a Specific Block.
         *
         * @since 2.1.0
         * @param string $block_name The slug of the required block.
         */
        public static function get_block_priority($block_name)
        {
        }
    }
    /**
     * Class UAGB_Caching.
     *
     * @since 2.10.1
     */
    class UAGB_Caching
    {
        /**
         *  Initiator
         *
         * @since 2.10.1
         * @return UAGB_Caching
         */
        public static function get_instance()
        {
        }
        /**
         * Constructor
         *
         * @since 2.10.1
         */
        public function __construct()
        {
        }
        /**
         * Clears the cache.
         *
         * @since 2.10.1
         * @return void
         */
        public function clear_cache()
        {
        }
        /**
         * Clears the SiteGround cache.
         *
         * @since 2.10.1
         * @return void
         */
        public static function clear_siteground_cache()
        {
        }
        /**
         * This function helps to purge all cache in clodways envirnoment.
         * In presence of Breeze plugin (https://wordpress.org/plugins/breeze/)
         *
         * @since 2.11.0
         * @return void
         */
        public static function clear_cloudways_cache()
        {
        }
    }
    /**
     * Class UAGB_FSE_Fonts_Compatibility.
     *
     * @since 2.5.1
     */
    final class UAGB_FSE_Fonts_Compatibility
    {
        /**
         *  Initiator
         *
         * @return object instance.
         * @since 2.5.1
         */
        public static function get_instance()
        {
        }
        /**
         * Constructor
         *
         * @return void
         * @since 2.5.1
         */
        public function __construct()
        {
        }
        /**
         * Get, add and update font family in Spectra for ST.
         *
         * @param array $families font family.
         * @since 2.7.0
         * @return void
         */
        public function get_font_family_for_starter_template($families)
        {
        }
        /**
         * Save Google Fonts to the FSE Theme.
         *
         * @return void
         * @since 2.5.1
         */
        public function save_google_fonts_to_theme()
        {
        }
        /**
         * Get Font Slug.
         *
         * @return string slug.
         * @param string $name Font Family.
         * @since 2.5.1
         */
        public function get_font_slug($name)
        {
        }
        /**
         * Get Font URl.
         *
         * @param string $font_family Font Family.
         * @param string $font_weight Font Weight.
         * @param string $font_style Font Style.
         * @return array final font files.
         * @since 2.5.1
         */
        public function get_fonts_file_url($font_family, $font_weight, $font_style)
        {
        }
        /**
         * Get remote file contents.
         *
         * @access public
         * @param string $url URL.
         * @since 2.5.1
         * @return string Returns the remote URL contents.
         */
        public function get_remote_url_contents($url)
        {
        }
        /**
         * Get font files from the CSS.
         *
         * @access public
         * @since 2.5.1
         * @return array Returns an array of font-families and the font-files used.
         */
        public function get_remote_files_from_css()
        {
        }
        /**
         * Get font files from the CSS.
         *
         * @access public
         * @param string $font_name Font Name.
         * @param string $font_slug Font Slug.
         * @param array  $font_faces Font Faces.
         * @return void
         * @since 2.5.1
         */
        public function add_or_update_theme_font_faces($font_name, $font_slug, $font_faces)
        {
        }
        /**
         * Save setting - Sanitizes form inputs.
         *
         * @param array $input_settings setting data.
         * @return array    The sanitized form inputs.
         *
         * @since 2.5.1
         */
        public static function sanitize_form_inputs($input_settings = array())
        {
        }
        /**
         * Delete all Spectra font files from the theme JSON.
         *
         * @return void
         * @since 2.5.1
         */
        public static function delete_all_theme_font_family()
        {
        }
        /**
         * Delete font files from the CSS.
         *
         * @return void
         * @param array $font Font Data.
         * @since 2.5.1
         */
        public static function delete_theme_font_family($font)
        {
        }
    }
    /**
     * Class UAGB_Admin_Helper.
     */
    final class UAGB_Admin_Helper
    {
        /**
         *  Initiator
         *
         * @since 0.0.1
         */
        public static function get_instance()
        {
        }
        /**
         * Get all data from the admin settings page.
         *
         * @return mixed
         * @since 2.0.8
         */
        public static function get_admin_settings_shareable_data()
        {
        }
        /**
         * Update all data from the admin settings page.
         *
         * @param array $data All settings of Admin.
         * @return mixed
         * @since 2.0.8
         */
        public static function update_admin_settings_shareable_data($data = array())
        {
        }
        /**
         * Returns an option from the database for
         * the admin settings page.
         *
         * @param  string  $key     The option key.
         * @param  mixed   $default Option default value if option is not available.
         * @param  boolean $network_override Whether to allow the network admin setting to be overridden on subsites.
         * @return mixed            Return the option value.
         * @since 0.0.1
         */
        public static function get_admin_settings_option($key, $default = \false, $network_override = \false)
        {
        }
        /**
         * Deletes an option from the database for
         * the admin settings page.
         *
         * @param  string  $key     The option key.
         * @param  boolean $network_override Whether to allow the network admin setting to be overridden on subsites.
         * @since 2.8.0
         * @return void            Return the option value.
         */
        public static function delete_admin_settings_option($key, $network_override = \false)
        {
        }
        /**
         * Provide Widget settings.
         *
         * @return array()
         * @since 0.0.1
         */
        public static function get_block_options()
        {
        }
        /**
         * Updates an option from the admin settings page.
         *
         * @param string $key       The option key.
         * @param mixed  $value     The value to update.
         * @param bool   $network   Whether to allow the network admin setting to be overridden on subsites.
         * @return mixed
         * @since 0.0.1
         */
        public static function update_admin_settings_option($key, $value, $network = \false)
        {
        }
        /**
         *  Get Specific Stylesheet
         *
         * @since 1.13.4
         */
        public static function create_specific_stylesheet()
        {
        }
        /**
         * Get Rollback versions.
         *
         * @since 1.23.0
         * @return array
         * @access public
         */
        public function get_rollback_versions()
        {
        }
        /**
         * Sort Rollback versions.
         *
         * @param string $prev Previous Version.
         * @param string $next Next Version.
         *
         * @since 1.23.0
         * @return array
         * @access public
         */
        public function sort_rollback_versions($prev, $next)
        {
        }
        /**
         * Get Global Content Width
         *
         * @since 2.0.0
         * @return int
         * @access public
         */
        public static function get_global_content_width()
        {
        }
        /**
         * Function to check if the current theme is a block theme.
         *
         * @since 2.7.11
         * @return boolean
         */
        public static function is_block_theme()
        {
        }
        /**
         * Get Spectra Pro URL with required params
         *
         * @since 2.7.11
         * @return string
         */
        public static function get_spectra_pro_url()
        {
        }
    }
    /**
     * Class UAGB_Twenty_Seventeen_Compatibility.
     */
    final class UAGB_Twenty_Seventeen_Compatibility
    {
        /**
         *  Initiator
         */
        public static function get_instance()
        {
        }
        /**
         * Constructor
         */
        public function __construct()
        {
        }
        /**
         * Generates stylesheet and appends in head tag.
         *
         * @since 1.18.1
         */
        public function generate_stylesheet()
        {
        }
    }
}
namespace UagAdmin\Inc {
    /**
     * Class Admin_Helper.
     */
    class Admin_Helper
    {
        /**
         * Common.
         *
         * @var object instance
         */
        public static $common = null;
        /**
         * Options.
         *
         * @var object instance
         */
        public static $options = null;
        /**
         * Get Common settings.
         *
         * @return array.
         */
        public static function get_common_settings()
        {
        }
        /**
         * Get Visibility Page
         *
         * @since 2.8.0
         * @return boolean|array
         */
        public static function get_visibility_page()
        {
        }
        /**
         * Get Changelogs from API.
         *
         * @since 2.0.0
         * @return array $changelog_data Changelog Data.
         */
        public static function get_changelog_feed_data()
        {
        }
        /**
         * Get blocks.
         */
        public static function get_blocks()
        {
        }
        /**
         * Get options.
         */
        public static function get_options()
        {
        }
        /**
         * Get Rollback versions.
         *
         * @since 1.23.0
         * @return array
         * @access public
         */
        public static function get_rollback_versions_options()
        {
        }
        /**
         * Sort Rollback versions.
         *
         * @param string $prev Previous Version.
         * @param string $next Next Version.
         *
         * @since 1.23.0
         * @return array
         * @access public
         */
        public static function sort_rollback_versions($prev, $next)
        {
        }
    }
    /**
     * Class Admin_Menu.
     */
    class Admin_Menu
    {
        /**
         * Initiator
         *
         * @since 1.0.0
         * @return object initialized object of class.
         */
        public static function get_instance()
        {
        }
        /**
         * Constructor
         *
         * @since 1.0.0
         */
        public function __construct()
        {
        }
        /**
         * Init Hooks.
         *
         * @since 1.0.0
         * @return void
         */
        public function initialize_hooks()
        {
        }
        /**
         * Show action on plugin page.
         *
         * @param  array $links links.
         * @return array
         */
        public function add_action_links($links)
        {
        }
        /**
         *  Initialize after Spectra gets loaded.
         */
        public function settings_admin_scripts()
        {
        }
        /**
         * Add submenu to admin menu.
         *
         * @since 1.0.0
         */
        public function setup_menu()
        {
        }
        /**
         * Renders the admin settings.
         *
         * @since 1.0.0
         * @return void
         */
        public function render()
        {
        }
        /**
         * Renders the admin settings content.
         *
         * @since 1.0.0
         * @param sting $menu_page_slug current page name.
         * @param sting $page_action current page action.
         *
         * @return void
         */
        public function render_content($menu_page_slug, $page_action)
        {
        }
        /**
         * Enqueues the needed CSS/JS for the builder's admin settings page.
         *
         * @since 1.0.0
         */
        public function styles_scripts()
        {
        }
        /**
         * Create an Array of Blocks info which we need to show in Admin dashboard.
         */
        public function get_blocks_info_for_activation_deactivation()
        {
        }
        /**
         * Get plugin status
         *
         * @since 2.0.0
         *
         * @param  string $plugin_init_file Plguin init file.
         * @return mixed
         */
        public function get_plugin_status($plugin_init_file)
        {
        }
        /**
         * Settings app scripts
         *
         * @param array $localize Variable names.
         */
        public function settings_app_scripts($localize)
        {
        }
        /**
         *  Add footer link.
         */
        public function add_footer_link()
        {
        }
    }
}
namespace UagAdmin {
    /**
     * Class Admin_Loader.
     */
    class Admin_Loader
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
         * Include required classes.
         */
        public function define_constants()
        {
        }
        /**
         * Include required classes.
         */
        public function setup_classes()
        {
        }
    }
}
namespace UagAdmin\Api {
    /**
     * Class Api_Base.
     */
    abstract class Api_Base extends \WP_REST_Controller
    {
        /**
         * Endpoint namespace.
         *
         * @var string
         */
        protected $namespace = 'uag/v1';
        /**
         * Register API routes.
         */
        public function get_api_namespace()
        {
        }
    }
    /**
     * Class Admin_Query.
     */
    class Common_Settings extends \UagAdmin\Api\Api_Base
    {
        /**
         * Route base.
         *
         * @var string
         */
        protected $rest_base = '/admin/commonsettings/';
        /**
         * Initiator
         *
         * @since 1.0.0
         * @return object initialized object of class.
         */
        public static function get_instance()
        {
        }
        /**
         * Init Hooks.
         *
         * @since 1.0.0
         * @return void
         */
        public function register_routes()
        {
        }
        /**
         * Get common settings.
         *
         * @param  WP_REST_Request $request Full details about the request.
         */
        public function get_common_settings($request)
        {
        }
        /**
         * Check whether a given request has permission to read notes.
         *
         * @param  WP_REST_Request $request Full details about the request.
         * @return WP_Error|boolean
         */
        public function get_items_permissions_check($request)
        {
        }
    }
    /**
     * Class Api_Init.
     */
    class Api_Init
    {
        /**
         * Initiator
         *
         * @since 1.0.0
         * @return object initialized object of class.
         */
        public static function get_instance()
        {
        }
        /**
         * Constructor
         *
         * @since 1.0.0
         */
        public function __construct()
        {
        }
        /**
         * Init Hooks.
         *
         * @since 1.0.0
         * @return void
         */
        public function initialize_hooks()
        {
        }
        /**
         * Init dynamic property setter
         *
         * @param string $name  Property name.
         * @param mixed  $value Property value.
         *
         * @since 2.7.10
         * @return void
         */
        public function __set($name, $value)
        {
        }
        /**
         * Init dynamic property getter
         *
         * @param string $name Property name.
         *
         * @since 2.7.10
         * @return mixed Property value if set, null otherwise.
         */
        public function __get($name)
        {
        }
        /**
         * Register API routes.
         */
        public function register_routes()
        {
        }
    }
}
namespace UagAdmin\Ajax {
    /**
     * Class Ajax_Base.
     */
    abstract class Ajax_Base
    {
        /**
         * Erros class instance.
         *
         * @var object
         */
        public $errors = null;
        /**
         * Constructor
         *
         * @since 2.0.0
         */
        public function __construct()
        {
        }
        /**
         * Register ajax events.
         *
         * @param array $ajax_events Ajax events.
         */
        public function init_ajax_events($ajax_events)
        {
        }
        /**
         * Localize nonce for ajax call.
         *
         * @param string $action Action name.
         * @return void
         */
        public function localize_ajax_action_nonce($action)
        {
        }
        /**
         * Get ajax error message.
         *
         * @param string $type Message type.
         * @return string
         */
        public function get_error_msg($type)
        {
        }
    }
    /**
     * Class Common_Settings.
     */
    class Common_Settings extends \UagAdmin\Ajax\Ajax_Base
    {
        /**
         * Initiator
         *
         * @return object initialized object of class.
         *
         * @since 2.0.0
         */
        public static function get_instance()
        {
        }
        /**
         * Register_ajax_events.
         *
         * @return void
         */
        public function register_ajax_events()
        {
        }
        /**
         * Save global option of button to inherit from theme.
         *
         * @since 2.6.2
         * @return void
         */
        public function btn_inherit_from_theme()
        {
        }
        /**
         * Required Spectra Pro Plugin Activate
         *
         * @return void
         */
        public function pro_activate()
        {
        }
        /**
         * Save settings - Saves google recaptcha v3 secret key.
         *
         * @return void
         */
        public function recaptcha_secret_key_v3()
        {
        }
        /**
         * Save settings - Saves google recaptcha v2 secret key.
         *
         * @return void
         */
        public function recaptcha_secret_key_v2()
        {
        }
        /**
         * Save settings - Saves google recaptcha v2 site key.
         *
         * @return void
         */
        public function recaptcha_site_key_v2()
        {
        }
        /**
         * Save settings - Saves google recaptcha v3 site key.
         *
         * @return void
         */
        public function recaptcha_site_key_v3()
        {
        }
        /**
         * Save settings - Saves fetch_pages.
         *
         * @return void
         */
        public function fetch_pages()
        {
        }
        /**
         * Save settings - Saves visibility_page.
         *
         * @return void
         */
        public function visibility_page()
        {
        }
        /**
         * Save settings - Saves visibility_mode.
         *
         * @return void
         */
        public function visibility_mode()
        {
        }
        /**
         * Save setting - Saves content_width.
         *
         * @return void
         */
        public function content_width()
        {
        }
        /**
         * Save setting - Saves container global padding.
         *
         * @return void
         */
        public function container_global_padding()
        {
        }
        /**
         * Save setting - Saves container global elements gap.
         *
         * @return void
         */
        public function container_global_elements_gap()
        {
        }
        /**
         * Save setting - Saves blocks editor spacing.
         *
         * @return void
         */
        public function blocks_editor_spacing()
        {
        }
        /**
         * Save setting - Loads selected font globally.
         *
         * @return void
         */
        public function load_select_font_globally()
        {
        }
        /**
         * Save setting - Loads selected font globally.
         *
         * @since 2.5.1
         * @return void
         */
        public function load_fse_font_globally()
        {
        }
        /**
         * Save setting - Saves selected font globally.
         *
         * @since 2.5.1
         * @return void
         */
        public function select_font_globally()
        {
        }
        /**
         * Save setting - Saves selected font globally.
         *
         * @since 2.5.1
         * @return void
         */
        public function fse_font_globally_delete()
        {
        }
        /**
         * Save setting - Saves selected font globally.
         *
         * @since 2.5.1
         * @return void
         */
        public function fse_font_globally()
        {
        }
        /**
         * Save setting - Enables masonry gallery.
         *
         * @return void
         */
        public function enable_masonry_gallery()
        {
        }
        /**
         * Save setting - Enables quick action sidebar.
         *
         * @since 2.12.0
         * @return void
         */
        public function enable_quick_action_sidebar()
        {
        }
        /**
         * Save setting - Loads gfonts locally.
         *
         * @return void
         */
        public function load_gfonts_locally()
        {
        }
        /**
         * Save setting - Collapses panels.
         *
         * @return void
         */
        public function collapse_panels()
        {
        }
        /**
         * Save setting - Enables copy paste.
         *
         * @return void
         */
        public function copy_paste()
        {
        }
        /**
         * Save setting - Saves social settings.
         *
         * @return void
         *
         * @since 2.1.0
         */
        public function social()
        {
        }
        /**
         * Save setting - Enables dynamic content mode.
         *
         * @return void
         *
         * @since 2.1.0
         */
        public function dynamic_content_mode()
        {
        }
        /**
         * Save setting - Preloads local fonts.
         *
         * @return void
         */
        public function preload_local_fonts()
        {
        }
        /**
         * Save setting - Enables block conditions.
         *
         * @return void
         *
         * @since 2.4.0
         */
        public function enable_block_condition()
        {
        }
        /**
         * Save setting - Enables block responsiveness.
         *
         * @return void
         */
        public function enable_block_responsive()
        {
        }
        /**
         * Save setting - Enables dynamic content.
         *
         * @return void
         *
         * @since 2.1.0
         */
        public function enable_dynamic_content()
        {
        }
        /**
         * Save setting - Enables animation extension.
         *
         * @return void
         *
         * @since 2.6.0
         */
        public function enable_animations_extension()
        {
        }
        /**
         * Save settings - Enables templates button.
         *
         * @return void
         */
        public function enable_templates_button()
        {
        }
        /**
         * Save setting - Enables the on-page CSS button .
         *
         * @return void
         */
        public function enable_on_page_css_button()
        {
        }
        /**
         * Save setting - Activates and deactivates blocks .
         *
         * @return void
         */
        public function blocks_activation_and_deactivation()
        {
        }
        /**
         * Save setting - Enables beta updates.
         *
         * @return void
         */
        public function enable_beta_updates()
        {
        }
        /**
         * Save setting - Enables legacy blocks.
         *
         * @return void
         */
        public function enable_legacy_blocks()
        {
        }
        /**
         * Save setting - Enables file generation.
         *
         * @return void
         */
        public function enable_file_generation()
        {
        }
        /**
         * Delete all Assets.
         *
         * @since 2.6.2
         * @return void
         */
        public function delete_all_assets()
        {
        }
        /**
         * Save setting - Regenerates assets.
         *
         * @return void
         */
        public function regenerate_assets()
        {
        }
        /**
         * Save setting - Sanitizes form inputs.
         *
         * @param array $input_settings setting data.
         * @return array    The sanitized form inputs.
         */
        public function sanitize_form_inputs($input_settings = array())
        {
        }
        /**
         * Save setting - Loads font awesome 5.
         *
         * @return void
         */
        public function load_font_awesome_5()
        {
        }
        /**
         * Save setting - Auto recovers the block.
         *
         * @return void
         */
        public function auto_block_recovery()
        {
        }
        /**
         * Save setting - All Linked Instagram Accounts.
         *
         * @return void
         *
         * @since 2.4.1
         */
        public function insta_linked_accounts()
        {
        }
        /**
         * Save setting - All Instagram Users' Media.
         *
         * @return void
         *
         * @since 2.4.1
         */
        public function insta_all_users_media()
        {
        }
        /**
         * Ajax Request - Refresh All Instagram Tokens.
         *
         * @return void
         *
         * @since 2.4.1
         */
        public function insta_refresh_all_tokens()
        {
        }
        /**
         * Save setting - Enables GBS extension.
         *
         * @since 2.9.0
         * @return void
         */
        public function enable_gbs_extension()
        {
        }
        /**
         * Generate or delete default block css files.
         * These generated files will be used in frontend.
         * when user will disable GBS extension.
         *
         * @param string $value value will be enabled or disabled.
         * @since 2.9.0
         * @return void
         */
        public function save_gbs_default_in_upload_folder($value)
        {
        }
        /**
         * Save setting - Enables or Disables the given Zip AI Module.
         *
         * @since 2.10.2
         * @return void
         */
        public function zip_ai_module_status()
        {
        }
        /**
         * Ajax Request - Verify if Zip AI is authorized.
         *
         * @since 2.10.2
         * @return void
         */
        public function zip_ai_verify_authenticity()
        {
        }
        /**
         * Save setting - Enables the header titlebar.
         *
         * @since 2.13.1
         * @return void
         */
        public function enable_header_titlebar()
        {
        }
    }
    /**
     * Class Ajax_Init.
     */
    class Ajax_Init
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
         * Constructor
         *
         * @since 2.0.0
         */
        public function __construct()
        {
        }
        /**
         * Init Hooks.
         *
         * @since 2.0.0
         * @return void
         */
        public function initialize_hooks()
        {
        }
        /**
         * Init dynamic property setter
         *
         * @param string $name  Property name.
         * @param mixed  $value Property value.
         *
         * @since 2.7.10
         * @return void
         */
        public function __set($name, $value)
        {
        }
        /**
         * Init dynamic property getter
         *
         * @param string $name Property name.
         *
         * @since 2.7.10
         * @return mixed Property value if set, null otherwise.
         */
        public function __get($name)
        {
        }
        /**
         * Register Ajax actions.
         */
        public function register_all_ajax_events()
        {
        }
    }
    /**
     * Class Ajax_Errors
     */
    class Ajax_Errors
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
         * Constructor
         *
         * @since 2.0.0
         */
        public function __construct()
        {
        }
        /**
         * Get error message.
         *
         * @param string $type Message type.
         * @return string
         */
        public function get_error_msg($type)
        {
        }
    }
}
namespace {
    /**
     * Download webfonts locally.
     */
    class UAGB_WebFont_Loader
    {
        /**
         * The font-format.
         *
         * Use "woff" or "woff2".
         * This will change the user-agent user to make the request.
         *
         * @access protected
         * @since 1.0.0
         * @var string
         */
        protected $font_format = 'woff2';
        /**
         * The remote URL.
         *
         * @access protected
         * @since 1.1.0
         * @var string
         */
        protected $remote_url;
        /**
         * Base path.
         *
         * @access protected
         * @since 1.1.0
         * @var string
         */
        protected $base_path;
        /**
         * Base URL.
         *
         * @access protected
         * @since 1.1.0
         * @var string
         */
        protected $base_url;
        /**
         * Subfolder name.
         *
         * @access protected
         * @since 1.1.0
         * @var string
         */
        protected $subfolder_name;
        /**
         * The fonts folder.
         *
         * @access protected
         * @since 1.1.0
         * @var string
         */
        protected $fonts_folder;
        /**
         * The fonts folder url.
         *
         * @access protected
         * @since 1.1.0
         * @var string
         */
        protected $fonts_folder_url;
        /**
         * The local stylesheet's path.
         *
         * @access protected
         * @since 1.1.0
         * @var string
         */
        protected $local_stylesheet_path;
        /**
         * The local stylesheet's URL.
         *
         * @access protected
         * @since 1.1.0
         * @var string
         */
        protected $local_stylesheet_url;
        /**
         * The remote CSS.
         *
         * @access protected
         * @since 1.1.0
         * @var string
         */
        protected $remote_styles;
        /**
         * The final CSS.
         *
         * @access protected
         * @since 1.1.0
         * @var string
         */
        protected $css;
        /**
         * Cleanup routine frequency.
         */
        const CLEANUP_FREQUENCY = 'monthly';
        /**
         * Constructor.
         *
         * Get a new instance of the object for a new URL.
         *
         * @access public
         * @since 1.1.0
         * @param string $url The remote URL.
         */
        public function __construct($url = '')
        {
        }
        /**
         * Get the local URL which contains the styles.
         *
         * Fallback to the remote URL if we were unable to write the file locally.
         *
         * @access public
         * @since 1.1.0
         * @return string
         */
        public function get_url()
        {
        }
        /**
         * Get the local stylesheet URL.
         *
         * @access public
         * @since 1.1.0
         * @return string
         */
        public function get_local_stylesheet_url()
        {
        }
        /**
         * Get styles with fonts downloaded locally.
         *
         * @access public
         * @since 1.0.0
         * @return string
         */
        public function get_styles()
        {
        }
        /**
         * Get styles from remote url with fonts downloaded locally without writing css file.
         * Note - It always request to remote and it will not create a file on local.
         *
         * @access public
         * @since 1.0.0
         * @return string
         */
        public function get_remote_styles()
        {
        }
        /**
         * Get local stylesheet contents.
         *
         * @access public
         * @since 1.1.0
         * @return string|false Returns the remote URL contents.
         */
        public function get_local_stylesheet_contents()
        {
        }
        /**
         * Get remote file contents.
         *
         * @access public
         * @since 1.0.0
         * @return string Returns the remote URL contents.
         */
        public function get_remote_url_contents()
        {
        }
        /**
         * Download files mentioned in our CSS locally.
         *
         * @access public
         * @since 1.0.0
         * @return array Returns an array of remote URLs and their local counterparts.
         */
        public function get_local_files_from_css()
        {
        }
        /**
         * Get font files from the CSS.
         *
         * @access public
         * @since 1.0.0
         * @return array Returns an array of font-families and the font-files used.
         */
        public function get_remote_files_from_css()
        {
        }
        /**
         * Write the CSS to the filesystem.
         *
         * @access protected
         * @since 1.1.0
         * @return string|false Returns the absolute path of the file on success, or false on fail.
         */
        protected function write_stylesheet()
        {
        }
        /**
         * Get the stylesheet path.
         *
         * @access public
         * @since 1.1.0
         * @return string
         */
        public function get_local_stylesheet_path()
        {
        }
        /**
         * Get the local stylesheet filename.
         *
         * This is a hash, generated from the site-URL, the wp-content path and the URL.
         * This way we can avoid issues with sites changing their URL, or the wp-content path etc.
         *
         * @access public
         * @since 1.1.0
         * @return string
         */
        public function get_local_stylesheet_filename()
        {
        }
        /**
         * Set the font-format to be used.
         *
         * @access public
         * @since 1.0.0
         * @param string $format The format to be used. Use "woff" or "woff2".
         * @return void
         */
        public function set_font_format($format = 'woff2')
        {
        }
        /**
         * Check if the local stylesheet exists.
         *
         * @access public
         * @since 1.1.0
         * @return bool
         */
        public function local_file_exists()
        {
        }
        /**
         * Get the base path.
         *
         * @access public
         * @since 1.1.0
         * @return string
         */
        public function get_base_path()
        {
        }
        /**
         * Get the base URL.
         *
         * @access public
         * @since 1.1.0
         * @return string
         */
        public function get_base_url()
        {
        }
        /**
         * Get the subfolder name.
         *
         * @access public
         * @since 1.1.0
         * @return string
         */
        public function get_subfolder_name()
        {
        }
        /**
         * Get the folder for fonts.
         *
         * @access public
         * @return string
         */
        public function get_fonts_folder()
        {
        }
        /**
         * Get the url to folder of fonts.
         *
         * @access public
         * @return string
         */
        public function get_fonts_folder_url()
        {
        }
        /**
         * Schedule a cleanup.
         *
         * Deletes the fonts files on a regular basis.
         * This way font files will get updated regularly,
         * and we avoid edge cases where unused files remain in the server.
         *
         * @access public
         * @since 1.1.0
         * @return void
         */
        public function schedule_cleanup()
        {
        }
        /**
         * Delete the fonts folder.
         *
         * This runs as part of a cleanup routine.
         *
         * @access public
         * @since 1.1.0
         * @return bool
         */
        public function delete_fonts_folder()
        {
        }
        /**
         * Get the filesystem.
         *
         * @access protected
         * @since 1.0.0
         * @return WP_Filesystem
         */
        protected function get_filesystem()
        {
        }
        /**
         * Get the font files and preload them.
         *
         * @access public
         */
        public function get_preload_local_fonts()
        {
        }
    }
}
namespace ZipAI {
    /**
     * Plugin_Loader
     *
     * @since 1.0.0
     */
    class Loader
    {
        /**
         * Initiator
         *
         * @since 1.0.0
         * @return object initialized object of class.
         */
        public static function get_instance()
        {
        }
        /**
         * Autoload classes.
         *
         * @param string $class class name.
         */
        public function autoload($class)
        {
        }
        /**
         * Constructor
         *
         * @since 1.0.0
         */
        public function __construct()
        {
        }
        /**
         * Load Plugin Text Domain.
         * This will load the translation textdomain depending on the file priorities.
         *      1. Global Languages /wp-content/languages/zip-ai/ folder
         *      2. Local directory /wp-content/plugins/zip-ai/languages/ folder
         *
         * @since 1.0.0
         * @return void
         */
        public function load_textdomain()
        {
        }
        /**
         * Define the required constants.
         *
         * @since 1.0.0
         * @return void
         */
        public function define_constants()
        {
        }
        /**
         * Setup the required classes.
         *
         * @since 1.0.0
         * @return void
         */
        public function setup_classes()
        {
        }
    }
}
namespace ZipAI\Classes {
    /**
     * The Sidebar_Configurations Class.
     */
    class Sidebar_Configurations
    {
        /**
         * Initiator of this class.
         *
         * @since 1.0.0
         * @return object initialized object of this class.
         */
        public static function get_instance()
        {
        }
        /**
         * Constructor of this class.
         *
         * @since 1.0.0
         * @return void
         */
        public function __construct()
        {
        }
        /**
         * Register All Routes.
         *
         * @hooked - rest_api_init
         * @since 1.0.0
         * @return void
         */
        public function register_route()
        {
        }
        /**
         * Checks whether the value is boolean or not.
         *
         * @param mixed $value value to be checked.
         * @since 1.0.0
         * @return boolean
         */
        public function sanitize_boolean_field($value)
        {
        }
        /**
         * Fetches ai data from the middleware server - this will be merged with the get_credit_server_response() function.
         *
         * @param \WP_REST_Request $request request object.
         * @since 1.0.0
         * @return void
         */
        public function generate_ai_content($request)
        {
        }
        /**
         * Ajax handeler to verify the Zip AI authorization.
         *
         * @since 1.0.0
         * @return void
         */
        public function verify_authenticity()
        {
        }
        /**
         * Enqueue the AI Asssitant Sidebar assets.
         *
         * @return void
         * @since 1.0.0
         */
        public function load_sidebar_assets()
        {
        }
        /**
         * Add the Zip AI Assistant Sidebar to the admin bar.
         *
         * @param object $admin_bar The admin bar object.
         * @since 1.1.0
         * @return void
         */
        public function add_admin_trigger($admin_bar)
        {
        }
        /**
         * Render the AI Assistant Sidebar markup.
         *
         * @since 1.1.0
         * @return void
         */
        public static function render_sidebar_markup()
        {
        }
    }
    /**
     * The Module Class.
     */
    class Module
    {
        /**
         * Function to migrate older Zip AI settings into the new modular format.
         *
         * @since 1.0.5
         * @return void
         */
        public static function migrate_options()
        {
        }
        /**
         * Function to get all the availabe Zip AI Modules, after applying the filter.
         *
         * First all the filtered modules and the modules from the database will be fetched.
         * Then the database modules will be cross-checked against the valid filtered modules.
         * This is done so that even if a value exists in the database, if the product that is adding the filter is disabled, the feature will be considered as non-existent.
         * Finally the required data from the database will overwrite the filtered defaults, and only the valid modules will be returned for use.
         *
         * @since 1.0.5
         * @return array Array of all the available Zip AI Modules and their details.
         */
        public static function get_all_modules()
        {
        }
        /**
         * Enable Zip AI Module(s).
         *
         * If a string is passed, that module will be enabled if valid.
         * If an array is passed, all valid modules will be enabled.
         *
         * @param string|array $module_name Name of the module or an array of module names.
         * @since 1.0.5
         * @return boolean True if Zip AI module(s) has been enabled, false otherwise.
         */
        public static function enable($module_name)
        {
        }
        /**
         * Function to disable Zip AI Module(s).
         *
         * If a string is passed, that module will be disabled if valid.
         * If an array is passed, all valid modules will be disabled.
         *
         * @param string|array $module_name Name of the module or an array of module names.
         * @since 1.0.5
         * @return boolean True if Zip AI module(s) has been enabled, false otherwise.
         */
        public static function disable($module_name)
        {
        }
        /**
         * Function to check if Zip AI Module is enabled.
         *
         * @param string $module_name Name of the module.
         * @since 1.0.5
         * @return boolean True if Zip AI is enabled, false otherwise.
         */
        public static function is_enabled($module_name)
        {
        }
        /**
         * Enable the given Zip AI module if it exists, else create and enable it.
         *
         * @param array  $modules     The reference to the modules array that will be modified.
         * @param string $module_name The module name.
         * @since 1.1.0
         * @return void
         */
        public static function force_enabled(&$modules, $module_name)
        {
        }
    }
    /**
     * The Helper Class.
     */
    class Helper
    {
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
         * Update an option from the database.
         *
         * @param string $key              The option key.
         * @param mixed  $value            The value to update.
         * @param bool   $network_override Whether to allow the network_override admin setting to be overridden on subsites.
         * @since 1.0.0
         * @return bool True if the option was updated, false otherwise.
         */
        public static function update_admin_settings_option($key, $value, $network_override = false)
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
         * Check if Zip AI is authorized.
         *
         * @since 1.0.0
         * @return boolean True if Zip AI is authorized, false otherwise.
         */
        public static function is_authorized()
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
         * Get the Token Count for a given message.
         *
         * @param string $message The message to get the token count for.
         * @since 1.0.0
         * @return int The token count.
         */
        public static function get_token_count($message)
        {
        }
        /**
         * Get the Zip AI Response from the Zip Credit Server.
         *
         * @param string $endpoint The endpoint to get the response from.
         * @since 1.0.0
         * @return array The Zip AI Response.
         */
        public static function get_credit_server_response($endpoint)
        {
        }
        /**
         * Get a response from the ZipWP API server.
         *
         * @param string $endpoint The endpoint to get the response from.
         * @since 1.1.2
         * @return array The ZipWP API Response.
         */
        public static function get_zipwp_api_response($endpoint)
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
         * Get the decrypted ZipWP token.
         *
         * @since 1.1.2
         * @return string The decrypted ZipWP token.
         */
        public static function get_decrypted_zipwp_token()
        {
        }
        /**
         * This helper function returns credit details.
         *
         * @since 1.0.0
         * @return array
         */
        public static function get_credit_details()
        {
        }
        /**
         * This helper function returns the current plan details.
         *
         * @since 1.1.2
         * @return array
         */
        public static function get_current_plan_details()
        {
        }
        /**
         * Get the authorization middleware url.
         *
         * @param array $params An array of parameters to add to the middleware URL.
         * @since 1.0.0
         * @return string The authorization middleware url.
         */
        public static function get_auth_middleware_url($params = [])
        {
        }
        /**
         * Get the revoke url for the auth token.
         *
         * @since 1.0.0
         * @return string The authorization revoke url.
         */
        public static function get_auth_revoke_url()
        {
        }
    }
    /**
     * The Utils Class.
     */
    class Utils
    {
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
    }
    /**
     * The Admin_Configurations Class.
     */
    class Admin_Configurations
    {
        /**
         * Initiator of this class.
         *
         * @since 1.0.0
         * @return object initialized object of this class.
         */
        public static function get_instance()
        {
        }
        /**
         * Constructor of this class.
         *
         * @since 1.0.0
         * @return void
         */
        public function __construct()
        {
        }
        /**
         * Add the Zip AI menu page.
         *
         * @since 1.0.0
         * @return void
         */
        public function setup_menu_page()
        {
        }
        /**
         * Verify if the user was given authorization to use Zip AI.
         *
         * @since 1.0.0
         * @return void
         */
        public function verify_authorization()
        {
        }
        /**
         * Setup the Ajax Event to Entirely Disable the Zip AI Library from loading.
         *
         * @since 1.0.5
         * @return void
         */
        public function disabler_ajax()
        {
        }
        /**
         * Setup the AI Assistant Toggle Ajax.
         *
         * @since 1.0.0
         * @return void
         */
        public function toggle_assistant_status_ajax()
        {
        }
        /**
         * Render the Zip AI Admin Settings Page.
         *
         * @since 1.0.0
         * @return void
         */
        public function render_dashboard()
        {
        }
        /**
         * Load the Admin Settings and Scripts on initialization.
         *
         * @since 1.0.0
         * @return void
         */
        public function settings_admin_scripts()
        {
        }
        /**
         * Enqueues the needed CSS/JS for Zip AI's admin settings page.
         *
         * @since 1.0.0
         * @return void
         */
        public function enqueue_styles_and_scripts()
        {
        }
        /**
         * Localize and Enqueue the Admin Scripts.
         *
         * @param array $localize The data to localize.
         * @since 1.0.0
         * @return void
         */
        public function localize_and_enqueue_admin_scripts($localize)
        {
        }
        /**
         * Add the footer link.
         *
         * @since 1.0.0
         * @return string The footer link.
         */
        public function add_footer_link()
        {
        }
    }
    /**
     * The Token_Calculator Class.
     *
     * @since 1.0.0
     */
    class Token_Calculator
    {
        /**
         * Get the GPT encoded tokens.
         *
         * @param string $text The text to encode.
         * @since 1.0.0
         * @return array The encoded tokens.
         */
        public static function gpt_encode($text)
        {
        }
        /**
         * Get the ranks of the BPE merges.
         *
         * @param array $x The BPE merges.
         * @param array $y The range.
         * @since 1.0.0
         * @return array The ranks.
         */
        public static function gpt_dict_zip($x, $y)
        {
        }
        /**
         * Get the UTF-8 character of the given string/token.
         *
         * @param string $str The string/token.
         * @since 1.0.0
         * @return string The UTF-8 character.
         */
        public static function gpt_utf8_encode($str)
        {
        }
        /**
         * Get the byte size of the given character.
         *
         * @param string $c The character.
         * @since 1.0.0
         * @return int The byte size.
         */
        public static function gpt_unichr($c)
        {
        }
        /**
         * Get the encoded BPE tokens.
         *
         * @param string $token The token.
         * @param array  $bpe_ranks The BPE ranks.
         * @param array  $cache The cache.
         */
        public static function gpt_bpe($token, $bpe_ranks, &$cache)
        {
        }
        /**
         * Split a string into UTF-8 characters.
         *
         * @param string $str The string.
         * @param int    $len The length - default 1.
         * @since 1.0.0
         * @return array The UTF-8 characters.
         */
        public static function gpt_split($str, $len = 1)
        {
        }
        /**
         * Get the pairs of a word.
         *
         * @param string $word The word.
         * @since 1.0.0
         * @return array The pairs.
         */
        public static function gpt_get_pairs($word)
        {
        }
        /**
         * Get the index of a value in an array.
         *
         * @param array  $arrax The array.
         * @param string $search_element The value to search for.
         * @param int    $from_index The index to start searching from.
         * @since 1.0.0
         * @return int The index.
         */
        public static function gpt_index_of($arrax, $search_element, $from_index)
        {
        }
        /**
         * Filter a variable.
         *
         * @param mixed $var The variable.
         * @since 1.0.0
         * @return bool Whether the variable is not null, false, or empty.
         */
        public static function gpt_filter($var)
        {
        }
    }
}
namespace {
    /**
     * This class connect zip ai library with spectra
     *
     * @since 2.10.2
     */
    class UAGB_Zip_AI
    {
        /**
         * Get Instance
         *
         * @since 2.10.2
         *
         * @return object Class object.
         */
        public static function get_instance()
        {
        }
        /**
         * Checks for latest version of zip-ai library available in environment.
         *
         * @since 2.10.2
         *
         * @return void
         */
        public function version_check()
        {
        }
        /**
         * Load latest zip-ai library
         *
         * @since 2.10.2
         *
         * @return void
         */
        public function load()
        {
        }
    }
    /**
     * Admin
     */
    class UAGB_Ast_Block_Templates
    {
        /**
         * Get Instance
         *
         * @since 1.0.0
         *
         * @return object Class object.
         */
        public static function get_instance()
        {
        }
        /**
         * Add support to change template button text.
         *
         * @since 1.21.0
         * @param  array $vars localize array of button.
         */
        public function update_vars($vars = array())
        {
        }
        /**
         * Version Check
         *
         * @return void
         */
        public function version_check()
        {
        }
        /**
         * Load latest plugin
         *
         * @return void
         */
        public function load()
        {
        }
    }
    /**
     * Astra_Notices
     *
     * @since 1.0.0
     */
    class Astra_Notices
    {
        /**
         * Initiator
         *
         * @since 1.0.0
         * @return object initialized object of class.
         */
        public static function get_instance()
        {
        }
        /**
         * Constructor
         *
         * @since 1.0.0
         */
        public function __construct()
        {
        }
        /**
         * Filters and Returns a list of allowed tags and attributes for a given context.
         *
         * @param array  $allowedposttags array of allowed tags.
         * @param string $context Context type (explicit).
         * @since 1.0.0
         * @return array
         */
        public function add_data_attributes($allowedposttags, $context)
        {
        }
        /**
         * Add Notice.
         *
         * @since 1.0.0
         * @param array $args Notice arguments.
         * @return void
         */
        public static function add_notice($args = array())
        {
        }
        /**
         * Dismiss Notice.
         *
         * @since 1.0.0
         * @return void
         */
        public function dismiss_notice()
        {
        }
        /**
         * Enqueue Scripts.
         *
         * @since 1.0.0
         * @return void
         */
        public function enqueue_scripts()
        {
        }
        /**
         * Sort the notices based on the given priority of the notice.
         * This function is called from usort()
         *
         * @since 1.5.2
         * @param array $notice_1 First notice.
         * @param array $notice_2 Second Notice.
         * @return array
         */
        public function sort_notices($notice_1, $notice_2)
        {
        }
        /**
         * Display the notices in the WordPress admin.
         *
         * @since 1.0.0
         * @return void
         */
        public function show_notices()
        {
        }
        /**
         * Render a notice.
         *
         * @since 1.0.0
         * @param  array $notice Notice markup.
         * @return void
         */
        public static function markup($notice = array())
        {
        }
        /**
         * Get base URL for the astra-notices.
         *
         * @return mixed URL.
         */
        public static function get_url()
        {
        }
    }
}
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
         * @var string Last checksums.
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
         * @return array
         */
        public function get_default_color_palette()
        {
        }
        /**
         * Add .json files as supported format in the uploader.
         *
         * @param array $mimes Already supported mime types.
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
         * Import Block
         */
        public function import_block()
        {
        }
        /**
         * Import Images if required.
         *
         * @param string $content block content.
         * @return void
         */
        public function maybe_import_images($content)
        {
        }
        /**
         * Replace content
         *
         * @param  string $content         Content.
         * @param  array  $dynamic_content Dynamic content.
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
         * @param  array        $allowedposttags   Array of default allowable HTML tags.
         * @param  string|array $context    The context for which to retrieve tags. Allowed values are 'post',
         *                                  'strip', 'data', 'entities', or the name of a field filter such as
         *                                  'pre_user_description'.
         * @return array Array of allowed HTML tags and their allowed attributes.
         */
        public function allowed_tags_and_attributes($allowedposttags, $context)
        {
        }
        /**
         * Activate Plugin
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
         * @return array page builder sites.
         */
        public function get_all_sites()
        {
        }
        /**
         * Get all blocks
         *
         * @since 1.0.0
         * @return array All Elementor Blocks.
         */
        public function get_all_blocks()
        {
        }
        /**
         * Download File Into Uploads Directory
         *
         * @since 1.0.0
         *
         * @param  string $file Download File URL.
         * @param  array  $overrides Upload file arguments.
         * @param  int    $timeout_seconds Timeout in downloading the XML file in seconds.
         * @return array        Downloaded file data.
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
        public function remove_query_params($url, $params) : string
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
         * @param  array $args       Arguments.
         * @param  array $assoc_args Associated Arguments.
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
         * @param  array $attachments Attachment array.
         * @return array              Attachment array.
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
         * Import Image
         *
         * @since 1.0.0
         * @param  array $attachment Attachment array.
         * @return array              Attachment array.
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
         * @return array<string,string,string,string,string,string,string,int> | string Array for business details or single detail in a string.
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
        public static function get_image_orientation($url)
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
         * @return array
         */
        public function check_checksum_and_get_blocks_data()
        {
        }
        /**
         * Process Data Sync
         *
         * @since 2.0.0
         * @param  array $data Data to process.
         * @return void
         */
        public function process_data_sync($data)
        {
        }
        /**
         * Json Files Names.
         *
         * @since 1.0.1
         * @return array
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
         * @var (array) images
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
         * @return array Array of images.
         * @since {{since}}
         */
        public function get_images()
        {
        }
        /**
         * Get Image for the specified index and orientation
         *
         * @param int $index Index of the image.
         * @return array|boolean Array of images or false.
         * @since {{since}}
         */
        public function get_image($index = 0)
        {
        }
        /**
         * Download image from URL.
         *
         * @param array $image Image data.
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
    class Upgrade
    {
        use \Gutenberg_Templates\Inc\Traits\Instance;
        /**
         * Constructor
         */
        public function __construct()
        {
        }
        /**
         * Activate Plugin
         */
        public function skip_spectra_pro_onboarding()
        {
        }
    }
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
         */
        public function ast_block_templates_log($message = '')
        {
        }
        /**
         * Doing WP CLI
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
         * @return boolean
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
         * @return array
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
    }
}
namespace Gutenberg_Templates\Inc\Classes {
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
         * @param array $categories Categories.
         * @param array $post_data Post Data.
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
         * @param array  $categories Categories.
         * @param string $club_categories Club Categories.
         *
         * @return array
         */
        public function get_matching_categories($categories, $club_categories)
        {
        }
        /**
         * Get AI Content
         *
         * @since 2.0.0
         * @param array  $post_data Post Data.
         * @param string $category_content Categories content.
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
         * @return WP_REST_Response
         */
        public function set($request) : \WP_REST_Response
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
        public function set() : \WP_REST_Response
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
         * This will load the translation textdomain depending on the file priorities.
         *      1. Global Languages /wp-content/languages/gutenberg-templates/ folder
         *      2. Local dorectory /wp-content/plugins/gutenberg-templates/languages/ folder
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
    /**
     * Get frontend post_assets obj.
     *
     * @since 1.23.0
     */
    function uagb_get_front_post_assets()
    {
    }
    /**
     * Filesystem class
     *
     * @since 1.23.0
     */
    /**
     * Install class
     *
     * @since 2.0.0
     *
     * @return object
     */
    function uagb_install()
    {
    }
    /**
     * Gives UAGB_Block object
     *
     * @since 2.1.0
     *
     * @return object
     */
    function uagb_block()
    {
    }
    /**
     * Filesystem class
     *
     * @since 1.23.0
     */
    function uagb_filesystem()
    {
    }
    /**
     * Load main object
     *
     * @since 2.0.0
     *
     * @return object
     */
    function uagb()
    {
    }
    /**
     * Get post assets object.
     *
     * @param int $post_id current step ID.
     * @since 2.0.0
     */
    function uagb_get_post_assets($post_id)
    {
    }
    /**
     * Get Spectra Font Awesome Polyfiller.
     *
     * @since 2.0.0
     */
    function get_spectra_font_awesome_polyfiller()
    {
    }
    /**
     * Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $default_padding = 20;
    /**
     * Block Information.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/slider-child';
    /**
     * Slider child front end style
     *
     * @since 2.0.0
     * @var mixed[] $attr
     * @var int $id
     * @package uagb
     */
    $block_name = 'slider';
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $highLight_border_attribute = \UAGB_Block_Helper::uag_generate_border_attribute('highLight');
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/advanced-heading';
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $border_attribute = \UAGB_Block_Helper::uag_generate_border_attribute('tab');
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/tabs';
    /**
     * Frontend CSS & Google Fonts loading File.
     *
     * @since 2.0.0
     * @var string[] $attr
     * @var int $id
     *
     * @package uagb
     */
    $overall_border_css = \UAGB_Block_Helper::uag_generate_border_css($attr, 'tab');
    /**
     * Frontend JS File.
     *
     * @since 2.0.0
     * @var int $id
     *
     * @package uagb
     */
    $selector = '.uagb-block-' . $id;
    /**
     * Block Information.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/forms-url';
    /**
     * Block Information.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/social-share';
    /**
     * Frontend CSS & Google Fonts loading File.
     *
     * @since 2.0.0
     * @var mixed[] $attr
     * @var int $id
     *
     * @package uagb
     */
    $gap_tablet_fallback = \is_numeric($attr['gapTablet']) ? $attr['gapTablet'] : $attr['gap'];
    /**
     * Frontend JS File.
     *
     * @since 2.0.0
     * @var mixed[] $attr
     * @var int $id
     * @package uagb
     */
    $base_selector = isset($attr['classMigrate']) && $attr['classMigrate'] ? '.uagb-block-' : '#uagb-social-share-';
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/restaurant-menu';
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/post-meta';
    /**
     * Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $field_border_attribute = \UAGB_Block_Helper::uag_generate_border_attribute('input');
    /**
     * Block Information.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/cf7-styler';
    /**
     * Block Information & Attributes File.
     *
     * @since 2.4.1
     *
     * @package uagb
     */
    $block_slug = 'uagb/instagram-feed';
    /**
     * Block Information.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/post-timeline';
    /**
     * Frontend JS File.
     *
     * @since 2.0.0
     * @var mixed[] $attr
     * @var int $id
     * @package uagb
     */
    $selector = '.uagb-block-' . $id;
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/inline-notice';
    /**
     * Frontend JS File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $base_selector = '.uagb-block-';
    /**
     * Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $overall_border_attributes = \UAGB_Block_Helper::uag_generate_border_attribute('overall');
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/section';
    /**
     * Note: Fixing issue due to constraints on variable usage before a global declaration.
     * 
     * @var mixed[] $attr
     * @var int $id
     * @var string $gradient
     */
    $overall_border_css = \UAGB_Block_Helper::uag_generate_border_css($attr, 'overall');
    /**
     * Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $success_message_border_attribute = \UAGB_Block_Helper::uag_generate_border_attribute('successMsg');
    /**
     * Block Information.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/forms';
    /**
     * Frontend JS File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $selector = '.uagb-block-' . $id;
    /**
     * Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $default_buttons_child = array();
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/buttons';
    /**
     * Block Information.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/forms-textarea';
    /**
     * Block Information.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/forms-hidden';
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/post-excerpt';
    /**
     * Block Information.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/forms-accept';
    /**
     * Attributes File.
     *
     * @since 2.4.0
     *
     * @package uagb
     */
    $box_border_attribute = \UAGB_Block_Helper::uag_generate_border_attribute('box');
    /**
     * Block Information & Attributes File.
     *
     * @since 2.4.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/countdown';
    /**
     * Frontend CSS & Google Fonts loading File.
     *
     * @since 2.4.0
     *
     * @package uagb
     */
    $attr = isset($attr) ? $attr : array();
    /**
     * Frontend JS File.
     *
     * @since 2.4.0
     *
     * @package uagb
     */
    $selector = '.uagb-block-' . $id;
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/masonry-gallery';
    /**
     * Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $border_attribute = \UAGB_Block_Helper::uag_generate_border_attribute('overall');
    /**
     * Block Information.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/taxonomy-list';
    /**
     * Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $border_attribute = \UAGB_Block_Helper::uag_generate_border_attribute('overall');
    /**
     * Block Information.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/faq';
    /**
     * Block Information & Attributes File.
     *
     * @since 2.6.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/separator';
    /**
     * Block Information.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/faq-child';
    /**
     * Block Information & Attributes File.
     *
     * @since 2.6.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/animations-extension';
    /**
     * Frontend JS File.
     *
     * @since 2.6.0
     *
     * @package uagb
     */
    $selector = '.uagb-block-' . $id;
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/how-to-step';
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/post-taxonomy';
    /**
     * Block Information.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/social-share-child';
    /**
     * Frontend CSS & Google Fonts loading File.
     *
     * @since 2.0.0
     * @var mixed[] $attr
     * @var string $id
     * @package uagb
     */
    $selectors = \UAGB_Block_Helper::get_social_share_child_selectors($attr, $id, \true);
    /**
     * Block Information.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/content-timeline';
    /**
     * Frontend JS File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $selector = '.uagb-block-' . $id;
    /**
     * Block Information.
     *
     * @since 2.6.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/loop-builder';
    /**
     * Attributes File.
     *
     * @since 2.3.0
     *
     * @package uagb
     */
    $border_attribute = \UAGB_Block_Helper::uag_generate_border_attribute('slider');
    /**
     * Block Information.
     *
     * @since 2.3.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/slider';
    /**
     * Frontend CSS & Google Fonts loading File.
     *
     * @since 2.3.0
     * @var mixed[] $attr
     * @var int $id
     * @package uagb
     */
    $block_name = 'slider';
    /**
     * Frontend JS File.
     *
     * @since 2.3.0
     * @var mixed[] $attr
     * @var int $id
     * @package uagb
     */
    $selector = '.uagb-block-' . $id . ' .uagb-swiper';
    /**
     * Block Information.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/forms-radio';
    /**
     * Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $border_attribute = \UAGB_Block_Helper::uag_generate_border_attribute('column');
    /**
     * Block Information.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/column';
    /**
     * Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $inputBorderAttributes = \UAGB_Block_Helper::uag_generate_border_attribute('input');
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/wp-search';
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/icon-list-child';
    /**
     * Frontend CSS & Google Fonts loading File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $selectors = \UAGB_Block_Helper::get_icon_list_child_selectors($attr, $id, \true)['desktop'];
    /**
     * Block Information.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/forms-date';
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $image_attribute = \UAGB_Block_Helper::uag_generate_border_attribute('image');
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/image';
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/how-to';
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $btn_border_attribute = \UAGB_Block_Helper::uag_generate_border_attribute('btn');
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/post-grid';
    /**
     * Block Information.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/star-rating';
    /**
     * Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $borderAttributes = \UAGB_Block_Helper::uag_generate_border_attribute('overall');
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/table-of-contents';
    /**
     * Frontend JS File.
     *
     * @since 2.0.0
     * @var mixed[] $attr
     * @var int $id
     *
     * @package uagb
     */
    $base_selector = isset($attr['classMigrate']) && $attr['classMigrate'] ? '.uagb-block-' : '#uagb-toc-';
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $btn_border_attribute = \UAGB_Block_Helper::uag_generate_border_attribute('btn');
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/post-carousel';
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $border_attribute = \UAGB_Block_Helper::uag_generate_border_attribute('container');
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/container';
    /**
     * Frontend CSS & Google Fonts loading File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    /**
     * Adding this comment to avoid PHPStan errors of undefined variable as these variables are defined else where.
     *
     * @var mixed[] $attr
     * @var int $id
     */
    // For Global Block Styles.
    $base_selector = !empty($is_gbs) && !empty($gbs_class) ? $gbs_class : '.uagb-block-' . $id;
    /**
     * Frontend JS File.
     *
     * @since 2.8.0
     * @package uagb
     */
    /**
     * Adding this comment to avoid PHPStan errors of undefined variable as these variables are defined elsewhere.
     *
     * @var int $id  The block ID.
     */
    $selector = '.uagb-block-' . $id;
    /**
     * Block Information & Attributes File.
     *
     * @since 2.1.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/register';
    /**
     * Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $disable_v_h_padding = \apply_filters('uagb_disable_v_h_padding', \false);
    /**
     * Block Information.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/buttons-child';
    /**
     * Frontend JS File.
     * 
     * @var int $id
     * @since 2.13.1
     *
     * @package uagb
     */
    $selector = '.uagb-block-' . $id;
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/post-image';
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/team';
    /**
     * Block Information.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/forms-toggle';
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/blockquote';
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/gf-styler';
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/icon-list';
    /**
     * Block Information.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/review';
    /**
     * Block Information.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/content-timeline-child';
    /**
     * Block Information.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/lottie';
    /**
     * Frontend CSS & Google Fonts loading File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $selectors = array();
    /**
     * Frontend JS File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $base_selector = 'uagb-block-';
    /**
     * Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $cta_border_attribute = \UAGB_Block_Helper::uag_generate_border_attribute('btn');
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/info-box';
    /**
     * Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $border_attribute = \UAGB_Block_Helper::uag_generate_border_attribute('overall');
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/testimonial';
    /**
     * Frontend JS File.
     *
     * @since 2.0.0
     * @var mixed[] $attr
     * @var string $id
     * @package uagb
     */
    $dots = 'dots' === $attr['arrowDots'] || 'arrowDots' === $attr['arrowDots'] ? \true : \false;
    /**
     * Block Information.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/forms-email';
    /**
     * Attributes File.
     *
     * @since 2.6.0
     *
     * @package uagb
     */
    $content_border_attributes = \UAGB_Block_Helper::uag_generate_border_attribute('content');
    /**
     * Block Information.
     *
     * @since 2.6.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/popup-builder';
    /**
     * Frontend JS File.
     *
     * @since 2.6.0
     *
     * @package uagb
     */
    $js = '';
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/restaurant-menu-child';
    /**
     * Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $border_attribute = \UAGB_Block_Helper::uag_generate_border_attribute('columns');
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/columns';
    /**
     * Attributes File.
     *
     * @since 2.1.0
     *
     * @package uagb
     */
    $icon_wrap_border_attribute = \UAGB_Block_Helper::uag_generate_border_attribute('iconWrap');
    /**
     * Block Information & Attributes File.
     *
     * @since 2.1.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/counter';
    /**
     * Frontend JS File.
     *
     * @since 2.1.0
     *
     * @package uagb
     */
    $selector = '.uagb-block-' . $id;
    /**
     * Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $button_attribute = \UAGB_Block_Helper::uag_generate_border_attribute('btn');
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/marketing-button';
    /**
     * Block Information.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/google-map';
    /**
     * Frontend CSS & Google Fonts loading File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $t_selectors = array();
    /**
     * Attributes File.
     *
     * @since 2.4.0
     *
     * @package uagb
     */
    $icon_border_attribute = \UAGB_Block_Helper::uag_generate_border_attribute('icon');
    /**
     * Block Information.
     *
     * @since 2.4.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/icon';
    /**
     * Frontend CSS.
     *
     * @since 2.4.0
     * @var mixed[] $attr
     *
     * @package uagb
     */
    $icon_width = \UAGB_Helper::get_css_value($attr['iconSize'], \is_string($attr['iconSizeUnit']) ? $attr['iconSizeUnit'] : '');
    /**
     * Block Information.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/forms-select';
    /**
     * Block Information & Attributes File.
     *
     * @since 2.2.0
     *
     * @package uagb
     */
    $btn_border_attributes = \UAGB_Block_Helper::uag_generate_border_attribute('btn');
    /**
     * Block Information & Attributes File.
     *
     * @since 2.2.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/modal';
    /**
     * Frontend JS File.
     *
     * @since 2.2.0
     * @var mixed[] $attr
     * @var int $id
     * @package uagb
     */
    $selector = '.uagb-block-' . $id;
    /**
     * Attributes File.
     *
     * @since 2.1.0
     *
     * @package uagb
     */
    $arrow_border_attributes = \UAGB_Block_Helper::uag_generate_border_attribute('arrow', array('borderStyle' => 'none', 'borderTopWidth' => 4, 'borderRightWidth' => 4, 'borderBottomWidth' => 4, 'borderLeftWidth' => 4, 'borderTopLeftRadius' => 50, 'borderTopRightRadius' => 50, 'borderBottomLeftRadius' => 50, 'borderBottomRightRadius' => 50));
    /**
     * Block Information & Attributes File.
     *
     * @since 2.1.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/image-gallery';
    /**
     * Frontend JS File.
     *
     * @since 2.1.0
     *
     * @package uagb
     */
    $block_name = 'image-gallery';
    /**
     * Block Information.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/forms-checkbox';
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/post-title';
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/post-button';
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $pagination_masonry_border_attribute = \UAGB_Block_Helper::uag_generate_border_attribute('paginationMasonry');
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/post-masonry';
    /**
     * Block Information & Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/tabs-child';
    /**
     * Attributes File.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $cta_border_attribute = \UAGB_Block_Helper::uag_generate_border_attribute('btn');
    /**
     * Block Information.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/call-to-action';
    /**
     * Block Information.
     *
     * @since 2.0.14
     *
     * @package uagb
     */
    $block_slug = 'uagb/forms-upload';
    /**
     * Block Information & Attributes File.
     *
     * @since 2.1.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/login';
    /**
     * Block Information.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/forms-phone';
    /**
     * Block Information.
     *
     * @since 2.0.0
     *
     * @package uagb
     */
    $block_slug = 'uagb/forms-name';
    /**
     * Get styles for a webfont.
     *
     * This will get the CSS from the remote API,
     * download any fonts it contains,
     * replace references to remote URLs with locally-downloaded assets,
     * and finally return the resulting CSS.
     *
     * @since 1.0.0
     *
     * @param string $url    The URL of the remote webfont.
     * @param string $format The font-format. If you need to support IE, change this to "woff".
     *
     * @return string Returns the CSS.
     */
    function uagb_get_webfont_styles($url, $format = 'woff2')
    {
    }
    /**
     * Get styles for a webfont.
     *
     * This will get the CSS from the remote API,
     * download any fonts it contains,
     * replace references to remote URLs with locally-downloaded assets,
     * and finally return the resulting CSS.
     *
     * @since 1.0.0
     *
     * @param string $url    The URL of the remote webfont.
     * @param string $format The font-format. If you need to support IE, change this to "woff".
     *
     * @return string Returns the CSS.
     */
    function uagb_get_webfont_remote_styles($url, $format = 'woff2')
    {
    }
    /**
     * Get a stylesheet URL for a webfont.
     *
     * @since 1.1.0
     *
     * @param string $url    The URL of the remote webfont.
     * @param string $format The font-format. If you need to support IE, change this to "woff".
     *
     * @return string Returns the CSS.
     */
    function uagb_get_webfont_url($url, $format = 'woff2')
    {
    }
    /**
     * Get a stylesheet URL for a webfont.
     *
     * @since 1.1.0
     *
     * @param string $url    The URL of the remote webfont.
     * @param string $format The font-format. If you need to support IE, change this to "woff".
     *
     * @return string Returns the CSS.
     */
    function uagb_get_preload_local_fonts($url, $format = 'woff2')
    {
    }
    \define('AST_BLOCK_TEMPLATES_LIBRARY_URL', \trailingslashit(\apply_filters('ast_block_templates_library_url', 'https://websitedemos.net/')));
    \define('AST_BLOCK_TEMPLATES_VER', '2.2.0');
    \define('AST_BLOCK_TEMPLATES_FILE', __FILE__);
    \define('AST_BLOCK_TEMPLATES_BASE', \plugin_basename(\AST_BLOCK_TEMPLATES_FILE));
    \define('AST_BLOCK_TEMPLATES_DIR', \plugin_dir_path(\AST_BLOCK_TEMPLATES_FILE));
    \define('AST_BLOCK_TEMPLATES_URI', \plugins_url('/', \AST_BLOCK_TEMPLATES_FILE));
    \define('AST_BLOCK_TEMPLATES_JSON_DIR', \trailingslashit($upload_dir['basedir']) . 'ast-block-templates-json/');
    /**
     * Plugin Name: Spectra
     * Plugin URI: https://www.brainstormforce.com
     * Author: Brainstorm Force
     * Author URI: https://www.brainstormforce.com
     * Version: 2.13.3
     * Description: The Spectra extends the Gutenberg functionality with several unique and feature-rich blocks that help build websites faster.
     * Text Domain: ultimate-addons-for-gutenberg
     *
     * @package UAGB
     */
    \define('UAGB_FILE', __FILE__);
    \define('UAGB_ROOT', \dirname(\plugin_basename(\UAGB_FILE)));
    \define('UAGB_PLUGIN_NAME', 'Spectra');
    \define('UAGB_PLUGIN_SHORT_NAME', 'Spectra');
    \define('SPECTRA_PRO_PLUGIN_URL', 'https://wpspectra.com/pro');
    /**
     * Ultimate Addons for Gutenberg admin notice for minimum PHP version.
     *
     * Warning when the site doesn't have the minimum required PHP version.
     *
     * @since 1.8.1
     *
     * @return void
     */
    function uagb_fail_php_version()
    {
    }
    /**
     * Ultimate Addons for Gutenberg admin notice for minimum WordPress version.
     *
     * Warning when the site doesn't have the minimum required WordPress version.
     *
     * @since 1.8.1
     *
     * @return void
     */
    function uagb_fail_wp_version()
    {
    }
}