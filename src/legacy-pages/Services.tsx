 'use client';

import { useEffect } from 'react';
import Link from 'next/link';

type ServiceItem = {
  icon: string;
  label: string;
};

type Service = {
  id: string;
  title: string;
  text: string;
  image: string;
  icon: string;
  imagePosition?: string;
  accent?: 'gold';
  bubble?: 'solid';
  tagline?: string;
  items: ServiceItem[];
};

const SERVICES: Service[] = [
  {
    id: 'compliance',
    title: 'Compliance & AML/CFT Advisory',
    text: 'We help organisations build strong, regulator-ready compliance and AML/CFT frameworks aligned with local and international regulatory expectations.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=80',
    icon: 'bi-shield-check',
    items: [
      { icon: 'bi-file-earmark-check', label: 'Regulatory Compliance' },
      { icon: 'bi-shield-lock', label: 'AML/CFT Frameworks' },
      { icon: 'bi-person-check', label: 'KYC / CDD / EDD' },
      { icon: 'bi-display', label: 'Transaction Monitoring' },
      { icon: 'bi-globe2', label: 'Sanctions Screening' },
      { icon: 'bi-exclamation-triangle', label: 'Risk Assessments' },
      { icon: 'bi-mortarboard', label: 'Compliance Training' },
    ],
  },
  {
    id: 'audit',
    title: 'Audit, Assurance & Internal Control',
    text: 'We support organisations in strengthening governance, controls, and accountability through independent reviews and assurance services.',
    image: '/images/audit-assurance.jpg',
    imagePosition: '50% 65%',
    icon: 'bi-clipboard-check',
    items: [
      { icon: 'bi-clipboard-check', label: 'Internal Audits' },
      { icon: 'bi-search', label: 'Compliance Reviews' },
      { icon: 'bi-shield-check', label: 'Control Testing' },
      { icon: 'bi-bank', label: 'Inspection Preparation' },
      { icon: 'bi-file-earmark-text', label: 'Policy Review' },
      { icon: 'bi-bar-chart', label: 'Management Reporting' },
    ],
  },
  {
    id: 'accounting',
    title: 'Accounting & Financial Management',
    text: 'We provide reliable accounting and financial management support to help businesses maintain accurate records, meet statutory obligations, and make informed decisions.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=80',
    icon: 'bi-calculator',
    items: [
      { icon: 'bi-journal-text', label: 'Bookkeeping' },
      { icon: 'bi-file-earmark-bar-graph', label: 'Financial Reporting' },
      { icon: 'bi-receipt', label: 'Tax Planning & Preparation' },
      { icon: 'bi-people', label: 'Payroll Services' },
      { icon: 'bi-arrow-left-right', label: 'Accounts Receivable & Payable' },
      { icon: 'bi-clipboard-check', label: 'Audit Preparation' },
    ],
  },
  {
    id: 'it-services',
    title: 'IT, Software & Cybersecurity',
    text: 'We support businesses in building secure, scalable, and technology-enabled operations — from IT strategy through to FinTech platform development and cybersecurity controls.',
    image: '/images/it-cybersecurity.png',
    icon: 'bi-lock',
    items: [
      { icon: 'bi-compass', label: 'IT Strategy' },
      { icon: 'bi-code-slash', label: 'Custom Software Development' },
      { icon: 'bi-bank', label: 'FinTech Platform Development' },
      { icon: 'bi-shield-lock', label: 'Cybersecurity' },
      { icon: 'bi-server', label: 'IT Infrastructure' },
      { icon: 'bi-lock', label: 'Data Protection Controls' },
    ],
  },
  {
    id: 'operations',
    title: 'Operations Support',
    text: 'We help businesses improve operational efficiency, strengthen internal processes, and build scalable operating models — from SOPs and governance structures to vendor management and business continuity.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1400&q=80',
    icon: 'bi-diagram-3',
    items: [
      { icon: 'bi-diagram-2', label: 'Business Process Design' },
      { icon: 'bi-diagram-3', label: 'Operational Governance' },
      { icon: 'bi-speedometer2', label: 'MIS & KPI Reporting' },
      { icon: 'bi-shield-exclamation', label: 'Business Continuity' },
      { icon: 'bi-people', label: 'Vendor Management' },
      { icon: 'bi-file-earmark-text', label: 'SOPs & Onboarding Support' },
    ],
  },
  {
    id: 'governance',
    title: 'Governance & Board Advisory',
    text: 'Corporate governance frameworks, board charters, committee TORs, board packs, resolutions, minutes, and regulatory documentation.',
    image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1400&q=80',
    icon: 'bi-bank',
    accent: 'gold',
    bubble: 'solid',
    tagline: 'Better governance. Stronger tomorrow.',
    items: [
      { icon: 'bi-file-earmark-text', label: 'Corporate Governance Frameworks' },
      { icon: 'bi-people', label: 'Board Charters' },
      { icon: 'bi-people', label: 'Committee TORs' },
      { icon: 'bi-folder2-open', label: 'Board Packs' },
      { icon: 'bi-file-earmark-check', label: 'Resolutions' },
      { icon: 'bi-clock-history', label: 'Minutes' },
      { icon: 'bi-shield-check', label: 'Regulatory Documentation' },
    ],
  },
];

