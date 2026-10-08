export default function Eligibility() {
  return (
    <>
      <section className="eligibility" id="join" data-screen-label="04 Who Can Join">
        <div className="container">
          <div className="elig-head">
            <span className="eyebrow">Who Is BR30 For?</span>

            <h2 className="display">
              Built for people
              <br />
              who want to <em>build more.</em>
            </h2>

            <p className="lead">BR30 Group is for people who are curious, ambitious, and ready to turn ideas into action — from traders and creators to founders, developers, learners, and digital builders shaping what comes next.</p>
          </div>

          <style>{`.eligibility{padding:70px 0 80px;background:#f5f0e6}.elig-head{text-align:center;max-width:920px;margin:0 auto 48px}.elig-head .display{font-size:clamp(50px,6vw,92px);line-height:.92}.elig-head .lead{font-size:20px;line-height:1.55;max-width:800px;margin:22px auto 0}.checklist{display:flex;flex-direction:column;gap:16px;max-width:1040px;margin:0 auto}.checklist li{display:grid;grid-template-columns:120px 1fr 64px;align-items:center;gap:24px;padding:22px 30px;background:#f5f0e6;border:2px solid #1a120c;box-shadow:7px 7px 0 #1a120c;transition:.22s ease;min-height:118px}.checklist li:hover{transform:translate(-2px,-2px);background:#fff5e6;box-shadow:9px 9px 0 #1a120c}.ck-num{color:#ff7a00!important;font-weight:400;letter-spacing:.16em;font-size:11px;white-space:nowrap}.ck-title{font-size:34px;font-family:Impact,sans-serif;line-height:.95;color:#120700;display:block;font-weight:400}.ck-sub{display:block;margin-top:8px;font-size:15.5px;line-height:1.5;color:#3d3228;font-style:normal;max-width:760px}.ck-tick{width:52px;height:52px;border-radius:50%;border:2px solid #1a120c;display:flex;align-items:center;justify-content:center;font-size:26px;color:#16b84e;font-weight:400}.elig-cta{text-align:center;margin-top:54px}.elig-fine{margin-top:20px;font-size:14px;line-height:1.6;color:#5c5147}.btn-primary-lg{min-width:300px;height:64px;font-size:16px}@media(max-width:900px){.checklist li{grid-template-columns:1fr 54px;padding:22px 20px;gap:14px}.ck-num{grid-column:1/2}.ck-title{font-size:30px}.ck-sub{font-size:15px}.ck-tick{grid-column:2;grid-row:1/4;width:48px;height:48px;font-size:24px}.btn-primary-lg{width:100%;min-width:100%}}@media(max-width:600px){.eligibility{padding:55px 0 65px}.elig-head{margin-bottom:34px}.elig-head .display{font-size:clamp(42px,12vw,64px);line-height:.94}.elig-head .lead{font-size:17px;line-height:1.55}.checklist{gap:14px}.checklist li{padding:20px 16px;min-height:105px}.ck-title{font-size:26px}.ck-sub{font-size:14px;line-height:1.5}.ck-num{font-size:10px}.ck-tick{width:42px;height:42px;font-size:21px}.elig-cta{margin-top:42px}.elig-fine{font-size:13px}}`}</style>

          <ul className="checklist">
            <li>
              <span className="ck-num">BR30 / 01</span>
              <div>
                <span className="ck-title">Traders & Market Learners</span>
                <span className="ck-sub">People exploring trading, markets, price action, investing, and financial education with a focus on discipline, learning, and continuous improvement.</span>
              </div>
              <span className="ck-tick">✓</span>
            </li>

            <li>
              <span className="ck-num">BR30 / 02</span>
              <div>
                <span className="ck-title">Creators & Digital Builders</span>
                <span className="ck-sub">Designers, developers, content creators, freelancers, and digital builders turning ideas into websites, products, brands, communities, and experiences.</span>
              </div>
              <span className="ck-tick">✓</span>
            </li>

            <li>
              <span className="ck-num">BR30 / 03</span>
              <div>
                <span className="ck-title">Founders & Entrepreneurs</span>
                <span className="ck-sub">People building businesses, products, services, and new opportunities with the ambition to create something meaningful and sustainable.</span>
              </div>
              <span className="ck-tick">✓</span>
            </li>

            <li>
              <span className="ck-num">BR30 / 04</span>
              <div>
                <span className="ck-title">Technology & AI Enthusiasts</span>
                <span className="ck-sub">People interested in technology, artificial intelligence, automation, software, and the tools shaping the next generation of digital businesses.</span>
              </div>
              <span className="ck-tick">✓</span>
            </li>

            <li>
              <span className="ck-num">BR30 / 05</span>
              <div>
                <span className="ck-title">Learners & Problem Solvers</span>
                <span className="ck-sub">Curious people who enjoy learning new skills, solving real problems, experimenting with ideas, and continuously improving how they work and create.</span>
              </div>
              <span className="ck-tick">✓</span>
            </li>

            <li>
              <span className="ck-num">BR30 / 06</span>
              <div>
                <span className="ck-title">Builders With a Bigger Vision</span>
                <span className="ck-sub">Anyone who believes in learning, execution, ownership, and long-term thinking — and wants to be part of an ecosystem built around creating real value.</span>
              </div>
              <span className="ck-tick">✓</span>
            </li>
          </ul>

          <div className="elig-cta">
            <a href="#connect" className="btn-primary btn-primary-lg">
              Be Part of BR30
              <span className="arr">→</span>
            </a>

            <p className="elig-fine">
              BR30 Group is built around learning, building, and connecting.
              <br />
              No hype. No unnecessary barriers. Just people working toward something bigger.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
