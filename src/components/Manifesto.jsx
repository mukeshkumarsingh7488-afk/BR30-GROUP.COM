export default function Manifesto() {
  const links = {
    trader: "https://my-frontend-eight-roan.vercel.app/",
    kart: "https://br-30-kart.vercel.app/",
    scanner: "https://br30marketscanner-com-frontade.vercel.app/",
    indicators: "/indicators",
    algo: "https://br30algo-com.vercel.app/",
    services: "/services",
    founder: "https://br30-com.vercel.app/",
  };

  return (
    <>
      <section className="manifesto" id="manifesto" data-screen-label="03 Vision Plan">
        <div className="container">
          <header className="section-head">
            <span className="eyebrow on-dark">The Goals</span>
            <h2 className="display on-dark">The BR30 Vision Plan.</h2>
            <p className="lead on-dark">One brand. Multiple platforms. A complete digital ecosystem built for trading education, online business growth, branding, and future automation.</p>
          </header>

          <ol className="demands">
            <li className="demand">
              <span className="d-num">01</span>
              <p className="d-text">
                <a href={links.trader} target="_blank" rel="noreferrer" className="brand-link">
                  BR30 Trader
                </a>{" "}
                is our trading education platform built for intraday trading, price action, SMC, option buying strategies, mentorship, and real market learning for serious traders.
              </p>
            </li>

            <li className="demand">
              <span className="d-num">02</span>
              <p className="d-text">
                <a href={links.kart} target="_blank" rel="noreferrer" className="brand-link">
                  BR30 Kart
                </a>{" "}
                is our multi-seller digital education marketplace where verified traders, mentors, and creators can sell courses while learners can buy trusted digital courses.
              </p>
            </li>

            <li className="demand">
              <span className="d-num">03</span>
              <p className="d-text">
                <a href={links.scanner} target="_blank" rel="noreferrer" className="brand-link">
                  BR30 Market Scanner
                </a>{" "}
                is a real-time trading platform that provides BUY and SELL signals, volume and open interest analysis, and smart market insights to help traders make informed decisions.
              </p>
            </li>

            <li className="demand">
              <span className="d-num">04</span>
              <p className="d-text">
                <a href={links.indicators} className="brand-link">
                  BR30 TradingView Indicators
                </a>{" "}
                is a complete collection of BR30 custom TradingView indicators designed for trend analysis, scalping, SMC, liquidity, EMA/SMA, FVG, market structure, breakout, and smart trading confirmation.
              </p>
            </li>

            <li className="demand">
              <span className="d-num">05</span>
              <p className="d-text">
                <a href={links.algo} target="_blank" rel="noreferrer" className="brand-link">
                  BR30 Algo
                </a>{" "}
                BR30 Algo is a private automated trading system designed to analyze market conditions, identify trading opportunities, execute trades automatically, and support disciplined decision-making.
              </p>
            </li>

            <li className="demand">
              <span className="d-num">06</span>
              <p className="d-text">
                <a href={links.services} className="brand-link">
                  BR30 Services
                </a>{" "}
                delivers professional web development, digital branding, logo design, custom TradingView indicators, business automation, and complete online solutions under one trusted BR30 identity.
              </p>
            </li>

            <li className="demand">
              <span className="d-num">07</span>
              <p className="d-text">
                <a href={links.founder} target="_blank" rel="noreferrer" className="brand-link">
                  BR30 Founder
                </a>{" "}
                is the personal portfolio of Mukesh Raj, showcasing his journey as a web developer, trader, founder, creator, and builder behind the BR30 digital ecosystem.
              </p>
            </li>

            <li className="demand">
              <span className="d-num">07</span>
              <p className="d-text">
                <a href="https://br-30-qr-studio-xi.vercel.app/" target="_blank" rel="noreferrer" className="brand-link">
                  BR30 QR Studio
                </a>{" "}
                is a premium QR Code Generator by BR30 Group that instantly converts any URL into stylish, downloadable QR codes with a fast, modern, and mobile-friendly experience.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <style>{`.manifesto{background:#120700!important;position:relative;overflow:hidden}.manifesto::before,.manifesto::after{display:none!important;content:none!important}.eyebrow.on-dark{background:#ff7a00!important;border:1.5px solid #ff7a00!important;color:#000!important;padding:14px 28px;border-radius:999px;display:inline-flex;align-items:center;gap:12px;font-weight:800;letter-spacing:.22em;text-transform:uppercase;box-shadow:none!important}.eyebrow.on-dark::before{content:"●";color:#000}.display.on-dark{color:#f5f0e6!important;text-shadow:none!important}.lead.on-dark{color:#d7d0c6!important;max-width:760px;margin:auto;line-height:1.7}.demands{position:relative;z-index:2;margin-top:60px;max-height:650px;overflow-y:auto;padding:8px 10px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.03);backdrop-filter:blur(10px);border-radius:22px;scroll-behavior:smooth}.demands::-webkit-scrollbar{width:8px}.demands::-webkit-scrollbar-track{background:rgba(255,255,255,.05);border-radius:20px}.demands::-webkit-scrollbar-thumb{background:#ff7a00;border-radius:20px}.demands::-webkit-scrollbar-thumb:hover{background:#ff9b3d}.demand{display:grid;grid-template-columns:145px 1fr;gap:28px;align-items:center;padding:26px 18px;border-bottom:1px solid rgba(255,255,255,.08);transition:all .25s ease;border-radius:16px;background:transparent!important}.demand:hover{background:rgba(255,122,0,.08)!important;transform:translateX(6px)}.d-num{font-size:92px;font-weight:900;line-height:.9;font-family:Impact,sans-serif;color:#ff8a1d;text-shadow:none!important}.d-text{font-size:21px;line-height:1.55;font-weight:500;color:#f5f0e6!important;max-width:980px;background:none!important}.brand-link{color:#ffb36b!important;font-weight:800;text-decoration:underline;background:none!important;box-shadow:none!important;text-shadow:none!important;transition:all .25s ease}.brand-link:hover{color:#00ff88!important;text-decoration-color:#00ff88!important}.d-text a,.d-text span{background:none!important;box-shadow:none!important;text-shadow:none!important}.demand *{filter:none!important}@media(max-width:900px){.demands{max-height:500px}.demand{grid-template-columns:1fr;gap:14px;padding:24px 16px}.d-num{font-size:70px}.d-text{font-size:18px}}`}</style>
    </>
  );
}
