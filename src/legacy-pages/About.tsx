 'use client';

import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    document.title = "About LuminaryNexus Consultants – Compliance, AML & Governance Experts | Islamabad Pakistan";

    const elements = document.querySelectorAll<HTMLElement>(
      '#about-intro .bp-label, #about-intro .bp-heading, #about-intro .bp-img, #about-intro .bp-lead, #about-intro .bp-text, #about-intro .about-link'
    );
    elements.forEach((element, index) => {
      element.classList.add('rv');
      element.style.setProperty('--d', `${(index % 4) * 0.1}s`);
    });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    elements.forEach((element) => observer.observe(element));

    if (window.location.hash === '#leadership') {
      requestAnimationFrame(() => {
        document.getElementById('leadership')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>

<section id="about-intro">
  <div className="container">
    <span className="bp-label">Who we are</span>
    <h1 className="bp-heading">We guide regulated businesses toward a stronger future</h1>

    <div className="row g-5 align-items-start bp-row">
      <div className="col-lg-5">
        <div className="bp-img">
          <img src="/images/team.jpeg" alt="LuminaryNexus Consultants team" loading="eager" />
        </div>
      </div>
      <div className="col-lg-6 offset-lg-1">
        <span className="bp-label">Our firm</span>
        <p className="bp-lead">We are an independent advisory firm for compliance, governance, accounting, and technology.</p>
        <p className="bp-text">LuminaryNexus Consultants helps financial institutions, FinTechs, NBFCs, and corporate groups get their compliance, governance, accounting, and operations right &mdash; across Pakistan, the GCC, and international markets.</p>
        <a href="/services" className="about-link">Our services <i className="bi bi-arrow-right"></i></a>
      </div>
    </div>
  </div>
</section>
<div className="divider"></div>

<section className="about-details z1">
  <div className="container">
    <div className="about-points" data-aos="fade-up">
      <div className="about-point"><span>01</span>Deep working knowledge of AML/CFT, compliance, governance, risk, and technology</div>
      <div className="about-point"><span>02</span>Hands-on experience with banks, NBFCs, FinTechs, MSBs, and microfinance institutions</div>
      <div className="about-point"><span>03</span>Regulator-ready documentation and advisory support &mdash; Pakistan, GCC, and international</div>
      <div className="about-point"><span>04</span>Solutions built for your specific situation &mdash; not copied from a generic template</div>
      <div className="about-point"><span>05</span>End-to-end support from policy development through to implementation and staff training</div>
    </div>
  </div>
</section>

<section className="sec bg-w z1" id="mission">
  <div className="container">
    <div className="row align-items-center g-5">
      <div className="col-lg-6" data-aos="fade-right">
        <span className="label">Our Mission</span>
        <h2 className="stitle">Understand, Protect, <span className="gtxt">and Grow</span></h2>
        <p className="mb-3">LuminaryNexus Consultants was built to close a real gap in the market: regulated businesses — particularly financial institutions, NBFCs, and FinTechs — need advisory that crosses compliance, governance, accounting, and technology without having to manage four different relationships to get there. We serve clients across Pakistan and internationally, including GCC, Middle East, and Southeast Asian markets.</p>
        <p className="mb-3">Our approach is direct: understand the business, identify the risks, build controls that actually hold, and support growth that is sustainable. We don't produce generic reports — we deliver solutions that work inside your organisation the way it actually operates.</p>
        <p>Our goal is straightforward: support your business with practical, reliable, regulator-ready work that creates genuine long-term value — not just a thick document that sits on a shelf.</p>
      </div>
      <div className="col-lg-6" data-aos="fade-left">
        <div className="row g-3">
          <div className="col-6"><div className="val-card"><span className="val-ico">🎯</span><h5 className="ctitle">Purpose-Driven</h5><p className="ctext" style={{WebkitLineClamp: 'unset'}}>Every engagement starts with understanding what success looks like for your organisation.</p></div></div>
          <div className="col-6"><div className="val-card"><span className="val-ico">⚖️</span><h5 className="ctitle">Compliance First</h5><p className="ctext" style={{WebkitLineClamp: 'unset'}}>We build regulatory compliance into everything — policies, systems, processes, and culture.</p></div></div>
          <div className="col-6"><div className="val-card"><span className="val-ico">🔧</span><h5 className="ctitle">Practical Focus</h5><p className="ctext" style={{WebkitLineClamp: 'unset'}}>Recommendations that can actually be implemented — not theoretical frameworks left on a shelf.</p></div></div>
          <div className="col-6"><div className="val-card"><span className="val-ico">🤝</span><h5 className="ctitle">Long-Term Partnership</h5><p className="ctext" style={{WebkitLineClamp: 'unset'}}>Ongoing advisory relationships built on trust, accountability, and shared outcomes.</p></div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="sec-sm bg-g z1" id="team-photos">
  <div className="container">
    <div className="row g-4">
      <div className="col-md-6" data-aos="fade-right">
        <div className="sec-img"><img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" alt="LuminaryNexus Consultants team collaboration" loading="lazy"/></div>
      </div>
      <div className="col-md-6" data-aos="fade-left">
        <div className="sec-img"><img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80" alt="Compliance advisory professionals" loading="lazy"/></div>
      </div>
    </div>
  </div>
</section>

<section id="stats">
  <div className="container">
    <div className="row text-center g-0">
      <div className="col-6 col-md-3" data-aos="fade-up"><div className="stat-item"><span className="snum" data-counter data-target="100" data-suffix="+">0</span><div className="slbl">Clients Supported</div></div></div>
      <div className="col-6 col-md-3" data-aos="fade-up" data-aos-delay="80"><div className="stat-item"><span className="snum" data-counter data-target="15" data-suffix="+">0</span><div className="slbl">Years Expertise</div></div></div>
      <div className="col-6 col-md-3" data-aos="fade-up" data-aos-delay="160"><div className="stat-item"><span className="snum" data-counter data-target="6" data-suffix="">0</span><div className="slbl">Service Areas</div></div></div>
      <div className="col-6 col-md-3" data-aos="fade-up" data-aos-delay="240"><div className="stat-item"><span className="snum" data-counter data-target="30" data-suffix="+">0</span><div className="slbl">Regulatory Frameworks</div></div></div>
    </div>
  </div>
</section>

<section className="sec bg-w z1" id="leadership">
  <div className="container">
    <div className="row justify-content-center text-center mb-5"><div className="col-lg-6" data-aos="fade-up"><span className="label">Leadership</span><h2 className="stitle">Our <span className="gtxt">Leadership Team</span></h2></div></div>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      <div className="col" data-aos="fade-up" data-aos-delay="0"><div className="team-card"><div className="t-avatar">AK</div><div className="t-name">Ahmed Khan</div><div className="t-role">Founder &amp; Managing Director</div><p className="t-bio">Former Head of Compliance at a Tier-1 bank. 18+ years in AML/CFT and regulatory advisory across Pakistan and the Middle East.</p></div></div>
      <div className="col" data-aos="fade-up" data-aos-delay="60"><div className="team-card"><div className="t-avatar" style={{background: 'linear-gradient(135deg,var(--brand-dark),var(--brand-light))'}}>SR</div><div className="t-name">Sara Raza</div><div className="t-role">Director, Accounting &amp; Finance</div><p className="t-bio">Chartered Accountant with 14+ years supporting NBFCs, FinTechs, and corporate groups with financial reporting and audit preparation.</p></div></div>
      <div className="col" data-aos="fade-up" data-aos-delay="120"><div className="team-card"><div className="t-avatar" style={{background: 'var(--g-main)'}}>MF</div><div className="t-name">Malik Farooq</div><div className="t-role">Director, IT &amp; Cybersecurity</div><p className="t-bio">Certified information security professional with deep experience in FinTech platforms, IT governance, and cybersecurity for financial institutions.</p></div></div>
      <div className="col" data-aos="fade-up" data-aos-delay="180"><div className="team-card"><div className="t-avatar" style={{background: 'linear-gradient(135deg,var(--brand-light),var(--brand-dark))'}}>NA</div><div className="t-name">Nadia Ali</div><div className="t-role">Director, Governance &amp; Operations</div><p className="t-bio">Corporate governance specialist with 12+ years advising boards, executive committees, and governance functions of regulated businesses.</p></div></div>
    </div>
  </div>
</section>

<section className="sec-sm bg-g z1" id="certifications">
  <div className="container">
    <div className="row justify-content-center text-center mb-5"><div className="col-lg-6" data-aos="fade-up"><span className="label">Our Expertise</span><h2 className="stitle">Regulatory &amp; <span className="gtxt">Professional Standards</span></h2></div></div>
    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3 justify-content-center" data-aos="fade-up">
      <div className="col"><div className="titem text-center"><span className="spec-ico">⚖️</span><div className="spec-name">FATF Standards</div></div></div>
      <div className="col"><div className="titem text-center"><span className="spec-ico">🏛️</span><div className="spec-name">FMU Pakistan</div></div></div>
      <div className="col"><div className="titem text-center"><span className="spec-ico">🏦</span><div className="spec-name">SBP Compliance</div></div></div>
      <div className="col"><div className="titem text-center"><span className="spec-ico">📋</span><div className="spec-name">SECP Frameworks</div></div></div>
      <div className="col"><div className="titem text-center"><span className="spec-ico">💼</span><div className="spec-name">ICAP / ACCA</div></div></div>
      <div className="col"><div className="titem text-center"><span className="spec-ico">🔐</span><div className="spec-name">CISA / CISSP</div></div></div>
      <div className="col"><div className="titem text-center"><span className="spec-ico">🇦🇪</span><div className="spec-name">CBUAE / DFSA</div></div></div>
      <div className="col"><div className="titem text-center"><span className="spec-ico">🌏</span><div className="spec-name">GCC &amp; SEA Markets</div></div></div>
    </div>
  </div>
</section>

<section id="cta-banner" className="z1">
  <div className="container text-center"><div className="row justify-content-center"><div className="col-lg-7" data-aos="zoom-in">
    <h2 className="stitle">Ready to Work Together?</h2>
    <p className="ssub mx-auto mb-5">Book a free initial consultation — we will listen, understand your challenges, and advise on how we can help.</p>
    <a href="/contact" className="btn-primary"><i className="bi bi-calendar-check"></i>Book a Free Consultation</a>
  </div></div></div>
</section>

    </>
  );
}
