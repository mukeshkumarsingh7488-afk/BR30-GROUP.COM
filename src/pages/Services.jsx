export default function Services() {
  const services = [
    ["Web Development", "Modern, fast, responsive websites built for businesses, creators, traders, and startups using professional technologies and scalable architecture.", "Website"],
    ["Custom TradingView Indicators", "Professional TradingView indicators developed for trend analysis, SMC, liquidity, price action, automation, and advanced trading strategies.", "Trading"],
    ["Logo Design", "Unique and professional logo designs crafted to build a memorable and trusted brand identity.", "Branding"],
    ["Readymade Logos", "Premium ready-to-use logo collections for businesses, startups, creators, and personal brands.", "Design"],
    ["Digital Branding", "Complete branding solutions including brand identity, social media assets, business graphics, and visual consistency.", "Brand"],
    ["Business Automation", "Custom automation systems designed to reduce manual work, improve speed, and streamline business operations.", "Automation"],
    ["Custom Web Applications", "Advanced dashboards, management systems, marketplaces, SaaS products, and business platforms tailored to specific requirements.", "Apps"],
    ["Technical Consultation", "Professional guidance for digital products, trading platforms, branding strategy, website architecture, and business growth.", "Consulting"],
  ];

  return (
    <>
      <section className="services-page">
        <div className="services-bg"></div>

        <div className="services-hero">
          <div>
            <div className="hero-actions">
              <span className="mini-badge">BR30 Professional Services</span>
              <a href="/" className="back-home-btn">
                ← Back To Home
              </a>
            </div>

            <h1>
              Build. Brand. Automate. <br />
              <span>Grow with BR30 Services.</span>
            </h1>

            <p>BR30 Services helps traders, creators, startups, and businesses establish a strong digital presence through professional web development, branding, automation, and custom trading solutions.</p>

            <div className="stats">
              <div>
                <b>8+</b>
                <small>Core Services</small>
              </div>
              <div>
                <b>Pro</b>
                <small>Digital Solutions</small>
              </div>
              <div>
                <b>BR30</b>
                <small>Trusted Identity</small>
              </div>
              <div>
                <b>All-in-One</b>
                <small>Business Growth</small>
              </div>
            </div>
          </div>

          <div className="service-orb">
            <div className="orb-inner">BR30</div>
          </div>
        </div>

        <div className="services-container">
          <div className="section-title">
            <span>What We Build</span>
            <h2>Professional Services Under One BR30 Identity</h2>
            <p>From websites and branding to TradingView indicators and automation, BR30 Services is built to support modern digital growth.</p>
          </div>

          <div className="services-grid">
            {services.map(([title, desc, tag], index) => (
              <article className="service-card" key={title}>
                <div className="card-head">
                  <div className="icon">✦</div>
                  <div>
                    <span className="num">{String(index + 1).padStart(2, "0")}</span>
                    <h3>{title}</h3>
                  </div>
                </div>
                <p>{desc}</p>
                <span className="tag">{tag}</span>
              </article>
            ))}
          </div>

          <div className="cta-box">
            <h2>Ready To Build Your Next Project?</h2>
            <p>Whether you need a website, TradingView indicator, branding package, automation system, or complete digital solution, BR30 Services is ready to help.</p>
            <div className="cta-actions">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=support.br30trader@gmail.com&su=BR30%20Services%20Inquiry&body=Hello%20BR30%20Team,%0A%0AI%20am%20interested%20in%20your%20services.%20Please%20share%20more%20details.%0A%0AService%20Required:%20%0AName:%20%0APhone:%20%0A%0ARegards," target="_blank" rel="noreferrer" className="primary-btn">
                Contact Us →
              </a>
              <a href="/" className="secondary-btn">
                Explore BR30 Group
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`.services-page{min-height:100vh;background:#030806;color:#fff;position:relative;overflow:hidden;padding:95px 22px 60px;font-family:inherit}.services-bg{position:absolute;inset:0;background:radial-gradient(circle at 78% 12%,rgba(0,255,136,.22),transparent 32%),radial-gradient(circle at 12% 75%,rgba(255,122,0,.12),transparent 35%),linear-gradient(180deg,#020403,#07140d 45%,#020403);pointer-events:none}.services-bg::before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(0,255,136,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,136,.06) 1px,transparent 1px);background-size:42px 42px;mask-image:linear-gradient(to bottom,rgba(0,0,0,.9),transparent)}.services-hero,.services-container{position:relative;z-index:2;max-width:1350px;margin:auto}.services-hero{min-height:520px;display:grid;grid-template-columns:1.2fr .8fr;align-items:center;gap:40px;padding:50px 0}.hero-actions{display:flex;align-items:center;gap:14px;flex-wrap:wrap}.mini-badge{display:inline-flex;background:rgba(0,255,136,.12);border:1px solid rgba(0,255,136,.35);color:#00ff88;padding:10px 16px;border-radius:999px;text-transform:uppercase;font-weight:900;letter-spacing:.14em;font-size:12px}.back-home-btn{display:inline-flex;align-items:center;justify-content:center;background:rgba(255,255,255,.05);border:1px solid rgba(0,255,136,.35);color:#00ff88;text-decoration:none;padding:10px 16px;border-radius:999px;font-size:12px;font-weight:950;letter-spacing:.08em;text-transform:uppercase;transition:.25s}.back-home-btn:hover{background:#00ff88;color:#001b0c;box-shadow:0 0 22px rgba(0,255,136,.25)}.services-hero h1{margin:24px 0 16px;font-size:clamp(44px,6vw,82px);line-height:1;font-weight:950;letter-spacing:-.04em}.services-hero h1 span{color:#00ff88;text-shadow:0 0 28px rgba(0,255,136,.45)}.services-hero p{color:#cfd8d3;font-size:19px;line-height:1.7;max-width:790px}.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:34px}.stats div{background:rgba(255,255,255,.04);border:1px solid rgba(0,255,136,.18);border-radius:18px;padding:18px}.stats b{display:block;color:#00ff88;font-size:23px;margin-bottom:6px}.stats small{color:#c8c8c8;font-weight:700}.service-orb{width:360px;height:360px;margin-left:auto;border-radius:50%;display:grid;place-items:center;background:radial-gradient(circle,#123e29 0%,#07130e 55%,#00ff88 57%,#062014 60%,transparent 70%);box-shadow:0 0 70px rgba(0,255,136,.4);animation:pulseOrb 2.6s infinite ease-in-out}.orb-inner{width:245px;height:245px;border-radius:50%;display:grid;place-items:center;border:2px solid rgba(0,255,136,.55);background:linear-gradient(145deg,#111,#031109);color:#00ff88;font-size:56px;font-weight:950;letter-spacing:-.08em;text-shadow:0 0 30px rgba(0,255,136,.8)}.section-title{text-align:center;margin:10px auto 35px;max-width:860px}.section-title span{display:inline-flex;background:#00ff88;color:#001b0c;padding:10px 16px;border-radius:999px;font-size:12px;font-weight:950;text-transform:uppercase;letter-spacing:.14em}.section-title h2{font-size:clamp(34px,4vw,56px);line-height:1.05;margin:20px 0 12px}.section-title p{color:#cfd8d3;font-size:18px;line-height:1.7}.services-grid{display:grid;grid-template-columns:repeat(4,1fr);border:1px solid rgba(0,255,136,.22);border-radius:20px;overflow:hidden;background:rgba(0,255,136,.035);box-shadow:0 0 50px rgba(0,255,136,.09)}.service-card{position:relative;min-height:245px;padding:26px;border-right:1px solid rgba(0,255,136,.2);border-bottom:1px solid rgba(0,255,136,.2);background:linear-gradient(145deg,rgba(0,255,136,.08),rgba(0,0,0,.18));transition:.28s ease}.service-card:hover{transform:translateY(-5px);background:linear-gradient(145deg,rgba(0,255,136,.15),rgba(0,0,0,.22));box-shadow:inset 0 0 30px rgba(0,255,136,.08)}.card-head{display:flex;gap:14px;align-items:flex-start;margin-bottom:14px}.icon{width:42px;height:42px;flex:0 0 42px;border-radius:50%;display:grid;place-items:center;background:rgba(0,255,136,.12);color:#00ff88;border:1px solid rgba(0,255,136,.32);box-shadow:0 0 18px rgba(0,255,136,.18)}.num{color:#00ff88;font-weight:950;font-size:16px}.service-card h3{margin:5px 0 0;font-size:20px;line-height:1.25;font-weight:900;color:#fff}.service-card p{color:#cdd8d1;font-size:15px;line-height:1.6;margin:0 0 18px}.tag{display:inline-flex;color:#00ff88;background:rgba(0,255,136,.09);border:1px solid rgba(0,255,136,.2);border-radius:999px;padding:6px 10px;font-size:11px;font-weight:900}.cta-box{margin-top:32px;background:linear-gradient(135deg,rgba(0,255,136,.13),rgba(0,0,0,.42));border:1px solid rgba(0,255,136,.25);border-radius:24px;padding:38px;text-align:center}.cta-box h2{margin:0 0 10px;font-size:36px}.cta-box p{color:#cbd6d0;max-width:780px;margin:0 auto 24px;line-height:1.7}.cta-actions{display:flex;justify-content:center;gap:14px;flex-wrap:wrap}.primary-btn,.secondary-btn{display:inline-flex;align-items:center;justify-content:center;padding:14px 24px;border-radius:12px;font-weight:950;text-decoration:none}.primary-btn{background:#00ff88;color:#001b0c;box-shadow:0 0 25px rgba(0,255,136,.28)}.secondary-btn{background:rgba(255,255,255,.05);color:#00ff88;border:1px solid rgba(0,255,136,.28)}@keyframes pulseOrb{0%,100%{transform:scale(1)}50%{transform:scale(1.035)}}@media(max-width:1200px){.services-grid{grid-template-columns:repeat(3,1fr)}}@media(max-width:950px){.services-page{padding-top:80px}.services-hero{grid-template-columns:1fr;min-height:auto}.service-orb{display:none}.stats{grid-template-columns:repeat(2,1fr)}.services-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:580px){.services-page{padding-left:14px;padding-right:14px}.services-grid{grid-template-columns:1fr}.stats{grid-template-columns:1fr}.service-card{min-height:auto}.services-hero h1{font-size:42px}.cta-box{padding:28px 18px}.cta-box h2{font-size:30px}}`}</style>
    </>
  );
}
