 'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import OurLeaders from '../components/OurLeaders';

const SERVICES = [
  {
    title: 'Compliance & AML/CFT Advisory',
    text: 'Regulatory compliance, AML/CFT frameworks, KYC/CDD/EDD, transaction monitoring, sanctions screening, risk assessments, and compliance training.',
    href: '/services#compliance',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&q=80',
  },
  {
    title: 'Audit, Assurance & Internal Control',
    text: 'Internal audits, compliance reviews, control testing, regulatory inspection preparation, policy review, and management reporting.',
    href: '/services#audit',
    img: '/images/audit-assurance.jpg',
  },
  {
    title: 'Accounting & Financial Management',
    text: 'Bookkeeping, financial reporting, tax planning support, payroll, accounts receivable/payable management, and audit preparation.',
    href: '/services#accounting',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1000&q=80',
  },
  {
    title: 'IT, Software & Cybersecurity',
    text: 'IT strategy, custom software development, FinTech platform development, cybersecurity, IT infrastructure, and data protection controls.',
    href: '/services#it-services',
    img: '/images/it-cybersecurity.png',
  },
  {
    title: 'Operations Support',
    text: 'SOPs, operational governance, process optimisation, vendor management, MIS, KPIs, business continuity planning, and onboarding support.',
    href: '/services#operations',
    img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1000&q=80',
  },
  {
    title: 'Governance & Board Advisory',
    text: 'Corporate governance frameworks, board charters, committee TORs, board packs, resolutions, minutes, and regulatory documentation.',
    href: '/services#governance',
    img: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1000&q=80',
  },
];

