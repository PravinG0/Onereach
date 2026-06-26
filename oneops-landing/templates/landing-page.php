<?php
/**
 * OneOps Landing Page Template
 * Rendered by the [oneops_landing] shortcode.
 * Do not call directly.
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }
?>
<div class="oneops-wrap">

<!-- ═══════════ HERO ═══════════ -->
<section class="hero">
  <div class="hero-bg-ring" style="width:900px;height:900px;right:-400px;top:50%;transform:translateY(-50%);"></div>
  <div class="hero-bg-ring" style="width:600px;height:600px;right:-200px;top:50%;transform:translateY(-50%);"></div>
  <div class="hero-inner">
    <div>
      <div class="hero-label animate-fadeup">
        <span class="hero-label-line"></span>
        Enterprise AI Operations
      </div>
      <h1 class="hero-h1 animate-fadeup delay-1">
        Every AI key.<br>Every team.<br>
        <strong>One platform.</strong>
      </h1>
      <p class="hero-sub animate-fadeup delay-2">
        OneOps is the control plane for enterprise AI. Manage keys, track spend by team and person, enforce budgets, and govern access across every AI model your company uses.
      </p>
      <div class="hero-actions animate-fadeup delay-3">
        <a href="https://oneops.pro/login" class="btn-hero-primary">
          Book a demo
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><line x1="3" y1="8" x2="13" y2="8" stroke="white" stroke-width="1.8" stroke-linecap="round"/><polyline points="9,4 13,8 9,12" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
        <a href="#oneops-features" class="btn-hero-ghost">See how it works</a>
      </div>
      <div class="hero-trust animate-fadeup delay-4">
        <span class="trust-label">Trusted by teams at</span>
        <div class="trust-logos">
          <span class="trust-logo">Acme Corp</span>
          <span class="trust-logo">Nexus AI</span>
          <span class="trust-logo">Meridian</span>
          <span class="trust-logo">Vortex Labs</span>
        </div>
      </div>
    </div>

    <!-- Dashboard Mockup -->
    <div class="hero-dashboard animate-fadeup delay-3">
      <div class="dashboard-frame">
        <div class="dash-topbar">
          <div class="dash-dots">
            <div class="dash-dot" style="background:#5A4A52;"></div>
            <div class="dash-dot" style="background:#5A4A52;"></div>
            <div class="dash-dot" style="background:#5A4A52;"></div>
          </div>
          <div class="dash-title">ONEOPS DASHBOARD</div>
          <div style="width:48px;"></div>
        </div>
        <div class="dash-layout">
          <div class="dash-sidebar">
            <div class="dash-nav-item active"><div class="dash-nav-dot"></div> Dashboard</div>
            <div class="dash-nav-item"><div class="dash-nav-dot"></div> API Keys</div>
            <div class="dash-nav-item"><div class="dash-nav-dot"></div> Teams</div>
            <div class="dash-nav-item"><div class="dash-nav-dot"></div> Spend</div>
            <div class="dash-nav-item"><div class="dash-nav-dot"></div> Members</div>
            <div class="dash-nav-item"><div class="dash-nav-dot"></div> Knowledge</div>
            <div style="margin:16px 12px 8px;padding:10px 12px;background:rgba(194,59,46,0.15);border-radius:6px;">
              <div style="font-size:8px;color:rgba(240,232,229,0.3);text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">Budget</div>
              <div style="font-size:13px;font-weight:600;color:#F0E8E5;font-family:'Montserrat',sans-serif;margin-bottom:6px;">82%</div>
              <div style="height:3px;background:rgba(255,255,255,0.1);border-radius:2px;overflow:hidden;">
                <div style="width:82%;height:100%;background:#E88A4A;border-radius:2px;"></div>
              </div>
              <div style="font-size:8px;color:#E88A4A;margin-top:4px;">9 days left</div>
            </div>
          </div>
          <div class="dash-main">
            <div class="dash-metrics">
              <div class="dash-metric">
                <div class="dash-metric-label">Total Spend</div>
                <div class="dash-metric-val">$8,240</div>
                <div class="dash-metric-sub">+12% vs Apr</div>
              </div>
              <div class="dash-metric">
                <div class="dash-metric-label">Active Keys</div>
                <div class="dash-metric-val">14</div>
                <div class="dash-metric-sub warn">2 expiring</div>
              </div>
              <div class="dash-metric">
                <div class="dash-metric-label">Members</div>
                <div class="dash-metric-val">23</div>
                <div class="dash-metric-sub">4 teams</div>
              </div>
            </div>
            <div class="dash-card">
              <div class="dash-card-title">Team Spend</div>
              <div class="dash-team-row">
                <div class="dash-team-name">Dev</div>
                <div class="dash-bar-track"><div class="dash-bar-fill" style="width:75%;background:#4f6ef7;"></div></div>
                <div class="dash-team-amt">$3.2k</div>
              </div>
              <div class="dash-team-row">
                <div class="dash-team-name">Mktg</div>
                <div class="dash-bar-track"><div class="dash-bar-fill" style="width:52%;background:#22c55e;"></div></div>
                <div class="dash-team-amt">$2.2k</div>
              </div>
              <div class="dash-team-row">
                <div class="dash-team-name">Sales</div>
                <div class="dash-bar-track"><div class="dash-bar-fill" style="width:38%;background:#f59e0b;"></div></div>
                <div class="dash-team-amt">$1.6k</div>
              </div>
              <div class="dash-team-row">
                <div class="dash-team-name">Ops</div>
                <div class="dash-bar-track"><div class="dash-bar-fill" style="width:18%;background:#a78bfa;"></div></div>
                <div class="dash-team-amt">$760</div>
              </div>
            </div>
            <div class="dash-card">
              <div class="dash-card-title">API Keys</div>
              <div class="dash-key-row">
                <div class="dash-key-name">Claude Sonnet 4</div>
                <div class="dash-key-code">sk-ant-...4f2a</div>
                <div class="dash-badge active">Active</div>
              </div>
              <div class="dash-key-row">
                <div class="dash-key-name">Gemini 1.5 Pro</div>
                <div class="dash-key-code">AIza...8xKj</div>
                <div class="dash-badge warn">Expiring</div>
              </div>
              <div class="dash-key-row">
                <div class="dash-key-name">GPT-4o</div>
                <div class="dash-key-code">sk-...9aBc</div>
                <div class="dash-badge warn">Expiring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════ STATS ═══════════ -->
<div class="stats-strip">
  <div class="stats-inner">
    <div class="stat-item">
      <div class="stat-num"><b>40</b>+</div>
      <div class="stat-label">AI providers supported</div>
    </div>
    <div class="stat-item">
      <div class="stat-num"><b>100</b>%</div>
      <div class="stat-label">key-level visibility</div>
    </div>
    <div class="stat-item">
      <div class="stat-num"><b>0</b></div>
      <div class="stat-label">keys living in Slack or Notion</div>
    </div>
    <div class="stat-item">
      <div class="stat-num"><b>1</b></div>
      <div class="stat-label">platform to manage them all</div>
    </div>
  </div>
</div>

<!-- ═══════════ PROBLEM ═══════════ -->
<section class="section section-alt">
  <div class="container">
    <div class="section-eyebrow">The problem</div>
    <h2 class="section-h2">Your teams are using 12 AI tools.<br><b>You have no idea who authorized half of them.</b></h2>
    <div class="problem-grid">
      <div class="problem-card">
        <div class="problem-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C23B2E" stroke-width="2" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        </div>
        <div class="problem-title">Keys scattered everywhere</div>
        <div class="problem-body">API keys living in Slack threads, Notion pages, and engineers' .env files. No rotation schedule, no audit trail, no visibility into who has what.</div>
      </div>
      <div class="problem-card">
        <div class="problem-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C23B2E" stroke-width="2" stroke-linecap="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        </div>
        <div class="problem-title">Spend is a complete mystery</div>
        <div class="problem-body">You get a $14,000 invoice from Anthropic at month-end and spend two days piecing together which team burned it &ndash; with no person-level breakdown anywhere.</div>
      </div>
      <div class="problem-card">
        <div class="problem-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C23B2E" stroke-width="2" stroke-linecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <div class="problem-title">Zero access governance</div>
        <div class="problem-body">Marketing has access to the same models as your infrastructure team &ndash; no usage policies, no budget limits, no offboarding process when someone leaves.</div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════ FEATURES ═══════════ -->
<section class="section" id="oneops-features">
  <div class="container">
    <div class="section-eyebrow">What OneOps does</div>
    <h2 class="section-h2" style="margin-bottom:64px;">Everything your AI operations team needs<br><b>in one dashboard.</b></h2>

    <!-- Feature 1 — Key Vault -->
    <div class="features-layout">
      <div class="feature-visual">
        <div class="feature-screen">
          <div style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#C23B2E;margin-bottom:16px;">API Key Vault</div>
          <div class="kv-wrap">
          <table class="kv-table">
            <thead>
              <tr>
                <th>Key / Provider</th>
                <th>Team</th>
                <th>Monthly</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="kv-key-name">Claude Sonnet 4</div>
                  <div class="kv-key-code">sk-ant-...4f2a</div>
                </td>
                <td class="kv-team">Development</td>
                <td class="kv-amount">$1,840</td>
                <td><span class="kv-badge kv-active">Active</span></td>
              </tr>
              <tr class="kv-row-warn">
                <td>
                  <div class="kv-key-name">Gemini 1.5 Pro</div>
                  <div class="kv-key-code">AIza...8xKj</div>
                </td>
                <td class="kv-team">Marketing</td>
                <td class="kv-amount">$1,490</td>
                <td><span class="kv-badge kv-expiring">Expiring</span></td>
              </tr>
              <tr>
                <td>
                  <div class="kv-key-name">Bedrock Titan</div>
                  <div class="kv-key-code">AKIA...7P3M</div>
                </td>
                <td class="kv-team">Development</td>
                <td class="kv-amount">$1,340</td>
                <td><span class="kv-badge kv-active">Active</span></td>
              </tr>
            </tbody>
          </table>
          </div>
          <div class="kv-alert">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 1.5L1.5 13.5h13L8 1.5z" stroke="#991B1B" stroke-width="1.5" stroke-linejoin="round"/><line x1="8" y1="6.5" x2="8" y2="10" stroke="#991B1B" stroke-width="1.5" stroke-linecap="round"/><circle cx="8" cy="12" r=".8" fill="#991B1B"/></svg>
            Gemini key expires in 6 days &ndash; <strong>renew now</strong>
          </div>
        </div>
      </div>
      <div>
        <div class="feature-eyebrow">01 &ndash; Key Vault</div>
        <h3 class="feature-title">One vault for every<br><b>AI key you own</b></h3>
        <p class="feature-body">Centrally store, rotate, and monitor API keys for Claude, Gemini, OpenAI, Bedrock, Groq, Mistral, and 40+ other providers. No more keys scattered across .env files and Slack threads.</p>
        <div class="feature-checks">
          <div class="feature-check">
            <div class="check-icon"><svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#C23B2E" stroke-width="2" stroke-linecap="round"><polyline points="2,6 5,9 10,3"/></svg></div>
            Expiry alerts at 14, 7, and 3 days &ndash; Slack + email
          </div>
          <div class="feature-check">
            <div class="check-icon"><svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#C23B2E" stroke-width="2" stroke-linecap="round"><polyline points="2,6 5,9 10,3"/></svg></div>
            Full audit log of every key action &ndash; who touched what, when
          </div>
          <div class="feature-check">
            <div class="check-icon"><svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#C23B2E" stroke-width="2" stroke-linecap="round"><polyline points="2,6 5,9 10,3"/></svg></div>
            One-click rotation without cycling the underlying provider key
          </div>
        </div>
      </div>
    </div>

    <!-- Feature 2 — Spend Tracking -->
    <div class="features-layout reverse">
      <div>
        <div class="feature-eyebrow">02 &ndash; Spend Tracking</div>
        <h3 class="feature-title">Know exactly what<br><b>AI costs &ndash; and who.</b></h3>
        <p class="feature-body">Track spending by provider, model, team, and individual member in real time. Set monthly budgets with hard caps. No more end-of-month invoice surprises.</p>
        <div class="feature-checks">
          <div class="feature-check">
            <div class="check-icon"><svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#C23B2E" stroke-width="2" stroke-linecap="round"><polyline points="2,6 5,9 10,3"/></svg></div>
            Per-person spend attribution &ndash; every API call tracked to a name
          </div>
          <div class="feature-check">
            <div class="check-icon"><svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#C23B2E" stroke-width="2" stroke-linecap="round"><polyline points="2,6 5,9 10,3"/></svg></div>
            Budget alerts at 50%, 75%, 90% &ndash; soft or hard caps
          </div>
          <div class="feature-check">
            <div class="check-icon"><svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#C23B2E" stroke-width="2" stroke-linecap="round"><polyline points="2,6 5,9 10,3"/></svg></div>
            Export spend reports for finance chargebacks
          </div>
        </div>
      </div>
      <div class="feature-visual">
        <div class="feature-screen">
          <div style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#B0A0A6;margin-bottom:16px;">Team Spend &ndash; May 2025</div>
          <div style="display:flex;flex-direction:column;gap:14px;">
            <div>
              <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
                <div style="display:flex;align-items:center;gap:8px;"><div style="width:8px;height:8px;border-radius:2px;background:#4f6ef7;"></div><span style="font-size:13px;font-weight:600;color:#3A2E35;">Development</span></div>
                <span style="font-size:13px;font-weight:600;color:#3A2E35;">$3,180</span>
              </div>
              <div style="height:8px;background:#EDE6E4;border-radius:4px;overflow:hidden;"><div style="width:75%;height:100%;background:#4f6ef7;border-radius:4px;"></div></div>
            </div>
            <div>
              <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
                <div style="display:flex;align-items:center;gap:8px;"><div style="width:8px;height:8px;border-radius:2px;background:#22c55e;"></div><span style="font-size:13px;font-weight:600;color:#3A2E35;">Marketing</span></div>
                <span style="font-size:13px;font-weight:600;color:#3A2E35;">$2,210</span>
              </div>
              <div style="height:8px;background:#EDE6E4;border-radius:4px;overflow:hidden;"><div style="width:52%;height:100%;background:#22c55e;border-radius:4px;"></div></div>
            </div>
            <div>
              <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
                <div style="display:flex;align-items:center;gap:8px;"><div style="width:8px;height:8px;border-radius:2px;background:#f59e0b;"></div><span style="font-size:13px;font-weight:600;color:#3A2E35;">Sales</span></div>
                <span style="font-size:13px;font-weight:600;color:#3A2E35;">$1,620</span>
              </div>
              <div style="height:8px;background:#EDE6E4;border-radius:4px;overflow:hidden;"><div style="width:38%;height:100%;background:#f59e0b;border-radius:4px;"></div></div>
            </div>
            <div>
              <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
                <div style="display:flex;align-items:center;gap:8px;"><div style="width:8px;height:8px;border-radius:2px;background:#a78bfa;"></div><span style="font-size:13px;font-weight:600;color:#3A2E35;">Operations</span></div>
                <span style="font-size:13px;font-weight:600;color:#3A2E35;">$760</span>
              </div>
              <div style="height:8px;background:#EDE6E4;border-radius:4px;overflow:hidden;"><div style="width:18%;height:100%;background:#a78bfa;border-radius:4px;"></div></div>
            </div>
          </div>
          <div style="margin-top:20px;display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <div style="padding:14px;background:#F7F2F0;border-radius:8px;">
              <div style="font-size:10px;text-transform:uppercase;letter-spacing:.06em;color:#B0A0A6;margin-bottom:4px;">Total</div>
              <div style="font-family:'Montserrat',sans-serif;font-size:22px;font-weight:200;color:#3A2E35;">$8,240</div>
              <div style="font-size:11px;color:#22c55e;margin-top:2px;">+12% vs Apr</div>
            </div>
            <div style="padding:14px;background:#FFF8F6;border:1px solid #F5C0BB;border-radius:8px;">
              <div style="font-size:10px;text-transform:uppercase;letter-spacing:.06em;color:#B0A0A6;margin-bottom:4px;">Forecast</div>
              <div style="font-family:'Montserrat',sans-serif;font-size:22px;font-weight:200;color:#3A2E35;">$9,820</div>
              <div style="font-size:11px;color:#E65100;margin-top:2px;">82% of budget</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Feature 3 — Access Control -->
    <div class="features-layout">
      <div class="feature-visual">
        <div class="feature-screen">
          <div style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#B0A0A6;margin-bottom:16px;">Team Access Control</div>
          <div style="display:flex;flex-direction:column;gap:10px;">
            <div style="padding:16px;border:1px solid #EDE6E4;border-radius:10px;border-left:3px solid #4f6ef7;">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
                <div style="display:flex;align-items:center;gap:8px;">
                  <div style="width:28px;height:28px;background:#EFF3FF;border-radius:6px;display:flex;align-items:center;justify-content:center;font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;color:#4f6ef7;">DEV</div>
                  <div style="font-size:13px;font-weight:600;color:#3A2E35;">Development</div>
                </div>
                <div style="font-size:12px;color:#6A5A60;">8 members</div>
              </div>
              <div style="display:flex;gap:6px;flex-wrap:wrap;">
                <div style="font-size:10px;font-weight:600;background:#EFF3FF;color:#3552C0;padding:3px 8px;border-radius:10px;">Claude Sonnet 4</div>
                <div style="font-size:10px;font-weight:600;background:#FFF4E5;color:#B36200;padding:3px 8px;border-radius:10px;">Bedrock Titan</div>
                <div style="font-size:10px;font-weight:600;background:#EFF3FF;color:#3552C0;padding:3px 8px;border-radius:10px;">Claude Haiku</div>
              </div>
            </div>
            <div style="padding:16px;border:1px solid #EDE6E4;border-radius:10px;border-left:3px solid #22c55e;">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
                <div style="display:flex;align-items:center;gap:8px;">
                  <div style="width:28px;height:28px;background:#F0FDF4;border-radius:6px;display:flex;align-items:center;justify-content:center;font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;color:#16a34a;">MAR</div>
                  <div style="font-size:13px;font-weight:600;color:#3A2E35;">Marketing</div>
                </div>
                <div style="font-size:12px;color:#6A5A60;">6 members</div>
              </div>
              <div style="display:flex;gap:6px;flex-wrap:wrap;">
                <div style="font-size:10px;font-weight:600;background:#F0FDF4;color:#166534;padding:3px 8px;border-radius:10px;">Gemini 1.5 Pro</div>
                <div style="font-size:10px;font-weight:600;background:#F0FDF4;color:#166534;padding:3px 8px;border-radius:10px;">Gemini Flash</div>
              </div>
            </div>
            <div style="padding:16px;border:1px solid #EDE6E4;border-radius:10px;border-left:3px solid #f59e0b;">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
                <div style="display:flex;align-items:center;gap:8px;">
                  <div style="width:28px;height:28px;background:#FEFCE8;border-radius:6px;display:flex;align-items:center;justify-content:center;font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;color:#ca8a04;">SAL</div>
                  <div style="font-size:13px;font-weight:600;color:#3A2E35;">Sales</div>
                </div>
                <div style="font-size:12px;color:#6A5A60;">5 members</div>
              </div>
              <div style="display:flex;gap:6px;flex-wrap:wrap;">
                <div style="font-size:10px;font-weight:600;background:#F5F5F5;color:#444;padding:3px 8px;border-radius:10px;">GPT-4o</div>
                <div style="font-size:10px;font-weight:600;background:#F5F5F5;color:#444;padding:3px 8px;border-radius:10px;">GPT-3.5 Turbo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="feature-eyebrow">03 &ndash; Access Control</div>
        <h3 class="feature-title">Give each team<br><b>the right model.</b></h3>
        <p class="feature-body">Assign specific AI models to specific teams with zero code changes. Dev gets Claude + Bedrock. Marketing gets Gemini. Sales gets GPT-4o. Reconfigure access in seconds.</p>
        <div class="feature-checks">
          <div class="feature-check">
            <div class="check-icon"><svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#C23B2E" stroke-width="2" stroke-linecap="round"><polyline points="2,6 5,9 10,3"/></svg></div>
            SSO/SCIM &ndash; auto-provision and deprovision via Okta, Azure AD
          </div>
          <div class="feature-check">
            <div class="check-icon"><svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#C23B2E" stroke-width="2" stroke-linecap="round"><polyline points="2,6 5,9 10,3"/></svg></div>
            Role-based permissions &ndash; Admin, Team Lead, Member, Viewer
          </div>
          <div class="feature-check">
            <div class="check-icon"><svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#C23B2E" stroke-width="2" stroke-linecap="round"><polyline points="2,6 5,9 10,3"/></svg></div>
            Instant access revocation &ndash; no key rotation required
          </div>
        </div>
      </div>
    </div>

    <!-- Feature 4 — PII Guardrails -->
    <div class="features-layout reverse">
      <div>
        <div class="feature-eyebrow">04 &ndash; PII Guardrails</div>
        <h3 class="feature-title">Stop sensitive data from<br><b>leaving your org.</b></h3>
        <p class="feature-body">Every prompt your team sends is scanned in real time before it reaches any LLM provider. Names, emails, SSNs, card numbers, medical records, financial data &ndash; all caught and handled before they leave your network.</p>
        <div class="feature-checks">
          <div class="feature-check">
            <div class="check-icon"><svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#C23B2E" stroke-width="2" stroke-linecap="round"><polyline points="2,6 5,9 10,3"/></svg></div>
            Block, redact, or alert &ndash; configurable per team or provider
          </div>
          <div class="feature-check">
            <div class="check-icon"><svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#C23B2E" stroke-width="2" stroke-linecap="round"><polyline points="2,6 5,9 10,3"/></svg></div>
            Detects 20+ PII types &ndash; names, emails, SSNs, IBANs, health data, and more
          </div>
          <div class="feature-check">
            <div class="check-icon"><svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#C23B2E" stroke-width="2" stroke-linecap="round"><polyline points="2,6 5,9 10,3"/></svg></div>
            Full violation log for GDPR, HIPAA, and SOC 2 audits
          </div>
          <div class="feature-check">
            <div class="check-icon"><svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#C23B2E" stroke-width="2" stroke-linecap="round"><polyline points="2,6 5,9 10,3"/></svg></div>
            Custom rules &ndash; flag internal project names, client IDs, proprietary terms
          </div>
        </div>
      </div>
      <div class="feature-visual">
        <div class="feature-screen" style="padding:24px;">
          <div style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#B0A0A6;margin-bottom:16px;">PII Guardrail &ndash; Live Scan</div>
          <!-- Prompt input -->
          <div style="background:#F7F2F0;border-radius:10px;padding:14px 16px;border:1px solid #EDE6E4;margin-bottom:12px;font-size:13px;color:#3A2E35;line-height:1.7;position:relative;">
            Write a follow-up email to
            <span style="background:#FECACA;color:#991B1B;padding:2px 6px;border-radius:4px;font-size:11px;font-weight:600;border:1px solid #FCA5A5;">John Smith</span>
            at
            <span style="background:#FECACA;color:#991B1B;padding:2px 6px;border-radius:4px;font-size:11px;font-weight:600;border:1px solid #FCA5A5;">john@acme.com</span>
            about the Q3 contract renewal worth
            <span style="background:#FEF3C7;color:#92400E;padding:2px 6px;border-radius:4px;font-size:11px;font-weight:600;border:1px solid #FDE68A;">$240,000</span>
            <div style="position:absolute;top:-8px;right:12px;background:#C23B2E;color:white;font-family:'Montserrat',sans-serif;font-size:8px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:3px 10px;border-radius:10px;">Scanning...</div>
          </div>
          <!-- Violations -->
          <div style="background:#FFF8F6;border:1px solid #FECDCA;border-radius:10px;padding:14px 16px;margin-bottom:12px;">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="#C23B2E"><path d="M8 1L1 14h14L8 1zm0 3l3.5 7h-7L8 4z"/></svg>
              <div style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#C23B2E;">3 PII violations detected</div>
            </div>
            <div style="display:flex;flex-direction:column;gap:6px;">
              <div style="display:flex;align-items:center;justify-content:space-between;font-size:11px;">
                <span style="display:flex;align-items:center;gap:6px;"><span style="width:6px;height:6px;border-radius:50%;background:#EF4444;flex-shrink:0;"></span>Person name detected</span>
                <span style="background:#FEE2E2;color:#991B1B;font-family:'Montserrat',sans-serif;font-size:9px;font-weight:700;padding:2px 8px;border-radius:10px;">REDACTED</span>
              </div>
              <div style="display:flex;align-items:center;justify-content:space-between;font-size:11px;">
                <span style="display:flex;align-items:center;gap:6px;"><span style="width:6px;height:6px;border-radius:50%;background:#EF4444;flex-shrink:0;"></span>Email address detected</span>
                <span style="background:#FEE2E2;color:#991B1B;font-family:'Montserrat',sans-serif;font-size:9px;font-weight:700;padding:2px 8px;border-radius:10px;">REDACTED</span>
              </div>
              <div style="display:flex;align-items:center;justify-content:space-between;font-size:11px;">
                <span style="display:flex;align-items:center;gap:6px;"><span style="width:6px;height:6px;border-radius:50%;background:#F59E0B;flex-shrink:0;"></span>Financial amount &ndash; logged</span>
                <span style="background:#FEF3C7;color:#92400E;font-family:'Montserrat',sans-serif;font-size:9px;font-weight:700;padding:2px 8px;border-radius:10px;">FLAGGED</span>
              </div>
            </div>
          </div>
          <!-- Clean output -->
          <div style="background:#F0FDF4;border:1px solid #BBF7D0;border-radius:10px;padding:14px 16px;">
            <div style="font-family:'Montserrat',sans-serif;font-size:9px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#166534;margin-bottom:8px;">&#10003; Sanitised prompt sent to LLM</div>
            <div style="font-size:12px;color:#166534;line-height:1.7;">Write a follow-up email to <span style="background:#BBF7D0;padding:1px 5px;border-radius:3px;">[NAME]</span> at <span style="background:#BBF7D0;padding:1px 5px;border-radius:3px;">[EMAIL]</span> about the Q3 contract renewal worth <span style="background:#FEF9C3;padding:1px 5px;border-radius:3px;color:#854D0E;">[AMOUNT]</span></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Feature 5 — Team Knowledge Base -->
    <div class="features-layout" style="margin-bottom:0;">
      <div class="feature-visual">
        <div class="feature-screen" style="padding:24px;">
          <div style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#B0A0A6;margin-bottom:16px;">Knowledge Base &ndash; Context Savings</div>
          <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px;">
            <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:#F7F2F0;border-radius:8px;border:1px solid #EDE6E4;">
              <div style="width:28px;height:28px;background:#EFF3FF;border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="#4f6ef7"><path d="M2 3h12v2H2zm0 4h8v2H2zm0 4h10v2H2z"/></svg>
              </div>
              <div style="flex:1;">
                <div style="font-size:12px;font-weight:600;color:#3A2E35;">Brand voice guidelines</div>
                <div style="font-size:10px;color:#B0A0A6;">Marketing &middot; 847 tokens &middot; auto-injected</div>
              </div>
              <div style="font-size:9px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;background:#DCFCE7;color:#166534;padding:2px 7px;border-radius:10px;">Active</div>
            </div>
            <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:#F7F2F0;border-radius:8px;border:1px solid #EDE6E4;">
              <div style="width:28px;height:28px;background:#F0FDF4;border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="#16a34a"><rect x="2" y="2" width="5" height="5" rx="1"/><rect x="9" y="2" width="5" height="5" rx="1"/><rect x="2" y="9" width="5" height="5" rx="1"/><rect x="9" y="9" width="5" height="5" rx="1"/></svg>
              </div>
              <div style="flex:1;">
                <div style="font-size:12px;font-weight:600;color:#3A2E35;">Product feature descriptions</div>
                <div style="font-size:10px;color:#B0A0A6;">Marketing &middot; 1,240 tokens &middot; auto-injected</div>
              </div>
              <div style="font-size:9px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;background:#DCFCE7;color:#166534;padding:2px 7px;border-radius:10px;">Active</div>
            </div>
            <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:#F7F2F0;border-radius:8px;border:1px solid #EDE6E4;">
              <div style="width:28px;height:28px;background:#FEF3C7;border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="#d97706"><path d="M8 1l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4z"/></svg>
              </div>
              <div style="flex:1;">
                <div style="font-size:12px;font-weight:600;color:#3A2E35;">Target persona definitions</div>
                <div style="font-size:10px;color:#B0A0A6;">Marketing &middot; 620 tokens &middot; auto-injected</div>
              </div>
              <div style="font-size:9px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;background:#DCFCE7;color:#166534;padding:2px 7px;border-radius:10px;">Active</div>
            </div>
          </div>
          <!-- Savings meter -->
          <div style="background:#3A2E35;border-radius:10px;padding:14px 16px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;text-align:center;">
            <div>
              <div style="font-family:'Montserrat',sans-serif;font-size:20px;font-weight:200;color:#F0E8E5;letter-spacing:-0.5px;line-height:1;">2,707</div>
              <div style="font-size:9px;color:rgba(240,232,229,0.35);margin-top:3px;">tokens auto-injected</div>
            </div>
            <div style="border-left:1px solid rgba(255,255,255,0.08);border-right:1px solid rgba(255,255,255,0.08);">
              <div style="font-family:'Montserrat',sans-serif;font-size:20px;font-weight:700;color:#D4857A;letter-spacing:-0.5px;line-height:1;">$0</div>
              <div style="font-size:9px;color:rgba(240,232,229,0.35);margin-top:3px;">extra cost per member</div>
            </div>
            <div>
              <div style="font-family:'Montserrat',sans-serif;font-size:20px;font-weight:200;color:#4CAF78;letter-spacing:-0.5px;line-height:1;">$840</div>
              <div style="font-size:9px;color:rgba(240,232,229,0.35);margin-top:3px;">saved / month (team of 6)</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="feature-eyebrow">05 &ndash; Team Knowledge Base</div>
        <h3 class="feature-title">Your team's context,<br><b>auto-injected. Zero waste.</b></h3>
        <p class="feature-body">Build a team-specific knowledge base &ndash; brand guidelines, codebase conventions, product specs, client context. OneOps automatically injects the right KB into every LLM request, so your team never has to paste background context again.</p>
        <div class="feature-checks">
          <div class="feature-check">
            <div class="check-icon"><svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#C23B2E" stroke-width="2" stroke-linecap="round"><polyline points="2,6 5,9 10,3"/></svg></div>
            Team-scoped &ndash; Marketing, Dev, Sales each get their own KB
          </div>
          <div class="feature-check">
            <div class="check-icon"><svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#C23B2E" stroke-width="2" stroke-linecap="round"><polyline points="2,6 5,9 10,3"/></svg></div>
            Versioned and owned &ndash; every doc has an author and review date
          </div>
          <div class="feature-check">
            <div class="check-icon"><svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#C23B2E" stroke-width="2" stroke-linecap="round"><polyline points="2,6 5,9 10,3"/></svg></div>
            Smart injection &ndash; only relevant KB chunks sent, not the whole library
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- ═══════════ HOW IT WORKS ═══════════ -->
<section class="section section-blush" id="oneops-how">
  <div class="container section-center">
    <div class="section-eyebrow">Setup in minutes</div>
    <h2 class="section-h2">Connect. Assign. <b>Control.</b></h2>
    <p class="section-sub center">Three steps to full visibility over every AI tool in your company.</p>
    <div class="steps-grid">
      <div class="step-item">
        <div class="step-num">01</div>
        <div class="step-title">Connect your providers</div>
        <div class="step-body">Paste in your API keys for any AI provider &ndash; Claude, OpenAI, Gemini, Bedrock, Mistral, Groq, and more. OneOps vaults them with AES-256 encryption immediately.</div>
      </div>
      <div class="step-item">
        <div class="step-num">02</div>
        <div class="step-title">Create teams, assign models</div>
        <div class="step-body">Set up your teams and choose which AI models each one can access. Define monthly budgets per team or per person. Sync with Okta or Azure AD via SCIM.</div>
      </div>
      <div class="step-item">
        <div class="step-num">03</div>
        <div class="step-title">Track, alert, optimize</div>
        <div class="step-body">Watch spend in real time. Get alerts before limits are hit. Rotate keys on schedule. Pull reports for finance. One dashboard for all of it &ndash; forever.</div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════ COMPARE ═══════════ -->
<section class="section section-alt" id="oneops-compare">
  <div class="container">
    <div class="section-eyebrow">How we're different</div>
    <h2 class="section-h2">Built for operations teams,<br><b>not just developers.</b></h2>
    <p class="section-sub">LiteLLM and Portkey are great for routing API calls. OneOps is built for the layer above &ndash; governing who has access, what they're spending, and whether they're following policy.</p>
    <div class="comparison-table-wrap">
    <table class="comparison-table">
      <thead>
        <tr>
          <th style="width:34%;">Capability</th>
          <th>LiteLLM</th>
          <th>Portkey</th>
          <th class="highlight">OneOps</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="row-label">Primary user</td>
          <td style="color:#A090A0;">Developer</td>
          <td style="color:#A090A0;">Developer / Platform Eng</td>
          <td class="highlight" style="color:#C23B2E;">IT &middot; Finance &middot; Ops &middot; Team leads</td>
        </tr>
        <tr>
          <td class="row-label">API gateway / routing</td>
          <td><span class="check-yes">&#10003;</span></td>
          <td><span class="check-yes">&#10003;</span></td>
          <td class="highlight"><span class="check-partial">Lightweight proxy</span></td>
        </tr>
        <tr>
          <td class="row-label">Team-based model assignment</td>
          <td><span class="check-no">&mdash;</span></td>
          <td><span class="check-partial">Partial</span></td>
          <td class="highlight"><span class="check-yes">&#10003;</span></td>
        </tr>
        <tr>
          <td class="row-label">Individual spend by employee</td>
          <td><span class="check-no">&mdash;</span></td>
          <td><span class="check-no">&mdash;</span></td>
          <td class="highlight"><span class="check-yes">&#10003;</span></td>
        </tr>
        <tr>
          <td class="row-label">SaaS seat license tracking</td>
          <td><span class="check-no">&mdash;</span></td>
          <td><span class="check-no">&mdash;</span></td>
          <td class="highlight"><span class="check-yes">&#10003;</span></td>
        </tr>
        <tr>
          <td class="row-label">Key lifecycle &amp; expiry alerts</td>
          <td><span class="check-partial">Partial</span></td>
          <td><span class="check-yes">&#10003;</span></td>
          <td class="highlight"><span class="check-yes">&#10003;</span></td>
        </tr>
        <tr>
          <td class="row-label">Budget hard caps per person</td>
          <td><span class="check-no">&mdash;</span></td>
          <td><span class="check-partial">Team-level only</span></td>
          <td class="highlight"><span class="check-yes">&#10003; Person + team</span></td>
        </tr>
        <tr>
          <td class="row-label">Enterprise knowledge base</td>
          <td><span class="check-no">&mdash;</span></td>
          <td><span class="check-no">&mdash;</span></td>
          <td class="highlight"><span class="check-yes">&#10003;</span></td>
        </tr>
        <tr>
          <td class="row-label">HRIS sync (Workday, BambooHR)</td>
          <td><span class="check-no">&mdash;</span></td>
          <td><span class="check-no">&mdash;</span></td>
          <td class="highlight"><span class="check-yes">&#10003;</span></td>
        </tr>
        <tr>
          <td class="row-label">Non-technical UI</td>
          <td><span class="check-partial">Dev-focused</span></td>
          <td><span class="check-partial">Dev-focused</span></td>
          <td class="highlight"><span class="check-yes">&#10003; Business-first</span></td>
        </tr>
        <tr>
          <td class="row-label">PII guardrails &ndash; block / redact before LLM</td>
          <td><span class="check-no">&mdash;</span></td>
          <td><span class="check-partial">Basic</span></td>
          <td class="highlight"><span class="check-yes">&#10003; 20+ PII types</span></td>
        </tr>
        <tr>
          <td class="row-label">Team knowledge base + auto-injection</td>
          <td><span class="check-no">&mdash;</span></td>
          <td><span class="check-no">&mdash;</span></td>
          <td class="highlight"><span class="check-yes">&#10003; Context savings built-in</span></td>
        </tr>
      </tbody>
    </table>
    </div><!-- /.comparison-table-wrap -->
  </div>
</section>

<!-- ═══════════ TESTIMONIALS ═══════════ -->
<section class="section" id="oneops-testimonials">
  <div class="container">
    <div class="section-eyebrow">What teams say</div>
    <h2 class="section-h2">Trusted by AI teams<br><b>at fast-moving companies.</b></h2>
    <div class="testi-grid">
      <div class="testi-card">
        <div class="testi-stars">
          <svg class="testi-star" viewBox="0 0 14 14" fill="#C23B2E"><polygon points="7,1 8.8,5.3 13.4,5.7 10,8.7 11.1,13.2 7,10.7 2.9,13.2 4,8.7 0.6,5.7 5.2,5.3"/></svg>
          <svg class="testi-star" viewBox="0 0 14 14" fill="#C23B2E"><polygon points="7,1 8.8,5.3 13.4,5.7 10,8.7 11.1,13.2 7,10.7 2.9,13.2 4,8.7 0.6,5.7 5.2,5.3"/></svg>
          <svg class="testi-star" viewBox="0 0 14 14" fill="#C23B2E"><polygon points="7,1 8.8,5.3 13.4,5.7 10,8.7 11.1,13.2 7,10.7 2.9,13.2 4,8.7 0.6,5.7 5.2,5.3"/></svg>
          <svg class="testi-star" viewBox="0 0 14 14" fill="#C23B2E"><polygon points="7,1 8.8,5.3 13.4,5.7 10,8.7 11.1,13.2 7,10.7 2.9,13.2 4,8.7 0.6,5.7 5.2,5.3"/></svg>
          <svg class="testi-star" viewBox="0 0 14 14" fill="#C23B2E"><polygon points="7,1 8.8,5.3 13.4,5.7 10,8.7 11.1,13.2 7,10.7 2.9,13.2 4,8.7 0.6,5.7 5.2,5.3"/></svg>
        </div>
        <p class="testi-quote">Finally one place to see that Marketing is burning through Gemini credits and Dev has 3 expired Bedrock keys. We caught a $4,000 overage before it happened.</p>
        <div class="testi-author">
          <div class="testi-avatar" style="background:#C23B2E;">MK</div>
          <div>
            <div class="testi-name">Morgan K.</div>
            <div class="testi-role">CTO, Series B SaaS Company</div>
          </div>
        </div>
      </div>
      <div class="testi-card">
        <div class="testi-stars">
          <svg class="testi-star" viewBox="0 0 14 14" fill="#C23B2E"><polygon points="7,1 8.8,5.3 13.4,5.7 10,8.7 11.1,13.2 7,10.7 2.9,13.2 4,8.7 0.6,5.7 5.2,5.3"/></svg>
          <svg class="testi-star" viewBox="0 0 14 14" fill="#C23B2E"><polygon points="7,1 8.8,5.3 13.4,5.7 10,8.7 11.1,13.2 7,10.7 2.9,13.2 4,8.7 0.6,5.7 5.2,5.3"/></svg>
          <svg class="testi-star" viewBox="0 0 14 14" fill="#C23B2E"><polygon points="7,1 8.8,5.3 13.4,5.7 10,8.7 11.1,13.2 7,10.7 2.9,13.2 4,8.7 0.6,5.7 5.2,5.3"/></svg>
          <svg class="testi-star" viewBox="0 0 14 14" fill="#C23B2E"><polygon points="7,1 8.8,5.3 13.4,5.7 10,8.7 11.1,13.2 7,10.7 2.9,13.2 4,8.7 0.6,5.7 5.2,5.3"/></svg>
          <svg class="testi-star" viewBox="0 0 14 14" fill="#C23B2E"><polygon points="7,1 8.8,5.3 13.4,5.7 10,8.7 11.1,13.2 7,10.7 2.9,13.2 4,8.7 0.6,5.7 5.2,5.3"/></svg>
        </div>
        <p class="testi-quote">When a developer left, we revoked their AI access in 30 seconds from a single screen. Before OneOps that would have been a 2-hour audit across five different provider dashboards.</p>
        <div class="testi-author">
          <div class="testi-avatar" style="background:#7A5C6E;">SR</div>
          <div>
            <div class="testi-name">Sarah R.</div>
            <div class="testi-role">Head of IT Security, 300-person fintech</div>
          </div>
        </div>
      </div>
      <div class="testi-card">
        <div class="testi-stars">
          <svg class="testi-star" viewBox="0 0 14 14" fill="#C23B2E"><polygon points="7,1 8.8,5.3 13.4,5.7 10,8.7 11.1,13.2 7,10.7 2.9,13.2 4,8.7 0.6,5.7 5.2,5.3"/></svg>
          <svg class="testi-star" viewBox="0 0 14 14" fill="#C23B2E"><polygon points="7,1 8.8,5.3 13.4,5.7 10,8.7 11.1,13.2 7,10.7 2.9,13.2 4,8.7 0.6,5.7 5.2,5.3"/></svg>
          <svg class="testi-star" viewBox="0 0 14 14" fill="#C23B2E"><polygon points="7,1 8.8,5.3 13.4,5.7 10,8.7 11.1,13.2 7,10.7 2.9,13.2 4,8.7 0.6,5.7 5.2,5.3"/></svg>
          <svg class="testi-star" viewBox="0 0 14 14" fill="#C23B2E"><polygon points="7,1 8.8,5.3 13.4,5.7 10,8.7 11.1,13.2 7,10.7 2.9,13.2 4,8.7 0.6,5.7 5.2,5.3"/></svg>
          <svg class="testi-star" viewBox="0 0 14 14" fill="#C23B2E"><polygon points="7,1 8.8,5.3 13.4,5.7 10,8.7 11.1,13.2 7,10.7 2.9,13.2 4,8.7 0.6,5.7 5.2,5.3"/></svg>
        </div>
        <p class="testi-quote">Finance asked me which departments were driving our AI costs. I pulled a full breakdown by team, model, and person in 2 minutes. That used to be a week-long spreadsheet exercise.</p>
        <div class="testi-author">
          <div class="testi-avatar" style="background:#3A2E35;">TL</div>
          <div>
            <div class="testi-name">Tom L.</div>
            <div class="testi-role">VP Operations, 500-person enterprise</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════ PRICING ═══════════ -->
<section class="section section-alt" id="oneops-pricing">
  <div class="container section-center">
    <div class="section-eyebrow">Pricing</div>
    <h2 class="section-h2">Simple pricing that<br><b>scales with your team.</b></h2>
    <p class="section-sub center">All plans include a 14-day free trial. No credit card required.</p>
    <div class="pricing-grid">
      <div class="pricing-card">
        <div class="pricing-tier">Starter</div>
        <div class="pricing-price"><sup>$</sup>49<span>/month</span></div>
        <p class="pricing-desc">For small teams getting started with AI governance.</p>
        <div class="pricing-divider"></div>
        <div class="pricing-features">
          <div class="pricing-feature"><svg class="pf-check" viewBox="0 0 16 16" fill="none" stroke="#C23B2E" stroke-width="2" stroke-linecap="round"><polyline points="3,8 6,11 13,4"/></svg>Up to 3 teams</div>
          <div class="pricing-feature"><svg class="pf-check" viewBox="0 0 16 16" fill="none" stroke="#C23B2E" stroke-width="2" stroke-linecap="round"><polyline points="3,8 6,11 13,4"/></svg>10 AI provider keys</div>
          <div class="pricing-feature"><svg class="pf-check" viewBox="0 0 16 16" fill="none" stroke="#C23B2E" stroke-width="2" stroke-linecap="round"><polyline points="3,8 6,11 13,4"/></svg>25 team members</div>
          <div class="pricing-feature"><svg class="pf-check" viewBox="0 0 16 16" fill="none" stroke="#C23B2E" stroke-width="2" stroke-linecap="round"><polyline points="3,8 6,11 13,4"/></svg>Basic spend tracking</div>
          <div class="pricing-feature"><svg class="pf-check" viewBox="0 0 16 16" fill="none" stroke="#C23B2E" stroke-width="2" stroke-linecap="round"><polyline points="3,8 6,11 13,4"/></svg>Email alerts</div>
        </div>
        <a href="https://oneops.pro/login" class="btn-pricing outline">Start free trial</a>
      </div>
      <div class="pricing-card featured">
        <div class="pricing-featured-tag">Most Popular</div>
        <div class="pricing-tier light">Growth</div>
        <div class="pricing-price light"><sup>$</sup>199<span>/month</span></div>
        <p class="pricing-desc light">For growing companies managing AI across multiple departments.</p>
        <div class="pricing-divider light"></div>
        <div class="pricing-features">
          <div class="pricing-feature light"><svg class="pf-check light" viewBox="0 0 16 16" fill="none" stroke="#D4857A" stroke-width="2" stroke-linecap="round"><polyline points="3,8 6,11 13,4"/></svg>Up to 10 teams</div>
          <div class="pricing-feature light"><svg class="pf-check light" viewBox="0 0 16 16" fill="none" stroke="#D4857A" stroke-width="2" stroke-linecap="round"><polyline points="3,8 6,11 13,4"/></svg>Unlimited API keys</div>
          <div class="pricing-feature light"><svg class="pf-check light" viewBox="0 0 16 16" fill="none" stroke="#D4857A" stroke-width="2" stroke-linecap="round"><polyline points="3,8 6,11 13,4"/></svg>100 team members</div>
          <div class="pricing-feature light"><svg class="pf-check light" viewBox="0 0 16 16" fill="none" stroke="#D4857A" stroke-width="2" stroke-linecap="round"><polyline points="3,8 6,11 13,4"/></svg>Full analytics + budget alerts</div>
          <div class="pricing-feature light"><svg class="pf-check light" viewBox="0 0 16 16" fill="none" stroke="#D4857A" stroke-width="2" stroke-linecap="round"><polyline points="3,8 6,11 13,4"/></svg>Slack integration</div>
          <div class="pricing-feature light"><svg class="pf-check light" viewBox="0 0 16 16" fill="none" stroke="#D4857A" stroke-width="2" stroke-linecap="round"><polyline points="3,8 6,11 13,4"/></svg>Knowledge base</div>
          <div class="pricing-feature light"><svg class="pf-check light" viewBox="0 0 16 16" fill="none" stroke="#D4857A" stroke-width="2" stroke-linecap="round"><polyline points="3,8 6,11 13,4"/></svg>SSO (Google, Microsoft)</div>
        </div>
        <a href="https://oneops.pro/login" class="btn-pricing solid">Start free trial</a>
      </div>
      <div class="pricing-card">
        <div class="pricing-tier">Enterprise</div>
        <div class="pricing-price" style="font-size:36px;margin-top:8px;">Custom</div>
        <p class="pricing-desc">For large organizations with complex compliance needs.</p>
        <div class="pricing-divider"></div>
        <div class="pricing-features">
          <div class="pricing-feature"><svg class="pf-check" viewBox="0 0 16 16" fill="none" stroke="#C23B2E" stroke-width="2" stroke-linecap="round"><polyline points="3,8 6,11 13,4"/></svg>Unlimited teams &amp; members</div>
          <div class="pricing-feature"><svg class="pf-check" viewBox="0 0 16 16" fill="none" stroke="#C23B2E" stroke-width="2" stroke-linecap="round"><polyline points="3,8 6,11 13,4"/></svg>SAML/SCIM SSO</div>
          <div class="pricing-feature"><svg class="pf-check" viewBox="0 0 16 16" fill="none" stroke="#C23B2E" stroke-width="2" stroke-linecap="round"><polyline points="3,8 6,11 13,4"/></svg>SOC 2 Type II + HIPAA</div>
          <div class="pricing-feature"><svg class="pf-check" viewBox="0 0 16 16" fill="none" stroke="#C23B2E" stroke-width="2" stroke-linecap="round"><polyline points="3,8 6,11 13,4"/></svg>Private cloud / VPC deploy</div>
          <div class="pricing-feature"><svg class="pf-check" viewBox="0 0 16 16" fill="none" stroke="#C23B2E" stroke-width="2" stroke-linecap="round"><polyline points="3,8 6,11 13,4"/></svg>HRIS sync + finance export</div>
          <div class="pricing-feature"><svg class="pf-check" viewBox="0 0 16 16" fill="none" stroke="#C23B2E" stroke-width="2" stroke-linecap="round"><polyline points="3,8 6,11 13,4"/></svg>Dedicated success manager</div>
        </div>
        <a href="https://oneops.pro/login" class="btn-pricing outline">Book a demo</a>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════ CTA ═══════════ -->
<section class="cta-section">
  <div class="cta-bg" style="width:600px;height:600px;top:-200px;right:-200px;"></div>
  <div class="cta-bg" style="width:300px;height:300px;bottom:-100px;left:-100px;"></div>
  <div class="cta-inner">
    <h2 class="cta-h2">Stop managing AI access<br><b>in Slack.</b></h2>
    <p class="cta-sub">OneOps gives your enterprise the visibility, control, and governance layer that your AI stack has been missing &ndash; from day one.</p>
    <div class="cta-actions">
      <a href="https://oneops.pro/login" class="btn-cta-white">
        Book a demo
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><line x1="3" y1="8" x2="13" y2="8" stroke="#C23B2E" stroke-width="2" stroke-linecap="round"/><polyline points="9,4 13,8 9,12" stroke="#C23B2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
      <a href="https://oneops.pro/login" class="btn-cta-outline">Start free trial &mdash; no card needed</a>
    </div>
  </div>
</section>

</div><!-- /.oneops-wrap -->
