import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy | BR30 Group – Data Security & Protection";

    const setMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    setMeta("description", "Read the BR30 Group Privacy Policy to understand how we collect, use, store, and protect your personal data across our digital platforms and services.");
    setMeta("keywords", "BR30 Group privacy policy, BR30 data security, BR30 Trader, BR30 Kart, digital services privacy");
    setMeta("robots", "index, follow, max-image-preview:large");
  }, []);

  return (
    <>
      <style>{`.privacy-page{background:#050505;color:#fff;display:flex;justify-content:center;padding:50px 20px;min-height:100vh;font-family:"Poppins",sans-serif}.policy-container{max-width:950px!important;width:100%!important;background:#101c12!important;border:1px solid rgba(57,255,20,.25)!important;border-radius:22px!important;padding:42px;box-shadow:0 20px 60px rgba(0,0,0,.7)}.policy-title h1{color:#39ff14;font-size:32px;text-align:center;margin-bottom:10px}.policy-title .meta{text-align:center;color:#ff7a00;font-size:13px;margin-bottom:28px;font-weight:700}.policy-body p{color:#d1d5db;font-size:16px;line-height:1.8;margin-bottom:15px;text-align:left}.policy-body h3{color:#fff;font-size:18px;margin-top:26px;margin-bottom:10px;font-weight:700;border-left:4px solid #39ff14;padding-left:10px}.policy-body ul{margin-left:20px;margin-bottom:15px}.policy-body ul li{color:#cbd5e1;font-size:15px;margin-bottom:8px;line-height:1.6}.policy-body b{color:#ff7a00}.policy-body hr{margin:30px 0 15px;opacity:.3}.btn{display:inline-block;margin-top:25px;padding:12px 30px;background:#39ff14;color:#000;text-decoration:none;border-radius:10px;font-weight:800;transition:.3s ease;border:1px solid #39ff14}.btn:hover{background:transparent;color:#39ff14;transform:translateY(-3px);box-shadow:0 10px 25px rgba(57,255,20,.3)}@media(max-width:600px){.policy-container{padding:25px 18px}.policy-title h1{font-size:24px}.policy-body p{font-size:14px}.policy-body h3{font-size:16px}}`}</style>

      <main className="privacy-page">
        <div className="policy-container">
          <div className="policy-title">
            <h1>Privacy Policy</h1>
            <p className="meta">Last Updated: 22/05/2026 | Effective From: 22/05/2026</p>
          </div>

          <div className="policy-body">
            <p>BR30 Group respects your privacy and is committed to protecting your personal data with transparency, responsibility, and strong security practices.</p>

            <p>This Privacy Policy explains how we collect, use, store, and protect your information when you interact with BR30 Group, BR30 Trader, BR30 Kart, BR30 Founder, BR30 services, forms, websites, and digital products.</p>

            <h3>1. Information We Collect</h3>
            <p>We collect only the information required to provide our services, support, and communication properly.</p>

            <p>
              <b>Personal Information:</b>
            </p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone or WhatsApp number</li>
              <li>Form submission details</li>
              <li>Billing or payment-related information when applicable</li>
            </ul>

            <p>
              <b>Service Information:</b>
            </p>
            <ul>
              <li>Course or service interest</li>
              <li>BR30 Kart related inquiries</li>
              <li>Web service and logo design requirements</li>
              <li>Support messages and communication history</li>
            </ul>

            <p>
              <b>Technical Data:</b>
            </p>
            <ul>
              <li>IP address</li>
              <li>Device type</li>
              <li>Browser information</li>
              <li>Cookies and analytics data</li>
            </ul>

            <h3>2. How We Use Your Information</h3>
            <ul>
              <li>To respond to your inquiries and support requests</li>
              <li>To provide trading education, digital services, and marketplace-related support</li>
              <li>To manage leads, service requests, and customer communication</li>
              <li>To improve website experience, performance, and security</li>
              <li>To comply with legal or regulatory requirements</li>
            </ul>

            <p>We do not sell, rent, or trade your personal data to any third party.</p>

            <h3>3. Google Forms & Google Sheets</h3>
            <p>When you submit a BR30 Group form, your details may be stored securely in Google Forms and Google Sheets for lead management, support tracking, and service follow-up.</p>

            <h3>4. Cookies & Tracking</h3>
            <p>We may use cookies, analytics tools, and third-party scripts to improve user experience, understand traffic, and optimize website performance.</p>

            <h3>5. Data Sharing</h3>
            <p>We share limited information only when required with trusted service providers such as:</p>
            <ul>
              <li>Payment gateways</li>
              <li>Hosting providers</li>
              <li>Email and communication tools</li>
              <li>Google Forms or Google Sheets</li>
              <li>Legal authorities if required by law</li>
            </ul>

            <h3>6. Data Security</h3>
            <p>We use reasonable security measures to protect your data. However, no online system can be guaranteed 100% secure.</p>

            <h3>7. Data Retention</h3>
            <ul>
              <li>Form submissions: As long as required for communication and service records</li>
              <li>Transaction records: As per legal or accounting requirements</li>
              <li>Support records: As required for service quality and dispute handling</li>
            </ul>

            <h3>8. Your Rights</h3>
            <ul>
              <li>You can request access to your personal information</li>
              <li>You can request correction of inaccurate data</li>
              <li>You can request deletion of your data where legally possible</li>
              <li>You can withdraw communication consent anytime</li>
            </ul>

            <p>
              To exercise these rights, contact: <b>support.br30trader@gmail.com</b>
            </p>

            <h3>9. Children Policy</h3>
            <p>Our services are intended for users who are 18 years or older. We do not knowingly collect data from children.</p>

            <h3>10. Changes To This Policy</h3>
            <p>We may update this Privacy Policy from time to time. The latest version will always be available on this page.</p>

            <hr />

            <p>Funded & Built by Mukesh Raj | BR30 Group</p>

            <Link to="/" className="btn">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
