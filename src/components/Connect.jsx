export default function Contact() {
  return (
    <>
      <section className="contact" id="Connect" data-screen-label="06 Contact">
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
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeoQu8aB96QM9D0bfxyoZSnfckwPmQVnFo-Gs5ShNajwxqkeQ/viewform?embedded=true" width="100%" height="1250" frameBorder="0" marginHeight="0" marginWidth="0" title="BR30 Group Contact Form">
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </section>

      <style>{`.br30-form-wrap{width:100%;height:760px;overflow:auto;border:2px solid #1a120c;box-shadow:8px 8px 0 #1a120c;background:#fff;border-radius:8px}.br30-form-wrap iframe{width:100%;min-height:1250px;border:0;display:block}.contact .lead{max-width:620px}.contact-meta .cm-value{word-break:break-word}@media(max-width:900px){.br30-form-wrap{height:680px}.br30-form-wrap iframe{min-height:1200px}}`}</style>
    </>
  );
}
