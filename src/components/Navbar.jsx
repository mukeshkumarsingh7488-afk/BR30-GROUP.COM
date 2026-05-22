export default function Navbar() {
  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <a href="#" className="brand" data-comment-anchor="brand">
            <span className="brand-logo">
              <img src="https://i.ibb.co/KxnQc4gx/BR30-LOGO1.png" alt="BR30 Group Logo" />
            </span>

            <span className="brand-text">
              <span className="brand-name">BR30 GROUP</span>
              <span className="brand-tag">Trading • Digital Ecosystem • Innovation</span>
            </span>
          </a>

          <nav className="primary-nav" aria-label="Primary">
            <ul>
              <li>
                <a href="#vision">Vision</a>
              </li>
              <li>
                <a href="#manifesto">Ecosystem</a>
              </li>
              <li>
                <a href="#join">Membership</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>

          <a href="#JoinBanner" className="btn-pill">
            Explore BR30
          </a>
        </div>
      </header>

      <style>{`.nav{position:sticky;top:0;z-index:9999;width:100%;background:#f4f0e4;border-bottom:2px solid #120800;box-shadow:0 6px 18px rgba(0,0,0,.08)}.nav-inner{max-width:1400px;margin:0 auto;padding:16px 80px;display:flex;align-items:center;justify-content:space-between;gap:35px}.brand{display:flex;align-items:center;gap:14px;text-decoration:none;color:#120800}.brand-logo{width:64px;height:64px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.brand-logo img{width:64px;height:64px;object-fit:contain;display:block}.brand-text{display:flex;flex-direction:column;justify-content:center;gap:5px}.brand-name{font-size:22px;line-height:1;font-weight:900;letter-spacing:.02em;white-space:nowrap;color:#120800}.brand-tag{color:#ff7a00!important;font-size:11px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;white-space:nowrap}.primary-nav ul{display:flex;align-items:center;gap:42px;list-style:none;margin:0;padding:0}.primary-nav a{text-decoration:none;color:#120800;font-size:14px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;transition:.25s}.primary-nav a:hover{color:#00a84f}.btn-pill{display:inline-flex;align-items:center;justify-content:center;min-height:52px;padding:0 30px;background:#120800;color:#fff;text-decoration:none;font-size:13px;font-weight:900;letter-spacing:.18em;text-transform:uppercase;transition:.25s}.btn-pill:hover{background:#00c853;color:#000}@media(max-width:900px){.nav-inner{padding:14px 22px;gap:20px}.primary-nav{display:none}.btn-pill{padding:0 20px;min-height:46px}.brand-tag{font-size:9px;letter-spacing:.12em}.brand-name{font-size:19px}.brand-logo,.brand-logo img{width:54px;height:54px}}`}</style>
    </>
  );
}
