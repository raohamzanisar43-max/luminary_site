import type { Metadata } from 'next';
import About from '@/legacy-pages/About';
export const metadata: Metadata = { title: 'About Us', description: 'Meet LuminaryNexus Consultants and our advisory leadership team.', alternates: { canonical: '/about' } };
export default function Page() { return <About />; }
