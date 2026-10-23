import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    document.title = "Contact LuminaryNexus Consultants – Book a Free AML/CFT & Compliance Consultation | Islamabad";
  }, []);

  return (
    <>

{/* PAGE HERO */}
<section className="phero" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1400&q=80\')'}}>
  <div className="phero-accent"></div>
  <div className="container phero-inner">
    <nav aria-label="breadcrumb" className="mb-4"><ol className="breadcrumb"><li className="breadcrumb-item"><a href="/">Home</a></li><li className="breadcrumb-item active">Contact</li></ol></nav>
    <span className="label">Let's Talk</span>
    <h1 className="hero-title mt-3">Book a Free <span className="gtxt">Consultation</span></h1>
    <p className="hero-sub">No sales scripts. No pressure. Just an honest conversation about your organisation, your challenges, and how we can help — with practical, regulator-ready advice. We work with clients across Pakistan, the GCC, Middle East, and international markets.</p>
  </div>
</section>
<div className="divider"></div>

{/* HOW IT WORKS */}
<section className="sec bg-w z1" id="contact-process">
  <div className="container">
    <div className="row justify-content-center text-center mb-5">
      <div className="col-lg-6" data-aos="fade-up">
        <span className="label">How It Works</span>
        <h2 className="stitle">What Happens <span className="gtxt">Next</span></h2>
      </div>
    </div>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      <div className="col" data-aos="fade-up" data-aos-delay="0">
        <div className="wcard text-center">
          <div style={{width: '48px', height: '48px', borderRadius: '50%', background: 'var(--g-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--fh)', fontWeight: '800', color: '#fff', margin: '0 auto 16px', fontSize: '1.1rem', boxShadow: 'var(--sh-glow)'}}>1</div>
          <h5 className="ctitle">You Reach Out</h5>
          <p className="ctext" style={{WebkitLineClamp: 'unset'}}>Fill in the form below with your organisation details and what you need. The more context, the better our initial advice.</p>
        </div>
      </div>
      <div className="col" data-aos="fade-up" data-aos-delay="70">
        <div className="wcard text-center">
          <div style={{width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg,#10193f,#16204a)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--fh)', fontWeight: '800', color: '#fff', margin: '0 auto 16px', fontSize: '1.1rem', boxShadow: '0 6px 20px rgba(16,25,63,.3)'}}>2</div>
          <h5 className="ctitle">We Review &amp; Match</h5>
          <p className="ctext" style={{WebkitLineClamp: 'unset'}}>Our team reviews your requirements and assigns the right specialist — compliance, accounting, IT, or governance — within one business day.</p>
        </div>
      </div>
      <div className="col" data-aos="fade-up" data-aos-delay="140">
        <div className="wcard text-center">
          <div style={{width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg,#0745fc,#2f6bff)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--fh)', fontWeight: '800', color: '#fff', margin: '0 auto 16px', fontSize: '1.1rem', boxShadow: 'var(--sh-glow)'}}>3</div>
          <h5 className="ctitle">Discovery Call</h5>
          <p className="ctext" style={{WebkitLineClamp: 'unset'}}>A focused 45-minute consultation to understand your organisation, identify your priorities, and discuss how we can help — zero commitment required.</p>
        </div>
      </div>
      <div className="col" data-aos="fade-up" data-aos-delay="210">
        <div className="wcard text-center">
          <div style={{width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg,#16204a,#10193f)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--fh)', fontWeight: '800', color: '#fff', margin: '0 auto 16px', fontSize: '1.1rem', boxShadow: '0 6px 20px rgba(16,25,63,.3)'}}>4</div>
          <h5 className="ctitle">Your Engagement Proposal</h5>
          <p className="ctext" style={{WebkitLineClamp: 'unset'}}>We put together a clear engagement proposal — scope, approach, timeline, and fee — written plainly and matched to what your organisation actually needs.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* CONTACT FORM + INFO */}
<section className="sec bg-g z1" id="contact-form-sec">
  <div className="container">
    <div className="row g-5">
      {/* FORM */}
      <div className="col-lg-7" data-aos="fade-right">
        <div className="contact-panel">
          <h3 className="mb-1" style={{fontSize: '1.5rem'}}>Tell Us About Your Organisation</h3>
          <p style={{color: 'var(--tx3)', fontSize: '.86rem', marginBottom: '28px'}}>We respond within one business day. For urgent matters, please call us directly.</p>
          <form id="contact-form">
            <div className="row g-3">
              <div className="col-md-6">
                <label className="flabel">Full Name *</label>
                <input type="text" className="finput" placeholder="Ahmed Ali" required/>
              </div>
              <div className="col-md-6">
                <label className="flabel">Organisation *</label>
                <input type="text" className="finput" placeholder="Your Company / Institution" required/>
              </div>
              <div className="col-md-6">
                <label className="flabel">Work Email *</label>
                <input type="email" className="finput" placeholder="ahmed@organisation.com" required/>
              </div>
              <div className="col-md-6">
                <label className="flabel">Phone</label>
                <input type="tel" className="finput" placeholder="+92 300 0000000"/>
              </div>
              <div className="col-md-6">
                <label className="flabel">Organisation Type</label>
                <select className="fselect">
                  <option value="">— Select —</option>
                  <option>Commercial Bank</option>
                  <option>Microfinance Bank</option>
                  <option>NBFC</option>
                  <option>FinTech Company</option>
                  <option>Money Service Business</option>
                  <option>Digital Lending Platform</option>
                  <option>Investment / Asset Management</option>
                  <option>Insurance / Takaful</option>
                  <option>Corporate Group</option>
                  <option>Startup / Growth Company</option>
                  <option>Other Regulated Business</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="flabel">Preferred Engagement</label>
                <select className="fselect">
                  <option value="">— Optional —</option>
                  <option>Project / One-off Engagement</option>
                  <option>Retainer / Ongoing Support</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div className="col-12">
                <label className="flabel">Service Area(s) Needed *</label>
                <select className="fselect" required>
                  <option value="">— Select Primary Service —</option>
                  <option>Compliance &amp; AML/CFT Advisory</option>
                  <option>Audit, Assurance &amp; Internal Control</option>
                  <option>Accounting &amp; Financial Management</option>
                  <option>IT, Software &amp; Cybersecurity</option>
                  <option>Operations Support</option>
                  <option>Governance &amp; Board Advisory</option>
                  <option>Multiple / Integrated Advisory</option>
                  <option>General Consultation</option>
                </select>
              </div>
              <div className="col-12">
                <label className="flabel">Tell us what you need *</label>
                <textarea className="finput" rows={5} placeholder="Describe your organisation's situation, what you need support with, any upcoming regulatory deadlines or examinations, and what a successful outcome looks like for you..." required></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn-grad w-100 justify-content-center" style={{padding: '15px', fontSize: '.97rem'}}>
                  <i className="bi bi-send-fill"></i>Send Message — We Respond Within 1 Business Day
                </button>
              </div>
              <div className="col-12 text-center">
                <p style={{fontSize: '.73rem', color: 'var(--tx4)', margin: '0'}}>🔒 Your information is strictly confidential. We sign NDAs before any substantive technical discussion.</p>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* INFO */}
      <div className="col-lg-5" data-aos="fade-left">
        <div className="ccontact mb-4">
          <h5 className="mb-4" style={{fontSize: '1.05rem'}}>Get in Touch</h5>
          <div className="cinfo-item">
            <div className="cico i-b"><i className="bi bi-envelope-fill"></i></div>
            <div><h6>Email</h6><p><a href="mailto:hello@luminarynexusconsultants.com" style={{color: 'var(--p1)'}}>hello@luminarynexusconsultants.com</a></p></div>
          </div>
          <div className="cinfo-item">
            <div className="cico i-t"><i className="bi bi-envelope-fill"></i></div>
            <div><h6>AML/CFT Enquiries</h6><p><a href="mailto:compliance@luminarynexusconsultants.com" style={{color: 'var(--p1)'}}>compliance@luminarynexusconsultants.com</a></p></div>
          </div>
          <div className="cinfo-item">
            <div className="cico i-v"><i className="bi bi-telephone-fill"></i></div>
            <div><h6>Phone</h6><p><a href="tel:+92000000000" style={{color: 'var(--p1)'}}>+92 (0) 000 000 0000</a></p></div>
          </div>
          <div className="cinfo-item">
            <div className="cico i-o"><i className="bi bi-geo-alt-fill"></i></div>
            <div><h6>Office</h6><p>2nd Floor, Eagle Plaza<br/>Blue Area, Islamabad, Pakistan<br/><small style={{color: 'var(--ink-3)'}}>Remote engagements available — Pakistan, GCC &amp; internationally</small></p></div>
          </div>
          <div className="cinfo-item">
            <div className="cico i-y"><i className="bi bi-clock-fill"></i></div>
            <div><h6>Business Hours</h6><p>Mon–Fri: 9:00 AM – 6:00 PM PKT<br/><small style={{color: 'var(--gold)'}}>Urgent support available for retainer clients</small></p></div>
          </div>
        </div>

        {/* Google Map */}
        <div className="map-embed mt-3">
          <iframe src="https://maps.google.com/maps?q=Eagle+Plaza,+Blue+Area,+Islamabad,+Pakistan&output=embed&z=16" width="100%" height="220" style={{border: '1px solid var(--rule)', display: 'block', filter: 'grayscale(20%)'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="LuminaryNexus Consultants Office – Eagle Plaza, Blue Area, Islamabad" aria-label="Map showing LuminaryNexus Consultants office at Eagle Plaza, Blue Area, Islamabad">
          </iframe>
          <p style={{fontSize: '.72rem', color: 'var(--ink-3)', marginTop: '6px', fontFamily: 'var(--fbod)'}}><i className="bi bi-geo-alt-fill" style={{color: 'var(--gold)', marginRight: '4px'}}></i>2nd Floor, Eagle Plaza, Blue Area, Islamabad, Pakistan</p>
        </div>

        <div className="contact-panel">
          <h5 className="mb-3" style={{fontSize: '1.05rem'}}>What We Need From You</h5>
          <p style={{fontSize: '.85rem', color: 'var(--tx3)', marginBottom: '16px', lineHeight: '1.7'}}>To make the most of your consultation, it helps if you can share:</p>
          <ul className="chk">
            <li><span className="chk-ico"></span>Your organisation type and regulatory status</li>
            <li><span className="chk-ico"></span>The main challenge or gap you need addressed</li>
            <li><span className="chk-ico"></span>Any upcoming deadlines — regulatory, audit, or licensing</li>
            <li><span className="chk-ico"></span>Whether you need a one-off project or ongoing support</li>
            <li><span className="chk-ico"></span>What success looks like for your organisation</li>
          </ul>
          <div className="mt-4 p-3" style={{background: 'rgba(7,69,252,.07)', border: '1px solid rgba(7,69,252,.15)', borderRadius: 'var(--r)'}}>
            <p style={{fontSize: '.82rem', color: 'var(--tx2)', margin: '0', lineHeight: '1.7'}}><strong style={{color: 'var(--p1)'}}>Confidentiality:</strong> We sign mutual NDAs before any substantive discussion of your organisation's compliance position, internal processes, or business plans.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* FAQ */}
<section className="sec bg-w z1" id="contact-faq">
  <div className="container">
    <div className="row justify-content-center text-center mb-5">
      <div className="col-lg-6" data-aos="fade-up">
        <span className="label">FAQ</span>
        <h2 className="stitle">Common <span className="gtxt">Questions</span></h2>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-8" data-aos="fade-up">
        <div className="fitem"><div className="fq"><span className="fq-text">Is the initial consultation genuinely free with no obligation?</span><div className="ftog"><i className="bi bi-plus"></i></div></div><div className="fans"><div className="fans-in">Yes, completely. The first consultation is a genuine conversation — we listen to your situation, ask clarifying questions, and give you our honest view on what you need. There is no sales pitch, no obligation, and no invoice. If we can help and you would like to work together, we will propose a structured engagement.</div></div></div>
        <div className="fitem"><div className="fq"><span className="fq-text">Do you sign NDAs before discussing our compliance or financial position?</span><div className="ftog"><i className="bi bi-plus"></i></div></div><div className="fans"><div className="fans-in">Yes, always. We sign mutual NDAs before any substantive discussion involving your organisation's compliance position, internal frameworks, financial data, or business plans. This is standard practice for all our engagements.</div></div></div>
        <div className="fitem"><div className="fq"><span className="fq-text">How quickly can you start work?</span><div className="ftog"><i className="bi bi-plus"></i></div></div><div className="fans"><div className="fans-in">For urgent engagements — such as regulatory inspection preparation or licensing deadlines — we can typically mobilise within 24–48 hours. For standard project and retainer engagements, we usually begin within one to two weeks of agreeing scope and terms.</div></div></div>
        <div className="fitem"><div className="fq"><span className="fq-text">Can you provide support remotely?</span><div className="ftog"><i className="bi bi-plus"></i></div></div><div className="fans"><div className="fans-in">Yes. Most of our advisory work is delivered remotely — documentation, policies, frameworks, reports, and training can all be delivered online. Where on-site presence is required, such as for inspection preparation workshops or internal audit fieldwork, we can arrange visits within Pakistan.</div></div></div>
        <div className="fitem"><div className="fq"><span className="fq-text">What does a typical retainer arrangement look like?</span><div className="ftog"><i className="bi bi-plus"></i></div></div><div className="fans"><div className="fans-in">Retainer arrangements are structured around your specific needs. A typical retainer might cover ongoing compliance monitoring, monthly management account preparation, quarterly board pack support, and ad-hoc regulatory advice — at an agreed monthly fee. The scope and pricing are agreed after the initial consultation based on what you actually need.</div></div></div>
        <div className="fitem"><div className="fq"><span className="fq-text">Do you work with startups that are not yet regulated?</span><div className="ftog"><i className="bi bi-plus"></i></div></div><div className="fans"><div className="fans-in">Yes. We work with pre-licensing startups building their compliance and governance infrastructure ahead of regulatory applications. Getting the frameworks right at the start is far more efficient than correcting them post-licensing under regulatory scrutiny.</div></div></div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
