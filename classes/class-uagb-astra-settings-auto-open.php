<?php
/**
 * UAGB Astra Settings Auto Open
 * Automatically opens the Astra Settings panel for learn functionality
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'UAGB_Astra_Settings_Auto_Open' ) ) {

	/**
	 * Class UAGB_Astra_Settings_Auto_Open
	 */
	class UAGB_Astra_Settings_Auto_Open {

		/**
		 * Instance
		 *
		 * @access private
		 * @var self|null Class object.
		 * @since 2.19.23
		 */
		private static $instance = null;

		/**
		 * Get instance.
		 *
		 * @since 2.19.23
		 * @return self Instance of the class.
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Constructor.
		 *
		 * @since 2.19.23
		 */
		public function __construct() {
			add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_auto_open_script' ) );
		}

		/**
		 * Enqueue JavaScript for auto-open functionality.
		 *
		 * @since 2.19.23
		 * @return void
		 */
		public function enqueue_auto_open_script() {
			global $pagenow;

			// Only add script on block editor screens.
			if ( ! in_array( $pagenow, array( 'post.php', 'post-new.php' ), true ) ) {
				return;
			}

			$screen = get_current_screen();
			if ( ! $screen || ! $screen->is_block_editor() ) {
				return;
			}

			// Check user capability.
			if ( ! current_user_can( 'edit_posts' ) ) {
				return;
			}

			// Check if URL has Astra hash fragments.
			$inline_script = "
			( function() {
				'use strict';

				// Global flag to prevent multiple executions
				if (window.uagbAstraAutoOpenExecuted) {
					return;
				}
				window.uagbAstraAutoOpenExecuted = true;

				// State management
				var autoOpenState = {
					executed: false,
					panelOpened: false,
					scrollCompleted: false
				};

				/**
				 * Wait for the WordPress editor to be fully loaded
				 */
				function waitForEditor(callback) {
					if (typeof wp !== 'undefined' && wp.data && wp.data.select && wp.data.select('core/editor') && (document.readyState === 'complete' || document.readyState === 'interactive') ) {
						callback();
					} else {
						setTimeout(() => waitForEditor(callback), 100);
					}
				}

				/**
				 * Check if distraction-free mode is active
				 */
				function isDistractionFreeMode() {
					try {
					if (typeof wp !== 'undefined' && wp.data && wp.data.select && wp.data.select('core/block-editor')) {
						return wp?.data?.select('core/block-editor')?.getSettings()?.isDistractionFree === true;
					}
					} catch (error) {
						return false;
					}
				}

				/**
				 * Wait for Astra Settings button to be available in the DOM
				 */
				function waitForAstraButton(callback, timeout) {
					timeout = timeout || 5000; // 5 second timeout
					var startTime = Date.now();
					
					function checkButton() {
						var astraButton = document.querySelector('button[aria-controls=\"astra-theme-layout:theme-meta-panel\"]');
						
						if (astraButton) {
							callback(astraButton);
						} else if (Date.now() - startTime < timeout) {
							setTimeout(checkButton, 100);
						}
					}
					
					checkButton();
				}

				/**
				 * Check if Astra Settings panel is currently open
				 */
				function isPanelOpen() {
					// Check multiple indicators that the panel is open
					var panel = document.querySelector('.astra-theme-layout\\\\:theme-meta-panel');
					var button = document.querySelector('button[aria-controls=\"astra-theme-layout:theme-meta-panel\"]');
					
					// Check if panel exists and is visible
					if (panel) {
						var computedStyle = window.getComputedStyle(panel);
						if (computedStyle.display !== 'none' && computedStyle.visibility !== 'hidden') {
							return true;
						}
					}
					
					// Check button aria-expanded attribute
					if (button && button.getAttribute('aria-expanded') === 'true') {
						return true;
					}
					
					// Check if sidebar is in open state
					var sidebar = document.querySelector('.interface-complementary-area');
					if (sidebar && sidebar.style.display !== 'none') {
						// Check if it contains Astra content
						var astraContent = sidebar.querySelector('[class*=\"astra\"], [class*=\"theme-meta\"]');
						if (astraContent) {
							return true;
						}
					}
					
					return false;
				}

				/**
				 * Click the Astra Settings button to open panel
				 */
				function clickAstraButton(button) {
					if (autoOpenState.panelOpened) {
						return true; // Already processed in this session
					}

					if (button && typeof button.click === 'function') {
						// Check if panel is currently open
						if (isPanelOpen()) {
							autoOpenState.panelOpened = true;
							return true;
						}

						// Panel is closed, so open it.
						button.click();
						autoOpenState.panelOpened = true;
						
						// Remove hash from URL after successful click to prevent re-triggering
						setTimeout(() => {
							if (window.history && window.history.replaceState) {
								window.history.replaceState({}, document.title, window.location.pathname + window.location.search);
							}
						}, 500);
						
						return true;
					}
					return false;
				}

				/**
				 * Wait for panel to be fully opened before proceeding
				 */
				function waitForPanelToOpen(callback, timeout) {
					timeout = timeout || 3000; // 3 second timeout
					var startTime = Date.now();
					
					function checkPanelOpen() {
						if (isPanelOpen()) {
							callback();
						} else if (Date.now() - startTime < timeout) {
							setTimeout(checkPanelOpen, 100);
						} else {
							callback();
						}
					}
					
					checkPanelOpen();
				}


				/**
				 * Scroll to specific panel section
				 */
				function scrollToPanel(panelType) {
					if (autoOpenState.scrollCompleted) {
						return; // Already scrolled
					}

					// Wait for the panel to be open and fully loaded
					waitForPanelToOpen(() => {
						setTimeout(() => {
							var targetElement = null;
							var sectionName = '';
							
							switch (panelType) {
								case 'container-layout':
									// Look for Container Layout section
									sectionName = 'Container Layout';
									
									// Check in astra_settings_meta_box first
									var astraMetaBox = document.getElementById('astra_settings_meta_box');
									if (astraMetaBox) {
										targetElement = astraMetaBox.querySelector('[data-panel=\"container-layout\"], .ast-container-layout');
									}
									
									// Alternative selectors for Container Layout
									if (!targetElement) {
										var headings = document.querySelectorAll('#astra_settings_meta_box h2, #astra_settings_meta_box h3, #astra_settings_meta_box h4, #astra_settings_meta_box .components-panel__body-title, .interface-complementary-area h2, .interface-complementary-area h3, .interface-complementary-area h4, .interface-complementary-area .components-panel__body-title');
										for (var i = 0; i < headings.length; i++) {
											var heading = headings[i];
											if (heading.textContent && heading.textContent.toLowerCase().includes('container')) {
												targetElement = heading;
												highlightElement(targetElement, 3000, '" . esc_js( __( 'Choose page layout using Astra Container Layout Settings.', 'ultimate-addons-for-gutenberg' ) ) . "');
												break;
											}
										}
									}
									break;
									
								case 'disable-elements':
									// Look for Disable Elements section
									sectionName = 'Disable Elements';
									
									// Check in astra_settings_meta_box first
									var astraMetaBox = document.getElementById('astra_settings_meta_box');
									if (astraMetaBox) {
										targetElement = astraMetaBox.querySelector('[data-panel=\"disable-elements\"], .ast-disable-elements');
									}
									
									// Alternative selectors for Disable Elements
									if (!targetElement) {
										var headings = document.querySelectorAll('#astra_settings_meta_box h2, #astra_settings_meta_box h3, #astra_settings_meta_box h4, #astra_settings_meta_box .components-panel__body-title, .interface-complementary-area h2, .interface-complementary-area h3, .interface-complementary-area h4, .interface-complementary-area .components-panel__body-title');
										for (var i = 0; i < headings.length; i++) {
											var heading = headings[i];
											
											if (heading.textContent && heading.textContent.toLowerCase().includes('disable')) {
												targetElement = heading;
												targetElement.querySelector('button')?.click();
												break;
											}
										}
									}
									break;
							}

							if (targetElement) {
								
								
								// Add a highlight effect
								targetElement.style.transition = 'background-color 0.3s ease';
								targetElement.style.backgroundColor = '#f0f0f0';
								targetElement.style.color = 'white';

								setTimeout(() => {
									targetElement.style.backgroundColor = '';
									targetElement.style.color = '';
									// Show tooltip.
									if( 'Disable Elements' === sectionName ) {
										highlightElement(targetElement, 3000, '" . esc_js( __( 'Show and Hide Element using Astra Disable Elements Settings.', 'ultimate-addons-for-gutenberg' ) ) . "');
									}
								}, 1000);
							} else {
								// If specific section not found, try to scroll to the settings panel container
								var settingsPanel = document.querySelector('.astra-theme-layout\\\\:theme-meta-panel, .interface-complementary-area, .edit-post-sidebar');
								if (settingsPanel) {
									settingsPanel.scrollTo({ top: 0, behavior: 'smooth' });
								}
							}
							
							autoOpenState.scrollCompleted = true;
						}, 1000); // Wait 1 second for panel to load
					}); // End waitForPanelToOpen callback
				}

				/**
				 * Add tooltip to highlighted element
				 */
				function highlightElement(element, duration, tooltipText) {
					duration = duration || 3000;
					tooltipText = tooltipText || '" . esc_js( __( 'This is the element you need to interact with', 'ultimate-addons-for-gutenberg' ) ) . "';
					
					// Get element position and dimensions
					var rect = element.getBoundingClientRect();
					
					// Create tooltip
					var tooltip = document.createElement('div');
					tooltip.className = 'uagb-learn-tooltip';
					
					// Create tooltip content container
					var tooltipContent = document.createElement('div');
					tooltipContent.className = 'uagb-learn-tooltip-content';
					tooltipContent.textContent = tooltipText;
					
					// Create close button
					var closeButton = document.createElement('button');
					closeButton.className = 'uagb-learn-tooltip-close';
					closeButton.innerHTML = '×';
					closeButton.setAttribute('aria-label', '" . esc_attr( __( 'Close tooltip', 'ultimate-addons-for-gutenberg' ) ) . "');
					
					// Create arrow
					var arrow = document.createElement('div');
					arrow.className = 'uagb-learn-tooltip-arrow';
					
					// Append content and close button to tooltip
					tooltip.appendChild(tooltipContent);
					tooltip.appendChild(closeButton);
					tooltip.appendChild(arrow);
					
					// Position tooltip - try above first, then sides
					var tooltipTop, tooltipLeft, position = 'top';
					
					// Try positioning above
					if (rect.top >= 70) {
						tooltipTop = rect.top - 60;
						tooltipLeft = rect.left + (rect.width / 2) - 100;
						position = 'top';
					}
					// If no space above, try right side
					else if (rect.right + 220 <= window.innerWidth) {
						tooltipTop = rect.top + (rect.height / 2) - 25;
						tooltipLeft = rect.right + 15;
						position = 'right';
					}
					// If no space on right, try left side
					else if (rect.left >= 220) {
						tooltipTop = rect.top + (rect.height / 2) - 25;
						tooltipLeft = rect.left - 215;
						position = 'left';
					}
					// Last resort: center above even if it goes off screen
					else {
						tooltipTop = rect.top - 60;
						tooltipLeft = rect.left + (rect.width / 2) - 100;
						position = 'top';
					}
					
					// Final boundary adjustments for top position
					if (position === 'top') {
						if (tooltipLeft < 10) tooltipLeft = 10;
						if (tooltipLeft + 200 > window.innerWidth) tooltipLeft = window.innerWidth - 210;
					}
					
					tooltip.style.cssText = 'position: fixed; top: ' + tooltipTop + 'px; left: ' + tooltipLeft + 'px; width: 200px; padding: 10px 15px 10px 10px; background: #333; color: #fff; border-radius: 6px; font-size: 14px; font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif; z-index: 1000000; box-shadow: 0 4px 12px #333; opacity: 0; transform: translateY(10px); transition: all 0.3s ease; pointer-events: auto;';
					
					// Add tooltip CSS if not exists
					if (!document.getElementById('learn-actions-css')) {
						var style = document.createElement('style');
						style.id = 'learn-actions-css';
						style.textContent = '.uagb-learn-tooltip { position: relative; } .uagb-learn-tooltip-content { margin-right: 20px; } .uagb-learn-tooltip-close { position: absolute; top: 5px; right: 8px; background: none; border: none; color: #fff; font-size: 18px; line-height: 1; cursor: pointer; padding: 0; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; border-radius: 50%; transition: background-color 0.2s; } .uagb-learn-tooltip-close:hover { background-color: rgba(255, 255, 255, 0.1); } .uagb-learn-tooltip-close:focus { outline: 1px solid #fff; outline-offset: 1px; } .uagb-learn-tooltip-arrow { position: absolute; width: 0; height: 0; } .uagb-learn-tooltip.position-top .uagb-learn-tooltip-arrow { bottom: -8px; left: 50%; transform: translateX(-50%); border-left: 8px solid transparent; border-right: 8px solid transparent; border-top: 8px solid #333; } .uagb-learn-tooltip.position-right .uagb-learn-tooltip-arrow { left: -8px; top: 50%; transform: translateY(-50%); border-top: 8px solid transparent; border-bottom: 8px solid transparent; border-right: 8px solid #333; } .uagb-learn-tooltip.position-left .uagb-learn-tooltip-arrow { right: -8px; top: 50%; transform: translateY(-50%); border-top: 8px solid transparent; border-bottom: 8px solid transparent; border-left: 8px solid #333; } button.block-editor-tabbed-sidebar__tab::after { outline: none; }';
						document.head.appendChild(style);
					}
					
					document.body.appendChild(tooltip);
					
					// Add position class for arrow styling
					tooltip.classList.add('position-' + position);
					
					// Function to remove tooltip with animation
					function removeTooltip() {
						if (tooltip && tooltip.parentNode) {
							tooltip.style.opacity = '0';
							var exitTransform;
							if (position === 'right') {
								exitTransform = 'translateX(-10px)';
							} else if (position === 'left') {
								exitTransform = 'translateX(10px)';
							} else {
								exitTransform = 'translateY(-10px)';
							}
							tooltip.style.transform = exitTransform;
							setTimeout(() => {
								if (tooltip.parentNode) {
									tooltip.parentNode.removeChild(tooltip);
								}
							}, 300);
						}
					}
					
					// Add click handler for close button
					closeButton.addEventListener('click', removeTooltip);

					// Add click handler to close tooltip on any body click
					function handleBodyClick(event) {
						removeTooltip();
						document.removeEventListener('click', handleBodyClick);
					}
					
					// Add the body click listener after a small delay to prevent immediate closure
					setTimeout(() => {
						document.addEventListener('click', handleBodyClick);
					}, 100);
					
					// Set initial transform based on position
					var initialTransform, finalTransform;
					if (position === 'right') {
						initialTransform = 'translateX(-10px)';
						finalTransform = 'translateX(0)';
					} else if (position === 'left') {
						initialTransform = 'translateX(10px)';
						finalTransform = 'translateX(0)';
					} else {
						initialTransform = 'translateY(10px)';
						finalTransform = 'translateY(0)';
					}
					
					tooltip.style.transform = initialTransform;
					
					// Animate in
					setTimeout(() => {
						tooltip.style.opacity = '1';
						tooltip.style.transform = finalTransform;
					}, 100);
					// Tooltip stays until manually closed - no automatic removal
				}

				/**
				 * Main initialization function
				 */
				function init() {
					if (autoOpenState.executed) {
						return; // Prevent multiple executions
					}

					var hash = window.location.hash;
					
					// Check if we should auto-open Astra settings
					if (hash === '#astra-container-layout' || hash === '#astra-disable-elements') {
						autoOpenState.executed = true;
						
						waitForEditor(() => {
							// Wait a bit more for the UI to stabilize
							setTimeout(() => {
								waitForAstraButton((button) => {
									if (isDistractionFreeMode()) {
										return;
									}
									if (clickAstraButton(button)) {
										// Extract panel type from hash
										var panelType = hash.replace('#astra-', '');
										scrollToPanel(panelType);
									}
								}, 5000); // 5 second timeout for finding button
							}, 1000);
						});
					}
				}

				// Run only once when script loads
				init();

			} )();
			";

			wp_add_inline_script( 'wp-edit-post', $inline_script );
		}
	}
}

UAGB_Astra_Settings_Auto_Open::get_instance();
