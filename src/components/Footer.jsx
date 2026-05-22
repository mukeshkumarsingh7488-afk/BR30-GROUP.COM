import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-top container">
          <div className="foot-brand">
            <div className="brand">
              <span className="brand-logo">
                <img src="https://i.ibb.co/KxnQc4gx/BR30-LOGO1.png" alt="BR30 Group Logo" />
              </span>
              <span className="brand-text">
                <span className="brand-name">BR30 GROUP</span>
                <span className="brand-tag">Trading • Digital Ecosystem • Innovation</span>
              </span>
            </div>

            <p className="foot-blurb">Empowering traders with logic, psychology, and high-performance marketplace solutions. Join India's elite trading community.</p>

            <div className="footer-socials">
              <a href="https://x.com/MukeshKuma48159" target="_blank" rel="noreferrer" aria-label="Twitter X">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://www.threads.com/@br30traderofficial" target="_blank" rel="noreferrer" aria-label="Threads">
                <i className="fa-brands fa-threads"></i>
              </a>
              <a href="https://www.linkedin.com/in/mukesh-raj-b75a65253" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://wa.me/916200986380?text=Hello%20BR30%20Group%20Team%2C%20mujhe%20help%20chahiye..." target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="mailto:support.br30trader@gmail.com?subject=BR30%20Group%20Inquiry" aria-label="Gmail">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className="foot-cols">
            <div className="foot-col">
              <h4>BR30 Group</h4>
              <ul>
                <li>
                  <a href="/#vision">Vision</a>
                </li>
                <li>
                  <a href="/#manifesto">Vision Plan</a>
                </li>
                <li>
                  <a href="/#contact">Founder</a>
                </li>
              </ul>
            </div>

            <div className="foot-col">
              <h4>Get involved</h4>
              <ul>
                <li>
                  <a href="/#join">Who Can Join</a>
                </li>
                <li>
                  <a href="/#join-banner">Join BR30</a>
                </li>
                <li>
                  <Link to="/contact">Contact Team</Link>
                </li>
              </ul>
            </div>

            <div className="foot-col">
              <h4>Follow</h4>
              <ul>
                <li>
                  <a href="https://www.facebook.com/share/1DDJYGYYDf/" target="_blank" rel="noreferrer">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/br30Traderofficial" target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@br30traderofficial" target="_blank" rel="noreferrer">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="https://t.me/+hBAT4kWo63A4ZWY1" target="_blank" rel="noreferrer">
                    Telegram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container fb-inner">
            <span>© 2026 BR30 Group · All rights reserved.</span>
            <span className="satire">BR30 GROUP</span>
            <span className="foot-links">
              <Link to="/privacy">Privacy Policy</Link> · <Link to="/terms">Terms & Conditions</Link> · <Link to="/refund">Refund Policy</Link> · <Link to="/about">About Us</Link> · <Link to="/contact">Contact Us</Link>
            </span>
          </div>
        </div>
      </footer>

      <style>{`.footer{background:#120800;color:#f5f0e6;padding-top:70px;font-family:"Poppins",Arial,sans-serif}.footer-top{display:grid;grid-template-columns:1.1fr 1.4fr;gap:70px;max-width:1400px;margin:0 auto;padding:0 80px 60px}.foot-brand .brand{display:flex;align-items:center;gap:16px;margin-bottom:24px}.foot-brand .brand-logo img{width:76px;height:76px;object-fit:contain;display:block}.foot-brand .brand-name{display:block;font-size:30px;line-height:1;font-weight:900;color:#f5f0e6}.foot-brand .brand-tag{display:block;margin-top:6px;color:#ff7a00!important;font-size:13px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}.foot-blurb{font-size:17px;line-height:1.75;color:#b8aa98;max-width:520px;margin:0}.footer-socials{display:flex;align-items:center;gap:16px;margin-top:26px}.footer-socials a{width:50px;height:50px;border-radius:50%;background:#050505;color:#fff;display:flex;align-items:center;justify-content:center;text-decoration:none;font-size:22px;border:1px solid rgba(97,255,75,.25);transition:.28s}.footer-socials a:hover{background:#61ff4b;color:#000;transform:translateY(-5px);box-shadow:0 0 22px rgba(97,255,75,.35)}.foot-cols{display:grid;grid-template-columns:repeat(3,1fr);gap:48px}.foot-col h4{color:#72ff3b;font-size:13px;letter-spacing:.22em;margin:0 0 24px;text-transform:uppercase}.foot-col h4::after{content:"";display:block;width:100%;height:1px;background:rgba(255,255,255,.12);margin-top:16px}.foot-col ul{list-style:none;padding:0;margin:0}.foot-col li{margin-bottom:16px}.foot-col a{text-decoration:none;color:#cdbfae;font-size:16px;transition:.25s}.foot-col a:hover{color:#72ff3b}.footer-bottom{border-top:1px solid rgba(255,255,255,.08)}.fb-inner{max-width:1400px;margin:0 auto;padding:25px 80px;display:flex;align-items:center;justify-content:space-between;gap:22px;flex-wrap:wrap}.fb-inner>span{font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#a6947e}.satire{background:#61ff4b!important;color:#000!important;font-weight:900!important;letter-spacing:.18em;padding:8px 18px}.foot-links a{text-decoration:none;color:#a6947e;transition:.25s}.foot-links a:hover{color:#72ff3b}@media(max-width:991px){.footer-top{grid-template-columns:1fr;padding:0 25px 50px}.foot-cols{grid-template-columns:1fr 1fr}.fb-inner{padding:25px;flex-direction:column;text-align:center}}@media(max-width:600px){.foot-cols{grid-template-columns:1fr}.foot-brand .brand{align-items:flex-start}.foot-brand .brand-name{font-size:24px}.foot-brand .brand-logo img{width:64px;height:64px}.footer-socials a{width:44px;height:44px;font-size:19px}}`}</style>
    </>
  );
}
