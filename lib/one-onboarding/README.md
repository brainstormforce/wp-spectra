# One Onboarding

A powerful onboarding library for BSF products like Astra, Spectra, and more. Create clean, professional onboarding setup with ease.

[![WordPress](https://img.shields.io/badge/WordPress-5.0%2B-blue.svg)](https://wordpress.org/)
[![PHP](https://img.shields.io/badge/PHP-7.4%2B-purple.svg)](https://php.net/)
[![License](https://img.shields.io/badge/License-GPL%20v2-green.svg)](https://www.gnu.org/licenses/gpl-2.0.html)

## 📖 Description

One Onboarding is a comprehensive library designed to create seamless onboarding experiences for Brainstorm Force (BSF) products including Astra theme, Spectra plugin, and other WordPress products.

## 📁 Directory Structure

```
one-onboarding/
├── assets/
│   ├── css/
│   │   ├── admin.css
│   │   └── frontend.css
│   ├── images/
│   │   └── bsf.png
│   └── js/
│       ├── admin.js
│       └── frontend.js
├── includes/
│   ├── admin/
│   │   └── admin.php          # Admin interface and menu management
│   ├── ajax/
│   │   └── ajax.php           # AJAX handlers
│   ├── api/
│   │   └── api.php            # REST API endpoints
│   ├── core/
│   │   ├── activation.php     # Plugin activation hooks
│   │   ├── deactivation.php   # Plugin deactivation hooks
│   │   ├── plugin.php         # Main plugin class
│   │   └── register.php       # Product registration system
│   └── helpers/
│       └── functions.php      # Utility functions
├── tests/
│   └── php/
│       └── stubs/             # PHPStan stubs and constants
├── .github/
│   └── PULL_REQUEST_TEMPLATE.md
├── changelog.txt              # Version history
├── composer.json              # Composer configuration
├── one-onboarding.php         # Main plugin file
├── package.json               # Node.js dependencies
├── phpcs.xml                  # PHP CodeSniffer configuration
├── loader.php                 # Plugin initialization
├── README.md                  # This file
├── readme.txt                 # WordPress.org readme
└── version.json               # Version information
```

## ✨ Key Features

-   **Easy Product Registration** - Register onboarding pages with a simple function

## 🛠️ Development Mode

When active as a plugin, One Onboarding automatically provides a development environment with:

-   Default onboarding page for testing
-   BSF logo integration

## 🚀 Installation

### As a Library (Recommended)

1. Add to your composer.json file:

```json
// Add the package dependency
"require": {
    ...
    "brainstormforce/one-onboarding": "dev-main"
},

// Define custom installation path
"extra": {
    "installer-paths": {
        "includes/lib/{$name}/": [
            ...
            "brainstormforce/one-onboarding"
        ]
    }
},

// Add the private repository source
"repositories": [
    ...
    {
        "name": "brainstormforce/one-onboarding",
        "type": "vcs",
        "url": "git@github.com:brainstormforce/one-onboarding.git"
    }
],

// Enable composer plugins
"config": {
    "allow-plugins": {
        ...
        "composer/installers": true
    }
}
```

2. Run `composer install` to install the library
3. Include the loader file

```php
// Include the onboarding library loader.
$onboarding_path = __DIR__ . '/includes/lib/one-onboarding';
if ( file_exists( $onboarding_path . '/loader.php' ) ) {
    require_once $onboarding_path . '/loader.php';
}
```

4. Register your products using the provided function

### As a Plugin (Development)

1. Upload the plugin files to `/wp-content/plugins/one-onboarding/`
2. Activate the plugin through the 'Plugins' screen in WordPress
3. Access the development page at `wp-admin/admin.php?page=one-onboarding`

## 📋 Usage

### Product Registration Example

```php
// Register your product's onboarding page.
add_action(
    'init',
    function() {
        \One_Onboarding\Core\Register::register_product(
            'astra', // Unique product ID.
            [
                'title'       => __( 'Astra Onboarding', 'astra' ), // For window title
                'product'     => [
                    'id'   => 'astra',
                    'name' => __( 'Astra', 'astra' ),
                ],
                'logo'        => 'https://cdn.shortpixel.ai/spai/ret_img/wpastra.com/wp-content/uploads/2025/02/logo.svg', // Or `logo_svg` for custom SVG
                'screens'     => [
                    'welcome'           => [
                        'heading'     => __( 'Welcome to Astra', 'astra' ), // Default to `Welcome to <product.name>`
                        'description' => __( 'Build a fast, beautiful WordPress site, effortlessly.', 'astra' ),
                        'banner'      => [
                            'type'      => 'video', // Or `image`
                            'url'       => 'https://www.youtube-nocookie.com/embed/VCkFWDpjCrg?modestbranding=1&autoplay=0&mute=1', // Or image URL
                            'title'     => __( 'Getting Started with Astra', 'astra' ), // Default to `Welcome Video`
                            'thumbnail' => 'http://starter-templates.local/wp-content/uploads/2025/08/astra-welcome-thumbnail.jpg',
                        ],
                        'items'       => [
                            __( 'Trusted by 1.8M+ websites worldwide', 'astra' ),
                            __( 'Blazing fast and lightweight for better performance', 'astra' ),
                            __( 'Easy customization, no coding or design skills', 'astra' ),
                            __( 'WooCommerce-ready for quick online store setup', 'astra' ),
                        ],
                        'nextLabel'   => __( 'Let’s Get Started', 'astra' ), // Default to `Let’s Get Started`
                    ],
                    'user-info'         => [
                        'heading'         => '', // Default to `Get the Best Start with <product.name>`
                        'description'     => '', // Default to `Get helpful updates, new features, and tips to make your website better, while helping us improve <product.name>.`
                        'privacyPolicy'   => [
                            'url'   => 'https://example.com/privacy-policy',
                            'label' => '', // Default to Privacy Policy
                        ],
                        'sourceOptions'  => array(
                            'wordpress' => __( 'WordPress Themes Directory', 'one-onboarding' ),
                            'google'    => __( 'Google Search', 'one-onboarding' ),
                            'social'    => __( 'Social Media', 'one-onboarding' ),
                            'youtube'   => __( 'YouTube', 'one-onboarding' ),
                            'friend'    => __( 'A friend or colleague', 'one-onboarding' ),
                            'other'     => __( 'Other', 'one-onboarding' ),
                        ),
                        'benefitOptions'  => [
                            'ai-and-templates'    => __( 'AI and Templates will help me design quickly', 'astra' ),
                            'fast-loading'        => __( 'I need a fast-loading theme', 'astra' ),
                            'design-flexibility'  => __( 'I need advanced design flexibility without a bloated builder for free', 'astra' ),
                            'updates-and-support' => __( 'I trust Brainstorm Force for regular updates and support', 'astra' ),
                            'other'               => __( 'Other (please specify)', 'astra' ),
                        ],
                        'freshUserOptions' => [
                            'yes' => __( "I'm just getting started", 'astra' ),
                            'no'  => __( 'I build websites regularly', 'astra' ),
                        ],
                    ],
                    'features'          => [
                        'heading'       => '', // Default to `Select Your Features`
                        'description'   => 'Unlock more design control, faster setup, and powerful customization, so you can build a better website, effortlessly.',
                        'featureList'   => [
                            [
                                'title'       => __( 'Global Color & Typography Controls', 'astra' ),
                                'description' => __( 'Set global fonts and colors to save time and keep your website looking polished.', 'astra' ),
                            ],
                            [
                                'title'       => __( 'Flexible Layout Options', 'astra' ),
                                'description' => __( 'Customize headers, footers, sidebars, blogs, and archive layouts effortlessly.', 'astra' ),
                            ],
                            [
                                'title'       => __( 'Transparent Header', 'astra' ),
                                'description' => __( 'Create a transparent header for a modern look that keeps the focus on your content.', 'astra' ),
                            ],
                            [
                                'title'       => __( 'Site Builder', 'astra' ),
                                'description' => __( 'Build fully custom websites with more control over design and layout.', 'astra' ),
                                'isPro'       => true,
                            ],
                            [
                                'title'       => __( 'Header & Footer Builder', 'astra' ),
                                'description' => __( 'Build headers and footers that give your website a polished, professional look.', 'astra' ),
                                'isPro'       => true,
                            ],
                            [
                                'title'       => __( 'Modern WooCommerce Stores', 'astra' ),
                                'description' => __( 'Easily create beautiful WooCommerce stores that boost sales and grow your business.', 'astra' ),
                                'isPro'       => true,
                            ],
                        ],
                    ],
                    'starter-templates' => [
                        'heading'       => '', // Default to `Build Your Site in Minutes Using Pre-Built Templates`
                        'description'   => '', // Default to `Launch your site in minutes by importing a complete website, including pages, headers, footers, and global styles. Customize everything visually using Astra.`,
                    ],
                    'add-ons'           => [
                        'heading'     => '', // Default to `Recommended Essentials`
                        'description' => '', // Default to `These free plugins add essential features to your website and help speed up your workflow. The selected plugins below will be installed on this site.`,
                        'addonList'   => [
                            [
                                'slug'        => 'ultimate-addons-for-gutenberg',
                                'title'       => 'Spectra',
                                'logo'        => 'https://ps.w.org/ultimate-addons-for-gutenberg/assets/icon-256x256.gif', // Or logo_svg for custom SVG
                                'description' => 'Powerful visual website builder made for WordPress. Just click, drag, and create anything, no code, no limits.',
                            ],
                            [
                                'slug'        => 'surerank',
                                'title'       => 'SureRank',
                                'logo'        => 'https://ps.w.org/surerank/assets/icon-256x256.jpg', // Or logo_svg for custom SVG
                                'description' => 'Just a simple, lightweight SEO assistant that helps your site rise in the rankings.',
                            ],
                            [
                                'slug'        => 'sureforms',
                                'title'       => 'SureForms',
                                'logo'        => 'https://ps.w.org/sureforms/assets/icon-256x256.gif', // Or logo_svg for custom SVG
                                'description' => 'Create forms that feel like a chat. One question at a time keeps users engaged.',
                            ],
                            [
                                'slug'        => 'suremail',
                                'title'       => 'SureMails',
                                'logo_svg'    => '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.5 0H0.5C0.223858 0 0 0.223858 0 0.5V15.5C0 15.7761 0.223858 16 0.5 16H15.5C15.7761 16 16 15.7761 16 15.5V0.5C16 0.223858 15.7761 0 15.5 0Z" fill="#6B7280"/>
                          <path d="M4.26829 7.77682C4.40744 7.87744 4.60502 7.84439 4.69604 7.70902C4.79669 7.56987 4.76362 7.37227 4.62824 7.28124L3.28822 6.32124C3.24059 6.28452 3.24474 6.23854 3.24682 6.21557C3.24892 6.19259 3.26644 6.15249 3.32409 6.12992L12.2403 3.85669C12.2921 3.84749 12.3226 3.86879 12.3435 3.89384C12.3644 3.91892 12.3853 3.94397 12.3619 3.99744L8.98366 12.5452C8.96027 12.5987 8.91809 12.6042 8.89886 12.6117C8.87589 12.6096 8.82994 12.6054 8.80151 12.5612L7.78039 10.6895C7.74819 10.6357 7.72186 10.5684 7.68966 10.5145C7.29001 9.60732 7.18914 8.93789 7.93922 8.27847L9.87036 6.49134C10.0015 6.37349 10.0144 6.18007 9.90029 6.05854C9.78246 5.92742 9.58904 5.91452 9.46749 6.02859L7.43922 7.77682C6.41724 8.67572 6.58741 9.79384 7.23407 10.9922L8.25519 12.8638C8.38561 13.1119 8.65091 13.2518 8.93456 13.2404C9.00934 13.2333 9.08996 13.2128 9.15721 13.1864C9.33974 13.115 9.48259 12.9704 9.56439 12.7832L12.9426 4.23539C13.0441 3.98512 12.9964 3.69354 12.8158 3.48724C12.6353 3.28092 12.36 3.20037 12.0951 3.25977L3.16934 5.53674C2.89867 5.60952 2.69402 5.82264 2.63647 6.10004C2.57889 6.37744 2.69762 6.65229 2.92827 6.81682L4.26829 7.77682Z" fill="white"/>
                          <path d="M3.84583 10.35C3.87093 10.3402 3.90111 10.3187 3.92293 10.3006L5.27256 9.116C5.38673 9.0134 5.39796 8.84502 5.29863 8.7392C5.19603 8.62505 5.02766 8.61382 4.92186 8.71315L3.57221 9.8977C3.45806 10.0003 3.44683 10.1687 3.54613 10.2745C3.62218 10.3701 3.73711 10.3926 3.84583 10.35Z" fill="white"/>
                          <path d="M3.67424 12.2448C3.69937 12.235 3.72962 12.2136 3.75147 12.1955L6.04519 10.1868C6.15964 10.0845 6.17134 9.9162 6.07232 9.8101C5.97004 9.69565 5.80169 9.68395 5.69562 9.78297L3.40189 11.7917C3.28744 11.8939 3.27574 12.0623 3.37477 12.1684C3.44729 12.2558 3.57377 12.2838 3.67424 12.2448Z" fill="white"/>
                        </svg>', // Or 'logo' for URL
                                'description' => 'Send emails that get delivered. SureMails is a simple, lightweight email delivery service.',
                            ],
                        ],
                    ],
                    'done'              => [
                        'heading'     => '', // Default to `You’re Ready to Build with <product.name>!`
                        'description' => '', // Default to `You're all set to create a website that looks great, loads fast, and reflects your vision, without hassle.`,
                        'itemsHeading' => '', // Default to `What You Can Do Next:`
                        'items'        => [
                            __( 'Customize Your Website', 'astra' ),
                            __( 'Visit Dashboard', 'astra' ),
                            __( 'View Documentation', 'astra' ),
                        ],
                        'cta1'         => [
                            'url'   => admin_url( '/customize.php' ),
                            'label' => __( 'Customize Your Site', 'astra' ),
                        ],
                        'cta2'         => [
                            'url'   => admin_url(),
                            'label' => __( 'Visit Dashboard', 'astra' ),
                        ],
                        'cta3'         => [
                            'url'   => 'https://wpastra.com/docs/',
                            'label' => __( 'Docs & Help Center', 'astra' ),
                        ],
                    ],
                ],
                'exit'        => [
                    'url'   => admin_url( 'admin.php?page=astra' ), // Default to `admin_url()`
                    'label' => '', // Default to `Exit Guided Setup`
                ],
                'colors'      => [
                    'primary-background'   => '#FFFFFF', // Default to `#FFFFFF`
                    'secondary-background' => '#F9FAFB', // Default to `#F9FAFB`
                    'primary-brand'        => '#5630D5', // Default to `#5630D5`
                    'secondary-brand'      => '#4D21CA', // Default to `#4D21CA`
                    'primary-text'         => '#111827', // Default to `#111827`
                    'secondary-text'       => '#4F4E7C', // Default to `#4F4E7C`
                    'tertiary-text'        => '#6F6B99', // Default to `#6F6B99`
                ],
                'option_name' => '', // Default to `one_onboarding_{$product_id}`
            ]
        );
    }
);
```

## ⚙️ Configuration Options

### Required Parameters

-   `title` - The menu title for your onboarding page
-   `product` - Product information object with `id` and `name` fields
-   `logo` or `logo_svg` - Product logo (URL for image or SVG markup)
-   `screens` - Configuration for onboarding screens:
    -   `welcome` - Welcome screen configuration
        -   `items` - Array of string list for the welcoming
    -   `user-info` - User information collection screen
        -   `privacyPolicy.url` - Privacy policy URL (required for compliance)
        -   `benefitOptions` - Benefits selection options for the user
    -   `features` - Features showcase screen
        -   `featureList` - Array of feature objects with title and description
        -   `upgradeUrl` - Upgrade URL
    -   `add-ons` - Plugin recommendations screen
        -   `addonList` - Array of addon objects with slug, title, and description
    -   `done` - Completion screen
        -   `items` - Array of completion message items
        -   `cta1` or `cta2` or `cta3` - At least one call-to-action button with url and label
    -   `pro_slug` - Pro plugin slug identifier

### Optional Parameters

-   `description` - Page description text
-   `icon` - Alternative to logo, URL to product icon image
-   `screens` - Additional optional screen configurations:
    -   `welcome` - Optional: heading, description, banner (video/image), nextLabel
    -   `user-info` - Optional: heading, description, privacyPolicy.label, freshUserOptions
    -   `features` - Optional: heading, description, featureList.isPro flags for features
    -   `starter-templates` - Optional: heading, description for template selection
    -   `add-ons` - Optional: heading, description
    -   `done` - Optional: heading, description, itemsHeading, additional cta buttons
-   `exit` - Exit button configuration with URL and label (defaults to admin_url() and "Exit Guided Setup")
-   `colors` - Color scheme customization:
    -   `primary-background` - Primary background color (default: #FFFFFF)
    -   `secondary-background` - Secondary background color (default: #F9FAFB)
    -   `primary-brand` - Primary brand color (default: #5630D5)
    -   `secondary-brand` - Secondary brand color (default: #4D21CA)
    -   `primary-text` - Primary text color (default: #111827)
    -   `secondary-text` - Secondary text color (default: #4F4E7C)
    -   `tertiary-text` - Tertiary text color (default: #9CA3AF)
-   `option_name` - Custom option name for storing settings (default: "one_onboarding\_{$product_id}")
-   `capability` - Required user capability for accessing the onboarding page (default: 'manage_options')
-   `pro_status` - Pro plugin activation status (active, inactive, not-installed)

### Using Completion Data with Hooks

The library provides hooks to access the completion data when a user finishes the onboarding process:

```php
/**
 * Handle general onboarding completion for any product
 *
 * @param array $completion_data Complete data including onboarding state, user info, and product details
 * @param \WP_REST_Request $request The REST request object
 */
