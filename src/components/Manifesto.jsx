export default function Manifesto() {
  const links = {
    crm: "https://br30crm-com-f.vercel.app/",
    trader: "https://my-frontend-eight-roan.vercel.app/",
    kart: "https://br-30-kart.vercel.app/",
    scanner: "https://br30marketscanner-com-frontade.vercel.app/",
    indicators: "/indicators",
    terminal: "https://br30-algo-terminal-f.vercel.app",
    foodos: "https://br-30-food-os-f.vercel.app/",
    qr: "https://br-30-qr-studio-xi.vercel.app/",
    algo: "https://br30algo-com.vercel.app/",
    services: "/services",
    founder: "https://br30-com.vercel.app/",
  };

  return (
    <>
      <section className="manifesto" id="manifesto" data-screen-label="03 BR30 Ecosystem">
        <div className="container">
          <header className="section-head">
            <span className="eyebrow on-dark">The BR30 Ecosystem</span>

            <h2 className="display on-dark">
              One vision.
              <br />
              <em>Multiple platforms.</em>
            </h2>

            <p className="lead on-dark">BR30 Group is building a connected digital ecosystem across trading, technology, business, education, automation, and digital services — creating focused platforms that solve real problems and help people build what comes next.</p>
          </header>

          <ol className="demands">
            <li className="demand">
              <span className="d-num">01</span>
              <p className="d-text">
                <a href={links.crm} target="_blank" rel="noreferrer" className="brand-link">
                  BR30 CRM
                </a>{" "}
                is a complete customer relationship management platform for businesses to manage leads, contacts, companies, deals, tasks, activities, communication, automation, and everyday workflows from one unified workspace.
              </p>
            </li>

            <li className="demand">
              <span className="d-num">02</span>
              <p className="d-text">
                <a href={links.trader} target="_blank" rel="noreferrer" className="brand-link">
                  BR30 Trader
                </a>{" "}
                is a trading education platform focused on market learning, intraday trading, price action, SMC, option buying strategies, practical tools, and structured education for traders who want to develop real market understanding.
              </p>
            </li>

            <li className="demand">
              <span className="d-num">03</span>
              <p className="d-text">
                <a href={links.kart} target="_blank" rel="noreferrer" className="brand-link">
                  BR30 Kart
                </a>{" "}
                is a multi-seller digital education marketplace connecting creators, traders, mentors, and learners through a platform where digital courses and knowledge can be published, discovered, and purchased.
              </p>
            </li>

            <li className="demand">
              <span className="d-num">04</span>
              <p className="d-text">
                <a href={links.scanner} target="_blank" rel="noreferrer" className="brand-link">
                  BR30 Market Scanner
                </a>{" "}
                is a market intelligence platform built to help traders study live market conditions through signals, volume, open interest, market activity, and actionable trading insights.
              </p>
            </li>

            <li className="demand">
              <span className="d-num">05</span>
              <p className="d-text">
                <a href={links.terminal} target="_blank" rel="noreferrer" className="brand-link">
                  BR30 Algo Terminal
                </a>{" "}
                is a professional trading terminal designed to bring market analysis, trading tools, signals, and execution-focused workflows together into a dedicated environment for active traders.
              </p>
            </li>

            <li className="demand">
              <span className="d-num">06</span>
              <p className="d-text">
                <a href={links.foodos} target="_blank" rel="noreferrer" className="brand-link">
                  BR30 FoodOS
                </a>{" "}
                is a complete operating system for food businesses including restaurants, cafes, bakeries, hotels, sweet shops, ice cream parlours, and cloud kitchens — bringing digital menus, QR ordering, operations, and business workflows into one platform.
              </p>
            </li>

            <li className="demand">
              <span className="d-num">07</span>
              <p className="d-text">
                <a href={links.qr} target="_blank" rel="noreferrer" className="brand-link">
                  BR30 QR Studio
                </a>{" "}
                is a fast and modern QR creation platform that converts links and digital destinations into stylish, downloadable QR codes designed for businesses, creators, and everyday digital use.
              </p>
            </li>

            <li className="demand">
              <span className="d-num">08</span>
              <p className="d-text">
                <a href={links.indicators} className="brand-link">
                  BR30 TradingView Indicators
                </a>{" "}
                is a collection of custom trading indicators built for TradingView, covering trend analysis, scalping, SMC, liquidity, EMA and SMA analysis, fair value gaps, market structure, breakouts, and trading confirmation.
              </p>
            </li>

            <li className="demand">
              <span className="d-num">09</span>
              <p className="d-text">
                <a href={links.algo} target="_blank" rel="noreferrer" className="brand-link">
                  BR30 Algo
                </a>{" "}
                is a private automated trading system focused on systematic market analysis, opportunity detection, automated execution, and disciplined algorithmic trading workflows.
              </p>
            </li>

            <li className="demand">
              <span className="d-num">10</span>
              <p className="d-text">
                <a href={links.services} className="brand-link">
                  BR30 Services
                </a>{" "}
                brings professional web development, digital branding, logo design, custom TradingView indicators, business automation, and tailored digital solutions together under the BR30 identity.
              </p>
            </li>

            <li className="demand">
              <span className="d-num">11</span>
              <p className="d-text">
                <a href={links.founder} target="_blank" rel="noreferrer" className="brand-link">
                  BR30 Founder
                </a>{" "}
                is the personal portfolio of Mukesh Raj, documenting the journey behind BR30 across technology, trading, entrepreneurship, digital products, and the continuous process of building a larger independent digital ecosystem.
              </p>
            </li>
          </ol>

          <div className="manifesto-footer">
            <span className="manifesto-line"></span>
            <p>Built independently. Connected by one vision.</p>
            <span className="manifesto-line"></span>
          </div>
        </div>
      </section>

      <style>{`.manifesto{background:#120700!important;position:relative;overflow:hidden}.manifesto::before,.manifesto::after{display:none!important;content:none!important}.eyebrow.on-dark{background:#ff7a00!important;border:1.5px solid #ff7a00!important;color:#000!important;padding:14px 28px;border-radius:999px;display:inline-flex;align-items:center;gap:12px;font-weight:400;letter-spacing:.2em;text-transform:uppercase;box-shadow:none!important}.eyebrow.on-dark::before{content:"●";color:#000}.display.on-dark{color:#f5f0e6!important;text-shadow:none!important}.lead.on-dark{color:#d7d0c6!important;max-width:820px;margin:auto;line-height:1.7}.demands{position:relative;z-index:2;margin-top:60px;max-height:680px;overflow-y:auto;padding:8px 10px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.03);backdrop-filter:blur(10px);border-radius:22px;scroll-behavior:smooth}.demands::-webkit-scrollbar{width:8px}.demands::-webkit-scrollbar-track{background:rgba(255,255,255,.05);border-radius:20px}.demands::-webkit-scrollbar-thumb{background:#ff7a00;border-radius:20px}.demands::-webkit-scrollbar-thumb:hover{background:#ff9b3d}.demand{display:grid;grid-template-columns:145px 1fr;gap:28px;align-items:center;padding:28px 18px;border-bottom:1px solid rgba(255,255,255,.08);transition:all .25s ease;border-radius:16px;background:transparent!important}.demand:last-child{border-bottom:none}.demand:hover{background:rgba(255,122,0,.08)!important;transform:translateX(6px)}.d-num{font-size:92px;font-weight:400;line-height:.9;font-family:Impact,sans-serif;color:#ff8a1d;text-shadow:none!important}.d-text{font-size:20px;line-height:1.65;font-weight:400;color:#f5f0e6!important;max-width:980px;background:none!important}.brand-link{color:#ffb36b!important;font-weight:400;text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:4px;background:none!important;box-shadow:none!important;text-shadow:none!important;transition:all .25s ease}.brand-link:hover{color:#00ff88!important;text-decoration-color:#00ff88!important}.d-text a,.d-text span{background:none!important;box-shadow:none!important;text-shadow:none!important}.demand *{filter:none!important}.manifesto-footer{display:flex;align-items:center;justify-content:center;gap:18px;margin:42px auto 0;max-width:720px}.manifesto-footer p{margin:0;color:#a9a097;font-size:13px;letter-spacing:.08em;text-transform:uppercase;text-align:center}.manifesto-line{height:1px;flex:1;background:rgba(255,122,0,.35)}@media(max-width:900px){.demands{max-height:560px}.demand{grid-template-columns:1fr;gap:14px;padding:24px 16px}.d-num{font-size:70px}.d-text{font-size:18px;line-height:1.6}.manifesto-footer{padding:0 10px}.manifesto-footer p{font-size:11px}}@media(max-width:600px){.manifesto-footer{gap:10px}.manifesto-line{display:none}.manifesto-footer p{font-size:10px}.demands{margin-top:40px}.d-num{font-size:58px}.d-text{font-size:16px}}`}</style>
    </>
  );
}
