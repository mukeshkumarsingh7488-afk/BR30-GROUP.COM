import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  useEffect(() => {
    document.title = "About BR30 Group (2026) – Trading, Digital Ecosystem & Innovation Platform";

    const metaDescription = document.querySelector("meta[name='description']");

    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn about BR30 Group — a modern digital ecosystem connecting trading education, web services, branding, logo design, marketplaces, and future-focused digital innovation.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Learn about BR30 Group — a modern digital ecosystem connecting trading education, web services, branding, logo design, marketplaces, and future-focused digital innovation.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <>
      <style>{`.about-page{background:#050505;color:#fff;line-height:1.7;overflow-x:hidden;font-family:"Poppins",sans-serif;min-height:100vh}.about-hero{min-height:480px;background:radial-gradient(circle at top,rgba(0,255,102,.16),transparent 35%),linear-gradient(135deg,#050505 0%,#101c12 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;border-bottom:2px solid #00ff66;padding:60px 20px;position:relative;overflow:hidden}.about-hero::before{content:"BR30GROUP";position:absolute;font-size:170px;font-weight:900;font-family:Impact,sans-serif;color:rgba(255,255,255,.03);top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none;white-space:nowrap}.about-hero h1{font-size:3.4rem;letter-spacing:1px;text-transform:uppercase;max-width:1100px;margin-bottom:18px;line-height:.95;position:relative;z-index:2}.about-hero h1 span{color:#00ff66;text-shadow:0 0 24px rgba(0,255,102,.4)}.about-hero p{color:#d1d5db;font-size:1.08rem;max-width:880px;position:relative;z-index:2}.trust-grid{max-width:1180px;margin:-70px auto 70px;padding:0 20px;display:grid;grid-template-columns:repeat(3,1fr);gap:28px;position:relative;z-index:5}.trust-card{background:rgba(15,15,15,.92);border:1px solid rgba(0,255,102,.18);border-radius:24px;padding:34px 24px;text-align:center;box-shadow:0 20px 40px rgba(0,0,0,.4);transition:.3s ease}.trust-card:hover{transform:translateY(-8px);border-color:#00ff66;box-shadow:0 0 30px rgba(0,255,102,.16)}.trust-card i{color:#00ff66;font-size:2rem;margin-bottom:16px}.trust-card h3{font-size:1.4rem;margin-bottom:10px;color:#fff}.trust-card p{color:#cbd5e1;font-size:.97rem}.about-content{max-width:1080px;margin:0 auto 55px;padding:45px;background:rgba(15,15,15,.88);border:1px solid rgba(0,255,102,.14);border-radius:28px;box-shadow:0 25px 50px rgba(0,0,0,.45)}.about-content h2{color:#00ff66;font-size:2.2rem;margin-bottom:24px;border-bottom:2px solid rgba(0,255,102,.25);display:inline-block;padding-bottom:6px}.about-content p{color:#d1d5db;margin-bottom:20px;font-size:1.05rem}.green{color:#00ff66}.mission-vision{max-width:1080px;margin:0 auto 70px;padding:0 20px;display:grid;grid-template-columns:1fr 1fr;gap:28px}.mv-box{background:rgba(12,12,12,.94);border-left:5px solid #00ff66;border-radius:24px;padding:34px;transition:.3s ease;border:1px solid rgba(0,255,102,.12)}.mv-box:hover{transform:translateY(-6px);box-shadow:0 0 30px rgba(0,255,102,.14)}.mv-box h3{color:#fff;margin-bottom:16px;font-size:1.6rem}.mv-box p{color:#d1d5db;font-size:1rem}.about-cta{text-align:center;padding:30px 20px 90px}.about-cta h2{font-size:2.2rem;color:#fff;margin-bottom:30px}.btn-join{display:inline-block;padding:16px 34px;background:#00ff66;color:#000;text-decoration:none;border-radius:14px;font-weight:900;transition:.3s ease;box-shadow:0 0 20px rgba(0,255,102,.2)}.btn-join:hover{background:#fff;color:#000;transform:translateY(-4px);box-shadow:0 0 35px rgba(0,255,102,.35)}.back-home-link{color:#9ca3af;text-decoration:none;display:inline-block;margin-top:22px}.back-home-link:hover{color:#00ff66}@media(max-width:768px){.about-hero h1{font-size:2.2rem}.about-hero::before{font-size:90px}.trust-grid,.mission-vision{grid-template-columns:1fr}.trust-grid{margin-top:40px}.about-content{margin:0 20px 40px;padding:28px}.about-cta h2{font-size:1.7rem}}`}</style>

      <main className="about-page">
        <header className="about-hero">
          <h1>
            Building The Future Of <span>BR30 Group</span>
          </h1>

          <p>A modern digital ecosystem connecting trading education, branding, web solutions, marketplaces, automation, and innovation under one powerful vision.</p>

          <p style={{ fontSize: "14px", color: "#cfcfcf", marginTop: "12px" }}>BR30 Group is a next-generation digital network founded by Mukesh Raj, focused on trading education, web services, logo branding, marketplaces, and scalable online business solutions.</p>
        </header>

        <section className="trust-grid">
          <div className="trust-card">
            <i className="fa-solid fa-chart-line"></i>
            <h3>Trading Education</h3>
            <p>Professional learning focused on Price Action, SMC, psychology, risk management, and real market execution.</p>
          </div>

          <div className="trust-card">
            <i className="fa-solid fa-globe"></i>
            <h3>Digital Ecosystem</h3>
            <p>Websites, marketplaces, branding systems, and scalable digital infrastructure built under one ecosystem.</p>
          </div>

          <div className="trust-card">
            <i className="fa-solid fa-bolt"></i>
            <h3>Innovation</h3>
            <p>From automation tools to future-ready systems, BR30 Group focuses on modern growth and execution.</p>
          </div>
        </section>

        <section className="about-content">
          <h2>Who We Are?</h2>

          <p>
            <b>
              <span className="green">BR30 Group</span>
            </b>{" "}
            is not just a single platform — it is a growing digital ecosystem designed to connect trading education, digital services, branding, marketplaces, and innovation under one strong identity.
          </p>

          <p>Our goal is to help traders, creators, learners, and ambitious builders develop real-world skills, powerful online presence, and scalable digital opportunities.</p>

          <p>
            Through platforms like <b>BR30 Trader</b>, <b>BR30 Kart</b>, <b>BR30 Algo</b>, and future BR30 projects, we are building an ecosystem focused on execution, learning, consistency, and long-term growth.
          </p>

          <p>BR30 Group believes in logic over hype, discipline over shortcuts, and innovation over outdated systems.</p>
        </section>

        <section className="mission-vision">
          <div className="mv-box">
            <h3>Our Mission 🎯</h3>

            <p>To build a modern digital ecosystem that empowers traders, creators, learners, and businesses with education, tools, branding, and growth opportunities for the future.</p>
          </div>

          <div className="mv-box">
            <h3>Our Vision 👁️</h3>

            <p>To establish BR30 Group as a trusted digital brand network combining trading, marketplaces, automation, branding, and online innovation under one powerful ecosystem.</p>
          </div>
        </section>

        <section className="about-cta">
          <h2>Ready to grow with BR30 Group?</h2>

          <a href="/contact" className="btn-join">
            Connect With BR30
          </a>

          <br />

          <Link to="/" className="back-home-link">
            ← Back to Home
          </Link>
        </section>
      </main>
    </>
  );
}
