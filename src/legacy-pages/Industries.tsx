 'use client';

import { useEffect } from 'react';

export default function Industries() {
  useEffect(() => {
    document.title = "Industries We Serve – Banks, NBFCs, FinTechs, MSBs & GCC Entities | LuminaryNexus Consultants";
  }, []);

  return (
    <>

<section className="phero" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80\')'}}>
  <div className="phero-accent"></div>
  <div className="container phero-inner">
    <nav aria-label="breadcrumb" className="mb-4"><ol className="breadcrumb"><li className="breadcrumb-item"><a href="/">Home</a></li><li className="breadcrumb-item active">Industries</li></ol></nav>
    <span className="label">Who We Serve</span>
    <h1 className="hero-title mt-3">Advisory for <span className="gtxt">Regulated Industries</span></h1>
    <p className="hero-sub">Banks, microfinance banks, NBFCs, FinTechs, MSBs, digital lending platforms, startups, and corporate groups — across Pakistan, the GCC, and international markets. If your organisation is regulated, we know the landscape.</p>
  </div>
</section>
<div className="divider"></div>

{/* Banks & MFBs */}
<section id="banking" className="sec z1">
  <div className="container">
    <div className="row align-items-center g-5">
      <div className="col-lg-6" data-aos="fade-right">
        <span className="label">Sector 01</span>
        <h2 className="stitle">Banks &amp; <span className="gtxt">Microfinance Banks</span></h2>
        <p className="mb-3">We provide comprehensive compliance, governance, and operational support to commercial banks, Islamic banks, and microfinance banks operating under SBP supervision.</p>
        <p className="mb-4">Our team has deep experience with SBP regulatory frameworks, AML/CFT examination cycles, and the documentation requirements of bank-level compliance functions.</p>
        <div className="row g-3 mb-4">
          <div className="col-6"><div className="gcard p-3"><div className="sico i-b" style={{width: '34px', height: '34px', fontSize: '.8rem', marginBottom: '8px'}}><i className="bi bi-shield-lock-fill"></i></div><div className="ctitle" style={{fontSize: '.83rem'}}>AML/CFT Compliance</div><p className="ctext" style={{fontSize: '.76rem'}}>GOAML, FMU, FATF-aligned frameworks</p></div></div>
          <div className="col-6"><div className="gcard p-3"><div className="sico i-v" style={{width: '34px', height: '34px', fontSize: '.8rem', marginBottom: '8px'}}><i className="bi bi-clipboard2-check-fill"></i></div><div className="ctitle" style={{fontSize: '.83rem'}}>Internal Audit</div><p className="ctext" style={{fontSize: '.76rem'}}>Compliance, operations, and IT controls</p></div></div>
          <div className="col-6"><div className="gcard p-3"><div className="sico i-t" style={{width: '34px', height: '34px', fontSize: '.8rem', marginBottom: '8px'}}><i className="bi bi-building-fill-gear"></i></div><div className="ctitle" style={{fontSize: '.83rem'}}>Board &amp; Governance</div><p className="ctext" style={{fontSize: '.76rem'}}>Board packs, TORs, resolutions, minutes</p></div></div>
          <div className="col-6"><div className="gcard p-3"><div className="sico i-g" style={{width: '34px', height: '34px', fontSize: '.8rem', marginBottom: '8px'}}><i className="bi bi-graph-up-arrow"></i></div><div className="ctitle" style={{fontSize: '.83rem'}}>Risk Reporting</div><p className="ctext" style={{fontSize: '.76rem'}}>Board risk reports, compliance updates</p></div></div>
        </div>
        <a href="/contact" className="btn-primary"><i className="bi bi-calendar-check"></i>Consult for Banks &amp; MFBs</a>
      </div>
      <div className="col-lg-6" data-aos="fade-left">
        <div className="sec-img"><img src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=700&q=80" alt="Banking Microfinance Compliance" loading="lazy"/></div>
      </div>
    </div>
  </div>
</section>

