import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = "LuminaryNexus Consultants – AML/CFT Compliance, Accounting, IT & Governance Advisory | Islamabad Pakistan";
  }, []);

  return (
    <>

{/* ═══ HERO — Dark, bold, editorial ═══ */}
<section id="hero">
  <div className="container">
    <div className="row align-items-center g-5" style={{minHeight: '100vh', paddingTop: '68px'}}>
      {/* Left */}
      <div className="col-lg-6">
        <div className="hero-inner">
          <div className="hero-eyebrow">
            <div className="hero-eyebrow-line"></div>
            <div className="hero-eyebrow-text">Trusted by Financial Institutions &amp; Internationally</div>
          </div>
          <h1 className="hero-title">Advisory Built<br/>for <em>Regulated</em><br/>Businesses.</h1>
          <p className="hero-sub">We provide specialist compliance, AML/CFT, accounting, IT, governance, and operational support for financial institutions, NBFCs, FinTechs, MSBs, and growth-focused organisations across Pakistan, the GCC, and international markets.</p>
          <div className="hero-btns">
            <a href="/contact" className="btn-primary"><i className="bi bi-calendar-check"></i>Book a Consultation</a>
            <a href="/services" className="btn-cream"><i className="bi bi-grid-3x3-gap"></i>Our Services</a>
          </div>
          <div className="hero-rule">
            <div className="hero-stat">
              <span className="hstat-n" data-counter data-target="6" data-suffix="">0</span>
              <div className="hstat-l">Service Areas</div>
            </div>
            <div className="hero-stat">
              <span className="hstat-n" data-counter data-target="100" data-suffix="+">0</span>
              <div className="hstat-l">Clients Supported</div>
            </div>
            <div className="hero-stat">
              <span className="hstat-n" data-counter data-target="15" data-suffix="+">0</span>
              <div className="hstat-l">Years Experience</div>
            </div>
            <div className="hero-stat">
              <span className="hstat-n" data-counter data-target="30" data-suffix="+">0</span>
              <div className="hstat-l">Regulatory Frameworks</div>
            </div>
          </div>
        </div>
      </div>
      {/* Right — image with offset frame + floating cards */}
      <div className="col-lg-6 hero-img-col">
        <div className="hero-img-frame">
          <div className="hero-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80"
              alt="LuminaryNexus Consultants — compliance and regulatory consulting professionals"
              loading="eager"
              style={{ objectFit: 'cover', width: '100%', height: '100%', objectPosition: '50% 50%', display: 'block', borderRadius: 'inherit' }}
            />
            <div className="hero-img-tint"></div>
          </div>
          <div className="hero-cred">
            <div className="hero-cred-val" data-counter data-target="100" data-suffix="+">0</div>
            <div className="hero-cred-lbl">Clients Supported</div>
          </div>
          <div className="hero-cred2">
            <div className="hero-cred2-val">FATF &amp; FMU</div>
            <div className="hero-cred2-lbl">Aligned Frameworks</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
 

{/* ABOUT */}
<section className="sec z1" id="about">
  <div className="container">
    <div className="row align-items-center g-5">
      <div className="col-lg-5" data-aos="fade-right">
        <div className="about-img-wrap">
          <div className="about-img">
            <img
              src="/images/team.jpeg"
              alt="LuminaryNexus Consultants compliance advisors reviewing regulatory frameworks"
              loading="lazy"
              style={{ objectPosition: 'center 25%', width: '100%', height: '360px' }}
            />
          </div>
          <div className="stat-pill sp1"><div className="sp-num" data-counter data-target="15" data-suffix="+">0</div><div className="sp-lbl">Years Experience</div></div>
          <div className="stat-pill sp2"><div className="sp-num" data-counter data-target="100" data-suffix="+">0</div><div className="sp-lbl">Clients Supported</div></div>
        </div>
      </div>
      <div className="col-lg-7" data-aos="fade-left">
        <div className="label">Who We Are</div>
        <h2 className="stitle">Practical Advisory for <span className="gtxt">Regulated &amp; Growing</span> Organisations</h2>
        <p className="ssub mb-4">LuminaryNexus Consultants provides specialist compliance, accounting, technology, governance, and business support services across Pakistan and international markets. Our approach is direct: understand the business, find the risks, build controls that hold up, and support growth that lasts.</p>
        <ul className="chk mb-4">
          <li><span className="chk-ico"></span>Deep working knowledge of AML/CFT, compliance, governance, risk, and technology</li>
          <li><span className="chk-ico"></span>Hands-on experience with banks, NBFCs, FinTechs, MSBs, and microfinance institutions</li>
          <li><span className="chk-ico"></span>Regulator-ready documentation and advisory support — Pakistan, GCC, and international</li>
          <li><span className="chk-ico"></span>Solutions built for your specific situation — not copied from a generic template</li>
          <li><span className="chk-ico"></span>End-to-end support from policy development through to implementation and staff training</li>
        </ul>
        <div className="d-flex gap-3 flex-wrap">
          <a href="/about" className="btn-primary"><i className="bi bi-arrow-right"></i>About LuminaryNexus</a>
          <a href="/contact" className="btn-outline">Book a Consultation</a>
        </div>
      </div>
    </div>
  </div>
</section>
<div className="divider-gold"></div>

{/* SERVICES — 6 uniform editorial cards */}
<section className="sec z1" id="services">
  <div className="container">
    <div className="row justify-content-between align-items-end mb-5">
      <div className="col-lg-6" data-aos="fade-up">
        <div className="label">What We Deliver</div>
        <h2 className="stitle">6 Core Service Areas</h2>
        <p className="ssub">Compliance expertise, accounting knowledge, operational experience, governance capability, and technology support — under one advisory model.</p>
      </div>
      <div className="col-auto" data-aos="fade-up"><a href="/services" className="btn-ghost">All Services <i className="bi bi-arrow-right ms-1"></i></a></div>
    </div>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-0" style={{border: '1px solid var(--rule)'}}>
      <div className="col" style={{borderRight: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)'}}>
        <div className="card-editorial" style={{border: 'none', borderTop: 'none'}}>
          <div className="sico sico-gold"><i className="bi bi-shield-lock-fill"></i></div>
          <div className="ctitle">Compliance &amp; AML/CFT Advisory</div>
          <div className="ctext">Regulatory compliance, AML/CFT frameworks, KYC/CDD/EDD, transaction monitoring, sanctions screening, risk assessments, and compliance training.</div>
          <a href="/services#compliance" className="carr"><i className="bi bi-arrow-right"></i>Explore Service</a>
        </div>
      </div>
      <div className="col" style={{borderRight: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)'}}>
        <div className="card-editorial" style={{border: 'none', borderTop: 'none'}}>
          <div className="sico sico-slate"><i className="bi bi-clipboard2-check-fill"></i></div>
          <div className="ctitle">Audit, Assurance &amp; Internal Control</div>
          <div className="ctext">Internal audits, compliance reviews, control testing, regulatory inspection preparation, policy review, and management reporting.</div>
          <a href="/services#audit" className="carr"><i className="bi bi-arrow-right"></i>Explore Service</a>
        </div>
      </div>
      <div className="col" style={{borderBottom: '1px solid var(--rule)'}}>
        <div className="card-editorial" style={{border: 'none', borderTop: 'none'}}>
          <div className="sico sico-gold"><i className="bi bi-calculator-fill"></i></div>
          <div className="ctitle">Accounting &amp; Financial Management</div>
          <div className="ctext">Bookkeeping, financial reporting, tax planning support, payroll, accounts receivable/payable management, and audit preparation.</div>
          <a href="/services#accounting" className="carr"><i className="bi bi-arrow-right"></i>Explore Service</a>
        </div>
      </div>
      <div className="col" style={{borderRight: '1px solid var(--rule)'}}>
        <div className="card-editorial" style={{border: 'none', borderTop: 'none'}}>
          <div className="sico sico-slate"><i className="bi bi-laptop-fill"></i></div>
          <div className="ctitle">IT, Software &amp; Cybersecurity</div>
          <div className="ctext">IT strategy, custom software development, FinTech platform development, cybersecurity, IT infrastructure, and data protection controls.</div>
          <a href="/services#it-services" className="carr"><i className="bi bi-arrow-right"></i>Explore Service</a>
        </div>
      </div>
      <div className="col" style={{borderRight: '1px solid var(--rule)'}}>
        <div className="card-editorial" style={{border: 'none', borderTop: 'none'}}>
          <div className="sico sico-gold"><i className="bi bi-gear-wide-connected"></i></div>
          <div className="ctitle">Operations Support</div>
          <div className="ctext">SOPs, operational governance, process optimisation, vendor management, MIS, KPIs, business continuity planning, and onboarding support.</div>
          <a href="/services#operations" className="carr"><i className="bi bi-arrow-right"></i>Explore Service</a>
        </div>
      </div>
      <div className="col">
        <div className="card-editorial" style={{border: 'none', borderTop: 'none'}}>
          <div className="sico sico-slate"><i className="bi bi-building-fill-gear"></i></div>
          <div className="ctitle">Governance &amp; Board Advisory</div>
          <div className="ctext">Corporate governance frameworks, board charters, committee TORs, board packs, resolutions, minutes, and regulatory documentation.</div>
          <a href="/services#governance" className="carr"><i className="bi bi-arrow-right"></i>Explore Service</a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* STATS — slate background */}
<section id="stats">
  <div className="container">
    <div className="row g-0">
      <div className="col-6 col-md-3 stat-block" data-aos="fade-up"><span className="snum" data-counter data-target="100" data-suffix="+">0</span><div className="slbl">Clients Supported</div></div>
      <div className="col-6 col-md-3 stat-block" data-aos="fade-up" data-aos-delay="80"><span className="snum" data-counter data-target="30" data-suffix="+">0</span><div className="slbl">Regulatory Frameworks</div></div>
      <div className="col-6 col-md-3 stat-block" data-aos="fade-up" data-aos-delay="160"><span className="snum" data-counter data-target="6" data-suffix="">0</span><div className="slbl">Core Service Areas</div></div>
      <div className="col-6 col-md-3 stat-block" data-aos="fade-up" data-aos-delay="240"><span className="snum" data-counter data-target="15" data-suffix="+">0</span><div className="slbl">Years Combined Expertise</div></div>
    </div>
  </div>
</section>

{/* WHY — horizontal list, no cards */}
<section className="sec z1" id="why">
  <div className="container">
    <div className="row g-5 align-items-start">
      <div className="col-lg-4" data-aos="fade-right" style={{position: 'sticky', top: '100px'}}>
        <div className="label">Why LuminaryNexus</div>
        <h2 className="stitle">What Makes Us<br/><span className="gtxt">Different</span></h2>
        <p className="ssub">One advisory model spanning compliance, operations, accounting, governance, and IT — so your teams don't manage multiple fragmented relationships.</p>
        <a href="/contact" className="btn-primary mt-4"><i className="bi bi-calendar-check"></i>Book a Consultation</a>
      </div>
      <div className="col-lg-8" data-aos="fade-left">
        <div className="why-item"><div className="why-num">01</div><div className="why-content"><h4>Practical Sector Experience</h4><p>Hands-on experience with banks, NBFCs, FinTechs, MSBs, and microfinance institutions — not just theoretical knowledge of the sector.</p></div></div>
        <div className="why-item"><div className="why-num">02</div><div className="why-content"><h4>Regulator-Ready Documentation</h4><p>Every deliverable is prepared to meet supervisory expectations — inspection-ready policies, reports, and frameworks from day one.</p></div></div>
        <div className="why-item"><div className="why-num">03</div><div className="why-content"><h4>Integrated Advisory Model</h4><p>Compliance, operations, accounting, governance, and IT under one roof — integrated advice that avoids fragmented, conflicting recommendations.</p></div></div>
        <div className="why-item"><div className="why-num">04</div><div className="why-content"><h4>Customised Solutions</h4><p>We develop solutions for your specific context — not generic templates that require heavy adaptation before they can actually be implemented.</p></div></div>
        <div className="why-item"><div className="why-num">05</div><div className="why-content"><h4>End-to-End Support</h4><p>From policy design and framework development through to implementation, training, and ongoing monitoring — we stay with you.</p></div></div>
        <div className="why-item"><div className="why-num">06</div><div className="why-content"><h4>Multi-Level Reporting</h4><p>Board-level, management-level, and operational-level reporting — the right information, at the right level, at the right time.</p></div></div>
      </div>
    </div>
  </div>
</section>
<div className="divider"></div>

{/* INDUSTRIES */}
<section className="sec z1" id="industries">
  <div className="container">
    <div className="row justify-content-center text-center mb-5">
      <div className="col-lg-6" data-aos="fade-up">
        <div className="label" style={{justifyContent: 'center'}}>Who We Serve</div>
        <h2 className="stitle">Built for <span className="gtxt">Regulated Industries</span></h2>
      </div>
    </div>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
      <div className="col"><a href="/industries" className="industry-item"><div className="ii-ico"><i className="bi bi-bank2"></i></div><div><div className="ii-title">Banks &amp; Microfinance Banks</div><p className="ii-desc">Commercial banks, Islamic banks, MFBs — compliance and governance advisory</p></div><i className="bi bi-arrow-right ii-arrow"></i></a></div>
      <div className="col"><a href="/industries" className="industry-item"><div className="ii-ico"><i className="bi bi-cpu-fill"></i></div><div><div className="ii-title">FinTech &amp; Digital Lenders</div><p className="ii-desc">Digital lending, BNPL, neobanks, payment aggregators, wallets</p></div><i className="bi bi-arrow-right ii-arrow"></i></a></div>
      <div className="col"><a href="/industries" className="industry-item"><div className="ii-ico"><i className="bi bi-building-fill"></i></div><div><div className="ii-title">NBFCs &amp; Leasing Companies</div><p className="ii-desc">Non-banking finance companies, leasing, investment advisory firms</p></div><i className="bi bi-arrow-right ii-arrow"></i></a></div>
      <div className="col"><a href="/industries" className="industry-item"><div className="ii-ico"><i className="bi bi-currency-exchange"></i></div><div><div className="ii-title">Money Service Businesses</div><p className="ii-desc">Remittance, foreign exchange, payment services providers</p></div><i className="bi bi-arrow-right ii-arrow"></i></a></div>
      <div className="col"><a href="/industries" className="industry-item"><div className="ii-ico"><i className="bi bi-rocket-takeoff-fill"></i></div><div><div className="ii-title">Startups &amp; Growth Companies</div><p className="ii-desc">Regulated startups building compliant operations from the ground up</p></div><i className="bi bi-arrow-right ii-arrow"></i></a></div>
      <div className="col"><a href="/industries" className="industry-item"><div className="ii-ico"><i className="bi bi-briefcase-fill"></i></div><div><div className="ii-title">Corporate Groups</div><p className="ii-desc">Diversified corporate groups seeking governance and finance advisory</p></div><i className="bi bi-arrow-right ii-arrow"></i></a></div>
    </div>
  </div>
</section>

{/* SPECIALISED TOOLS — simple grid, no 3D */}
<section className="sec z1" id="tech">
  <div className="container">
    <div className="row align-items-start g-5">
      <div className="col-lg-5" data-aos="fade-right">
        <div className="label">Specialist Coverage</div>
        <h2 className="stitle">Sector-Specific <span className="gtxt">Support</span></h2>
        <p className="ssub mb-4">We provide specialised advisory across every compliance, operational, and governance dimension that regulated financial businesses face.</p>
        <a href="/services" className="btn-primary"><i className="bi bi-arrow-right"></i>All Service Areas</a>
      </div>
      <div className="col-lg-7" data-aos="fade-left">
        <div className="row row-cols-3 row-cols-md-4 g-2">
          <div className="col"><div className="spec-item"><span className="spec-ico">🔍</span><div className="spec-name">KYC/KYB</div></div></div>
          <div className="col"><div className="spec-item"><span className="spec-ico">📡</span><div className="spec-name">TxM Monitoring</div></div></div>
          <div className="col"><div className="spec-item"><span className="spec-ico">🛡️</span><div className="spec-name">Sanctions</div></div></div>
          <div className="col"><div className="spec-item"><span className="spec-ico">📜</span><div className="spec-name">GOAML / FMU</div></div></div>
          <div className="col"><div className="spec-item"><span className="spec-ico">💳</span><div className="spec-name">Lending Policy</div></div></div>
          <div className="col"><div className="spec-item"><span className="spec-ico">🏛️</span><div className="spec-name">Board Packs</div></div></div>
          <div className="col"><div className="spec-item"><span className="spec-ico">📊</span><div className="spec-name">MIS &amp; KPIs</div></div></div>
          <div className="col"><div className="spec-item"><span className="spec-ico">⚖️</span><div className="spec-name">Risk Frameworks</div></div></div>
          <div className="col"><div className="spec-item"><span className="spec-ico">🔒</span><div className="spec-name">Cybersecurity</div></div></div>
          <div className="col"><div className="spec-item"><span className="spec-ico">📑</span><div className="spec-name">SOPs &amp; Policy</div></div></div>
          <div className="col"><div className="spec-item"><span className="spec-ico">🧾</span><div className="spec-name">Bookkeeping</div></div></div>
          <div className="col"><div className="spec-item"><span className="spec-ico">🤝</span><div className="spec-name">Vendor DD</div></div></div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* CASE STUDIES PREVIEW */}
<section className="sec z1" id="portfolio">
  <div className="container">
    <div className="row justify-content-between align-items-end mb-5">
      <div className="col-lg-6" data-aos="fade-up"><div className="label">Our Work</div><h2 className="stitle">Selected Case Studies</h2></div>
      <div className="col-auto" data-aos="fade-up"><a href="/portfolio" className="btn-ghost">All Case Studies <i className="bi bi-arrow-right ms-1"></i></a></div>
    </div>
    <div className="row row-cols-1 row-cols-md-3 g-0" style={{border: '1px solid var(--rule)'}}>
      <div className="col" style={{borderRight: '1px solid var(--rule)'}} data-aos="fade-up" data-aos-delay="0">
        <div className="case-card" style={{border: 'none'}}>
          <div className="case-img"><img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80" alt="AML CFT Framework FinTech" loading="lazy"/></div>
          <div className="case-body">
            <div className="case-tag">AML/CFT · FinTech</div>
            <div className="case-title">AML/CFT Framework for a Licensed FinTech</div>
            <p className="case-desc">End-to-end AML/CFT programme including KYC procedures, transaction monitoring rules, sanctions screening, and GOAML integration.</p>
            <div className="d-flex gap-2 mt-3 flex-wrap"><span className="tag-pill">AML/CFT</span><span className="tag-pill">KYC/CDD</span><span className="tag-pill">GOAML</span></div>
            <div className="mt-3"><a href="/contact" className="btn-ghost" style={{padding: '7px 16px', fontSize: '.72rem'}}>Consult About This →</a></div>
          </div>
        </div>
      </div>
      <div className="col" style={{borderRight: '1px solid var(--rule)'}} data-aos="fade-up" data-aos-delay="80">
        <div className="case-card" style={{border: 'none'}}>
          <div className="case-img"><img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80" alt="Accounting NBFC Audit" loading="lazy"/></div>
          <div className="case-body">
            <div className="case-tag">Accounting · NBFC · Audit Prep</div>
            <div className="case-title">Financial Reporting &amp; Audit Preparation</div>
            <p className="case-desc">12-month accounting retainer covering bookkeeping, financial statements, management accounts, and full audit preparation for a regulated NBFC.</p>
            <div className="d-flex gap-2 mt-3 flex-wrap"><span className="tag-pill">Bookkeeping</span><span className="tag-pill">Financial Reporting</span><span className="tag-pill">Audit</span></div>
            <div className="mt-3"><a href="/contact" className="btn-ghost" style={{padding: '7px 16px', fontSize: '.72rem'}}>Consult About This →</a></div>
          </div>
        </div>
      </div>
      <div className="col" data-aos="fade-up" data-aos-delay="160">
        <div className="case-card" style={{border: 'none'}}>
          <div className="case-img"><img src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&q=80" alt="Governance Board Framework MSB" loading="lazy"/></div>
          <div className="case-body">
            <div className="case-tag">Governance · MSB · Regulatory</div>
            <div className="case-title">Governance Framework for MSB Approval</div>
            <p className="case-desc">Board charter, committee TORs, delegation of authority, and full board documentation pack prepared for a Money Service Business's regulatory submission.</p>
            <div className="d-flex gap-2 mt-3 flex-wrap"><span className="tag-pill">Governance</span><span className="tag-pill">Board Docs</span><span className="tag-pill">Regulatory</span></div>
            <div className="mt-3"><a href="/contact" className="btn-ghost" style={{padding: '7px 16px', fontSize: '.72rem'}}>Consult About This →</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* PROCESS — vertical numbered steps */}
