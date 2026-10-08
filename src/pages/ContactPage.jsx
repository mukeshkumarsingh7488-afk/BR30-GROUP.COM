import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact BR30 Group | Service Requests & Support";

    const setMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);

      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }

      meta.content = content;
    };

    setMeta("description", "Contact BR30 Group for service requests, digital solutions, branding, trading technology, web development, and business inquiries.");

    setMeta("keywords", "BR30 Group contact, BR30 service request, BR30 support, web development, branding, trading technology, digital services");
  }, []);

  const serviceRequestUrl = "https://br30crm-com-f.vercel.app/public/forms/6ac4a4ce8ab8658ebe3748f7/br30-group-service-request?utm_source=br30-group-web&utm_medium=website&lead_source=br30-group-web&form_id=6ac702676ca9142e6f794ca2&source_id=6ac702c56ca9142e6f794cab";

  return (
    <>
      <style>{`.contact-page{background:#050505;color:#fff;display:flex;justify-content:center;padding:50px 20px;min-height:100vh;font-family:"Poppins",sans-serif}.contact-container{max-width:900px;width:100%;background:linear-gradient(145deg,#101c12,#071008);border:1px solid rgba(57,255,20,.25);border-radius:24px;padding:45px;box-shadow:0 20px 60px rgba(0,0,0,.7)}.contact-header{text-align:center}.contact-header h1{color:#39ff14;font-size:32px;margin:0 0 8px}.contact-header .meta{color:#ff7a00;font-size:13px;margin:0 0 25px;font-weight:700;letter-spacing:.12em;text-transform:uppercase}.desc{color:#d1d5db;font-size:16px;line-height:1.8;margin-bottom:15px}.subtext{color:#9ca3af;font-size:14px;line-height:1.7;margin-bottom:25px}.contact-body h3{color:#fff;font-size:18px;margin-top:28px;margin-bottom:12px;border-left:4px solid #39ff14;padding-left:10px}.info-card{background:#071008;padding:20px;border-radius:14px;border:1px solid rgba(57,255,20,.22);margin-bottom:12px}.info-card p{color:#cbd5e1;margin:0 0 10px;font-size:15px;line-height:1.6}.info-card p:last-child{margin-bottom:0}.info-card b{color:#ff7a00}.contact-link{color:#39ff14;text-decoration:none;transition:.3s}.contact-link:hover{color:#fff;text-shadow:0 0 10px rgba(57,255,20,.8)}.contact-list{margin-left:20px;color:#cbd5e1;padding-left:10px}.contact-list li{margin-bottom:8px;font-size:15px;line-height:1.6}.contact-divider{margin:30px 0 20px;opacity:.3;border-color:#39ff14}.request-card{background:linear-gradient(135deg,#0b170d,#101c12);border:1px solid rgba(57,255,20,.35);border-radius:18px;padding:25px;margin-top:18px}.request-label{color:#ff7a00;font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;margin-bottom:8px}.request-card h2{color:#fff;font-size:24px;margin:0 0 10px}.request-card p{color:#aeb7c5;font-size:14px;line-height:1.7;margin:0 0 18px}.request-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:18px 0}.request-step{background:#071008;border:1px solid rgba(57,255,20,.16);border-radius:10px;padding:14px;color:#d1d5db;font-size:13px;line-height:1.5}.request-step span{display:block;color:#39ff14;font-weight:800;margin-bottom:5px}.btn-row{display:flex;flex-wrap:wrap;gap:12px;align-items:center}.btn{display:inline-block;margin-top:5px;padding:13px 25px;background:#39ff14;color:#000;text-decoration:none;border-radius:12px;font-weight:800;transition:.3s;border:1px solid #39ff14}.btn:hover{background:transparent;color:#39ff14;transform:translateY(-3px);box-shadow:0 10px 25px rgba(57,255,20,.25)}.btn-secondary{background:transparent;color:#39ff14;border-color:rgba(57,255,20,.45)}.btn-secondary:hover{background:#39ff14;color:#000}.funded-text{margin-top:10px;text-align:center;color:#cbd5e1;font-size:14px}.contact-note{text-align:center;color:#7f8a99;font-size:12px;line-height:1.6;margin-top:18px}@media(max-width:600px){.contact-page{padding:25px 12px}.contact-container{padding:28px 18px;border-radius:18px}.contact-header h1{font-size:25px}.desc{font-size:14px}.subtext{font-size:13px}.request-card{padding:20px}.request-card h2{font-size:21px}.request-steps{grid-template-columns:1fr}.btn-row{flex-direction:column;align-items:stretch}.btn{text-align:center;width:100%}}`}</style>

      <main className="contact-page">
        <div className="contact-container">
          <div className="contact-header">
            <h1>Contact BR30 Group</h1>
            <p className="meta">Official Service & Support Center</p>
          </div>

          <div className="contact-body">
            <p className="desc">Have a project, service requirement, business inquiry, or need support? Connect with BR30 Group through our official service request system.</p>

            <p className="subtext">BR30 Group is building a connected digital ecosystem across trading, technology, business, education, automation, branding, and digital services.</p>

            <h3>🚀 Start a Service Request</h3>

            <div className="request-card">
              <div className="request-label">BR30 Group · Service Request</div>

              <h2>Tell Us What You Want To Build.</h2>

              <p>Choose the service you need, describe your requirement, and submit your request. Our team will review the details and get back to you with the next steps.</p>

              <div className="request-steps">
                <div className="request-step">
                  <span>01</span>
                  Choose a Service
                </div>

                <div className="request-step">
                  <span>02</span>
                  Describe Your Requirement
                </div>

                <div className="request-step">
                  <span>03</span>
                  Our Team Reviews It
                </div>
              </div>

              <div className="btn-row">
                <a href={serviceRequestUrl} target="_blank" rel="noopener noreferrer" className="btn">
                  Start a Service Request
                </a>
              </div>
            </div>

            <h3>🛠️ Services & Areas</h3>

            <ul className="contact-list">
              <li>Web Development & Website Design</li>
              <li>Web Applications & Digital Platforms</li>
              <li>Logo Design & Branding</li>
              <li>Trading Technology & Trading Education</li>
              <li>BR30 CRM & Business Solutions</li>
              <li>Automation Solutions & Digital Products</li>
              <li>Other Custom Digital Requirements</li>
            </ul>

            <h3>⏱ Response Time</h3>

            <p className="desc">Requests submitted through the official service form are reviewed by the BR30 Group team. Response time may vary depending on the nature and complexity of the request.</p>

            <h3>⚡ How To Get Faster Help</h3>

            <ul className="contact-list">
              <li>Use your correct name and email address</li>
              <li>Select the service that best matches your requirement</li>
              <li>Clearly explain your project, issue, or business requirement</li>
              <li>Include useful details so our team can understand the request</li>
              <li>Avoid submitting duplicate requests for the same requirement</li>
            </ul>

            <hr className="contact-divider" />

            <p className="funded-text">Built independently by Mukesh Raj · BR30 Group</p>

            <p className="contact-note">Secure public intake · Managed through BR30 CRM</p>
          </div>
        </div>
      </main>
    </>
  );
}
