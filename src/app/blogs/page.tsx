import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blogs & Insights',
  description: 'Practical AML/CFT, compliance, governance, accounting, and regulatory insights from LuminaryNexus Consultants.',
  alternates: { canonical: '/blogs' },
};

const posts = [
  {
    title: 'Building an AML/CFT Framework That Works in Practice',
    category: 'Compliance & AML/CFT',
    date: 'October 22, 2026',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80',
    excerpt: 'A practical guide to turning policies, customer due diligence, transaction monitoring, and training into one working compliance programme.',
  },
  {
    title: 'What Regulators Expect from Board Governance',
    category: 'Governance',
    date: 'October 15, 2026',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&q=80',
    excerpt: 'The governance documents, committee responsibilities, reporting lines, and evidence that help regulated businesses stay inspection-ready.',
  },
  {
    title: 'Regulatory Readiness for Growing FinTechs',
    category: 'FinTech Advisory',
    date: 'October 8, 2026',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&q=80',
    excerpt: 'How fast-growing digital finance businesses can build controls, reporting, and accountability without slowing down growth.',
  },
];

export default function BlogsPage() {
  return (
    <main>
      <section
        className="phero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80')" }}
      >
        <div className="phero-accent" />
        <div className="container phero-inner">
          <nav aria-label="breadcrumb" className="mb-4"><ol className="breadcrumb"><li className="breadcrumb-item"><Link href="/">Home</Link></li><li className="breadcrumb-item active">Blogs</li></ol></nav>
          <span className="label">Insights &amp; Guidance</span>
          <h1 className="hero-title mt-3">Practical Thinking for <span className="gtxt">Regulated Businesses.</span></h1>
          <p className="hero-sub">Clear, useful perspectives on compliance, AML/CFT, governance, accounting, technology, and operations.</p>
        </div>
      </section>
      <section className="sec z1 blog-section">
        <div className="container">
          <div className="row justify-content-center text-center mb-5"><div className="col-lg-7"><span className="label">Latest Insights</span><h2 className="stitle">Knowledge That <span className="gtxt">Moves You Forward</span></h2></div></div>
          <div className="blog-grid">
            {posts.map((post) => (
              <article className="blog-card" key={post.title}>
                <div className="blog-card-image"><Image src={post.image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" /></div>
                <div className="blog-card-body"><span className="blog-category">{post.category}</span><div className="blog-date">{post.date}</div><h2>{post.title}</h2><p>{post.excerpt}</p><Link href="/contact" className="about-link">Discuss this with us <i className="bi bi-arrow-right" /></Link></div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