<section className="sec z1" id="process">
  <div className="container">
    <div className="row g-5 align-items-start">
      <div className="col-lg-5" data-aos="fade-right">
        <div className="label">How We Work</div>
        <h2 className="stitle">Our Advisory <span className="gtxt">Process</span></h2>
        <p className="ssub mb-4">A structured approach that delivers practical, regulator-ready outcomes for every engagement.</p>
        <div className="sec-img mt-4"><img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80" alt="LuminaryNexus Consultants advisory process" loading="lazy" style={{minHeight: '280px!important', height: '280px'}}/></div>
      </div>
      <div className="col-lg-7" data-aos="fade-left">
        <div className="process-steps">
          <div className="process-step"><div className="step-dot">01</div><div className="step-title">Understand the Business</div><p className="step-desc">Initial consultation to understand your organisation, regulatory environment, business model, and existing frameworks — before offering any recommendations.</p></div>
          <div className="process-step"><div className="step-dot">02</div><div className="step-title">Identify Gaps &amp; Risks</div><p className="step-desc">Independent assessment of your current frameworks against regulatory requirements, industry standards, and best practices to identify gaps and prioritise actions.</p></div>
          <div className="process-step"><div className="step-dot">03</div><div className="step-title">Design the Solution</div><p className="step-desc">Develop policies, procedures, frameworks, controls, and documentation built around your specific requirements — not lifted from a generic template and dressed up.</p></div>
          <div className="process-step"><div className="step-dot">04</div><div className="step-title">Implement &amp; Embed</div><p className="step-desc">Support implementation across your organisation — including staff training, process rollout, system design, and management briefings at every level.</p></div>
          <div className="process-step"><div className="step-dot">05</div><div className="step-title">Monitor &amp; Improve</div><p className="step-desc">Ongoing monitoring, periodic reviews, control testing, and framework updates to keep your organisation current with regulatory changes and best practices.</p></div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* FAQ */}
