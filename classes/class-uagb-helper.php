<?php
/**
 * UAGB Helper.
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'UAGB_Helper' ) ) {

	/**
	 * Class UAGB_Helper.
	 */
	final class UAGB_Helper {


		/**
		 * Member Variable
		 *
		 * @since 0.0.1
		 * @var instance
		 */
		private static $instance;

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
		 * @var file_generation
		 */
		public static $file_generation = 'disabled';

		/**
		 * Store Json variable
		 *
		 * @since 1.8.1
		 * @var instance
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
		public static $uag_flag = false;

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
		public static $uag_faq_layout = false;

		/**
		 * UAG TOC Flag
		 *
		 * @since 1.18.1
		 * @deprecated 1.23.0
		 * @var table_of_contents_flag
		 */
		public static $table_of_contents_flag = false;

		/**
		 * Spectra Font Awesome 5 Polyfiller
		 *
		 * @since 2.0.0
		 * @var font_awesome_5_polyfiller
		 */
		public static $font_awesome_5_polyfiller = array(
			'ad' => 'rectangle-ad',
			'rectangle-ad' => 'rectangle-ad',
			'adjust' => 'circle-half-stroke',
			'circle-half-stroke' => 'circle-half-stroke',
			'air-freshener' => 'spray-can-sparkles',
			'spray-can-sparkles' => 'spray-can-sparkles',
			'alien-monster' => 'alien-8bit',
			'alien-8bit' => 'alien-8bit',
			'allergies' => 'hand-dots',
			'hand-dots' => 'hand-dots',
			'ambulance' => 'truck-medical',
			'truck-medical' => 'truck-medical',
			'american-sign-language-interpreting' => 'hands-asl-interpreting',
			'hands-asl-interpreting' => 'hands-asl-interpreting',
			'analytics' => 'chart-mixed',
			'chart-mixed' => 'chart-mixed',
			'angle-double-down' => 'angles-down',
			'angles-down' => 'angles-down',
			'angle-double-left' => 'angles-left',
			'angles-left' => 'angles-left',
			'angle-double-right' => 'angles-right',
			'angles-right' => 'angles-right',
			'angle-double-up' => 'angles-up',
			'angles-up' => 'angles-up',
			'angry' => 'face-angry',
			'face-angry' => 'face-angry',
			'apple-alt' => 'apple-whole',
			'apple-whole' => 'apple-whole',
			'apple-crate' => 'crate-apple',
			'crate-apple' => 'crate-apple',
			'archive' => 'box-archive',
			'box-archive' => 'box-archive',
			'arrow-alt-circle-down' => 'circle-down',
			'circle-down' => 'circle-down',
			'arrow-alt-circle-left' => 'circle-left',
			'circle-left' => 'circle-left',
			'arrow-alt-circle-right' => 'circle-right',
			'circle-right' => 'circle-right',
			'arrow-alt-circle-up' => 'circle-up',
			'circle-up' => 'circle-up',
			'arrow-alt-down' => 'down',
			'down' => 'down',
			'arrow-alt-from-bottom' => 'up-from-line',
			'up-from-line' => 'up-from-line',
			'arrow-alt-from-left' => 'right-from-line',
			'right-from-line' => 'right-from-line',
			'arrow-alt-from-right' => 'left-from-line',
			'left-from-line' => 'left-from-line',
			'arrow-alt-from-top' => 'down-from-line',
			'down-from-line' => 'down-from-line',
			'arrow-alt-left' => 'left',
			'left' => 'left',
			'arrow-alt-right' => 'right',
			'right' => 'right',
			'arrow-alt-square-down' => 'square-down',
			'square-down' => 'square-down',
			'arrow-alt-square-left' => 'square-left',
			'square-left' => 'square-left',
			'arrow-alt-square-right' => 'square-right',
			'square-right' => 'square-right',
			'arrow-alt-square-up' => 'square-up',
			'square-up' => 'square-up',
			'arrow-alt-to-bottom' => 'down-to-line',
			'down-to-line' => 'down-to-line',
			'arrow-alt-to-left' => 'left-to-line',
			'left-to-line' => 'left-to-line',
			'arrow-alt-to-right' => 'right-to-line',
			'right-to-line' => 'right-to-line',
			'arrow-alt-to-top' => 'up-to-line',
			'up-to-line' => 'up-to-line',
			'arrow-alt-up' => 'up',
			'up' => 'up',
			'arrow-circle-down' => 'circle-arrow-down',
			'circle-arrow-down' => 'circle-arrow-down',
			'arrow-circle-left' => 'circle-arrow-left',
			'circle-arrow-left' => 'circle-arrow-left',
			'arrow-circle-right' => 'circle-arrow-right',
			'circle-arrow-right' => 'circle-arrow-right',
			'arrow-circle-up' => 'circle-arrow-up',
			'circle-arrow-up' => 'circle-arrow-up',
			'arrow-from-bottom' => 'arrow-up-from-line',
			'arrow-up-from-line' => 'arrow-up-from-line',
			'arrow-from-left' => 'arrow-right-from-line',
			'arrow-right-from-line' => 'arrow-right-from-line',
			'arrow-from-right' => 'arrow-left-from-line',
			'arrow-left-from-line' => 'arrow-left-from-line',
			'arrow-from-top' => 'arrow-down-from-line',
			'arrow-down-from-line' => 'arrow-down-from-line',
			'arrow-square-down' => 'square-arrow-down',
			'square-arrow-down' => 'square-arrow-down',
			'arrow-square-left' => 'square-arrow-left',
			'square-arrow-left' => 'square-arrow-left',
			'arrow-square-right' => 'square-arrow-right',
			'square-arrow-right' => 'square-arrow-right',
			'arrow-square-up' => 'square-arrow-up',
			'square-arrow-up' => 'square-arrow-up',
			'arrow-to-bottom' => 'arrow-down-to-line',
			'arrow-down-to-line' => 'arrow-down-to-line',
			'arrow-to-left' => 'arrow-left-to-line',
			'arrow-left-to-line' => 'arrow-left-to-line',
			'arrow-to-right' => 'arrow-right-to-line',
			'arrow-right-to-line' => 'arrow-right-to-line',
			'arrow-to-top' => 'arrow-up-to-line',
			'arrow-up-to-line' => 'arrow-up-to-line',
			'arrows' => 'arrows-up-down-left-right',
			'arrows-up-down-left-right' => 'arrows-up-down-left-right',
			'arrows-alt' => 'up-down-left-right',
			'up-down-left-right' => 'up-down-left-right',
			'arrows-alt-h' => 'left-right',
			'left-right' => 'left-right',
			'arrows-alt-v' => 'up-down',
			'up-down' => 'up-down',
			'arrows-h' => 'arrows-left-right',
			'arrows-left-right' => 'arrows-left-right',
			'arrows-v' => 'arrows-up-down',
			'arrows-up-down' => 'arrows-up-down',
			'assistive-listening-systems' => 'ear-listen',
			'ear-listen' => 'ear-listen',
			'atlas' => 'book-atlas',
			'book-atlas' => 'book-atlas',
			'atom-alt' => 'atom-simple',
			'atom-simple' => 'atom-simple',
			'backspace' => 'delete-left',
			'delete-left' => 'delete-left',
			'balance-scale' => 'scale-balanced',
			'scale-balanced' => 'scale-balanced',
			'balance-scale-left' => 'scale-unbalanced',
			'scale-unbalanced' => 'scale-unbalanced',
			'balance-scale-right' => 'scale-unbalanced-flip',
			'scale-unbalanced-flip' => 'scale-unbalanced-flip',
			'band-aid' => 'bandage',
			'bandage' => 'bandage',
			'barcode-alt' => 'rectangle-barcode',
			'rectangle-barcode' => 'rectangle-barcode',
			'baseball-ball' => 'baseball',
			'baseball' => 'baseball',
			'basketball-ball' => 'basketball',
			'basketball' => 'basketball',
			'bed-alt' => 'bed-front',
			'bed-front' => 'bed-front',
			'beer' => 'beer-mug-empty',
			'beer-mug-empty' => 'beer-mug-empty',
			'betamax' => 'cassette-betamax',
			'cassette-betamax' => 'cassette-betamax',
			'bible' => 'book-bible',
			'book-bible' => 'book-bible',
			'biking' => 'person-biking',
			'person-biking' => 'person-biking',
			'biking-mountain' => 'person-biking-mountain',
			'person-biking-mountain' => 'person-biking-mountain',
			'birthday-cake' => 'cake-candles',
			'cake-candles' => 'cake-candles',
			'blind' => 'person-walking-with-cane',
			'person-walking-with-cane' => 'person-walking-with-cane',
			'book-alt' => 'book-blank',
			'book-blank' => 'book-blank',
			'book-dead' => 'book-skull',
			'book-skull' => 'book-skull',
			'book-reader' => 'book-open-reader',
			'book-open-reader' => 'book-open-reader',
			'book-spells' => 'book-sparkles',
			'book-sparkles' => 'book-sparkles',
			'border-style' => 'border-top-left',
			'border-top-left' => 'border-top-left',
			'border-style-alt' => 'border-bottom-right',
			'border-bottom-right' => 'border-bottom-right',
			'box-alt' => 'box-taped',
			'box-taped' => 'box-taped',
			'box-fragile' => 'square-fragile',
			'square-fragile' => 'square-fragile',
			'box-full' => 'box-open-full',
			'box-open-full' => 'box-open-full',
			'box-up' => 'square-this-way-up',
			'square-this-way-up' => 'square-this-way-up',
			'box-usd' => 'box-dollar',
			'box-dollar' => 'box-dollar',
			'boxes' => 'boxes-stacked',
			'boxes-stacked' => 'boxes-stacked',
			'boxes-alt' => 'boxes-stacked',
			'brackets' => 'brackets-square',
			'brackets-square' => 'brackets-square',
			'broadcast-tower' => 'tower-broadcast',
			'tower-broadcast' => 'tower-broadcast',
			'burn' => 'fire-flame-simple',
			'fire-flame-simple' => 'fire-flame-simple',
			'bus-alt' => 'bus-simple',
			'bus-simple' => 'bus-simple',
			'calculator-alt' => 'calculator-simple',
			'calculator-simple' => 'calculator-simple',
			'calendar-alt' => 'calendar-days',
			'calendar-days' => 'calendar-days',
			'calendar-edit' => 'calendar-pen',
			'calendar-pen' => 'calendar-pen',
			'calendar-times' => 'calendar-xmark',
			'calendar-xmark' => 'calendar-xmark',
			'camera-alt' => 'camera',
			'camera' => 'camera',
			'camera-home' => 'camera-security',
			'camera-security' => 'camera-security',
			'car-alt' => 'car-rear',
			'car-rear' => 'car-rear',
			'car-crash' => 'car-burst',
			'car-burst' => 'car-burst',
			'car-mechanic' => 'car-wrench',
			'car-wrench' => 'car-wrench',
			'caravan-alt' => 'caravan-simple',
			'caravan-simple' => 'caravan-simple',
			'caret-circle-down' => 'circle-caret-down',
			'circle-caret-down' => 'circle-caret-down',
			'caret-circle-left' => 'circle-caret-left',
			'circle-caret-left' => 'circle-caret-left',
			'caret-circle-right' => 'circle-caret-right',
			'circle-caret-right' => 'circle-caret-right',
			'caret-circle-up' => 'circle-caret-up',
			'circle-caret-up' => 'circle-caret-up',
			'caret-square-down' => 'square-caret-down',
			'square-caret-down' => 'square-caret-down',
			'caret-square-left' => 'square-caret-left',
			'square-caret-left' => 'square-caret-left',
			'caret-square-right' => 'square-caret-right',
			'square-caret-right' => 'square-caret-right',
			'caret-square-up' => 'square-caret-up',
			'square-caret-up' => 'square-caret-up',
			'cctv' => 'camera-cctv',
			'camera-cctv' => 'camera-cctv',
			'chalkboard-teacher' => 'chalkboard-user',
			'chalkboard-user' => 'chalkboard-user',
			'chart-pie-alt' => 'chart-pie-simple',
			'chart-pie-simple' => 'chart-pie-simple',
			'check-circle' => 'circle-check',
			'circle-check' => 'circle-check',
			'check-square' => 'square-check',
			'square-check' => 'square-check',
			'cheeseburger' => 'burger-cheese',
			'burger-cheese' => 'burger-cheese',
			'chess-bishop-alt' => 'chess-bishop-piece',
			'chess-bishop-piece' => 'chess-bishop-piece',
			'chess-clock-alt' => 'chess-clock-flip',
			'chess-clock-flip' => 'chess-clock-flip',
			'chess-king-alt' => 'chess-king-piece',
			'chess-king-piece' => 'chess-king-piece',
			'chess-knight-alt' => 'chess-knight-piece',
			'chess-knight-piece' => 'chess-knight-piece',
			'chess-pawn-alt' => 'chess-pawn-piece',
			'chess-pawn-piece' => 'chess-pawn-piece',
			'chess-queen-alt' => 'chess-queen-piece',
			'chess-queen-piece' => 'chess-queen-piece',
			'chess-rook-alt' => 'chess-rook-piece',
			'chess-rook-piece' => 'chess-rook-piece',
			'chevron-circle-down' => 'circle-chevron-down',
			'circle-chevron-down' => 'circle-chevron-down',
			'chevron-circle-left' => 'circle-chevron-left',
			'circle-chevron-left' => 'circle-chevron-left',
			'chevron-circle-right' => 'circle-chevron-right',
			'circle-chevron-right' => 'circle-chevron-right',
			'chevron-circle-up' => 'circle-chevron-up',
			'circle-chevron-up' => 'circle-chevron-up',
			'chevron-double-down' => 'chevrons-down',
			'chevrons-down' => 'chevrons-down',
			'chevron-double-left' => 'chevrons-left',
			'chevrons-left' => 'chevrons-left',
			'chevron-double-right' => 'chevrons-right',
			'chevrons-right' => 'chevrons-right',
			'chevron-double-up' => 'chevrons-up',
			'chevrons-up' => 'chevrons-up',
			'chevron-square-down' => 'square-chevron-down',
			'square-chevron-down' => 'square-chevron-down',
			'chevron-square-left' => 'square-chevron-left',
			'square-chevron-left' => 'square-chevron-left',
			'chevron-square-right' => 'square-chevron-right',
			'square-chevron-right' => 'square-chevron-right',
			'chevron-square-up' => 'square-chevron-up',
			'square-chevron-up' => 'square-chevron-up',
			'clinic-medical' => 'house-chimney-medical',
			'house-chimney-medical' => 'house-chimney-medical',
			'cloud-download' => 'cloud-arrow-down',
			'cloud-arrow-down' => 'cloud-arrow-down',
			'cloud-download-alt' => 'cloud-arrow-down',
			'cloud-upload' => 'cloud-arrow-up',
			'cloud-arrow-up' => 'cloud-arrow-up',
			'cloud-upload-alt' => 'cloud-arrow-up',
			'cocktail' => 'martini-glass-citrus',
			'martini-glass-citrus' => 'martini-glass-citrus',
			'coffee' => 'mug-saucer',
			'mug-saucer' => 'mug-saucer',
			'coffee-togo' => 'cup-togo',
			'cup-togo' => 'cup-togo',
			'cog' => 'gear',
			'gear' => 'gear',
			'cogs' => 'gears',
			'gears' => 'gears',
			'columns' => 'table-columns',
			'table-columns' => 'table-columns',
			'comment-alt' => 'message',
			'message' => 'message',
			'comment-alt-check' => 'message-check',
			'message-check' => 'message-check',
			'comment-alt-dollar' => 'message-dollar',
			'message-dollar' => 'message-dollar',
			'comment-alt-dots' => 'message-dots',
			'message-dots' => 'message-dots',
			'comment-alt-edit' => 'message-pen',
			'message-pen' => 'message-pen',
			'comment-alt-exclamation' => 'message-exclamation',
			'message-exclamation' => 'message-exclamation',
			'comment-alt-lines' => 'message-lines',
			'message-lines' => 'message-lines',
			'comment-alt-medical' => 'message-medical',
			'message-medical' => 'message-medical',
			'comment-alt-minus' => 'message-minus',
			'message-minus' => 'message-minus',
			'comment-alt-music' => 'message-music',
			'message-music' => 'message-music',
			'comment-alt-plus' => 'message-plus',
			'message-plus' => 'message-plus',
			'comment-alt-slash' => 'message-slash',
			'message-slash' => 'message-slash',
			'comment-alt-smile' => 'message-smile',
			'message-smile' => 'message-smile',
			'comment-alt-times' => 'message-xmark',
			'message-xmark' => 'message-xmark',
			'comment-edit' => 'comment-pen',
			'comment-pen' => 'comment-pen',
			'comment-times' => 'comment-xmark',
			'comment-xmark' => 'comment-xmark',
			'comments-alt' => 'messages',
			'messages' => 'messages',
			'comments-alt-dollar' => 'messages-dollar',
			'messages-dollar' => 'messages-dollar',
			'compress-alt' => 'down-left-and-up-right-to-center',
			'down-left-and-up-right-to-center' => 'down-left-and-up-right-to-center',
			'compress-arrows-alt' => 'minimize',
			'minimize' => 'minimize',
			'concierge-bell' => 'bell-concierge',
			'bell-concierge' => 'bell-concierge',
			'construction' => 'triangle-person-digging',
			'triangle-person-digging' => 'triangle-person-digging',
			'conveyor-belt-alt' => 'conveyor-belt-boxes',
			'conveyor-belt-boxes' => 'conveyor-belt-boxes',
			'cowbell-more' => 'cowbell-circle-plus',
			'cowbell-circle-plus' => 'cowbell-circle-plus',
			'cricket' => 'cricket-bat-ball',
			'cricket-bat-ball' => 'cricket-bat-ball',
			'crop-alt' => 'crop-simple',
			'crop-simple' => 'crop-simple',
			'curling' => 'curling-stone',
			'curling-stone' => 'curling-stone',
			'cut' => 'scissors',
			'scissors' => 'scissors',
			'deaf' => 'ear-deaf',
			'ear-deaf' => 'ear-deaf',
			'debug' => 'ban-bug',
			'ban-bug' => 'ban-bug',
			'desktop-alt' => 'desktop',
			'desktop' => 'desktop',
			'dewpoint' => 'droplet-degree',
			'droplet-degree' => 'droplet-degree',
			'diagnoses' => 'person-dots-from-line',
			'person-dots-from-line' => 'person-dots-from-line',
			'digging' => 'person-digging',
			'person-digging' => 'person-digging',
			'digital-tachograph' => 'tachograph-digital',
			'tachograph-digital' => 'tachograph-digital',
			'directions' => 'diamond-turn-right',
			'diamond-turn-right' => 'diamond-turn-right',
			'dizzy' => 'face-dizzy',
			'face-dizzy' => 'face-dizzy',
			'dolly-flatbed' => 'cart-flatbed',
			'cart-flatbed' => 'cart-flatbed',
			'dolly-flatbed-alt' => 'cart-flatbed-boxes',
			'cart-flatbed-boxes' => 'cart-flatbed-boxes',
			'dolly-flatbed-empty' => 'cart-flatbed-empty',
			'cart-flatbed-empty' => 'cart-flatbed-empty',
			'donate' => 'circle-dollar-to-slot',
			'circle-dollar-to-slot' => 'circle-dollar-to-slot',
			'dot-circle' => 'circle-dot',
			'circle-dot' => 'circle-dot',
			'drafting-compass' => 'compass-drafting',
			'compass-drafting' => 'compass-drafting',
			'drone-alt' => 'drone-front',
			'drone-front' => 'drone-front',
			'dryer-alt' => 'dryer-heat',
			'dryer-heat' => 'dryer-heat',
			'eclipse-alt' => 'moon-over-sun',
			'moon-over-sun' => 'moon-over-sun',
			'edit' => 'pen-to-square',
			'pen-to-square' => 'pen-to-square',
			'ellipsis-h' => 'ellipsis',
			'ellipsis' => 'ellipsis',
			'ellipsis-h-alt' => 'ellipsis-stroke',
			'ellipsis-stroke' => 'ellipsis-stroke',
			'ellipsis-v' => 'ellipsis-vertical',
			'ellipsis-vertical' => 'ellipsis-vertical',
			'ellipsis-v-alt' => 'ellipsis-stroke-vertical',
			'ellipsis-stroke-vertical' => 'ellipsis-stroke-vertical',
			'envelope-square' => 'square-envelope',
			'square-envelope' => 'square-envelope',
			'exchange' => 'arrow-right-arrow-left',
			'arrow-right-arrow-left' => 'arrow-right-arrow-left',
			'exchange-alt' => 'right-left',
			'right-left' => 'right-left',
			'exclamation-circle' => 'circle-exclamation',
			'circle-exclamation' => 'circle-exclamation',
			'exclamation-square' => 'square-exclamation',
			'square-exclamation' => 'square-exclamation',
			'exclamation-triangle' => 'triangle-exclamation',
			'triangle-exclamation' => 'triangle-exclamation',
			'expand-alt' => 'up-right-and-down-left-from-center',
			'up-right-and-down-left-from-center' => 'up-right-and-down-left-from-center',
			'expand-arrows' => 'arrows-maximize',
			'arrows-maximize' => 'arrows-maximize',
			'expand-arrows-alt' => 'maximize',
			'maximize' => 'maximize',
			'external-link' => 'arrow-up-right-from-square',
			'arrow-up-right-from-square' => 'arrow-up-right-from-square',
			'external-link-alt' => 'up-right-from-square',
			'up-right-from-square' => 'up-right-from-square',
			'external-link-square' => 'square-arrow-up-right',
			'square-arrow-up-right' => 'square-arrow-up-right',
			'external-link-square-alt' => 'square-up-right',
			'square-up-right' => 'square-up-right',
			'fast-backward' => 'backward-fast',
			'backward-fast' => 'backward-fast',
			'fast-forward' => 'forward-fast',
			'forward-fast' => 'forward-fast',
			'feather-alt' => 'feather-pointed',
			'feather-pointed' => 'feather-pointed',
			'female' => 'person-dress',
			'person-dress' => 'person-dress',
			'field-hockey' => 'field-hockey-stick-ball',
			'field-hockey-stick-ball' => 'field-hockey-stick-ball',
			'fighter-jet' => 'jet-fighter',
			'jet-fighter' => 'jet-fighter',
			'file-alt' => 'file-lines',
			'file-lines' => 'file-lines',
			'file-archive' => 'file-zipper',
			'file-zipper' => 'file-zipper',
			'file-chart-line' => 'file-chart-column',
			'file-chart-column' => 'file-chart-column',
			'file-download' => 'file-arrow-down',
			'file-arrow-down' => 'file-arrow-down',
			'file-edit' => 'file-pen',
			'file-pen' => 'file-pen',
			'file-medical-alt' => 'file-waveform',
			'file-waveform' => 'file-waveform',
			'file-search' => 'file-magnifying-glass',
			'file-magnifying-glass' => 'file-magnifying-glass',
			'file-times' => 'file-xmark',
			'file-xmark' => 'file-xmark',
			'file-upload' => 'file-arrow-up',
			'file-arrow-up' => 'file-arrow-up',
			'film-alt' => 'film-simple',
			'film-simple' => 'film-simple',
			'fire-alt' => 'fire-flame-curved',
			'fire-flame-curved' => 'fire-flame-curved',
			'first-aid' => 'kit-medical',
			'kit-medical' => 'kit-medical',
			'fist-raised' => 'hand-fist',
			'hand-fist' => 'hand-fist',
			'flag-alt' => 'flag-swallowtail',
			'flag-swallowtail' => 'flag-swallowtail',
			'flame' => 'fire-flame',
			'fire-flame' => 'fire-flame',
			'flask-poison' => 'flask-round-poison',
			'flask-round-poison' => 'flask-round-poison',
			'flask-potion' => 'flask-round-potion',
			'flask-round-potion' => 'flask-round-potion',
			'flushed' => 'face-flushed',
			'face-flushed' => 'face-flushed',
			'fog' => 'cloud-fog',
			'cloud-fog' => 'cloud-fog',
			'folder-download' => 'folder-arrow-down',
			'folder-arrow-down' => 'folder-arrow-down',
			'folder-times' => 'folder-xmark',
			'folder-xmark' => 'folder-xmark',
			'folder-upload' => 'folder-arrow-up',
			'folder-arrow-up' => 'folder-arrow-up',
			'font-awesome-alt' => 'square-font-awesome-stroke',
			'square-font-awesome-stroke' => 'square-font-awesome-stroke',
			'font-awesome-flag' => 'font-awesome',
			'font-awesome' => 'font-awesome',
			'font-awesome-logo-full' => 'font-awesome',
			'football-ball' => 'football',
			'football' => 'football',
			'fragile' => 'wine-glass-crack',
			'wine-glass-crack' => 'wine-glass-crack',
			'frosty-head' => 'snowman-head',
			'snowman-head' => 'snowman-head',
			'frown' => 'face-frown',
			'face-frown' => 'face-frown',
			'frown-open' => 'face-frown-open',
			'face-frown-open' => 'face-frown-open',
			'funnel-dollar' => 'filter-circle-dollar',
			'filter-circle-dollar' => 'filter-circle-dollar',
			'game-board-alt' => 'game-board-simple',
			'game-board-simple' => 'game-board-simple',
			'gamepad-alt' => 'gamepad-modern',
			'gamepad-modern' => 'gamepad-modern',
			'glass-champagne' => 'champagne-glass',
			'champagne-glass' => 'champagne-glass',
			'glass-cheers' => 'champagne-glasses',
			'champagne-glasses' => 'champagne-glasses',
			'glass-martini' => 'martini-glass-empty',
			'martini-glass-empty' => 'martini-glass-empty',
			'glass-martini-alt' => 'martini-glass',
			'martini-glass' => 'martini-glass',
			'glass-whiskey' => 'whiskey-glass',
			'whiskey-glass' => 'whiskey-glass',
			'glass-whiskey-rocks' => 'whiskey-glass-ice',
			'whiskey-glass-ice' => 'whiskey-glass-ice',
			'glasses-alt' => 'glasses-round',
			'glasses-round' => 'glasses-round',
			'globe-africa' => 'earth-africa',
			'earth-africa' => 'earth-africa',
			'globe-americas' => 'earth-americas',
			'earth-americas' => 'earth-americas',
			'globe-asia' => 'earth-asia',
			'earth-asia' => 'earth-asia',
			'globe-europe' => 'earth-europa',
			'earth-europa' => 'earth-europa',
			'golf-ball' => 'golf-ball-tee',
			'golf-ball-tee' => 'golf-ball-tee',
			'grimace' => 'face-grimace',
			'face-grimace' => 'face-grimace',
			'grin' => 'face-grin',
			'face-grin' => 'face-grin',
			'grin-alt' => 'face-grin-wide',
			'face-grin-wide' => 'face-grin-wide',
			'grin-beam' => 'face-grin-beam',
			'face-grin-beam' => 'face-grin-beam',
			'grin-beam-sweat' => 'face-grin-beam-sweat',
			'face-grin-beam-sweat' => 'face-grin-beam-sweat',
			'grin-hearts' => 'face-grin-hearts',
			'face-grin-hearts' => 'face-grin-hearts',
			'grin-squint' => 'face-grin-squint',
			'face-grin-squint' => 'face-grin-squint',
			'grin-squint-tears' => 'face-grin-squint-tears',
			'face-grin-squint-tears' => 'face-grin-squint-tears',
			'grin-stars' => 'face-grin-stars',
			'face-grin-stars' => 'face-grin-stars',
			'grin-tears' => 'face-grin-tears',
			'face-grin-tears' => 'face-grin-tears',
			'grin-tongue' => 'face-grin-tongue',
			'face-grin-tongue' => 'face-grin-tongue',
			'grin-tongue-squint' => 'face-grin-tongue-squint',
			'face-grin-tongue-squint' => 'face-grin-tongue-squint',
			'grin-tongue-wink' => 'face-grin-tongue-wink',
			'face-grin-tongue-wink' => 'face-grin-tongue-wink',
			'grin-wink' => 'face-grin-wink',
			'face-grin-wink' => 'face-grin-wink',
			'grip-horizontal' => 'grip',
			'grip' => 'grip',
			'h-square' => 'square-h',
			'square-h' => 'square-h',
			'hamburger' => 'burger',
			'burger' => 'burger',
			'hand-holding-usd' => 'hand-holding-dollar',
			'hand-holding-dollar' => 'hand-holding-dollar',
			'hand-holding-water' => 'hand-holding-droplet',
			'hand-holding-droplet' => 'hand-holding-droplet',
			'hand-paper' => 'hand',
			'hand' => 'hand',
			'hand-receiving' => 'hands-holding-diamond',
			'hands-holding-diamond' => 'hands-holding-diamond',
			'hand-rock' => 'hand-back-fist',
			'hand-back-fist' => 'hand-back-fist',
			'hands-heart' => 'hands-holding-heart',
			'hands-holding-heart' => 'hands-holding-heart',
			'hands-helping' => 'handshake-angle',
			'handshake-angle' => 'handshake-angle',
			'hands-usd' => 'hands-holding-dollar',
			'hands-holding-dollar' => 'hands-holding-dollar',
			'hands-wash' => 'hands-bubbles',
			'hands-bubbles' => 'hands-bubbles',
			'handshake-alt' => 'handshake-simple',
			'handshake-simple' => 'handshake-simple',
			'handshake-alt-slash' => 'handshake-simple-slash',
			'handshake-simple-slash' => 'handshake-simple-slash',
			'hard-hat' => 'helmet-safety',
			'helmet-safety' => 'helmet-safety',
			'hdd' => 'hard-drive',
			'hard-drive' => 'hard-drive',
			'head-vr' => 'head-side-goggles',
			'head-side-goggles' => 'head-side-goggles',
			'headphones-alt' => 'headphones-simple',
			'headphones-simple' => 'headphones-simple',
			'heart-broken' => 'heart-crack',
			'heart-crack' => 'heart-crack',
			'heart-circle' => 'circle-heart',
			'circle-heart' => 'circle-heart',
			'heart-rate' => 'wave-pulse',
			'wave-pulse' => 'wave-pulse',
			'heart-square' => 'square-heart',
			'square-heart' => 'square-heart',
			'heartbeat' => 'heart-pulse',
			'heart-pulse' => 'heart-pulse',
			'hiking' => 'person-hiking',
			'person-hiking' => 'person-hiking',
			'history' => 'clock-rotate-left',
			'clock-rotate-left' => 'clock-rotate-left',
			'home' => 'house',
			'house' => 'house',
			'home-alt' => 'house',
			'home-heart' => 'house-heart',
			'house-heart' => 'house-heart',
			'home-lg' => 'house-chimney',
			'house-chimney' => 'house-chimney',
			'home-lg-alt' => 'house',
			'hospital-alt' => 'hospital',
			'hospital' => 'hospital',
			'hospital-symbol' => 'circle-h',
			'circle-h' => 'circle-h',
			'hot-tub' => 'hot-tub-person',
			'hot-tub-person' => 'hot-tub-person',
			'hourglass-half' => 'hourglass',
			'hourglass' => 'hourglass',
			'house-damage' => 'house-chimney-crack',
			'house-chimney-crack' => 'house-chimney-crack',
			'house-leave' => 'house-person-leave',
			'house-person-leave' => 'house-person-leave',
			'house-return' => 'house-person-return',
			'house-person-return' => 'house-person-return',
			'hryvnia' => 'hryvnia-sign',
			'hryvnia-sign' => 'hryvnia-sign',
			'humidity' => 'droplet-percent',
			'droplet-percent' => 'droplet-percent',
			'icons-alt' => 'symbols',
			'symbols' => 'symbols',
			'id-card-alt' => 'id-card-clip',
			'id-card-clip' => 'id-card-clip',
			'industry-alt' => 'industry-windows',
			'industry-windows' => 'industry-windows',
			'info-circle' => 'circle-info',
			'circle-info' => 'circle-info',
			'info-square' => 'square-info',
			'square-info' => 'square-info',
			'innosoft' => '42-group',
			'42-group' => '42-group',
			'inventory' => 'shelves',
			'shelves' => 'shelves',
			'journal-whills' => 'book-journal-whills',
			'book-journal-whills' => 'book-journal-whills',
			'kiss' => 'face-kiss',
			'face-kiss' => 'face-kiss',
			'kiss-beam' => 'face-kiss-beam',
			'face-kiss-beam' => 'face-kiss-beam',
			'kiss-wink-heart' => 'face-kiss-wink-heart',
			'face-kiss-wink-heart' => 'face-kiss-wink-heart',
			'landmark-alt' => 'landmark-dome',
			'landmark-dome' => 'landmark-dome',
			'laptop-house' => 'house-laptop',
			'house-laptop' => 'house-laptop',
			'laugh' => 'face-laugh',
			'face-laugh' => 'face-laugh',
			'laugh-beam' => 'face-laugh-beam',
			'face-laugh-beam' => 'face-laugh-beam',
			'laugh-squint' => 'face-laugh-squint',
			'face-laugh-squint' => 'face-laugh-squint',
			'laugh-wink' => 'face-laugh-wink',
			'face-laugh-wink' => 'face-laugh-wink',
			'level-down' => 'arrow-turn-down',
			'arrow-turn-down' => 'arrow-turn-down',
			'level-down-alt' => 'turn-down',
			'turn-down' => 'turn-down',
			'level-up' => 'arrow-turn-up',
			'arrow-turn-up' => 'arrow-turn-up',
			'level-up-alt' => 'turn-up',
			'turn-up' => 'turn-up',
			'list-alt' => 'rectangle-list',
			'rectangle-list' => 'rectangle-list',
			'location' => 'location-crosshairs',
			'location-crosshairs' => 'location-crosshairs',
			'location-circle' => 'circle-location-arrow',
			'circle-location-arrow' => 'circle-location-arrow',
			'location-slash' => 'location-crosshairs-slash',
			'location-crosshairs-slash' => 'location-crosshairs-slash',
			'lock-alt' => 'lock-keyhole',
			'lock-keyhole' => 'lock-keyhole',
			'lock-open-alt' => 'lock-keyhole-open',
			'lock-keyhole-open' => 'lock-keyhole-open',
			'long-arrow-alt-down' => 'down-long',
			'down-long' => 'down-long',
			'long-arrow-alt-left' => 'left-long',
			'left-long' => 'left-long',
			'long-arrow-alt-right' => 'right-long',
			'right-long' => 'right-long',
			'long-arrow-alt-up' => 'up-long',
			'up-long' => 'up-long',
			'long-arrow-down' => 'arrow-down-long',
			'arrow-down-long' => 'arrow-down-long',
			'long-arrow-left' => 'arrow-left-long',
			'arrow-left-long' => 'arrow-left-long',
			'long-arrow-right' => 'arrow-right-long',
			'arrow-right-long' => 'arrow-right-long',
			'long-arrow-up' => 'arrow-up-long',
			'arrow-up-long' => 'arrow-up-long',
			'low-vision' => 'eye-low-vision',
			'eye-low-vision' => 'eye-low-vision',
			'luchador' => 'luchador-mask',
			'luchador-mask' => 'luchador-mask',
			'luggage-cart' => 'cart-flatbed-suitcase',
			'cart-flatbed-suitcase' => 'cart-flatbed-suitcase',
			'magic' => 'wand-magic',
			'wand-magic' => 'wand-magic',
			'mail-bulk' => 'envelopes-bulk',
			'envelopes-bulk' => 'envelopes-bulk',
			'male' => 'person',
			'person' => 'person',
			'map-marked' => 'map-location',
			'map-location' => 'map-location',
			'map-marked-alt' => 'map-location-dot',
			'map-location-dot' => 'map-location-dot',
			'map-marker' => 'location-pin',
			'location-pin' => 'location-pin',
			'map-marker-alt' => 'location-dot',
			'location-dot' => 'location-dot',
			'map-marker-alt-slash' => 'location-dot-slash',
			'location-dot-slash' => 'location-dot-slash',
			'map-marker-check' => 'location-check',
			'location-check' => 'location-check',
			'map-marker-edit' => 'location-pen',
			'location-pen' => 'location-pen',
			'map-marker-exclamation' => 'location-exclamation',
			'location-exclamation' => 'location-exclamation',
			'map-marker-minus' => 'location-minus',
			'location-minus' => 'location-minus',
			'map-marker-plus' => 'location-plus',
			'location-plus' => 'location-plus',
			'map-marker-question' => 'location-question',
			'location-question' => 'location-question',
			'map-marker-slash' => 'location-pin-slash',
			'location-pin-slash' => 'location-pin-slash',
			'map-marker-smile' => 'location-smile',
			'location-smile' => 'location-smile',
			'map-marker-times' => 'location-xmark',
			'location-xmark' => 'location-xmark',
			'map-signs' => 'signs-post',
			'signs-post' => 'signs-post',
			'mars-stroke-h' => 'mars-stroke-right',
			'mars-stroke-right' => 'mars-stroke-right',
			'mars-stroke-v' => 'mars-stroke-up',
			'mars-stroke-up' => 'mars-stroke-up',
			'medium-m' => 'medium',
			'medium' => 'medium',
			'medkit' => 'suitcase-medical',
			'suitcase-medical' => 'suitcase-medical',
			'meh' => 'face-meh',
			'face-meh' => 'face-meh',
			'meh-blank' => 'face-meh-blank',
			'face-meh-blank' => 'face-meh-blank',
			'meh-rolling-eyes' => 'face-rolling-eyes',
			'face-rolling-eyes' => 'face-rolling-eyes',
			'microphone-alt' => 'microphone-lines',
			'microphone-lines' => 'microphone-lines',
			'microphone-alt-slash' => 'microphone-lines-slash',
			'microphone-lines-slash' => 'microphone-lines-slash',
			'mind-share' => 'brain-arrow-curved-right',
			'brain-arrow-curved-right' => 'brain-arrow-curved-right',
			'minus-circle' => 'circle-minus',
			'circle-minus' => 'circle-minus',
			'minus-hexagon' => 'hexagon-minus',
			'hexagon-minus' => 'hexagon-minus',
			'minus-octagon' => 'octagon-minus',
			'octagon-minus' => 'octagon-minus',
			'minus-square' => 'square-minus',
			'square-minus' => 'square-minus',
			'mobile-alt' => 'mobile-screen-button',
			'mobile-screen-button' => 'mobile-screen-button',
			'mobile-android' => 'mobile',
			'mobile' => 'mobile',
			'mobile-android-alt' => 'mobile-screen',
			'mobile-screen' => 'mobile-screen',
			'money-bill-alt' => 'money-bill-1',
			'money-bill-1' => 'money-bill-1',
			'money-bill-wave-alt' => 'money-bill-1-wave',
			'money-bill-1-wave' => 'money-bill-1-wave',
			'money-check-alt' => 'money-check-dollar',
			'money-check-dollar' => 'money-check-dollar',
			'money-check-edit' => 'money-check-pen',
			'money-check-pen' => 'money-check-pen',
			'money-check-edit-alt' => 'money-check-dollar-pen',
			'money-check-dollar-pen' => 'money-check-dollar-pen',
			'monitor-heart-rate' => 'monitor-waveform',
			'monitor-waveform' => 'monitor-waveform',
			'mouse' => 'computer-mouse',
			'computer-mouse' => 'computer-mouse',
			'mouse-alt' => 'computer-mouse-scrollwheel',
			'computer-mouse-scrollwheel' => 'computer-mouse-scrollwheel',
			'mouse-pointer' => 'arrow-pointer',
			'arrow-pointer' => 'arrow-pointer',
			'music-alt' => 'music-note',
			'music-note' => 'music-note',
			'music-alt-slash' => 'music-note-slash',
			'music-note-slash' => 'music-note-slash',
			'oil-temp' => 'oil-temperature',
			'oil-temperature' => 'oil-temperature',
			'page-break' => 'file-dashed-line',
			'file-dashed-line' => 'file-dashed-line',
			'paint-brush-alt' => 'paint-brush-fine',
			'paint-brush-fine' => 'paint-brush-fine',
			'pallet-alt' => 'pallet-boxes',
			'pallet-boxes' => 'pallet-boxes',
			'paragraph-rtl' => 'paragraph-left',
			'paragraph-left' => 'paragraph-left',
			'parking' => 'square-parking',
			'square-parking' => 'square-parking',
			'parking-circle' => 'circle-parking',
			'circle-parking' => 'circle-parking',
			'parking-circle-slash' => 'ban-parking',
			'ban-parking' => 'ban-parking',
			'parking-slash' => 'square-parking-slash',
			'square-parking-slash' => 'square-parking-slash',
			'pastafarianism' => 'spaghetti-monster-flying',
			'spaghetti-monster-flying' => 'spaghetti-monster-flying',
			'pause-circle' => 'circle-pause',
			'circle-pause' => 'circle-pause',
			'paw-alt' => 'paw-simple',
			'paw-simple' => 'paw-simple',
			'pen-alt' => 'pen-clip',
			'pen-clip' => 'pen-clip',
			'pen-square' => 'square-pen',
			'square-pen' => 'square-pen',
			'pencil-alt' => 'pencil',
			'pencil' => 'pencil',
			'pencil-paintbrush' => 'pen-paintbrush',
			'pen-paintbrush' => 'pen-paintbrush',
			'pencil-ruler' => 'pen-ruler',
			'pen-ruler' => 'pen-ruler',
			'pennant' => 'flag-pennant',
			'flag-pennant' => 'flag-pennant',
			'people-arrows' => 'people-arrows-left-right',
			'people-arrows-left-right' => 'people-arrows-left-right',
			'people-carry' => 'people-carry-box',
			'people-carry-box' => 'people-carry-box',
			'percentage' => 'percent',
			'percent' => 'percent',
			'person-carry' => 'person-carry-box',
			'person-carry-box' => 'person-carry-box',
			'phone-alt' => 'phone-flip',
			'phone-flip' => 'phone-flip',
			'phone-laptop' => 'laptop-mobile',
			'laptop-mobile' => 'laptop-mobile',
			'phone-square' => 'square-phone',
			'square-phone' => 'square-phone',
			'phone-square-alt' => 'square-phone-flip',
			'square-phone-flip' => 'square-phone-flip',
			'photo-video' => 'photo-film',
			'photo-film' => 'photo-film',
			'plane-alt' => 'plane-engines',
			'plane-engines' => 'plane-engines',
			'play-circle' => 'circle-play',
			'circle-play' => 'circle-play',
			'plus-circle' => 'circle-plus',
			'circle-plus' => 'circle-plus',
			'plus-hexagon' => 'hexagon-plus',
			'hexagon-plus' => 'hexagon-plus',
			'plus-octagon' => 'octagon-plus',
			'octagon-plus' => 'octagon-plus',
			'plus-square' => 'square-plus',
			'square-plus' => 'square-plus',
			'poll' => 'square-poll-vertical',
			'square-poll-vertical' => 'square-poll-vertical',
			'poll-h' => 'square-poll-horizontal',
			'square-poll-horizontal' => 'square-poll-horizontal',
			'portal-enter' => 'person-to-portal',
			'person-to-portal' => 'person-to-portal',
			'portal-exit' => 'person-from-portal',
			'person-from-portal' => 'person-from-portal',
			'portrait' => 'image-portrait',
			'image-portrait' => 'image-portrait',
			'pound-sign' => 'sterling-sign',
			'sterling-sign' => 'sterling-sign',
			'pray' => 'person-praying',
			'person-praying' => 'person-praying',
			'praying-hands' => 'hands-praying',
			'hands-praying' => 'hands-praying',
			'prescription-bottle-alt' => 'prescription-bottle-medical',
			'prescription-bottle-medical' => 'prescription-bottle-medical',
			'presentation' => 'presentation-screen',
			'presentation-screen' => 'presentation-screen',
			'print-search' => 'print-magnifying-glass',
			'print-magnifying-glass' => 'print-magnifying-glass',
			'procedures' => 'bed-pulse',
			'bed-pulse' => 'bed-pulse',
			'project-diagram' => 'diagram-project',
			'diagram-project' => 'diagram-project',
			'question-circle' => 'circle-question',
			'circle-question' => 'circle-question',
			'question-square' => 'square-question',
			'square-question' => 'square-question',
			'quran' => 'book-quran',
			'book-quran' => 'book-quran',
			'rabbit-fast' => 'rabbit-running',
			'rabbit-running' => 'rabbit-running',
			'radiation-alt' => 'circle-radiation',
			'circle-radiation' => 'circle-radiation',
			'radio-alt' => 'radio-tuner',
			'radio-tuner' => 'radio-tuner',
			'random' => 'shuffle',
			'shuffle' => 'shuffle',
			'rectangle-landscape' => 'rectangle',
			'rectangle' => 'rectangle',
			'rectangle-portrait' => 'rectangle-vertical',
			'rectangle-vertical' => 'rectangle-vertical',
			'redo' => 'arrow-rotate-right',
			'arrow-rotate-right' => 'arrow-rotate-right',
			'redo-alt' => 'rotate-right',
			'rotate-right' => 'rotate-right',
			'remove-format' => 'text-slash',
			'text-slash' => 'text-slash',
			'repeat-1-alt' => 'arrows-repeat-1',
			'arrows-repeat-1' => 'arrows-repeat-1',
			'repeat-alt' => 'arrows-repeat',
			'arrows-repeat' => 'arrows-repeat',
			'retweet-alt' => 'arrows-retweet',
			'arrows-retweet' => 'arrows-retweet',
			'rss-square' => 'square-rss',
			'square-rss' => 'square-rss',
			'running' => 'person-running',
			'person-running' => 'person-running',
			'sad-cry' => 'face-sad-cry',
			'face-sad-cry' => 'face-sad-cry',
			'sad-tear' => 'face-sad-tear',
			'face-sad-tear' => 'face-sad-tear',
			'save' => 'floppy-disk',
			'floppy-disk' => 'floppy-disk',
			'sax-hot' => 'saxophone-fire',
			'saxophone-fire' => 'saxophone-fire',
			'scalpel-path' => 'scalpel-line-dashed',
			'scalpel-line-dashed' => 'scalpel-line-dashed',
			'scanner-image' => 'scanner',
			'scanner' => 'scanner',
			'search' => 'magnifying-glass',
			'magnifying-glass' => 'magnifying-glass',
			'search-dollar' => 'magnifying-glass-dollar',
			'magnifying-glass-dollar' => 'magnifying-glass-dollar',
			'search-location' => 'magnifying-glass-location',
			'magnifying-glass-location' => 'magnifying-glass-location',
			'search-minus' => 'magnifying-glass-minus',
			'magnifying-glass-minus' => 'magnifying-glass-minus',
			'search-plus' => 'magnifying-glass-plus',
			'magnifying-glass-plus' => 'magnifying-glass-plus',
			'sensor-alert' => 'sensor-triangle-exclamation',
			'sensor-triangle-exclamation' => 'sensor-triangle-exclamation',
			'sensor-smoke' => 'sensor-cloud',
			'sensor-cloud' => 'sensor-cloud',
			'share-alt' => 'share-nodes',
			'share-nodes' => 'share-nodes',
			'share-alt-square' => 'square-share-nodes',
			'square-share-nodes' => 'square-share-nodes',
			'share-square' => 'share-from-square',
			'share-from-square' => 'share-from-square',
			'shield-alt' => 'shield-blank',
			'shield-blank' => 'shield-blank',
			'shipping-fast' => 'truck-fast',
			'truck-fast' => 'truck-fast',
			'shipping-timed' => 'truck-clock',
			'truck-clock' => 'truck-clock',
			'shopping-bag' => 'bag-shopping',
			'bag-shopping' => 'bag-shopping',
			'shopping-basket' => 'basket-shopping',
			'basket-shopping' => 'basket-shopping',
			'shopping-cart' => 'cart-shopping',
			'cart-shopping' => 'cart-shopping',
			'shuttle-van' => 'van-shuttle',
			'van-shuttle' => 'van-shuttle',
			'sign' => 'sign-hanging',
			'sign-hanging' => 'sign-hanging',
			'sign-in' => 'arrow-right-to-bracket',
			'arrow-right-to-bracket' => 'arrow-right-to-bracket',
			'sign-in-alt' => 'right-to-bracket',
			'right-to-bracket' => 'right-to-bracket',
			'sign-language' => 'hands',
			'hands' => 'hands',
			'sign-out' => 'arrow-right-from-bracket',
			'arrow-right-from-bracket' => 'arrow-right-from-bracket',
			'sign-out-alt' => 'right-from-bracket',
			'right-from-bracket' => 'right-from-bracket',
			'signal-1' => 'signal-weak',
			'signal-weak' => 'signal-weak',
			'signal-2' => 'signal-fair',
			'signal-fair' => 'signal-fair',
			'signal-3' => 'signal-good',
			'signal-good' => 'signal-good',
			'signal-4' => 'signal-strong',
			'signal-strong' => 'signal-strong',
			'signal-alt' => 'signal-bars',
			'signal-bars' => 'signal-bars',
			'signal-alt-1' => 'signal-bars-weak',
			'signal-bars-weak' => 'signal-bars-weak',
			'signal-alt-2' => 'signal-bars-fair',
			'signal-bars-fair' => 'signal-bars-fair',
			'signal-alt-3' => 'signal-bars-good',
			'signal-bars-good' => 'signal-bars-good',
			'signal-alt-slash' => 'signal-bars-slash',
			'signal-bars-slash' => 'signal-bars-slash',
			'skating' => 'person-skating',
			'person-skating' => 'person-skating',
			'ski-jump' => 'person-ski-jumping',
			'person-ski-jumping' => 'person-ski-jumping',
			'ski-lift' => 'person-ski-lift',
			'person-ski-lift' => 'person-ski-lift',
			'skiing' => 'person-skiing',
			'person-skiing' => 'person-skiing',
			'skiing-nordic' => 'person-skiing-nordic',
			'person-skiing-nordic' => 'person-skiing-nordic',
			'slack-hash' => 'slack',
			'slack' => 'slack',
			'sledding' => 'person-sledding',
			'person-sledding' => 'person-sledding',
			'sliders-h' => 'sliders',
			'sliders' => 'sliders',
			'sliders-h-square' => 'square-sliders',
			'square-sliders' => 'square-sliders',
			'sliders-v' => 'sliders-up',
			'sliders-up' => 'sliders-up',
			'sliders-v-square' => 'square-sliders-vertical',
			'square-sliders-vertical' => 'square-sliders-vertical',
			'smile' => 'face-smile',
			'face-smile' => 'face-smile',
			'smile-beam' => 'face-smile-beam',
			'face-smile-beam' => 'face-smile-beam',
			'smile-plus' => 'face-smile-plus',
			'face-smile-plus' => 'face-smile-plus',
			'smile-wink' => 'face-smile-wink',
			'face-smile-wink' => 'face-smile-wink',
			'smoking-ban' => 'ban-smoking',
			'ban-smoking' => 'ban-smoking',
			'sms' => 'comment-sms',
			'comment-sms' => 'comment-sms',
			'snapchat-ghost' => 'snapchat',
			'snapchat' => 'snapchat',
			'snowboarding' => 'person-snowboarding',
			'person-snowboarding' => 'person-snowboarding',
			'snowmobile' => 'person-snowmobiling',
			'person-snowmobiling' => 'person-snowmobiling',
			'sort-alpha-down' => 'arrow-down-a-z',
			'arrow-down-a-z' => 'arrow-down-a-z',
			'sort-alpha-down-alt' => 'arrow-down-z-a',
			'arrow-down-z-a' => 'arrow-down-z-a',
			'sort-alpha-up' => 'arrow-up-a-z',
			'arrow-up-a-z' => 'arrow-up-a-z',
			'sort-alpha-up-alt' => 'arrow-up-z-a',
			'arrow-up-z-a' => 'arrow-up-z-a',
			'sort-alt' => 'arrow-down-arrow-up',
			'arrow-down-arrow-up' => 'arrow-down-arrow-up',
			'sort-amount-down' => 'arrow-down-wide-short',
			'arrow-down-wide-short' => 'arrow-down-wide-short',
			'sort-amount-down-alt' => 'arrow-down-short-wide',
			'arrow-down-short-wide' => 'arrow-down-short-wide',
			'sort-amount-up' => 'arrow-up-wide-short',
			'arrow-up-wide-short' => 'arrow-up-wide-short',
			'sort-amount-up-alt' => 'arrow-up-short-wide',
			'arrow-up-short-wide' => 'arrow-up-short-wide',
			'sort-circle' => 'circle-sort',
			'circle-sort' => 'circle-sort',
			'sort-circle-down' => 'circle-sort-down',
			'circle-sort-down' => 'circle-sort-down',
			'sort-circle-up' => 'circle-sort-up',
			'circle-sort-up' => 'circle-sort-up',
			'sort-numeric-down' => 'arrow-down-1-9',
			'arrow-down-1-9' => 'arrow-down-1-9',
			'sort-numeric-down-alt' => 'arrow-down-9-1',
			'arrow-down-9-1' => 'arrow-down-9-1',
			'sort-numeric-up' => 'arrow-up-1-9',
			'arrow-up-1-9' => 'arrow-up-1-9',
			'sort-numeric-up-alt' => 'arrow-up-9-1',
			'arrow-up-9-1' => 'arrow-up-9-1',
			'sort-shapes-down' => 'arrow-down-triangle-square',
			'arrow-down-triangle-square' => 'arrow-down-triangle-square',
			'sort-shapes-down-alt' => 'arrow-down-square-triangle',
			'arrow-down-square-triangle' => 'arrow-down-square-triangle',
			'sort-shapes-up' => 'arrow-up-triangle-square',
			'arrow-up-triangle-square' => 'arrow-up-triangle-square',
			'sort-shapes-up-alt' => 'arrow-up-square-triangle',
			'arrow-up-square-triangle' => 'arrow-up-square-triangle',
			'sort-size-down' => 'arrow-down-big-small',
			'arrow-down-big-small' => 'arrow-down-big-small',
			'sort-size-down-alt' => 'arrow-down-small-big',
			'arrow-down-small-big' => 'arrow-down-small-big',
			'sort-size-up' => 'arrow-up-big-small',
			'arrow-up-big-small' => 'arrow-up-big-small',
			'sort-size-up-alt' => 'arrow-up-small-big',
			'arrow-up-small-big' => 'arrow-up-small-big',
			'soup' => 'bowl-hot',
			'bowl-hot' => 'bowl-hot',
			'space-shuttle' => 'shuttle-space',
			'shuttle-space' => 'shuttle-space',
			'space-station-moon-alt' => 'space-station-moon-construction',
			'space-station-moon-construction' => 'space-station-moon-construction',
			'square-root-alt' => 'square-root-variable',
			'square-root-variable' => 'square-root-variable',
			'star-half-alt' => 'star-half-stroke',
			'star-half-stroke' => 'star-half-stroke',
			'starfighter-alt' => 'starfighter-twin-ion-engine',
			'starfighter-twin-ion-engine' => 'starfighter-twin-ion-engine',
			'step-backward' => 'backward-step',
			'backward-step' => 'backward-step',
			'step-forward' => 'forward-step',
			'forward-step' => 'forward-step',
			'sticky-note' => 'note-sticky',
			'note-sticky' => 'note-sticky',
			'stop-circle' => 'circle-stop',
			'circle-stop' => 'circle-stop',
			'store-alt' => 'shop',
			'shop' => 'shop',
			'store-alt-slash' => 'shop-slash',
			'shop-slash' => 'shop-slash',
			'stream' => 'bars-staggered',
			'bars-staggered' => 'bars-staggered',
			'subway' => 'train-subway',
			'train-subway' => 'train-subway',
			'surprise' => 'face-surprise',
			'face-surprise' => 'face-surprise',
			'swimmer' => 'person-swimming',
			'person-swimming' => 'person-swimming',
			'swimming-pool' => 'water-ladder',
			'water-ladder' => 'water-ladder',
			'sync' => 'arrows-rotate',
			'arrows-rotate' => 'arrows-rotate',
			'sync-alt' => 'rotate',
			'rotate' => 'rotate',
			'table-tennis' => 'table-tennis-paddle-ball',
			'table-tennis-paddle-ball' => 'table-tennis-paddle-ball',
			'tablet-alt' => 'tablet-screen-button',
			'tablet-screen-button' => 'tablet-screen-button',
			'tablet-android' => 'tablet',
			'tablet' => 'tablet',
			'tablet-android-alt' => 'tablet-screen',
			'tablet-screen' => 'tablet-screen',
			'tachometer' => 'gauge-simple',
			'gauge-simple' => 'gauge-simple',
			'tachometer-alt' => 'gauge',
			'gauge' => 'gauge',
			'tachometer-alt-average' => 'gauge-med',
			'gauge-med' => 'gauge-med',
			'tachometer-alt-fast' => 'gauge',
			'tachometer-alt-fastest' => 'gauge-max',
			'gauge-max' => 'gauge-max',
			'tachometer-alt-slow' => 'gauge-low',
			'gauge-low' => 'gauge-low',
			'tachometer-alt-slowest' => 'gauge-min',
			'gauge-min' => 'gauge-min',
			'tachometer-average' => 'gauge-simple-med',
			'gauge-simple-med' => 'gauge-simple-med',
			'tachometer-fast' => 'gauge-simple',
			'tachometer-fastest' => 'gauge-simple-max',
			'gauge-simple-max' => 'gauge-simple-max',
			'tachometer-slow' => 'gauge-simple-low',
			'gauge-simple-low' => 'gauge-simple-low',
			'tachometer-slowest' => 'gauge-simple-min',
			'gauge-simple-min' => 'gauge-simple-min',
			'tanakh' => 'book-tanakh',
			'book-tanakh' => 'book-tanakh',
			'tasks' => 'list-check',
			'list-check' => 'list-check',
			'tasks-alt' => 'bars-progress',
			'bars-progress' => 'bars-progress',
			'telegram-plane' => 'telegram',
			'telegram' => 'telegram',
			'temperature-down' => 'temperature-arrow-down',
			'temperature-arrow-down' => 'temperature-arrow-down',
			'temperature-frigid' => 'temperature-snow',
			'temperature-snow' => 'temperature-snow',
			'temperature-hot' => 'temperature-sun',
			'temperature-sun' => 'temperature-sun',
			'temperature-up' => 'temperature-arrow-up',
			'temperature-arrow-up' => 'temperature-arrow-up',
			'tenge' => 'tenge-sign',
			'tenge-sign' => 'tenge-sign',
			'th' => 'table-cells',
			'table-cells' => 'table-cells',
			'th-large' => 'table-cells-large',
			'table-cells-large' => 'table-cells-large',
			'th-list' => 'table-list',
			'table-list' => 'table-list',
			'theater-masks' => 'masks-theater',
			'masks-theater' => 'masks-theater',
			'thermometer-empty' => 'temperature-empty',
			'temperature-empty' => 'temperature-empty',
			'thermometer-full' => 'temperature-full',
			'temperature-full' => 'temperature-full',
			'thermometer-half' => 'temperature-half',
			'temperature-half' => 'temperature-half',
			'thermometer-quarter' => 'temperature-quarter',
			'temperature-quarter' => 'temperature-quarter',
			'thermometer-three-quarters' => 'temperature-three-quarters',
			'temperature-three-quarters' => 'temperature-three-quarters',
			'thunderstorm' => 'cloud-bolt',
			'cloud-bolt' => 'cloud-bolt',
			'thunderstorm-moon' => 'cloud-bolt-moon',
			'cloud-bolt-moon' => 'cloud-bolt-moon',
			'thunderstorm-sun' => 'cloud-bolt-sun',
			'cloud-bolt-sun' => 'cloud-bolt-sun',
			'ticket-alt' => 'ticket-simple',
			'ticket-simple' => 'ticket-simple',
			'times' => 'xmark',
			'xmark' => 'xmark',
			'times-circle' => 'circle-xmark',
			'circle-xmark' => 'circle-xmark',
			'times-hexagon' => 'hexagon-xmark',
			'hexagon-xmark' => 'hexagon-xmark',
			'times-octagon' => 'octagon-xmark',
			'octagon-xmark' => 'octagon-xmark',
			'times-square' => 'square-xmark',
			'square-xmark' => 'square-xmark',
			'tint' => 'droplet',
			'droplet' => 'droplet',
			'tint-slash' => 'droplet-slash',
			'droplet-slash' => 'droplet-slash',
			'tired' => 'face-tired',
			'face-tired' => 'face-tired',
			'toilet-paper-alt' => 'toilet-paper-blank',
			'toilet-paper-blank' => 'toilet-paper-blank',
			'tombstone-alt' => 'tombstone-blank',
			'tombstone-blank' => 'tombstone-blank',
			'tools' => 'screwdriver-wrench',
			'screwdriver-wrench' => 'screwdriver-wrench',
			'torah' => 'scroll-torah',
			'scroll-torah' => 'scroll-torah',
			'tram' => 'train-tram',
			'train-tram' => 'train-tram',
			'transgender-alt' => 'transgender',
			'transgender' => 'transgender',
			'trash-alt' => 'trash-can',
			'trash-can' => 'trash-can',
			'trash-restore' => 'trash-arrow-up',
			'trash-arrow-up' => 'trash-arrow-up',
			'trash-restore-alt' => 'trash-can-arrow-up',
			'trash-can-arrow-up' => 'trash-can-arrow-up',
			'trash-undo-alt' => 'trash-can-undo',
			'trash-can-undo' => 'trash-can-undo',
			'tree-alt' => 'tree-deciduous',
			'tree-deciduous' => 'tree-deciduous',
			'triangle-music' => 'triangle-instrument',
			'triangle-instrument' => 'triangle-instrument',
			'trophy-alt' => 'trophy-star',
			'trophy-star' => 'trophy-star',
			'truck-couch' => 'truck-ramp-couch',
			'truck-ramp-couch' => 'truck-ramp-couch',
			'truck-loading' => 'truck-ramp-box',
			'truck-ramp-box' => 'truck-ramp-box',
			'tshirt' => 'shirt',
			'shirt' => 'shirt',
			'tv-alt' => 'tv',
			'tv' => 'tv',
			'undo' => 'arrow-rotate-left',
			'arrow-rotate-left' => 'arrow-rotate-left',
			'undo-alt' => 'rotate-left',
			'rotate-left' => 'rotate-left',
			'university' => 'building-columns',
			'building-columns' => 'building-columns',
			'unlink' => 'link-slash',
			'link-slash' => 'link-slash',
			'unlock-alt' => 'unlock-keyhole',
			'unlock-keyhole' => 'unlock-keyhole',
			'usd-circle' => 'circle-dollar',
			'circle-dollar' => 'circle-dollar',
			'usd-square' => 'square-dollar',
			'square-dollar' => 'square-dollar',
			'user-alt' => 'user-large',
			'user-large' => 'user-large',
			'user-alt-slash' => 'user-large-slash',
			'user-large-slash' => 'user-large-slash',
			'user-chart' => 'chart-user',
			'chart-user' => 'chart-user',
			'user-circle' => 'circle-user',
			'circle-user' => 'circle-user',
			'user-cog' => 'user-gear',
			'user-gear' => 'user-gear',
			'user-edit' => 'user-pen',
			'user-pen' => 'user-pen',
			'user-friends' => 'user-group',
			'user-group' => 'user-group',
			'user-hard-hat' => 'user-helmet-safety',
			'user-helmet-safety' => 'user-helmet-safety',
			'user-md' => 'user-doctor',
			'user-doctor' => 'user-doctor',
			'user-md-chat' => 'user-doctor-message',
			'user-doctor-message' => 'user-doctor-message',
			'user-times' => 'user-xmark',
			'user-xmark' => 'user-xmark',
			'users-class' => 'screen-users',
			'screen-users' => 'screen-users',
			'users-cog' => 'users-gear',
			'users-gear' => 'users-gear',
			'users-crown' => 'user-group-crown',
			'user-group-crown' => 'user-group-crown',
			'utensil-fork' => 'fork',
			'fork' => 'fork',
			'utensil-knife' => 'knife',
			'knife' => 'knife',
			'utensil-spoon' => 'spoon',
			'spoon' => 'spoon',
			'utensils-alt' => 'fork-knife',
			'fork-knife' => 'fork-knife',
			'vhs' => 'cassette-vhs',
			'cassette-vhs' => 'cassette-vhs',
			'volleyball-ball' => 'volleyball',
			'volleyball' => 'volleyball',
			'volume-down' => 'volume-low',
			'volume-low' => 'volume-low',
			'volume-mute' => 'volume-xmark',
			'volume-xmark' => 'volume-xmark',
			'volume-up' => 'volume-high',
			'volume-high' => 'volume-high',
			'vote-nay' => 'xmark-to-slot',
			'xmark-to-slot' => 'xmark-to-slot',
			'vote-yea' => 'check-to-slot',
			'check-to-slot' => 'check-to-slot',
			'walking' => 'person-walking',
			'person-walking' => 'person-walking',
			'warehouse-alt' => 'warehouse-full',
			'warehouse-full' => 'warehouse-full',
			'washer' => 'washing-machine',
			'washing-machine' => 'washing-machine',
			'water-lower' => 'water-arrow-down',
			'water-arrow-down' => 'water-arrow-down',
			'water-rise' => 'water-arrow-up',
			'water-arrow-up' => 'water-arrow-up',
			'waveform-path' => 'waveform-lines',
			'waveform-lines' => 'waveform-lines',
			'webcam' => 'camera-web',
			'camera-web' => 'camera-web',
			'webcam-slash' => 'camera-web-slash',
			'camera-web-slash' => 'camera-web-slash',
			'weight' => 'weight-scale',
			'weight-scale' => 'weight-scale',
			'wifi-1' => 'wifi-weak',
			'wifi-weak' => 'wifi-weak',
			'wifi-2' => 'wifi-fair',
			'wifi-fair' => 'wifi-fair',
			'window-alt' => 'window-flip',
			'window-flip' => 'window-flip',
			'window-close' => 'rectangle-xmark',
			'rectangle-xmark' => 'rectangle-xmark',
			'wine-glass-alt' => 'wine-glass-empty',
			'wine-glass-empty' => 'wine-glass-empty',
		);

		/**
		 *  Initiator
		 *
		 * @since 0.0.1
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}

			return self::$instance;
		}

		/**
		 * Constructor
		 */
		public function __construct() {

			require UAGB_DIR . 'classes/class-uagb-config.php';
			require UAGB_DIR . 'classes/class-uagb-block-helper.php';
			require UAGB_DIR . 'classes/class-uagb-block-js.php';

			self::$block_list      = UAGB_Config::get_block_attributes();
			self::$file_generation = self::allow_file_generation();
		}

		/**
		 * Parse CSS into correct CSS syntax.
		 *
		 * @param array  $selectors The block selectors.
		 * @param string $id The selector ID.
		 * @since 0.0.1
		 */
		public static function generate_css( $selectors, $id ) {
			$styling_css = '';

			if ( empty( $selectors ) ) {
				return '';
			}

			foreach ( $selectors as $key => $value ) {

				$css = '';

				foreach ( $value as $j => $val ) {

					if ( 'font-family' === $j && 'Default' === $val ) {
						continue;
					}

					if ( ! empty( $val ) || 0 === $val ) {
						if ( 'font-family' === $j ) {
							$css .= $j . ': "' . $val . '";';
						} else {
							$css .= $j . ': ' . $val . ';';
						}
					}
				}

				if ( ! empty( $css ) ) {
					$styling_css     .= $id;
					$styling_css     .= $key . '{';
						$styling_css .= $css . '}';
				}
			}

			return $styling_css;
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
		 * @param string $value  CSS value.
		 * @param string $unit  CSS unit.
		 * @since 1.13.4
		 */
		public static function get_css_value( $value = '', $unit = '' ) {

			if ( '' == $value ) { // phpcs:ignore WordPress.PHP.StrictComparisons.LooseComparison
				return $value;
			}

			$css_val = '';

			if ( isset( $value ) ) {
				$css_val = esc_attr( $value ) . $unit;
			}

			return $css_val;
		}


		/**
		 * Adds Google fonts all blocks.
		 *
		 * @param array $load_google_font the blocks attr.
		 * @param array $font_family the blocks attr.
		 * @param array $font_weight the blocks attr.
		 */
		public static function blocks_google_font( $load_google_font, $font_family, $font_weight ) {

			if ( true === $load_google_font ) {
				if ( ! array_key_exists( $font_family, self::$gfonts ) ) {
					$add_font                     = array(
						'fontfamily'   => $font_family,
						'fontvariants' => ( isset( $font_weight ) && ! empty( $font_weight ) ? array( $font_weight ) : array() ),
					);
					self::$gfonts[ $font_family ] = $add_font;
				} else {
					if ( isset( $font_weight ) && ! empty( $font_weight ) && ! in_array( $font_weight, self::$gfonts[ $font_family ]['fontvariants'], true ) ) {
						array_push( self::$gfonts[ $font_family ]['fontvariants'], $font_weight );
					}
				}
			}
		}

		/**
		 * Get Json Data.
		 *
		 * @since 1.8.1
		 * @return Array
		 */
		public static function backend_load_font_awesome_icons() {

			$json_file = UAGB_DIR . 'blocks-config/uagb-controls/spectra-icons-v6.php';

			if ( ! file_exists( $json_file ) ) {
				return array();
			}

			// Function has already run.
			if ( null !== self::$icon_json ) {
				return self::$icon_json;
			}

			self::$icon_json = include $json_file;

			return self::$icon_json;
		}

		/**
		 * Generate SVG.
		 *
		 * @since 1.8.1
		 * @param  array $icon Decoded fontawesome json file data.
		 */
		public static function render_svg_html( $icon ) {
			$icon = str_replace( 'far', '', $icon );
			$icon = str_replace( 'fas', '', $icon );
			$icon = str_replace( 'fab', '', $icon );
			$icon = str_replace( 'fa-', '', $icon );
			$icon = str_replace( 'fa', '', $icon );
			$icon = sanitize_text_field( esc_attr( $icon ) );

			$json = self::backend_load_font_awesome_icons();
			$path = NULL;
			$view = NULL;

			// Load Polyfiller Array if needed.
			if ( 'disabled' !== UAGB_Admin_Helper::get_admin_settings_option( 'uag_load_font_awesome_5', 'disabled' ) ) {
				$path = isset( $json[self::$font_awesome_5_polyfiller[$icon]]['svg']['brands'] ) ? $json[self::$font_awesome_5_polyfiller[$icon]]['svg']['brands']['path'] : $json[self::$font_awesome_5_polyfiller[$icon]]['svg']['solid']['path'];
				$view = isset( $json[self::$font_awesome_5_polyfiller[$icon]]['svg']['brands'] ) ? $json[self::$font_awesome_5_polyfiller[$icon]]['svg']['brands']['viewBox'] : $json[self::$font_awesome_5_polyfiller[$icon]]['svg']['solid']['viewBox'];
				if ( ! $path ) {
					$path = isset( $json[ $icon ]['svg']['brands'] ) ? $json[ $icon ]['svg']['brands']['path'] : $json[ $icon ]['svg']['solid']['path'];
				}
				if ( ! $view ) {
					$view = isset( $json[ $icon ]['svg']['brands'] ) ? $json[ $icon ]['svg']['brands']['viewBox'] : $json[ $icon ]['svg']['solid']['viewBox'];
				}
			}
			else {
				$path = isset( $json[ $icon ]['svg']['brands'] ) ? $json[ $icon ]['svg']['brands']['path'] : $json[ $icon ]['svg']['solid']['path'];
				$view = isset( $json[ $icon ]['svg']['brands'] ) ? $json[ $icon ]['svg']['brands']['viewBox'] : $json[ $icon ]['svg']['solid']['viewBox'];
			}
			if ( $view ) {
				$view = implode( ' ', $view );
			}
			?>
			<svg xmlns="https://www.w3.org/2000/svg" viewBox= "<?php echo esc_html( $view ); ?>"><path d="<?php echo esc_html( $path ); ?>"></path></svg>
			<?php
		}

		/**
		 *  Check MIME Type
		 *
		 *  @since 1.20.0
		 */
		public static function get_mime_type() {

			$allowed_types = get_allowed_mime_types();

			return ( array_key_exists( 'json', $allowed_types ) ) ? true : false;

		}

		/**
		 * Returns Query.
		 *
		 * @param array  $attributes The block attributes.
		 * @param string $block_type The Block Type.
		 * @since 1.8.2
		 */
		public static function get_query( $attributes, $block_type ) {

			// Block type is grid/masonry/carousel/timeline.
			$query_args = array(
				'offset'              => UAGB_Block_Helper::get_fallback_number( $attributes['postsOffset'], 'postsOffset', $attributes['blockName'] ),
				'posts_per_page'      => UAGB_Block_Helper::get_fallback_number( $attributes['postsToShow'], 'postsToShow', $attributes['blockName'] ),
				'post_status'         => 'publish',
				'post_type'           => ( isset( $attributes['postType'] ) ) ? $attributes['postType'] : 'post',
				'order'               => ( isset( $attributes['order'] ) ) ? $attributes['order'] : 'desc',
				'orderby'             => ( isset( $attributes['orderBy'] ) ) ? $attributes['orderBy'] : 'date',
				'ignore_sticky_posts' => 1,
				'paged'               => 1,
			);

			if ( $attributes['excludeCurrentPost'] ) {
				$query_args['post__not_in'] = array( get_the_ID() );
			}

			if ( isset( $attributes['categories'] ) && '' !== $attributes['categories'] ) {
				$query_args['tax_query'][] = array(
					'taxonomy' => ( isset( $attributes['taxonomyType'] ) ) ? $attributes['taxonomyType'] : 'category',
					'field'    => 'id',
					'terms'    => $attributes['categories'],
					'operator' => 'IN',
				);
			}

			if ( 'grid' === $block_type && isset( $attributes['postPagination'] ) && true === $attributes['postPagination'] ) {

				if ( get_query_var( 'paged' ) ) {

					$paged = get_query_var( 'paged' );

				} elseif ( get_query_var( 'page' ) ) {

					$paged = get_query_var( 'page' );

				} else {

					$paged = 1;

				}
				$query_args['posts_per_page'] = $attributes['postsToShow'];
				$query_args['paged']          = $paged;

			}

			if ( 'masonry' === $block_type && isset( $attributes['paginationType'] ) && 'none' !== $attributes['paginationType'] && isset( $attributes['paged'] ) ) {

				$query_args['paged'] = $attributes['paged'];

			}

			$query_args = apply_filters( "uagb_post_query_args_{$block_type}", $query_args, $attributes );

			return new WP_Query( $query_args );
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
		public static function get_image_sizes() {

			global $_wp_additional_image_sizes;

			$sizes       = get_intermediate_image_sizes();
			$image_sizes = array();

			$image_sizes[] = array(
				'value' => 'full',
				'label' => esc_html__( 'Full', 'ultimate-addons-for-gutenberg' ),
			);

			foreach ( $sizes as $size ) {
				if ( in_array( $size, array( 'thumbnail', 'medium', 'medium_large', 'large' ), true ) ) {
					$image_sizes[] = array(
						'value' => $size,
						'label' => ucwords( trim( str_replace( array( '-', '_' ), array( ' ', ' ' ), $size ) ) ),
					);
				} else {
					$image_sizes[] = array(
						'value' => $size,
						'label' => sprintf(
							'%1$s (%2$sx%3$s)',
							ucwords( trim( str_replace( array( '-', '_' ), array( ' ', ' ' ), $size ) ) ),
							$_wp_additional_image_sizes[ $size ]['width'],
							$_wp_additional_image_sizes[ $size ]['height']
						),
					);
				}
			}

			$image_sizes = apply_filters( 'uagb_post_featured_image_sizes', $image_sizes );

			return $image_sizes;
		}

		/**
		 * Get Post Types.
		 *
		 * @since 1.11.0
		 * @access public
		 */
		public static function get_post_types() {

			$post_types = get_post_types(
				array(
					'public'       => true,
					'show_in_rest' => true,
				),
				'objects'
			);

			$options = array();

			foreach ( $post_types as $post_type ) {
				if ( 'product' === $post_type->name ) {
					continue;
				}

				if ( 'attachment' === $post_type->name ) {
					continue;
				}

				$options[] = array(
					'value' => $post_type->name,
					'label' => $post_type->label,
				);
			}

			return apply_filters( 'uagb_loop_post_types', $options );
		}

		/**
		 * Get all taxonomies.
		 *
		 * @since 1.11.0
		 * @access public
		 */
		public static function get_related_taxonomy() {

			$post_types = self::get_post_types();

			$return_array = array();

			foreach ( $post_types as $key => $value ) {
				$post_type = $value['value'];

				$taxonomies = get_object_taxonomies( $post_type, 'objects' );
				$data       = array();

				foreach ( $taxonomies as $tax_slug => $tax ) {
					if ( ! $tax->public || ! $tax->show_ui || ! $tax->show_in_rest ) {
						continue;
					}

					$data[ $tax_slug ] = $tax;

					$terms = get_terms( $tax_slug );

					$related_tax = array();

					if ( ! empty( $terms ) ) {
						foreach ( $terms as $t_index => $t_obj ) {
							$related_tax[] = array(
								'id'    => $t_obj->term_id,
								'name'  => $t_obj->name,
								'child' => get_term_children( $t_obj->term_id, $tax_slug ),
							);
						}
						$return_array[ $post_type ]['terms'][ $tax_slug ] = $related_tax;
					}
				}

				$return_array[ $post_type ]['taxonomy'] = $data;

			}

			return apply_filters( 'uagb_post_loop_taxonomies', $return_array );
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
		public static function hex2rgba( $color, $opacity = false, $is_array = false ) {

			$default = $color;

			// Return default if no color provided.
			if ( empty( $color ) ) {
				return $default;
			}

			// Sanitize $color if "#" is provided.
			if ( '#' === $color[0] ) {
				$color = substr( $color, 1 );
			}

			// Check if color has 6 or 3 characters and get values.
			if ( strlen( $color ) === 6 ) {
					$hex = array( $color[0] . $color[1], $color[2] . $color[3], $color[4] . $color[5] );
			} elseif ( strlen( $color ) === 3 ) {
					$hex = array( $color[0] . $color[0], $color[1] . $color[1], $color[2] . $color[2] );
			} else {
					return $default;
			}

			// Convert hexadec to rgb.
			$rgb = array_map( 'hexdec', $hex );

			// Check if opacity is set(rgba or rgb).
			if ( false !== $opacity && '' !== $opacity ) {
				if ( abs( $opacity ) >= 1 ) {
					$opacity = $opacity / 100;
				}
				$output = 'rgba(' . implode( ',', $rgb ) . ',' . $opacity . ')';
			} else {
				$output = 'rgb(' . implode( ',', $rgb ) . ')';
			}

			if ( $is_array ) {
				return $rgb;
			} else {
				// Return rgb(a) color string.
				return $output;
			}
		}

		/**
		 * Returns an array of paths for the upload directory
		 * of the current site.
		 *
		 * @since 1.14.0
		 * @return array
		 */
		public static function get_upload_dir() {

			$wp_info = wp_upload_dir( null, false );

			// SSL workaround.
			if ( self::is_ssl() ) {
				$wp_info['baseurl'] = str_ireplace( 'http://', 'https://', $wp_info['baseurl'] );
			}

			// Build the paths.
			$dir_info = array(
				'path' => trailingslashit( trailingslashit( $wp_info['basedir'] ) . UAGB_UPLOAD_DIR_NAME ),
				'url'  => trailingslashit( trailingslashit( $wp_info['baseurl'] ) . UAGB_UPLOAD_DIR_NAME ),
			);

			// Create the upload dir if it doesn't exist.
			if ( ! file_exists( $dir_info['path'] ) ) {

				uagb_install()->create_files();
			}

			return apply_filters( 'uag_get_upload_dir', $dir_info );
		}

		/**
		 * Deletes the upload dir.
		 *
		 * @since 1.18.0
		 * @return array
		 */
		public static function delete_upload_dir() {

			$wp_info = wp_upload_dir( null, false );

			// Build the paths.
			$dir_info = array(
				'path' => trailingslashit( trailingslashit( $wp_info['basedir'] ) . UAGB_UPLOAD_DIR_NAME ),
			);

			// Check the upload dir if it doesn't exist or not.
			if ( file_exists( $dir_info['path'] ) ) {
				// Remove the directory.
				$wp_filesystem = uagb_filesystem();
				return $wp_filesystem->rmdir( $dir_info['path'], true );
			}

			return false;
		}

		/**
		 * Get UAG upload dir path.
		 *
		 * @since 1.23.0
		 * @return string
		 */
		public static function get_uag_upload_dir_path() {

			$wp_info = self::get_upload_dir();

			// Build the paths.
			return $wp_info['path'];
		}

		/**
		 * Get UAG upload url path.
		 *
		 * @since 1.23.0
		 * @return string
		 */
		public static function get_uag_upload_url_path() {

			$wp_info = self::get_upload_dir();

			// Build the paths.
			return $wp_info['url'];
		}

		/**
		 * Delete all files from UAG upload dir.
		 *
		 * @since 1.23.0
		 * @return string
		 */
		public static function delete_uag_asset_dir() {

			// Build the paths.
			$base_path = self::get_uag_upload_dir_path();

			// Get all files.
			$paths = glob( $base_path . 'assets/*' );

			foreach ( $paths as $path ) {

				// Check the dir if it exists or not.
				if ( file_exists( $path ) ) {

					$wp_filesystem = uagb_filesystem();

					// Remove the directory.
					$wp_filesystem->rmdir( $path, true );
				}
			}

			// Create empty files.
			uagb_install()->create_files();
			UAGB_Admin_Helper::create_specific_stylesheet();
			return true;
		}

		/**
		 * Checks to see if the site has SSL enabled or not.
		 *
		 * @since 1.14.0
		 * @return bool
		 */
		public static function is_ssl() {
			if (
				is_ssl() ||
				( 0 === stripos( get_option( 'siteurl' ), 'https://' ) ) ||
				( isset( $_SERVER['HTTP_X_FORWARDED_PROTO'] ) && 'https' === $_SERVER['HTTP_X_FORWARDED_PROTO'] )
			) {
				return true;
			}
			return false;
		}

		/**
		 * Allow File Geranation flag.
		 *
		 * @since  1.14.0
		 */
		public static function allow_file_generation() {
			return get_option( '_uagb_allow_file_generation', 'disabled' );
		}

		/**
		 * Check if UAG upload folder has write permissions or not.
		 *
		 * @since  1.14.9
		 * @return bool true or false.
		 */
		public static function is_uag_dir_has_write_permissions() {

			$upload_dir = self::get_upload_dir();

			return uagb_filesystem()->is_writable( $upload_dir['path'] );
		}
		/**
		 * Gives the paged Query var.
		 *
		 * @param Object $query Query.
		 * @return int $paged Paged Query var.
		 * @since 1.14.9
		 */
		public static function get_paged( $query ) {

			global $paged;

			// Check the 'paged' query var.
			$paged_qv = $query->get( 'paged' );

			if ( is_numeric( $paged_qv ) ) {
				return $paged_qv;
			}

			// Check the 'page' query var.
			$page_qv = $query->get( 'page' );

			if ( is_numeric( $page_qv ) ) {
				return $page_qv;
			}

			// Check the $paged global?
			if ( is_numeric( $paged ) ) {
				return $paged;
			}

			return 0;
		}
		/**
		 * Builds the base url.
		 *
		 * @param string $permalink_structure Premalink Structure.
		 * @param string $base Base.
		 * @since 1.14.9
		 */
		public static function build_base_url( $permalink_structure, $base ) {
			// Check to see if we are using pretty permalinks.
			if ( ! empty( $permalink_structure ) ) {

				if ( strrpos( $base, 'paged-' ) ) {
					$base = substr_replace( $base, '', strrpos( $base, 'paged-' ), strlen( $base ) );
				}

				// Remove query string from base URL since paginate_links() adds it automatically.
				// This should also fix the WPML pagination issue that was added since 1.10.2.
				if ( count( $_GET ) > 0 ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
					$base = strtok( $base, '?' );
				}

				// Add trailing slash when necessary.
				if ( '/' === substr( $permalink_structure, -1 ) ) {
					$base = trailingslashit( $base );
				} else {
					$base = untrailingslashit( $base );
				}
			} else {
				$url_params = wp_parse_url( $base, PHP_URL_QUERY );

				if ( empty( $url_params ) ) {
					$base = trailingslashit( $base );
				}
			}

			return $base;
		}
		/**
		 * Returns the Paged Format.
		 *
		 * @param string $permalink_structure Premalink Structure.
		 * @param string $base Base.
		 * @since 1.14.9
		 */
		public static function paged_format( $permalink_structure, $base ) {

			$page_prefix = empty( $permalink_structure ) ? 'paged' : 'page';

			if ( ! empty( $permalink_structure ) ) {
				$format  = substr( $base, -1 ) !== '/' ? '/' : '';
				$format .= $page_prefix . '/';
				$format .= '%#%';
				$format .= substr( $permalink_structure, -1 ) === '/' ? '/' : '';
			} elseif ( empty( $permalink_structure ) || is_search() ) {
				$parse_url = wp_parse_url( $base, PHP_URL_QUERY );
				$format    = empty( $parse_url ) ? '?' : '&';
				$format   .= $page_prefix . '=%#%';
			}

			return $format;
		}

		/**
		 * Get Typography Dynamic CSS.
		 *
		 * @param  array  $attr The Attribute array.
		 * @param  string $slug The field slug.
		 * @param  string $selector The selector array.
		 * @param  array  $combined_selectors The combined selector array.
		 * @since  1.15.0
		 * @return bool|string
		 */
		public static function get_typography_css( $attr, $slug, $selector, $combined_selectors ) {

			$typo_css_desktop = array();
			$typo_css_tablet  = array();
			$typo_css_mobile  = array();

			$already_selectors_desktop = ( isset( $combined_selectors['desktop'][ $selector ] ) ) ? $combined_selectors['desktop'][ $selector ] : array();
			$already_selectors_tablet  = ( isset( $combined_selectors['tablet'][ $selector ] ) ) ? $combined_selectors['tablet'][ $selector ] : array();
			$already_selectors_mobile  = ( isset( $combined_selectors['mobile'][ $selector ] ) ) ? $combined_selectors['mobile'][ $selector ] : array();

			$family_slug     = ( '' === $slug ) ? 'fontFamily' : $slug . 'FontFamily';
			$weight_slug     = ( '' === $slug ) ? 'fontWeight' : $slug . 'FontWeight';
			$transform_slug  = ( '' === $slug ) ? 'fontTransform' : $slug . 'Transform';
			$decoration_slug = ( '' === $slug ) ? 'fontDecoration' : $slug . 'Decoration';
			$style_slug      = ( '' === $slug ) ? 'fontStyle' : $slug . 'FontStyle';

			$l_ht_slug      = ( '' === $slug ) ? 'lineHeight' : $slug . 'LineHeight';
			$f_sz_slug      = ( '' === $slug ) ? 'fontSize' : $slug . 'FontSize';
			$l_ht_type_slug = ( '' === $slug ) ? 'lineHeightType' : $slug . 'LineHeightType';
			$f_sz_type_slug = ( '' === $slug ) ? 'fontSizeType' : $slug . 'FontSizeType';
			$l_sp_slug      = ( '' === $slug ) ? 'letterSpacing' : $slug . 'LetterSpacing';
			$l_sp_type_slug = ( '' === $slug ) ? 'letterSpacingType' : $slug . 'LetterSpacingType';

			$text_transform  = isset( $attr[ $transform_slug ] ) ? $attr[ $transform_slug ] : 'normal';
			$text_decoration = isset( $attr[ $decoration_slug ] ) ? $attr[ $decoration_slug ] : 'none';
			$font_style      = isset( $attr[ $style_slug ] ) ? $attr[ $style_slug ] : 'normal';

			$typo_css_desktop[ $selector ] = array(
				'font-family'     => $attr[ $family_slug ],
				'text-transform'  => $text_transform,
				'text-decoration' => $text_decoration,
				'font-style'      => $font_style,
				'font-weight'     => $attr[ $weight_slug ],
				'font-size'       => ( isset( $attr[ $f_sz_slug ] ) ) ? self::get_css_value( $attr[ $f_sz_slug ], $attr[ $f_sz_type_slug ] ) : '',
				'line-height'     => ( isset( $attr[ $l_ht_slug ] ) ) ? self::get_css_value( $attr[ $l_ht_slug ], $attr[ $l_ht_type_slug ] ) : '',
				'letter-spacing'  => ( isset( $attr[ $l_sp_slug ] ) ) ? self::get_css_value( $attr[ $l_sp_slug ], $attr[ $l_sp_type_slug ] ) : '',
			);

			$typo_css_desktop[ $selector ] = array_merge(
				$typo_css_desktop[ $selector ],
				$already_selectors_desktop
			);

			$typo_css_tablet[ $selector ] = array(
				'font-size'      => ( isset( $attr[ $f_sz_slug . 'Tablet' ] ) ) ? self::get_css_value( $attr[ $f_sz_slug . 'Tablet' ], $attr[ $f_sz_type_slug ] ) : '',
				'line-height'    => ( isset( $attr[ $l_ht_slug . 'Tablet' ] ) ) ? self::get_css_value( $attr[ $l_ht_slug . 'Tablet' ], $attr[ $l_ht_type_slug ] ) : '',
				'letter-spacing' => ( isset( $attr[ $l_sp_slug . 'Tablet' ] ) ) ? self::get_css_value( $attr[ $l_sp_slug . 'Tablet' ], $attr[ $l_sp_type_slug ] ) : '',
			);

			$typo_css_tablet[ $selector ] = array_merge(
				$typo_css_tablet[ $selector ],
				$already_selectors_tablet
			);

			$typo_css_mobile[ $selector ] = array(
				'font-size'      => ( isset( $attr[ $f_sz_slug . 'Mobile' ] ) ) ? self::get_css_value( $attr[ $f_sz_slug . 'Mobile' ], $attr[ $f_sz_type_slug ] ) : '',
				'line-height'    => ( isset( $attr[ $l_ht_slug . 'Mobile' ] ) ) ? self::get_css_value( $attr[ $l_ht_slug . 'Mobile' ], $attr[ $l_ht_type_slug ] ) : '',
				'letter-spacing' => ( isset( $attr[ $l_sp_slug . 'Mobile' ] ) ) ? self::get_css_value( $attr[ $l_sp_slug . 'Mobile' ], $attr[ $l_sp_type_slug ] ) : '',
			);

			$typo_css_mobile[ $selector ] = array_merge(
				$typo_css_mobile[ $selector ],
				$already_selectors_mobile
			);

			return array(
				'desktop' => array_merge(
					$combined_selectors['desktop'],
					$typo_css_desktop
				),
				'tablet'  => array_merge(
					$combined_selectors['tablet'],
					$typo_css_tablet
				),
				'mobile'  => array_merge(
					$combined_selectors['mobile'],
					$typo_css_mobile
				),
			);
		}

		/**
		 * Parse CSS into correct CSS syntax.
		 *
		 * @param array  $combined_selectors The combined selector array.
		 * @param string $id The selector ID.
		 * @since 1.15.0
		 */
		public static function generate_all_css( $combined_selectors, $id ) {

			return array(
				'desktop' => self::generate_css( $combined_selectors['desktop'], $id ),
				'tablet'  => self::generate_css( $combined_selectors['tablet'], $id ),
				'mobile'  => self::generate_css( $combined_selectors['mobile'], $id ),
			);
		}
		/**
		 * Get Post Assets Instance.
		 */
		public function get_post_assets_instance() {
			return uagb_get_front_post_assets();
		}

		/** Generates stylesheet in loop.
		 *
		 * @since 1.7.0
		 * @param object $this_post Post Object.
		 * @deprecated 1.23.0
		 * @access public
		 */
		public function get_generated_stylesheet( $this_post ) {
			_deprecated_function( __METHOD__, '1.23.0' );

			if ( ! is_object( $this_post ) ) {
				return;
			}

			if ( ! isset( $this_post->ID ) ) {
				return;
			}

			if ( has_blocks( $this_post->ID ) && isset( $this_post->post_content ) ) {

				$blocks            = parse_blocks( $this_post->post_content );
				self::$page_blocks = $blocks;

				if ( ! is_array( $blocks ) || empty( $blocks ) ) {
					return;
				}

				$assets = $this->get_assets( $blocks );

				self::$stylesheet .= $assets['css'];
				self::$script     .= $assets['js'];
			}
		}

		/**
		 * Generates stylesheet for reusable blocks.
		 *
		 * @since 1.1.0
		 * @param array $blocks Blocks.
		 * @deprecated 1.23.0
		 * @access public
		 */
		public function get_assets( $blocks ) {
			_deprecated_function( __METHOD__, '1.23.0' );

			$desktop = '';
			$tablet  = '';
			$mobile  = '';

			$tab_styling_css = '';
			$mob_styling_css = '';

			$js = '';

			foreach ( $blocks as $i => $block ) {

				if ( is_array( $block ) ) {

					if ( empty( $block['blockName'] ) ) {
						continue;
					}

					if ( 'core/block' === $block['blockName'] ) {
						$id = ( isset( $block['attrs']['ref'] ) ) ? $block['attrs']['ref'] : 0;

						if ( $id ) {
							$content = get_post_field( 'post_content', $id );

							$reusable_blocks = parse_blocks( $content );

							$assets = $this->get_assets( $reusable_blocks );

							self::$stylesheet .= $assets['css'];
							self::$script     .= $assets['js'];

						}
					} else {

						$block_assets = $this->get_block_css_and_js( $block );
						// Get CSS for the Block.
						$css = $block_assets['css'];

						if ( isset( $css['desktop'] ) ) {
							$desktop .= $css['desktop'];
							$tablet  .= $css['tablet'];
							$mobile  .= $css['mobile'];
						}
						$js .= $block_assets['js'];
					}
				}
			}

			if ( ! empty( $tablet ) ) {
				$tab_styling_css .= '@media only screen and (max-width: ' . UAGB_TABLET_BREAKPOINT . 'px) {';
				$tab_styling_css .= $tablet;
				$tab_styling_css .= '}';
			}

			if ( ! empty( $mobile ) ) {
				$mob_styling_css .= '@media only screen and (max-width: ' . UAGB_MOBILE_BREAKPOINT . 'px) {';
				$mob_styling_css .= $mobile;
				$mob_styling_css .= '}';
			}

			$post_assets_instance = $this->get_post_assets_instance();
			if ( $post_assets_instance ) {

				$post_assets_instance->stylesheet .= $desktop . $tab_styling_css . $mob_styling_css;
				$post_assets_instance->script     .= $js;
			}

			return array(
				'css' => $desktop . $tab_styling_css . $mob_styling_css,
				'js'  => $js,
			);
		}

		/**
		 * Parse Guten Block.
		 *
		 * @since 1.1.0
		 * @param string $content the content string.
		 * @deprecated 1.23.0 Use `parse_blocks()` instead
		 * @access public
		 */
		public function parse( $content ) {
			_deprecated_function( __METHOD__, '1.23.0', 'parse_blocks()' );

			return parse_blocks( $content );
		}
		/**
		 * This is the action where we create dynamic asset files.
		 * CSS Path : uploads/uag-plugin/uag-style-{post_id}-{timestamp}.css
		 * JS Path : uploads/uag-plugin/uag-script-{post_id}-{timestamp}.js
		 *
		 * @since 1.15.0
		 * @deprecated 1.23.0
		 */
		public function generate_asset_files() {
			_deprecated_function( __METHOD__, '1.23.0' );

			global $content_width;
			self::$stylesheet = str_replace( '#CONTENT_WIDTH#', $content_width . 'px', self::$stylesheet );
			if ( '' !== self::$script ) {
				self::$script = 'document.addEventListener("DOMContentLoaded", function(){ ' . self::$script . ' })';
			}

			if ( 'enabled' === self::$file_generation ) {

				$post_assets_instance = $this->get_post_assets_instance();

				if ( $post_assets_instance ) {
					$post_assets_instance->stylesheet .= self::$stylesheet;
					$post_assets_instance->script     .= self::$script;
				}
			}
		}

		/**
		 * Enqueue Gutenberg block assets for both frontend + backend.
		 *
		 * @since 1.13.4
		 * @deprecated 1.23.0
		 */
		public function block_assets() {
			_deprecated_function( __METHOD__, '1.23.0' );

			$this->get_post_assets_instance()->enqueue_blocks_dependency_frontend();

		}
		/**
		 * Print the Script in footer.
		 *
		 * @since 1.15.0
		 * @deprecated 1.23.0
		 */
		public function print_script() {
			_deprecated_function( __METHOD__, '1.23.0' );

			$this->get_post_assets_instance()->print_script();

		}
		/**
		 * Print the Stylesheet in header.
		 *
		 * @since 1.15.0
		 * @deprecated 1.23.0
		 */
		public function print_stylesheet() {
			_deprecated_function( __METHOD__, '1.23.0' );

			$this->get_post_assets_instance()->print_stylesheet();

		}
		/**
		 * Load the front end Google Fonts.
		 *
		 * @since 1.15.0
		 * @deprecated 1.23.0
		 */
		public function frontend_gfonts() {
			_deprecated_function( __METHOD__, '1.23.0' );

			$this->get_post_assets_instance()->print_google_fonts();

		}
		/**
		 * Generates CSS recurrsively.
		 *
		 * @param object $block The block object.
		 * @since 0.0.1
		 * @deprecated 1.23.0
		 */
		public function get_block_css_and_js( $block ) {

			_deprecated_function( __METHOD__, '1.23.0' );

			$block = (array) $block;

			$name     = $block['blockName'];
			$css      = array();
			$js       = '';
			$block_id = '';

			if ( ! isset( $name ) ) {
				return array(
					'css' => array(),
					'js'  => '',
				);
			}

			if ( isset( $block['attrs'] ) && is_array( $block['attrs'] ) ) {
				/**
				 * Filters the block attributes for CSS and JS generation.
				 *
				 * @param array  $block_attributes The block attributes to be filtered.
				 * @param string $name             The block name.
				 */
				$blockattr = apply_filters( 'uagb_block_attributes_for_css_and_js', $block['attrs'], $name );
				if ( isset( $blockattr['block_id'] ) ) {
					$block_id = $blockattr['block_id'];
				}
			}

			self::$current_block_list[] = $name;

			if ( strpos( $name, 'uagb/' ) !== false ) {

				self::$uag_flag = true;
				$_block_slug    = str_replace( 'uagb/', '', $name );
				$_block_css     = UAGB_Block_Module::get_frontend_css( $_block_slug, $blockattr, $block_id );
				$_block_js      = UAGB_Block_Module::get_frontend_js( $_block_slug, $blockattr, $block_id );
				$css            = array_merge( $css, $_block_css );
				if ( ! empty( $_block_js ) ) {
					$js .= $_block_js;
				}

				if ( 'uagb/faq' === $name && ! isset( $blockattr['layout'] ) ) {
					$this->uag_faq_layout = true;
				}
			}

			if ( isset( $block['innerBlocks'] ) ) {
				foreach ( $block['innerBlocks'] as $j => $inner_block ) {
					if ( 'core/block' === $inner_block['blockName'] ) {
						$id = ( isset( $inner_block['attrs']['ref'] ) ) ? $inner_block['attrs']['ref'] : 0;

						if ( $id ) {
							$content = get_post_field( 'post_content', $id );

							$reusable_blocks = $this->parse( $content );

							$assets = $this->get_assets( $reusable_blocks );

							self::$stylesheet .= $assets['css'];
							self::$script     .= $assets['js'];
						}
					} else {
						// Get CSS for the Block.
						$inner_assets    = $this->get_block_css_and_js( $inner_block );
						$inner_block_css = $inner_assets['css'];

						$css_desktop = ( isset( $css['desktop'] ) ? $css['desktop'] : '' );
						$css_tablet  = ( isset( $css['tablet'] ) ? $css['tablet'] : '' );
						$css_mobile  = ( isset( $css['mobile'] ) ? $css['mobile'] : '' );

						if ( isset( $inner_block_css['desktop'] ) ) {
							$css['desktop'] = $css_desktop . $inner_block_css['desktop'];
							$css['tablet']  = $css_tablet . $inner_block_css['tablet'];
							$css['mobile']  = $css_mobile . $inner_block_css['mobile'];
						}

						$js .= $inner_assets['js'];
					}
				}
			}

			self::$current_block_list = array_unique( self::$current_block_list );

			return array(
				'css' => $css,
				'js'  => $js,
			);
		}

		/**
		 * Generates stylesheet and appends in head tag.
		 *
		 * @since 0.0.1
		 * @deprecated 1.23.0
		 */
		public function generate_assets() {
			_deprecated_function( __METHOD__, '1.23.0' );

			$this_post = array();

			if ( class_exists( 'WooCommerce' ) ) {

				if ( is_cart() ) {

					$id        = get_option( 'woocommerce_cart_page_id' );
					$this_post = get_post( $id );

				} elseif ( is_account_page() ) {

					$id        = get_option( 'woocommerce_myaccount_page_id' );
					$this_post = get_post( $id );

				} elseif ( is_checkout() ) {

					$id        = get_option( 'woocommerce_checkout_page_id' );
					$this_post = get_post( $id );

				} elseif ( is_checkout_pay_page() ) {

					$id        = get_option( 'woocommerce_pay_page_id' );
					$this_post = get_post( $id );

				} elseif ( is_shop() ) {

					$id        = get_option( 'woocommerce_shop_page_id' );
					$this_post = get_post( $id );
				}

				if ( is_object( $this_post ) ) {
					$this->get_generated_stylesheet( $this_post );
				}
			}

			if ( is_single() || is_page() || is_404() ) {

				global $post;
				$this_post = $post;

				if ( ! is_object( $this_post ) ) {
					return;
				}

				/**
				 * Filters the post to build stylesheet for.
				 *
				 * @param \WP_Post $this_post The global post.
				 */
				$this_post = apply_filters( 'uagb_post_for_stylesheet', $this_post );

				$this->get_generated_stylesheet( $this_post );

			} elseif ( is_archive() || is_home() || is_search() ) {

				global $wp_query;
				$cached_wp_query = $wp_query;

				foreach ( $cached_wp_query as $post ) { // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
					$this->get_generated_stylesheet( $post );
				}
			}
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
		public static function uagb_get_excerpt( $post_id, $content, $length_fallback ) {

			// If there's an excerpt provided from meta, use it.
			$excerpt = get_post_field( 'post_excerpt', $post_id );

			if ( empty( $excerpt ) ) { // If no excerpt provided from meta.
				$max_excerpt = 100;
				// If the content present on post, then trim it and use that.
				if ( ! empty( $content ) ) {
					$excerpt = apply_filters( 'the_excerpt', wp_trim_words( $content, $max_excerpt ) );
				}
			}
			// Trim the excerpt.
			if ( ! empty( $excerpt ) ) {
				$excerpt = explode( ' ', $excerpt );
				if ( count( $excerpt ) > $length_fallback ) {
					$excerpt = implode( ' ', array_slice( $excerpt, 0, $length_fallback ) ) . '...';
				} else {
					$excerpt = implode( ' ', $excerpt );
				}
			}

			return empty( $excerpt ) ? '' : $excerpt;
		}
	}

	/**
	 *  Prepare if class 'UAGB_Helper' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	UAGB_Helper::get_instance();
}
