import type { Metadata } from 'next';
import Contact from '@/legacy-pages/Contact';
export const metadata: Metadata = { title: 'Contact', description: 'Book a consultation with LuminaryNexus Consultants.', alternates: { canonical: '/contact' } };
export default function Page() { return <Contact />; }
