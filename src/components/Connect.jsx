import { useState } from "react";

const GOOGLE_FORM_CONFIG = {
  actionUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeoQu8aB96QM9D0bfxyoZSnfckwPmQVnFo-Gs5ShNajwxqkeQ/formResponse",

  fields: {
    name: "entry.632958019",
    phone: "entry.2115545286",
    email: "entry.1637967057",
    interestedIn: "entry.32964204",
    message: "entry.94681729",
  },
};

const interestOptions = ["Trading Mentorship", "Web Services", "Custom Logo Design", "BR30 Kart Course", "BR30 Trading Course", "Learn Trading", "Other"];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interestedIn: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = formData.name.trim();
    const phone = formData.phone.trim();
    const email = formData.email.trim();
    const interestedIn = formData.interestedIn.trim();
    const message = formData.message.trim();

    if (!name) {
      alert("Please enter your full name.");
      return;
    }

    if (!phone) {
      alert("Please enter your mobile number.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!interestedIn) {
      alert("Please select what you are interested in.");
      return;
    }

    if (!message) {
      alert("Please enter your message.");
      return;
    }

    setSubmitting(true);
    setSuccess(false);

    try {
      const formBody = new URLSearchParams();

      formBody.append(GOOGLE_FORM_CONFIG.fields.name, name);

      formBody.append(GOOGLE_FORM_CONFIG.fields.phone, phone);

      formBody.append(GOOGLE_FORM_CONFIG.fields.email, email);

      formBody.append(GOOGLE_FORM_CONFIG.fields.interestedIn, interestedIn);

      formBody.append(GOOGLE_FORM_CONFIG.fields.message, message);

      await fetch(GOOGLE_FORM_CONFIG.actionUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      });

      setSuccess(true);

      setFormData({
        name: "",
        phone: "",
        email: "",
        interestedIn: "",
        message: "",
      });
    } catch (error) {
      console.error("BR30 Group contact form error:", error);

      alert("Something went wrong. Please try again or contact us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="contact" id="connect" data-screen-label="06 Contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-text">
              <span className="eyebrow">Get in touch</span>

              <h2 className="display">
                Connect
                <br />
                with BR30.
              </h2>

              <p className="lead">Want to connect with BR30 Group for trading mentorship, web services, logo design, digital products, BR30 Kart, or BR30 Algo? Fill the form and our team will review your request.</p>

              <ul className="contact-meta">
                <li>
                  <span className="cm-label">Email</span>
                  <span className="cm-value">support.br30trader@gmail.com</span>
                </li>

                <li>
                  <span className="cm-label">WhatsApp</span>
                  <span className="cm-value">+91 6200986380</span>
                </li>

                <li>
                  <span className="cm-label">Headquarters</span>
                  <span className="cm-value">Whitefield, Bangalore, India</span>
                </li>

                <li>
                  <span className="cm-label">Founder</span>

                  <span className="cm-value">
                    Mukesh Raj
                    <span className="cm-foot">Founder · BR30 Group</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="br30-form-wrap">
              <div className="br30-form-header">
                <span>BR30 GROUP</span>

                <h3>Connect With Us</h3>

                <p>Fill in your details and tell us how we can help you.</p>
              </div>

              <form className="br30-contact-form" onSubmit={handleSubmit}>
                {/* FULL NAME */}

                <div className="br30-field">
                  <label htmlFor="br30-name">Full Name</label>

                  <input id="br30-name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" autoComplete="name" />
                </div>

                {/* MOBILE */}

                <div className="br30-field">
                  <label htmlFor="br30-phone">Mobile Number</label>

                  <input id="br30-phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your 10-digit mobile number" inputMode="numeric" maxLength="10" autoComplete="tel" />
                </div>

                {/* EMAIL */}

                <div className="br30-field">
                  <label htmlFor="br30-email">Email Address</label>

                  <input id="br30-email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email address" autoComplete="email" />
                </div>

                {/* INTERESTED IN */}

                <div className="br30-field">
                  <label htmlFor="br30-interest">Interested In</label>

                  <select id="br30-interest" name="interestedIn" value={formData.interestedIn} onChange={handleChange}>
                    <option value="" disabled>
                      Select an option
                    </option>

                    {interestOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* MESSAGE */}

                <div className="br30-field">
                  <label htmlFor="br30-message">Your Message</label>

                  <textarea id="br30-message" name="message" value={formData.message} onChange={handleChange} placeholder="Write your message here..." rows="6" />
                </div>

                {/* SUCCESS */}

                {success && <div className="br30-form-success">Thank you! Your request has been submitted successfully. Our team will get back to you.</div>}

                {/* SUBMIT */}

                <button type="submit" className="br30-submit-btn" disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit Request"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style>{`

        /* =====================================
           BR30 CONTACT FORM
           ===================================== */

        .br30-form-wrap {
          width: 100%;
          padding: 30px;

          border: 2px solid #1a120c;
          border-radius: 8px;

          background: #fff;

          box-shadow: 8px 8px 0 #1a120c;
        }

        .br30-form-header {
          margin-bottom: 28px;
        }

        .br30-form-header > span {
          display: inline-block;

          margin-bottom: 7px;

          color: #7a5a20;

          font-size: 0.65rem;
          font-weight: 800;

          letter-spacing: 0.12em;
        }

        .br30-form-header h3 {
          margin: 0;

          color: #1a120c;

          font-size: 1.65rem;
          font-weight: 850;

          letter-spacing: -0.025em;
        }

        .br30-form-header p {
          margin: 8px 0 0;

          color: #756f69;

          font-size: 0.78rem;
          line-height: 1.6;
        }

        /* =====================================
           FORM
           ===================================== */

        .br30-contact-form {
          display: flex;
          flex-direction: column;
          gap: 19px;
        }

        .br30-field {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .br30-field label {
          color: #1a120c;

          font-size: 0.74rem;
          font-weight: 800;
        }

        .br30-field input,
        .br30-field select,
        .br30-field textarea {
          width: 100%;

          border: 1px solid #d9d2ca;
          border-radius: 6px;

          background: #fff;

          color: #1a120c;

          font-family: inherit;
          font-size: 0.84rem;

          outline: none;

          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .br30-field input,
        .br30-field select {
          min-height: 48px;

          padding: 0 14px;
        }

        .br30-field textarea {
          min-height: 135px;

          padding: 13px 14px;

          resize: vertical;
        }

        .br30-field input::placeholder,
        .br30-field textarea::placeholder {
          color: #aaa39b;
        }

        .br30-field input:focus,
        .br30-field select:focus,
        .br30-field textarea:focus {
          border-color: #1a120c;

          box-shadow: 0 0 0 3px rgba(26, 18, 12, 0.07);
        }

        .br30-field select {
          cursor: pointer;
        }

        /* =====================================
           SUCCESS
           ===================================== */

        .br30-form-success {
          padding: 13px 14px;

          border: 1px solid #b7d4b0;
          border-radius: 6px;

          background: #f1f8ef;

          color: #315b2a;

          font-size: 0.76rem;
          line-height: 1.5;
        }

        /* =====================================
           SUBMIT
           ===================================== */

        .br30-submit-btn {
          width: 100%;
          min-height: 50px;

          margin-top: 2px;

          border: 0;
          border-radius: 6px;

          background: #1a120c;
          color: #fff;

          font-family: inherit;
          font-size: 0.82rem;
          font-weight: 800;

          cursor: pointer;

          transition:
            transform 0.2s ease,
            background 0.2s ease;
        }

        .br30-submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);

          background: #332218;
        }

        .br30-submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .contact .lead {
          max-width: 620px;
        }

        .contact-meta .cm-value {
          word-break: break-word;
        }

        /* =====================================
           TABLET
           ===================================== */

        @media (max-width: 900px) {
          .br30-form-wrap {
            padding: 25px;

            box-shadow: 6px 6px 0 #1a120c;
          }
        }

        /* =====================================
           MOBILE
           ===================================== */

        @media (max-width: 575px) {
          .br30-form-wrap {
            padding: 21px 17px;

            box-shadow: 5px 5px 0 #1a120c;
          }

          .br30-form-header {
            margin-bottom: 23px;
          }

          .br30-form-header h3 {
            font-size: 1.4rem;
          }

          .br30-contact-form {
            gap: 17px;
          }

          .br30-field textarea {
            min-height: 125px;
          }
        }

      `}</style>
    </>
  );
}
