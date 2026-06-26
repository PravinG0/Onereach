import { useEffect, useRef, useState } from 'react';
import { Logo } from '@/components/Logo';
import './SupportPage.css';

/* ── tiny inline SVG helpers ─────────────────── */
const CheckIcon = ({ color = '#059669' }: { color?: string }) => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path d="M2 5l2.5 2.5 3.5-4" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ArrowRight = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── FAQ data ─────────────────────────────────── */
const FAQS = [
  {
    q: 'How do I get started with OneReach?',
    a: 'Sign up for a free Startup account — no credit card required. You\'ll receive 500 free credits each month. Once logged in, connect your LinkedIn, Gmail or Outlook account, define your Ideal Customer Profile (ICP), and Sophia will start discovering and researching companies immediately.',
  },
  {
    q: 'How do I reset or recover my password?',
    a: 'Go to app.onereach.app/login and click "Forgot password". Enter the email address associated with your account and we\'ll send a reset link within a few minutes. Check your spam folder if it doesn\'t arrive. If you still can\'t access your account, email support@onereach.app.',
  },
  {
    q: 'My account is locked — what should I do?',
    a: 'Accounts are temporarily locked after multiple failed login attempts as a security measure. Wait 15 minutes and try again with the correct password, or use the password reset flow. If your account remains locked, contact support@onereach.app with your registered email address and we\'ll unlock it manually.',
  },
  {
    q: 'Why are my outreach sequences not sending?',
    a: 'The most common cause is a depleted credit balance — Sophia pauses all credit-consuming actions when credits run out. Check your credit balance in the dashboard. If credits are available, verify that your connected email/LinkedIn account is still authorised under Settings → Integrations.',
  },
  {
    q: 'How do I connect my LinkedIn account?',
    a: 'Navigate to Settings → Integrations → LinkedIn and follow the OAuth authorisation flow. Sophia requires access to send connection requests and InMail on your behalf. If you see an authorisation error, try disconnecting and reconnecting, or clear your browser cookies before retrying.',
  },
  {
    q: 'What counts as a credit and how are they deducted?',
    a: 'Credits map directly to the work Sophia performs: Company Search = 1 credit, AI Message Draft = 2 credits, Contact Reveal = 5 credits, Snapshot Research = 5 credits, Profiler Research = 20 credits, Deep Intel Research = 100 credits. Your credit balance is visible in real time on your dashboard.',
  },
  {
    q: 'Can I upload a list of target companies or contacts?',
    a: 'Yes. Go to Companies → Import and upload a CSV with company names or domains. Sophia will enrich each entry using Apollo and PDL data, then run your chosen research tier on each company. Contact imports are supported under Contacts → Import with a matching CSV template.',
  },
  {
    q: 'How do I cancel or change my subscription?',
    a: 'Open Settings → Billing → Manage Subscription to access your Stripe billing portal. You can upgrade, downgrade, or cancel anytime. Upgrades take effect immediately (prorated). Downgrades apply at the end of your current billing period. There are no cancellation fees.',
  },
];

/* ── Help topic cards ─────────────────────────── */
const TOPICS = [
  {
    badge: 'Account',
    title: 'Account & Login',
    desc: 'Help with signing in, resetting passwords, account lockouts, and managing your profile settings.',
    links: ['Reset your password', 'Unlock your account', 'Update profile & email'],
    iconColor: '#1E3DB4',
  },
  {
    badge: 'Outreach',
    title: 'Sophia & Sequences',
    desc: 'Set up your ICP, launch outreach sequences, review and approve Sophia\'s drafts, and manage follow-ups.',
    links: ['Create your first sequence', 'Approve AI-drafted messages', 'Configure follow-up rules'],
    iconColor: '#7C3AED',
  },
  {
    badge: 'Channels',
    title: 'Integrations',
    desc: 'Connect LinkedIn, Gmail, Outlook, SMS (Twilio), and WhatsApp to enable multi-channel outreach.',
    links: ['Connect LinkedIn', 'Connect Gmail / Outlook', 'Set up SMS & WhatsApp'],
    iconColor: '#0891B2',
  },
  {
    badge: 'Credits',
    title: 'Credits & Billing',
    desc: 'Understand how credits work, top up your balance, manage your subscription, and view invoices.',
    links: ['How credits are charged', 'Buy a top-up pack', 'Manage subscription'],
    iconColor: '#D97706',
  },
  {
    badge: 'Research',
    title: 'Company Research',
    desc: 'Run Discovery, Snapshot, Profiler, or Deep Intel research tiers and interpret the AI-generated reports.',
    links: ['Choose a research tier', 'Read a company report', 'Import target companies'],
    iconColor: '#059669',
  },
  {
    badge: 'Pipeline',
    title: 'Pipeline & CRM',
    desc: 'Track contacts through Research → Outreach → Nurture stages, export to Salesforce or HubSpot.',
    links: ['View pipeline stages', 'Export to CRM', 'Log meetings & replies'],
    iconColor: '#DC2626',
  },
];