<section className="sec z1" id="faq">
  <div className="container">
    <div className="row g-5">
      <div className="col-lg-4" data-aos="fade-right">
        <div className="label">FAQ</div>
        <h2 className="stitle">Common <span className="gtxt">Questions</span></h2>
        <p className="ssub">Have a question not answered here? <a href="/contact" style={{color: 'var(--gold)'}}>Send us a message</a> — we respond within one business day.</p>
      </div>
      <div className="col-lg-8" data-aos="fade-left">
        <div className="fitem"><div className="fq"><span className="fq-text">Who does LuminaryNexus Consultants work with?</span><div className="ftog"><i className="bi bi-plus"></i></div></div><div className="fans"><div className="fans-in">We work with financial institutions, NBFCs, FinTech companies, Money Service Businesses, banks, microfinance banks, digital lending platforms, startups, and corporate groups — any regulated or growth-focused organisation that needs reliable advisory support.</div></div></div>
        <div className="fitem"><div className="fq"><span className="fq-text">Can you support AML/CFT compliance and accounting at the same time?</span><div className="ftog"><i className="bi bi-plus"></i></div></div><div className="fans"><div className="fans-in">Yes. Our integrated model means we can support your compliance function, maintain your accounts, strengthen your governance framework, and advise on IT controls — all under one advisory relationship. This avoids fragmented advice and ensures everything stays aligned.</div></div></div>
        <div className="fitem"><div className="fq"><span className="fq-text">Do you prepare documentation for regulatory inspections?</span><div className="ftog"><i className="bi bi-plus"></i></div></div><div className="fans"><div className="fans-in">Yes. Regulatory inspection readiness is a core part of our work. We prepare regulator-ready policies, procedures, risk assessments, management reports, gap closure plans, and inspection response documentation to the standard supervisors expect.</div></div></div>
        <div className="fitem"><div className="fq"><span className="fq-text">Project-based or retainer — which do you offer?</span><div className="ftog"><i className="bi bi-plus"></i></div></div><div className="fans"><div className="fans-in">Both. We offer project-based engagements for specific deliverables such as AML framework development or audit preparation, and retainer arrangements for ongoing compliance support, accounting, and governance advisory. The right structure is agreed after the initial consultation, based on what your organisation actually needs.</div></div></div>
        <div className="fitem"><div className="fq"><span className="fq-text">Do you provide compliance training for boards and staff?</span><div className="ftog"><i className="bi bi-plus"></i></div></div><div className="fans"><div className="fans-in">Yes. We provide AML/CFT, compliance, sanctions, KYC, fraud prevention, and governance training — designed specifically for boards, senior management, compliance teams, operations staff, and frontline employees in regulated businesses.</div></div></div>
      </div>
    </div>
  </div>
