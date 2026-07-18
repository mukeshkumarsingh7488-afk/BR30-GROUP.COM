export default function Hero() {
  return (
    <>
      <section className="hero" data-screen-label="01 Hero">
        <div className="hero-bg"></div>
        <div className="hero-inner">
          <div className="hero-text">
            <div className="hero-kicker">
              <span className="live-dot"></span>
              <span>BR30 GROUP · Official Digital Brand Network</span>
            </div>
            <h1 className="hero-title">
              Build Your
              <br />
              <span className="t-saffron">Brand</span> &
              <br />
              <span className="t-green t-italic">Digital Future.</span>
            </h1>
            <p className="hero-sub">BR30 GROUP is a modern digital network providing trading education, web solutions, custom branding, logo design, and powerful digital services for the next generation of online businesses.</p>
            <div className="hero-ctas">
              <a href="#join-banner" className="btn-primary">
                Explore Services <span className="arr">→</span>
              </a>
              <a href="#manifesto" className="btn-outline">
                View BR30 Network
              </a>
            </div>
            <div className="hero-strip">
              <div>
                <strong>8+</strong>
                <span>Official BR30 Websites</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Self Built</span>
              </div>
              <div>
                <strong>∞</strong>
                <span>Digital Growth</span>
              </div>
              <div>
                <strong>1</strong>
                <span>Trusted BR30 Vision</span>
              </div>
            </div>
          </div>
          <div className="hero-poster">
            <div className="poster-frame hero-poster-frame">
              <img src="https://res.cloudinary.com/dw4imlekm/image/upload/v1779374883/BR30Group_Hero_Poster_h5rble.png" alt="BR30GROUP Poster" className="poster-image hero-poster-image" />
            </div>
          </div>
        </div>
      </section>
      <style>{`.hero-text::before{content:"BR30 GROUP";position:absolute;left:-3px;top:388px;font-size:120px;font-weight:900;font-family:Impact,sans-serif;letter-spacing:2px;line-height:1;color:rgba(0,0,0,0.09);z-index:-1;pointer-events:none;user-select:none;white-space:nowrap;text-transform:uppercase}.btn-primary .arr{color:#000!important}.hero-kicker{background:#ff7a00;border:1.5px solid #ff7a00;color:#111;padding:10px 18px;border-radius:999px;display:inline-flex;align-items:center;gap:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;box-shadow:0 0 18px rgba(255,122,0,.35)}.hero-kicker span{color:#111}.live-dot{width:8px;height:8px;border-radius:50%;background:#111;box-shadow:0 0 10px rgba(0,0,0,.45)}.hero{position:relative;overflow:visible;background:#f4f0e4;padding-bottom:130px}.hero-bg::before{content:"BR30GROUP";position:absolute;left:75px;top:250px;font-family:var(--display);font-size:clamp(115px,16vw,250px);font-weight:900;letter-spacing:-10px;color:rgba(0,0,0,.04);z-index:0;pointer-events:none;user-select:none;white-space:nowrap}.hero-inner{position:relative;z-index:2;display:grid;grid-template-columns:1fr .9fr;gap:70px;align-items:start;padding-top:70px;overflow:visible}.hero-text{position:relative;z-index:3}.hero-title{margin-bottom:26px;line-height:.88}.hero-sub{max-width:620px;font-size:18px;line-height:1.7;margin-bottom:38px;color:#2d2d2d}.hero-ctas{display:flex;align-items:center;gap:22px;margin-bottom:58px;flex-wrap:wrap}.btn-outline{display:inline-flex;align-items:center;justify-content:center;min-height:58px;padding:0 34px;border:2px solid #151515;color:#151515;font-family:var(--condensed);font-size:14px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;background:transparent;transition:.25s}.btn-outline:hover{background:#151515;color:#fff}.hero-strip{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid rgba(0,0,0,.14);padding-top:30px;max-width:650px}.hero-strip>div{display:flex;flex-direction:column;align-items:center;justify-content:center;border-right:1px solid rgba(0,0,0,.12);padding:0 20px;text-align:center}.hero-strip>div:last-child{border-right:none}.hero-strip strong{font-size:38px;line-height:1;color:#111}.hero-strip span{font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:#444;margin-top:8px}.hero-poster{display:flex;align-items:flex-start;justify-content:center;position:relative;z-index:4;padding-top:0;overflow:visible}.poster-frame.hero-poster-frame{position:relative;width:100%;max-width:500px;overflow:visible!important;background:transparent!important;border:0!important;box-shadow:none!important;transform:none!important}.poster-frame.hero-poster-frame img.poster-image.hero-poster-image{width:100%!important;height:auto!important;max-height:none!important;aspect-ratio:auto!important;object-fit:contain!important;object-position:center!important;display:block!important;border-bottom:0!important;filter:drop-shadow(10px 10px 0 #00ff66)}@media(max-width:1100px){.hero-inner{grid-template-columns:1fr;gap:50px}.hero-bg::before{left:30px;top:270px;font-size:clamp(90px,18vw,180px)}.poster-frame.hero-poster-frame{max-width:520px}}@media(max-width:640px){.hero{padding-bottom:80px}.hero-inner{padding-top:40px}.hero-bg::before{left:12px;top:230px;font-size:80px;letter-spacing:-4px}.hero-ctas{gap:14px}.btn-outline{width:100%}.hero-strip{grid-template-columns:repeat(2,1fr);row-gap:24px}.hero-strip>div:nth-child(2){border-right:none}.poster-frame.hero-poster-frame{max-width:100%}}`}</style>
    </>
  );
}
