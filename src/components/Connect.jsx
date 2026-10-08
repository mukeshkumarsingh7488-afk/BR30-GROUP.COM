export default function Contact() {
  const serviceFormUrl = "https://br30crm-com-f.vercel.app/public/forms/6ac4a4ce8ab8658ebe3748f7/br30-group-service-request?utm_source=br30-group-web&utm_medium=website&lead_source=br30-group-web&form_id=6ac702676ca9142e6f794ca2&source_id=6ac702c56ca9142e6f794cab";

  return (
    <>
      <section className="contact" id="connect" data-screen-label="06 Contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-text">
              <span className="eyebrow">Start Something With BR30</span>

              <h2 className="display">
                Let's
                <br />
                <span className="t-saffron">Build.</span>
              </h2>

              <p className="lead">Have a project, business idea, digital requirement, branding need, web development requirement, automation idea, or want to explore one of the BR30 platforms? Send us your requirement through our service request system.</p>

              <ul className="contact-meta">
                <li>
                  <span className="cm-label">Web Development</span>
                  <span className="cm-value">Websites, web applications & digital platforms</span>
                </li>

                <li>
                  <span className="cm-label">Branding & Design</span>
                  <span className="cm-value">Logo design, identity & digital branding</span>
                </li>

                <li>
                  <span className="cm-label">Trading Technology</span>
                  <span className="cm-value">TradingView indicators, tools & automation</span>
                </li>

                <li>
                  <span className="cm-label">Digital Solutions</span>
                  <span className="cm-value">CRM, automation & custom digital products</span>
                </li>
              </ul>
            </div>

            <div className="br30-form-wrap br30-service-card">
              <div className="br30-form-header">
                <span>BR30 GROUP · SERVICE REQUEST</span>

                <h3>
                  Tell Us What
                  <br />
                  You Want To Build.
                </h3>

                <p>Share your requirement with us through the BR30 service request system. Our team will review the details and take the conversation forward.</p>
              </div>

              <div className="service-card-points">
                <div>
                  <span>01</span>
                  <strong>Choose a Service</strong>
                  <small>Select the area where you need help.</small>
                </div>

                <div>
                  <span>02</span>
                  <strong>Describe Your Requirement</strong>
                  <small>Tell us about your project, idea or goal.</small>
                </div>

                <div>
                  <span>03</span>
                  <strong>Our Team Reviews It</strong>
                  <small>We review your request and follow up.</small>
                </div>
              </div>

              <div className="service-card-actions">
                <a href={serviceFormUrl} target="_blank" rel="noreferrer" className="br30-submit-btn">
                  Start a Service Request
                  <span>↗</span>
                </a>

                <a href="#manifesto" className="service-secondary-link">
                  Explore BR30 Ecosystem
                  <span>→</span>
                </a>
              </div>

              <div className="service-card-note">
                <span className="service-note-dot"></span>
                <p>Secure public intake · Managed through BR30 CRM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`.br30-form-wrap{width:100%;padding:32px;border:2px solid #1a120c;border-radius:8px;background:#fff;box-shadow:8px 8px 0 #1a120c}.br30-form-header{margin-bottom:28px}.br30-form-header>span{display:inline-block;margin-bottom:9px;color:#7a5a20;font-size:.65rem;font-weight:800;letter-spacing:.12em}.br30-form-header h3{margin:0;color:#1a120c;font-size:2rem;font-weight:850;line-height:.98;letter-spacing:-.035em}.br30-form-header p{max-width:510px;margin:14px 0 0;color:#756f69;font-size:.84rem;line-height:1.65}.service-card-points{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid #ddd6ce;border-left:1px solid #ddd6ce;margin-top:30px}.service-card-points>div{min-height:145px;padding:18px 16px;border-right:1px solid #ddd6ce;border-bottom:1px solid #ddd6ce;display:flex;flex-direction:column;align-items:flex-start}.service-card-points span{font-size:.68rem;font-weight:800;letter-spacing:.14em;color:#ff7a00;margin-bottom:17px}.service-card-points strong{font-family:var(--condensed);font-size:1rem;line-height:1.15;color:#1a120c;letter-spacing:.03em;text-transform:uppercase}.service-card-points small{margin-top:8px;color:#756f69;font-size:.7rem;line-height:1.5}.service-card-actions{display:flex;align-items:center;gap:22px;margin-top:28px;flex-wrap:wrap}.br30-submit-btn{display:inline-flex;align-items:center;justify-content:center;gap:12px;min-height:52px;padding:0 24px;border-radius:6px;background:#1a120c;color:#fff;font-family:inherit;font-size:.8rem;font-weight:800;letter-spacing:.02em;text-decoration:none;transition:transform .2s ease,background .2s ease}.br30-submit-btn span{font-size:18px;color:#ff7a00;transition:transform .2s ease}.br30-submit-btn:hover{transform:translateY(-2px);background:#332218}.br30-submit-btn:hover span{transform:translate(3px,-3px)}.service-secondary-link{display:inline-flex;align-items:center;gap:8px;color:#1a120c;font-family:var(--condensed);font-size:.72rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;text-decoration:none}.service-secondary-link span{color:#ff7a00;font-size:17px;transition:transform .2s ease}.service-secondary-link:hover span{transform:translateX(4px)}.service-card-note{display:flex;align-items:center;gap:9px;margin-top:25px;padding-top:18px;border-top:1px solid #e2ddd6}.service-note-dot{width:7px;height:7px;border-radius:50%;background:#19b957;box-shadow:0 0 8px rgba(25,185,87,.35)}.service-card-note p{margin:0;color:#8a837b;font-size:.67rem;letter-spacing:.05em}.contact .lead{max-width:620px}.contact-meta .cm-value{word-break:break-word}@media(max-width:900px){.br30-form-wrap{padding:25px;box-shadow:6px 6px 0 #1a120c}.service-card-points{grid-template-columns:1fr 1fr}}@media(max-width:575px){.br30-form-wrap{padding:21px 17px;box-shadow:5px 5px 0 #1a120c}.br30-form-header{margin-bottom:22px}.br30-form-header h3{font-size:1.55rem}.service-card-points{grid-template-columns:1fr}.service-card-points>div{min-height:auto;padding:16px}.service-card-points span{margin-bottom:10px}.service-card-actions{align-items:flex-start;flex-direction:column;gap:17px}.br30-submit-btn{width:100%}.service-secondary-link{font-size:.68rem}.service-card-note{align-items:flex-start}.service-card-note p{line-height:1.5}}`}</style>
    </>
  );
}
