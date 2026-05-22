export default function Eligibility() {
  return (
    <>
      <section className="eligibility" id="join" data-screen-label="04 Who Can Join">
        <div className="container">
          <div className="elig-head">
            <span className="eyebrow">Membership</span>
            <h2 className="display">
              Are you eligible
              <br />
              to <em>join?</em>
            </h2>
            <p className="lead">This network is built for people with vision — traders, digital creators, learners, innovators, and ambitious builders ready to grow, execute, and create something bigger than themselves.</p>
          </div>

          <style>{`.eligibility{padding:70px 0 80px;background:#f5f0e6}.elig-head{text-align:center;max-width:900px;margin:0 auto 48px}.elig-head .display{font-size:clamp(50px,6vw,92px);line-height:.9}.elig-head .lead{font-size:20px;line-height:1.55;max-width:760px;margin:22px auto 0}.checklist{display:flex;flex-direction:column;gap:16px;max-width:1040px;margin:0 auto}.checklist li{display:grid;grid-template-columns:120px 1fr 64px;align-items:center;gap:24px;padding:22px 30px;background:#f5f0e6;border:2px solid #1a120c;box-shadow:7px 7px 0 #1a120c;transition:.22s ease;min-height:118px}.checklist li:hover{transform:translate(-2px,-2px);background:#fff5e6;box-shadow:9px 9px 0 #1a120c}.ck-num{color:#ff7a00!important;font-weight:900;letter-spacing:.22em;font-size:11px;white-space:nowrap}.ck-title{font-size:34px;font-family:Impact,sans-serif;line-height:.95;color:#120700;display:block}.ck-sub{display:block;margin-top:8px;font-size:15.5px;line-height:1.45;color:#3d3228;font-style:italic;max-width:760px}.ck-tick{width:52px;height:52px;border-radius:50%;border:2px solid #1a120c;display:flex;align-items:center;justify-content:center;font-size:30px;color:#16b84e;font-weight:700}.elig-cta{text-align:center;margin-top:54px}.elig-fine{margin-top:20px;font-size:14px;line-height:1.6;color:#5c5147}.btn-primary-lg{min-width:300px;height:64px;font-size:16px}@media(max-width:900px){.checklist li{grid-template-columns:1fr 54px;padding:22px 20px;gap:14px}.ck-num{grid-column:1/2}.ck-title{font-size:30px}.ck-sub{font-size:15px}.ck-tick{grid-column:2;grid-row:1/4;width:48px;height:48px;font-size:28px}.btn-primary-lg{width:100%;min-width:100%}}`}</style>

          <ul className="checklist">
            <li>
              <span className="ck-num">REQ / 01</span>
              <div>
                <span className="ck-title">Retail Traders</span>
                <span className="ck-sub">For traders who want to master intraday, option buying, price action, and real market psychology with discipline.</span>
              </div>
              <span className="ck-tick">✓</span>
            </li>

            <li>
              <span className="ck-num">REQ / 02</span>
              <div>
                <span className="ck-title">Learners With Growth Mindset</span>
                <span className="ck-sub">People who are ready to learn daily, improve continuously, and build a better future through skills and execution.</span>
              </div>
              <span className="ck-tick">✓</span>
            </li>

            <li>
              <span className="ck-num">REQ / 03</span>
              <div>
                <span className="ck-title">Digital Creators & Builders</span>
                <span className="ck-sub">Creators, freelancers, developers, and entrepreneurs building brands, websites, businesses, or online communities.</span>
              </div>
              <span className="ck-tick">✓</span>
            </li>

            <li>
              <span className="ck-num">REQ / 04</span>
              <div>
                <span className="ck-title">Action Takers</span>
                <span className="ck-sub">People who believe in execution over excuses and are serious about building real results in life and business.</span>
              </div>
              <span className="ck-tick">✓</span>
            </li>

            <li>
              <span className="ck-num">REQ / 05</span>
              <div>
                <span className="ck-title">Future-Focused Thinkers</span>
                <span className="ck-sub">Individuals interested in trading, automation, AI tools, branding, digital ecosystems, and the future of online growth.</span>
              </div>
              <span className="ck-tick">✓</span>
            </li>

            <li>
              <span className="ck-num">REQ / 06</span>
              <div>
                <span className="ck-title">Self-Made Mentality</span>
                <span className="ck-sub">No shortcuts. No fake hype. Only people willing to work, build, learn, and create their own path under the BR30 vision.</span>
              </div>
              <span className="ck-tick">✓</span>
            </li>
          </ul>

          <div className="elig-cta">
            <a href="#Connect" className="btn-primary btn-primary-lg">
              Join BR30 Group
              <span className="arr">→</span>
            </a>
            <p className="elig-fine">
              BR30 WhatsApp, Telegram & community access are completely free.
              <br />
              No hidden charges. No forced subscriptions. Just real traders & real learning.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
