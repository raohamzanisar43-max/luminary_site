'use client';

import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <div className="navbar-inner w-100 d-flex align-items-center">
          <a className="navbar-brand" href="/" aria-label="Luminary Nexus Consultants">
            <span className="brand-text">Luminary Nexus Consultants</span>
            <img src="/images/logo.png" alt="" className="navbar-logo brand-logo" />
          </a>
          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#nvmenu"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="nvmenu">
            <ul className="navbar-nav gap-0">
              <li className="nav-item"><a className={`nav-link${isActive('/about') ? ' active' : ''}`} href="/about">About</a></li>
              <li className="nav-item dropdown">
                <a className={`nav-link dropdown-toggle${isActive('/services') ? ' active' : ''}`} href="/services" data-bs-toggle="dropdown">Services</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/services#compliance">Compliance &amp; AML/CFT</a></li>
                  <li><a className="dropdown-item" href="/services#audit">Audit &amp; Assurance</a></li>
                  <li><a className="dropdown-item" href="/services#accounting">Accounting &amp; Finance</a></li>
                  <li><a className="dropdown-item" href="/services#it-services">IT &amp; Cybersecurity</a></li>
                  <li><a className="dropdown-item" href="/services#operations">Operations Support</a></li>
                  <li><a className="dropdown-item" href="/services#governance">Governance &amp; Board</a></li>
                </ul>
              </li>
              <li className="nav-item"><a className={`nav-link${isActive('/industries') ? ' active' : ''}`} href="/industries">Industries</a></li>
              <li className="nav-item"><a className={`nav-link${isActive('/portfolio') ? ' active' : ''}`} href="/portfolio">Case Studies</a></li>
              <li className="nav-item"><a className={`nav-link${isActive('/blogs') ? ' active' : ''}`} href="/blogs">Blogs</a></li>
              <li className="nav-item"><a className={`nav-link${isActive('/contact') ? ' active' : ''}`} href="/contact">Contact</a></li>
            </ul>
            <a href="/contact" className="nav-cta nav-link ms-lg-auto">Book a Consultation</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
