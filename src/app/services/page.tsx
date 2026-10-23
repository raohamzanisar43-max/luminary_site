import type { Metadata } from 'next';
import Services from '@/legacy-pages/Services';
export const metadata: Metadata = { title: 'Services', description: 'Integrated compliance, AML/CFT, accounting, IT, governance, and operations advisory.', alternates: { canonical: '/services' } };
export default function Page() { return <Services />; }
