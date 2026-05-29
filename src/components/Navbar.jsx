import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <Link to="/" className="brand">
            <span className="brand-logo">
              <img src="https://i.ibb.co/KxnQc4gx/BR30-LOGO1.png" alt="BR30 Group Logo" />
            </span>

            <span className="brand-text">
              <span className="brand-name">BR30 GROUP</span>
              <span className="brand-tag">Trading • Digital Ecosystem • Innovation</span>
            </span>
          </Link>

          <nav className="primary-nav" aria-label="Primary">
            <ul>
              <li>
                <a href="/#vision">Vision</a>
              </li>
              <li>
                <a href="/#manifesto">Ecosystem</a>
              </li>
              <li>
                <a href="/#join">Membership</a>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <div className="explore-wrap" ref={dropdownRef} onMouseEnter={() => window.innerWidth > 900 && setOpen(true)} onMouseLeave={() => window.innerWidth > 900 && setOpen(false)}>
            <button type="button" className="btn-pill" onClick={() => setOpen((prev) => !prev)}>
              Explore BR30
            </button>

            <div className={`explore-dropdown ${open ? "show" : ""}`}>
              <a href="https://br-30-group-com.vercel.app/#manifesto" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                <span>🌐</span>
                <div>
                  <strong>BR30 Group</strong>
                  <small>Main Digital Ecosystem</small>
                </div>
              </a>

              <a href="https://my-frontend-eight-roan.vercel.app/" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                <span>📈</span>
                <div>
                  <strong>BR30 Trader</strong>
                  <small>Trading Education Platform</small>
                </div>
              </a>

              <a href="https://br-30-kart.vercel.app/" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                <span>🎓</span>
                <div>
                  <strong>BR30 Kart</strong>
                  <small>Multi-seller Digital Course Marketplace</small>
                </div>
              </a>

              <a href="https://br30-com.vercel.app/" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                <span>👤</span>
                <div>
                  <strong>BR30 Founder</strong>
                  <small>Mukesh Raj Portfolio</small>
                </div>
              </a>

              <a href="https://br30algo-com.vercel.app/l" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                <span>🤖</span>
                <div>
                  <strong>BR30 Algo</strong>
                  <small>Private Algo System</small>
                </div>
              </a>
            </div>
          </div>
        </div>
      </header>

      <style>{`html,body{max-width:100%;overflow-x:hidden;background:#050505!important}body{padding-top:112px!important}.nav{position:fixed!important;top:0!important;left:0!important;right:0!important;z-index:999999!important;width:100%!important;background:#050505!important;border-bottom:1px solid rgba(57,255,20,.15)!important;box-shadow:0 6px 18px rgba(0,0,0,.45)!important;overflow:visible!important;backdrop-filter:blur(10px);color:#fff!important}.nav *{opacity:1!important}.nav-inner{max-width:1400px;margin:0 auto;padding:14px 80px;display:flex;align-items:center;justify-content:space-between;gap:35px;position:relative}.brand{display:flex;align-items:center;gap:14px;text-decoration:none!important;color:#fff!important;min-width:0}.brand-logo{width:82px;height:82px;display:flex;align-items:center;justify-content:center;flex:0 0 82px;overflow:visible!important}.brand-logo img{width:82px!important;height:82px!important;object-fit:contain!important;display:block!important;border-radius:0!important}.brand-text{display:flex!important;flex-direction:column;justify-content:center;gap:5px;min-width:0;visibility:visible!important}.brand-name{display:inline-block!important;font-size:18px!important;line-height:1!important;font-weight:800!important;letter-spacing:.08em!important;white-space:nowrap;color:#f5f0e6!important;text-transform:uppercase!important;text-shadow:0 0 4px rgba(255,255,255,.35),0 0 10px rgba(0,255,136,.28)!important;background:linear-gradient(90deg,#fff,#d9ffe8,#00ff88,#fff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent!important;filter:drop-shadow(0 0 3px rgba(0,255,136,.35));visibility:visible!important}.brand-tag{display:block!important;color:#ff7a00!important;font-size:10px!important;font-weight:800!important;letter-spacing:.16em!important;text-transform:uppercase!important;white-space:nowrap;text-shadow:0 0 8px rgba(255,122,0,.28)!important;visibility:visible!important}.brand-tag{display:block!important;color:#ff7a00!important;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;white-space:nowrap;text-shadow:0 0 8px rgba(255,122,0,.25);visibility:visible!important}.primary-nav ul{display:flex;align-items:center;gap:42px;list-style:none;margin:0;padding:0}.primary-nav a,.primary-nav a:visited,.primary-nav a:active{text-decoration:none!important;color:#f5f0e6!important;font-size:14px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;transition:.25s;text-shadow:0 0 6px rgba(255,255,255,.25)}.primary-nav a:hover{color:#00ff88!important}.explore-wrap{position:relative;flex:0 0 auto;padding-bottom:18px;margin-bottom:-18px}.btn-pill{border:0;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;min-height:52px;padding:0 30px;background:#120800;color:#fff!important;text-decoration:none!important;font-size:13px;font-weight:900;letter-spacing:.18em;text-transform:uppercase;transition:.25s;box-shadow:6px 6px 0 #00c853}.btn-pill:hover{background:#00c853;color:#000!important}.explore-dropdown{position:absolute;right:0;top:100%;width:320px;background:#0b111d;border:1px solid rgba(97,255,75,.25);border-radius:10px;padding:12px;box-shadow:0 18px 45px rgba(0,0,0,.35);opacity:0;visibility:hidden;pointer-events:none;transform:translateY(8px);transition:opacity .18s ease,transform .18s ease,visibility .18s ease;z-index:1000000}.explore-dropdown.show{opacity:1;visibility:visible;pointer-events:auto;transform:translateY(0)}.explore-dropdown::before{content:"";position:absolute;right:30px;top:-8px;width:16px;height:16px;background:#0b111d;border-left:1px solid rgba(97,255,75,.25);border-top:1px solid rgba(97,255,75,.25);transform:rotate(45deg)}.explore-dropdown a{display:flex;align-items:center;gap:14px;text-decoration:none!important;color:#fff!important;padding:14px 12px;border-radius:8px;transition:.22s}.explore-dropdown a:hover{background:rgba(97,255,75,.12);transform:translateX(4px)}.explore-dropdown a span{width:36px;height:36px;border-radius:50%;background:#050505;display:flex;align-items:center;justify-content:center;font-size:18px;border:1px solid rgba(97,255,75,.35);flex:0 0 auto}.explore-dropdown strong{display:block;color:#f5f0e6!important;font-size:15px;line-height:1.1}.explore-dropdown small{display:block;color:#9aa4b2!important;font-size:12px;margin-top:4px;line-height:1.35}@media(max-width:900px){body{padding-top:86px!important}.nav-inner{padding:10px 14px;gap:10px}.primary-nav{display:none}.brand{gap:9px;flex:1;min-width:0}.brand-logo{width:64px;height:64px;flex:0 0 64px}.brand-logo img{width:64px!important;height:64px!important;object-fit:contain!important}.brand-text{min-width:0;max-width:190px}.brand-name{font-size:18px}.brand-tag{display:block!important;font-size:8px;letter-spacing:.05em;white-space:normal;line-height:1.25;max-width:190px;overflow:visible}.btn-pill{padding:0 12px;min-height:42px;font-size:9px;letter-spacing:.1em;box-shadow:4px 4px 0 #00c853}.explore-wrap{padding-bottom:0;margin-bottom:0}.explore-dropdown{position:fixed;right:12px;top:76px;width:min(310px,calc(100vw - 24px));max-height:calc(100vh - 90px);overflow-y:auto}.explore-dropdown::before{right:28px}}@media(max-width:430px){body{padding-top:78px!important}.nav-inner{padding:8px 10px}.brand-logo{width:58px;height:58px;flex:0 0 58px}.brand-logo img{width:58px!important;height:58px!important;object-fit:contain!important}.brand-name{font-size:16px}.brand-tag{font-size:7.5px;max-width:165px}.btn-pill{font-size:8px;padding:0 9px;min-height:38px}.explore-dropdown{top:68px}}`}</style>
    </>
  );
}
