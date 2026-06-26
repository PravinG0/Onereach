=== OneReach Landing Page ===
Contributors: onedata
Tags: landing page, shortcode, AI, sales automation
Requires at least: 5.8
Tested up to: 6.5
Stable tag: 1.0.0
License: GPL-2.0-or-later

Renders the OneReach AI sales automation landing page via a shortcode.

== Installation ==

1. Copy the entire `onereach-landing` folder into your WordPress site at:
   wp-content/plugins/onereach-landing/

2. In WordPress admin go to Plugins → Installed Plugins and activate
   "OneReach Landing Page".

3. In Elementor, drop a Shortcode widget into any container and add:
     [onereach_landing]

4. That's it — the full page section renders inside your container,
   inheriting no theme header or footer.

== Shortcode Options ==

  [onereach_landing]
    — renders with default URLs

  [onereach_landing
    register_url="/register"
    login_url="/login"
    contact_email="you@yourdomain.com"
  ]

== Attributes ==

  register_url    URL for all "Get Started" / "Buy" buttons  (default: /register)
  login_url       URL for "Sign In" links                    (default: /login)
  contact_email   Email address for Enterprise contact link  (default: raja@onedatasoftware.com)

== Using in Elementor ==

1. Edit your page with Elementor.
2. Drag a "Container" (or Section) onto the canvas.
3. Inside it, drag a "Shortcode" widget.
4. Paste [onereach_landing] into the shortcode field.
5. Save & preview.

The plugin scopes all CSS under .or-wrap so it won't conflict with
your active theme or other Elementor sections on the same page.

== Changelog ==

= 1.0.0 =
* Initial release.
