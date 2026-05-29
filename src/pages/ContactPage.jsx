import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact BR30 Group | Support, Services & Business Inquiry";
    const setMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };
    setMeta("description", "Contact BR30 Group for trading mentorship, web services, logo design, BR30 Kart, BR30 Algo, and digital service inquiries.");
    setMeta("keywords", "contact BR30 Group, BR30 support, trading mentorship, web services, logo design, BR30 Kart, BR30 Algo");
  }, []);

  const handlePhoneClick = (e) => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (!isMobile) {
      e.preventDefault();
      const message = encodeURIComponent("Hello BR30 Group Team, mujhe help chahiye...");
      window.open(`https://wa.me/916200986380?text=${message}`, "_blank");
    }
  };

  return (
    <>
      <style>{`.contact-page{background:#050505;color:#fff;display:flex;justify-content:center;padding:50px 20px;min-height:100vh;font-family:"Poppins",sans-serif}.contact-container{max-width:900px;width:100%;background:#101c12;border:1px solid rgba(57,255,20,.25);border-radius:24px;padding:45px;box-shadow:0 20px 60px rgba(0,0,0,.7)}.contact-header h1{text-align:center;color:#39ff14;font-size:32px;margin-bottom:6px}.contact-header .meta{text-align:center;color:#ff7a00;font-size:13px;margin-bottom:25px;font-weight:700;letter-spacing:.12em;text-transform:uppercase}.desc{color:#d1d5db;font-size:16px;line-height:1.8;margin-bottom:15px}.subtext{color:#9ca3af;font-size:14px;margin-bottom:20px}.contact-body h3{color:#fff;font-size:18px;margin-top:25px;margin-bottom:12px;border-left:4px solid #39ff14;padding-left:10px}.info-card{background:#071008;padding:20px;border-radius:14px;border:1px solid rgba(57,255,20,.22);margin-bottom:10px}.info-card p{color:#cbd5e1;margin-bottom:8px;font-size:15px}.info-card b{color:#ff7a00}.contact-link{color:#39ff14;text-decoration:none;transition:.3s}.contact-link:hover{color:#fff;text-shadow:0 0 10px rgba(57,255,20,.8)}.whatsapp-hover:hover{color:#25d366;text-shadow:0 0 12px rgba(37,211,102,.9)}.contact-list{margin-left:20px;color:#cbd5e1}.contact-list li{margin-bottom:8px;font-size:15px}.contact-divider{margin:30px 0 15px;opacity:.3}.funded-text{margin-top:10px;text-align:center;color:#cbd5e1}.btn{display:inline-block;margin-top:25px;padding:13px 32px;background:#39ff14;color:#000;text-decoration:none;border-radius:12px;font-weight:800;transition:.3s;border:1px solid #39ff14}.btn:hover{background:transparent;color:#39ff14;transform:translateY(-3px);box-shadow:0 10px 25px rgba(57,255,20,.25)}@media(max-width:600px){.contact-container{padding:25px 18px}.contact-header h1{font-size:24px}.desc{font-size:14px}}`}</style>

      <main className="contact-page">
        <div className="contact-container">
          <div className="contact-header">
            <h1>Contact BR30 Group</h1>
            <p className="meta">Official Support Center</p>
          </div>

          <div className="contact-body">
            <p className="desc">Get in touch with BR30 Group for trading mentorship, BR30 Kart, web services, logo design, BR30 Algo, and digital service related queries.</p>

            <p className="subtext">BR30 Group is founded by Mukesh Raj and built for trading education, digital services, branding, marketplace solutions, and future-ready online growth.</p>

            <h3>📞 Support Information</h3>

            <div className="info-card">
              <p>
                <b>Email:</b>{" "}
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=support.br30trader@gmail.com&su=BR30%20Group%20Support%20Request" target="_blank" rel="noopener noreferrer" className="contact-link">
                  support.br30trader@gmail.com
                </a>
              </p>

              <p>
                <b>Phone:</b>{" "}
                <a href="tel:+916200986380" onClick={handlePhoneClick} className="contact-link">
                  +91 6200986380
                </a>
              </p>

              <p>
                <b>WhatsApp:</b>{" "}
                <a href="https://wa.me/916200986380?text=Hello%20BR30%20Group%20Team%2C%20mujhe%20help%20chahiye..." target="_blank" rel="noreferrer" className="contact-link whatsapp-hover">
                  Chat on WhatsApp
                </a>
              </p>

              <p>
                <b>Address:</b> Whitefield, Bangalore 560066, India
              </p>
            </div>

            <h3>⏱ Response Time</h3>
            <p className="desc">We typically respond within 24–48 business hours.</p>

            <h3>⚡ Support Guidelines</h3>
            <ul className="contact-list">
              <li>Use your correct email and WhatsApp number for faster response</li>
              <li>Clearly mention your query, service, or requirement</li>
              <li>Avoid multiple duplicate messages</li>
            </ul>

            <hr className="contact-divider" />

            <p className="funded-text">Funded & Built by Mukesh Raj | BR30 Group</p>

            <Link to="/" className="btn" title="Back to BR30 Group Homepage" aria-label="Go back to the homepage">
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
