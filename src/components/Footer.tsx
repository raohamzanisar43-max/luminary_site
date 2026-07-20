export default function Footer() {
  return (
<footer>
  <div className="container ft-top">
    <div className="row g-5">
      <div className="col-lg-4">
        <div className="ft-brand"><img src="/images/logo1-transparent.png" alt="LuminaryNexus Consultants" className="ft-logo"/></div>
        <p className="ft-tag">Advisory services for regulated and growth-focused organisations. Compliance · Accounting · IT · Governance.</p>
        <div className="ft-contact-items">
  <a
    href="mailto:info@luminarynexusconsultants.net"
    className="ft-contact-item"
  >
    <i className="bi bi-envelope-fill"></i>
    info@luminarynexusconsultants.net
  </a>

  
  <span className="ft-contact-item">
    <i className="bi bi-geo-alt-fill"></i>
     Islamabad, Pakistan
  </span>
</div>
       <div className="ft-socs">
  <a
    href="https://www.linkedin.com/company/luminary-nexus-consultants/?lipi=urn%3Ali%3Apage%3Ad_flagship3_company%3B7O0D8uUBR3ixQgRlOTA4rA%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
    className="fsoc"
    aria-label="LinkedIn"
  >
    <i className="bi bi-linkedin"></i>
  </a>

  <a
    href="https://www.facebook.com/Luminarynexusconsultants"
    target="_blank"
    rel="noopener noreferrer"
    className="fsoc"
    aria-label="Facebook"
  >
    <i className="bi bi-facebook"></i>
  </a>
  {/* Instagram */}
<a
  href="https://www.instagram.com/luminarynexus.consultants?igsh=MTJpZjMydnhzbWZmYQ=="
  target="_blank"
  rel="noopener noreferrer"
  className="fsoc"
  aria-label="Instagram"
>
  <i className="bi bi-instagram"></i>
</a>

</div>
        <div className="ft-certs">
          <span className="ft-cert-badge">AML/CFT</span>
          <span className="ft-cert-badge">FATF</span>
          <span className="ft-cert-badge">FMU</span>
          <span className="ft-cert-badge">Regulator-Ready</span>
        </div>
      </div>
      <div className="col-6 col-lg-2">
        <div className="ft-head">Services</div>
        <ul className="ft-links">
          <li><a href="/services#compliance">Compliance &amp; AML/CFT</a></li>
          <li><a href="/services#audit">Audit &amp; Assurance</a></li>
          <li><a href="/services#accounting">Accounting &amp; Finance</a></li>
          <li><a href="/services#it-services">IT &amp; Cybersecurity</a></li>
          <li><a href="/services#operations">Operations Support</a></li>
          <li><a href="/services#governance">Governance &amp; Board</a></li>
        </ul>
      </div>
      <div className="col-6 col-lg-2">
        <div className="ft-head">Company</div>
        <ul className="ft-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/industries">Industries</a></li>
          <li><a href="/portfolio">Case Studies</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className="col-lg-4">
        <div className="ft-head">Regulatory Updates</div>
        <p style={{fontSize: '.81rem', color: 'rgba(255,255,255,.32)', marginBottom: '14px', lineHeight: '1.65'}}>Monthly compliance and regulatory insights for regulated businesses.</p>
        <form id="ft-nl-form">
          <div className="ft-subscribe-form">
            <input type="email" className="ft-sub-input" placeholder="your@organisation.com"/>
            <button type="submit" className="btn-primary ft-sub-btn"><i className="bi bi-send-fill"></i> Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="ft-bot">
      <div className="ft-copy">© 2026 LuminaryNexus Consultants. All rights reserved. luminarynexusconsultants.com</div>
      <div className="ft-legal"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Disclaimer</a></div>
    </div>
  </div>
</footer>
  );
}
