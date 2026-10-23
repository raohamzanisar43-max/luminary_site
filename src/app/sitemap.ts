import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap { const base = 'https://www.luminarynexusconsultants.com'; return ['', '/about', '/services', '/industries', '/portfolio', '/blogs', '/contact'].map((path) => ({ url: `${base}${path}`, lastModified: new Date('2026-01-01') })); }
