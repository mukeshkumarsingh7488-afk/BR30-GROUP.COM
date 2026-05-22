import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Refund() {
  useEffect(() => {
    document.title = "Refund Policy | BR30 Group – Official Refund & Cancellation Policy";

    const setMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);

      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }

      meta.content = content;
    };

    setMeta("description", "Read the official BR30 Group refund policy for trading courses, digital products, web services, logo design, and related services.");

    setMeta("keywords", "BR30 refund policy, BR30 Group refund, trading course refund, digital service cancellation");

    setMeta("robots", "index, follow");
  }, []);

  return (
    <>
      <style>{`.refund-page{background:#050505;color:#fff;display:flex;justify-content:center;padding:50px 20px;min-height:100vh;font-family:"Poppins",sans-serif}.policy-container{max-width:950px;width:100%;background:#101c12;border:1px solid rgba(57,255,20,.25);border-radius:22px;padding:42px;box-shadow:0 20px 60px rgba(0,0,0,.7)}.policy-title h1{color:#39ff14;font-size:32px;margin-bottom:10px;text-align:center}.policy-title .meta{color:#ff7a00;font-size:13px;text-align:center;margin-bottom:25px;font-weight:700}.policy-body p{color:#d1d5db;font-size:16px;line-height:1.8;margin-bottom:15px;text-align:left}.policy-body h3{color:#fff;font-size:18px;margin-top:25px;margin-bottom:10px;font-weight:700;border-left:4px solid #39ff14;padding-left:10px}.policy-body ul{margin-left:20px;margin-bottom:15px;color:#cbd5e1}.policy-body ul li{margin-bottom:8px;line-height:1.6}.policy-body b{color:#ff7a00}.policy-body hr{margin:30px 0 15px;opacity:.3}.btn{display:inline-block;margin-top:25px;padding:12px 30px;background:#39ff14;color:#000;text-decoration:none;border-radius:10px;font-weight:800;transition:.3s ease;border:1px solid #39ff14}.btn:hover{background:transparent;color:#39ff14;transform:translateY(-3px);box-shadow:0 10px 25px rgba(57,255,20,.3)}@media(max-width:600px){.policy-container{padding:25px 18px}.policy-title h1{font-size:24px}.policy-body p{font-size:14px}.policy-body h3{font-size:16px}}`}</style>

      <main className="refund-page">
        <div className="policy-container">
          <div className="policy-title">
            <h1>Refund Policy</h1>

            <p className="meta">Last Updated: 22/05/2026 | Effective From: 22/05/2026</p>
          </div>

          <div className="policy-body">
            <p>Thank you for choosing BR30 Group. We value transparency, professionalism, and customer satisfaction. Please read this policy carefully before purchasing any digital product, course, service, or consultation.</p>

            <h3>1. Digital Product & Service Policy</h3>

            <p>Most BR30 Group services, including trading education, digital products, web services, logo design, and downloadable content are delivered digitally.</p>

            <p>Due to the nature of digital delivery, all sales are generally considered final once access, files, or services have been delivered.</p>

            <h3>2. Refund Eligibility</h3>

            <p>Refund requests may only be considered under the following valid conditions:</p>

            <ul>
              <li>Duplicate payment made accidentally</li>
              <li>Payment deducted but service not delivered</li>
              <li>Technical issue preventing product access</li>
              <li>Service cancellation initiated by BR30 Group</li>
            </ul>

            <h3>3. Non-Refundable Situations</h3>

            <ul>
              <li>Change of mind after purchase</li>
              <li>Lack of expected trading profits or results</li>
              <li>Failure to understand course or service content</li>
              <li>Partially completed services or downloads</li>
              <li>Ignoring instructions, guidance, or support</li>
              <li>Custom design work already started or completed</li>
            </ul>

            <h3>4. Refund Request Process</h3>

            <p>To request a refund, contact our support team with proper payment proof and issue details.</p>

            <p>
              Email: <b>support.br30trader@gmail.com</b>
            </p>

            <h3>5. Refund Processing Time</h3>

            <p>Approved refunds are usually processed within 5–10 business days, depending on your payment provider or bank.</p>

            <h3>6. Account Misuse & Fraud</h3>

            <p>Refund requests involving fraud, account misuse, piracy, chargeback abuse, or unauthorized sharing may be rejected immediately.</p>

            <h3>7. Service Access Termination</h3>

            <p>BR30 Group reserves the right to suspend or terminate access to services, products, or communities in cases of abuse, policy violations, harassment, or piracy without refund.</p>

            <h3>8. Policy Updates</h3>

            <p>BR30 Group may update this Refund Policy anytime without prior notice. Continued use of services means acceptance of updated policies.</p>

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