add_action( 'one_onboarding_completion', function( $completion_data, $request ) {
    // Access completion data
    $product_id       = $completion_data['product_id']; // e.g., 'astra'
    $user_info        = $completion_data['user_info']; // User's personal information
    $selected_addons  = $completion_data['selected_addons']; // Selected add-ons
    $activated_addons = $completion_data['activated_addons']; // Successfully activated add-ons
    $pro_features     = $completion_data['pro_features']; // Selected premium features
    $screens          = $completion_data['screens']; // Screens data with skipped attribute

    // Handle starter templates builder data if available
    if ( isset( $completion_data['starter_templates_builder'] ) ) {
        $builder_choice = $completion_data['starter_templates_builder'];
        // Process builder selection
    }

    // Your custom logic here
    error_log( "Onboarding completed for product: " . $product_id );

    // Example: Send data to analytics service
    // analytics_track_onboarding_completion( $completion_data );

    // Example: Set user preferences based on selections
    // set_user_addon_preferences( $selected_addons );

}, 10, 2 );

/**
 * Handle product-specific onboarding completion (e.g., for Astra)
 * Hook name: one_onboarding_completion_{product_id}
 *
 * @param array $completion_data Complete data including onboarding state, user info, and product details
 * @param \WP_REST_Request $request The REST request object
 */