{/* FinTech & Digital Lenders */}
<section id="fintech-ind" className="sec z1">
  <div className="container">
    <div className="row align-items-center g-5 flex-lg-row-reverse">
      <div className="col-lg-6" data-aos="fade-left">
        <span className="label">Sector 02</span>
        <h2 className="stitle">FinTech, NBFCs &amp; <span className="gtxt">Digital Lenders</span></h2>
        <p className="mb-3">We support FinTech companies, NBFCs, digital lenders, and BNPL platforms in building compliant operations — from licensing stage through to scaling and regulatory examination.</p>
        <p className="mb-4">Our FinTech-specific support covers the full spectrum: AML/CFT programme design, customer onboarding procedures, transaction monitoring rules, IT infrastructure advice, and regulatory documentation.</p>
        <ul className="chk mb-4">
          <li><span className="chk-ico"></span>AML/CFT framework development and GOAML integration support</li>
          <li><span className="chk-ico"></span>FinTech product compliance review and regulatory gap analysis</li>
          <li><span className="chk-ico"></span>Lending policy development and credit risk framework support</li>
          <li><span className="chk-ico"></span>Customer onboarding procedures and digital KYC/KYB</li>
          <li><span className="chk-ico"></span>Licensing and regulator response support</li>
        </ul>
        <a href="/contact" className="btn-primary"><i className="bi bi-calendar-check"></i>Consult for FinTech &amp; NBFCs</a>
      </div>
      <div className="col-lg-6" data-aos="fade-right">
        <div className="sec-img"><img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=80" alt="FinTech NBFC Advisory" loading="lazy"/></div>
      </div>
    </div>
  </div>
</section>

{/* More Sectors */}
<section id="more-sectors" className="sec z1">
  <div className="container">
    <div className="row justify-content-center text-center mb-5"><div className="col-lg-7" data-aos="fade-up"><span className="label">More Sectors</span><h2 className="stitle">Other Organisations <span className="gtxt">We Serve</span></h2></div></div>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <div className="col" data-aos="fade-up" data-aos-delay="0"><div className="card-editorial"><div className="card-editorial-body" style={{padding: '28px', flex: '1', display: 'flex', flexDirection: 'column'}}><div className="sico i-o"><i className="bi bi-currency-exchange"></i></div><div className="ctitle">Money Service Businesses</div><p className="ctext">Remittance companies, foreign exchange dealers, payment aggregators — MSB licence support, AML/CFT frameworks, and transaction monitoring design.</p><a href="/contact" className="carr"><i className="bi bi-arrow-right-circle"></i>Consult Us</a></div></div></div>
      <div className="col" data-aos="fade-up" data-aos-delay="60"><div className="card-editorial"><div className="card-editorial-body" style={{padding: '28px', flex: '1', display: 'flex', flexDirection: 'column'}}><div className="sico i-b"><i className="bi bi-graph-up-arrow"></i></div><div className="ctitle">Investment &amp; Asset Management</div><p className="ctext">Investment advisors, fund managers, and asset management companies — SECP compliance, governance frameworks, risk reporting, and AML/CFT advisory.</p><a href="/contact" className="carr"><i className="bi bi-arrow-right-circle"></i>Consult Us</a></div></div></div>
      <div className="col" data-aos="fade-up" data-aos-delay="120"><div className="card-editorial"><div className="card-editorial-body" style={{padding: '28px', flex: '1', display: 'flex', flexDirection: 'column'}}><div className="sico i-v"><i className="bi bi-briefcase-fill"></i></div><div className="ctitle">Corporate Groups</div><p className="ctext">Diversified conglomerates requiring governance structures, internal audit support, financial reporting, and enterprise-wide risk management frameworks.</p><a href="/contact" className="carr"><i className="bi bi-arrow-right-circle"></i>Consult Us</a></div></div></div>
      <div className="col" data-aos="fade-up" data-aos-delay="0"><div className="card-editorial"><div className="card-editorial-body" style={{padding: '28px', flex: '1', display: 'flex', flexDirection: 'column'}}><div className="sico i-t"><i className="bi bi-rocket-takeoff-fill"></i></div><div className="ctitle">Regulated Startups</div><p className="ctext">Early-stage regulated businesses building compliance, accounting, and governance infrastructure from the ground up for licensing and investor readiness.</p><a href="/contact" className="carr"><i className="bi bi-arrow-right-circle"></i>Consult Us</a></div></div></div>
      <div className="col" data-aos="fade-up" data-aos-delay="60"><div className="card-editorial"><div className="card-editorial-body" style={{padding: '28px', flex: '1', display: 'flex', flexDirection: 'column'}}><div className="sico i-g"><i className="bi bi-bank"></i></div><div className="ctitle">Insurance &amp; Takaful</div><p className="ctext">Insurance companies and takaful operators — compliance frameworks, internal audit, governance documentation, and regulatory reporting support.</p><a href="/contact" className="carr"><i className="bi bi-arrow-right-circle"></i>Consult Us</a></div></div></div>
      <div className="col" data-aos="fade-up" data-aos-delay="120"><div className="card-editorial"><div className="card-editorial-body" style={{padding: '28px', flex: '1', display: 'flex', flexDirection: 'column'}}><div className="sico i-y"><i className="bi bi-building-fill"></i></div><div className="ctitle">Leasing &amp; Modaraba</div><p className="ctext">Leasing companies and modarabas seeking SECP-compliant governance structures, financial reporting, AML controls, and operational frameworks.</p><a href="/contact" className="carr"><i className="bi bi-arrow-right-circle"></i>Consult Us</a></div></div></div>
    </div>
  </div>