</section>

{/* CTA — dark editorial */}
<div className="cta-wrap z1">
  <div className="container">
    <div className="cta-box" data-aos="fade-up">
      <div className="row align-items-center g-5">
        <div className="col-lg-7">
          <div className="label label-dark">Build Stronger Operations</div>
          <h2 className="stitle-lg" style={{color: 'var(--cream)'}}>Stronger. Safer.<br/><span className="gtxt">More Scalable.</span></h2>
          <p style={{color: 'rgba(245,247,252,.58)', fontSize: '1rem', maxWidth: '480px', lineHeight: '1.85', marginTop: '16px'}}>Whether you are a bank, FinTech, NBFC, MSB, or corporate group in Pakistan or across international markets — we help you build compliance that works, operations that hold, and governance that satisfies regulators.</p>
          <div className="cta-trust-row">
            <div className="cta-trust-item">Compliance, operations, accounting, governance, and IT under one advisory model</div>
            <div className="cta-trust-item">Regulator-ready documentation and advisory from day one</div>
            <div className="cta-trust-item">Solutions built around your situation — not generic templates</div>
            <div className="cta-trust-item">Practical, reliable, and focused on delivering long-term value</div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="cta-card">
            <div className="cta-card-label">Start Today</div>
            <h4 style={{fontFamily: 'var(--fser)', fontSize: '1.35rem', fontWeight: '600', marginBottom: '8px'}}>Book a Free Initial Consultation</h4>
            <p style={{fontSize: '.86rem', color: 'var(--ink-3)', marginBottom: '22px', lineHeight: '1.7'}}>Tell us about your organisation. We will listen, understand your challenges, and advise on the best approach — no obligation.</p>
            <a href="/contact" className="btn-primary w-100 justify-content-center mb-3"><i className="bi bi-calendar-check"></i>Book a Consultation</a>
            <a href="/services" className="btn-outline w-100 justify-content-center"><i className="bi bi-grid-3x3-gap"></i>Explore Services</a>
            <div className="cta-card-note">🔒 Your information is strictly confidential. NDAs signed before any substantive discussion.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* NEWSLETTER */}
<div className="nl-wrap z1">
  <div className="container text-center">
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <div className="label label-dark" style={{justifyContent: 'center'}}>Stay Informed</div>
        <h3 style={{fontFamily: 'var(--fser)', fontSize: '1.7rem', fontWeight: '600', color: 'var(--cream)', margin: '10px 0 8px'}}>Compliance &amp; Regulatory Updates</h3>
        <p style={{color: 'rgba(245,247,252,.42)', fontSize: '.86rem', maxWidth: '400px', margin: '0 auto'}}>Monthly regulatory insights for financial institutions and regulated businesses.</p>
        <form className="nlform" id="nl-form">
          <input type="email" className="nlinput" placeholder="your@organisation.com" required/>
          <button type="submit" className="nl-btn">Subscribe</button>
        </form>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
