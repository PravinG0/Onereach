=== OneOps Landing Page ===
Contributors: onedata
Tags: landing page, shortcode, AI, enterprise
Requires at least: 5.8
Tested up to: 6.5
Stable tag: 1.0.0
License: GPL-2.0-or-later

Renders the OneOps enterprise AI operations landing page via a shortcode.

== Installation ==

1. Copy the entire `oneops-landing` folder into your WordPress site at:
   wp-content/plugins/oneops-landing/

2. In WordPress admin go to Plugins → Installed Plugins and activate
   "OneOps Landing Page".

3. Create a new Page (Pages → Add New).
   - Give it any title, e.g. "Home" or "Landing"
   - In the content area add just this shortcode:
     [oneops_landing]
   - Publish the page.

4. (Recommended) Set that page as your front page:
   Settings → Reading → "A static page" → Front page: select your new page.

5. (Recommended) Use a blank/canvas page template so the WordPress theme
   header and footer don't appear alongside the landing page. Most themes
   offer a "Full Width" or "Blank Canvas" template — select it in the
   Page Attributes panel on the right.

== Shortcode Options ==

  [oneops_landing]
    — renders the full landing page (chatbot widget OFF by default)

  [oneops_landing chatbot="true"]
    — enables the chatbot widget using the default localhost URL.
      Change the URL and credentials for production:

  [oneops_landing
    chatbot="true"
    chatbot_url="https://your-domain.com/widget/chatbot-widget.js"
    bot_id="your-bot-id"
    api_key="your-api-key"
    bot_name="Support Bot"
    greeting="Hi! How can I help?"
  ]

== Frequently Asked Questions ==

= The page still shows my theme's header/footer =
Select a "Full Width" or "Blank Canvas" page template in the Page Attributes
panel, or use a plugin like "Full Screen Page" to hide the theme chrome.

= The fixed nav overlaps my WordPress admin bar =
The plugin automatically hides the admin bar on pages that use the shortcode
when you are logged in as an admin.

= How do I update the content? =
Edit `templates/landing-page.php` directly. All HTML is plain PHP — no
build step required.

== Changelog ==

= 1.0.0 =
* Initial release.
