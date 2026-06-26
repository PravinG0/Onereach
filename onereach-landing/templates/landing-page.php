<?php
/**
 * OneReach Landing Page Template
 * Rendered by the [onereach_landing] shortcode.
 * Do not call directly.
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }

$popup_attrs   = 'href="#" onclick="return orOpenPopup(98,event);"';
$login_url     = 'https://app.onereach.app/login';
$contact_email = sanitize_email( $atts['contact_email'] );
?>
<div class="or-wrap">

<!-- ═══════════ HERO ═══════════ -->
<section class="hero-section" id="or-hero">
  <div class="hero-glow hg1"></div>
  <div class="hero-glow hg2"></div>
  <div class="hero-body">
    <!-- Left -->
    <div style="padding-bottom:72px;">
      <div class="h-pill">
        <span class="h-dot"></span>
        <span>AI-Powered Sales Automation</span>
      </div>
      <h1 class="hero-h1">
        Sophia<span class="accent blue">Books Your</span>
        <span class="accent">Meetings.</span>
        <span class="sub">You Just Show Up.</span>
      </h1>
      <p class="h-desc">
        Sophia researches companies, finds the right contacts, writes personalized messages,
        and manages follow-ups &mdash; across <strong>LinkedIn, Email, SMS &amp; WhatsApp</strong>.
      </p>
      <div class="h-ctas">
        <a <?php echo $popup_attrs; ?> class="btn-p">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2l5 3v6l-5 3-5-3V5l5-3z" fill="white" opacity=".8"/><circle cx="8" cy="8" r="2" fill="white"/></svg>
          Get Started Free
        </a>
        <a href="#or-how-it-works" class="btn-s">See How It Works</a>
      </div>
      <div class="h-trust">
        <div class="h-trust-check">
          <div class="trust-dot">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#059669" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
          <span>No credit card</span>
        </div>
        <div class="h-trust-check">
          <div class="trust-dot">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#059669" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
          <span>500 free credits/mo</span>
        </div>
        <div class="h-trust-check">
          <div class="trust-dot">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#059669" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
          <span>Up to 2 users free</span>
        </div>
      </div>
    </div>

    <!-- Right: Sophia visual -->
    <div class="hero-right">
      <div class="orbit o1"></div>
      <div class="orbit o2"></div>
      <div class="orbit o3"></div>

      <div class="sophia-center">
        <div class="sc-orb">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" style="margin-bottom:4px;">
            <circle cx="18" cy="18" r="16" fill="rgba(255,255,255,.15)"/>
            <path d="M11 18c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <circle cx="18" cy="18" r="3" fill="white"/>
            <path d="M18 8v3M18 25v3M8 18h3M25 18h3" stroke="white" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
          </svg>
          <div class="sc-name">Sophia</div>
          <div class="sc-role">AI Sales Agent</div>
        </div>
      </div>

      <div class="inode in1">
        <div class="inode-icon" style="background:#EEF2FF;">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="5.5" cy="5.5" r="4" stroke="#1E3DB4" stroke-width="1.3"/><path d="M8.5 8.5l2.5 2.5" stroke="#1E3DB4" stroke-width="1.3" stroke-linecap="round"/></svg>
        </div>
        Discover
      </div>
      <div class="inode in2">
        <div class="inode-icon" style="background:rgba(124,58,237,.08);">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1.5c2.8 0 5 2.2 5 5 0 1.5-.7 2.9-1.7 3.8" stroke="#7C3AED" stroke-width="1.3" stroke-linecap="round"/><path d="M3.2 9.8A5 5 0 0 1 6.5 1.5" stroke="#7C3AED" stroke-width="1.3" stroke-linecap="round" opacity=".4"/><circle cx="6.5" cy="6.5" r="1.8" fill="#7C3AED" opacity=".3"/></svg>
        </div>
        Intel
      </div>
      <div class="inode in3">
        <div class="inode-icon" style="background:rgba(8,145,178,.08);">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1.5 9L4 5l2.5 3L9 4l2.5 5" stroke="#0891B2" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        Signal
      </div>
      <div class="inode in4">
        <div class="inode-icon" style="background:rgba(5,150,105,.08);">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="6.5" r="5" stroke="#059669" stroke-width="1.2"/><path d="M4 6.5l2 2 3-3" stroke="#059669" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        Enrich
      </div>
      <div class="inode in5">
        <div class="inode-icon" style="background:rgba(37,211,102,.08);">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="1" y="1" width="11" height="11" rx="3" fill="#25D366" opacity=".8"/><path d="M6.5 2.3C4.1 2.3 2.3 4.1 2.3 6.5c0 .9.3 1.7.7 2.4L2.3 11 5 10.3c.7.4 1.5.7 2.3.7h.2C9.9 11 11.7 9.1 11.7 6.7c0-2.5-2.1-4.4-4.7-4.4h-.5z" stroke="white" stroke-width=".7"/></svg>
        </div>
        WhatsApp Sent
      </div>
      <div class="inode in6">
        <div class="inode-icon" style="background:rgba(217,119,6,.08);">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="1.5" y="3.5" width="10" height="8" rx="2" stroke="#D97706" stroke-width="1.2"/><path d="M4 3.5V2.5a2.5 2.5 0 0 1 5 0v1" stroke="#D97706" stroke-width="1.2" stroke-linecap="round"/><circle cx="6.5" cy="8" r="1.2" fill="#D97706"/></svg>
        </div>
        Pipeline
      </div>

      <div class="chbadge cb1">
        <div class="cb-icon" style="background:#EEF2FF;">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="1" width="12" height="12" rx="3" fill="#0077B5"/><path d="M3.5 5.5h2v5h-2zm1-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm2.5 3h1.5v.7c.3-.5.9-.8 1.6-.8C11 5.4 12 6.3 12 8v2.5H10V8.5c0-.9-.4-1.3-1-1.3-.7 0-1.2.5-1.2 1.4v1.9H6V5.5z" fill="white"/></svg>
        </div>
        <div class="cb-dot"></div>
        <span>LinkedIn sent</span>
      </div>
      <div class="chbadge cb2">
        <div class="cb-icon" style="background:#EEF2FF;">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="1" width="12" height="12" rx="3" fill="#1E3DB4"/><path d="M3 5h8v5a.5.5 0 0 1-.5.5h-7A.5.5 0 0 1 3 10V5Z" stroke="white" stroke-width=".8"/><path d="M3 5l4 3 4-3" stroke="white" stroke-width=".8" stroke-linecap="round"/></svg>
        </div>
        <div class="cb-dot"></div>
        <span>Email opened</span>
      </div>
      <div class="chbadge cb3">
        <div class="cb-icon" style="background:rgba(5,150,105,.08);">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="1" width="12" height="12" rx="3" fill="#059669"/><path d="M3 4h8a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H5l-2.5 1.5V4.5A.5.5 0 0 1 3 4Z" stroke="white" stroke-width=".8"/><path d="M5 7h4M5 9h2.5" stroke="white" stroke-width=".8" stroke-linecap="round"/></svg>
        </div>
        <div class="cb-dot"></div>
        <span>SMS replied</span>
      </div>
      <div class="chbadge cb4">
        <div class="cb-icon" style="background:#EEF2FF;">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="1" width="12" height="12" rx="3" fill="#1E3DB4"/><rect x="3" y="3.5" width="8" height="7" rx="1" stroke="white" stroke-width=".8"/><path d="M5 6h4M5 8h2.5" stroke="white" stroke-width=".8" stroke-linecap="round"/><path d="M4 2.5v2M10 2.5v2" stroke="white" stroke-width=".8" stroke-linecap="round"/></svg>
        </div>
        <div class="cb-dot"></div>
        <span>Meeting booked</span>
      </div>

      <div class="mtg-badge">
        <div class="mb-n">47</div>
        <div class="mb-l">Meetings this month</div>
      </div>
    </div>
  </div>

  <!-- Stats bar -->
  <div class="hstats">
    <div class="hsi"><div class="hs-n">12k+</div><div class="hs-l">Companies researched</div></div>
    <div class="hsi"><div class="hs-n">84k+</div><div class="hs-l">Contacts enriched</div></div>
    <div class="hsi"><div class="hs-n">2.1M</div><div class="hs-l">Sequences sent</div></div>
    <div class="hsi"><div class="hs-n">8,400+</div><div class="hs-l">Meetings booked</div></div>
  </div>
</section>

<!-- ═══════════ HOW IT WORKS ═══════════ -->
<section id="or-how-it-works" class="loop-sec">
  <div class="con">
    <div class="sec-head fu">
      <div class="lbl">How It Works</div>
      <h2>Research. Reach. <span class="blue">Book.</span></h2>
      <p>Sophia handles the entire outreach loop &mdash; from finding targets to landing meetings &mdash; so your team closes, not chases.</p>
    </div>
    <div class="loop-grid fu d1">

      <!-- Step 1 -->
      <div class="loop-step">
        <div class="lc-arrow">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3 2l3 3-3 3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <span class="ls-num">Step 01</span>
        <div class="ls-icon">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="9" cy="9" r="6" stroke="#1E3DB4" stroke-width="1.5"/><path d="M14 14l4 4" stroke="#1E3DB4" stroke-width="1.5" stroke-linecap="round"/><path d="M9 6v3H12" stroke="#1E3DB4" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <div class="ls-title">Discover</div>
        <p class="ls-desc">Sophia searches Apollo &amp; PDL to find companies matching your ideal customer profile &mdash; by industry, size, location, and revenue.</p>
        <div class="ls-tags">
          <span class="ls-tag">Apollo</span>
          <span class="ls-tag">PDL</span>
          <span class="ls-tag">ICP Filters</span>
        </div>
      </div>

      <!-- Step 2 -->
      <div class="loop-step">
        <div class="lc-arrow">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3 2l3 3-3 3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <span class="ls-num">Step 02</span>
        <div class="ls-icon">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="3" width="16" height="16" rx="4" stroke="#0891B2" stroke-width="1.5"/><path d="M7 8h8M7 11h6M7 14h4" stroke="#0891B2" stroke-width="1.3" stroke-linecap="round"/></svg>
        </div>
        <div class="ls-title">Research</div>
        <p class="ls-desc">A 4-agent AI pipeline runs: Perplexity for real-time intel, GPT-4o for synthesis, Apollo for contacts, scoring for persona match.</p>
        <div class="ls-tags">
          <span class="ls-tag">Perplexity</span>
          <span class="ls-tag">GPT-4o</span>
          <span class="ls-tag">4 Agents</span>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="loop-step">
        <div class="lc-arrow">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3 2l3 3-3 3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <span class="ls-num">Step 03</span>
        <div class="ls-icon">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 5h14M4 9h10M4 13h12" stroke="#7C3AED" stroke-width="1.5" stroke-linecap="round"/><path d="M6 17l3 3 7-7" stroke="#7C3AED" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <div class="ls-title">Outreach</div>
        <p class="ls-desc">AI-written messages go out across LinkedIn, Email, SMS &amp; WhatsApp at optimal times &mdash; each personalized to the contact's role and company news.</p>
        <div class="ls-tags">
          <span class="ls-tag">Multi-channel</span>
          <span class="ls-tag">AI-written</span>
          <span class="ls-tag">LangGraph</span>
        </div>
      </div>

      <!-- Step 4 -->
      <div class="loop-step">
        <div class="lc-arrow">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3 2l3 3-3 3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <span class="ls-num">Step 04</span>
        <div class="ls-icon">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 6h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H7l-4 2.5V7a1 1 0 0 1 1-1Z" stroke="#059669" stroke-width="1.4"/><path d="M8 10h6M8 13h4" stroke="#059669" stroke-width="1.3" stroke-linecap="round"/></svg>
        </div>
        <div class="ls-title">Nurture</div>
        <p class="ls-desc">Sophia monitors replies, classifies intent, and sends intelligent follow-ups. Non-responders get re-engaged on a different channel automatically.</p>
        <div class="ls-tags">
          <span class="ls-tag">Follow-up</span>
          <span class="ls-tag">Reply AI</span>
          <span class="ls-tag">Re-engage</span>
        </div>
      </div>

      <!-- Result -->
      <div class="loop-step outcome">
        <span class="ls-num">Result</span>
        <div class="ls-icon">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="3" width="16" height="16" rx="3" stroke="white" stroke-width="1.5"/><path d="M7 8h8M7 12h4" stroke="white" stroke-width="1.3" stroke-linecap="round"/><circle cx="16" cy="14" r="3" fill="rgba(255,255,255,.3)" stroke="white" stroke-width="1.2"/><path d="M15 14l1 1 2-2" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <div class="ls-title">Meetings Booked</div>
        <p class="ls-desc">Replies hit your inbox. Sophia flags positives, drafts responses, and logs everything to CRM. You review &amp; close.</p>
        <div class="ls-tags">
          <span class="ls-tag">Human-in-loop</span>
          <span class="ls-tag">CRM sync</span>
          <span class="ls-tag">Calendar</span>
        </div>
      </div>

    </div><!-- /.loop-grid -->
  </div>
</section>

<!-- ═══════════ SOPHIA AGENTS ═══════════ -->
<section id="or-sophia-ai" class="agents-sec">
  <div class="con">
    <div class="agents-wrap">
      <!-- Left -->
      <div>
        <div class="fu">
          <div class="lbl lbl-l" style="margin-bottom:14px;">Sophia AI</div>
          <h2 style="font-size:clamp(32px,4vw,48px);font-weight:800;line-height:1.05;letter-spacing:-1.5px;color:#0B1535;margin:0 0 14px;">
            10 agents.<br><span class="blue">One orchestrator.</span>
          </h2>
          <p style="color:#3D4D72;font-size:16px;line-height:1.8;margin-bottom:36px;max-width:440px;">
            Sophia coordinates a network of specialized AI agents &mdash; each handling a distinct part of the pipeline. You approve. Sophia executes.
          </p>
        </div>

        <div class="alist-item fu">
          <div class="al-icon-wrap" style="background:#EEF2FF;"><span style="font-size:18px;">&#128269;</span></div>
          <div>
            <div class="al-title">Deep Company Research</div>
            <div class="al-desc">4-agent pipeline: Perplexity + Apollo + GPT-4o produces company profiles, pain points, buying signals, and outreach angles.</div>
            <div class="al-tags"><span class="al-tag">Perplexity</span><span class="al-tag">Apollo</span><span class="al-tag">GPT-4o</span></div>
          </div>
        </div>
        <div class="alist-item fu d1">
          <div class="al-icon-wrap" style="background:rgba(124,58,237,.08);"><span style="font-size:18px;">&#128100;</span></div>
          <div>
            <div class="al-title">Contact Discovery &amp; Scoring</div>
            <div class="al-desc">Apollo people search + persona matching scores every contact by seniority tier, role fit, and engagement likelihood.</div>
            <div class="al-tags"><span class="al-tag">Apollo</span><span class="al-tag">PDL</span><span class="al-tag">Scoring</span></div>
          </div>
        </div>
        <div class="alist-item fu d2">
          <div class="al-icon-wrap" style="background:rgba(8,145,178,.08);"><span style="font-size:18px;">&#9993;&#65039;</span></div>
          <div>
            <div class="al-title">AI Message Drafting</div>
            <div class="al-desc">Every message is written from scratch per contact &mdash; referencing their LinkedIn activity, company news, and your offering.</div>
            <div class="al-tags"><span class="al-tag">Claude</span><span class="al-tag">GPT-4o</span><span class="al-tag">Perplexity</span></div>
          </div>
        </div>
        <div class="alist-item fu d3">
          <div class="al-icon-wrap" style="background:rgba(5,150,105,.08);"><span style="font-size:18px;">&#128260;</span></div>
          <div>
            <div class="al-title">Sequence Orchestration</div>
            <div class="al-desc">LangGraph manages the full 5-phase workflow with human-approval gates at each step. Sophia resumes on your approval.</div>
            <div class="al-tags"><span class="al-tag">LangGraph</span><span class="al-tag">5-phase</span><span class="al-tag">Approval</span></div>
          </div>
        </div>
        <div class="alist-item fu d4">
          <div class="al-icon-wrap" style="background:rgba(217,119,6,.08);"><span style="font-size:18px;">&#128202;</span></div>
          <div>
            <div class="al-title">Pipeline &amp; Learning</div>
            <div class="al-desc">Sophia tracks every interaction, learns what messages land, and adapts future drafts based on your reply patterns.</div>
            <div class="al-tags"><span class="al-tag">CRM</span><span class="al-tag">Analytics</span><span class="al-tag">Learning</span></div>
          </div>
        </div>
      </div>

      <!-- Right: agents panel -->
      <div class="fu d2">
        <div class="agents-panel">
          <div class="ap-header">
            <span class="ap-title">Active Agents</span>
            <div class="ap-live"><div class="ap-dot"></div>Running</div>
          </div>
          <div class="agents-grid">
            <?php
            $agents = [
              ['Company Research','#1E3DB4'],['People Search','#0891B2'],['Contact Discovery','#7C3AED'],
              ['Signal Detection','#0891B2'],['Data Enrichment','#7C3AED'],['Msg Drafter','#DC2626'],
              ['Seq Builder','#0891B2'],['Synthesis','#059669'],['Follow-Up','#059669'],['Pipeline Mgr','#1E3DB4'],
            ];
            foreach ($agents as $agent): ?>
            <div class="ag-cell">
              <div class="ag-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6" stroke="<?php echo esc_attr($agent[1]); ?>" stroke-width="1.3" opacity=".7"/>
                  <circle cx="8" cy="8" r="2.5" fill="<?php echo esc_attr($agent[1]); ?>" opacity=".4"/>
                </svg>
              </div>
              <span class="ag-name"><?php echo esc_html($agent[0]); ?></span>
            </div>
            <?php endforeach; ?>
          </div>
          <div class="ap-sophia">
            <div class="aps-av">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="9" fill="rgba(255,255,255,.2)"/><path d="M7 11c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4" stroke="white" stroke-width="1.4" stroke-linecap="round"/><circle cx="11" cy="11" r="1.8" fill="white"/></svg>
            </div>
            <div>
              <div class="aps-name">Sophia</div>
              <div class="aps-role">AI Chief Revenue Officer &middot; Orchestrating all 10 agents</div>
            </div>
            <div class="aps-status"><div class="aps-dot"></div>Live</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════ CHANNELS ═══════════ -->
<section id="or-channels" class="ch-sec">
  <div class="con">
    <div class="sec-head fu">
      <div class="lbl">Outreach Channels</div>
      <h2>One platform.<br><span class="blue">Every channel.</span></h2>
      <p>Sophia selects the right channel, right message, right moment &mdash; coordinating all four simultaneously for maximum reach and response.</p>
    </div>
    <div class="ch-grid fu d1">

      <div class="ch-card">
        <div class="ch-bar" style="background:#0077B5;"></div>
        <div class="ch-icon-wrap">
          <!-- LinkedIn — precise "in" logotype on brand blue -->
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="28" height="28" rx="6" fill="#0077B5"/>
            <!-- left column + dot -->
            <rect x="6" y="12" width="3.5" height="10" fill="white"/>
            <circle cx="7.75" cy="8.75" r="2" fill="white"/>
            <!-- right column with elbow -->
            <path d="M13 12h3v1.6c.6-1 1.8-1.8 3.2-1.8 2.8 0 4 1.7 4 4.6V22h-3.5v-4.8c0-1.5-.5-2.4-1.8-2.4-1.3 0-2.1.9-2.1 2.6V22H13V12Z" fill="white"/>
          </svg>
        </div>
        <div class="ch-name">LinkedIn</div>
        <p class="ch-desc">Connection requests, InMail, and profile engagement &mdash; orchestrated for warm professional outreach that builds real pipeline.</p>
        <span class="ch-badge">High Intent</span>
      </div>

      <div class="ch-card">
        <div class="ch-bar" style="background:#EA4335;"></div>
        <div class="ch-icon-wrap">
          <!-- Gmail-style multicolor envelope -->
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="28" height="28" rx="6" fill="#fff"/>
            <!-- envelope body -->
            <path d="M4 9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9Z" fill="#fff" stroke="#E5E7EB" stroke-width="1"/>
            <!-- Gmail M-shape flap -->
            <path d="M4 9l5.5 5L14 10.5 18.5 14 24 9" fill="none" stroke="#EA4335" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
            <!-- coloured left triangle -->
            <path d="M4 9v12l5.5-6.5L4 9Z" fill="#FBBC04" opacity=".8"/>
            <!-- coloured right triangle -->
            <path d="M24 9v12l-5.5-6.5L24 9Z" fill="#34A853" opacity=".8"/>
          </svg>
        </div>
        <div class="ch-name">Email</div>
        <p class="ch-desc">AI-personalized sequences sent from your actual Gmail or Outlook inbox. Sophia writes, schedules, tracks opens, and follows up.</p>
        <span class="ch-badge">High Volume</span>
      </div>

      <div class="ch-card">
        <div class="ch-bar" style="background:#059669;"></div>
        <div class="ch-icon-wrap">
          <!-- SMS — clean speech bubble with text lines -->
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="28" height="28" rx="6" fill="#059669"/>
            <path d="M5 7h18a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-14l-5 3V8a1 1 0 0 1 1-1Z" fill="rgba(255,255,255,0.18)" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M9 12.5h10M9 16h7" stroke="white" stroke-width="1.6" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="ch-name">SMS</div>
        <p class="ch-desc">Direct, precisely-timed text outreach via Twilio. Cut through inbox noise with a channel that delivers 98% open rates.</p>
        <span class="ch-badge">98% Open Rate</span>
      </div>

      <div class="ch-card">
        <div class="ch-bar" style="background:#25D366;"></div>
        <div class="ch-icon-wrap">
          <!-- WhatsApp — brand green with phone-in-bubble icon -->
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="28" height="28" rx="6" fill="#25D366"/>
            <!-- bubble outline -->
            <path d="M14 4C8.48 4 4 8.48 4 14c0 1.94.56 3.75 1.52 4.28L4 24l5.82-1.48A9.95 9.95 0 0 0 14 24c5.52 0 10-4.48 10-10S19.52 4 14 4Z" fill="rgba(255,255,255,.15)" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
            <!-- handset path -->
            <path d="M11 10.5c.1 0 .5.6.7 1s-.2.8-.4 1.1c-.1.2 0 .4.2.6.5.9 1.4 1.7 2.4 2.1.3.1.5 0 .7-.2.2-.3.5-.8.8-.7.3.1 1.2.6 1.4.8.2.2.1.8-.2 1.2-.4.5-1.2.7-1.8.5-1.8-.6-4-2.8-4.5-4.4-.2-.6 0-1.4.3-1.8.1-.2.2-.2.4-.2Z" fill="white"/>
          </svg>
        </div>
        <div class="ch-name">WhatsApp</div>
        <p class="ch-desc">Reach global prospects on the world's most-used messaging app. Rich media, conversational AI, real-time response handling.</p>
        <span class="ch-badge">High Engagement</span>
      </div>

    </div>
  </div>
</section>

<!-- ═══════════ WORKFLOW CAPABILITIES ═══════════ -->
<section id="or-capabilities" class="wf-sec">
  <div class="con">
    <div class="sec-head fu">
      <div class="lbl">What Sophia Does</div>
      <h2>Every step.<br><span class="blue">Automated.</span></h2>
      <p>From first research to booked meeting &mdash; Sophia handles the entire workflow so your team focuses on closing deals.</p>
    </div>
    <div class="wf-grid fu d1">

      <?php
      $wf_cards = [
        ['Research',      'Company Targeting',       'Define your ICP once. Sophia continuously discovers matching companies across Apollo and PDL, filtered by industry, size, location, and revenue.',                                                                '50M+',     'companies indexed'],
        ['AI',            'Deep Intel Reports',       '4-agent pipeline produces full company profiles: pain points, buying signals, key contacts, funding stage, recent news, and outreach angles.',                                                                    '4',        'AI agents per company'],
        ['Personalization','Message Personalization', 'Every message references the contact\'s specific LinkedIn activity, company news, and your offering &mdash; making cold outreach feel warm.',                                                                     '3x',       'higher reply rates'],
        ['Sequences',     'Multi-Channel Sequences',  'LangGraph orchestrates 5-phase sequences with configurable delays and approval gates. You review before anything sends.',                                                                                         '5',        'channel sequence phases'],
        ['Intelligence',  'Reply Detection',          'Sophia monitors replies across all channels, classifies intent (interested / not now / wrong person), and drafts the perfect follow-up.',                                                                         '&lt; 5min','reply classification'],
        ['Pipeline',      'CRM Pipeline Tracking',    'Every interaction is logged. Contacts flow through Research &rarr; Outreach &rarr; Nurture &rarr; Closed stages with conversion metrics at each step.',                                                          'Real-time','pipeline updates'],
      ];
      foreach ($wf_cards as $c): ?>
      <div class="wf-card">
        <div class="wf-top">
          <div class="wf-icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="#1E3DB4" stroke-width="1.3" opacity=".6"/><circle cx="9" cy="9" r="3" fill="#1E3DB4" opacity=".4"/></svg>
          </div>
          <span class="wf-badge"><?php echo esc_html($c[0]); ?></span>
        </div>
        <div class="wf-title"><?php echo esc_html($c[1]); ?></div>
        <p class="wf-desc"><?php echo $c[2]; ?></p>
        <div class="wf-stat">
          <span class="wf-stat-n"><?php echo $c[3]; ?></span>
          <span class="wf-stat-l"><?php echo esc_html($c[4]); ?></span>
        </div>
      </div>
      <?php endforeach; ?>

    </div>
  </div>
</section>

<!-- ═══════════ PROOF METRICS ═══════════ -->
<section class="proof-sec">
  <div class="con">
    <div class="sec-head fu">
      <div class="lbl">Proven Results</div>
      <h2>Numbers that <span class="blue">speak.</span></h2>
    </div>
    <div class="proof-grid fu d1">
      <div class="pg-item"><div class="pg-n">12k+</div><div class="pg-l">Companies researched</div></div>
      <div class="pg-item"><div class="pg-n">84k+</div><div class="pg-l">Contacts enriched</div></div>
      <div class="pg-item"><div class="pg-n">8,400+</div><div class="pg-l">Meetings booked</div></div>
      <div class="pg-item"><div class="pg-n">38%</div><div class="pg-l">Average reply rate</div></div>
    </div>
  </div>
</section>

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
          <div class="pcc-icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 1.5l2 5h5l-4.1 3.1 1.6 5-4.5-2.8-4.5 2.8 1.6-5L2 6.5h5L9 1.5Z" stroke="#1E3DB4" stroke-width="1.5" stroke-linejoin="round"/></svg>
          </div>
          <div><div class="pcc-n">500</div><div class="pcc-l">credits / month</div></div>
        </div>
        <div class="pc-div"></div>
        <ul class="pc-feats">
          <?php foreach (['Up to 2 users','Sophia AI &mdash; all 4 channels','Research &rarr; Outreach &rarr; Nurture','1 workspace &middot; Discovery research','Buy credit top-up packs anytime'] as $f): ?>
          <li>
            <div class="plan-chk"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="#059669" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            <?php echo $f; ?>
          </li>
          <?php endforeach; ?>
          <?php foreach (['Team credit allocation','Command Center'] as $f): ?>
          <li>
            <div class="plan-no-chk"><svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M2 2l5 5M7 2l-5 5" stroke="#aaa" stroke-width="1.3"/></svg></div>
            <span style="opacity:.45;"><?php echo esc_html($f); ?></span>
          </li>
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
          <span class="sr-lbl" style="font-size:12.5px;font-weight:600;color:rgba(255,255,255,.7);">Team size</span>
          <div style="display:flex;align-items:center;gap:10px;">
            <button class="sr-minus" style="width:28px;height:28px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:600;cursor:pointer;background:rgba(255,255,255,.2);color:#fff;border:1px solid rgba(255,255,255,.25);">&#8722;</button>
            <span class="sr-val" style="font-size:17px;font-weight:800;min-width:24px;text-align:center;color:#fff;">1</span>
            <button class="sr-plus" style="width:28px;height:28px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:600;cursor:pointer;background:rgba(255,255,255,.2);color:#fff;border:1px solid rgba(255,255,255,.25);">+</button>
          </div>
          <span style="font-size:12px;color:rgba(255,255,255,.5);">up to 25 seats</span>
        </div>
        <div class="pc-credits">
          <div class="pcc-icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 1.5l2 5h5l-4.1 3.1 1.6 5-4.5-2.8-4.5 2.8 1.6-5L2 6.5h5L9 1.5Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/></svg>
          </div>
          <div><div class="pcc-n" data-seat-credits>2,500</div><div class="pcc-l">credits / month</div></div>
        </div>
        <div class="pc-div"></div>
        <ul class="pc-feats">
          <?php foreach (['Everything in Startup','3&ndash;25 users &middot; $100/user/mo','Full Command Center access','All research tiers incl. Deep Intel','Team credit budgets &amp; allocation','Unlimited workspaces','Priority support &middot; Stripe billing'] as $f): ?>
          <li>
            <div class="plan-chk"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            <?php echo $f; ?>
          </li>
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
          <div class="pcc-icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 1.5l2 5h5l-4.1 3.1 1.6 5-4.5-2.8-4.5 2.8 1.6-5L2 6.5h5L9 1.5Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/></svg>
          </div>
          <div><div class="pcc-n">Unlimited</div><div class="pcc-l">credits &middot; custom allocation</div></div>
        </div>
        <div class="pc-div"></div>
        <ul class="pc-feats">
          <?php foreach (['Everything in Growth','25+ users &middot; unlimited seats','CRM integrations (Salesforce, HubSpot)','Custom API + webhook integrations','Dedicated AI capacity + fine-tuning','99.9% SLA &middot; dedicated support manager','Custom onboarding &amp; team training'] as $f): ?>
          <li>
            <div class="plan-chk"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            <?php echo $f; ?>
          </li>
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

      <!-- Left: action costs -->
      <div class="fu">
        <div class="lbl lbl-l" style="margin-bottom:18px;">What Each Action Costs</div>
        <div class="action-list">

          <div class="al-row">
            <div class="al-icon" style="background:#EEF2FF;">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="7" cy="7" r="4.5" stroke="#1E3DB4" stroke-width="1.5"/><path d="M10.5 10.5L14 14" stroke="#1E3DB4" stroke-width="1.5" stroke-linecap="round"/></svg>
            </div>
            <div class="al-body"><div class="al-name">Company Search</div><div class="al-desc">Apollo org search &mdash; find companies matching your ICP</div></div>
            <span class="al-cost">1 credit</span>
          </div>

          <div class="al-row">
            <div class="al-icon" style="background:rgba(8,145,178,.08);">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 5.5h14v9a.5.5 0 0 1-.5.5H2.5a.5.5 0 0 1-.5-.5V5.5Z" stroke="#0891B2" stroke-width="1.5"/><path d="M2 5.5l7 5.5 7-5.5" stroke="#0891B2" stroke-width="1.5" stroke-linecap="round"/></svg>
            </div>
            <div class="al-body"><div class="al-name">AI Message Draft</div><div class="al-desc">Personalized message for any channel &mdash; LinkedIn, Email, SMS, WhatsApp</div></div>
            <span class="al-cost">2 credits</span>
          </div>

          <div class="al-row">
            <div class="al-icon" style="background:rgba(5,150,105,.08);">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="7" r="3" stroke="#059669" stroke-width="1.5"/><path d="M3 16c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#059669" stroke-width="1.5" stroke-linecap="round"/></svg>
            </div>
            <div class="al-body"><div class="al-name">Contact Reveal</div><div class="al-desc">Verified email + phone + LinkedIn for one contact (Apollo / PDL)</div></div>
            <span class="al-cost">5 credits</span>
          </div>

          <div class="al-row" style="border-color:rgba(30,61,180,.18);background:#F5F7FF;">
            <div class="al-icon" style="background:#EEF2FF;">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="7.5" cy="7.5" r="4" stroke="#1E3DB4" stroke-width="1.5"/><path d="M10.5 10.5L14 14" stroke="#1E3DB4" stroke-width="1.5" stroke-linecap="round"/><path d="M6 7.5H9M7.5 6v3" stroke="#1E3DB4" stroke-width="1.3" stroke-linecap="round"/></svg>
            </div>
            <div class="al-body"><div class="al-name">Snapshot Research</div><div class="al-desc">Quick company profile &mdash; overview, key contacts, data points</div></div>
            <span class="al-cost">5 credits</span>
          </div>

          <div class="al-row" style="border-color:rgba(30,61,180,.18);background:#F5F7FF;">
            <div class="al-icon" style="background:#EEF2FF;">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="2" width="14" height="14" rx="2.5" stroke="#1E3DB4" stroke-width="1.5"/><path d="M2 7h14" stroke="#1E3DB4" stroke-width="1.2"/><path d="M6 11h6M6 13h4" stroke="#1E3DB4" stroke-width="1.2" stroke-linecap="round"/></svg>
            </div>
            <div class="al-body"><div class="al-name">Profiler Research</div><div class="al-desc">Full company profile: pain points, initiatives, outreach intel per contact</div></div>
            <span class="al-cost">20 credits</span>
          </div>

          <div class="al-row" style="border-color:rgba(124,58,237,.2);background:rgba(124,58,237,.03);">
            <div class="al-icon" style="background:rgba(124,58,237,.08);">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="3" stroke="#7C3AED" stroke-width="1.4"/><circle cx="9" cy="2.5" r="1.5" stroke="#7C3AED" stroke-width="1.2"/><circle cx="9" cy="15.5" r="1.5" stroke="#7C3AED" stroke-width="1.2"/><circle cx="2.5" cy="9" r="1.5" stroke="#7C3AED" stroke-width="1.2"/><circle cx="15.5" cy="9" r="1.5" stroke="#7C3AED" stroke-width="1.2"/></svg>
            </div>
            <div class="al-body"><div class="al-name">Deep Intel Research</div><div class="al-desc">Full 4-agent pipeline: Perplexity + Apollo + GPT-4o synthesis + full outreach brief</div></div>
            <span class="al-cost-violet">100 credits</span>
          </div>

        </div>
      </div>

      <!-- Right: research tiers + math box -->
      <div class="fu d2">
        <div class="lbl lbl-l" style="margin-bottom:18px;">Research Tiers</div>
        <div class="rtiers">

          <div class="rt">
            <div class="rt-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="8" cy="8" r="5" stroke="#1E3DB4" stroke-width="1.5"/><path d="M12 12l4 4" stroke="#1E3DB4" stroke-width="1.5" stroke-linecap="round"/></svg></div>
            <div><div class="rt-name">Discovery</div><div class="rt-desc">Company + contact overview. Quick qualify.</div></div>
            <span class="rt-free">Free</span>
          </div>

          <div class="rt">
            <div class="rt-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="8" cy="8" r="5" stroke="#1E3DB4" stroke-width="1.5"/><path d="M12 12l4 4" stroke="#1E3DB4" stroke-width="1.5" stroke-linecap="round"/><path d="M8 5.5V8h2.5" stroke="#1E3DB4" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            <div><div class="rt-name">Snapshot</div><div class="rt-desc">Key company data, pain points, primary contacts.</div></div>
            <span class="rt-pill">5 credits</span>
          </div>

          <div class="rt">
            <div class="rt-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="14" height="14" rx="2.5" stroke="#1E3DB4" stroke-width="1.5"/><path d="M3 8h14" stroke="#1E3DB4" stroke-width="1.2"/><path d="M7 12h6M7 14.5h4" stroke="#1E3DB4" stroke-width="1.2" stroke-linecap="round"/></svg></div>
            <div><div class="rt-name">Profiler</div><div class="rt-desc">Full profile, org chart, initiatives &amp; outreach intel.</div></div>
            <span class="rt-pill">20 credits</span>
          </div>

          <div class="rt rt-feat">
            <div class="rt-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="3" stroke="white" stroke-width="1.5"/><circle cx="10" cy="3.5" r="1.5" stroke="white" stroke-width="1.2"/><circle cx="10" cy="16.5" r="1.5" stroke="white" stroke-width="1.2"/><circle cx="3.5" cy="10" r="1.5" stroke="white" stroke-width="1.2"/><circle cx="16.5" cy="10" r="1.5" stroke="white" stroke-width="1.2"/></svg></div>
            <div><div class="rt-name">Deep Intel</div><div class="rt-desc">4-agent pipeline. News, signals, decision-makers, talking points.</div></div>
            <span class="rt-pill">100 credits</span>
          </div>

        </div>

        <div class="math-box">
          <div class="math-title">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#1E3DB4" stroke-width="1.3"/><path d="M7 6v4M7 4.5v.5" stroke="#1E3DB4" stroke-width="1.3" stroke-linecap="round"/></svg>
            Growth plan &mdash; 5 users = 12,500 credits/month
          </div>
          <?php
          $math_rows = [
            ['125 Deep Intel research reports','or'],
            ['625 Profiler research reports','or'],
            ['2,500 contact reveals','or'],
            ['6,250 AI message drafts','or'],
            ['Any mix of the above','&#10003;'],
          ];
          foreach ($math_rows as $row): ?>
          <div class="math-row"><span><?php echo esc_html($row[0]); ?></span><span><?php echo $row[1]; ?></span></div>
          <?php endforeach; ?>
        </div>
      </div>

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
        [
          'What exactly is a credit?',
          '1 credit = $0.01. Every credit maps to a specific action Sophia performs &mdash; not AI compute time. Company search = 1 credit, message draft = 2 credits, contact reveal = 5 credits, Deep Intel research = 100 credits. You always know exactly what you&rsquo;re spending.',
        ],
        [
          'Do credits roll over or expire?',
          'Monthly plan credits reset each billing cycle &mdash; they don&rsquo;t roll over. But top-up pack credits never expire. They stack on top of your monthly allowance and are always used last, so buy a pack to make sure capacity never goes to waste.',
        ],
        [
          'How does the seat count work on Growth?',
          'Growth is $100 per user per month &mdash; from 3 users up to 25. Each user gets 2,500 credits/month included. At 25 users ($2,500/month) you get 62,500 credits. Once your team exceeds 25 users, talk to us about an Enterprise plan.',
        ],
        [
          'Can Startup users buy top-up packs?',
          'Yes &mdash; top-up packs are available on every plan including the free Startup tier. Start free with 500 credits, explore Sophia, and buy a pack whenever you need more capacity without upgrading your plan.',
        ],
        [
          'What happens when credits run out?',
          'Sophia pauses credit-consuming actions (research, drafts, contact reveals) until your balance is topped up. No data is lost, no sequences are deleted &mdash; everything resumes the moment you add credits. Top-up packs activate instantly.',
        ],
        [
          'Can I change my plan or cancel anytime?',
          'Yes &mdash; upgrade or downgrade anytime from your Stripe billing portal. Upgrades take effect immediately (prorated). Downgrades take effect at the end of your billing period. No contracts, no cancellation fees.',
        ],
      ];
      foreach ($faqs as $faq): ?>
      <div class="faq-card">
        <div class="faq-q">
          <span><?php echo esc_html($faq[0]); ?></span>
          <div class="faq-ico">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 4.5L5 7l2.5-2.5M5 2v5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
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
        <a href="<?php echo $login_url; ?>" class="btn-ow">Sign In</a>
      </div>
    </div>
  </div>
</section>

</div><!-- /.or-wrap -->
