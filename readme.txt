=== Spectra Legacy – Gutenberg Blocks ===
Contributors: brainstormforce
Donate link: https://www.paypal.me/BrainstormForce
Tags: gutenberg, blocks, gutenberg blocks, editor, block
Requires at least: 5.6
Requires PHP: 7.4
Tested up to: 7.0
Stable tag: 2.20.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Gutenberg blocks for existing Spectra websites. Maintained, stable, and fully supported — no action needed on your part.

== Description ==

This plugin was previously called Spectra. It's now Spectra Legacy. Nothing on your website has changed.

Your blocks, pages, settings, and content all continue to work exactly as they did before. There's nothing to migrate and nothing to configure.

<strong>Spectra Legacy vs. Spectra Blocks</strong>

We've split Spectra into two products.

Spectra Legacy is this plugin — built for existing Spectra users. It receives security and compatibility updates and full support, but no new features. Spectra Blocks is a new, separate plugin where all new feature development happens, aimed at new installs and anyone who wants ongoing additions. If you're already using this plugin, no action is needed; installing Spectra Blocks is entirely optional whenever you're ready.

If you're already using this plugin, you don't need to do anything. If you want new features as they're released, you can install Spectra Blocks separately, whenever you're ready. There's no deadline and no required migration.

<strong>What's included</strong>

Spectra Legacy includes the full block library your site is already built on: layout tools, content and post blocks, form and SEO blocks, social blocks, and site tools like Popup Builder and Coming Soon mode.

<strong>Blocks included</strong>

<ul>
	<li><strong>Core</strong> — Container, Heading, Image, Icon, Buttons, Info Box, Call To Action, Countdown</li>
	<li><strong>Content</strong> — Sliders, Content Timeline, Google Maps, Inline Notices, Tabs, Taxonomy List, Price List (Loop Builder in Spectra Pro Legacy)</li>
	<li><strong>Post</strong> — Counter, Modal Popup, Post Carousel, Post Grid, Post Timeline</li>
	<li><strong>Social</strong> — Instagram Feed, Blockquote, Social Share, Team, Testimonials</li>
	<li><strong>Forms</strong> — Contact form, newsletter signup, suggestion form, reCAPTCHA (registration/login forms in Spectra Pro Legacy)</li>
	<li><strong>SEO</strong> — FAQ, How-To, Review, Table of Contents</li>
	<li><strong>Dynamic content</strong> — Archive feed filtering by date, author, category, and post type</li>
	<li><strong>Site tools</strong> — Popup Builder, Coming Soon mode, block animations, local Google Fonts, global styling defaults</li>
</ul>

<strong>About the AI block</strong>

The AI block previously included in this plugin is now called ZipAI. It still works in Spectra Legacy for compatibility. New AI features are being built in Spectra Blocks going forward.

<strong>Compatibility</strong>

Works with most standard WordPress themes, including Spectra One, Astra, Blocksy, and GeneratePress.

Compatible with common plugins including WooCommerce, SureCart, Gravity Forms, LearnDash, MemberPress, and Yoast SEO. See our documentation for the full compatibility list.

<strong>Support &amp; community</strong>

Spectra Legacy is actively maintained — security patches, compatibility updates, and support all continue. This plugin is not deprecated.

<ul>
	<li>Support forum: use the Support tab on this page</li>
	<li>Documentation: <a href="https://wpspectra.com/docs" target="_blank" rel="">wpspectra.com/docs</a></li>
	<li>Facebook Group: <a href="https://www.facebook.com/groups/wpastra" target="_blank" rel="">Web Creators by Astra</a></li>
	<li>Facebook: <a href="https://www.facebook.com/wpspectra" target="_blank" rel="">Spectra</a></li>
	<li>X (Twitter): <a href="https://twitter.com/wpspectra" target="_blank" rel="">@wpspectra</a></li>
</ul>

<strong>Contribute</strong>

Spectra is open source. Browse the code or contribute on GitHub: <a href="https://github.com/brainstormforce/wp-spectra" target="_blank" rel="">brainstormforce/wp-spectra</a>

== Installation ==

Install through the WordPress plugin directory, or upload the plugin files to wp-content/plugins and activate from your dashboard.

If you're already running this plugin, no action is needed — it updates automatically like any other plugin.

== Frequently Asked Questions ==

= Why is this plugin now called Spectra Legacy? =

We split Spectra into two products: Spectra Legacy (this plugin, for existing users) and Spectra Blocks (a new plugin for future development). The rename reflects that split — it doesn't change how this plugin works.

= Do I need to do anything after this update? =

No. This is a naming change, not a functional one. Your site continues to work exactly as before.

= Will my existing website break? =

No. Spectra Legacy is fully backward compatible with everything built using the plugin before the rename.

= Do I need to migrate to Spectra Blocks? =

No. There's no required migration and no deadline. Spectra Blocks is a separate, optional plugin. You can keep using Spectra Legacy indefinitely.

= Is Spectra Legacy still supported? =

Yes. It continues to receive security updates, compatibility fixes for new WordPress and PHP versions, and standard support.

= What's the difference between Spectra Legacy and Spectra Blocks? =

Spectra Legacy is the version you already have — stable and unchanged in how it works. Spectra Blocks is where all new features are being built going forward. See the comparison above.

= Can I use both plugins on the same site? =

Yes — and during a transition, most people do. Existing pages keep working on Spectra Legacy while you build new pages in Spectra Blocks. Each plugin only loads assets for the blocks a given page uses, so running both isn't a heavy performance tax. It's not meant to be a permanent setup: once your site no longer has any Legacy blocks, you can deactivate Spectra Legacy.