add_action( 'one_onboarding_completion_astra', function( $completion_data, $request ) {
    // This hook only fires when 'astra' product completes onboarding
    $user_info       = $completion_data['user_info'];
    $selected_addons = $completion_data['selected_addons'];

    // Astra-specific logic
    if ( ! empty( $user_info['first_name'] ) ) {
        // Personalize Astra dashboard welcome message
        update_option( 'astra_welcome_message', 'Welcome back, ' . $user_info['first_name'] . '!' );
    }

    // Auto-configure Astra based on selected features
    if ( in_array( 'transparent-header', $completion_data['pro_features'], true ) ) {
        // Enable transparent header setting
        // update_option( 'astra_transparent_header_enabled', true );
    }

}, 10, 2 );

/**
 * Access stored completion data later
 */
function get_product_onboarding_data( $product_id ) {
    $option_name = \One_Onboarding\Core\Register::get_option_name( $product_id );
    return get_option( $option_name, array() );
}

// Example: Retrieve Astra onboarding data
$astra_data = get_product_onboarding_data( 'astra' );
if ( ! empty( $astra_data ) ) {
    $user_preferences  = $astra_data['user_info'];
    $selected_features = $astra_data['pro_features'];
    // Use the data as needed
}
```

### Helper Functions

```php
// Check if in development mode
if ( one_onboarding_is_development_mode() ) {
    // Development-specific code
}

