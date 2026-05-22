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

          <div className="explore-wrap" ref={dropdownRef} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
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

      <style>{`html,body{max-width:100%;overflow-x:hidden}.nav{position:sticky;top:0;z-index:9999;width:100%;background:#f4f0e4;border-bottom:2px solid #120800;box-shadow:0 6px 18px rgba(0,0,0,.08);overflow:visible}.nav-inner{max-width:1400px;margin:0 auto;padding:16px 80px;display:flex;align-items:center;justify-content:space-between;gap:35px;position:relative}.brand{display:flex;align-items:center;gap:14px;text-decoration:none;color:#120800;min-width:0}.brand-logo{width:66px;height:66px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex:0 0 auto;background:#120800;border:2px solid #00c853;padding:3px;box-shadow:0 0 0 3px rgba(18,8,0,.18),0 0 18px rgba(0,200,83,.25);overflow:hidden}.brand-logo img{width:100%;height:100%;object-fit:cover;border-radius:50%;display:block}.brand-text{display:flex;flex-direction:column;justify-content:center;gap:5px;min-width:0}.brand-name{font-size:22px;line-height:1;font-weight:900;letter-spacing:.02em;white-space:nowrap;color:#120800}.brand-tag{display:block;color:#ff7a00!important;font-size:11px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;white-space:nowrap}.primary-nav ul{display:flex;align-items:center;gap:42px;list-style:none;margin:0;padding:0}.primary-nav a{text-decoration:none;color:#120800;font-size:14px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;transition:.25s}.primary-nav a:hover{color:#00a84f}.explore-wrap{position:relative;flex:0 0 auto}.btn-pill{border:0;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;min-height:52px;padding:0 30px;background:#120800;color:#fff;text-decoration:none;font-size:13px;font-weight:900;letter-spacing:.18em;text-transform:uppercase;transition:.25s;box-shadow:6px 6px 0 #00c853}.btn-pill:hover{background:#00c853;color:#000}.explore-dropdown{position:absolute;right:0;top:calc(100% + 16px);width:320px;background:#0b111d;border:1px solid rgba(97,255,75,.25);border-radius:10px;padding:12px;box-shadow:0 18px 45px rgba(0,0,0,.35);opacity:0;visibility:hidden;pointer-events:none;transform:translateY(10px);transition:opacity .22s ease,transform .22s ease,visibility .22s ease;z-index:10000}.explore-dropdown.show{opacity:1;visibility:visible;pointer-events:auto;transform:translateY(0)}.explore-dropdown::before{content:"";position:absolute;right:30px;top:-8px;width:16px;height:16px;background:#0b111d;border-left:1px solid rgba(97,255,75,.25);border-top:1px solid rgba(97,255,75,.25);transform:rotate(45deg)}.explore-dropdown a{display:flex;align-items:center;gap:14px;text-decoration:none;color:#fff;padding:14px 12px;border-radius:8px;transition:.22s}.explore-dropdown a:hover{background:rgba(97,255,75,.12);transform:translateX(4px)}.explore-dropdown a span{width:36px;height:36px;border-radius:50%;background:#050505;display:flex;align-items:center;justify-content:center;font-size:18px;border:1px solid rgba(97,255,75,.35);flex:0 0 auto}.explore-dropdown strong{display:block;color:#f5f0e6;font-size:15px;line-height:1.1}.explore-dropdown small{display:block;color:#9aa4b2;font-size:12px;margin-top:4px;line-height:1.35}@media(max-width:900px){.nav-inner{padding:12px 16px;gap:12px}.primary-nav{display:none}.brand{gap:10px;max-width:calc(100% - 138px)}.brand-logo{width:54px;height:54px;padding:3px}.brand-name{font-size:18px}.brand-tag{font-size:9px;letter-spacing:.08em;white-space:normal;line-height:1.35;max-width:150px}.btn-pill{padding:0 14px;min-height:44px;font-size:10px;letter-spacing:.12em;box-shadow:4px 4px 0 #00c853}.explore-dropdown{position:fixed;right:14px;top:78px;width:min(310px,calc(100vw - 28px));max-height:calc(100vh - 95px);overflow-y:auto}.explore-dropdown::before{right:28px}}@media(max-width:430px){.nav-inner{padding:12px 12px}.brand-logo{width:48px;height:48px}.brand-name{font-size:16px}.brand-tag{font-size:8px;max-width:125px}.btn-pill{font-size:9px;padding:0 10px;min-height:40px}.brand{max-width:calc(100% - 118px)}.explore-dropdown{top:70px}}`}</style>
    </>
  );
}
