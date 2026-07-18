import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function SiteScripts() {
  useEffect(() => {
    // Bootstrap's JS bundle touches `document` at import time, so it must
    // only ever be loaded in the browser, never during SSR/prerender.
    import('bootstrap/dist/js/bootstrap.bundle.min');

    /* ── Preloader ── */
    const preloadTimeout = setTimeout(() => {
      const el = document.getElementById('preloader');
      if (el) {
        el.classList.add('hidden');
        setTimeout(() => el.remove(), 700);
      }
    }, 1300);

    /* ── Scroll progress ── */
    const sp = document.getElementById('sp');
    const onScrollProgress = () => {
      if (sp) {
        sp.style.width =
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100 + '%';
      }
    };
    if (sp) window.addEventListener('scroll', onScrollProgress);

    /* ── Navbar scroll ── */
    const nav = document.querySelector('.navbar');
    const onScrollNav = () => nav && nav.classList.toggle('scrolled', window.scrollY > 60);
    if (nav) window.addEventListener('scroll', onScrollNav);

    /* ── Counters ── */
    function animCtr(el: Element, tgt: number, sfx = '', dur = 1800) {
      let s: number | null = null;
      function step(ts: number) {
        if (s === null) s = ts;
        const p = Math.min((ts - s) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        (el as HTMLElement).textContent = Math.floor(e * tgt) + sfx;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    const cObs = new IntersectionObserver(
      (ens) => {
        ens.forEach((en) => {
          const target = en.target as HTMLElement;
          if (en.isIntersecting && !target.dataset.done) {
            target.dataset.done = '1';
            animCtr(target, +(target.dataset.target || '0'), target.dataset.suffix || '');
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll('[data-counter]').forEach((el) => cObs.observe(el));

    /* ── Subtle card reveal on scroll ── */
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('revealed');
            revealObs.unobserve(en.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    );
    document
      .querySelectorAll(
        '.card-editorial, .case-card, .why-item, .industry-item, .team-card, .val-card, .spec-item, .titem, .wcard'
      )
      .forEach((el) => {
        el.classList.add('reveal-ready');
        revealObs.observe(el);
      });

    /* ── FAQ accordion ── */
    const faqHandlers: Array<[Element, EventListener]> = [];
    document.querySelectorAll('.fq').forEach((btn) => {
      const handler = () => {
        const item = btn.closest('.fitem');
        if (!item) return;
        const was = item.classList.contains('open');
        document.querySelectorAll('.fitem.open').forEach((i) => i.classList.remove('open'));
        if (!was) item.classList.add('open');
      };
      btn.addEventListener('click', handler);
      faqHandlers.push([btn, handler]);
    });

    /* ── Portfolio filter ── */
    const pfHandlers: Array<[Element, EventListener]> = [];
    document.querySelectorAll('.pfbtn').forEach((btn) => {
      const handler = () => {
        document.querySelectorAll('.pfbtn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const f = (btn as HTMLElement).dataset.filter;
        document.querySelectorAll('.pcard').forEach((card) => {
          (card as HTMLElement).style.display =
            f === 'all' || (card as HTMLElement).dataset.cat === f ? '' : 'none';
        });
      };
      btn.addEventListener('click', handler);
      pfHandlers.push([btn, handler]);
    });

    /* ── Smooth scroll ── */
    const smoothHandlers: Array<[Element, EventListener]> = [];
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      const handler = function (this: Element, e: Event) {
        const href = this.getAttribute('href');
        if (!href) return;
        const t = document.querySelector(href);
        if (t) {
          e.preventDefault();
          t.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
      a.addEventListener('click', handler as EventListener);
      smoothHandlers.push([a, handler as EventListener]);
    });

    /* ── Contact form ── */
    const cf = document.getElementById('contact-form') as HTMLFormElement | null;
    const cfHandler = (e: Event) => {
      e.preventDefault();
      if (!cf) return;
      const btn = cf.querySelector('button[type="submit"]') as HTMLButtonElement;
      const orig = btn.innerHTML;
      btn.innerHTML = "✓ Message Received — We'll be in touch";
      btn.style.background = 'var(--slate)';
      btn.style.color = 'var(--gold)';
      btn.disabled = true;
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.style.background = '';
        btn.style.color = '';
        btn.disabled = false;
        cf.reset();
      }, 4000);
    };
    if (cf) cf.addEventListener('submit', cfHandler);

    /* ── Newsletter ── */
    const nf = document.getElementById('nl-form') as HTMLFormElement | null;
    const nfHandler = (e: Event) => {
      e.preventDefault();
      if (!nf) return;
      const btn = nf.querySelector('.nl-btn') as HTMLButtonElement;
      btn.textContent = '✓ Subscribed';
      setTimeout(() => {
        btn.textContent = 'Subscribe';
        nf.reset();
      }, 3000);
    };
    if (nf) nf.addEventListener('submit', nfHandler);

    const nff = document.getElementById('ft-nl-form') as HTMLFormElement | null;
    const nffHandler = (e: Event) => {
      e.preventDefault();
      if (!nff) return;
      const btn = nff.querySelector('.ft-sub-btn') as HTMLButtonElement;
      btn.textContent = '✓ Subscribed';
      setTimeout(() => {
        btn.innerHTML = '<i class="bi bi-send-fill"></i> Subscribe';
        nff.reset();
      }, 3000);
    };
    if (nff) nff.addEventListener('submit', nffHandler);

    /* ── AOS ── */
    AOS.init({ duration: 580, easing: 'ease', once: true, offset: 60 });

    return () => {
      clearTimeout(preloadTimeout);
      if (sp) window.removeEventListener('scroll', onScrollProgress);
      if (nav) window.removeEventListener('scroll', onScrollNav);
      faqHandlers.forEach(([el, h]) => el.removeEventListener('click', h));
      pfHandlers.forEach(([el, h]) => el.removeEventListener('click', h));
      smoothHandlers.forEach(([el, h]) => el.removeEventListener('click', h));
      if (cf) cf.removeEventListener('submit', cfHandler);
      if (nf) nf.removeEventListener('submit', nfHandler);
      if (nff) nff.removeEventListener('submit', nffHandler);
      cObs.disconnect();
      revealObs.disconnect();
    };
  }, []);

  return null;
}
