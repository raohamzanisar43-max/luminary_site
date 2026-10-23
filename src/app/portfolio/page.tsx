import type { Metadata } from 'next';
import Portfolio from '@/legacy-pages/Portfolio';
export const metadata: Metadata = { title: 'Case Studies', description: 'Selected compliance, accounting, governance, operations, and IT advisory engagements.', alternates: { canonical: '/portfolio' } };
export default function Page() { return <Portfolio />; }