</section>

{/* International Markets */}
<section className="sec z1" id="international-markets">
  <div className="container">
    <div className="row justify-content-center text-center mb-5"><div className="col-lg-7" data-aos="fade-up"><span className="label">International Reach</span><h2 className="stitle">We Work with Clients <span className="gtxt">Across Borders</span></h2><p className="ssub mx-auto mt-3">Pakistan-headquartered with active engagements serving organisations in the GCC, Middle East, Southeast Asia, and beyond. Our advisors understand cross-border regulatory frameworks and international AML/CFT standards.</p></div></div>
    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3 mb-5" data-aos="fade-up">
      <div className="col"><div className="industry-item flex-column align-items-start gap-2 p-3"><div className="ii-title" style={{fontSize: '.82rem'}}>🇵🇰 Pakistan</div><p className="ii-desc">SBP, SECP, FMU, FATF recommendations</p></div></div>
      <div className="col"><div className="industry-item flex-column align-items-start gap-2 p-3"><div className="ii-title" style={{fontSize: '.82rem'}}>🇦🇪 UAE</div><p className="ii-desc">CBUAE, DFSA, ADGM — DIFC &amp; mainland</p></div></div>
      <div className="col"><div className="industry-item flex-column align-items-start gap-2 p-3"><div className="ii-title" style={{fontSize: '.82rem'}}>🇸🇦 Saudi Arabia</div><p className="ii-desc">SAMA, ZATCA regulatory frameworks</p></div></div>
      <div className="col"><div className="industry-item flex-column align-items-start gap-2 p-3"><div className="ii-title" style={{fontSize: '.82rem'}}>🇶🇦 Qatar</div><p className="ii-desc">QCB, QFMA regulatory compliance</p></div></div>
      <div className="col"><div className="industry-item flex-column align-items-start gap-2 p-3"><div className="ii-title" style={{fontSize: '.82rem'}}>🇸🇬 Singapore</div><p className="ii-desc">MAS AML/CFT Notice 626 compliance</p></div></div>
      <div className="col"><div className="industry-item flex-column align-items-start gap-2 p-3"><div className="ii-title" style={{fontSize: '.82rem'}}>🇲🇾 Malaysia</div><p className="ii-desc">BNM AML/CFT, SC Malaysia frameworks</p></div></div>
      <div className="col"><div className="industry-item flex-column align-items-start gap-2 p-3"><div className="ii-title" style={{fontSize: '.82rem'}}>🇬🇧 United Kingdom</div><p className="ii-desc">FCA, HMRC MLR 2017 compliance</p></div></div>
      <div className="col"><div className="industry-item flex-column align-items-start gap-2 p-3"><div className="ii-title" style={{fontSize: '.82rem'}}>🌍 FATF Jurisdictions</div><p className="ii-desc">FATF 40 Recommendations, mutual evaluation alignment</p></div></div>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="card-editorial text-center" style={{padding: '36px 40px'}}>
          <p style={{fontSize: '.95rem', color: 'var(--ink-2)', lineHeight: '1.85', marginBottom: '20px'}}>Our advisory work is delivered remotely for international clients — documentation, policies, frameworks, and training all delivered digitally. Where on-site work is required, we arrange visits within the region.</p>
          <a href="/contact" className="btn-primary"><i className="bi bi-globe2"></i>Enquire About International Work</a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Specialised Services list from PDF */}