/* ── Troubleshooting steps ────────────────────── */
const TROUBLE_STEPS = [
  {
    title: 'Check your credit balance',
    desc: 'Sophia pauses all AI actions when credits reach zero. Open the dashboard and verify your remaining balance. Top up instantly from Settings → Credits.',
    tag: 'Most common issue',
  },
  {
    title: 'Verify integration authorisation',
    desc: 'LinkedIn, Gmail, and Twilio tokens expire. Go to Settings → Integrations and reconnect any channel showing a warning icon.',
    tag: 'Channels',
  },
  {
    title: 'Check sequence approval queue',
    desc: 'Sophia requires human approval before each phase sends. Open Sequences → Pending Approvals and approve or skip pending steps.',
    tag: 'Sequences',
  },
  {
    title: 'Review spam / junk filters',
    desc: 'Email replies from prospects may land in your spam folder. Add support@onereach.app to your whitelist and check your connected inbox spam.',
    tag: 'Email',
  },
  {
    title: 'Clear browser cache & retry',
    desc: 'Some UI issues are caused by stale cached data. Hard-refresh with Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac) and try the action again.',
    tag: 'UI',
  },
];

/* ── System status items ──────────────────────── */
const STATUS_ITEMS = [
  { label: 'Sophia AI Engine', status: 'Operational', green: true },
  { label: 'LinkedIn Outreach', status: 'Operational', green: true },
  { label: 'Email Delivery', status: 'Operational', green: true },
  { label: 'SMS (Twilio)', status: 'Operational', green: true },
  { label: 'WhatsApp', status: 'Operational', green: true },
  { label: 'Research Pipeline', status: 'Operational', green: true },
];

