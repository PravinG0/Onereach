<?php
/**
 * OneReach Pricing Page Template
 * Rendered by the [onereach_pricing] shortcode.
 * Contains: Plans · Credits Explainer · Top-Up Packs · Full Comparison · FAQ · CTA
 * Do not call directly.
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }

$popup_attrs   = 'href="#" onclick="return orOpenPopup(98,event);"';
$login_url     = 'https://app.onereach.app/login';
$contact_email = sanitize_email( $atts['contact_email'] );
?>
<div class="or-wrap">

<!-- ═══════════ PRICING — PLANS ═══════════ -->
<section id="or-pricing" class="plans-sec">
  <div class="con">
    <div class="sec-head fu">
      <div class="lbl">Choose Your Plan</div>
      <h2 style="margin-top:12px;margin-bottom:10px;">The right fit for <span class="blue">every team.</span></h2>
      <p>All plans include full Sophia AI, 4-channel outreach, and the complete Research &rarr; Outreach &rarr; Nurture &rarr; Book pipeline.</p>
      <div style="margin-top:20px;">
        <div class="btog">
          <button class="bt bt-monthly on">Monthly</button>
          <button class="bt bt-annual">Annual <span class="save-pill">Save 20%</span></button>
        </div>
      </div>
    </div>

    <div class="plans-grid fu d1">

      <!-- Startup -->
      <div class="plan-card">
        <span class="pc-badge">Free Forever</span>
        <div class="pc-name">Startup</div>
        <p class="pc-tagline">For founders &amp; solo operators testing the power of Sophia AI before committing.</p>
        <div class="pc-price-block">
          <div class="pc-price-row"><span class="pc-free">Free</span></div>
          <div class="pc-note">Up to 2 users &mdash; always free</div>
        </div>
        <div class="pc-credits">
          <div class="pcc-icon"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 1.5l2 5h5l-4.1 3.1 1.6 5-4.5-2.8-4.5 2.8 1.6-5L2 6.5h5L9 1.5Z" stroke="#1E3DB4" stroke-width="1.5" stroke-linejoin="round"/></svg></div>
          <div><div class="pcc-n">500</div><div class="pcc-l">credits / month</div></div>
        </div>
        <div class="pc-div"></div>
        <ul class="pc-feats">
          <?php foreach (['Up to 2 users','Sophia AI &mdash; all 4 channels','Research &rarr; Outreach &rarr; Nurture','1 workspace &middot; Discovery research','Buy credit top-up packs anytime'] as $f): ?>
          <li><div class="plan-chk"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="#059669" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></div><?php echo $f; ?></li>
          <?php endforeach; ?>
          <?php foreach (['Team credit allocation','Command Center'] as $f): ?>
          <li><div class="plan-no-chk"><svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M2 2l5 5M7 2l-5 5" stroke="#aaa" stroke-width="1.3"/></svg></div><span style="opacity:.45;"><?php echo esc_html($f); ?></span></li>
          <?php endforeach; ?>
        </ul>
        <a <?php echo $popup_attrs; ?> class="btn-s" style="margin-top:auto;text-align:center;">Get Started Free</a>
      </div>

      <!-- Growth (featured) -->
      <div class="plan-card feat">
        <div class="pc-pop">Most Popular</div>
        <span class="pc-badge">Growth</span>
        <div class="pc-name">Growth</div>
        <p class="pc-tagline">For sales teams ready to deploy Sophia at full scale and fill the pipeline fast.</p>
        <div class="pc-price-block">
          <div class="pc-price-row">
            <span class="pc-dollar">$</span>
            <span class="pc-amount" data-monthly="100" data-annual="80">100</span>
            <span class="pc-per">/user/mo</span>
          </div>
          <div class="pc-note" data-note-monthly="$100/month &middot; 1 user &middot; billed monthly" data-note-annual="$80/month &middot; 1 user &middot; billed annually">$100/month &middot; 1 user &middot; billed monthly</div>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;padding:11px 14px;border-radius:10px;margin-bottom:18px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.18);">
          <span style="font-size:12.5px;font-weight:600;color:rgba(255,255,255,.7);">Team size</span>
          <div style="display:flex;align-items:center;gap:10px;">
            <button class="sr-minus" style="width:28px;height:28px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:600;cursor:pointer;background:rgba(255,255,255,.2);color:#fff;border:1px solid rgba(255,255,255,.25);">&#8722;</button>
            <span class="sr-val" style="font-size:17px;font-weight:800;min-width:24px;text-align:center;color:#fff;">1</span>
            <button class="sr-plus" style="width:28px;height:28px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:600;cursor:pointer;background:rgba(255,255,255,.2);color:#fff;border:1px solid rgba(255,255,255,.25);">+</button>
          </div>
          <span style="font-size:12px;color:rgba(255,255,255,.5);">up to 25 seats</span>
        </div>
        <div class="pc-credits">
          <div class="pcc-icon"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 1.5l2 5h5l-4.1 3.1 1.6 5-4.5-2.8-4.5 2.8 1.6-5L2 6.5h5L9 1.5Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/></svg></div>
          <div><div class="pcc-n" data-seat-credits>2,500</div><div class="pcc-l">credits / month</div></div>
        </div>
        <div class="pc-div"></div>
        <ul class="pc-feats">
          <?php foreach (['Everything in Startup','3&ndash;25 users &middot; $100/user/mo','Full Command Center access','All research tiers incl. Deep Intel','Team credit budgets &amp; allocation','Unlimited workspaces','Priority support &middot; Stripe billing'] as $f): ?>
          <li><div class="plan-chk"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></div><?php echo $f; ?></li>
          <?php endforeach; ?>
        </ul>
        <a <?php echo $popup_attrs; ?> class="btn-plan-feat">Start Growth Plan &rarr;</a>
      </div>

      <!-- Enterprise -->
      <div class="plan-card dark">
        <span class="pc-badge">Enterprise</span>
        <div class="pc-name">Enterprise</div>
        <p class="pc-tagline">For organizations beyond 25 users that need custom integrations, SLAs, and dedicated capacity.</p>
        <div class="pc-price-block">
          <div class="pc-price-row"><span class="pc-free">Custom</span></div>
          <div class="pc-note" style="color:rgba(255,255,255,.35);">25+ users &middot; bespoke pricing</div>
        </div>
        <div class="pc-credits">
          <div class="pcc-icon"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 1.5l2 5h5l-4.1 3.1 1.6 5-4.5-2.8-4.5 2.8 1.6-5L2 6.5h5L9 1.5Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/></svg></div>
          <div><div class="pcc-n">Unlimited</div><div class="pcc-l">credits &middot; custom allocation</div></div>
        </div>
        <div class="pc-div"></div>
        <ul class="pc-feats">
          <?php foreach (['Everything in Growth','25+ users &middot; unlimited seats','CRM integrations (Salesforce, HubSpot)','Custom API + webhook integrations','Dedicated AI capacity + fine-tuning','99.9% SLA &middot; dedicated support manager','Custom onboarding &amp; team training'] as $f): ?>
          <li><div class="plan-chk"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></div><?php echo $f; ?></li>
          <?php endforeach; ?>
        </ul>
        <a href="mailto:<?php echo esc_attr($contact_email); ?>?subject=Enterprise%20Plan%20Inquiry" class="btn-plan-dark" style="margin-top:auto;">Contact Sales &rarr;</a>
      </div>

    </div>
  </div>
</section>

<!-- ═══════════ CREDITS EXPLAINER ═══════════ -->
<section class="credits-sec" id="or-credits">
  <div class="con">
    <div class="sec-head fu">
      <div class="lbl">How Credits Work</div>
      <h2 style="margin-top:12px;margin-bottom:12px;">Credits = <span class="blue">Value Delivered.</span></h2>
      <p>1 credit = $0.01. You&rsquo;re not paying for AI compute time &mdash; you&rsquo;re paying for specific work Sophia does on your behalf. No hidden fees, no surprises.</p>
    </div>
    <div class="cexp-grid">

      <div class="fu">
        <div class="lbl lbl-l" style="margin-bottom:18px;">What Each Action Costs</div>
        <div class="action-list">

          <div class="al-row">
            <div class="al-icon" style="background:#EEF2FF;"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="7" cy="7" r="4.5" stroke="#1E3DB4" stroke-width="1.5"/><path d="M10.5 10.5L14 14" stroke="#1E3DB4" stroke-width="1.5" stroke-linecap="round"/></svg></div>
            <div class="al-body"><div class="al-name">Company Search</div><div class="al-desc">Apollo org search &mdash; find companies matching your ICP</div></div>
            <span class="al-cost">1 credit</span>
          </div>

          <div class="al-row">
            <div class="al-icon" style="background:rgba(8,145,178,.08);"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 5.5h14v9a.5.5 0 0 1-.5.5H2.5a.5.5 0 0 1-.5-.5V5.5Z" stroke="#0891B2" stroke-width="1.5"/><path d="M2 5.5l7 5.5 7-5.5" stroke="#0891B2" stroke-width="1.5" stroke-linecap="round"/></svg></div>
            <div class="al-body"><div class="al-name">AI Message Draft</div><div class="al-desc">Personalized message for any channel &mdash; LinkedIn, Email, SMS, WhatsApp</div></div>
            <span class="al-cost">2 credits</span>
          </div>

          <div class="al-row">
            <div class="al-icon" style="background:rgba(5,150,105,.08);"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="7" r="3" stroke="#059669" stroke-width="1.5"/><path d="M3 16c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#059669" stroke-width="1.5" stroke-linecap="round"/></svg></div>
            <div class="al-body"><div class="al-name">Contact Reveal</div><div class="al-desc">Verified email + phone + LinkedIn for one contact (Apollo / PDL)</div></div>
            <span class="al-cost">5 credits</span>
          </div>

          <div class="al-row" style="border-color:rgba(30,61,180,.18);background:#F5F7FF;">
            <div class="al-icon" style="background:#EEF2FF;"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="7.5" cy="7.5" r="4" stroke="#1E3DB4" stroke-width="1.5"/><path d="M10.5 10.5L14 14" stroke="#1E3DB4" stroke-width="1.5" stroke-linecap="round"/><path d="M6 7.5H9M7.5 6v3" stroke="#1E3DB4" stroke-width="1.3" stroke-linecap="round"/></svg></div>
            <div class="al-body"><div class="al-name">Snapshot Research</div><div class="al-desc">Quick company profile &mdash; overview, key contacts, data points</div></div>
            <span class="al-cost">5 credits</span>
          </div>

          <div class="al-row" style="border-color:rgba(30,61,180,.18);background:#F5F7FF;">
            <div class="al-icon" style="background:#EEF2FF;"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="2" width="14" height="14" rx="2.5" stroke="#1E3DB4" stroke-width="1.5"/><path d="M2 7h14" stroke="#1E3DB4" stroke-width="1.2"/><path d="M6 11h6M6 13h4" stroke="#1E3DB4" stroke-width="1.2" stroke-linecap="round"/></svg></div>
            <div class="al-body"><div class="al-name">Profiler Research</div><div class="al-desc">Full company profile: pain points, initiatives, outreach intel per contact</div></div>
            <span class="al-cost">20 credits</span>
          </div>

          <div class="al-row" style="border-color:rgba(124,58,237,.2);background:rgba(124,58,237,.03);">
            <div class="al-icon" style="background:rgba(124,58,237,.08);"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="3" stroke="#7C3AED" stroke-width="1.4"/><circle cx="9" cy="2.5" r="1.5" stroke="#7C3AED" stroke-width="1.2"/><circle cx="9" cy="15.5" r="1.5" stroke="#7C3AED" stroke-width="1.2"/><circle cx="2.5" cy="9" r="1.5" stroke="#7C3AED" stroke-width="1.2"/><circle cx="15.5" cy="9" r="1.5" stroke="#7C3AED" stroke-width="1.2"/></svg></div>
            <div class="al-body"><div class="al-name">Deep Intel Research</div><div class="al-desc">Full 4-agent pipeline: Perplexity + Apollo + GPT-4o synthesis + full outreach brief</div></div>
            <span class="al-cost-violet">100 credits</span>
          </div>

        </div>
      </div>

      <div class="fu d2">
        <div class="lbl lbl-l" style="margin-bottom:18px;">Research Tiers</div>
        <div class="rtiers">
          <div class="rt"><div class="rt-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="8" cy="8" r="5" stroke="#1E3DB4" stroke-width="1.5"/><path d="M12 12l4 4" stroke="#1E3DB4" stroke-width="1.5" stroke-linecap="round"/></svg></div><div><div class="rt-name">Discovery</div><div class="rt-desc">Company + contact overview. Quick qualify.</div></div><span class="rt-free">Free</span></div>
          <div class="rt"><div class="rt-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="8" cy="8" r="5" stroke="#1E3DB4" stroke-width="1.5"/><path d="M12 12l4 4" stroke="#1E3DB4" stroke-width="1.5" stroke-linecap="round"/><path d="M8 5.5V8h2.5" stroke="#1E3DB4" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div><div class="rt-name">Snapshot</div><div class="rt-desc">Key company data, pain points, primary contacts.</div></div><span class="rt-pill">5 credits</span></div>
          <div class="rt"><div class="rt-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="14" height="14" rx="2.5" stroke="#1E3DB4" stroke-width="1.5"/><path d="M3 8h14" stroke="#1E3DB4" stroke-width="1.2"/><path d="M7 12h6M7 14.5h4" stroke="#1E3DB4" stroke-width="1.2" stroke-linecap="round"/></svg></div><div><div class="rt-name">Profiler</div><div class="rt-desc">Full profile, org chart, initiatives &amp; outreach intel.</div></div><span class="rt-pill">20 credits</span></div>
          <div class="rt rt-feat"><div class="rt-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="3" stroke="white" stroke-width="1.5"/><circle cx="10" cy="3.5" r="1.5" stroke="white" stroke-width="1.2"/><circle cx="10" cy="16.5" r="1.5" stroke="white" stroke-width="1.2"/><circle cx="3.5" cy="10" r="1.5" stroke="white" stroke-width="1.2"/><circle cx="16.5" cy="10" r="1.5" stroke="white" stroke-width="1.2"/></svg></div><div><div class="rt-name">Deep Intel</div><div class="rt-desc">4-agent pipeline. News, signals, decision-makers, talking points.</div></div><span class="rt-pill">100 credits</span></div>
        </div>
        <div class="math-box">
          <div class="math-title"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#1E3DB4" stroke-width="1.3"/><path d="M7 6v4M7 4.5v.5" stroke="#1E3DB4" stroke-width="1.3" stroke-linecap="round"/></svg> Growth plan &mdash; 5 users = 12,500 credits/month</div>
          <?php foreach ([['125 Deep Intel research reports','or'],['625 Profiler research reports','or'],['2,500 contact reveals','or'],['6,250 AI message drafts','or'],['Any mix of the above','&#10003;']] as $r): ?>
          <div class="math-row"><span><?php echo esc_html($r[0]); ?></span><span><?php echo $r[1]; ?></span></div>
          <?php endforeach; ?>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ═══════════ TOP-UP PACKS ═══════════ -->
<section class="topup-sec" id="or-topup">
  <div class="con">
    <div class="sec-head fu">
      <div class="lbl">Credit Top-Up Packs</div>
      <h2 style="margin-top:12px;margin-bottom:12px;">Need more? <span class="blue">Top up anytime.</span></h2>
      <p>Credits never expire and stack on top of your monthly plan. Available on every plan &mdash; including Startup. Bigger packs = bigger discount.</p>
    </div>
    <div class="topup-grid fu d1">

      <div class="tu">
        <div class="tu-icon"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2.5l2 5h5.5l-4.5 3.2 1.7 5.3-4.7-2.8-4.7 2.8 1.7-5.3L3.5 7.5H9L11 2.5Z" stroke="#1E3DB4" stroke-width="1.5" stroke-linejoin="round"/></svg></div>
        <div class="tu-name">Starter</div>
        <div class="tu-credits">2,500</div>
        <div class="tu-clbl">AI Credits</div>
        <div class="tu-div"></div>
        <div class="tu-price-row"><span class="tu-dollar">$</span><span class="tu-price">25</span></div>
        <div class="tu-discount" style="visibility:hidden;">placeholder</div>
        <div class="tu-cpp">$0.010 per credit &middot; base rate</div>
        <div class="tu-never"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M6 3.5V6l2 1.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg> Credits never expire</div>
        <ul class="tu-feats">
          <li><div class="tu-chk"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3.5" stroke="#059669" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></div>25 Deep Intel reports</li>
          <li><div class="tu-chk"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3.5" stroke="#059669" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></div>125 Profiler research</li>
          <li><div class="tu-chk"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3.5" stroke="#059669" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></div>500 contact reveals</li>
          <li><div class="tu-chk"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3.5" stroke="#059669" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></div>1,250 message drafts</li>
        </ul>
        <a <?php echo $popup_attrs; ?> class="btn-s">Buy for $25</a>
      </div>

      <div class="tu">
        <div class="tu-icon"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 16L7.5 10l4 3.5L15.5 6.5l3.5 4" stroke="#1E3DB4" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="16" cy="5" r="2" stroke="#059669" stroke-width="1.4"/></svg></div>
        <div class="tu-name">Growth</div>
        <div class="tu-credits">10,500</div>
        <div class="tu-clbl">AI Credits &middot; +5% bonus</div>
        <div class="tu-div"></div>
        <div class="tu-price-row"><span class="tu-dollar">$</span><span class="tu-price">100</span></div>
        <div class="tu-discount"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#059669" stroke-width="1.3"/><path d="M4.5 9.5l5-5M5 5.5h-.5v4h4" stroke="#059669" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg> 5% extra credits vs base rate</div>
        <div class="tu-cpp">$0.0095 per credit</div>
        <div class="tu-never"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M6 3.5V6l2 1.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg> Credits never expire</div>
        <ul class="tu-feats">
          <li><div class="tu-chk"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3.5" stroke="#059669" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></div>105 Deep Intel reports</li>
          <li><div class="tu-chk"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3.5" stroke="#059669" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></div>525 Profiler research</li>
          <li><div class="tu-chk"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3.5" stroke="#059669" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></div>2,100 contact reveals</li>
          <li><div class="tu-chk"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3.5" stroke="#059669" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></div>5,250 message drafts</li>
        </ul>
        <a <?php echo $popup_attrs; ?> class="btn-s">Buy for $100</a>
      </div>

      <div class="tu tu-feat">
        <div class="tu-top-tag">Best Value</div>
        <div class="tu-icon"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2l2.5 6H20l-5.5 4 2 6.5L11 15l-5.5 3.5 2-6.5L2 8h6.5L11 2Z" stroke="white" stroke-width="1.6" stroke-linejoin="round"/></svg></div>
        <div class="tu-name">Pro</div>
        <div class="tu-credits">27,000</div>
        <div class="tu-clbl">AI Credits &middot; +8% bonus</div>
        <div class="tu-div"></div>
        <div class="tu-price-row"><span class="tu-dollar">$</span><span class="tu-price">250</span></div>
        <div class="tu-discount"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="white" stroke-width="1.3"/><path d="M4.5 9.5l5-5M5 5.5h-.5v4h4" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg> 8% extra credits vs base rate</div>
        <div class="tu-cpp">$0.0093 per credit</div>
        <div class="tu-never"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M6 3.5V6l2 1.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg> Credits never expire</div>
        <ul class="tu-feats">
          <li><div class="tu-chk"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3.5" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></div>270 Deep Intel reports</li>
          <li><div class="tu-chk"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3.5" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></div>1,350 Profiler research</li>
          <li><div class="tu-chk"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3.5" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></div>5,400 contact reveals</li>
          <li><div class="tu-chk"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3.5" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></div>13,500 message drafts</li>
        </ul>
        <a <?php echo $popup_attrs; ?> class="btn-w" style="background:#fff;color:#0B1535;">Buy for $250 &rarr;</a>
      </div>

      <div class="tu" style="background:#0B1535;border-color:#0B1535;">
        <div class="tu-icon" style="background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.1);"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="2" y="14" width="4.5" height="6" rx="1" stroke="white" stroke-width="1.5"/><rect x="8.75" y="9" width="4.5" height="11" rx="1" stroke="white" stroke-width="1.5"/><rect x="15.5" y="4" width="4.5" height="16" rx="1" stroke="white" stroke-width="1.5"/></svg></div>
        <div class="tu-name" style="color:rgba(255,255,255,.6);">Scale</div>
        <div class="tu-credits" style="color:#fff;">55,000</div>
        <div class="tu-clbl" style="color:rgba(255,255,255,.4);">AI Credits &middot; +10% bonus</div>
        <div class="tu-div" style="background:rgba(255,255,255,.1);"></div>
        <div class="tu-price-row"><span class="tu-dollar" style="color:rgba(255,255,255,.5);">$</span><span class="tu-price" style="color:#fff;">500</span></div>
        <div class="tu-discount" style="color:#059669;"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#059669" stroke-width="1.3"/><path d="M4.5 9.5l5-5M5 5.5h-.5v4h4" stroke="#059669" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg> 10% extra credits vs base rate</div>
        <div class="tu-cpp" style="color:rgba(255,255,255,.4);">$0.0091 per credit</div>
        <div class="tu-never" style="color:rgba(255,255,255,.6);"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M6 3.5V6l2 1.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg> Credits never expire</div>
        <ul class="tu-feats">
          <li><div class="tu-chk" style="background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.15);"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3.5" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></div><span style="color:rgba(255,255,255,.7);">550 Deep Intel reports</span></li>
          <li><div class="tu-chk" style="background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.15);"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3.5" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></div><span style="color:rgba(255,255,255,.7);">2,750 Profiler research</span></li>
          <li><div class="tu-chk" style="background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.15);"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3.5" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></div><span style="color:rgba(255,255,255,.7);">11,000 contact reveals</span></li>
          <li><div class="tu-chk" style="background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.15);"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3.5" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></div><span style="color:rgba(255,255,255,.7);">27,500 message drafts</span></li>
        </ul>
        <a <?php echo $popup_attrs; ?> style="display:inline-flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;padding:13px 28px;border-radius:10px;cursor:pointer;width:100%;font-family:inherit;background:rgba(255,255,255,.1);color:#fff;border:1.5px solid rgba(255,255,255,.18);text-decoration:none;">Buy for $500</a>
      </div>

    </div>
  </div>
</section>

<!-- ═══════════ COMPARE TABLE ═══════════ -->
<section class="cmp-sec">
  <div class="con">
    <div class="sec-head fu">
      <div class="lbl">Full Comparison</div>
      <h2 style="margin-top:12px;margin-bottom:6px;">What&rsquo;s included in <span class="blue">every plan.</span></h2>
    </div>
    <div class="cmp-table fu d2">
      <div class="cmp-head">
        <div class="ch-col">Feature</div>
        <div class="ch-col">Startup</div>
        <div class="ch-col hfeat">Growth</div>
        <div class="ch-col">Enterprise</div>
      </div>
      <?php
      $yes = '<div class="yes-ic"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#059669" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>';
      $no  = '<div class="no-ic"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M2 2l4 4M6 2l-4 4" stroke="#888" stroke-width="1.3"/></svg></div>';
      $cmp_sections = [
        'Platform' => [
          ['Users',                  '<span class="ct">1&ndash;2</span>',       '<span class="ct">3&ndash;25 &middot; $100/user</span>', '<span class="ct">25+ &middot; custom</span>'],
          ['Credits / month',        '<span class="cg">500</span>',             '<span class="ct">2,500 / user</span>',                   '<span class="ct">Custom</span>'],
          ['Credit top-up packs',    $yes,                                      $yes,                                                     $yes],
          ['Team credit allocation', $no,                                       $yes,                                                     $yes],
        ],
        'Sophia AI' => [
          ['All 4 channels (LinkedIn, Email, SMS, WhatsApp)', $yes, $yes, $yes],
          ['Command Center (natural language campaigns)',      $no,  $yes, $yes],
          ['Deep Intel research (100 credits)',                $no,  $yes, $yes],
          ['Sophia Brain Stats + A/B learning',               $no,  $yes, $yes],
        ],
        'Integrations &amp; Pipeline' => [
          ['Calendar (Google + Outlook) + meeting booking',          $yes, $yes, $yes],
          ['3-layer pipeline (Contact &rarr; Lead &rarr; Opportunity)', $yes, $yes, $yes],
          ['CRM export (Salesforce, HubSpot)',                       $no,  $no,  $yes],
        ],
        'Support' => [
          ['Support tier', '<span class="cg">Community</span>',  '<span class="ct">Priority email</span>',  '<span class="ct">Dedicated manager</span>'],
          ['Onboarding',   '<span class="cg">Self-serve</span>', '<span class="ct">Guided setup</span>',    '<span class="ct">Custom program</span>'],
          ['Uptime SLA',   '<span class="cg">Best effort</span>','<span class="cg">Best effort</span>',     '<span class="ct">99.9%</span>'],
        ],
      ];
      foreach ($cmp_sections as $group => $rows): ?>
      <div class="cmp-grp-lbl"><?php echo $group; ?></div>
      <?php foreach ($rows as $row): ?>
      <div class="cmp-row">
        <div class="cr"><?php echo $row[0]; ?></div>
        <div class="cr"><?php echo $row[1]; ?></div>
        <div class="cr cfeat"><?php echo $row[2]; ?></div>
        <div class="cr"><?php echo $row[3]; ?></div>
      </div>
      <?php endforeach; endforeach; ?>
    </div>
  </div>
</section>

<!-- ═══════════ FAQ ═══════════ -->
<section class="faq-sec">
  <div class="con">
    <div class="sec-head fu">
      <div class="lbl">Common Questions</div>
      <h2 style="margin-top:12px;">Got questions? <span class="blue">We have answers.</span></h2>
    </div>
    <div class="faq-grid fu d1">
      <?php
      $faqs = [
        ['What exactly is a credit?', '1 credit = $0.01. Every credit maps to a specific action Sophia performs &mdash; not AI compute time. Company search = 1 credit, message draft = 2 credits, contact reveal = 5 credits, Deep Intel research = 100 credits. You always know exactly what you&rsquo;re spending.'],
        ['Do credits roll over or expire?', 'Monthly plan credits reset each billing cycle &mdash; they don&rsquo;t roll over. But top-up pack credits never expire. They stack on top of your monthly allowance and are always used last, so buy a pack to make sure capacity never goes to waste.'],
        ['How does the seat count work on Growth?', 'Growth is $100 per user per month &mdash; from 3 users up to 25. Each user gets 2,500 credits/month included. At 25 users ($2,500/month) you get 62,500 credits. Once your team exceeds 25 users, talk to us about an Enterprise plan.'],
        ['Can Startup users buy top-up packs?', 'Yes &mdash; top-up packs are available on every plan including the free Startup tier. Start free with 500 credits, explore Sophia, and buy a pack whenever you need more capacity without upgrading your plan.'],
        ['What happens when credits run out?', 'Sophia pauses credit-consuming actions (research, drafts, contact reveals) until your balance is topped up. No data is lost, no sequences are deleted &mdash; everything resumes the moment you add credits. Top-up packs activate instantly.'],
        ['Can I change my plan or cancel anytime?', 'Yes &mdash; upgrade or downgrade anytime from your Stripe billing portal. Upgrades take effect immediately (prorated). Downgrades take effect at the end of your billing period. No contracts, no cancellation fees.'],
      ];
      foreach ($faqs as $faq): ?>
      <div class="faq-card">
        <div class="faq-q">
          <span><?php echo esc_html($faq[0]); ?></span>
          <div class="faq-ico"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 4.5L5 7l2.5-2.5M5 2v5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        </div>
        <div class="faq-a"><?php echo $faq[1]; ?></div>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- ═══════════ CTA ═══════════ -->
<section class="cta-sec">
  <div class="con">
    <div class="cta-inner">
      <h2 class="cta-h">Ready to let Sophia<br>book your meetings?</h2>
      <p class="cta-sub">Set up in minutes. First 500 credits free. No credit card required.</p>
      <div class="cta-acts">
        <a <?php echo $popup_attrs; ?> class="btn-w">Get Started Free</a>
        <a href="https://app.onereach.app/login" class="btn-ow">Sign In</a>
      </div>
    </div>
  </div>
</section>

</div><!-- /.or-wrap -->