= What happened to the Spectra AI block? =

It's now called ZipAI. It still works in Spectra Legacy. New AI features are being developed in Spectra Blocks.

= Can I use Spectra Legacy on client websites? =

Yes, same as before — no restrictions.

= How do I report a security issue? =

Please use our <a href="https://brainstormforce.com/bug-bounty-program/" target="_blank" rel="">Bug Bounty Program</a> rather than the public support forum.

== Credits ==

Our external packages use [Rating Star Component](https://github.com/n49/react-stars) that are distributed under the terms of the ISC. While [Slick](https://github.com/akiran/react-slick), [Lottie](https://github.com/chenqingspring/react-lottie) and [Striptags](https://github.com/ericnorris/striptags) is distributed under the terms of the MIT. Additionally, we incorporate [FontAwesome v6](https://fontawesome.com/license/free) under the CC BY 4.0 License, and [dnd kit](https://github.com/clauderic/dnd-kit) licensed under the MIT License.

== Changelog ==

Spectra Legacy receives maintenance updates only: security fixes, WordPress and PHP compatibility, and critical bug fixes. New features ship in Spectra Blocks.

= 2.20.0 - Tuesday, 14th July 2026 =
* Renamed to "Spectra Legacy"; all blocks, settings, and content remain fully intact.
* Fix: This update addressed a security bug. Props to WPScan for the responsible disclosure.
* Fix: Info Box — anchor, custom CSS classes, and responsive conditions missing on the frontend after the apiVersion 3 migration.
* Fix: Raw CSS text printed below the Image block in Customizer preview.

= 2.19.29 - Monday, 30th June 2026 =
* Fix: This update addressed a security bug. Props to Wordfence for reporting it responsibly to our team. Please make sure you are using the latest version on your website.
* Fix: WPML compatibility — resolved PHP error caused by non-array parentLayout in container blocks.
* Fix: Resolved PHP errors on the Settings → Reading screen under block themes and in background position output for the Slider, Modal, Popup Builder, and Forms blocks.

= 2.19.28 - Wednesday, 27th May 2026 =
* Fix: FAQ — Existing FAQ blocks created before the apiVersion 3 update now validate correctly in the editor.
* Fix: Info Box CTA button colors were not applying on the frontend when "Inherit from Theme" is disabled.

= 2.19.27 - Wednesday, 20th May 2026 =
* New: Added full compatibility with WordPress 7.0 — all blocks migrated to apiVersion 3 for iframe editor support.
* Fix: Resolved fatal errors on WordPress.com Atomic hosting.

= 2.19.26 - Monday, 4th May 2026 =
* This update addressed a security bug. Props to Wordfence for reporting it responsibly to our team. Please make sure you are using the latest version on your website.
* Fix: Resolved a PHP warning triggered when inserting images without a query string in the URL.

= 2.19.25 - Monday, 27th April 2026 =
* Fix: RTL support for Timeline, Testimonial, and Info Box blocks — now render correctly in right-to-left languages.

= 2.19.24 - Tuesday, 21st April 2026 =
* Fix: Improved compatibility with third-party plugins.

= 2.19.23 - Tuesday, 21st April 2026 =
* This update addressed a security bug. Props to Patchstack for reporting it responsibly to our team. Please make sure you are using the latest version on your website.
* New: Added onboarding wizard with setup steps for new users.
* New: Added Learn tab to Spectra dashboard with interactive walkthroughs.

= 2.19.22 - Monday, 31st March 2026 =
* Improvement: Enhanced usage analytics for better product insights.
* Fix: Image Gallery - Resolved caption visibility issue on iPad/touch devices.
* Fix: Image Gallery - Removed extra spacing in carousel mode with single image.

= 2.19.21 - Thursday, 12th March 2026 =
* This update addressed a security bug. Please make sure you are using the latest version on your website.
* Fix: WPML - Resolved translation issues for Tabs, Modal, and Image Gallery blocks.
* Fix: Global - Block CSS not generated when blocks are placed inside SureCart template parts on classic themes.

= 2.19.20 - Thursday, 12th February 2026 =
* Fix: Global - An edge case where automated requests caused missing Spectra CSS and layout issues.

= 2.19.19 - Monday, 2nd February 2026 =
* Fix: Review schema - Resolved an issue where user enable to change star rating.
* Fix: Global - Resolved a conflict causing the "spectra" store to be registered multiple times.
* Fix: Global - Better handling of template content to avoid content merging issues for SureCart.

= 2.19.18 - Tuesday, 20th January 2026 =
* This update addressed a security bug. Props to Wordfence and Patchstack for reporting it responsibly to our team.
Please make sure you are using the latest version on your website.

= 2.19.17 - Thursday, 4th December 2025 =
* Improvement: Added compatibility with WordPress v6.9.

= 2.19.16 - Wednesday, 12th November 2025 =
* Improvement: Added Dashboard section to stay updated with Beta releases.
* Fix: Slider - Resolved an issue wherein slider background image not applying in small devices when overlay color is set
* Fix: Global - Resolved recursive pattern insertion issue that was causing a page getting slow error due to an infinite loop.

= 2.19.15 - Friday, 3rd October 2025 =
* This update addressed a security bug. Props to Wordfence for reporting it responsibly to our team.
Please make sure you are using the latest version on your website.

The full changelog is available [here](https://wpspectra.com/whats-new/).

== Upgrade Notice ==

= 2.20.0 =
Renamed to "Spectra Legacy". Includes a security fix. No data is changed — your blocks and settings remain intact.
