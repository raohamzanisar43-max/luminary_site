import { useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="navbar-inner w-100 d-flex align-items-center">
          <a className="navbar-brand me-4" href="/" aria-label="LuminaryNexus Consultants"><img src="/images/logo-processed.png" alt="" className="navbar-logo"/></a>
          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#nvmenu"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="nvmenu">
            <ul className="navbar-nav mx-auto gap-1">
              <li className="nav-item"><a className={`nav-link${isActive('/') ? ' active' : ''}`} href="/">Home</a></li>
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
              <li className="nav-item"><a className={`nav-link${isActive('/contact') ? ' active' : ''}`} href="/contact">Contact</a></li>
            </ul>
            <a href="/contact" className="nav-cta nav-link ms-lg-3">Book a Consultation</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
