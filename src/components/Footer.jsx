import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-wrap">
          <div className="foot-brand">
            <div className="brand">
              <img src="https://i.ibb.co/KxnQc4gx/BR30-LOGO1.png" alt="BR30 Group Logo" />

              <div>
                <h2>BR30 GROUP</h2>

                <p>TRADING • DIGITAL ECOSYSTEM • INNOVATION</p>
              </div>
            </div>

            <p className="foot-blurb">Empowering traders with logic, psychology, and high-performance marketplace solutions. Join India's elite trading community.</p>

            <div className="footer-socials">
              <a href="https://x.com/MukeshKuma48159" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-x-twitter"></i>
              </a>

              <a href="https://www.linkedin.com/in/mukeshraj-br30/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>

              <a href="https://github.com/mukeshkumarsingh7488-afk" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>

              <a href="https://chat.whatsapp.com/B4t82SWBcgOIZTeQXp1wDI" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-whatsapp"></i>
              </a>

              <a href="https://www.threads.com/@br30traderofficial" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-threads"></i>
              </a>

              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=support.br30trader@gmail.com" target="_blank" rel="noreferrer">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className="foot-menu">
            <div className="foot-col">
              <h4>BR30 GROUP</h4>

              <a href="/#vision">Vision</a>

              <a href="/#manifesto">Vision Plan</a>

              <a href="/#connect">Founder</a>
            </div>

            <div className="foot-col">
              <h4>GET INVOLVED</h4>

              <a href="/#join">Who Can Join</a>

              <a href="/#join-banner">Join BR30</a>

              <Link to="/contact">Contact Team</Link>
            </div>

            <div className="foot-col">
              <h4>FOLLOW</h4>

              <a href="https://www.youtube.com/@br30traderofficial" target="_blank" rel="noreferrer">
                YouTube
              </a>

              <a href="https://www.instagram.com/br30Traderofficial" target="_blank" rel="noreferrer">
                Instagram
              </a>

              <a href="https://www.facebook.com/share/1DDJYGYYDf/" target="_blank" rel="noreferrer">
                Facebook
              </a>

              <a href="https://t.me/+hBAT4kWo63A4ZWY1" target="_blank" rel="noreferrer">
                Telegram
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 BR30 Group · All rights reserved.</span>

          <span className="foot-links">
            <Link to="/privacy">Privacy Policy</Link> · <Link to="/terms">Terms & Conditions</Link> · <Link to="/refund">Refund Policy</Link> · <Link to="/about">About Us</Link> · <Link to="/contact">Contact Us</Link>
          </span>
        </div>
      </footer>

      <style>{`html,body{max-width:100%;overflow-x:hidden}.footer{width:100%;overflow:hidden;background:#120800;color:#f5f0e6;font-family:"Poppins",Arial,sans-serif;padding:55px 0 0}.footer-wrap{width:min(1120px,100%);margin:0 auto;padding:0 22px 45px;display:grid;grid-template-columns:1fr 1.25fr;gap:55px}.brand{display:flex;align-items:center;gap:15px;margin-bottom:22px}.brand img{width:64px;height:64px;border-radius:50%;object-fit:cover;flex:0 0 auto}.brand h2{font-size:30px;line-height:1;color:#f5f0e6;margin:0;font-weight:900}.brand p{font-size:12px;color:#ff7a00;margin:8px 0 0;font-weight:800;letter-spacing:.12em;line-height:1.5}.foot-blurb{color:#c7b8a4;font-size:17px;line-height:1.8;max-width:520px;margin:0}.footer-socials{display:flex;gap:14px;margin-top:28px;flex-wrap:wrap}.footer-socials a{width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#050505;color:#fff;text-decoration:none;font-size:21px;border:1px solid rgba(97,255,75,.28);transition:.3s}.footer-socials a:hover{background:#61ff4b;color:#000;transform:translateY(-5px);box-shadow:0 0 20px rgba(97,255,75,.35)}.foot-menu{display:grid;grid-template-columns:repeat(3,1fr);gap:42px}.foot-col h4{color:#72ff3b;font-size:13px;letter-spacing:.22em;margin:0 0 24px;text-transform:uppercase}.foot-col h4::after{content:"";display:block;height:1px;background:rgba(255,255,255,.15);margin-top:16px;width:100%}.foot-col a{display:block;color:#cdbfae;text-decoration:none;font-size:17px;margin-bottom:16px;transition:.25s;line-height:1.4}.foot-col a:hover{color:#72ff3b;transform:translateX(4px)}.footer-bottom{border-top:1px solid rgba(255,255,255,.08);padding:22px;text-align:center;color:#a6947e;font-size:12px;letter-spacing:.15em;text-transform:uppercase}.foot-links{display:block;margin-top:12px}.foot-links a{color:#a6947e;text-decoration:none;transition:.25s}.foot-links a:hover{color:#72ff3b}@media(max-width:900px){.footer-wrap{grid-template-columns:1fr;gap:42px}.foot-menu{grid-template-columns:1fr 1fr}}@media(max-width:520px){.footer{padding-top:38px}.footer-wrap{padding:0 20px 38px;gap:36px}.brand{align-items:flex-start}.brand img{width:58px;height:58px}.brand h2{font-size:24px}.brand p{font-size:10px;letter-spacing:.08em}.foot-blurb{font-size:16px;line-height:1.75}.foot-menu{grid-template-columns:1fr 1fr;gap:38px 32px}.foot-col:nth-child(3){grid-column:1 / -1}.footer-socials a{width:44px;height:44px;font-size:18px}.foot-col h4{font-size:12px;letter-spacing:.18em}.foot-col a{font-size:16px}.footer-bottom{font-size:10px;line-height:1.7;padding:20px 14px}}`}</style>
    </>
  );
}
