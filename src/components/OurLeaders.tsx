'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const LEADERS = [
  {
    name: 'Moneeb Ali Jaffari',
    role: 'CEO & Founder',
    photo: '/images/leaders/moneeb.jpg',
    initials: 'MJ',
  },
  {
    name: 'Alex Morgan',
    role: 'Partner (Director)',
    photo: '/images/leaders/chen-wei.jpg',
    initials: 'CW',
  },
  {
    name: 'Fatima Nisar',
    role: 'Branch Head',
    photo: '/images/leaders/fatima.jpg',
    initials: 'FN',
  },
];

export default function OurLeaders() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.16 });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`our-leaders${isVisible ? ' is-visible' : ''}`}
      aria-labelledby="our-leaders-title"
    >
      <div className="our-leaders-inner">
        <div className="our-leaders-copy">
          <div className="why-eyebrow">
            <span aria-hidden="true"></span>
            <Link href="/about#leadership" className="our-team-link">Our Team</Link>
          </div>
          <h2 id="our-leaders-title">Our <span>Leaders</span></h2>
          <p className="our-leaders-lead">
            Experienced professionals who have worked inside regulated institutions.
          </p>
          <p className="our-leaders-description">
            Our leadership brings hands-on experience across compliance, accounting,
            governance, and IT, and stays closely involved in every engagement from
            first conversation to final deliverable.
          </p>
          <Link href="/about" className="our-leaders-link">
            View More <i className="bi bi-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>

        <div className="our-leaders-grid">
          {LEADERS.map((leader) => (
            <article className="leader-card" key={leader.name}>
              <div className="leader-card-placeholder" aria-hidden="true">{leader.initials}</div>
              <img
                src={leader.photo}
                alt={leader.name}
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.hidden = true;
                }}
              />
              <div className="leader-card-fade" aria-hidden="true"></div>
              <div className="leader-card-info">
                <span aria-hidden="true"></span>
                <h3>{leader.name}</h3>
                <p>{leader.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
