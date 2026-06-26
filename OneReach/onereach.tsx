
​import { useEffect, useRef, useState, Fragment } from "react";
import { Logo } from "@/components/Logo";

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  const pageRef = useRef<HTMLDivElement>(null);
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');
  const [seats, setSeats] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("vis");
          }
        });
      },
      { threshold: 0.12 }
    );
    const els = pageRef.current?.querySelectorAll(".fu");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={pageRef} className="lp-page" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "#fff", color: "#0B1535", lineHeight: 1.6, overflowX: "hidden" }}>
      <style>{`
        :root {
          --blue:#1E3DB4; --blue-d:#162D90; --blue-m:#2549CC; --blue-l:#3B60E8;
          --blue-p:#EEF2FF; --blue-xp:#F5F7FF; --blue-gl:rgba(30,61,180,.16);
          --teal:#0891B2; --violet:#7C3AED; --emerald:#059669; --amber:#D97706; --red:#DC2626;
          --bg:#fff; --bg2:#F7F9FF; --bg3:#EEF2FF;
          --surf:#fff; --surf2:#F0F4FF;
          --bdr:rgba(30,61,180,.1); --bdr2:rgba(30,61,180,.06);
          --txt:#0B1535; --txt2:#3D4D72; --txt3:#7A8AAD;
          --sh:0 1px 4px rgba(30,61,180,.06),0 2px 12px rgba(0,0,0,.04);
          --sh-md:0 4px 24px rgba(30,61,180,.1),0 2px 8px rgba(0,0,0,.05);
          --sh-lg:0 12px 48px rgba(30,61,180,.15),0 4px 16px rgba(0,0,0,.06);
          --sh-blue:0 6px 32px rgba(30,61,180,.35);
        }
        .lp-page * { box-sizing: border-box; }
        .lp-page a { text-decoration: none; color: inherit; }
        .lp-page button { font-family: inherit; cursor: pointer; border: none; outline: none; }
        .con { max-width: 1160px; margin: 0 auto; padding: 0 40px; }
        .lbl {
          font-family: 'DM Mono', monospace; font-size: 10.5px; letter-spacing: 2.5px;
          text-transform: uppercase; color: var(--blue);
          display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .lbl::before, .lbl::after { content: ''; width: 20px; height: 1.5px; background: var(--blue); opacity: .45; }
        .lbl-l { justify-content: flex-start; }
        .lbl-l::before { display: none; }
        .lbl-l::after { display: none; }
        .lbl-l-after::after { display: none; }
        .blue { color: var(--blue); }
        .fu { opacity: 0; transform: translateY(28px); transition: opacity .75s ease, transform .75s ease; }
        .fu.vis { opacity: 1; transform: translateY(0); }
        .d1 { transition-delay: .1s; } .d2 { transition-delay: .2s; } .d3 { transition-delay: .3s; }
        .d4 { transition-delay: .4s; } .d5 { transition-delay: .5s; }
        .btn-p {
          display: inline-flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 700;
          padding: 13px 28px; border-radius: 10px; cursor: pointer; transition: all .22s;
          white-space: nowrap; font-family: 'Plus Jakarta Sans', sans-serif; letter-spacing: -.1px;
          background: var(--blue); color: #fff; box-shadow: var(--sh-blue); border: none;
        }
        .btn-p:hover { background: #3B60E8; transform: translateY(-2px); box-shadow: 0 10px 40px rgba(30,61,180,.45); }
        .btn-s {
          display: inline-flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 700;
          padding: 13px 28px; border-radius: 10px; cursor: pointer; transition: all .22s;
          white-space: nowrap; font-family: 'Plus Jakarta Sans', sans-serif; letter-spacing: -.1px;
          background: #F0F4FF; color: #0B1535; border: 1.5px solid rgba(30,61,180,.1);
        }
        .btn-s:hover { border-color: var(--blue); color: var(--blue); background: #EEF2FF; }
        .btn-w {
          display: inline-flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 700;
          padding: 13px 28px; border-radius: 10px; cursor: pointer; transition: all .22s;
          white-space: nowrap; font-family: 'Plus Jakarta Sans', sans-serif; letter-spacing: -.1px;
          background: #fff; color: var(--blue); border: none;
        }
        .btn-w:hover { background: rgba(255,255,255,.92); transform: translateY(-2px); box-shadow: 0 8px 32px rgba(0,0,0,.18); }
        .btn-ow {
          display: inline-flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 700;
          padding: 13px 28px; border-radius: 10px; cursor: pointer; transition: all .22s;
          white-space: nowrap; font-family: 'Plus Jakarta Sans', sans-serif; letter-spacing: -.1px;
          background: transparent; color: rgba(255,255,255,.8); border: 1.5px solid rgba(255,255,255,.28);
        }
        .btn-ow:hover { background: rgba(255,255,255,.1); color: #fff; border-color: rgba(255,255,255,.5); }
        /* Nav */
        .lp-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 200;
          background: rgba(255,255,255,.92); backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(30,61,180,.06);
        }
        .lp-nav .ni { max-width: 1160px; margin: 0 auto; padding: 0 40px; height: 64px; display: flex; align-items: center; }
        .nav-brand { display: flex; align-items: center; gap: 9px; }
        .nav-name { font-size: 19px; font-weight: 800; letter-spacing: -.3px; color: #0B1535; }
        .nav-name b { color: var(--blue); }
        .nav-links { display: flex; align-items: center; gap: 2px; flex: 1; margin-left: 24px; }
        .nav-links a { font-size: 13.5px; font-weight: 500; color: #3D4D72; padding: 7px 13px; border-radius: 8px; transition: all .18s; }
        .nav-links a:hover { color: #0B1535; background: #EEF2FF; }
        .nav-acts { margin-left: auto; display: flex; align-items: center; gap: 10px; }
        .nav-signin { font-size: 13.5px; font-weight: 600; color: #3D4D72; padding: 7px 14px; cursor: pointer; background: none; border: none; transition: color .18s; }
        .nav-signin:hover { color: var(--blue); }
        .nav-getstart {
          font-size: 13.5px; font-weight: 700; padding: 10px 22px; border-radius: 10px;
          background: var(--blue); color: #fff; box-shadow: 0 6px 32px rgba(30,61,180,.35);
          transition: all .22s; border: none; cursor: pointer;
        }
        .nav-getstart:hover { background: #3B60E8; transform: translateY(-1px); }
        /* Hero */
        .hero-section {
          padding-top: 64px; background: #F7F9FF; min-height: 100vh;
          display: flex; flex-direction: column; position: relative; overflow: hidden;
        }
        .hero-section::before {
          content: ''; position: absolute; inset: 0;
          background-image: radial-gradient(rgba(30,61,180,.07) 1.5px, transparent 1.5px);
          background-size: 28px 28px; opacity: .8; pointer-events: none;
        }
        .hero-glow { position: absolute; pointer-events: none; border-radius: 50%; filter: blur(80px); opacity: .5; }
        .hg1 { width: 650px; height: 500px; top: -120px; right: -60px; background: radial-gradient(circle, rgba(30,61,180,.12) 0%, transparent 70%); }
        .hg2 { width: 400px; height: 400px; bottom: -50px; left: 0; background: radial-gradient(circle, rgba(124,58,237,.07) 0%, transparent 70%); }
        .hero-body {
          position: relative; z-index: 1; flex: 1;
          max-width: 1160px; margin: 0 auto; padding: 72px 40px 0;
          display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center;
        }
        .h-pill {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
          padding: 6px 14px; border-radius: 100px; border: 1px solid rgba(30,61,180,.1); background: #fff;
          color: #7A8AAD; margin-bottom: 28px; box-shadow: 0 1px 4px rgba(30,61,180,.06), 0 2px 12px rgba(0,0,0,.04);
        }
        .h-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--blue); animation: blink 2s ease-in-out infinite; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: .2; } }
        .hero-h1 { font-size: clamp(48px, 6.5vw, 80px); font-weight: 800; line-height: 1.0; letter-spacing: -2.5px; color: #0B1535; margin: 0 0 22px; }
        .hero-h1 .accent { color: var(--blue); display: block; }
        .hero-h1 .sub { color: #7A8AAD; font-size: .72em; letter-spacing: -1px; }
        .h-desc { font-size: 17px; line-height: 1.9; color: #3D4D72; max-width: 460px; margin: 0 0 32px; }
        .h-ctas { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-bottom: 40px; }
        .h-trust { display: flex; align-items: center; gap: 12px; font-size: 13px; color: #7A8AAD; }
        .h-trust-check { display: flex; align-items: center; gap: 6px; }
        .trust-dot { width: 14px; height: 14px; border-radius: 50%; background: rgba(5,150,105,.15); border: 1px solid rgba(5,150,105,.2); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        /* Sophia orb visual */
        .hero-right { position: relative; height: 580px; display: flex; align-items: center; justify-content: center; }
        .sophia-center { position: absolute; top: 50%; left: 50%; z-index: 5; text-align: center; }
        .sc-orb {
          width: 156px; height: 156px; border-radius: 50%;
          background: linear-gradient(145deg, #2549CC, #1E3DB4);
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          box-shadow: 0 0 0 12px rgba(30,61,180,.08), 0 0 0 24px rgba(30,61,180,.04), 0 6px 32px rgba(30,61,180,.35);
          animation: sfloat 5s ease-in-out infinite;
        }
        @keyframes sfloat {
          0%, 100% { transform: translate(-50%,-50%) translateY(0); }
          50% { transform: translate(-50%,-50%) translateY(-10px); }
        }
        .sc-name { font-size: 20px; font-weight: 800; color: #fff; letter-spacing: -.3px; }
        .sc-role { font-family: 'DM Mono', monospace; font-size: 7.5px; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,.6); margin-top: 2px; }
        /* Orbit rings */
        .orbit { position: absolute; top: 50%; left: 50%; border-radius: 50%; border: 1.5px dashed; }
        .o1 { width: 270px; height: 270px; border-color: rgba(30,61,180,.15); animation: spin1 22s linear infinite; }
        .o2 { width: 390px; height: 390px; border-color: rgba(30,61,180,.08); animation: spin1 36s linear infinite reverse; }
        .o3 { width: 520px; height: 520px; border-color: rgba(30,61,180,.04); animation: spin1 52s linear infinite; }
        @keyframes spin1 { from { transform: translate(-50%,-50%) rotate(0deg); } to { transform: translate(-50%,-50%) rotate(360deg); } }
        /* Channel badges */
        .chbadge {
          position: absolute; z-index: 7;
          background: #fff; border: 1px solid rgba(30,61,180,.1);
          border-radius: 12px; padding: 9px 13px;
          display: flex; align-items: center; gap: 9px;
          box-shadow: 0 4px 24px rgba(30,61,180,.1), 0 2px 8px rgba(0,0,0,.05);
          font-size: 12px; font-weight: 600; color: #0B1535; white-space: nowrap;
        }
        .cb1 { top: 72px; left: -20px; animation: fc 4s ease-in-out infinite; }
        .cb2 { top: 130px; right: -20px; animation: fc 4s 1s ease-in-out infinite; }
        .cb3 { bottom: 130px; left: -30px; animation: fc 4s 2s ease-in-out infinite; }
        .cb4 { bottom: 72px; right: -20px; animation: fc 4s 3s ease-in-out infinite; }
        @keyframes fc { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        .cb-dot { width: 7px; height: 7px; border-radius: 50%; background: #059669; flex-shrink: 0; animation: blink 2s infinite; }
        .cb-icon { width: 26px; height: 26px; border-radius: 7px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        /* Icon nodes around orb */
        .inode {
          position: absolute; z-index: 6;
          background: #fff; border: 1px solid rgba(30,61,180,.12);
          border-radius: 12px; padding: 8px 11px;
          display: flex; align-items: center; gap: 7px;
          box-shadow: 0 3px 16px rgba(30,61,180,.09), 0 1px 4px rgba(0,0,0,.04);
          font-size: 11px; font-weight: 600; color: #3D4D72; white-space: nowrap;
        }
        .inode-icon { width: 24px; height: 24px; border-radius: 7px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .in1 { top: 200px; left: -60px; animation: fc 4.5s 0.5s ease-in-out infinite; }
        .in2 { top: 50px; left: 38%; animation: fc 4.5s 1.5s ease-in-out infinite; }
        .in3 { top: 270px; right: -55px; animation: fc 4.5s 0.8s ease-in-out infinite; }
        .in4 { bottom: 180px; left: 50px; animation: fc 4.5s 2.2s ease-in-out infinite; }
        .in5 { bottom: 170px; right: 45px; animation: fc 4.5s 1.8s ease-in-out infinite; }
        .in6 { bottom: 30px; left: 36%; animation: fc 4.5s 3s ease-in-out infinite; }
        /* Meetings badge */
        .mtg-badge {
          position: absolute; top: 18px; right: 36px; z-index: 8;
          background: var(--blue); border-radius: 16px; padding: 14px 20px;
          color: #fff; text-align: center; box-shadow: 0 6px 32px rgba(30,61,180,.35);
          animation: fc 5s ease-in-out infinite;
        }
        .mb-n { font-size: 32px; font-weight: 800; line-height: 1; letter-spacing: -1px; }
        .mb-l { font-family: 'DM Mono', monospace; font-size: 8px; letter-spacing: 1.5px; text-transform: uppercase; opacity: .65; margin-top: 3px; }
        /* Stats bar */
        .hstats {
          position: relative; z-index: 1;
          max-width: 1160px; margin: 0 auto; padding: 0 40px;
          display: grid; grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid rgba(30,61,180,.06);
        }
        .hsi { padding: 22px 0 28px 28px; border-right: 1px solid rgba(30,61,180,.06); }
        .hsi:first-child { padding-left: 0; }
        .hsi:last-child { border-right: none; }
        .hs-n { font-size: 36px; font-weight: 800; line-height: 1; letter-spacing: -1.5px; color: var(--blue); margin-bottom: 3px; }
        .hs-l { font-size: 12.5px; color: #7A8AAD; font-weight: 500; }
        /* Section heading */
        .sec-head { text-align: center; margin-bottom: 60px; }
        .sec-head h2 { font-size: clamp(32px, 4.5vw, 52px); font-weight: 800; line-height: 1.05; letter-spacing: -1.8px; color: #0B1535; margin: 12px 0 14px; }
        .sec-head p { color: #3D4D72; font-size: 16px; max-width: 500px; margin: 0 auto; }
        /* Loop section */
        .loop-sec { background: #fff; padding: 100px 0; }
        .loop-grid {
          display: grid; grid-template-columns: repeat(5, 1fr);
          border: 1px solid rgba(30,61,180,.1); border-radius: 28px;
          overflow: hidden; box-shadow: 0 4px 24px rgba(30,61,180,.1), 0 2px 8px rgba(0,0,0,.05);
        }
        .loop-step {
          padding: 28px 20px; border-right: 1px solid rgba(30,61,180,.1);
          background: #fff; position: relative; overflow: hidden; transition: background .25s;
        }
        .loop-step:last-child { border-right: none; }
        .loop-step:hover { background: #F7F9FF; }
        .loop-step.outcome { background: var(--blue); border-right: none; }
        .ls-num { font-family: 'DM Mono', monospace; font-size: 9.5px; letter-spacing: 2px; text-transform: uppercase; color: #7A8AAD; margin-bottom: 16px; display: block; }
        .loop-step.outcome .ls-num { color: rgba(255,255,255,.6); }
        .ls-icon {
          width: 52px; height: 52px; border-radius: 14px;
          border: 1px solid rgba(30,61,180,.1); background: #EEF2FF;
          display: flex; align-items: center; justify-content: center; margin-bottom: 18px;
        }
        .loop-step.outcome .ls-icon { background: rgba(255,255,255,.15); border-color: rgba(255,255,255,.2); }
        .ls-title { font-size: 16px; font-weight: 700; color: #0B1535; margin-bottom: 8px; }
        .loop-step.outcome .ls-title { color: #fff; font-size: 18px; }
        .ls-desc { font-size: 12px; line-height: 1.7; color: #3D4D72; }
        .loop-step.outcome .ls-desc { color: rgba(255,255,255,.75); }
        .ls-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 16px; }
        .lc-arrow {
          position: absolute; right: -11px; top: 50%; transform: translateY(-50%); z-index: 2;
          width: 22px; height: 22px; background: var(--blue);
          display: flex; align-items: center; justify-content: center; border-radius: 50%;
          box-shadow: 0 2px 8px rgba(30,61,180,.35);
        }
        .ls-tag {
          font-family: 'DM Mono', monospace; font-size: 8.5px; letter-spacing: .8px; text-transform: uppercase;
          padding: 3px 9px; border-radius: 100px; background: #EEF2FF; border: 1px solid rgba(30,61,180,.1); color: #7A8AAD;
        }
        .loop-step.outcome .ls-tag { background: rgba(255,255,255,.15); border-color: rgba(255,255,255,.2); color: rgba(255,255,255,.7); }
        /* Agents section */
        .agents-sec { background: #F7F9FF; padding: 100px 0; }
        .agents-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: start; }
        .alist-item { display: flex; align-items: flex-start; gap: 16px; padding: 20px 0; border-bottom: 1px solid rgba(30,61,180,.06); }
        .alist-item:last-child { border-bottom: none; }
        .al-icon-wrap { width: 44px; height: 44px; border-radius: 12px; border: 1px solid rgba(30,61,180,.1); background: #EEF2FF; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .al-title { font-size: 15px; font-weight: 700; color: #0B1535; margin-bottom: 4px; }
        .al-desc { font-size: 13px; line-height: 1.7; color: #3D4D72; }
        .al-tags { display: flex; gap: 5px; margin-top: 8px; flex-wrap: wrap; }
        .al-tag { font-family: 'DM Mono', monospace; font-size: 8.5px; letter-spacing: .8px; text-transform: uppercase; padding: 3px 9px; border-radius: 100px; background: #EEF2FF; border: 1px solid rgba(30,61,180,.1); color: #7A8AAD; }
        .agents-panel { background: #fff; border: 1px solid rgba(30,61,180,.1); border-radius: 28px; box-shadow: 0 4px 24px rgba(30,61,180,.1), 0 2px 8px rgba(0,0,0,.05); overflow: hidden; }
        .ap-header { padding: 20px 24px; border-bottom: 1px solid rgba(30,61,180,.06); display: flex; align-items: center; justify-content: space-between; background: #F7F9FF; }
        .ap-title { font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #7A8AAD; }
        .ap-live { display: flex; align-items: center; gap: 6px; font-family: 'DM Mono', monospace; font-size: 9.5px; letter-spacing: 1px; text-transform: uppercase; color: #059669; }
        .ap-dot { width: 7px; height: 7px; border-radius: 50%; background: #059669; animation: blink 2s infinite; }
        .agents-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 1px; background: rgba(30,61,180,.06); }
        .ag-cell { background: #fff; padding: 18px 10px; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 8px; transition: background .2s; cursor: default; }
        .ag-cell:hover { background: #EEF2FF; }
        .ag-icon { width: 36px; height: 36px; border-radius: 10px; border: 1px solid rgba(30,61,180,.1); background: #EEF2FF; display: flex; align-items: center; justify-content: center; }
        .ag-name { font-family: 'DM Mono', monospace; font-size: 8px; letter-spacing: .5px; color: #7A8AAD; line-height: 1.3; text-align: center; }
        .ap-sophia { padding: 16px 20px; background: var(--blue); display: flex; align-items: center; gap: 16px; }
        .aps-av { width: 42px; height: 42px; border-radius: 50%; background: rgba(255,255,255,.2); display: flex; align-items: center; justify-content: center; overflow: hidden; flex-shrink: 0; }
        .aps-name { font-size: 17px; font-weight: 800; color: #fff; margin-bottom: 1px; }
        .aps-role { font-size: 11px; color: rgba(255,255,255,.65); }
        .aps-status { margin-left: auto; display: flex; align-items: center; gap: 6px; font-size: 11px; color: rgba(255,255,255,.75); }
        .aps-dot { width: 7px; height: 7px; border-radius: 50%; background: #4ade80; animation: blink 2s infinite; box-shadow: 0 0 8px rgba(74,222,128,.6); }
        /* Channels */
        .ch-sec { background: #fff; padding: 100px 0; }
        .ch-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 52px; }
        .ch-card { background: #fff; border: 1px solid rgba(30,61,180,.1); border-radius: 14px; padding: 28px 22px; position: relative; overflow: hidden; transition: transform .25s, box-shadow .25s; }
        .ch-card:hover { transform: translateY(-5px); box-shadow: 0 12px 48px rgba(30,61,180,.15), 0 4px 16px rgba(0,0,0,.06); }
        .ch-bar { position: absolute; top: 0; left: 0; right: 0; height: 3px; transform: scaleX(0); transform-origin: left; transition: transform .3s; }
        .ch-card:hover .ch-bar { transform: scaleX(1); }
        .ch-icon-wrap { width: 52px; height: 52px; border-radius: 14px; border: 1px solid rgba(30,61,180,.1); background: #EEF2FF; display: flex; align-items: center; justify-content: center; margin-bottom: 18px; }
        .ch-name { font-size: 20px; font-weight: 800; letter-spacing: -.3px; margin-bottom: 10px; color: #0B1535; }
        .ch-desc { font-size: 13px; line-height: 1.8; color: #3D4D72; margin-bottom: 16px; }
        .ch-badge { font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 1.5px; text-transform: uppercase; padding: 4px 10px; border-radius: 100px; background: #EEF2FF; border: 1px solid rgba(30,61,180,.1); color: #7A8AAD; }
        /* Workflow */
        .wf-sec { background: #F7F9FF; padding: 100px 0; }
        .wf-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 52px; }
        .wf-card { background: #fff; border: 1px solid rgba(30,61,180,.1); border-radius: 14px; padding: 28px 24px; box-shadow: 0 1px 4px rgba(30,61,180,.06), 0 2px 12px rgba(0,0,0,.04); transition: transform .25s, box-shadow .25s; }
        .wf-card:hover { transform: translateY(-4px); box-shadow: 0 12px 48px rgba(30,61,180,.15), 0 4px 16px rgba(0,0,0,.06); border-color: rgba(30,61,180,.2); }
        .wf-top { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 16px; }
        .wf-icon { width: 40px; height: 40px; border-radius: 10px; border: 1px solid rgba(30,61,180,.1); background: #EEF2FF; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .wf-badge { font-family: 'DM Mono', monospace; font-size: 8.5px; letter-spacing: 1px; text-transform: uppercase; padding: 3px 9px; border-radius: 100px; color: var(--blue); background: #EEF2FF; border: 1px solid rgba(30,61,180,.15); }
        .wf-title { font-size: 16px; font-weight: 700; margin-bottom: 7px; color: #0B1535; }
        .wf-desc { font-size: 13px; line-height: 1.75; color: #3D4D72; }
        .wf-stat { margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(30,61,180,.06); display: flex; align-items: center; gap: 8px; }
        .wf-stat-n { font-size: 22px; font-weight: 800; color: var(--blue); letter-spacing: -.5px; line-height: 1; }
        .wf-stat-l { font-size: 12px; color: #7A8AAD; }
        /* Proof metrics */
        .proof-sec { background: #fff; padding: 100px 0; }
        .proof-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: rgba(30,61,180,.1); border: 1px solid rgba(30,61,180,.1); border-radius: 20px; overflow: hidden; margin-top: 52px; }
        .pg-item { background: #fff; padding: 40px 28px; text-align: center; }
        .pg-n { font-size: clamp(44px, 5.5vw, 68px); font-weight: 800; letter-spacing: -2.5px; line-height: 1; color: var(--blue); margin-bottom: 8px; }
        .pg-l { font-size: 14px; color: #3D4D72; font-weight: 500; }
        /* ── PRICING: Billing toggle ── */
        .btog { display: inline-flex; align-items: center; background: #EEF2FF; border: 1px solid rgba(30,61,180,.1); border-radius: 100px; padding: 4px; }
        .bt { font-size: 13px; font-weight: 600; padding: 8px 22px; border-radius: 100px; cursor: pointer; transition: all .2s; color: #7A8AAD; background: transparent; border: none; font-family: inherit; }
        .bt.on { background: var(--blue); color: #fff; box-shadow: 0 2px 12px rgba(30,61,180,.3); }
        .save-pill { display: inline-flex; align-items: center; gap: 4px; font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 1.5px; text-transform: uppercase; padding: 3px 9px; border-radius: 100px; background: rgba(5,150,105,.1); border: 1px solid rgba(5,150,105,.2); color: #059669; margin-left: 7px; }
        /* ── PRICING: Plans section ── */
        .plans-sec { padding: 72px 0 96px; background: #fff; }
        .plans-grid { display: grid; grid-template-columns: 1fr 1.1fr 1fr; gap: 18px; align-items: start; }
        .plan-card { background: #fff; border: 1px solid rgba(30,61,180,.1); border-radius: 20px; padding: 30px 26px; box-shadow: 0 1px 4px rgba(30,61,180,.06),0 2px 12px rgba(0,0,0,.04); display: flex; flex-direction: column; position: relative; overflow: hidden; }
        .plan-card.feat { background: var(--blue); border-color: var(--blue); box-shadow: 0 6px 32px rgba(30,61,180,.38),0 0 0 4px rgba(30,61,180,.1); padding: 34px 26px; }
        .plan-card.dark { background: #0B1535; border-color: #0B1535; }
        .pc-pop { position: absolute; top: 0; left: 50%; transform: translateX(-50%); background: #fff; color: var(--blue); font-family: 'DM Mono',monospace; font-size: 8.5px; letter-spacing: 1.5px; text-transform: uppercase; padding: 5px 18px; border-radius: 0 0 12px 12px; font-weight: 600; box-shadow: 0 4px 12px rgba(30,61,180,.2); white-space: nowrap; }
        .pc-badge { display: inline-block; font-family: 'DM Mono',monospace; font-size: 9px; letter-spacing: 1.5px; text-transform: uppercase; padding: 4px 12px; border-radius: 100px; margin-bottom: 18px; align-self: flex-start; background: #EEF2FF; color: var(--blue); border: 1px solid rgba(30,61,180,.15); }
        .plan-card.feat .pc-badge { background: rgba(255,255,255,.18); color: rgba(255,255,255,.85); border-color: transparent; }
        .plan-card.dark .pc-badge { background: rgba(255,255,255,.1); color: rgba(255,255,255,.7); border-color: transparent; }
        .pc-name { font-size: 24px; font-weight: 800; letter-spacing: -.5px; margin-bottom: 5px; color: #0B1535; }
        .plan-card.feat .pc-name, .plan-card.dark .pc-name { color: #fff; }
        .pc-tagline { font-size: 13px; color: #3D4D72; margin-bottom: 24px; line-height: 1.55; }
        .plan-card.feat .pc-tagline, .plan-card.dark .pc-tagline { color: rgba(255,255,255,.6); }
        .pc-price-block { margin-bottom: 20px; }
        .pc-price-row { display: flex; align-items: baseline; gap: 4px; margin-bottom: 3px; }
        .pc-dollar { font-size: 22px; font-weight: 700; line-height: 1; margin-top: 6px; color: #3D4D72; }
        .plan-card.feat .pc-dollar, .plan-card.dark .pc-dollar { color: rgba(255,255,255,.6); }
        .pc-amount { font-size: 56px; font-weight: 800; letter-spacing: -2.5px; line-height: 1; color: #0B1535; }
        .plan-card.feat .pc-amount, .plan-card.dark .pc-amount { color: #fff; }
        .pc-free { font-size: 44px; font-weight: 800; letter-spacing: -1.5px; color: #0B1535; }
        .plan-card.feat .pc-free { color: rgba(255,255,255,.9); }
        .plan-card.dark .pc-free { color: rgba(255,255,255,.9); }
        .pc-per { font-size: 13px; color: #7A8AAD; font-weight: 500; align-self: flex-end; padding-bottom: 8px; }
        .plan-card.feat .pc-per, .plan-card.dark .pc-per { color: rgba(255,255,255,.5); }
        .pc-note { font-size: 12px; color: #7A8AAD; }
        .plan-card.feat .pc-note, .plan-card.dark .pc-note { color: rgba(255,255,255,.45); }
        /* Seat picker */
        .seat-row { display: flex; align-items: center; justify-content: space-between; padding: 11px 14px; border-radius: 10px; margin-bottom: 18px; background: #EEF2FF; border: 1px solid rgba(30,61,180,.1); }
        .plan-card.feat .seat-row { background: rgba(255,255,255,.14); border-color: rgba(255,255,255,.18); }
        .sr-lbl { font-size: 12.5px; font-weight: 600; color: #3D4D72; }
        .plan-card.feat .sr-lbl { color: rgba(255,255,255,.7); }
        .sr-ctrl { display: flex; align-items: center; gap: 10px; }
        .sr-btn { width: 28px; height: 28px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 600; line-height: 1; cursor: pointer; transition: all .18s; font-family: inherit; background: #fff; border: 1px solid rgba(30,61,180,.1); color: #0B1535; }
        .plan-card.feat .sr-btn { background: rgba(255,255,255,.2); color: #fff; border-color: rgba(255,255,255,.25); }
        .sr-btn:hover { border-color: var(--blue); color: var(--blue); }
        .plan-card.feat .sr-btn:hover { background: rgba(255,255,255,.3); border-color: rgba(255,255,255,.4); }
        .sr-val { font-size: 17px; font-weight: 800; min-width: 24px; text-align: center; color: #0B1535; }
        .plan-card.feat .sr-val { color: #fff; }
        .sr-unit { font-size: 12px; color: #7A8AAD; }
        .plan-card.feat .sr-unit { color: rgba(255,255,255,.5); }
        /* Credits block */
        .pc-credits { display: flex; align-items: center; gap: 10px; padding: 13px 14px; border-radius: 10px; margin-bottom: 22px; background: #EEF2FF; border: 1px solid rgba(30,61,180,.1); }
        .plan-card.feat .pc-credits { background: rgba(255,255,255,.14); border-color: rgba(255,255,255,.18); }
        .plan-card.dark .pc-credits { background: rgba(255,255,255,.07); border-color: rgba(255,255,255,.1); }
        .pcc-icon { width: 34px; height: 34px; border-radius: 9px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; background: var(--blue-p,#EEF2FF); }
        .plan-card.feat .pcc-icon, .plan-card.dark .pcc-icon { background: rgba(255,255,255,.18); }
        .pcc-n { font-size: 19px; font-weight: 800; letter-spacing: -.5px; line-height: 1; color: #0B1535; }
        .plan-card.feat .pcc-n, .plan-card.dark .pcc-n { color: #fff; }
        .pcc-l { font-size: 11px; color: #7A8AAD; }
        .plan-card.feat .pcc-l, .plan-card.dark .pcc-l { color: rgba(255,255,255,.5); }
        /* Plan divider */
        .pc-div { height: 1px; margin: 20px 0; background: rgba(30,61,180,.06); }
        .plan-card.feat .pc-div { background: rgba(255,255,255,.14); }
        .plan-card.dark .pc-div { background: rgba(255,255,255,.1); }
        /* Plan features */
        .pc-feats { list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: 28px; flex: 1; padding: 0; }
        .pc-feats li { display: flex; align-items: flex-start; gap: 9px; font-size: 13px; line-height: 1.5; color: #3D4D72; }
        .plan-card.feat .pc-feats li, .plan-card.dark .pc-feats li { color: rgba(255,255,255,.75); }
        .plan-chk { width: 18px; height: 18px; border-radius: 5px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; background: #EEF2FF; border: 1px solid rgba(30,61,180,.1); }
        .plan-card.feat .plan-chk { background: rgba(255,255,255,.18); border-color: rgba(255,255,255,.2); }
        .plan-card.dark .plan-chk { background: rgba(255,255,255,.1); border-color: rgba(255,255,255,.15); }
        .plan-no-chk { width: 18px; height: 18px; border-radius: 5px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; opacity: .35; background: rgba(0,0,0,.05); border: 1px solid rgba(0,0,0,.08); }
        /* ── PRICING: Credits explainer ── */
        .credits-sec { padding: 80px 0 96px; background: #F7F9FF; }
        .cexp-grid { display: grid; grid-template-columns: 1.15fr 1fr; gap: 64px; align-items: start; margin-top: 56px; }
        .action-list { display: flex; flex-direction: column; gap: 8px; }
        .al-row { display: flex; align-items: center; gap: 12px; padding: 13px 16px; border-radius: 12px; background: #fff; border: 1px solid rgba(30,61,180,.1); box-shadow: 0 1px 4px rgba(30,61,180,.06),0 2px 12px rgba(0,0,0,.04); transition: border-color .18s, transform .18s; }
        .al-row:hover { border-color: rgba(30,61,180,.22); transform: translateX(3px); }
        .al-icon { width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .al-body { flex: 1; }
        .al-name { font-size: 13.5px; font-weight: 700; color: #0B1535; margin-bottom: 1px; }
        .al-desc { font-size: 11.5px; color: #7A8AAD; }
        .al-cost { font-family: 'DM Mono',monospace; font-size: 11px; padding: 4px 11px; border-radius: 100px; background: #EEF2FF; border: 1px solid rgba(30,61,180,.1); color: var(--blue); white-space: nowrap; font-weight: 500; }
        .al-cost-violet { font-family: 'DM Mono',monospace; font-size: 11px; padding: 4px 11px; border-radius: 100px; background: rgba(124,58,237,.08); border: 1px solid rgba(124,58,237,.15); color: #7C3AED; white-space: nowrap; font-weight: 500; }
        .rtiers { display: flex; flex-direction: column; gap: 8px; }
        .rt { display: flex; align-items: center; gap: 12px; padding: 14px 16px; border-radius: 12px; background: #fff; border: 1px solid rgba(30,61,180,.1); box-shadow: 0 1px 4px rgba(30,61,180,.06),0 2px 12px rgba(0,0,0,.04); transition: border-color .18s; }
        .rt:hover { border-color: rgba(30,61,180,.2); }
        .rt.rt-feat { background: var(--blue); border-color: var(--blue); }
        .rt-icon { width: 40px; height: 40px; border-radius: 11px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; background: #EEF2FF; border: 1px solid rgba(30,61,180,.1); }
        .rt.rt-feat .rt-icon { background: rgba(255,255,255,.18); border-color: rgba(255,255,255,.2); }
        .rt-name { font-size: 14px; font-weight: 700; color: #0B1535; margin-bottom: 2px; }
        .rt.rt-feat .rt-name { color: #fff; }
        .rt-desc { font-size: 11.5px; color: #7A8AAD; }
        .rt.rt-feat .rt-desc { color: rgba(255,255,255,.6); }
        .rt-pill { margin-left: auto; white-space: nowrap; flex-shrink: 0; font-family: 'DM Mono',monospace; font-size: 11px; padding: 5px 13px; border-radius: 100px; background: #EEF2FF; border: 1px solid rgba(30,61,180,.1); color: #7A8AAD; }
        .rt.rt-feat .rt-pill { background: rgba(255,255,255,.18); border-color: rgba(255,255,255,.2); color: #fff; }
        .rt-free { margin-left: auto; white-space: nowrap; font-family: 'DM Mono',monospace; font-size: 10.5px; padding: 5px 13px; border-radius: 100px; background: rgba(5,150,105,.1); border: 1px solid rgba(5,150,105,.2); color: #059669; }
        .math-box { margin-top: 16px; padding: 18px 20px; background: #fff; border: 1px solid rgba(30,61,180,.1); border-radius: 14px; box-shadow: 0 1px 4px rgba(30,61,180,.06),0 2px 12px rgba(0,0,0,.04); }
        .math-title { font-size: 12px; font-weight: 700; color: #0B1535; margin-bottom: 12px; display: flex; align-items: center; gap: 6px; }
        .math-row { display: flex; justify-content: space-between; align-items: center; padding: 5px 0; border-bottom: 1px solid rgba(30,61,180,.06); font-size: 12.5px; }
        .math-row:last-child { border-bottom: none; }
        .math-row span:first-child { color: #3D4D72; }
        .math-row span:last-child { color: var(--blue); font-weight: 600; font-family: 'DM Mono',monospace; font-size: 11px; }
        /* ── PRICING: Top-up packs ── */
        .topup-sec { padding: 80px 0 96px; background: #fff; }
        .topup-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; margin-top: 52px; }
        .tu { background: #fff; border: 1px solid rgba(30,61,180,.1); border-radius: 20px; padding: 28px 24px; display: flex; flex-direction: column; position: relative; overflow: hidden; box-shadow: 0 1px 4px rgba(30,61,180,.06),0 2px 12px rgba(0,0,0,.04); transition: transform .25s,box-shadow .25s,border-color .25s; }
        .tu:hover { transform: translateY(-4px); box-shadow: 0 12px 48px rgba(30,61,180,.15),0 4px 16px rgba(0,0,0,.06); border-color: rgba(30,61,180,.22); }
        .tu.tu-feat { background: var(--blue); border-color: var(--blue); box-shadow: 0 6px 32px rgba(30,61,180,.38); transform: scale(1.03); }
        .tu.tu-feat:hover { transform: scale(1.03) translateY(-4px); box-shadow: 0 16px 56px rgba(30,61,180,.5); }
        .tu-top-tag { position: absolute; top: 0; right: 0; background: rgba(255,255,255,.2); font-family: 'DM Mono',monospace; font-size: 8.5px; letter-spacing: 1.5px; text-transform: uppercase; padding: 5px 14px; border-radius: 0 20px 0 12px; color: #fff; }
        .tu-icon { width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; background: #EEF2FF; border: 1px solid rgba(30,61,180,.1); }
        .tu.tu-feat .tu-icon { background: rgba(255,255,255,.16); border-color: rgba(255,255,255,.18); }
        .tu-name { font-size: 13.5px; font-weight: 700; margin-bottom: 14px; color: #3D4D72; }
        .tu.tu-feat .tu-name { color: rgba(255,255,255,.7); }
        .tu-credits { font-size: 40px; font-weight: 800; letter-spacing: -1.5px; line-height: 1; margin-bottom: 2px; color: #0B1535; }
        .tu.tu-feat .tu-credits { color: #fff; }
        .tu-clbl { font-family: 'DM Mono',monospace; font-size: 9.5px; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 16px; color: #7A8AAD; }
        .tu.tu-feat .tu-clbl { color: rgba(255,255,255,.5); }
        .tu-div { height: 1px; margin: 14px 0; background: rgba(30,61,180,.06); }
        .tu.tu-feat .tu-div { background: rgba(255,255,255,.15); }
        .tu-price-row { display: flex; align-items: baseline; gap: 3px; margin-bottom: 4px; }
        .tu-dollar { font-size: 18px; font-weight: 700; margin-top: 5px; color: #3D4D72; }
        .tu.tu-feat .tu-dollar { color: rgba(255,255,255,.6); }
        .tu-price { font-size: 36px; font-weight: 800; letter-spacing: -1.5px; line-height: 1; color: #0B1535; }
        .tu.tu-feat .tu-price { color: #fff; }
        .tu-discount { display: flex; align-items: center; gap: 6px; font-size: 12.5px; font-weight: 600; margin-bottom: 14px; color: #059669; }
        .tu.tu-feat .tu-discount { color: rgba(255,255,255,.85); }
        .tu-cpp { font-size: 11.5px; margin-bottom: 14px; color: #7A8AAD; }
        .tu.tu-feat .tu-cpp { color: rgba(255,255,255,.5); }
        .tu-never { display: flex; align-items: center; gap: 5px; font-size: 12px; margin-bottom: 20px; color: #059669; }
        .tu.tu-feat .tu-never { color: rgba(255,255,255,.8); }
        .tu-feats { list-style: none; display: flex; flex-direction: column; gap: 8px; margin-bottom: 22px; flex: 1; padding: 0; }
        .tu-feats li { display: flex; align-items: center; gap: 7px; font-size: 12.5px; color: #3D4D72; }
        .tu.tu-feat .tu-feats li { color: rgba(255,255,255,.75); }
        .tu-chk { width: 16px; height: 16px; border-radius: 4px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; background: #EEF2FF; border: 1px solid rgba(30,61,180,.1); }
        .tu.tu-feat .tu-chk { background: rgba(255,255,255,.18); border-color: rgba(255,255,255,.2); }
        /* ── PRICING: Compare table ── */
        .cmp-sec { padding: 80px 0 96px; background: #F7F9FF; }
        .cmp-table { margin-top: 52px; border: 1px solid rgba(30,61,180,.1); border-radius: 20px; overflow: hidden; box-shadow: 0 4px 24px rgba(30,61,180,.1),0 2px 8px rgba(0,0,0,.05); }
        .cmp-head { display: grid; grid-template-columns: 2.2fr 1fr 1.1fr 1fr; background: #EEF2FF; border-bottom: 1px solid rgba(30,61,180,.1); }
        .ch-col { padding: 16px 20px; font-size: 12.5px; font-weight: 700; color: #3D4D72; text-align: center; }
        .ch-col:first-child { text-align: left; padding-left: 28px; }
        .ch-col.hfeat { background: var(--blue); color: #fff; }
        .cmp-grp-lbl { padding: 12px 28px; background: #F7F9FF; font-family: 'DM Mono',monospace; font-size: 9.5px; letter-spacing: 2px; text-transform: uppercase; color: #7A8AAD; border-bottom: 1px solid rgba(30,61,180,.06); }
        .cmp-row { display: grid; grid-template-columns: 2.2fr 1fr 1.1fr 1fr; border-bottom: 1px solid rgba(30,61,180,.06); transition: background .15s; }
        .cmp-row:last-child { border-bottom: none; }
        .cmp-row:hover { background: #EEF2FF; }
        .cr { padding: 13px 20px; font-size: 13px; text-align: center; display: flex; align-items: center; justify-content: center; color: #3D4D72; }
        .cr:first-child { text-align: left; justify-content: flex-start; padding-left: 28px; color: #0B1535; font-weight: 500; }
        .cr.cfeat { background: rgba(30,61,180,.025); }
        .yes-ic { width: 20px; height: 20px; border-radius: 6px; background: rgba(5,150,105,.1); border: 1px solid rgba(5,150,105,.2); display: flex; align-items: center; justify-content: center; }
        .no-ic { width: 20px; height: 20px; border-radius: 6px; background: rgba(0,0,0,.04); border: 1px solid rgba(0,0,0,.07); display: flex; align-items: center; justify-content: center; opacity: .4; }
        .ct { font-size: 12.5px; font-weight: 600; color: var(--blue); }
        .cg { font-size: 12.5px; color: #7A8AAD; }
        /* ── PRICING: FAQ ── */
        .faq-sec { padding: 80px 0 96px; background: #fff; }
        .faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 52px; }
        .faq-card { background: #fff; border: 1px solid rgba(30,61,180,.1); border-radius: 14px; padding: 20px 22px; cursor: pointer; transition: border-color .2s; }
        .faq-card:hover { border-color: rgba(30,61,180,.2); }
        .faq-card.open { border-color: var(--blue); background: #F5F7FF; }
        .faq-q { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }
        .faq-q span { font-size: 14px; font-weight: 700; color: #0B1535; line-height: 1.45; }
        .faq-ico { width: 22px; height: 22px; border-radius: 6px; background: #EEF2FF; border: 1px solid rgba(30,61,180,.1); display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: all .2s; }
        .faq-card.open .faq-ico { background: var(--blue); border-color: var(--blue); transform: rotate(45deg); }
        .faq-a { font-size: 13.5px; line-height: 1.75; color: #3D4D72; margin-top: 12px; }
        /* CTA */
        .cta-sec { background: var(--blue); padding: 80px 0; text-align: center; position: relative; overflow: hidden; }
        .cta-sec::before { content: ''; position: absolute; inset: 0; background-image: radial-gradient(rgba(255,255,255,.05) 1.5px, transparent 1.5px); background-size: 24px 24px; }
        .cta-inner { position: relative; z-index: 1; }
        .cta-h { font-size: clamp(38px, 5.5vw, 68px); font-weight: 800; color: #fff; letter-spacing: -2px; line-height: 1.02; margin-bottom: 16px; }
        .cta-sub { font-size: 17px; color: rgba(255,255,255,.7); max-width: 460px; margin: 0 auto 36px; }
        .cta-acts { display: flex; align-items: center; justify-content: center; gap: 12px; flex-wrap: wrap; }
        /* Footer */
        .lp-footer { background: #F7F9FF; border-top: 1px solid rgba(30,61,180,.06); padding: 52px 0 28px; }
        .fg { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 52px; margin-bottom: 40px; }
        .fb { display: flex; flex-direction: column; gap: 14px; }
        .fb-name { font-size: 18px; font-weight: 800; letter-spacing: -.3px; color: #0B1535; }
        .fb-name b { color: var(--blue); }
        .fb p { font-size: 13px; color: #7A8AAD; line-height: 1.75; max-width: 240px; }
        .fc h4 { font-size: 12px; font-weight: 700; margin-bottom: 14px; color: #0B1535; }
        .fc a { display: block; font-size: 13px; color: #7A8AAD; padding: 3px 0; transition: color .18s; }
        .fc a:hover { color: var(--blue); }
        .fbot { border-top: 1px solid rgba(30,61,180,.06); padding-top: 20px; display: flex; align-items: center; justify-content: space-between; }
        .fcp { font-size: 12px; color: #7A8AAD; }
        .fls { display: flex; gap: 16px; }
        .fls a { font-size: 12px; color: #7A8AAD; transition: color .18s; }
        .fls a:hover { color: var(--blue); }
      `}</style>

      {/* NAV */}
      <nav className="lp-nav">
        <div className="ni">
          <div className="nav-brand">
            <Logo size="md" />
          </div>
          <div className="nav-links">
            <a href="#how-it-works">How It Works</a>
            <a href="#sophia-ai">Sophia AI</a>
            <a href="#channels">Channels</a>
            <a href="#capabilities">Use Cases</a>
            <a href="#pricing">Pricing</a>
          </div>
          <div className="nav-acts">
            <a href="/login"><button className="nav-signin">Sign In</button></a>
            <button className="nav-getstart" onClick={onGetStarted}>Get Started Free</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-glow hg1" />
        <div className="hero-glow hg2" />
        <div className="hero-body">
          {/* Left */}
          <div style={{ paddingBottom: 72 }}>
            <div className="h-pill">
              <span className="h-dot" />
              <span>AI-Powered Sales Automation</span>
            </div>
            <h1 className="hero-h1">
              Sophia<span className="accent blue">Books Your</span>
              <span className="accent">Meetings.</span>
              <span className="sub" style={{ display: "block", marginTop: 8 }}>You Just Show Up.</span>
            </h1>
            <p className="h-desc">
              Sophia researches companies, finds the right contacts, writes personalized messages,
              and manages follow-ups — across <b>LinkedIn, Email, SMS & WhatsApp</b>.
            </p>
            <div className="h-ctas">
              <a href="/register">
                <button className="btn-p" onClick={onGetStarted}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2l5 3v6l-5 3-5-3V5l5-3z" fill="white" opacity=".8"/><circle cx="8" cy="8" r="2" fill="white"/></svg>
                  Get Started Free
                </button>
              </a>
              <a href="#how-it-works" className="btn-s">See How It Works</a>
            </div>
            <div className="h-trust">
              <div className="h-trust-check">
                <div className="trust-dot">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#059669" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span>No credit card</span>
              </div>
              <div className="h-trust-check">
                <div className="trust-dot">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#059669" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span>500 free credits/mo</span>
              </div>
              <div className="h-trust-check">
                <div className="trust-dot">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#059669" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span>Up to 2 users free</span>
              </div>
            </div>
          </div>

          {/* Right: Sophia visual */}
          <div className="hero-right">
            {/* Orbit rings */}
            <div className="orbit o1" />
            <div className="orbit o2" />
            <div className="orbit o3" />

            {/* Sophia orb */}
            <div className="sophia-center">
              <div className="sc-orb">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" style={{ marginBottom: 4 }}>
                  <circle cx="18" cy="18" r="16" fill="rgba(255,255,255,.15)"/>
                  <path d="M11 18c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="18" cy="18" r="3" fill="white"/>
                  <path d="M18 8v3M18 25v3M8 18h3M25 18h3" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity=".5"/>
                </svg>
                <div className="sc-name">Sophia</div>
                <div className="sc-role">AI Sales Agent</div>
              </div>
            </div>

            {/* Icon nodes around the orb */}
            <div className="inode in1">
              <div className="inode-icon" style={{ background: "#EEF2FF" }}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="5.5" cy="5.5" r="4" stroke="#1E3DB4" strokeWidth="1.3"/><path d="M8.5 8.5l2.5 2.5" stroke="#1E3DB4" strokeWidth="1.3" strokeLinecap="round"/></svg>
              </div>
              Discover
            </div>
            <div className="inode in2">
              <div className="inode-icon" style={{ background: "rgba(124,58,237,.08)" }}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1.5c2.8 0 5 2.2 5 5 0 1.5-.7 2.9-1.7 3.8" stroke="#7C3AED" strokeWidth="1.3" strokeLinecap="round"/><path d="M3.2 9.8A5 5 0 0 1 6.5 1.5" stroke="#7C3AED" strokeWidth="1.3" strokeLinecap="round" opacity=".4"/><circle cx="6.5" cy="6.5" r="1.8" fill="#7C3AED" opacity=".3"/></svg>
              </div>
              Intel
            </div>
            <div className="inode in3">
              <div className="inode-icon" style={{ background: "rgba(8,145,178,.08)" }}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1.5 9L4 5l2.5 3L9 4l2.5 5" stroke="#0891B2" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              Signal
            </div>
            <div className="inode in4">
              <div className="inode-icon" style={{ background: "rgba(5,150,105,.08)" }}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="6.5" r="5" stroke="#059669" strokeWidth="1.2"/><path d="M4 6.5l2 2 3-3" stroke="#059669" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              Enrich
            </div>
            <div className="inode in5">
              <div className="inode-icon" style={{ background: "rgba(37,211,102,.08)" }}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="1" y="1" width="11" height="11" rx="3" fill="#25D366" opacity=".8"/><path d="M6.5 2.3C4.1 2.3 2.3 4.1 2.3 6.5c0 .9.3 1.7.7 2.4L2.3 11 5 10.3c.7.4 1.5.7 2.3.7h.2C9.9 11 11.7 9.1 11.7 6.7c0-2.5-2.1-4.4-4.7-4.4h-.5z" stroke="white" strokeWidth=".7"/></svg>
              </div>
              WhatsApp Sent
            </div>
            <div className="inode in6">
              <div className="inode-icon" style={{ background: "rgba(217,119,6,.08)" }}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="1.5" y="3.5" width="10" height="8" rx="2" stroke="#D97706" strokeWidth="1.2"/><path d="M4 3.5V2.5a2.5 2.5 0 0 1 5 0v1" stroke="#D97706" strokeWidth="1.2" strokeLinecap="round"/><circle cx="6.5" cy="8" r="1.2" fill="#D97706"/></svg>
              </div>
              Pipeline
            </div>

            {/* Floating channel badges */}
            <div className="chbadge cb1">
              <div className="cb-icon" style={{ background: "#EEF2FF" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="1" width="12" height="12" rx="3" fill="#0077B5"/><path d="M3.5 5.5h2v5h-2zm1-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm2.5 3h1.5v.7c.3-.5.9-.8 1.6-.8C11 5.4 12 6.3 12 8v2.5H10V8.5c0-.9-.4-1.3-1-1.3-.7 0-1.2.5-1.2 1.4v1.9H6V5.5z" fill="white"/></svg>
              </div>
              <div className="cb-dot" />
              <span>LinkedIn sent</span>
            </div>
            <div className="chbadge cb2">
              <div className="cb-icon" style={{ background: "#EEF2FF" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="1" width="12" height="12" rx="3" fill="#1E3DB4"/><path d="M3 5h8v5a.5.5 0 0 1-.5.5h-7A.5.5 0 0 1 3 10V5Z" stroke="white" strokeWidth=".8"/><path d="M3 5l4 3 4-3" stroke="white" strokeWidth=".8" strokeLinecap="round"/></svg>
              </div>
              <div className="cb-dot" />
              <span>Email opened</span>
            </div>
            <div className="chbadge cb3">
              <div className="cb-icon" style={{ background: "rgba(5,150,105,.08)" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="1" width="12" height="12" rx="3" fill="#059669"/><path d="M3 4h8a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H5l-2.5 1.5V4.5A.5.5 0 0 1 3 4Z" stroke="white" strokeWidth=".8"/><path d="M5 7h4M5 9h2.5" stroke="white" strokeWidth=".8" strokeLinecap="round"/></svg>
              </div>
              <div className="cb-dot" />
              <span>SMS replied</span>
            </div>
            <div className="chbadge cb4">
              <div className="cb-icon" style={{ background: "#EEF2FF" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="1" width="12" height="12" rx="3" fill="#1E3DB4"/><rect x="3" y="3.5" width="8" height="7" rx="1" stroke="white" strokeWidth=".8"/><path d="M5 6h4M5 8h2.5" stroke="white" strokeWidth=".8" strokeLinecap="round"/><path d="M4 2.5v2M10 2.5v2" stroke="white" strokeWidth=".8" strokeLinecap="round"/></svg>
              </div>
              <div className="cb-dot" />
              <span>Meeting booked</span>
            </div>

            {/* Meetings badge */}
            <div className="mtg-badge">
              <div className="mb-n">47</div>
              <div className="mb-l">Meetings this month</div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="hstats">
          <div className="hsi">
            <div className="hs-n">12k+</div>
            <div className="hs-l">Companies researched</div>
          </div>
          <div className="hsi">
            <div className="hs-n">84k+</div>
            <div className="hs-l">Contacts enriched</div>
          </div>
          <div className="hsi">
            <div className="hs-n">2.1M</div>
            <div className="hs-l">Sequences sent</div>
          </div>
          <div className="hsi">
            <div className="hs-n">8,400+</div>
            <div className="hs-l">Meetings booked</div>
          </div>
        </div>
      </section>

      {/* HOW SOPHIA WORKS */}
      <section id="how-it-works" className="loop-sec">
        <div className="con">
          <div className="sec-head fu">
            <div className="lbl">How It Works</div>
            <h2>Research. Reach. <span className="blue">Book.</span></h2>
            <p>Sophia handles the entire outreach loop — from finding targets to landing meetings — so your team closes, not chases.</p>
          </div>
          <div className="loop-grid fu d1">
            <div className="loop-step">
              <div className="lc-arrow">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3 2l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span className="ls-num">Step 01</span>
              <div className="ls-icon">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="9" cy="9" r="6" stroke="#1E3DB4" strokeWidth="1.5"/><path d="M14 14l4 4" stroke="#1E3DB4" strokeWidth="1.5" strokeLinecap="round"/><path d="M9 6v3H12" stroke="#1E3DB4" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="ls-title">Discover</div>
              <p className="ls-desc">Sophia searches Apollo & PDL to find companies matching your ideal customer profile — by industry, size, location, and revenue.</p>
              <div className="ls-tags">
                <span className="ls-tag">Apollo</span>
                <span className="ls-tag">PDL</span>
                <span className="ls-tag">ICP Filters</span>
              </div>
            </div>
            <div className="loop-step">
              <div className="lc-arrow">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3 2l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span className="ls-num">Step 02</span>
              <div className="ls-icon">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="3" width="16" height="16" rx="4" stroke="#0891B2" strokeWidth="1.5"/><path d="M7 8h8M7 11h6M7 14h4" stroke="#0891B2" strokeWidth="1.3" strokeLinecap="round"/></svg>
              </div>
              <div className="ls-title">Research</div>
              <p className="ls-desc">A 4-agent AI pipeline runs: Perplexity for real-time intel, GPT-4o for synthesis, Apollo for contacts, scoring for persona match.</p>
              <div className="ls-tags">
                <span className="ls-tag">Perplexity</span>
                <span className="ls-tag">GPT-4o</span>
                <span className="ls-tag">4 Agents</span>
              </div>
            </div>
            <div className="loop-step">
              <div className="lc-arrow">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3 2l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span className="ls-num">Step 03</span>
              <div className="ls-icon">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 5h14M4 9h10M4 13h12" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round"/><path d="M6 17l3 3 7-7" stroke="#7C3AED" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="ls-title">Outreach</div>
              <p className="ls-desc">AI-written messages go out across LinkedIn, Email, SMS & WhatsApp at optimal times — each personalized to the contact's role and company news.</p>
              <div className="ls-tags">
                <span className="ls-tag">Multi-channel</span>
                <span className="ls-tag">AI-written</span>
                <span className="ls-tag">LangGraph</span>
              </div>
            </div>
            <div className="loop-step">
              <div className="lc-arrow">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3 2l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span className="ls-num">Step 04</span>
              <div className="ls-icon">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 6h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H7l-4 2.5V7a1 1 0 0 1 1-1Z" stroke="#059669" strokeWidth="1.4"/><path d="M8 10h6M8 13h4" stroke="#059669" strokeWidth="1.3" strokeLinecap="round"/></svg>
              </div>
              <div className="ls-title">Nurture</div>
              <p className="ls-desc">Sophia monitors replies, classifies intent, and sends intelligent follow-ups. Non-responders get re-engaged on a different channel automatically.</p>
              <div className="ls-tags">
                <span className="ls-tag">Follow-up</span>
                <span className="ls-tag">Reply AI</span>
                <span className="ls-tag">Re-engage</span>
              </div>
            </div>
            <div className="loop-step outcome">
              <span className="ls-num">Result</span>
              <div className="ls-icon">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="3" width="16" height="16" rx="3" stroke="white" strokeWidth="1.5"/><path d="M7 8h8M7 12h4" stroke="white" strokeWidth="1.3" strokeLinecap="round"/><circle cx="16" cy="14" r="3" fill="rgba(255,255,255,.3)" stroke="white" strokeWidth="1.2"/><path d="M15 14l1 1 2-2" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="ls-title">Meetings Booked</div>
              <p className="ls-desc">Replies hit your inbox. Sophia flags positives, drafts responses, and logs everything to CRM. You review & close.</p>
              <div className="ls-tags">
                <span className="ls-tag">Human-in-loop</span>
                <span className="ls-tag">CRM sync</span>
                <span className="ls-tag">Calendar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOPHIA AGENTS */}
      <section id="sophia-ai" className="agents-sec">
        <div className="con">
          <div className="agents-wrap">
            {/* Left */}
            <div>
              <div className="fu">
                <div className="lbl lbl-l" style={{ marginBottom: 14 }}>Sophia AI</div>
                <h2 style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-1.5px", color: "#0B1535", margin: "0 0 14px" }}>
                  10 agents.<br /><span className="blue">One orchestrator.</span>
                </h2>
                <p style={{ color: "#3D4D72", fontSize: 16, lineHeight: 1.8, marginBottom: 36, maxWidth: 440 }}>
                  Sophia coordinates a network of specialized AI agents — each handling a distinct part of the pipeline. You approve. Sophia executes.
                </p>
              </div>
              <div className="agent-list">
                {[
                  { icon: "🔍", color: "#EEF2FF", title: "Deep Company Research", desc: "4-agent pipeline: Perplexity + Apollo + GPT-4o produces company profiles, pain points, buying signals, and outreach angles.", tags: ["Perplexity", "Apollo", "GPT-4o"] },
                  { icon: "👤", color: "rgba(124,58,237,.08)", title: "Contact Discovery & Scoring", desc: "Apollo people search + persona matching scores every contact by seniority tier, role fit, and engagement likelihood.", tags: ["Apollo", "PDL", "Scoring"] },
                  { icon: "✉️", color: "rgba(8,145,178,.08)", title: "AI Message Drafting", desc: "Every message is written from scratch per contact — referencing their LinkedIn activity, company news, and your offering.", tags: ["Claude", "GPT-4o", "Perplexity"] },
                  { icon: "🔄", color: "rgba(5,150,105,.08)", title: "Sequence Orchestration", desc: "LangGraph manages the full 5-phase workflow with human-approval gates at each step. Sophia resumes on your approval.", tags: ["LangGraph", "5-phase", "Approval"] },
                  { icon: "📊", color: "rgba(217,119,6,.08)", title: "Pipeline & Learning", desc: "Sophia tracks every interaction, learns what messages land, and adapts future drafts based on your reply patterns.", tags: ["CRM", "Analytics", "Learning"] },
                ].map((item, i) => (
                  <div className="alist-item fu" style={{ transitionDelay: `${i * 0.1}s` }} key={i}>
                    <div className="al-icon-wrap" style={{ background: item.color }}>
                      <span style={{ fontSize: 18 }}>{item.icon}</span>
                    </div>
                    <div>
                      <div className="al-title">{item.title}</div>
                      <div className="al-desc">{item.desc}</div>
                      <div className="al-tags">{item.tags.map(t => <span className="al-tag" key={t}>{t}</span>)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: agents panel */}
            <div className="fu d2">
              <div className="agents-panel">
                <div className="ap-header">
                  <span className="ap-title">Active Agents</span>
                  <div className="ap-live"><div className="ap-dot" />Running</div>
                </div>
                <div className="agents-grid">
                  {[
                    { name: "Company Research", color: "#1E3DB4" },
                    { name: "People Search", color: "#0891B2" },
                    { name: "Contact Discovery", color: "#7C3AED" },
                    { name: "Signal Detection", color: "#0891B2" },
                    { name: "Data Enrichment", color: "#7C3AED" },
                    { name: "Msg Drafter", color: "#DC2626" },
                    { name: "Seq Builder", color: "#0891B2" },
                    { name: "Synthesis", color: "#059669" },
                    { name: "Follow-Up", color: "#059669" },
                    { name: "Pipeline Mgr", color: "#1E3DB4" },
                  ].map((agent, i) => (
                    <div className="ag-cell" key={i}>
                      <div className="ag-icon">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="6" stroke={agent.color} strokeWidth="1.3" opacity=".7"/>
                          <circle cx="8" cy="8" r="2.5" fill={agent.color} opacity=".4"/>
                        </svg>
                      </div>
                      <span className="ag-name">{agent.name}</span>
                    </div>
                  ))}
                </div>
                <div className="ap-sophia">
                  <div className="aps-av">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="9" fill="rgba(255,255,255,.2)"/><path d="M7 11c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4" stroke="white" strokeWidth="1.4" strokeLinecap="round"/><circle cx="11" cy="11" r="1.8" fill="white"/></svg>
                  </div>
                  <div>
                    <div className="aps-name">Sophia</div>
                    <div className="aps-role">AI Chief Revenue Officer · Orchestrating all 10 agents</div>
                  </div>
                  <div className="aps-status"><div className="aps-dot" />Live</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHANNELS */}
      <section id="channels" className="ch-sec">
        <div className="con">
          <div className="sec-head fu">
            <div className="lbl">Outreach Channels</div>
            <h2>One platform.<br /><span className="blue">Every channel.</span></h2>
            <p>Sophia selects the right channel, right message, right moment — coordinating all four simultaneously for maximum reach and response.</p>
          </div>
          <div className="ch-grid fu d1">
            {[
              { name: "LinkedIn", desc: "Connection requests, InMail, and profile engagement — orchestrated for warm professional outreach that builds real pipeline.", badge: "High Intent", barColor: "#0077B5", icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><rect x="2" y="2" width="22" height="22" rx="5" fill="#0077B5"/><path d="M7 10.5h3v8H7v-8zm1.5-4.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5zm4 4.5h2.8v1.1c.5-.9 1.6-1.3 2.8-1.3C20.5 10.3 22 12 22 15v3.5h-3V15.7c0-1.5-.6-2.2-1.7-2.2-1.1 0-2 .8-2 2.3V18.5H16v-8z" fill="white"/></svg> },
              { name: "Email", desc: "AI-personalized sequences sent from your actual Gmail or Outlook inbox. Sophia writes, schedules, tracks opens, and follows up.", badge: "High Volume", barColor: "#1E3DB4", icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><rect x="2" y="2" width="22" height="22" rx="5" fill="#1E3DB4"/><path d="M5 9h16v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9Z" stroke="white" strokeWidth="1.4"/><path d="M5 9l8 6 8-6" stroke="white" strokeWidth="1.4" strokeLinecap="round"/></svg> },
              { name: "SMS", desc: "Direct, precisely-timed text outreach via Twilio. Cut through inbox noise with a channel that delivers 98% open rates.", badge: "98% Open Rate", barColor: "#059669", icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><rect x="2" y="2" width="22" height="22" rx="5" fill="#059669"/><path d="M6 7h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H9l-4 3V8a1 1 0 0 1 1-1Z" stroke="white" strokeWidth="1.4"/><path d="M9 12h8M9 15h5" stroke="white" strokeWidth="1.4" strokeLinecap="round"/></svg> },
              { name: "WhatsApp", desc: "Reach global prospects on the world's most-used messaging app. Rich media, conversational AI, real-time response handling.", badge: "High Engagement", barColor: "#25D366", icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><rect x="2" y="2" width="22" height="22" rx="5" fill="#25D366"/><path d="M13 4.5C8.3 4.5 4.5 8.3 4.5 13c0 1.8.5 3.5 1.5 5L4.5 21.5 10 20c1.4.8 3 1.3 4.8 1.3l-.3-.3C19.5 21 22 17.4 22 13c0-4.7-3.8-8.5-8.5-8.5-.2 0-.3 0-.5 0Z" stroke="white" strokeWidth="1.4"/><path d="M10 12c.6 2 2.5 3.5 4.5 3" stroke="white" strokeWidth="1.4" strokeLinecap="round"/></svg> },
            ].map((ch, i) => (
              <div className="ch-card" key={i}>
                <div className="ch-bar" style={{ background: ch.barColor }} />
                <div className="ch-icon-wrap">{ch.icon}</div>
                <div className="ch-name">{ch.name}</div>
                <p className="ch-desc">{ch.desc}</p>
                <span className="ch-badge">{ch.badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW CAPABILITIES */}
      <section id="capabilities" className="wf-sec">
        <div className="con">
          <div className="sec-head fu">
            <div className="lbl">What Sophia Does</div>
            <h2>Every step.<br /><span className="blue">Automated.</span></h2>
            <p>From first research to booked meeting — Sophia handles the entire workflow so your team focuses on closing deals.</p>
          </div>
          <div className="wf-grid fu d1">
            {[
              { badge: "Research", title: "Company Targeting", desc: "Define your ICP once. Sophia continuously discovers matching companies across Apollo and PDL, filtered by industry, size, location, and revenue.", stat: "50M+", statLabel: "companies indexed" },
              { badge: "AI", title: "Deep Intel Reports", desc: "4-agent pipeline produces full company profiles: pain points, buying signals, key contacts, funding stage, recent news, and outreach angles.", stat: "4", statLabel: "AI agents per company" },
              { badge: "Personalization", title: "Message Personalization", desc: "Every message references the contact's specific LinkedIn activity, company news, and your offering — making cold outreach feel warm.", stat: "3x", statLabel: "higher reply rates" },
              { badge: "Sequences", title: "Multi-Channel Sequences", desc: "LangGraph orchestrates 5-phase sequences with configurable delays and approval gates. You review before anything sends.", stat: "5", statLabel: "channel sequence phases" },
              { badge: "Intelligence", title: "Reply Detection", desc: "Sophia monitors replies across all channels, classifies intent (interested / not now / wrong person), and drafts the perfect follow-up.", stat: "< 5min", statLabel: "reply classification" },
              { badge: "Pipeline", title: "CRM Pipeline Tracking", desc: "Every interaction is logged. Contacts flow through Research → Outreach → Nurture → Closed stages with conversion metrics at each step.", stat: "Real-time", statLabel: "pipeline updates" },
            ].map((card, i) => (
              <div className="wf-card" key={i}>
                <div className="wf-top">
                  <div className="wf-icon">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="#1E3DB4" strokeWidth="1.3" opacity=".6"/><circle cx="9" cy="9" r="3" fill="#1E3DB4" opacity=".4"/></svg>
                  </div>
                  <span className="wf-badge">{card.badge}</span>
                </div>
                <div className="wf-title">{card.title}</div>
                <p className="wf-desc">{card.desc}</p>
                <div className="wf-stat">
                  <span className="wf-stat-n">{card.stat}</span>
                  <span className="wf-stat-l">{card.statLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF METRICS */}
      <section className="proof-sec">
        <div className="con">
          <div className="sec-head fu">
            <div className="lbl">Proven Results</div>
            <h2>Numbers that <span className="blue">speak.</span></h2>
          </div>
          <div className="proof-grid fu d1">
            {[
              { n: "12k+", l: "Companies researched" },
              { n: "84k+", l: "Contacts enriched" },
              { n: "8,400+", l: "Meetings booked" },
              { n: "38%", l: "Average reply rate" },
            ].map((m, i) => (
              <div className="pg-item" key={i}>
                <div className="pg-n">{m.n}</div>
                <div className="pg-l">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      {/* ── PLANS ── */}
      <section id="pricing" className="plans-sec">
        <div className="con">
          <div className="sec-head fu">
            <div className="lbl">Choose Your Plan</div>
            <h2 style={{ marginTop: 12, marginBottom: 10 }}>The right fit for <span className="blue">every team.</span></h2>
            <p>All plans include full Sophia AI, 4-channel outreach, and the complete Research → Outreach → Nurture → Book pipeline.</p>
            <div style={{ marginTop: 20 }}>
              <div className="btog">
                <button className={`bt${billing === 'monthly' ? ' on' : ''}`} onClick={() => setBilling('monthly')}>Monthly</button>
                <button className={`bt${billing === 'annual' ? ' on' : ''}`} onClick={() => setBilling('annual')}>Annual <span className="save-pill">Save 20%</span></button>
              </div>
            </div>
          </div>

          <div className="plans-grid fu d1">
            {/* Startup */}
            <div className="plan-card">
              <span className="pc-badge">Free Forever</span>
              <div className="pc-name">Startup</div>
              <p className="pc-tagline">For founders &amp; solo operators testing the power of Sophia AI before committing.</p>
              <div className="pc-price-block">
                <div className="pc-price-row"><span className="pc-free">Free</span></div>
                <div className="pc-note">Up to 2 users — always free</div>
              </div>
              <div className="pc-credits">
                <div className="pcc-icon"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 1.5l2 5h5l-4.1 3.1 1.6 5-4.5-2.8-4.5 2.8 1.6-5L2 6.5h5L9 1.5Z" stroke="#1E3DB4" strokeWidth="1.5" strokeLinejoin="round"/></svg></div>
                <div><div className="pcc-n">500</div><div className="pcc-l">credits / month</div></div>
              </div>
              <div className="pc-div" />
              <ul className="pc-feats">
                {["Up to 2 users","Sophia AI — all 4 channels","Research → Outreach → Nurture","1 workspace · Discovery research","Buy credit top-up packs anytime"].map(f => (
                  <li key={f}><div className="plan-chk"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="#059669" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg></div>{f}</li>
                ))}
                {["Team credit allocation","Command Center"].map(f => (
                  <li key={f}><div className="plan-no-chk"><svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M2 2l5 5M7 2l-5 5" stroke="#aaa" strokeWidth="1.3"/></svg></div><span style={{ opacity: .45 }}>{f}</span></li>
                ))}
              </ul>
              <button className="btn-s" style={{ marginTop: "auto" }} onClick={onGetStarted}>Get Started Free</button>
            </div>

            {/* Growth (featured) */}
            <div className="plan-card feat">
              <div className="pc-pop">Most Popular</div>
              <span className="pc-badge">Growth</span>
              <div className="pc-name">Growth</div>
              <p className="pc-tagline">For sales teams ready to deploy Sophia at full scale and fill the pipeline fast.</p>
              <div className="pc-price-block">
                <div className="pc-price-row">
                  <span className="pc-dollar">$</span>
                  <span className="pc-amount">{billing === 'annual' ? 80 : 100}</span>
                  <span className="pc-per">/user/mo</span>
                </div>
                <div className="pc-note">${(billing === 'annual' ? 80 : 100) * seats}/month · {seats} user{seats > 1 ? 's' : ''} · billed {billing === 'annual' ? 'annually' : 'monthly'}</div>
              </div>
              <div className="seat-row">
                <span className="sr-lbl">Team size</span>
                <div className="sr-ctrl">
                  <button className="sr-btn" onClick={() => setSeats(s => Math.max(1, s - 1))}>−</button>
                  <span className="sr-val">{seats}</span>
                  <button className="sr-btn" onClick={() => setSeats(s => Math.min(25, s + 1))}>+</button>
                </div>
                <span className="sr-unit">up to 25 seats</span>
              </div>
              <div className="pc-credits">
                <div className="pcc-icon"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 1.5l2 5h5l-4.1 3.1 1.6 5-4.5-2.8-4.5 2.8 1.6-5L2 6.5h5L9 1.5Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/></svg></div>
                <div><div className="pcc-n">{(2500 * seats).toLocaleString()}</div><div className="pcc-l">credits / month</div></div>
              </div>
              <div className="pc-div" />
              <ul className="pc-feats">
                {["Everything in Startup",`${seats > 1 ? `${seats} users` : "3–25 users"} · $${billing === 'annual' ? 80 : 100}/user/mo`,"Full Command Center access","All research tiers incl. Deep Intel","Team credit budgets & allocation","Unlimited workspaces","Priority support · Stripe billing"].map(f => (
                  <li key={f}><div className="plan-chk"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg></div>{f}</li>
                ))}
              </ul>
              <button style={{ display:"inline-flex",alignItems:"center",justifyContent:"center",gap:8,fontSize:14,fontWeight:800,padding:"13px 28px",borderRadius:10,cursor:"pointer",transition:"all .22s",background:"#fff",color:"var(--blue)",border:"none",boxShadow:"0 4px 20px rgba(0,0,0,.15)",marginTop:"auto",width:"100%",fontFamily:"inherit" }} onClick={() => { localStorage.setItem('preferredBilling', billing); localStorage.setItem('preferredSeats', String(seats)); onGetStarted(); }}>Start Growth Plan →</button>
            </div>

            {/* Enterprise */}
            <div className="plan-card dark">
              <span className="pc-badge">Enterprise</span>
              <div className="pc-name">Enterprise</div>
              <p className="pc-tagline">For organizations beyond 25 users that need custom integrations, SLAs, and dedicated capacity.</p>
              <div className="pc-price-block">
                <div className="pc-price-row"><span className="pc-free">Custom</span></div>
                <div className="pc-note" style={{ color: "rgba(255,255,255,.35)" }}>25+ users · bespoke pricing</div>
              </div>
              <div className="pc-credits">
                <div className="pcc-icon"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 1.5l2 5h5l-4.1 3.1 1.6 5-4.5-2.8-4.5 2.8 1.6-5L2 6.5h5L9 1.5Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/></svg></div>
                <div><div className="pcc-n">Unlimited</div><div className="pcc-l">credits · custom allocation</div></div>
              </div>
              <div className="pc-div" />
              <ul className="pc-feats">
                {["Everything in Growth","25+ users · unlimited seats","CRM integrations (Salesforce, HubSpot)","Custom API + webhook integrations","Dedicated AI capacity + fine-tuning","99.9% SLA · dedicated support manager","Custom onboarding & team training"].map(f => (
                  <li key={f}><div className="plan-chk"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg></div>{f}</li>
                ))}
              </ul>
              <a href="mailto:raja@onedatasoftware.com?subject=Enterprise Plan Inquiry" style={{ display:"inline-flex",alignItems:"center",justifyContent:"center",gap:8,fontSize:14,fontWeight:800,padding:"13px 28px",borderRadius:10,cursor:"pointer",transition:"all .22s",background:"#fff",color:"#0B1535",border:"none",marginTop:"auto",textDecoration:"none" }}>Contact Sales →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CREDITS EXPLAINER ── */}
      <section className="credits-sec" id="credits">
        <div className="con">
          <div className="sec-head fu">
            <div className="lbl">How Credits Work</div>
            <h2 style={{ marginTop: 12, marginBottom: 12 }}>Credits = <span className="blue">Value Delivered.</span></h2>
            <p>1 credit = $0.01. You're not paying for AI compute time — you're paying for specific work Sophia does on your behalf. No hidden fees, no surprises.</p>
          </div>
          <div className="cexp-grid">
            <div className="fu">
              <div className="lbl lbl-l" style={{ marginBottom: 18 }}>What Each Action Costs</div>
              <div className="action-list">
                {[
                  { bg: "#EEF2FF", icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="7" cy="7" r="4.5" stroke="#1E3DB4" strokeWidth="1.5"/><path d="M10.5 10.5L14 14" stroke="#1E3DB4" strokeWidth="1.5" strokeLinecap="round"/></svg>, name: "Company Search", desc: "Apollo org search — find companies matching your ICP", cost: "1 credit", violet: false },
                  { bg: "rgba(8,145,178,.08)", icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 5.5h14v9a.5.5 0 0 1-.5.5H2.5a.5.5 0 0 1-.5-.5V5.5Z" stroke="#0891B2" strokeWidth="1.5"/><path d="M2 5.5l7 5.5 7-5.5" stroke="#0891B2" strokeWidth="1.5" strokeLinecap="round"/></svg>, name: "AI Message Draft", desc: "Personalized message for any channel — LinkedIn, Email, SMS, WhatsApp", cost: "2 credits", violet: false },
                  { bg: "rgba(5,150,105,.08)", icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="7" r="3" stroke="#059669" strokeWidth="1.5"/><path d="M3 16c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#059669" strokeWidth="1.5" strokeLinecap="round"/></svg>, name: "Contact Reveal", desc: "Verified email + phone + LinkedIn for one contact (Apollo / PDL)", cost: "5 credits", violet: false },
                  { bg: "#EEF2FF", icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="7.5" cy="7.5" r="4" stroke="#1E3DB4" strokeWidth="1.5"/><path d="M10.5 10.5L14 14" stroke="#1E3DB4" strokeWidth="1.5" strokeLinecap="round"/><path d="M6 7.5H9M7.5 6v3" stroke="#1E3DB4" strokeWidth="1.3" strokeLinecap="round"/></svg>, name: "Snapshot Research", desc: "Quick company profile — overview, key contacts, data points", cost: "5 credits", violet: false, highlight: true },
                  { bg: "#EEF2FF", icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="2" width="14" height="14" rx="2.5" stroke="#1E3DB4" strokeWidth="1.5"/><path d="M2 7h14" stroke="#1E3DB4" strokeWidth="1.2"/><path d="M6 11h6M6 13h4" stroke="#1E3DB4" strokeWidth="1.2" strokeLinecap="round"/></svg>, name: "Profiler Research", desc: "Full company profile: pain points, initiatives, outreach intel per contact", cost: "20 credits", violet: false, highlight: true },
                  { bg: "rgba(124,58,237,.08)", icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="3" stroke="#7C3AED" strokeWidth="1.4"/><circle cx="9" cy="2.5" r="1.5" stroke="#7C3AED" strokeWidth="1.2"/><circle cx="9" cy="15.5" r="1.5" stroke="#7C3AED" strokeWidth="1.2"/><circle cx="2.5" cy="9" r="1.5" stroke="#7C3AED" strokeWidth="1.2"/><circle cx="15.5" cy="9" r="1.5" stroke="#7C3AED" strokeWidth="1.2"/></svg>, name: "Deep Intel Research", desc: "Full 4-agent pipeline: Perplexity + Apollo + GPT-4o synthesis + full outreach brief", cost: "100 credits", violet: true },
                ].map(({ bg, icon, name, desc, cost, violet, highlight }) => (
                  <div key={name} className="al-row" style={highlight ? { borderColor: "rgba(30,61,180,.18)", background: "#F5F7FF" } : violet ? { borderColor: "rgba(124,58,237,.2)", background: "rgba(124,58,237,.03)" } : {}}>
                    <div className="al-icon" style={{ background: bg }}>{icon}</div>
                    <div className="al-body"><div className="al-name">{name}</div><div className="al-desc">{desc}</div></div>
                    <span className={violet ? "al-cost-violet" : "al-cost"}>{cost}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="fu d2">
              <div className="lbl lbl-l" style={{ marginBottom: 18 }}>Research Tiers</div>
              <div className="rtiers">
                <div className="rt"><div className="rt-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="8" cy="8" r="5" stroke="#1E3DB4" strokeWidth="1.5"/><path d="M12 12l4 4" stroke="#1E3DB4" strokeWidth="1.5" strokeLinecap="round"/></svg></div><div><div className="rt-name">Discovery</div><div className="rt-desc">Company + contact overview. Quick qualify.</div></div><span className="rt-free">Free</span></div>
                <div className="rt"><div className="rt-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="8" cy="8" r="5" stroke="#1E3DB4" strokeWidth="1.5"/><path d="M12 12l4 4" stroke="#1E3DB4" strokeWidth="1.5" strokeLinecap="round"/><path d="M8 5.5V8h2.5" stroke="#1E3DB4" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg></div><div><div className="rt-name">Snapshot</div><div className="rt-desc">Key company data, pain points, primary contacts.</div></div><span className="rt-pill">5 credits</span></div>
                <div className="rt"><div className="rt-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="14" height="14" rx="2.5" stroke="#1E3DB4" strokeWidth="1.5"/><path d="M3 8h14" stroke="#1E3DB4" strokeWidth="1.2"/><path d="M7 12h6M7 14.5h4" stroke="#1E3DB4" strokeWidth="1.2" strokeLinecap="round"/></svg></div><div><div className="rt-name">Profiler</div><div className="rt-desc">Full profile, org chart, initiatives &amp; outreach intel.</div></div><span className="rt-pill">20 credits</span></div>
                <div className="rt rt-feat"><div className="rt-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="3" stroke="white" strokeWidth="1.5"/><circle cx="10" cy="3.5" r="1.5" stroke="white" strokeWidth="1.2"/><circle cx="10" cy="16.5" r="1.5" stroke="white" strokeWidth="1.2"/><circle cx="3.5" cy="10" r="1.5" stroke="white" strokeWidth="1.2"/><circle cx="16.5" cy="10" r="1.5" stroke="white" strokeWidth="1.2"/></svg></div><div><div className="rt-name">Deep Intel</div><div className="rt-desc">4-agent pipeline. News, signals, decision-makers, talking points.</div></div><span className="rt-pill">100 credits</span></div>
              </div>
              <div className="math-box">
                <div className="math-title"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#1E3DB4" strokeWidth="1.3"/><path d="M7 6v4M7 4.5v.5" stroke="#1E3DB4" strokeWidth="1.3" strokeLinecap="round"/></svg>Growth plan — 5 users = 12,500 credits/month</div>
                {[["125 Deep Intel research reports","or"],["625 Profiler research reports","or"],["2,500 contact reveals","or"],["6,250 AI message drafts","or"],["Any mix of the above","✓"]].map(([l,r]) => (
                  <div key={l} className="math-row"><span>{l}</span><span>{r}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TOP-UP PACKS ── */}
      <section className="topup-sec" id="topup">
        <div className="con">
          <div className="sec-head fu">
            <div className="lbl">Credit Top-Up Packs</div>
            <h2 style={{ marginTop: 12, marginBottom: 12 }}>Need more? <span className="blue">Top up anytime.</span></h2>
            <p>Credits never expire and stack on top of your monthly plan. Available on every plan — including Startup. Bigger packs = bigger discount.</p>
          </div>
          <div className="topup-grid fu d1">
            {/* Starter $25 */}
            <div className="tu">
              <div className="tu-icon"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2.5l2 5h5.5l-4.5 3.2 1.7 5.3-4.7-2.8-4.7 2.8 1.7-5.3L3.5 7.5H9L11 2.5Z" stroke="#1E3DB4" strokeWidth="1.5" strokeLinejoin="round"/></svg></div>
              <div className="tu-name">Starter</div>
              <div className="tu-credits">2,500</div>
              <div className="tu-clbl">AI Credits</div>
              <div className="tu-div"/>
              <div className="tu-price-row"><span className="tu-dollar">$</span><span className="tu-price">25</span></div>
              <div className="tu-discount" style={{ visibility: "hidden" }}>placeholder</div>
              <div className="tu-cpp">$0.010 per credit · base rate</div>
              <div className="tu-never"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/><path d="M6 3.5V6l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>Credits never expire</div>
              <ul className="tu-feats"><li><div className="tu-chk"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3.5" stroke="#059669" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg></div>25 Deep Intel reports</li><li><div className="tu-chk"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3.5" stroke="#059669" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg></div>125 Profiler research</li><li><div className="tu-chk"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3.5" stroke="#059669" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg></div>500 contact reveals</li><li><div className="tu-chk"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3.5" stroke="#059669" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg></div>1,250 message drafts</li></ul>
              <button className="btn-s">Buy for $25</button>
            </div>
            {/* Growth $100 */}
            <div className="tu">
              <div className="tu-icon"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 16L7.5 10l4 3.5L15.5 6.5l3.5 4" stroke="#1E3DB4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><circle cx="16" cy="5" r="2" stroke="#059669" strokeWidth="1.4"/></svg></div>
              <div className="tu-name">Growth</div>
              <div className="tu-credits">10,500</div>
              <div className="tu-clbl">AI Credits · +5% bonus</div>
              <div className="tu-div"/>
              <div className="tu-price-row"><span className="tu-dollar">$</span><span className="tu-price">100</span></div>
              <div className="tu-discount"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#059669" strokeWidth="1.3"/><path d="M4.5 9.5l5-5M5 5.5h-.5v4h4" stroke="#059669" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>5% extra credits vs base rate</div>
              <div className="tu-cpp">$0.0095 per credit</div>
              <div className="tu-never"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/><path d="M6 3.5V6l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>Credits never expire</div>
              <ul className="tu-feats"><li><div className="tu-chk"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3.5" stroke="#059669" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg></div>105 Deep Intel reports</li><li><div className="tu-chk"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3.5" stroke="#059669" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg></div>525 Profiler research</li><li><div className="tu-chk"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3.5" stroke="#059669" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg></div>2,100 contact reveals</li><li><div className="tu-chk"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3.5" stroke="#059669" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg></div>5,250 message drafts</li></ul>
              <button className="btn-s">Buy for $100</button>
            </div>
            {/* Pro $250 — Best Value */}
            <div className="tu tu-feat">
              <div className="tu-top-tag">Best Value</div>
              <div className="tu-icon"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2l2.5 6H20l-5.5 4 2 6.5L11 15l-5.5 3.5 2-6.5L2 8h6.5L11 2Z" stroke="white" strokeWidth="1.6" strokeLinejoin="round"/></svg></div>
              <div className="tu-name">Pro</div>
              <div className="tu-credits">27,000</div>
              <div className="tu-clbl">AI Credits · +8% bonus</div>
              <div className="tu-div"/>
              <div className="tu-price-row"><span className="tu-dollar">$</span><span className="tu-price">250</span></div>
              <div className="tu-discount"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="white" strokeWidth="1.3"/><path d="M4.5 9.5l5-5M5 5.5h-.5v4h4" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>8% extra credits vs base rate</div>
              <div className="tu-cpp">$0.0093 per credit</div>
              <div className="tu-never"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/><path d="M6 3.5V6l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>Credits never expire</div>
              <ul className="tu-feats"><li><div className="tu-chk"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg></div>270 Deep Intel reports</li><li><div className="tu-chk"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg></div>1,350 Profiler research</li><li><div className="tu-chk"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg></div>5,400 contact reveals</li><li><div className="tu-chk"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg></div>13,500 message drafts</li></ul>
              <button className="btn-w" style={{ background: "#fff", color: "#0B1535" }}>Buy for $250 →</button>
            </div>
            {/* Scale $500 */}
            <div className="tu" style={{ background: "#0B1535", borderColor: "#0B1535" }}>
              <div className="tu-icon" style={{ background: "rgba(255,255,255,.08)", borderColor: "rgba(255,255,255,.1)" }}><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="2" y="14" width="4.5" height="6" rx="1" stroke="white" strokeWidth="1.5"/><rect x="8.75" y="9" width="4.5" height="11" rx="1" stroke="white" strokeWidth="1.5"/><rect x="15.5" y="4" width="4.5" height="16" rx="1" stroke="white" strokeWidth="1.5"/></svg></div>
              <div className="tu-name" style={{ color: "rgba(255,255,255,.6)" }}>Scale</div>
              <div className="tu-credits" style={{ color: "#fff" }}>55,000</div>
              <div className="tu-clbl" style={{ color: "rgba(255,255,255,.4)" }}>AI Credits · +10% bonus</div>
              <div className="tu-div" style={{ background: "rgba(255,255,255,.1)" }}/>
              <div className="tu-price-row"><span className="tu-dollar" style={{ color: "rgba(255,255,255,.5)" }}>$</span><span className="tu-price" style={{ color: "#fff" }}>500</span></div>
              <div className="tu-discount" style={{ color: "#059669" }}><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#059669" strokeWidth="1.3"/><path d="M4.5 9.5l5-5M5 5.5h-.5v4h4" stroke="#059669" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>10% extra credits vs base rate</div>
              <div className="tu-cpp" style={{ color: "rgba(255,255,255,.4)" }}>$0.0091 per credit</div>
              <div className="tu-never" style={{ color: "rgba(255,255,255,.6)" }}><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/><path d="M6 3.5V6l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>Credits never expire</div>
              <ul className="tu-feats"><li><div className="tu-chk" style={{ background: "rgba(255,255,255,.1)", borderColor: "rgba(255,255,255,.15)" }}><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg></div><span style={{ color: "rgba(255,255,255,.7)" }}>550 Deep Intel reports</span></li><li><div className="tu-chk" style={{ background: "rgba(255,255,255,.1)", borderColor: "rgba(255,255,255,.15)" }}><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg></div><span style={{ color: "rgba(255,255,255,.7)" }}>2,750 Profiler research</span></li><li><div className="tu-chk" style={{ background: "rgba(255,255,255,.1)", borderColor: "rgba(255,255,255,.15)" }}><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg></div><span style={{ color: "rgba(255,255,255,.7)" }}>11,000 contact reveals</span></li><li><div className="tu-chk" style={{ background: "rgba(255,255,255,.1)", borderColor: "rgba(255,255,255,.15)" }}><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg></div><span style={{ color: "rgba(255,255,255,.7)" }}>27,500 message drafts</span></li></ul>
              <button style={{ display:"inline-flex",alignItems:"center",justifyContent:"center",gap:8,fontSize:14,fontWeight:700,padding:"13px 28px",borderRadius:10,cursor:"pointer",width:"100%",fontFamily:"inherit",background:"rgba(255,255,255,.1)",color:"#fff",border:"1.5px solid rgba(255,255,255,.18)" }}>Buy for $500</button>
            </div>
          </div>
          {/* Pack comparison mini-table */}
          <div style={{ marginTop: 32, padding: "20px 24px", background: "#fff", border: "1px solid rgba(30,61,180,.1)", borderRadius: 14, boxShadow: "0 1px 4px rgba(30,61,180,.06),0 2px 12px rgba(0,0,0,.04)", maxWidth: 680, marginLeft: "auto", marginRight: "auto" }} className="fu d3">
            <div style={{ fontSize: 12, fontWeight: 700, color: "#0B1535", marginBottom: 14, textAlign: "center" }}>Pack comparison at a glance</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: ".5px" }}>
              {["Pack","Price","Credits","Bonus","Per Credit"].map(h => <div key={h} style={{ padding: "7px 10px", fontWeight: 700, color: "#7A8AAD", borderBottom: "1px solid rgba(30,61,180,.06)", textAlign: h === "Pack" ? "left" : "center" }}>{h}</div>)}
              {[["Starter","$25","2,500","—","$0.0100",false],["Growth","$100","10,500","+5%","$0.0095",false],["Pro ★","$250","27,000","+8%","$0.0093",true],["Scale","$500","55,000","+10%","$0.0091",false]].map(([name,price,credits,bonus,cpp,highlight]) => (
                <Fragment key={name as string}>
                  <div style={{ padding: "7px 10px", color: highlight ? "var(--blue)" : "#3D4D72", fontWeight: highlight ? 700 : 400, background: highlight ? "#EEF2FF" : "transparent", borderRadius: highlight ? "6px 0 0 6px" : 0 }}>{name as string}</div>
                  <div style={{ padding: "7px 10px", textAlign: "center", color: highlight ? "var(--blue)" : "#3D4D72", fontWeight: highlight ? 700 : 400, background: highlight ? "#EEF2FF" : "transparent" }}>{price as string}</div>
                  <div style={{ padding: "7px 10px", textAlign: "center", color: highlight ? "var(--blue)" : "#3D4D72", fontWeight: highlight ? 700 : 400, background: highlight ? "#EEF2FF" : "transparent" }}>{credits as string}</div>
                  <div style={{ padding: "7px 10px", textAlign: "center", color: highlight ? "var(--blue)" : (bonus as string) !== "—" ? "#059669" : "#7A8AAD", fontWeight: highlight ? 700 : (bonus as string) !== "—" ? 700 : 400, background: highlight ? "#EEF2FF" : "transparent" }}>{bonus as string}</div>
                  <div style={{ padding: "7px 10px", textAlign: "center", color: highlight ? "var(--blue)" : (bonus as string) !== "—" ? "#059669" : "#7A8AAD", fontWeight: highlight ? 700 : 400, background: highlight ? "#EEF2FF" : "transparent", borderRadius: highlight ? "0 6px 6px 0" : 0 }}>{cpp as string}</div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARE TABLE ── */}
      <section className="cmp-sec">
        <div className="con">
          <div className="sec-head fu">
            <div className="lbl">Full Comparison</div>
            <h2 style={{ marginTop: 12, marginBottom: 6 }}>What's included in <span className="blue">every plan.</span></h2>
          </div>
          <div className="cmp-table fu d2">
            <div className="cmp-head">
              <div className="ch-col">Feature</div>
              <div className="ch-col">Startup</div>
              <div className="ch-col hfeat">Growth</div>
              <div className="ch-col">Enterprise</div>
            </div>
            <div className="cmp-grp-lbl">Platform</div>
            <div className="cmp-row"><div className="cr">Users</div><div className="cr"><span className="ct">1–2</span></div><div className="cr cfeat"><span className="ct">3–25 · $100/user</span></div><div className="cr"><span className="ct">25+ · custom</span></div></div>
            <div className="cmp-row"><div className="cr">Credits / month</div><div className="cr"><span className="cg">500</span></div><div className="cr cfeat"><span className="ct">2,500 / user</span></div><div className="cr"><span className="ct">Custom</span></div></div>
            <div className="cmp-row"><div className="cr">Credit top-up packs</div><div className="cr"><div className="yes-ic"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#059669" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg></div></div><div className="cr cfeat"><div className="yes-ic"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#059669" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg></div></div><div className="cr"><div className="yes-ic"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#059669" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg></div></div></div>
            <div className="cmp-row"><div className="cr">Team credit allocation</div><div className="cr"><div className="no-ic"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M2 2l4 4M6 2l-4 4" stroke="#888" strokeWidth="1.3"/></svg></div></div><div className="cr cfeat"><div className="yes-ic"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#059669" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg></div></div><div className="cr"><div className="yes-ic"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#059669" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg></div></div></div>
            <div className="cmp-grp-lbl">Sophia AI</div>
            <div className="cmp-row"><div className="cr">All 4 channels (LinkedIn, Email, SMS, WhatsApp)</div><div className="cr"><div className="yes-ic"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#059669" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg></div></div><div className="cr cfeat"><div className="yes-ic"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#059669" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg></div></div><div className="cr"><div className="yes-ic"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#059669" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg></div></div></div>
            <div className="cmp-row"><div className="cr">Command Center (natural language campaigns)</div><div className="cr"><div className="no-ic"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M2 2l4 4M6 2l-4 4" stroke="#888" strokeWidth="1.3"/></svg></div></div><div className="cr cfeat"><div className="yes-ic"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#059669" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg></div></div><div className="cr"><div className="yes-ic"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#059669" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg></div></div></div>
            <div className="cmp-row"><div className="cr">Deep Intel research (100 credits)</div><div className="cr"><div className="no-ic"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M2 2l4 4M6 2l-4 4" stroke="#888" strokeWidth="1.3"/></svg></div></div><div className="cr cfeat"><div className="yes-ic"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#059669" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg></div></div><div className="cr"><div className="yes-ic"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#059669" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg></div></div></div>
            <div className="cmp-row"><div className="cr">Sophia Brain Stats + A/B learning</div><div className="cr"><div className="no-ic"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M2 2l4 4M6 2l-4 4" stroke="#888" strokeWidth="1.3"/></svg></div></div><div className="cr cfeat"><div className="yes-ic"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#059669" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg></div></div><div className="cr"><div className="yes-ic"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#059669" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg></div></div></div>
            <div className="cmp-grp-lbl">Integrations &amp; Pipeline</div>
            <div className="cmp-row"><div className="cr">Calendar (Google + Outlook) + meeting booking</div><div className="cr"><div className="yes-ic"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#059669" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg></div></div><div className="cr cfeat"><div className="yes-ic"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#059669" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg></div></div><div className="cr"><div className="yes-ic"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#059669" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg></div></div></div>
            <div className="cmp-row"><div className="cr">3-layer pipeline (Contact → Lead → Opportunity)</div><div className="cr"><div className="yes-ic"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#059669" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg></div></div><div className="cr cfeat"><div className="yes-ic"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#059669" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg></div></div><div className="cr"><div className="yes-ic"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#059669" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg></div></div></div>
            <div className="cmp-row"><div className="cr">CRM export (Salesforce, HubSpot)</div><div className="cr"><div className="no-ic"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M2 2l4 4M6 2l-4 4" stroke="#888" strokeWidth="1.3"/></svg></div></div><div className="cr cfeat"><div className="no-ic"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M2 2l4 4M6 2l-4 4" stroke="#888" strokeWidth="1.3"/></svg></div></div><div className="cr"><div className="yes-ic"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#059669" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg></div></div></div>
            <div className="cmp-grp-lbl">Support</div>
            <div className="cmp-row"><div className="cr">Support tier</div><div className="cr"><span className="cg">Community</span></div><div className="cr cfeat"><span className="ct">Priority email</span></div><div className="cr"><span className="ct">Dedicated manager</span></div></div>
            <div className="cmp-row"><div className="cr">Onboarding</div><div className="cr"><span className="cg">Self-serve</span></div><div className="cr cfeat"><span className="ct">Guided setup</span></div><div className="cr"><span className="ct">Custom program</span></div></div>
            <div className="cmp-row"><div className="cr">Uptime SLA</div><div className="cr"><span className="cg">Best effort</span></div><div className="cr cfeat"><span className="cg">Best effort</span></div><div className="cr"><span className="ct">99.9%</span></div></div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq-sec">
        <div className="con">
          <div className="sec-head fu">
            <div className="lbl">Common Questions</div>
            <h2 style={{ marginTop: 12 }}>Got questions? <span className="blue">We have answers.</span></h2>
          </div>
          <div className="faq-grid fu d1">
            {[
              { q: "What exactly is a credit?", a: "1 credit = $0.01. Every credit maps to a specific action Sophia performs — not AI compute time. Company search = 1 credit, message draft = 2 credits, contact reveal = 5 credits, Deep Intel research = 100 credits. You always know exactly what you're spending." },
              { q: "Do credits roll over or expire?", a: "Monthly plan credits reset each billing cycle — they don't roll over. But top-up pack credits never expire. They stack on top of your monthly allowance and are always used last, so buy a pack to make sure capacity never goes to waste." },
              { q: "How does the seat count work on Growth?", a: "Growth is $100 per user per month — from 3 users up to 25. Each user gets 2,500 credits/month included. At 25 users ($2,500/month) you get 62,500 credits. Once your team exceeds 25 users, talk to us about an Enterprise plan." },
              { q: "Can Startup users buy top-up packs?", a: "Yes — top-up packs are available on every plan including the free Startup tier. Start free with 500 credits, explore Sophia, and buy a pack whenever you need more capacity without upgrading your plan." },
              { q: "What happens when credits run out?", a: "Sophia pauses credit-consuming actions (research, drafts, contact reveals) until your balance is topped up. No data is lost, no sequences are deleted — everything resumes the moment you add credits. Top-up packs activate instantly." },
              { q: "Can I change my plan or cancel anytime?", a: "Yes — upgrade or downgrade anytime from your Stripe billing portal. Upgrades take effect immediately (prorated). Downgrades take effect at the end of your billing period. No contracts, no cancellation fees." },
            ].map(({ q, a }, i) => (
              <div key={i} className={`faq-card${openFaq === i ? ' open' : ''}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="faq-q">
                  <span>{q}</span>
                  <div className="faq-ico"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 4.5L5 7l2.5-2.5M5 2v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                </div>
                {openFaq === i && <div className="faq-a">{a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-sec">
        <div className="con">
          <div className="cta-inner">
            <h2 className="cta-h">Ready to let Sophia<br />book your meetings?</h2>
            <p className="cta-sub">Set up in minutes. First 500 credits free. No credit card required.</p>
            <div className="cta-acts">
              <button className="btn-w" onClick={onGetStarted}>Get Started Free</button>
              <a href="/login" className="btn-ow">Sign In</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="lp-footer">
        <div className="con">
          <div className="fg">
            <div className="fb">
              <div className="fb-name">One<b>Reach</b></div>
              <p>Sophia is your AI Chief Revenue Officer — researching, reaching out, and booking meetings across every channel.</p>
            </div>
            <div className="fc">
              <h4>Product</h4>
              <a href="#how-it-works">How It Works</a>
              <a href="#sophia-ai">Sophia AI</a>
              <a href="#channels">Channels</a>
              <a href="#pricing">Pricing</a>
              <a href="/register">Sign Up Free</a>
            </div>
            <div className="fc">
              <h4>Company</h4>
              <a href="mailto:raja@onedatasoftware.com">Contact</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
            <div className="fc">
              <h4>Legal</h4>
              <a href="/opt-in">SMS Opt-In</a>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
            </div>
          </div>
          <div className="fbot">
            <p className="fcp">© {new Date().getFullYear()} OneReach. All rights reserved.</p>
            <div className="fls">
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
              <a href="/opt-in">SMS Opt-In</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
