<?php
/**
 * Plugin Name:       OneOps Landing Page
 * Plugin URI:        https://oneops.pro
 * Description:       Renders the OneOps enterprise AI operations landing page via the [oneops_landing] shortcode.
 * Version:           1.0.0
 * Author:            OneData Technologies
 * License:           GPL-2.0-or-later
 * Text Domain:       oneops-landing
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Prevent direct access.
}

define( 'ONEOPS_PLUGIN_URL',  plugin_dir_url( __FILE__ ) );
define( 'ONEOPS_PLUGIN_PATH', plugin_dir_path( __FILE__ ) );

/* ─────────────────────────────────────────────
   1. Enqueue assets only when shortcode is used
───────────────────────────────────────────── */
add_action( 'wp_enqueue_scripts', 'oneops_register_assets' );
function oneops_register_assets() {
    // Register (but don't enqueue yet — shortcode will enqueue on demand)
    wp_register_style(
        'oneops-fonts',
        'https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800&family=Outfit:wght@300;400;500;600&display=swap',
        [],
        null
    );

    wp_register_style(
        'oneops-landing',
        ONEOPS_PLUGIN_URL . 'assets/oneops-landing.css',
        [ 'oneops-fonts' ],
        '1.0.0'
    );

    wp_register_script(
        'oneops-landing',
        ONEOPS_PLUGIN_URL . 'assets/oneops-landing.js',
        [],
        '1.0.0',
        true  // load in footer
    );
}

/* ─────────────────────────────────────────────
   2. Shortcode: [oneops_landing]
   Optional attributes:
     chatbot="true|false"   – show/hide the chatbot widget (default: false)
     chatbot_url=""         – URL of the chatbot widget script
     bot_id=""              – data-bot-id value
     api_key=""             – data-api-key value
───────────────────────────────────────────── */add_shortcode( 'oneops_landing', 'oneops_landing_shortcode' );
function oneops_landing_shortcode( $atts ) {

    $atts = shortcode_atts(
        [
            'chatbot'     => 'false',
            'chatbot_url' => 'http://localhost:9200/widget/chatbot-widget.js',
            'bot_id'      => '18fd2bfa-f21a-4fe2-927d-12264dc9694f',
            'api_key'     => 'pGea-weU',
            'bot_name'    => 'My Bot',
            'greeting'    => 'Hi! How can I help you today?',
        ],
        $atts,
        'oneops_landing'
    );

    // Enqueue assets now that we know the shortcode is on this page
    wp_enqueue_style( 'oneops-landing' );
    wp_enqueue_script( 'oneops-landing' );

    // Optionally inject the chatbot widget script
    $chatbot_html = '';
    if ( filter_var( $atts['chatbot'], FILTER_VALIDATE_BOOLEAN ) ) {
        $chatbot_html = sprintf(
            '<script src="%s" data-bot-id="%s" data-api-key="%s" data-bot-name="%s" data-greeting="%s"></script>',
            esc_url( $atts['chatbot_url'] ),
            esc_attr( $atts['bot_id'] ),
            esc_attr( $atts['api_key'] ),
            esc_attr( $atts['bot_name'] ),
            esc_attr( $atts['greeting'] )
        );
    }

    // Capture the template output
    ob_start();
    include ONEOPS_PLUGIN_PATH . 'templates/landing-page.php';
    $output = ob_get_clean();

    return $chatbot_html . $output;
}

/* ─────────────────────────────────────────────
   3. (No admin bar suppression needed — the
      shortcode renders inside the page body,
      not as a full-page override.)
───────────────────────────────────────────── */
