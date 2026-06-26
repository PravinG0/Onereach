<?php
/**
 * Plugin Name:       OneReach Landing Page
 * Plugin URI:        https://onereach.ai
 * Description:       Renders the OneReach AI sales automation landing page via the [onereach_landing] shortcode.
 * Version:           1.0.1
 * Author:            OneData Technologies
 * License:           GPL-2.0-or-later
 * Text Domain:       onereach-landing
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

define( 'ONEREACH_PLUGIN_URL',  plugin_dir_url( __FILE__ ) );
define( 'ONEREACH_PLUGIN_PATH', plugin_dir_path( __FILE__ ) );

/* ─────────────────────────────────────────────
   1. Register assets (always — on every page load)
      Registration is cheap; actual output only
      happens when we call wp_enqueue_*.
───────────────────────────────────────────── */
add_action( 'wp_enqueue_scripts', 'onereach_register_assets', 5 );
function onereach_register_assets() {
    wp_register_style(
        'onereach-fonts',
        'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap',
        [],
        null
    );

    wp_register_style(
        'onereach-landing',
        ONEREACH_PLUGIN_URL . 'assets/onereach-landing.css',
        [ 'onereach-fonts' ],
        '1.0.1'
    );

    wp_register_script(
        'onereach-landing',
        ONEREACH_PLUGIN_URL . 'assets/onereach-landing.js',
        [],
        '1.0.1',
        true  // footer
    );
}

/* ─────────────────────────────────────────────
   2. Early enqueue: runs on the `wp` action,
      BEFORE wp_head() fires, so the stylesheet
      is always in <head> with no FOUC.
      We check whether the shortcode exists in
      the current post/page content.
───────────────────────────────────────────── */
add_action( 'wp', 'onereach_enqueue_if_shortcode_present' );
function onereach_enqueue_if_shortcode_present() {
    global $post;

    $should_enqueue = false;

    // Check the main post content
    if ( is_a( $post, 'WP_Post' ) && (
        has_shortcode( $post->post_content, 'onereach_landing' ) ||
        has_shortcode( $post->post_content, 'onereach_pricing' )
    ) ) {
        $should_enqueue = true;
    }

    // Also check Elementor data stored as post meta (covers Elementor widget containers)
    if ( ! $should_enqueue && is_a( $post, 'WP_Post' ) ) {
        $elementor_data = get_post_meta( $post->ID, '_elementor_data', true );
        if ( $elementor_data && (
            strpos( $elementor_data, 'onereach_landing' ) !== false ||
            strpos( $elementor_data, 'onereach_pricing' ) !== false
        ) ) {
            $should_enqueue = true;
        }
    }

    if ( $should_enqueue ) {
        wp_enqueue_style( 'onereach-landing' );
        wp_enqueue_script( 'onereach-landing' );
    }
}

/* ─────────────────────────────────────────────
   3. Shortcode: [onereach_landing]

   We still call wp_enqueue_* here as a safety
   net for builders that process shortcodes at
   an unusual time (e.g. REST API previews).
   wp_enqueue_* is idempotent — calling it twice
   has no effect.

   Optional attributes:
     register_url=""   – URL for "Get Started" buttons (default: /register)
     login_url=""      – URL for "Sign In" links (default: /login)
     contact_email=""  – Email for Enterprise contact (default: raja@onedatasoftware.com)
───────────────────────────────────────────── */
add_shortcode( 'onereach_landing', 'onereach_landing_shortcode' );
function onereach_landing_shortcode( $atts ) {

    $atts = shortcode_atts(
        [
            'register_url'  => '/register',
            'login_url'     => '/login',
            'contact_email' => 'raja@onedatasoftware.com',
        ],
        $atts,
        'onereach_landing'
    );

    // Enqueue again as a safety net — no-op if already enqueued
    wp_enqueue_style( 'onereach-landing' );
    wp_enqueue_script( 'onereach-landing' );

    ob_start();
    include ONEREACH_PLUGIN_PATH . 'templates/landing-page.php';
    return ob_get_clean();
}

/* ─────────────────────────────────────────────
   4. Shortcode: [onereach_pricing]
   Full pricing page: Plans · Credits · Top-Ups ·
   Comparison table · FAQ · CTA

   Same optional attributes as [onereach_landing]:
     register_url=""
     login_url=""
     contact_email=""
───────────────────────────────────────────── */
add_shortcode( 'onereach_pricing', 'onereach_pricing_shortcode' );
function onereach_pricing_shortcode( $atts ) {

    $atts = shortcode_atts(
        [
            'register_url'  => '/register',
            'login_url'     => '/login',
            'contact_email' => 'raja@onedatasoftware.com',
        ],
        $atts,
        'onereach_pricing'
    );

    // Enqueue — no-op if already done by the early-enqueue hook
    wp_enqueue_style( 'onereach-landing' );
    wp_enqueue_script( 'onereach-landing' );

    ob_start();
    include ONEREACH_PLUGIN_PATH . 'templates/pricing-page.php';
    return ob_get_clean();
}