// Get all registered products
$products = \One_Onboarding\Core\Register::get_registered_products();

// Check if specific product is registered
if ( \One_Onboarding\Core\Register::is_product_registered( 'astra' ) ) {
    // Product exists
}
```

## 🛠️ Development & Testing

### Development Mode

The library includes a development mode that automatically activates when used as a WordPress plugin:

-   Provides a default onboarding page for testing with comprehensive screen configuration
-   Includes BSF branding and logo
-   Automatic registration of default 'one' product in development mode
-   Pre-configured screens: welcome, user-info, features, starter-templates, add-ons, and done
-   Built-in addon list with popular BSF plugins (Astra Sites, SureRank, SureForms, SureMails)
-   Offers development utilities and debugging tools

### Disabling Development Mode

For testing production behavior:

```php
// In wp-config.php
define( 'ONE_ONBOARDING_DISABLE_DEV_MODE', true );
```

### Helper Functions

```php
// Development mode detection
one_onboarding_is_development_mode()

// Get plugin version
one_onboarding_get_plugin_version()
```

## ❓ FAQ

### How do I register an onboarding page?

Use the `register_product()` method with a unique product ID and configuration array. The library will automatically create a top-level admin menu page.

### How do I remove admin notices from my onboarding page?

The library automatically removes all admin notices from registered onboarding pages to provide a clean, distraction-free experience.

### What's the difference between development and production mode?

Development mode (when active as a plugin) provides testing tools and a default onboarding page. Production mode (as a library) only shows your registered products.

### How do I disable development mode for testing?

Define the constant `ONE_ONBOARDING_DISABLE_DEV_MODE` as `true` in your wp-config.php file.

## 🔧 Requirements

-   PHP 7.4 or higher
-   WordPress 5.0 or higher
-   Modern browser support

## 📝 Code Standards

-   Follows WordPress Coding Standards
-   PHPStan Level 9 compliance
-   Full type declarations
-   Comprehensive documentation

## 🏗️ Integration

-   Works as standalone plugin or library dependency
-   Composer support available
-   **Namespace**: `One_Onboarding\Core\Register`
-   **Text Domain**: `one-onboarding`

## 📄 License

This project is licensed under the GPL v2 or later - see the [LICENSE](https://www.gnu.org/licenses/gpl-2.0.html) for details.

## 📞 Support

For detailed documentation and examples, visit the plugin GitHub repo and check the wiki section.

---

**Made with ❤️ by [Brainstorm Force](https://brainstormforce.com/)**