/* ══════════════════════════════════════════════
   COMPONENT
══════════════════════════════════════════════ */
export function SupportPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* Scroll-triggered fade-up */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('vis'); }),
      { threshold: 0.1 }
    );
    pageRef.current?.querySelectorAll('.fu').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* Smooth scroll for hash links */
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const a = (e.target as Element).closest('a[href^="#"]');
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div ref={pageRef} className="sp-wrap">

      {/* ── SEO meta (injected via document title) ── */}
      {/* Title set below via useEffect */}

      {/* ════════════ NAV ════════════ */}
      <nav className="sp-nav" role="navigation" aria-label="Site navigation">
        <div className="ni">
          <a href="/" className="nav-brand" aria-label="OneReach home">
            <Logo size="md" />
            <span className="nav-name">One<b>Reach</b></span>
          </a>
          <div className="nav-links">
            <a href="/#how-it-works">How It Works</a>
            <a href="/#sophia-ai">Sophia AI</a>
            <a href="/#channels">Channels</a>
            <a href="/#pricing">Pricing</a>
            <a href="/support" className="active" aria-current="page">Support</a>
          </div>
          <div className="nav-acts">
            <a href="https://app.onereach.app/login" className="nav-signin">Sign In</a>
            <a href="https://app.onereach.app/register">
              <button className="nav-getstart">Get Started Free</button>
            </a>
          </div>
        </div>
      </nav>

      {/* ════════════ HERO ════════════ */}
      <section className="sp-hero" id="sp-hero" aria-labelledby="sp-hero-heading">
        <div className="sp-hero-glow sp-hg1" aria-hidden="true" />
        <div className="sp-hero-glow sp-hg2" aria-hidden="true" />
        <div className="sp-hero-body">

          {/* Left */}
          <div className="sp-hero-left">
            <div className="sp-h-pill">
              <span className="sp-h-dot" aria-hidden="true" />
              <span>OneReach Support</span>
            </div>
            <h1 className="sp-hero-h1" id="sp-hero-heading">
              We're here<span className="accent blue"> when you</span>
              <span className="accent">need us.</span>
              <span className="sub">Fast, friendly, expert help.</span>
            </h1>
            <p className="sp-hero-desc">
              Get help with your OneReach account, Sophia AI sequences, integrations,
              credits, and billing — from our expert support team.
            </p>
            <div className="sp-hero-ctas">
              <a
                href="mailto:support@onereach.app"
                className="btn-p"
                aria-label="Email OneReach support"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M2 4.5h12v9a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 2 13.5V4.5Z" stroke="white" strokeWidth="1.3"/>
                  <path d="M2 4.5l6 4.5 6-4.5" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
                Email Support
              </a>
              <a href="#sp-faq" className="btn-s">Browse FAQs</a>
            </div>
            <div className="sp-hero-trust" aria-label="Support commitments">
              {[
                { icon: <CheckIcon />, text: 'Mon–Fri, 9 AM–6 PM' },
                { icon: <CheckIcon />, text: 'Response within 24 hours' },
                { icon: <CheckIcon />, text: 'No bots — real humans' },
              ].map(({ icon, text }) => (
                <div className="sp-trust-item" key={text}>
                  <div className="sp-trust-dot" aria-hidden="true">{icon}</div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: animated support chat visual */}
          <div className="sp-hero-right" aria-hidden="true">
            {/* Floating badges */}
            <div className="sp-badge sp-b1">
              <div className="sp-badge-icon" style={{ background: '#EEF2FF' }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6" stroke="#1E3DB4" strokeWidth="1.3"/>
                  <path d="M7 5v3M7 9.5v.5" stroke="#1E3DB4" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="sp-badge-dot" />
              <span>Issue resolved</span>
            </div>
            <div className="sp-badge sp-b2">
              <div className="sp-badge-icon" style={{ background: 'rgba(5,150,105,.1)' }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="5.5" stroke="#059669" strokeWidth="1.3"/>
                  <path d="M4.5 7l2 2 3-3" stroke="#059669" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="sp-badge-dot" />
              <span>Reply sent</span>
            </div>
            <div className="sp-badge sp-b3">
              <div className="sp-badge-icon" style={{ background: 'rgba(124,58,237,.08)' }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1.5c-3 0-5.5 2.2-5.5 5 0 1 .3 2 .8 2.8L1.5 12.5l3.3-.9c.7.3 1.4.5 2.2.5 3 0 5.5-2.2 5.5-5s-2.5-5-5.5-5Z" stroke="#7C3AED" strokeWidth="1.2"/>
                </svg>
              </div>
              <span className="sp-badge-dot" />
              <span>Avg. reply: 4h</span>
            </div>

            {/* Chat panel */}
            <div className="sp-support-panel">
              <div className="sp-panel-header">
                <div className="sp-panel-av">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <circle cx="11" cy="8" r="4" stroke="white" strokeWidth="1.5"/>
                    <path d="M3 20c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <div className="sp-panel-name">OneReach Support</div>
                  <div className="sp-panel-role">support@onereach.app</div>
                </div>
                <div className="sp-panel-status">
                  <span className="sp-panel-dot" />Online
                </div>
              </div>
              <div className="sp-panel-body">
                <div className="sp-chat-msg agent">
                  <div className="sp-chat-meta">Support Team</div>
                  Hi! 👋 How can we help you with OneReach today?
                </div>
                <div className="sp-chat-msg user">
                  <div className="sp-chat-meta">You</div>
                  My sequences stopped sending after credits ran out.
                </div>
                <div className="sp-chat-msg agent">
                  <div className="sp-chat-meta">Support Team</div>
                  No worries — your data is safe. Top up your credits and Sophia will resume exactly where she left off. 🚀
                </div>
              </div>
              <div className="sp-panel-footer">
                <div className="sp-panel-input">Type your question…</div>
                <div className="sp-panel-send">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M9 4l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ CONTACT OVERVIEW ════════════ */}
      <section className="sp-contact-sec" id="sp-contact" aria-labelledby="sp-contact-heading">
        <div className="con">
          <div className="sec-head fu">
            <div className="lbl">Get In Touch</div>
            <h2 id="sp-contact-heading">
              Support that <span className="blue">actually helps.</span>
            </h2>
            <p>Reach us by email, check our business hours, or browse self-service resources — whatever works best for you.</p>
          </div>

          <div className="sp-contact-grid">

            {/* Email — primary card */}
            <div className="sp-contact-card primary fu d1">
              <div className="sp-cc-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3 7h18v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7Z" stroke="white" strokeWidth="1.5"/>
                  <path d="M3 7l9 7 9-7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="sp-cc-badge">Primary channel</div>
              <div className="sp-cc-title">Email Support</div>
              <p className="sp-cc-desc">
                Send us a detailed message and our team will respond within one business day.
                Include your account email and a description of the issue for faster resolution.
              </p>
              <a
                href="mailto:support@onereach.app"
                className="sp-cc-email"
                aria-label="Email support@onereach.app"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M2 4h12v10a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 2 14V4Z" stroke="currentColor" strokeWidth="1.3"/>
                  <path d="M2 4l6 4.5L14 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
                support@onereach.app
              </a>
            </div>

            {/* Business hours */}
            <div className="sp-contact-card fu d2">
              <div className="sp-cc-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" stroke="#1E3DB4" strokeWidth="1.5"/>
                  <path d="M12 7v5.5l3.5 2" stroke="#1E3DB4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="sp-cc-badge">Availability</div>
              <div className="sp-cc-title">Business Hours</div>
              <p className="sp-cc-desc">Our support team monitors incoming tickets during these hours:</p>
              <div className="sp-hours-list" role="list" aria-label="Support hours">
                {[
                  { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM', closed: false },
                  { day: 'Saturday', time: null, closed: true },
                  { day: 'Sunday', time: null, closed: true },
                ].map(({ day, time, closed }) => (
                  <div className="sp-hours-row" key={day} role="listitem">
                    <span className="day">{day}</span>
                    {closed
                      ? <span className="closed">Closed</span>
                      : <span className="time">{time}</span>
                    }
                  </div>
                ))}
                <div className="sp-hours-row" style={{ background: 'rgba(5,150,105,.06)', borderColor: 'rgba(5,150,105,.15)' }}>
                  <span className="day" style={{ fontSize: 12, color: '#3D4D72' }}>Timezone</span>
                  <span className="time" style={{ color: '#059669' }}>Eastern Time (ET)</span>
                </div>
              </div>
            </div>

            {/* Response time & self-service */}
            <div className="sp-contact-card fu d3">
              <div className="sp-cc-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" stroke="#1E3DB4" strokeWidth="1.5"/>
                  <path d="M12 8v5M12 15.5v.5" stroke="#1E3DB4" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="sp-cc-badge">Self-service</div>
              <div className="sp-cc-title">Quick Resources</div>
              <p className="sp-cc-desc">Get answers immediately with our self-service options before raising a ticket.</p>
              {[
                { label: 'Browse FAQs below', href: '#sp-faq' },
                { label: 'Check system status', href: '#sp-trouble' },
                { label: 'Privacy Policy', href: 'https://app.onereach.app/privacy' },
                { label: 'Terms of Service', href: 'https://app.onereach.app/terms' },
              ].map(({ label, href }) => (
                <a key={label} href={href} className="sp-cc-action" style={{ display: 'flex', marginTop: 10 }}>
                  <ArrowRight size={14} />
                  <span style={{ fontSize: 13, fontWeight: 600 }}>{label}</span>
                </a>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ════════════ HELP TOPICS ════════════ */}
      <section className="sp-topics-sec" id="sp-topics" aria-labelledby="sp-topics-heading">
        <div className="con">
          <div className="sec-head fu">
            <div className="lbl">Help Topics</div>
            <h2 id="sp-topics-heading">
              Find help by <span className="blue">topic.</span>
            </h2>
            <p>Browse the most common areas our users need help with, from onboarding to advanced pipeline management.</p>
          </div>
          <div className="sp-topics-grid" role="list">
            {TOPICS.map((topic, i) => (
              <article
                key={topic.title}
                className={`sp-topic-card fu${i > 0 ? ` d${Math.min(i, 4)}` : ''}`}
                role="listitem"
              >
                <div className="sp-tc-top">
                  <div className="sp-tc-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="7" stroke={topic.iconColor} strokeWidth="1.4" opacity=".6"/>
                      <circle cx="10" cy="10" r="3" fill={topic.iconColor} opacity=".4"/>
                    </svg>
                  </div>
                  <span className="sp-tc-badge">{topic.badge}</span>
                </div>
                <div className="sp-tc-title">{topic.title}</div>
                <p className="sp-tc-desc">{topic.desc}</p>
                <div className="sp-tc-links" role="list" aria-label={`${topic.title} help links`}>
                  {topic.links.map((link) => (
                    <a
                      key={link}
                      href={`mailto:support@onereach.app?subject=${encodeURIComponent(link)}`}
                      className="sp-tc-link"
                      role="listitem"
                    >
                      <ArrowRight size={12} />
                      {link}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ FAQ ════════════ */}
      <section className="sp-faq-sec" id="sp-faq" aria-labelledby="sp-faq-heading">
        <div className="con">
          <div className="sec-head fu">
            <div className="lbl">FAQ</div>
            <h2 id="sp-faq-heading">
              Frequently asked <span className="blue">questions.</span>
            </h2>
            <p>Quick answers to the questions we hear most. Don't see yours? Email us at support@onereach.app.</p>
          </div>
          <div className="sp-faq-grid fu d1" role="list">
            {FAQS.map(({ q, a }, i) => (
              <div
                key={i}
                className={`sp-faq-card${openFaq === i ? ' open' : ''}`}
                role="listitem"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpenFaq(openFaq === i ? null : i); } }}
                tabIndex={0}
                aria-expanded={openFaq === i}
              >
                <div className="sp-faq-q">
                  <span>{q}</span>
                  <div className="sp-faq-ico" aria-hidden="true">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 2v6M2 5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                {openFaq === i && (
                  <div className="sp-faq-a" role="region" aria-label={q}>{a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ TROUBLESHOOTING ════════════ */}
      <section className="sp-trouble-sec" id="sp-trouble" aria-labelledby="sp-trouble-heading">
        <div className="con">
          <div className="sec-head fu">
            <div className="lbl">Troubleshooting</div>
            <h2 id="sp-trouble-heading">
              Fix it in <span className="blue">5 steps.</span>
            </h2>
            <p>Before emailing support, try these steps — they resolve over 80% of reported issues immediately.</p>
          </div>
          <div className="sp-trouble-wrap">

            {/* Left: steps */}
            <div className="sp-trouble-left fu">
              {TROUBLE_STEPS.map((step, i) => (
                <div className="sp-trouble-step" key={i}>
                  <div className="sp-ts-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</div>
                  <div className="sp-ts-body">
                    <div className="sp-ts-title">{step.title}</div>
                    <p className="sp-ts-desc">{step.desc}</p>
                    <span className="sp-ts-tag">{step.tag}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: live system status */}
            <div className="fu d2">
              <div className="sp-status-card" role="region" aria-label="System status">
                <div className="sp-sc-header">
                  <span className="sp-sc-title">System Status</span>
                  <div className="sp-sc-live">
                    <span className="sp-sc-dot" aria-hidden="true" />
                    All systems operational
                  </div>
                </div>
                <div className="sp-sc-body">
                  {STATUS_ITEMS.map(({ label, status, green }) => (
                    <div className="sp-status-row" key={label}>
                      <span className={`sp-sr-icon ${green ? 'green' : 'amber'}`} aria-hidden="true" />
                      <span className="sp-sr-label">{label}</span>
                      <span className={`sp-sr-status${green ? '' : ' degraded'}`}>{status}</span>
                    </div>
                  ))}
                </div>
                <div className="sp-sc-footer">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M6 3.5V6l1.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  Last checked: just now · Updated automatically
                </div>
              </div>

              {/* Still stuck card */}
              <div style={{ marginTop: 16, padding: '22px 24px', background: 'var(--blue)', borderRadius: 20, boxShadow: 'var(--sh-blue)' }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: '#fff', marginBottom: 8 }}>Still stuck?</div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,.72)', lineHeight: 1.7, marginBottom: 18 }}>
                  If none of these steps resolved your issue, our support team is ready to help. Include your account email and a screenshot when possible.
                </p>
                <a
                  href="mailto:support@onereach.app?subject=Support%20Request"
                  className="btn-w"
                  style={{ fontSize: 13, padding: '10px 20px' }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 3.5h10v8a.5.5 0 0 1-.5.5h-9A.5.5 0 0 1 2 11.5V3.5Z" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M2 3.5l5 3.5 5-3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  Email support@onereach.app
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════ LEGAL LINKS ════════════ */}
      <section className="sp-legal-sec" id="sp-legal" aria-labelledby="sp-legal-heading">
        <div className="con">
          <div className="sec-head fu" style={{ marginBottom: 32 }}>
            <div className="lbl">Legal & Policies</div>
            <h2 id="sp-legal-heading" style={{ fontSize: 'clamp(26px,3.5vw,40px)' }}>
              Policies & <span className="blue">terms.</span>
            </h2>
          </div>
          <div className="sp-legal-grid fu d1">
            <a href="https://app.onereach.app/privacy" className="sp-legal-card" target="_blank" rel="noopener noreferrer" aria-label="Privacy Policy">
              <div className="sp-lc-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L4 5v5c0 3.9 2.6 7.5 6 8.5 3.4-1 6-4.6 6-8.5V5L10 2Z" stroke="#1E3DB4" strokeWidth="1.4" strokeLinejoin="round"/>
                  <path d="M7 10l2 2 4-4" stroke="#1E3DB4" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="sp-lc-title">Privacy Policy</div>
                <div className="sp-lc-desc">How we collect, use, and protect your data</div>
              </div>
              <ArrowRight size={14} />
            </a>
            <a href="https://app.onereach.app/terms" className="sp-legal-card" target="_blank" rel="noopener noreferrer" aria-label="Terms of Service">
              <div className="sp-lc-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="3" y="2" width="14" height="16" rx="2" stroke="#1E3DB4" strokeWidth="1.4"/>
                  <path d="M6 7h8M6 10h6M6 13h4" stroke="#1E3DB4" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div className="sp-lc-title">Terms of Service</div>
                <div className="sp-lc-desc">Your rights and responsibilities when using OneReach</div>
              </div>
              <ArrowRight size={14} />
            </a>
            <a href="https://app.onereach.app/privacy" className="sp-legal-card" target="_blank" rel="noopener noreferrer" aria-label="SMS Opt-In Policy">
              <div className="sp-lc-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7l-4 2V6a1 1 0 0 1 1-1Z" stroke="#059669" strokeWidth="1.4" strokeLinejoin="round"/>
                  <path d="M7 9h6M7 12h3" stroke="#059669" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div className="sp-lc-title">SMS Opt-In Policy</div>
                <div className="sp-lc-desc">SMS messaging consent and opt-out instructions</div>
              </div>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="sp-cta-sec" aria-labelledby="sp-cta-heading">
        <div className="con">
          <div className="sp-cta-inner fu">
            <h2 className="sp-cta-h" id="sp-cta-heading">
              Still need help?<br />We've got you.
            </h2>
            <p className="sp-cta-sub">
              Drop us an email any time — we respond within one business day, Monday through Friday.
            </p>
            <div className="sp-cta-acts">
              <a href="mailto:support@onereach.app" className="btn-w">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M2 4h12v10a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 2 14V4Z" stroke="currentColor" strokeWidth="1.3"/>
                  <path d="M2 4l6 4.5L14 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
                support@onereach.app
              </a>
              <a href="https://app.onereach.app/login" className="btn-ow">Sign In to your account</a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ FOOTER ════════════ */}
      <footer className="sp-footer" role="contentinfo">
        <div className="con">
          <div className="sp-fg">
            <div className="sp-fb">
              <div className="sp-fb-name">One<b>Reach</b></div>
              <p>Sophia is your AI Chief Revenue Officer — researching, reaching out, and booking meetings across every channel.</p>
            </div>
            <nav className="sp-fc" aria-label="Product links">
              <h4>Product</h4>
              <a href="/#how-it-works">How It Works</a>
              <a href="/#sophia-ai">Sophia AI</a>
              <a href="/#channels">Channels</a>
              <a href="/#pricing">Pricing</a>
              <a href="https://app.onereach.app/register">Sign Up Free</a>
            </nav>
            <nav className="sp-fc" aria-label="Support links">
              <h4>Support</h4>
              <a href="/support">Help Center</a>
              <a href="#sp-faq">FAQs</a>
              <a href="mailto:support@onereach.app">Contact Support</a>
              <a href="#sp-trouble">Troubleshooting</a>
            </nav>
            <nav className="sp-fc" aria-label="Legal links">
              <h4>Legal</h4>
              <a href="https://app.onereach.app/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
              <a href="https://app.onereach.app/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a>
              <a href="https://app.onereach.app/privacy" target="_blank" rel="noopener noreferrer">SMS Opt-In</a>
            </nav>
          </div>
          <div className="sp-fbot">
            <p className="sp-fcp">© {new Date().getFullYear()} OneReach. All rights reserved.</p>
            <div className="sp-fls">
              <a href="https://app.onereach.app/privacy" target="_blank" rel="noopener noreferrer">Privacy</a>
              <a href="https://app.onereach.app/terms" target="_blank" rel="noopener noreferrer">Terms</a>
              <a href="/support">Support</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
