import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Terms() {
  useEffect(() => {
    document.title = "BR30 Group Terms & Conditions – Official User Agreement";

    const setMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    setMeta("description", "Read the official BR30 Group Terms & Conditions covering trading education, digital services, user responsibilities, and platform policies.");

    setMeta("keywords", "BR30 Group terms, BR30 Trader terms, user agreement, digital service policy, trading education terms");

    setMeta("robots", "index, follow");
  }, []);

  return (
    <>
      <style>{`.terms-page{background:#050505;color:#fff;display:flex;justify-content:center;padding:50px 20px;min-height:100vh;font-family:"Poppins",sans-serif}.policy-container{max-width:950px;width:100%;background:#101c12;border:1px solid rgba(57,255,20,.25);border-radius:22px;padding:45px;box-shadow:0 20px 60px rgba(0,0,0,.7)}.policy-title h1{font-size:32px;color:#39ff14;text-align:center;margin-bottom:10px;letter-spacing:.5px}.policy-title .meta{text-align:center;color:#ff7a00;font-size:13px;margin-bottom:30px;font-weight:700}.policy-body p{font-size:16px;color:#d1d5db;line-height:1.9;margin-bottom:15px;text-align:left}.policy-body h3{font-size:18px;color:#fff;margin-top:30px;margin-bottom:12px;font-weight:700;border-left:4px solid #39ff14;padding-left:12px}.policy-body ul{margin-left:22px;margin-bottom:15px}.policy-body ul li{font-size:15px;color:#cbd5e1;margin-bottom:8px;line-height:1.6}.policy-body b{color:#ff7a00;font-weight:700}.policy-body hr{margin:30px 0 15px;opacity:.3}.btn{display:inline-block;margin-top:30px;padding:13px 32px;background:#39ff14;color:#000;text-decoration:none;border-radius:12px;font-weight:800;transition:.3s ease;border:1px solid #39ff14}.btn:hover{background:transparent;color:#39ff14;transform:translateY(-3px);box-shadow:0 12px 30px rgba(57,255,20,.3)}@media(max-width:768px){.policy-container{padding:30px 20px}.policy-title h1{font-size:24px}.policy-body p{font-size:14px}.policy-body h3{font-size:16px}}`}</style>

      <main className="terms-page">
        <div className="policy-container">
          <div className="policy-title">
            <h1>Terms & Conditions</h1>

            <p className="meta">Last Updated: 22/05/2026 | Effective From: 22/05/2026</p>
          </div>

          <div className="policy-body">
            <p>Welcome to BR30 Group. These Terms & Conditions govern your use of our websites, digital platforms, trading education, services, marketplaces, forms, and related BR30 ecosystem products.</p>

            <p>By accessing BR30 Group platforms or using any service, you agree to comply with these Terms along with our Privacy Policy and Refund Policy.</p>

            <h3>1. Nature of Services</h3>

            <p>BR30 Group provides digital services including trading education, market learning resources, web services, logo design, digital products, marketplaces, and automation-related solutions.</p>

            <p>All educational content is intended for learning and informational purposes only. We do not provide guaranteed financial or investment advice.</p>

            <h3>2. Eligibility</h3>

            <p>You must be at least 18 years old to access or purchase BR30 Group services. By using this platform, you confirm that you meet this requirement.</p>

            <h3>3. User Information & Accuracy</h3>

            <p>You agree to provide accurate information while submitting forms, purchasing services, or communicating with BR30 Group.</p>

            <p>Incorrect, misleading, or fraudulent information may result in denied access or service suspension.</p>

            <h3>4. Payments & Orders</h3>

            <p>All payments must be completed using approved payment methods. Once payment is successful:</p>

            <ul>
              <li>Orders are considered confirmed</li>
              <li>Digital access or service process begins</li>
              <li>Transactions may become non-refundable as per policy</li>
            </ul>

            <p>All purchases are subject to our Refund Policy.</p>

            <h3>5. Digital Delivery</h3>

            <p>Courses, files, digital products, and services are delivered electronically. Delivery timelines may vary depending on service type or processing requirements.</p>

            <h3>6. No Guaranteed Results</h3>

            <p>Trading, business, branding, and digital growth involve risk. BR30 Group does not guarantee profits, income, rankings, or business success.</p>

            <p>Users are fully responsible for their own decisions and actions.</p>

            <h3>7. User Responsibilities</h3>

            <ul>
              <li>Use services for lawful purposes only</li>
              <li>Do not redistribute paid or protected content</li>
              <li>Do not misuse platforms or attempt unauthorized access</li>
              <li>Respect intellectual property rights</li>
              <li>Maintain professional communication</li>
            </ul>

            <h3>8. Intellectual Property</h3>

            <p>All BR30 Group branding, logos, videos, graphics, PDFs, course materials, website assets, and digital content are protected intellectual property.</p>

            <p>Unauthorized copying, resale, redistribution, or reproduction is strictly prohibited.</p>

            <h3>9. Service Availability</h3>

            <p>We strive to maintain smooth platform operation, but uninterrupted access cannot be guaranteed due to maintenance, technical issues, or third-party outages.</p>

            <h3>10. Limitation of Liability</h3>

            <p>BR30 Group is not responsible for financial losses, business losses, trading losses, indirect damages, or outcomes resulting from the use of our services or educational content.</p>

            <p>Liability, if applicable, is limited to the amount paid for the specific service or product.</p>

            <h3>11. Third-Party Services</h3>

            <p>We may use third-party providers including payment gateways, hosting services, analytics tools, or communication platforms.</p>

            <p>BR30 Group is not responsible for the policies or functionality of third-party services.</p>

            <h3>12. Suspension & Termination</h3>

            <p>We reserve the right to suspend or permanently terminate access if any misuse, piracy, abuse, fraud, or policy violation is detected.</p>

            <h3>13. Policy Updates</h3>

            <p>BR30 Group may modify these Terms anytime without prior notice. Continued use of services indicates acceptance of updated terms.</p>

            <h3>14. Governing Law</h3>

            <p>These Terms shall be governed by the laws of India. Any disputes shall fall under Indian jurisdiction.</p>

            <h3>15. Contact Information</h3>

            <p>
              Email: <b>support.br30trader@gmail.com</b>
              <br />
              Phone: <b>+91 6200986380</b>
            </p>

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