<section className="sec bg-w z1">
  <div className="container">
    <div className="row justify-content-center text-center mb-5"><div className="col-lg-7" data-aos="fade-up"><span className="label">What We Cover</span><h2 className="stitle">Specialised Support for <span className="gtxt">Financial Institutions</span></h2></div></div>
    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3" data-aos="fade-up">
      <div className="col"><div className="titem text-center"><span className="spec-ico">🔍</span><div className="spec-name">AML/CFT Framework</div></div></div>
      <div className="col"><div className="titem text-center"><span className="spec-ico">👤</span><div className="spec-name">Customer Risk Profiling</div></div></div>
      <div className="col"><div className="titem text-center"><span className="spec-ico">📋</span><div className="spec-name">KYC/KYB Procedures</div></div></div>
      <div className="col"><div className="titem text-center"><span className="spec-ico">📡</span><div className="spec-name">Transaction Monitoring</div></div></div>
      <div className="col"><div className="titem text-center"><span className="spec-ico">🛡️</span><div className="spec-name">Sanctions Screening</div></div></div>
      <div className="col"><div className="titem text-center"><span className="spec-ico">💳</span><div className="spec-name">Lending Policy</div></div></div>
      <div className="col"><div className="titem text-center"><span className="spec-ico">📊</span><div className="spec-name">Credit Risk Frameworks</div></div></div>
      <div className="col"><div className="titem text-center"><span className="spec-ico">🏪</span><div className="spec-name">Merchant Onboarding</div></div></div>
      <div className="col"><div className="titem text-center"><span className="spec-ico">🤝</span><div className="spec-name">Agent Due Diligence</div></div></div>
      <div className="col"><div className="titem text-center"><span className="spec-ico">📝</span><div className="spec-name">Regulatory Reporting</div></div></div>
      <div className="col"><div className="titem text-center"><span className="spec-ico">🔬</span><div className="spec-name">Internal Audit &amp; Review</div></div></div>
      <div className="col"><div className="titem text-center"><span className="spec-ico">🏛️</span><div className="spec-name">Board Documentation</div></div></div>
      <div className="col"><div className="titem text-center"><span className="spec-ico">⚠️</span><div className="spec-name">Risk Assessment</div></div></div>
      <div className="col"><div className="titem text-center"><span className="spec-ico">📑</span><div className="spec-name">SOPs &amp; Process Design</div></div></div>
      <div className="col"><div className="titem text-center"><span className="spec-ico">✅</span><div className="spec-name">Product Compliance</div></div></div>
      <div className="col"><div className="titem text-center"><span className="spec-ico">📜</span><div className="spec-name">Licensing Support</div></div></div>
    </div>
  </div>
</section>

<section id="cta-banner" className="z1">
  <div className="container text-center"><div className="row justify-content-center"><div className="col-lg-8" data-aos="zoom-in">
    <span className="label" style={{display: 'inline-flex', margin: '0 auto 16px'}}>Your Organisation</span>
    <h2 className="stitle">Don't See Your Sector? <span className="gtxt">Talk to Us.</span></h2>
    <p className="ssub mx-auto mb-5">We have supported organisations across many sectors not listed here. If your organisation is regulated or in a growth phase and needs advisory support — we would like to hear about it.</p>
    <div className="d-flex gap-3 justify-content-center flex-wrap">
      <a href="/contact" className="btn-primary"><i className="bi bi-calendar-check"></i>Book a Free Consultation</a>
      <a href="/services" className="btn-ghost"><i className="bi bi-grid-3x3-gap"></i>Explore Our Services</a>
    </div>
  </div></div></div>
</section>

    </>
  );
}