const INDUSTRIES = [
  { icon: 'bi-bank2', title: 'Banks & Microfinance Banks', desc: 'Commercial banks, Islamic banks, MFBs — compliance and governance advisory', img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=900&q=75' },
  { icon: 'bi-cpu-fill', title: 'FinTech & Digital Lenders', desc: 'Digital lending, BNPL, neobanks, payment aggregators, wallets', img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&q=75' },
  { icon: 'bi-building-fill', title: 'NBFCs & Leasing Companies', desc: 'Non-banking finance companies, leasing, investment advisory firms', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=75' },
  { icon: 'bi-currency-exchange', title: 'Money Service Businesses', desc: 'Remittance, foreign exchange, payment services providers', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=75' },
  { icon: 'bi-rocket-takeoff-fill', title: 'Startups & Growth Companies', desc: 'Regulated startups building compliant operations from the ground up', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=75' },
  { icon: 'bi-briefcase-fill', title: 'Corporate Groups', desc: 'Diversified corporate groups seeking governance and finance advisory', img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=75' },
];

const SPECIALTIES = [
  { ico: '🔍', name: 'KYC/KYB' },
  { ico: '📡', name: 'TxM Monitoring' },
  { ico: '🛡️', name: 'Sanctions' },
  { ico: '📜', name: 'GOAML / FMU' },
  { ico: '💳', name: 'Lending Policy' },
  { ico: '🏛️', name: 'Board Packs' },
  { ico: '📊', name: 'MIS & KPIs' },
  { ico: '⚖️', name: 'Risk Frameworks' },
  { ico: '🔒', name: 'Cybersecurity' },
  { ico: '📑', name: 'SOPs & Policy' },
  { ico: '🧾', name: 'Bookkeeping' },
  { ico: '🤝', name: 'Vendor DD' },
];
const ROW_A = SPECIALTIES.slice(0, 6);
const ROW_B = SPECIALTIES.slice(6);

const CASES = [
  {
    tag: 'AML/CFT · FinTech',
    title: 'AML/CFT Framework for a Licensed FinTech',
    text: 'End-to-end AML/CFT programme including KYC procedures, transaction monitoring rules, sanctions screening, and GOAML integration.',
    pills: ['AML/CFT', 'KYC/CDD', 'GOAML'],
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000&q=80',
  },
  {
    tag: 'Accounting · NBFC · Audit Prep',
    title: 'Financial Reporting & Audit Preparation',
    text: '12-month accounting retainer covering bookkeeping, financial statements, management accounts, and full audit preparation for a regulated NBFC.',
    pills: ['Bookkeeping', 'Financial Reporting', 'Audit'],
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1000&q=80',
  },
  {
    tag: 'Governance · MSB · Regulatory',
    title: 'Governance Framework for MSB Approval',
    text: "Board charter, committee TORs, delegation of authority, and full board documentation pack prepared for a Money Service Business's regulatory submission.",
    pills: ['Governance', 'Board Docs', 'Regulatory'],
    img: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1000&q=80',
  },
];

const STEPS = [
  { icon: 'bi-chat-dots', title: 'Understand the Business', text: 'Initial consultation to understand your organisation, regulatory environment, business model, and existing frameworks.' },
  { icon: 'bi-search', title: 'Identify Gaps & Risks', text: 'Independent assessment of your frameworks against regulatory requirements and best practices to prioritise actions.' },
  { icon: 'bi-diagram-3', title: 'Design the Solution', text: 'Policies, procedures, controls, and documentation built around your specific requirements, not a generic template.' },
  { icon: 'bi-boxes', title: 'Implement & Embed', text: 'Support across your organisation including staff training, process rollout, system design, and management briefings.' },
  { icon: 'bi-graph-up-arrow', title: 'Monitor & Improve', text: 'Ongoing monitoring, periodic reviews, control testing, and framework updates to keep you current.' },
];

const WHY = [
  { icon: 'bi-bank', title: 'Practical Sector Experience', text: 'Hands-on experience with banks, NBFCs, FinTechs, MSBs, and microfinance institutions — not just theoretical knowledge of the sector.' },
  { icon: 'bi-shield-check', title: 'Regulator-Ready Documentation', text: 'Every deliverable is prepared to meet supervisory expectations — inspection-ready policies, reports, and frameworks from day one.' },
  { icon: 'bi-diagram-3', title: 'Integrated Advisory Model', text: 'Compliance, operations, accounting, governance, and IT under one roof — integrated advice that avoids fragmented, conflicting recommendations.' },
  { icon: 'bi-sliders', title: 'Customised Solutions', text: 'We develop solutions for your specific context — not generic templates that require heavy adaptation before they can actually be implemented.' },
  { icon: 'bi-people', title: 'End-to-End Support', text: 'From policy design and framework development through to implementation, training, and ongoing monitoring — we stay with you.' },
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [slideOffset, setSlideOffset] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [cs, setCs] = useState(0);
  const [csOffset, setCsOffset] = useState(0);
  const [csPaused, setCsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const csTrackRef = useRef<HTMLDivElement>(null);
  const prev = () => setSlide((current) => (current === 0 ? SERVICES.length - 1 : current - 1));
  const next = () => setSlide((current) => (current === SERVICES.length - 1 ? 0 : current + 1));
  const csPrev = () => setCs((current) => (current === 0 ? CASES.length - 1 : current - 1));
  const csNext = () => setCs((current) => (current === CASES.length - 1 ? 0 : current + 1));

  useEffect(() => {
    document.title = "LuminaryNexus Consultants – AML/CFT Compliance, Accounting, IT & Governance Advisory | Islamabad Pakistan";
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateOffset = () => {
      const activeCard = track.children.item(slide) as HTMLElement | null;
      if (activeCard) setSlideOffset(activeCard.offsetLeft);
    };
    updateOffset();

    const resizeObserver = new ResizeObserver(updateOffset);
    resizeObserver.observe(track);
    if (track.parentElement) resizeObserver.observe(track.parentElement);

    return () => resizeObserver.disconnect();
  }, [slide]);

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('#industries .rv');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('#process .rv');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);
    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (csPaused || reducedMotion) return;
    const interval = window.setInterval(() => {
      setCs((current) => (current === CASES.length - 1 ? 0 : current + 1));
    }, 5000);
    return () => window.clearInterval(interval);
  }, [cs, csPaused, reducedMotion]);

  useEffect(() => {
    const track = csTrackRef.current;
    if (!track) return;

    const updateOffset = () => {
      const activeCard = track.children.item(cs) as HTMLElement | null;
      if (activeCard) setCsOffset(activeCard.offsetLeft);
    };
    updateOffset();

    const resizeObserver = new ResizeObserver(updateOffset);
    resizeObserver.observe(track);
    if (track.parentElement) resizeObserver.observe(track.parentElement);
    return () => resizeObserver.disconnect();
  }, [cs]);

  return (
    <>

{/* ═══ HERO — full-bleed skyline background ═══ */}
<section id="hero">
  <div className="hero-bg" aria-hidden="true"></div>
  <div className="hero-shade" aria-hidden="true"></div>
  <div className="container hero-wrap">
    <div className="hero-inner">
      <h1 className="hero-title">
        <span className="hero-title-dim">Advisory built for</span>
        <span className="hero-title-main">regulated businesses.</span>
      </h1>
      <p className="hero-sub">Compliance starts with intelligence &ndash; practical, sharp, and regulator-ready. We apply it to what matters most: AML/CFT, accounting, IT, governance, and operations for financial institutions, NBFCs, FinTechs, and MSBs across Pakistan, the GCC, and international markets.</p>
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
</section>
 

{/* ABOUT — BearingPoint style */}
<section className="z1" id="about">
  <div className="container">
    <div className="row g-5 align-items-start about-top">
      <div className="col-lg-6" data-aos="fade-up">
        <h2 className="about-heading">Practical advisory for regulated &amp; growing organisations</h2>
      </div>
      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
        <p className="about-text">LuminaryNexus Consultants provides specialist compliance, accounting, technology, governance, and business support services across Pakistan and international markets. Our approach is direct: understand the business, find the risks, build controls that hold up, and support growth that lasts.</p>
        <a href="/about" className="about-link">Get to know us <i className="bi bi-arrow-right"></i></a>
      </div>
    </div>
  </div>
</section>
<div className="divider-gold"></div>

{/* SERVICES — carousel */}
<section className="z1" id="services">
  <div className="container">
    <div className="svc-head">
      <div>
        <span className="bp-label">What we deliver</span>
        <h2 className="svc-title">Six core service areas</h2>
      </div>
      <a href="/services" className="about-link">All services <i className="bi bi-arrow-right"></i></a>
    </div>

    <div className="svc-viewport">
      <div
        className="svc-track"
        ref={trackRef}
        style={{ transform: `translateX(-${slideOffset}px)` }}
      >
        {SERVICES.map((service, index) => (
          <article className={`svc-card${index === slide ? ' is-active' : ''}`} key={service.title} aria-hidden={index !== slide}>
            <div className={`svc-img${index === 1 ? ' svc-img-audit' : ''}`}><img src={service.img} alt="" loading="lazy" /></div>
            <div className="svc-body">
              <div>
                <h3 className="svc-card-title">{service.title}</h3>
                <p className="svc-card-text">{service.text}</p>
              </div>
              <a href={service.href} className="svc-btn" tabIndex={index === slide ? 0 : -1}>Read more</a>
            </div>
          </article>
        ))}
      </div>
    </div>

    <div className="svc-nav" aria-label="Services carousel controls">
      <button type="button" className="svc-arrow" onClick={prev} aria-label="Previous service"><i className="bi bi-chevron-left"></i></button>
      {SERVICES.map((service, index) => (
        <button
          type="button"
          key={service.title}
          className={`svc-dot${index === slide ? ' on' : ''}`}
          onClick={() => setSlide(index)}
          aria-label={`Go to ${service.title}`}
          aria-current={index === slide ? 'true' : undefined}
        />
      ))}
      <button type="button" className="svc-arrow" onClick={next} aria-label="Next service"><i className="bi bi-chevron-right"></i></button>
    </div>
  </div>
</section>

{/* STATS — white background */}
<section id="stats" className="home-stats">
  <div className="container">
    <div className="row g-0">
      <div className="col-6 col-md-3 stat-block" data-aos="fade-up"><span className="snum" data-counter data-target="100" data-suffix="+">0</span><div className="slbl">Clients Supported</div></div>
      <div className="col-6 col-md-3 stat-block" data-aos="fade-up" data-aos-delay="80"><span className="snum" data-counter data-target="30" data-suffix="+">0</span><div className="slbl">Regulatory Frameworks</div></div>
      <div className="col-6 col-md-3 stat-block" data-aos="fade-up" data-aos-delay="160"><span className="snum" data-counter data-target="6" data-suffix="">0</span><div className="slbl">Core Service Areas</div></div>
      <div className="col-6 col-md-3 stat-block" data-aos="fade-up" data-aos-delay="240"><span className="snum" data-counter data-target="15" data-suffix="+">0</span><div className="slbl">Years Combined Expertise</div></div>
    </div>
  </div>
</section>

{/* WHY — team photo above a five-column navy panel */}
<section id="why" className="why-section">
  <div className="why-hero">
    <img
      className="why-hero-image"
      src="/why-bg.png"
      alt="Team collaborating"
      loading="lazy"
    />
    <div className="why-mobile-overlay" aria-hidden="true"></div>
    <div className="why-hero-inner">
      <div className="why-intro">
        <div className="why-eyebrow">
          <span aria-hidden="true"></span>
          <span>Why LuminaryNexus</span>
        </div>
        <h2>What makes us<br /><span>different</span></h2>
        <p>One advisory model spanning compliance, operations, accounting, governance, and IT — so your teams don't manage multiple fragmented relationships.</p>
        <Link href="/contact" className="why-cta">
          Book a Consultation <i className="bi bi-arrow-right" aria-hidden="true"></i>
        </Link>
      </div>
    </div>
  </div>
  <div className="why-points-panel">
    <div className="why-points">
      {WHY.map(({ icon, title, text }, index) => (
        <article className="why-point" key={title}>
          <i className={`bi ${icon} why-point-icon`} aria-hidden="true"></i>
          <p className="why-point-number">{String(index + 1).padStart(2, '0')}</p>
          <h3>{title}</h3>
          <p className="why-point-text">{text}</p>
        </article>
      ))}
    </div>
  </div>
</section>
<div className="divider"></div>
<OurLeaders />

{/* INDUSTRIES — image cards */}
<section className="z1" id="industries">
  <div className="container">
    <div className="ind-head">
      <span className="bp-label rv">Who we serve</span>
      <h2 className="svc-title rv" style={{ transitionDelay: '.1s' }}>Built for regulated industries</h2>
    </div>
  </div>

  <div className="ind-marquee" role="region" aria-label="Industries we serve" tabIndex={0}>
    <div className="ind-track">
      {[...INDUSTRIES, ...INDUSTRIES].map((industry, index) => {
        const isDuplicate = index >= INDUSTRIES.length;
        return (
          <a
            href="/industries"
            className="ind-card"
            key={`${industry.title}-${index}`}
            aria-hidden={isDuplicate}
            tabIndex={isDuplicate ? -1 : undefined}
          >
            <div className="ind-bg" style={{ backgroundImage: `url(${industry.img})` }}></div>
            <div className="ind-shade"></div>
            <div className="ind-content">
              <div className="ind-ico"><i className={`bi ${industry.icon}`} aria-hidden="true"></i></div>
              <div>
                <h3 className="ind-title">{industry.title}</h3>
                <p className="ind-desc">{industry.desc}</p>
              </div>
              <i className="bi bi-arrow-right ind-arrow" aria-hidden="true"></i>
            </div>
          </a>
        );
      })}
    </div>
  </div>
</section>

{/* SPECIALIST COVERAGE — scrolling banner */}
<section className="z1" id="tech">
  <div className="container text-center">
    <span className="bp-label">Specialist coverage</span>
    <h2 className="svc-title mx-auto" style={{ maxWidth: 800 }}>Sector-specific support</h2>
    <p className="tech-sub">We provide specialised advisory across every compliance, operational, and governance dimension that regulated financial businesses face.</p>
  </div>

  <div className="pill-marquee" role="region" aria-label="Specialist coverage">
    <div className="pill-track pill-left">
      {[...ROW_A, ...ROW_A, ...ROW_A, ...ROW_A].map((pill, index) => {
        const isDuplicate = index >= ROW_A.length;
        return (
          <div className="pill" key={`a-${index}`} aria-hidden={isDuplicate}>
            <span className="pill-ico">{pill.ico}</span>
            <span className="pill-name">{pill.name}</span>
          </div>
        );
      })}
    </div>
  </div>

  <div className="pill-marquee" role="region" aria-label="Additional specialist coverage">
    <div className="pill-track pill-right">
      {[...ROW_B, ...ROW_B, ...ROW_B, ...ROW_B].map((pill, index) => {
        const isDuplicate = index >= ROW_B.length;
        return (
          <div className="pill" key={`b-${index}`} aria-hidden={isDuplicate}>
            <span className="pill-ico">{pill.ico}</span>
            <span className="pill-name">{pill.name}</span>
          </div>
        );
      })}
    </div>
  </div>

  <div className="container text-center" style={{ marginTop: 48 }}>
    <a href="/services" className="about-link">All service areas <i className="bi bi-arrow-right"></i></a>
  </div>
</section>

{/* CASE STUDIES — auto carousel */}
<section className="sec z1 home-case-carousel" id="portfolio">
  <div className="container">
    <div className="cs-head">
      <div>
        <span className="bp-label">Our work</span>
        <h2 className="svc-title">Client stories, led by impact</h2>
        <p className="cs-sub">Explore proof in practice.</p>
      </div>
      <a href="/portfolio" className="svc-btn">Show all</a>
    </div>

    <div
      className="svc-viewport"
      onMouseEnter={() => setCsPaused(true)}
      onMouseLeave={() => setCsPaused(false)}
      onFocusCapture={() => setCsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setCsPaused(false);
      }}
    >
      <div className="svc-track" ref={csTrackRef} style={{ transform: `translateX(-${csOffset}px)` }}>
        {CASES.map((item, index) => (
          <article className={`svc-card${index === cs ? ' is-active' : ''}`} key={item.title} aria-hidden={index !== cs}>
            <div className="svc-img"><img src={item.img} alt={item.title} loading="lazy" /></div>
            <div className="svc-body">
              <div>
                <div className="cs-tag">{item.tag}</div>
                <h3 className="svc-card-title">{item.title}</h3>
                <p className="svc-card-text">{item.text}</p>
                <div className="cs-pills">
                  {item.pills.map((pill) => <span className="tag-pill" key={pill}>{pill}</span>)}
                </div>
              </div>
              <a href="/contact" className="svc-btn" tabIndex={index === cs ? 0 : -1}>Read more</a>
            </div>
          </article>
        ))}
      </div>
    </div>

    <div className="svc-nav" aria-label="Case study carousel controls">
      <button type="button" className="svc-arrow" onClick={csPrev} aria-label="Previous case study"><i className="bi bi-chevron-left"></i></button>
      {CASES.map((item, index) => (
        <button
          type="button"
          key={item.title}
          className={`svc-dot${index === cs ? ' on' : ''}`}
          onClick={() => setCs(index)}
          aria-label={`Go to ${item.title}`}
          aria-current={index === cs ? 'true' : undefined}
        />
      ))}
      <button type="button" className="svc-arrow" onClick={csNext} aria-label="Next case study"><i className="bi bi-chevron-right"></i></button>
    </div>
  </div>
</section>

{/* PROCESS — circles on image background */}
<section id="process">
  <div className="proc-overlay" aria-hidden="true"></div>
  <div className="container proc-wrap">
    <div className="text-center">
      <span className="bp-label proc-label rv">How we work</span>
      <h2 className="proc-title rv" style={{ transitionDelay: '.1s' }}>Our advisory process</h2>
      <p className="proc-sub rv" style={{ transitionDelay: '.2s' }}>A structured approach that delivers practical, regulator-ready outcomes for every engagement.</p>
    </div>

    <div className="proc-grid">
      {STEPS.map((step, index) => (
        <div className="proc-step rv" key={step.title} style={{ ['--step-delay' as string]: `${index * 0.18}s`, transitionDelay: `${index * 0.18}s` }}>
          <div className="proc-circle">
            <i className={`bi ${step.icon}`} aria-hidden="true"></i>
            <span className="proc-badge">{String(index + 1).padStart(2, '0')}</span>
          </div>
          <h3 className="proc-step-title">{step.title}</h3>
          <p className="proc-step-text">{step.text}</p>
        </div>
      ))}
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
        <p className="ssub">Have a question not answered here? <a href="/contact" style={{color: 'var(--gold)'}}>Send us a message</a> — we respond within 24 hours.</p>
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
