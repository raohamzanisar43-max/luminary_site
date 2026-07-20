import { useEffect } from 'react';

export default function Portfolio() {
  useEffect(() => {
    document.title = "Case Studies – AML/CFT, Accounting & Governance Projects | LuminaryNexus Consultants Pakistan";
  }, []);

  return (
    <>

<section className="phero" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80\')'}}>
  <div className="phero-accent"></div>
  <div className="container phero-inner">
    <nav aria-label="breadcrumb" className="mb-4"><ol className="breadcrumb"><li className="breadcrumb-item"><a href="/">Home</a></li><li className="breadcrumb-item active">Case Studies</li></ol></nav>
    <span className="label">Our Work</span>
    <h1 className="hero-title mt-3">Practical Results. <span className="gtxt">Real Outcomes.</span></h1>
    <p className="hero-sub">Every engagement starts with understanding the organisation, identifying the gaps, and delivering solutions that actually work. Here is a selection of the work we do.</p>
  </div>
</section>
<div className="divider"></div>

<section id="portfolio-grid" className="sec z1">
  <div className="container">
    <div className="pfilter justify-content-center mb-5" data-aos="fade-up">
      <button className="pfbtn active" data-filter="all">All Projects</button>
      <button className="pfbtn" data-filter="compliance">Compliance &amp; AML</button>
      <button className="pfbtn" data-filter="accounting">Accounting &amp; Finance</button>
      <button className="pfbtn" data-filter="governance">Governance &amp; Board</button>
      <button className="pfbtn" data-filter="operations">Operations</button>
      <button className="pfbtn" data-filter="it">IT &amp; Cybersecurity</button>
    </div>
    <div className="case-grid">

      <div className="case-card" data-cat="compliance" data-aos="fade-up" data-aos-delay="0">
        <div className="case-img"><img className="case-img-pic" src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80" alt="AML CFT Framework FinTech" loading="lazy"/></div>
        <div className="case-body">
          <div className="case-tag">AML/CFT · FinTech</div>
          <div className="case-title">AML/CFT Framework for a Licensed FinTech</div>
          <p className="case-desc">End-to-end AML/CFT programme design including KYC/CDD procedures, transaction monitoring rules, sanctions screening, GOAML integration, and staff training.</p>
          <div className="d-flex gap-2 mt-3 flex-wrap"><span className="tag-pill">AML/CFT</span><span className="tag-pill">KYC/CDD</span><span className="tag-pill">GOAML</span><span className="tag-pill">Training</span></div>
          <div className="mt-3"><a href="/contact" className="btn-ghost" style={{padding: '7px 16px', fontSize: '.79rem'}}>Consult About This →</a></div>
        </div>
      </div>

      <div className="case-card" data-cat="accounting" data-aos="fade-up" data-aos-delay="60">
        <div className="case-img"><img className="case-img-pic" src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80" alt="Accounting Audit Preparation NBFC" loading="lazy"/></div>
        <div className="case-body">
          <div className="case-tag">Accounting · NBFC · Audit Prep</div>
          <div className="case-title">Financial Reporting &amp; Audit Preparation for NBFC</div>
          <p className="case-desc">12-month accounting retainer covering bookkeeping, financial statements, management accounts, payroll, and full audit preparation for a regulated NBFC.</p>
          <div className="d-flex gap-2 mt-3 flex-wrap"><span className="tag-pill">Bookkeeping</span><span className="tag-pill">Financial Reporting</span><span className="tag-pill">Audit Prep</span></div>
          <div className="mt-3"><a href="/contact" className="btn-ghost" style={{padding: '7px 16px', fontSize: '.79rem'}}>Consult About This →</a></div>
        </div>
      </div>

      <div className="case-card" data-cat="governance" data-aos="fade-up" data-aos-delay="120">
        <div className="case-img"><img className="case-img-pic" src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&q=80" alt="Governance Framework MSB" loading="lazy"/></div>
        <div className="case-body">
          <div className="case-tag">Governance · MSB · Regulatory</div>
          <div className="case-title">Governance Framework for MSB Regulatory Approval</div>
          <p className="case-desc">Board charter, committee TORs, delegation of authority, management committee structure, and full board documentation pack prepared for regulatory submission.</p>
          <div className="d-flex gap-2 mt-3 flex-wrap"><span className="tag-pill">Governance</span><span className="tag-pill">Board Charter</span><span className="tag-pill">TORs</span></div>
          <div className="mt-3"><a href="/contact" className="btn-ghost" style={{padding: '7px 16px', fontSize: '.79rem'}}>Consult About This →</a></div>
        </div>
      </div>

      <div className="case-card" data-cat="operations" data-aos="fade-up" data-aos-delay="0">
        <div className="case-img"><img className="case-img-pic" src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=600&q=80" alt="Operations SOP Design Bank" loading="lazy"/></div>
        <div className="case-body">
          <div className="case-tag">Operations · Bank · SOPs</div>
          <div className="case-title">Operations Manual &amp; SOP Development for Bank</div>
          <p className="case-desc">Full operational manual covering customer onboarding, transaction processing, complaint handling, branch controls, and staff authority matrices for a bank branch network.</p>
          <div className="d-flex gap-2 mt-3 flex-wrap"><span className="tag-pill">SOPs</span><span className="tag-pill">Onboarding</span><span className="tag-pill">Controls</span></div>
          <div className="mt-3"><a href="/contact" className="btn-ghost" style={{padding: '7px 16px', fontSize: '.79rem'}}>Consult About This →</a></div>
        </div>
      </div>

      <div className="case-card" data-cat="it" data-aos="fade-up" data-aos-delay="60">
        <div className="case-img"><img className="case-img-pic" src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80" alt="IT Strategy Cybersecurity FinTech" loading="lazy"/></div>
        <div className="case-body">
          <div className="case-tag">IT · Cybersecurity · FinTech Platform</div>
          <div className="case-title">IT Strategy &amp; Compliance Dashboard for FinTech</div>
          <p className="case-desc">Technology roadmap, cybersecurity controls framework, and custom compliance dashboard development for a digital lending platform with SBP reporting requirements.</p>
          <div className="d-flex gap-2 mt-3 flex-wrap"><span className="tag-pill">IT Strategy</span><span className="tag-pill">Cybersecurity</span><span className="tag-pill">Dashboard</span></div>
          <div className="mt-3"><a href="/contact" className="btn-ghost" style={{padding: '7px 16px', fontSize: '.79rem'}}>Consult About This →</a></div>
        </div>
      </div>

      <div className="case-card" data-cat="compliance" data-aos="fade-up" data-aos-delay="120">
        <div className="case-img"><img className="case-img-pic" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80" alt="Regulatory Inspection Readiness Bank" loading="lazy"/></div>
        <div className="case-body">
          <div className="case-tag">Compliance · Bank · Inspection Prep</div>
          <div className="case-title">Regulatory Inspection Readiness for Commercial Bank</div>
          <p className="case-desc">Comprehensive pre-examination review covering AML/CFT documentation, KYC file completeness, gap identification, remediation support, and staff coaching for SBP inspection.</p>
          <div className="d-flex gap-2 mt-3 flex-wrap"><span className="tag-pill">Inspection Prep</span><span className="tag-pill">Gap Closure</span><span className="tag-pill">SBP</span></div>
          <div className="mt-3"><a href="/contact" className="btn-ghost" style={{padding: '7px 16px', fontSize: '.79rem'}}>Consult About This →</a></div>
        </div>
      </div>

      <div className="case-card" data-cat="governance" data-aos="fade-up" data-aos-delay="0">
        <div className="case-img"><img className="case-img-pic" src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=600&q=80" alt="Board Pack Reporting Investment Firm" loading="lazy"/></div>
        <div className="case-body">
          <div className="case-tag">Governance · Investment Firm · Reporting</div>
          <div className="case-title">Quarterly Board Pack &amp; Reporting for Investment Firm</div>
          <p className="case-desc">Ongoing quarterly board pack preparation covering risk reports, compliance updates, AML/CFT summaries, audit action trackers, and management presentations.</p>
          <div className="d-flex gap-2 mt-3 flex-wrap"><span className="tag-pill">Board Packs</span><span className="tag-pill">Risk Reports</span><span className="tag-pill">Compliance</span></div>
          <div className="mt-3"><a href="/contact" className="btn-ghost" style={{padding: '7px 16px', fontSize: '.79rem'}}>Consult About This →</a></div>
        </div>
      </div>

      <div className="case-card" data-cat="operations" data-aos="fade-up" data-aos-delay="60">
        <div className="case-img"><img className="case-img-pic" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80" alt="MIS KPI Reporting MFB" loading="lazy"/></div>
        <div className="case-body">
          <div className="case-tag">Operations · MFB · MIS</div>
          <div className="case-title">MIS &amp; KPI Framework for Microfinance Bank</div>
          <p className="case-desc">Operational dashboard design, KPI framework, monthly MIS report templates, and branch performance tracking system for a microfinance bank with 40+ branches.</p>
          <div className="d-flex gap-2 mt-3 flex-wrap"><span className="tag-pill">MIS</span><span className="tag-pill">KPI Design</span><span className="tag-pill">Dashboards</span></div>
          <div className="mt-3"><a href="/contact" className="btn-ghost" style={{padding: '7px 16px', fontSize: '.79rem'}}>Consult About This →</a></div>
        </div>
      </div>

      <div className="case-card" data-cat="accounting" data-aos="fade-up" data-aos-delay="120">
        <div className="case-img"><img className="case-img-pic" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" alt="Tax Planning Corporate Group" loading="lazy"/></div>
        <div className="case-body">
          <div className="case-tag">Accounting · Corporate Group · Tax</div>
          <div className="case-title">Accounting &amp; Tax Planning for Corporate Group</div>
          <p className="case-desc">Consolidated financial reporting, inter-company reconciliations, tax planning advisory, and audit preparation support for a multi-entity corporate group across three sectors.</p>
          <div className="d-flex gap-2 mt-3 flex-wrap"><span className="tag-pill">Tax Planning</span><span className="tag-pill">Consolidated Accounts</span><span className="tag-pill">Audit</span></div>
          <div className="mt-3"><a href="/contact" className="btn-ghost" style={{padding: '7px 16px', fontSize: '.79rem'}}>Consult About This →</a></div>
        </div>
      </div>

    </div>
  </div>
</section>

<section id="cta-banner" className="z1">
  <div className="container text-center"><div className="row justify-content-center"><div className="col-lg-8" data-aos="zoom-in">
    <span className="label" style={{display: 'inline-flex', margin: '0 auto 16px'}}>Have a Similar Challenge?</span>
    <h2 className="stitle mt-2">Let's <span className="gtxt">Work Together</span></h2>
    <p className="ssub mx-auto mb-5">Every one of these engagements started with a conversation. Tell us about your organisation and what you need to achieve — we will advise on the best approach.</p>
    <div className="d-flex gap-3 justify-content-center flex-wrap">
      <a href="/contact" className="btn-primary"><i className="bi bi-calendar-check"></i>Book a Free Consultation</a>
      <a href="/contact" className="btn-ghost"><i className="bi bi-envelope"></i>Send Us Your Brief</a>
    </div>
  </div></div></div>
</section>

    </>
  );
}
