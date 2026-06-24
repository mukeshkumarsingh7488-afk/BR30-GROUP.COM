import { useMemo, useState } from "react";

export default function Indicators() {
  const indicators = [
    ["BR30 Algo", "Advanced trend-following indicator with custom Supertrend, EMA Energy, momentum analysis, and dynamic candle coloring.", "Trend"],
    ["BR30 Algo V2.0", "Enhanced version of BR30 Algo with refined trend detection and optimized signal generation.", "Trend"],
    ["BR30 Infinity Sniper", "Multi-target sniper system with dynamic targets, trailing stop-loss, and pullback entries.", "Sniper"],
    ["BR30 Multiple EMA 20/50/100/150", "Multi-EMA trend analysis and dynamic support/resistance framework.", "EMA"],
    ["BR30 Scalper Sniper", "Fast scalping indicator for high-probability BUY, SELL, RE-BUY, and RE-SELL opportunities.", "Scalping"],
    ["BR30 SMA 20/50/100/150", "Multi-SMA trend analysis indicator for market direction and structure.", "SMA"],
    ["BR30 SMC Breakout", "Smart Money Channel breakout system with structure confirmation.", "SMC"],
    ["BR30 SMC Liquidity", "Liquidity sweep, liquidity pool, and breakout detection tool.", "Liquidity"],
    ["BR30 Institutional Breaker Blocks", "Institutional breaker block identification and mitigation tracking.", "SMC"],
    ["BR30 Swing Breakout Retests", "Swing breakout and retest confirmation framework.", "Breakout"],
    ["BR30 Buyside Sellside Liquidity", "Buyside and sellside liquidity mapping system.", "Liquidity"],
    ["BR30 Algo Zones", "Dynamic trading zones based on momentum and volatility.", "Zones"],
    ["BR30 Elliott Wave Pro", "Advanced Elliott Wave structure visualization.", "Wave"],
    ["BR30 Fair Value Gap", "Automatic Fair Value Gap (FVG) detection.", "FVG"],
    ["BR30 Fibonacci Structure Matrix", "Fibonacci-based structure and confluence analysis.", "Fibonacci"],
    ["BR30 Institutional FVG", "Institutional Fair Value Gap detection system.", "FVG"],
    ["BR30 Session FVG Matrix", "Session-based Fair Value Gap analysis framework.", "Session"],
    ["BR30 ICT Smart Money Concepts", "ICT-based market structure and liquidity analysis.", "ICT"],
    ["BR30 Smart Money Toolkit", "Comprehensive Smart Money Concepts toolkit.", "SMC"],
    ["BR30 Silver Bullet", "ICT Silver Bullet session trading framework.", "ICT"],
    ["BR30 Unicorn Framework", "ICT Unicorn setup detection and market structure analysis.", "ICT"],
    ["BR30 Inversion Fair Value Gaps", "Inverse Fair Value Gap detection system.", "FVG"],
    ["BR30 Liquidity Pools", "Liquidity pool identification and tracking.", "Liquidity"],
    ["BR30 Liquidity Price Depth Chart", "Liquidity depth and market participation visualization.", "Liquidity"],
    ["BR30 Liquidity Sweeps", "Liquidity sweep detection and confirmation tool.", "Liquidity"],
    ["BR30 Liquidity Swings", "Swing-based liquidity analysis system.", "Liquidity"],
    ["BR30 Market Intelligence Suite", "Comprehensive market intelligence dashboard.", "Dashboard"],
    ["BR30 Market Structure ChoCH-BOS", "Change of Character (ChoCH) and Break of Structure (BOS) detection.", "Structure"],
    ["BR30 Smart Money Profile", "Smart Money volume and profile analysis.", "Profile"],
    ["BR30 Algo Nadaraya-Watson Envelope", "Advanced Nadaraya-Watson Envelope trend analysis.", "Trend"],
    ["BR30 Open Range Breakout & Targets", "Open Range Breakout system with dynamic targets.", "Breakout"],
    ["BR30 Smart Money Order Blocks", "Smart Money Order Block detection framework.", "Order Block"],
    ["BR30 Order Blocks & Breaker Blocks", "Combined Order Block and Breaker Block analysis.", "Order Block"],
    ["BR30 Pivot Reversal Levels", "Pivot-based reversal and support/resistance levels.", "Reversal"],
    ["BR30 Predictive Range", "Predictive volatility and range estimation tool.", "Range"],
    ["BR30 Price Action ICT Tools", "ICT-focused price action toolkit.", "ICT"],
    ["BR30 Price Action Structures", "Market structure and price action framework.", "Price Action"],
    ["BR30 Range Detector", "Automatic consolidation and range detection.", "Range"],
    ["BR30 Retest & Break Setup", "Breakout and retest trading setup detector.", "Breakout"],
    ["BR30 Reversal Signals", "Bullish and bearish reversal signal indicator.", "Reversal"],
    ["BR30 Sessions", "Global trading session visualization tool.", "Session"],
    ["BR30 Smart Money Concepts", "Advanced Smart Money Concepts framework.", "SMC"],
    ["BR30 SMT Divergences", "Smart Money Technique divergence detection.", "Divergence"],
    ["BR30 Dynamic SuperTrend", "Adaptive SuperTrend indicator with dynamic calculations.", "Trend"],
    ["BR30 Smart Supply & Demand Visible Range", "Visible range Supply & Demand analysis system.", "Supply Demand"],
    ["BR30 Support and Resistance Levels with Breaks", "Support and resistance levels with breakout detection.", "S/R"],
    ["BR30 Support and Resistance Signals MTF", "Multi-timeframe support and resistance signal framework.", "MTF"],
    ["BR30 Swing Highs-Lows & Candle Patterns", "Swing structure and candlestick pattern analysis.", "Swing"],
    ["BR30 Three Bar Reversal Pattern", "Three-bar bullish and bearish reversal detection.", "Pattern"],
    ["BR30 Trendline Breakout", "Automatic trendline breakout identification system.", "Trendline"],
    ["BR30 Trendlines with Breaks", "Dynamic trendlines with breakout confirmation.", "Trendline"],
    ["BR30 Ultra RSI", "Enhanced RSI oscillator with advanced smoothing methods.", "RSI"],
    ["BR30 Volume Delta Candles", "Order flow and volume delta candle visualization.", "Volume"],
    ["BR30 Volume Profile with Node Detection", "Volume Profile with HVN, LVN, POC, and node analysis.", "Volume"],
    ["BR30 Zig Zag Channels", "Automatic Zig Zag channel and market structure visualization.", "Zig Zag"],
    ["BR30 ICT Imbalances Pro", "ICT-based Fair Value Gaps, Volume Imbalances, Liquidity Voids, and market inefficiency detection.", "ICT"],
    ["BR30 BTST 5m", "BTST and STBT signal indicator for Indian markets, designed to identify closing-hour momentum after 3:00 PM for potential next-day gap-up or gap-down opportunities.", "BTST"],
  ];

  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All Indicators");

  const filters = useMemo(() => ["All Indicators", ...Array.from(new Set(indicators.map((i) => i[2])))], []);
  const latestName = indicators[indicators.length - 1][0];

  const filteredIndicators = useMemo(() => {
    const q = search.trim().toLowerCase();
    return indicators.filter(([name, desc, tag]) => {
      const matchesFilter = activeFilter === "All Indicators" || tag === activeFilter;
      const matchesSearch = !q || `${name} ${desc} ${tag}`.toLowerCase().includes(q);
      return matchesFilter && matchesSearch;
    });
  }, [search, activeFilter]);

  return (
    <>
      <section className="indicator-page">
        <div className="indicator-bg"></div>

        <div className="indicator-hero">
          <div>
            <span className="mini-badge">BR30 Indicator Suite</span>
            <h1>
              <span>BR30</span> TradingView <br /> Indicators Suite
            </h1>
            <p>Professional collection of {indicators.length}+ high-performance TradingView indicators built for Smart Money Concepts, Price Action, Liquidity, Trend, Volume, and Market Intelligence.</p>

            <div className="stats">
              <div>
                <b>{indicators.length}+</b>
                <small>Indicators</small>
              </div>
              <div>
                <b>{filters.length - 1}+</b>
                <small>Categories</small>
              </div>
              <div>
                <b>Pro Grade</b>
                <small>Advanced Analysis</small>
              </div>
              <div>
                <b>All Markets</b>
                <small>Global Support</small>
              </div>
            </div>
          </div>

          <div className="hero-orb">
            <div className="orb-inner">BR30</div>
          </div>
        </div>

        <div className="indicator-container">
          <div className="top-bar">
            <div className="chips">
              {filters.map((filter) => (
                <button key={filter} className={activeFilter === filter ? "active-chip" : ""} onClick={() => setActiveFilter(filter)}>
                  {filter}
                </button>
              ))}
            </div>

            <div className="search-wrap">
              <input className="search-box" type="text" placeholder="Search indicator..." value={search} onChange={(e) => setSearch(e.target.value)} />
              {search && (
                <button className="clear-btn" onClick={() => setSearch("")}>
                  Clear
                </button>
              )}
            </div>
          </div>

          <div className="result-line">
            Showing <b>{filteredIndicators.length}</b> of <b>{indicators.length}</b> indicators
          </div>

          {filteredIndicators.length ? (
            <div className="indicator-grid">
              {filteredIndicators.map(([name, desc, tag]) => {
                const originalIndex = indicators.findIndex((i) => i[0] === name);
                const isLatest = name === latestName;

                return (
                  <article className={`indicator-card ${isLatest ? "new-card" : ""}`} key={name}>
                    {isLatest && <span className="new-flash">NEW</span>}
                    <div className="card-head">
                      <div className="icon">✦</div>
                      <div>
                        <span className="num">{String(originalIndex + 1).padStart(2, "0")}</span>
                        <h3>{name}</h3>
                      </div>
                    </div>
                    <p>{desc}</p>
                    <span className="tag">{tag}</span>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="no-result">
              <h3>No indicator found</h3>
              <p>Try another keyword or clear the search filter.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveFilter("All Indicators");
                }}
              >
                Reset Filters
              </button>
            </div>
          )}

          <div className="footer-box">
            <h2>Explore the BR30 Ecosystem</h2>
            <p>Trading education, smart tools, indicators, automation, and digital business platforms under one BR30 identity.</p>
            <a href="/" className="explore-btn">
              Explore BR30 Group →
            </a>
          </div>
        </div>
      </section>

      <style>{`.indicator-page{min-height:100vh;background:#030806;color:#fff;position:relative;overflow:hidden;padding:95px 22px 60px;font-family:inherit}.indicator-bg{position:absolute;inset:0;background:radial-gradient(circle at 78% 10%,rgba(0,255,136,.22),transparent 32%),radial-gradient(circle at 15% 70%,rgba(0,255,136,.12),transparent 35%),linear-gradient(180deg,#020403,#06140d 45%,#020403);pointer-events:none}.indicator-bg::before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(0,255,136,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,136,.06) 1px,transparent 1px);background-size:42px 42px;mask-image:linear-gradient(to bottom,rgba(0,0,0,.9),transparent)}.indicator-hero,.indicator-container{position:relative;z-index:2;max-width:1350px;margin:auto}.indicator-hero{min-height:360px;display:grid;grid-template-columns:1.2fr .8fr;align-items:center;gap:40px;padding:30px 0 50px}.mini-badge{display:inline-flex;background:rgba(0,255,136,.12);border:1px solid rgba(0,255,136,.35);color:#00ff88;padding:10px 16px;border-radius:999px;text-transform:uppercase;font-weight:900;letter-spacing:.14em;font-size:12px}.indicator-hero h1{margin:24px 0 16px;font-size:clamp(44px,6vw,82px);line-height:1;font-weight:950;letter-spacing:-.04em}.indicator-hero h1 span{color:#00ff88;text-shadow:0 0 28px rgba(0,255,136,.45)}.indicator-hero p{color:#cfd8d3;font-size:19px;line-height:1.7;max-width:760px}.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:34px}.stats div{background:rgba(255,255,255,.04);border:1px solid rgba(0,255,136,.18);border-radius:18px;padding:18px}.stats b{display:block;color:#00ff88;font-size:23px;margin-bottom:6px}.stats small{color:#c8c8c8;font-weight:700}.hero-orb{width:360px;height:360px;margin-left:auto;border-radius:50%;display:grid;place-items:center;background:radial-gradient(circle,#123e29 0%,#07130e 55%,#00ff88 57%,#062014 60%,transparent 70%);box-shadow:0 0 70px rgba(0,255,136,.4);animation:pulseOrb 2.6s infinite ease-in-out}.orb-inner{width:245px;height:245px;border-radius:50%;display:grid;place-items:center;border:2px solid rgba(0,255,136,.55);background:linear-gradient(145deg,#111,#031109);color:#00ff88;font-size:56px;font-weight:950;letter-spacing:-.08em;text-shadow:0 0 30px rgba(0,255,136,.8)}.top-bar{display:flex;justify-content:space-between;align-items:flex-start;gap:18px;margin:10px 0 14px}.chips{display:flex;gap:10px;flex-wrap:wrap;max-width:950px}.chips button{background:rgba(255,255,255,.05);border:1px solid rgba(0,255,136,.2);color:#e9fff4;padding:11px 15px;border-radius:10px;font-size:13px;font-weight:800;cursor:pointer;transition:.25s}.chips button:hover,.chips .active-chip{background:#00ff88;color:#001b0c;box-shadow:0 0 22px rgba(0,255,136,.22)}.search-wrap{display:flex;align-items:center;gap:10px;min-width:320px;background:rgba(255,255,255,.05);border:1px solid rgba(0,255,136,.2);border-radius:12px;padding:6px}.search-box{width:100%;background:transparent!important;border:0!important;outline:0!important;color:#e9fff4!important;padding:9px 10px;font-size:13px;font-weight:800}.search-box::placeholder{color:#8da99b}.clear-btn{background:#00ff88;border:0;color:#001b0c;border-radius:9px;padding:9px 12px;font-size:12px;font-weight:950;cursor:pointer}.result-line{position:relative;z-index:2;color:#b8c9c0;margin:0 0 18px;font-size:14px}.result-line b{color:#00ff88}.indicator-grid{display:grid;grid-template-columns:repeat(5,1fr);border:1px solid rgba(0,255,136,.22);border-radius:20px;overflow:hidden;background:rgba(0,255,136,.035);box-shadow:0 0 50px rgba(0,255,136,.09)}.indicator-card{position:relative;min-height:225px;padding:23px;border-right:1px solid rgba(0,255,136,.2);border-bottom:1px solid rgba(0,255,136,.2);background:linear-gradient(145deg,rgba(0,255,136,.08),rgba(0,0,0,.18));transition:.28s ease}.indicator-card:hover{transform:translateY(-5px);background:linear-gradient(145deg,rgba(0,255,136,.15),rgba(0,0,0,.22));box-shadow:inset 0 0 30px rgba(0,255,136,.08)}.card-head{display:flex;gap:14px;align-items:flex-start;margin-bottom:14px}.icon{width:38px;height:38px;flex:0 0 38px;border-radius:50%;display:grid;place-items:center;background:rgba(0,255,136,.12);color:#00ff88;border:1px solid rgba(0,255,136,.32);box-shadow:0 0 18px rgba(0,255,136,.18)}.num{color:#00ff88;font-weight:950;font-size:16px}.indicator-card h3{margin:5px 0 0;font-size:16px;line-height:1.25;font-weight:900;color:#fff}.indicator-card p{color:#cdd8d1;font-size:14px;line-height:1.55;margin:0 0 16px}.tag{display:inline-flex;color:#00ff88;background:rgba(0,255,136,.09);border:1px solid rgba(0,255,136,.2);border-radius:999px;padding:6px 10px;font-size:11px;font-weight:900}.new-card{grid-column:span 2;background:linear-gradient(145deg,rgba(255,190,0,.16),rgba(0,0,0,.35));border:1px solid rgba(255,196,0,.8)!important;box-shadow:0 0 35px rgba(255,196,0,.28),inset 0 0 28px rgba(255,196,0,.08)}.new-flash{position:absolute;top:18px;right:18px;color:#ffd400;font-size:24px;font-weight:950;transform:rotate(-8deg);text-shadow:0 0 12px #ffd400,0 0 24px #ff8a00;animation:newBlink .9s infinite alternate}.no-result{border:1px solid rgba(0,255,136,.22);background:rgba(0,255,136,.06);border-radius:20px;padding:50px 20px;text-align:center}.no-result h3{font-size:28px;margin:0 0 10px;color:#00ff88}.no-result p{color:#cdd8d1}.no-result button{margin-top:10px;background:#00ff88;color:#001b0c;border:0;border-radius:12px;padding:13px 20px;font-weight:950;cursor:pointer}.footer-box{margin-top:32px;background:linear-gradient(135deg,rgba(0,255,136,.12),rgba(0,0,0,.4));border:1px solid rgba(0,255,136,.25);border-radius:24px;padding:34px;text-align:center}.footer-box h2{margin:0 0 10px;font-size:32px}.footer-box p{color:#cbd6d0;max-width:760px;margin:0 auto 22px;line-height:1.7}.explore-btn{display:inline-flex;background:#00ff88;color:#001b0c;padding:14px 24px;border-radius:12px;font-weight:950;text-decoration:none;box-shadow:0 0 25px rgba(0,255,136,.28)}@keyframes pulseOrb{0%,100%{transform:scale(1)}50%{transform:scale(1.035)}}@keyframes newBlink{from{opacity:.65;transform:rotate(-8deg) scale(.96)}to{opacity:1;transform:rotate(-8deg) scale(1.08)}}@media(max-width:1200px){.indicator-grid{grid-template-columns:repeat(4,1fr)}}@media(max-width:950px){.indicator-page{padding-top:80px}.indicator-hero{grid-template-columns:1fr}.hero-orb{display:none}.stats{grid-template-columns:repeat(2,1fr)}.top-bar{align-items:flex-start;flex-direction:column}.search-wrap{width:100%;min-width:0}.indicator-grid{grid-template-columns:repeat(2,1fr)}.new-card{grid-column:span 2}}@media(max-width:580px){.indicator-page{padding-left:14px;padding-right:14px}.indicator-grid{grid-template-columns:1fr}.new-card{grid-column:span 1}.stats{grid-template-columns:1fr}.indicator-card{min-height:auto}.indicator-hero h1{font-size:42px}}`}</style>
    </>
  );
}
