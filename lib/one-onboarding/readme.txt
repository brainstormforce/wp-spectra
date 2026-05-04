=== One Onboarding ===
Contributors: brainstormforce
Tags: onboarding, setup, wizard, admin, bsf
Requires at least: 5.0
Tested up to: 6.4
Stable tag: 1.0.0
Requires PHP: 7.4
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

A powerful onboarding library for BSF products like Astra, Spectra, and more. Create clean, professional onboarding setup with ease.

== Description ==

One Onboarding is a comprehensive library designed to create seamless onboarding experiences for Brainstorm Force (BSF) products including Astra theme, Spectra plugin, and other WordPress products.

= Key Features =

* **Easy Product Registration** - Register onboarding pages with a simple function.

= Development Mode =

When active as a plugin, One Onboarding automatically provides a development environment with:
* Default onboarding page for testing
* BSF logo integration

== Installation ==

= As a Library (Recommended) =

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
3. Register your products using the provided function

= As a Plugin (Development) =

1. Upload the plugin files to `/wp-content/plugins/one-onboarding/`
2. Activate the plugin through the 'Plugins' screen in WordPress
3. Access the development page at `wp-admin/admin.php?page=one-onboarding`

== Frequently Asked Questions ==

= How do I register an onboarding page? =

Use the `register_product()` method with a unique product ID and configuration array. The library will automatically create a top-level admin menu page.

= How do I remove admin notices from my onboarding page? =

The library automatically removes all admin notices from registered onboarding pages to provide a clean, distraction-free experience.

= What's the difference between development and production mode? =

Development mode (when active as a plugin) provides testing tools and a default onboarding page. Production mode (as a library) only shows your registered products.

= How do I disable development mode for testing? =

Define the constant `ONE_ONBOARDING_DISABLE_DEV_MODE` as `true` in your wp-config.php file.

== Changelog ==

= 1.0.0 =
* Initial release

== Upgrade Notice ==

= 1.0.0 =
Initial release of One Onboarding library. Perfect for creating professional onboarding experiences for WordPress themes and plugins.

== Developer Notes ==

= Requirements =
* PHP 7.4 or higher
* WordPress 5.0 or higher
* Modern browser support

= Code Standards =
* Follows WordPress Coding Standards
* PHPStan Level 9 compliance
* Full type declarations
* Comprehensive documentation

= Integration =
* Works as standalone plugin or library dependency
* Composer support available
* Namespace: `One_Onboarding\Core\Register`
* Text domain: `one-onboarding`

For detailed documentation and examples, visit the plugin github repo and check the wiki section.
