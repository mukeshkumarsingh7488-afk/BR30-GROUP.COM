export default function Vision() {
  return (
    <>
      <section className="vision" id="vision" data-screen-label="02 Vision">
        <div className="container">
          <div className="vision-grid">
            <div className="vision-side">
              <span className="eyebrow">● BR30 GROUP VISION</span>

              <h2 className="display">
                Building Brands.
                <br />
                <em>Creating Value.</em>
              </h2>

              <p className="lead">BR30 GROUP is built to connect trading education, web services, logo design, digital products, and future BR30 projects under one powerful brand identity.</p>

              <div className="mission-card">
                <span className="mc-label">Our Mission</span>

                <p>Our mission is simple — help traders, creators, startups, and online businesses build a strong digital presence through premium education, modern websites, custom branding, and trusted digital solutions.</p>
              </div>
            </div>

            <aside className="vision-image">
              <img loading="lazy" decoding="async" src="https://res.cloudinary.com/dw4imlekm/image/upload/v1779384332/BR30Group_Vision_Poster_nhdajh.png" alt="BR30 GROUP digital brand ecosystem" />

              <div className="vi-caption">
                <span>BR30 GROUP • Digital Network</span>
                <span>Est. 2026</span>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <style>{`.mc-label{background:#ff7a00;border:1.5px solid #ff7a00;color:#000!important;padding:12px 24px;border-radius:999px;display:inline-flex;align-items:center;font-weight:800;letter-spacing:.18em;text-transform:uppercase;box-shadow:0 0 18px rgba(255,122,0,.35);font-size:11px}.eyebrow{background:#ff7a00;border:1.5px solid #ff7a00;color:#000;padding:14px 26px;border-radius:999px;display:inline-flex;align-items:center;gap:12px;font-weight:800;letter-spacing:.22em;text-transform:uppercase;box-shadow:0 0 22px rgba(255,122,0,.35);font-size:12px;margin-bottom:28px}.vision-image{width:100%;max-width:100%;overflow:hidden}.vision-image img{width:100%;max-width:100%;height:auto;display:block;object-fit:contain}.vi-caption{width:100%;box-sizing:border-box}@media(max-width:768px){.vision-grid{grid-template-columns:1fr!important}.vision-side{width:100%!important}.vision-image{width:100%!important;max-width:100%!important;margin-top:28px}.vision-image img{width:100%!important;max-width:100%!important;height:auto!important;object-fit:contain!important;border-radius:0!important}}`}</style>
    </>
  );
}
