import type { Metadata, Viewport } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';
import '../styles/globals.css';
import SiteShell from '@/components/layout/SiteShell';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.luminarynexusconsultants.com'),
  title: { default: 'LuminaryNexus Consultants – Compliance & Governance Advisory', template: '%s | LuminaryNexus Consultants' },
  description: 'AML/CFT compliance, regulatory advisory, accounting, IT, and corporate governance services for regulated businesses.',
  keywords: ['AML CFT compliance advisory Pakistan', 'regulatory compliance consulting Islamabad', 'corporate governance consulting Pakistan'],
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: { type: 'website', siteName: 'LuminaryNexus Consultants', locale: 'en_PK', title: 'LuminaryNexus Consultants – Compliance & Governance Advisory', description: 'Specialist advisory for regulated businesses across Pakistan, GCC, and international markets.', url: '/' },
  twitter: { card: 'summary_large_image', title: 'LuminaryNexus Consultants – Compliance & Governance Advisory', description: 'AML/CFT compliance, audit, accounting, IT, and governance advisory.' },
  icons: { icon: [{ url: '/images/favicon-32.png', sizes: '32x32' }, { url: '/images/favicon-16.jpeg', sizes: '16x16' }], apple: '/images/apple-touch-icon.png' },
};

export const viewport: Viewport = { themeColor: '#0f766e' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>;
}