const IMAGE_FADE = 'linear-gradient(to right, transparent 0%, rgba(0,0,0,.5) 22%, #000 48%)';

function ServiceSection({ service, index }: { service: Service; index: number }) {
  return (
    <section id={service.id} className="service-feature">
      <img
        className={`service-feature-image${service.id === 'governance' ? ' service-feature-image-governance' : ''}`}
        src={service.image}
        alt=""
        loading={index < 2 ? 'eager' : 'lazy'}
        style={{
          objectPosition: service.imagePosition ?? 'center',
          WebkitMaskImage: IMAGE_FADE,
          maskImage: IMAGE_FADE,
        }}
      />
      <div className="service-feature-overlay" aria-hidden="true"></div>
      <div className="service-feature-inner">
        <div className="service-feature-copy">
          <i className={`bi ${service.icon} service-feature-icon${service.accent === 'gold' ? ' is-gold' : ''}`} aria-hidden="true"></i>
          <h2>{service.title}</h2>
          <p className="service-feature-description">{service.text}</p>
          <ul className="service-feature-items">
            {service.items.map((item) => (
              <li key={item.label}>
                <span className={`service-feature-item-icon${service.bubble === 'solid' ? ' is-solid' : ''}`}>
                  <i className={`bi ${item.icon}`} aria-hidden="true"></i>
                </span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
          {service.tagline && (
            <div className="service-feature-tagline">
              <span aria-hidden="true"></span>
              <p>{service.tagline}</p>
            </div>
          )}
          <Link href="/contact" className="service-feature-link">Read more</Link>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  useEffect(() => {
    document.title = 'Services – AML/CFT Compliance, Audit, Accounting, IT & Governance Advisory | LuminaryNexus Consultants';
  }, []);

  return (
    <>
      <section className="phero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&q=80')" }}>
        <div className="phero-accent"></div>
        <div className="container phero-inner">
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active">Services</li>
            </ol>
          </nav>
          <span className="label">What We Deliver</span>
          <h1 className="hero-title mt-3">6 Core Service <span className="gtxt">Areas</span></h1>
          <p className="hero-sub">Compliance, AML/CFT, audit, accounting, technology, governance, and operations support — delivered as one integrated advisory model for regulated and growth-focused organisations. Tell us what you need and we will advise on the right approach.</p>
        </div>
      </section>
      <div className="divider"></div>

      {SERVICES.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}

      <section id="cta-banner" className="z1">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-7" data-aos="zoom-in">
              <h2 className="stitle">Not Sure Where to Start?</h2>
              <p className="ssub mx-auto mb-5">That is exactly what consultations are for. Book a free call with one of our advisors — we will help identify your priorities and advise on the best approach for your organisation.</p>
              <a href="/contact" className="btn-primary"><i className="bi bi-calendar-check"></i>Book a Free Consultation</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
